(function(){
  'use strict';

  function safeStr(v){ return (v === null || v === undefined) ? '' : String(v); }
  function stripProto(url){
    const u = safeStr(url).trim();
    if (!u) return '';
    return u.replace(/^https?:\/\//i,'').replace(/^www\./i,'');
  }
  function normalizeMapsNoProto(url){
    const u = stripProto(url);
    if (!u) return '';
    const m = u.match(/maps\?q=([-0-9.]+)\s*,\s*([-0-9.]+)/i);
    if (m) return `maps.google.com/?q=${m[1]},${m[2]}`;
    if (u.toLowerCase().startsWith('maps.google.com') || u.toLowerCase().startsWith('maps.app.goo.gl')) return u;
    return u;
  }
  function fmtUsd(n){
    return `$${Number(n||0).toFixed(2)}`;
  }
  function fmtBs(n){
    return `Bs. ${Number(n||0).toFixed(2)}`;
  }

  function fmtBsPretty(n){
    const num = Number(n || 0);
    if (!Number.isFinite(num)) return 'Bs. 0,00';
    return 'Bs. ' + num.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function fmtRate(n){
    const v = Number(n||0);
    return v ? `Bs. ${v.toFixed(2)}` : 'N/A';
  }
  function normalizeText(t){
    return safeStr(t)
      .replace(/\r\n/g,'\n')
      .replace(/[ \t]+\n/g,'\n')
      .replace(/^\t+/gm, '')
      .trim();
  }
  function paymentIsBolivares(id, label){
    const pid = safeStr(id).toLowerCase();
    const p = safeStr(label);
    return pid === 'pago_movil' || pid === 'transferencia' || pid === 'transferencia_bancaria' ||
      /pago\s*m[oó]vil/i.test(p) || /transferencia\s*bancaria/i.test(p);
  }
  function paymentIsCashDivisas(id, label){
    const pid = safeStr(id).toLowerCase();
    const p = safeStr(label);
    return pid === 'efectivo_divisas' || (/efectivo/i.test(p) && /(divisa|divisas|usd|\$|eur|€)/i.test(p));
  }

  function buildMessage(data){
    const method = safeStr(data.shippingMethod).toLowerCase();
    const label  = safeStr(data.shippingLabel).toLowerCase();

    const isDelivery = method.includes('delivery') || label.includes('delivery');
    const isPickup   = method.includes('pickup')   || label.includes('pickup') || label.includes('retiro');
    const isNational = method.includes('national') || label.includes('nacional') || label.includes('envio');

    const ticket = safeStr(data.ticket||'N/A');
    const shipLabel = safeStr(data.shippingLabel||'').toUpperCase();
    const client = safeStr(data.clientName||'—');
    const doc = safeStr(data.doc||'—');
    const phone = safeStr(data.phone||'—');
    const email = safeStr(data.email||'—');
    const products = safeStr(data.productsLines||'—');

    const totalProducts = fmtUsd(data.totalProductsUsd);
    const discount = Number(data.discountUsd||0) === 0 ? 'N/A' : fmtUsd(data.discountUsd);
    const tax = Number(data.taxUsd||0) === 0 ? 'N/A' : fmtUsd(data.taxUsd);
    const totalPay = fmtUsd(data.totalPayUsd);
    const payment = safeStr(data.paymentLabel||'—');
    const proof = stripProto(data.proofLink)||'N/A';

    const paymentMethodIdGlobal = safeStr(data.paymentMethodId||'').toLowerCase();
    const showRateBlockGlobal = paymentIsBolivares(paymentMethodIdGlobal, payment);
    const isCashDivisasProduct = paymentIsCashDivisas(paymentMethodIdGlobal, payment);
    const rateUsedGlobal = Number(data.rateUsed || data.binanceRate || data.exchangeRate || data.rate || 0);
    const totalPayBsGlobal = (Number(data.totalPayUsd||0) * rateUsedGlobal);

    if (isDelivery){
      const delCostNum = Number(data.deliveryCostUsd||0);
      const hasDeliveryCost = delCostNum > 0.009;
      const delCostDisp = hasDeliveryCost ? fmtUsd(delCostNum) : '*GRATIS*';
      const delPay  = safeStr(data.deliveryPaymentLabel||'N/A');
      const delPayId = safeStr(data.deliveryPaymentId||'').trim().toLowerCase();
      const delProof = stripProto(data.deliveryProofLink)||'N/A';
      const deliveryPaidInBolivares = paymentIsBolivares(delPayId, delPay);
      const deliveryIsCash = paymentIsCashDivisas(delPayId, delPay);
      const deliveryRateUsed = Number(data.deliveryRateUsed || 0);
      const deliveryPayableBs = Number(data.deliveryPayableBs || (deliveryPaidInBolivares ? (delCostNum * deliveryRateUsed) : 0) || 0);
      const lat = (data.deliveryLat ?? data.deliveryLatitude ?? data.lat ?? data.latitude);
      const lng = (data.deliveryLng ?? data.deliveryLongitude ?? data.lng ?? data.longitude);
      const mapUrlFallback = (lat !== null && lat !== undefined && lng !== null && lng !== undefined)
        ? `maps.google.com/?q=${lat},${lng}`
        : '';
      const map = normalizeMapsNoProto(data.deliveryMapUrl || mapUrlFallback) || safeStr(data.deliveryAddressText||'').trim() || 'N/A';

      const productOnlyUsd = Math.max(0, Number(data.totalPayUsd||0) - delCostNum);
      const productCashAmt = Number(data.productCashAmountUsd||0);
      const deliveryCashAmt = Number(data.deliveryCashAmountUsd||0);
      const bothCash = isCashDivisasProduct && deliveryIsCash && hasDeliveryCost;

      let cashInfo = '';
      if (isCashDivisasProduct){
        const cashBaseUsd = bothCash ? Number(data.totalPayUsd||0) : productOnlyUsd;
        const cashAmt = bothCash ? deliveryCashAmt : productCashAmt;
        const needsChange = Number.isFinite(cashAmt) && cashAmt > 0 && (cashAmt - cashBaseUsd) > 0.009;
        cashInfo = `*¿Necesita Cambio?:* ${needsChange ? 'SI' : 'NO'}\n` + (needsChange
          ? `*¿Con cuanto cancelara?:* ${fmtUsd(cashAmt)}\n*Monto a dar de cambio:* ${fmtUsd(cashAmt - cashBaseUsd)}\n`
          : '');
      }

      let deliveryCashInfo = '';
      if (!bothCash && deliveryIsCash && hasDeliveryCost){
        const needsChange = Number.isFinite(deliveryCashAmt) && deliveryCashAmt > 0 && (deliveryCashAmt - delCostNum) > 0.009;
        deliveryCashInfo = `*¿Necesita Cambio?:* ${needsChange ? 'SI' : 'NO'}\n` + (needsChange
          ? `*¿Con cuanto cancelara?:* ${fmtUsd(deliveryCashAmt)}\n*Monto a dar de cambio:* ${fmtUsd(deliveryCashAmt - delCostNum)}\n`
          : '');
      }

      const totalLine = (function(){
        if (showRateBlockGlobal){
          const productBs = fmtBsPretty(totalPayBsGlobal);
          if (!hasDeliveryCost) return `*Tasa referencial:* ${fmtRate(rateUsedGlobal)}\n*Total a Pagar:* ${fmtUsd(productOnlyUsd)} (${productBs}) + *GRATIS* (Delivery)`;
          if (deliveryPaidInBolivares) return `*Tasa referencial:* ${fmtRate(rateUsedGlobal)}\n*Total a Pagar:* ${fmtUsd(productOnlyUsd)} (${productBs}) + ${fmtUsd(delCostNum)} (${fmtBsPretty(deliveryPayableBs)}) (Delivery)`;
          return `*Tasa referencial:* ${fmtRate(rateUsedGlobal)}\n*Total a Pagar:* ${fmtUsd(productOnlyUsd)} (${productBs}) + ${fmtUsd(delCostNum)} (Delivery)`;
        }
        if (!hasDeliveryCost) return `*Total a Pagar:* ${fmtUsd(productOnlyUsd)} + *GRATIS* (Delivery)`;
        if (deliveryPaidInBolivares) return `*Total a Pagar:* ${fmtUsd(productOnlyUsd)} + ${fmtUsd(delCostNum)} (${fmtBsPretty(deliveryPayableBs)}) (Delivery)`;
        return `*Total a Pagar:* ${fmtUsd(productOnlyUsd)} + ${fmtUsd(delCostNum)} (Delivery)`;
      })();

      let deliveryLines = `*Costo (Delivery):* ${bothCash ? `*${fmtUsd(delCostNum)}*` : delCostDisp}\n`;
      if (deliveryPaidInBolivares && hasDeliveryCost){
        deliveryLines += `*Tasa referencial:* ${fmtRate(rateUsedGlobal)}\n`;
      }
      if (hasDeliveryCost && !(!deliveryIsCash && !deliveryPaidInBolivares && !isCashDivisasProduct && false)) {
        // noop anchor to preserve simple branch edits below
      }
      if (hasDeliveryCost){
        if (!( !deliveryIsCash && !deliveryPaidInBolivares && !isCashDivisasProduct && false )) {
          // method line rules
        }
        if (!( !hasDeliveryCost )) {
          if (deliveryPaidInBolivares || deliveryIsCash || !isCashDivisasProduct) {
            deliveryLines += `*Método de pago (Delivery):* ${delPay}\n`;
          }
        }
        if (!isCashDivisasProduct && !deliveryIsCash && !deliveryPaidInBolivares){
          deliveryLines += `*Comprobante (Delivery):* ${delProof}\n`;
        } else if (!isCashDivisasProduct && deliveryPaidInBolivares){
          deliveryLines += `*Comprobante (Delivery):* ${delProof}\n`;
        }
      }
      if (deliveryPaidInBolivares && hasDeliveryCost){
        deliveryLines = `*Costo (Delivery):* ${fmtUsd(delCostNum)} / ${fmtBsPretty(deliveryPayableBs)}\n` +
          `*Tasa referencial:* ${fmtRate(deliveryRateUsed)}\n` +
          `*Método de pago (Delivery):* ${delPay}\n` +
          ((!isCashDivisasProduct) ? `*Comprobante (Delivery):* ${delProof}\n` : '') +
          `*Ubicación (Delivery):* ${map}\n`;
      } else {
        deliveryLines += `*Ubicación (Delivery):* ${map}\n`;
        if (deliveryCashInfo) deliveryLines += deliveryCashInfo;
      }
      if (!deliveryPaidInBolivares && hasDeliveryCost && !deliveryIsCash && !isCashDivisasProduct){
        // ensure location before proof already handled? desired is proof before location for non-cash product
        deliveryLines = `*Costo (Delivery):* ${delCostDisp}\n*Método de pago (Delivery):* ${delPay}\n*Comprobante (Delivery):* ${delProof}\n*Ubicación (Delivery):* ${map}\n`;
      }
      if (!deliveryPaidInBolivares && hasDeliveryCost && deliveryIsCash && !isCashDivisasProduct){
        deliveryLines = `*Costo (Delivery):* ${delCostDisp}\n*Método de pago (Delivery):* ${delPay}\n*Ubicación (Delivery):* ${map}\n${deliveryCashInfo}`;
      }
      if (!deliveryPaidInBolivares && hasDeliveryCost && deliveryIsCash && isCashDivisasProduct){
        deliveryLines = `*Costo (Delivery):* ${bothCash ? `*${fmtUsd(delCostNum)}*` : delCostDisp}\n*Método de pago (Delivery):* ${delPay}\n*Ubicación (Delivery):* ${map}\n`;
      }
      if (!deliveryPaidInBolivares && hasDeliveryCost && !deliveryIsCash && isCashDivisasProduct){
        deliveryLines = `*Costo (Delivery):* ${delCostDisp}\n*Método de pago (Delivery):* ${delPay}\n*Ubicación (Delivery):* ${map}\n`;
      }
      if (!hasDeliveryCost){
        deliveryLines = `*Costo (Delivery):* *GRATIS*\n*Ubicación (Delivery):* ${map}\n`;
      }

      return normalizeText(`*Confirmación de Orden – #Ticket ${ticket} – (${shipLabel||'DELIVERY'})*

---------------------- *Datos Personales* -------------------------

*Cliente:* ${client}
*Documento:* ${doc}
*Teléfono:* ${phone}
*Correo electrónico:* ${email}

---------------------------- *Productos* -------------------------------

${products}

------------------- *Resumen del Pedido* -----------------------

*Total de Productos:* ${totalProducts}
*Descuento:* ${discount}
*Impuesto:* ${tax}
${totalLine}

------------------------ *Datos del Pago* ---------------------------

*Método de pago:* ${payment}
${cashInfo}${isCashDivisasProduct ? '' : `*Enlace de Comprobante:* ${proof}\n`}
---------------------- *Datos del Delivery* ------------------------

${deliveryLines}
------------------- *Proceso de validación* ---------------------

*1.* El pago será verificado por nuestro equipo.
*2.* Se coordinará la entrega.
*3.* El cliente será contactado para la confirmación final.

*Agradecemos su preferencia.*
*Quedamos atentos a cualquier consulta.*`);
    }

    if (isPickup){
      const pickupMap = normalizeMapsNoProto(data.pickupMapUrl)||stripProto(data.pickupMapUrl)||'N/A';
      const sched = safeStr(data.pickupSchedule||'N/A')
        .replace(/Antimano/g, 'Antímano')
        .replace(/etc\*/g, 'etc.*');
      const paymentMethodId = safeStr(data.paymentMethodId||'').toLowerCase();
      const isCashDivisas = paymentIsCashDivisas(paymentMethodId, payment);
      const showRateBlock = paymentIsBolivares(paymentMethodId, payment);
      const rateUsed = Number(data.rateUsed || data.binanceRate || data.exchangeRate || data.rate || 0);
      const totalPayBs = (Number(data.totalPayUsd||0) * rateUsed);
      const weekendNote = 'En caso de ser *FIN DE SEMANA* y deseen *RETIRARLO PERSONAMENTE* en la dirección mencionada pueden venir a buscarlo pero solamente se entregará el producto, dado que la oficina estará cerrada para probar el producto.';

      return normalizeText(`*Confirmación de Orden – #Ticket ${ticket} – (${shipLabel||'PICKUP'})*

---------------------- *Datos Personales* -------------------------

*Cliente:* ${client}
*Documento:* ${doc}
*Teléfono:* ${phone}
*Correo electrónico:* ${email}

---------------------------- *Productos* -------------------------------

${products}

------------------- *Resumen del Pedido* -----------------------

*Total de Productos:* ${totalProducts}
*Descuento:* ${discount}
*Impuesto:* ${tax}
${showRateBlock ? `*Tasa referencial:* ${fmtRate(rateUsed)}\n*Total a Pagar:* ${totalPay} / ${fmtBs(totalPayBs)}\n` : `*Total a Pagar:* ${totalPay}\n`}
------------------------ *Datos del Pago* ---------------------------

*Método de pago:* ${payment}
${isCashDivisas ? '' : `*Enlace de Comprobante:* ${proof}\n`}
---------------- *Datos de Retiro (Pickup)* --------------------

*Ubicación:* ${pickupMap}

*Horario:* ${sched}

${weekendNote}

------------------- *Proceso de validación* ---------------------

*1.* El pago será verificado por nuestro equipo.
*2.* Se coordinará el retiro.
*3.* El cliente será contactado para la confirmación final.

*Agradecemos su preferencia.*
*Quedamos atentos a cualquier consulta.*`);
    }

    if (isNational){
      return normalizeText(`*Confirmación de Orden – #Ticket ${ticket} – (${shipLabel||'ENVÍO NACIONAL'})*

---------------------- *Datos Personales* -------------------------

*Cliente:* ${client}
*Documento:* ${doc}
*Teléfono:* ${phone}
*Correo electrónico:* ${email}

---------------------------- *Productos* -------------------------------

${products}

------------------- *Resumen del Pedido* -----------------------

*Total de Productos:* ${totalProducts}
*Descuento:* ${discount}
*Impuesto:* ${tax}
${showRateBlockGlobal ? `*Tasa referencial:* ${fmtRate(rateUsedGlobal)}\n*Total a Pagar:* ${totalPay} / ${fmtBs(totalPayBsGlobal)}\n` : `*Total a Pagar:* ${totalPay}\n`}
------------------------ *Datos del Pago* ---------------------------

*Método de pago:* ${payment}
${isCashDivisasProduct ? '' : `*Enlace de Comprobante:* ${proof}\n`}
----------------- *Datos del Envío Nacional* -------------------

*Empresa:* ${safeStr(data.nationalCarrierName||data.nationalCarrier||data.carrierName||data.carrier||data.shippingCompany||'N/A')}
*Estado:* ${safeStr(data.nationalState||data.state||data.shippingState||data.estado||'N/A')}
*Agencia:* ${safeStr(data.nationalAgencyName||data.agencyName||data.agency||data.shippingAgency||data.agencia||'N/A')}
*Código:* ${safeStr(data.nationalAgencyCode||data.agencyCode||data.code||data.codigo||'N/A')}
*Dirección:* ${safeStr(data.nationalAgencyAddress||data.agencyAddress||data.address||data.shippingAddress||data.direccion||'N/A')}

------------------- *Proceso de validación* ---------------------

*1.* El pago será verificado por nuestro equipo.
*2.* Se coordinará el envío.
*3.* El cliente será contactado para la confirmación final.

*Agradecemos su preferencia.*
*Quedamos atentos a cualquier consulta.*`);
    }

    return 'Formato no soportado';
  }

  function toWaLink(phone, text){
    const digits = safeStr(phone).replace(/\D/g,'');
    return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
  }

  window.PCBWhatsAppTemplate = { buildMessage, toWaLink };
})();
