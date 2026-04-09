/**
 * order-verification-modals-lazy.js
 * Inyecta los modales de Delivery/Confirmación/Pago SOLO cuando se necesiten.
 */
(function(){
  'use strict';
  const TEMPLATES = {
    deliveryModal: `<div aria-hidden="true" class="pc-modal" id="deliveryModal">
<div aria-labelledby="deliveryModalTitle" aria-modal="true" class="pc-modal-dialog" role="dialog">
<div class="pc-modal-header">
<div class="pc-modal-title" id="deliveryModalTitle">
<i class="fas fa-map-marker-alt"></i>
<span>Elegir ubicación de Delivery</span>
</div>
<button aria-label="Cerrar" class="pc-modal-close" id="deliveryModalClose" type="button">×</button>
</div>
<div class="pc-modal-body">
<div class="pc-info-box">
<i class="fas fa-circle-info"></i>
<div>
          Indicanos donde deseas que entreguemos tu pedido. Selecciona el punto exacto en el mapa para calcular el costo del <strong>DELIVERY</strong>.
        </div>
</div>
<div class="pc-map" id="deliveryMap"></div>
<div class="pc-delivery-stats">
<div><strong>Ubicación:</strong> <span id="deliveryCoords">—</span></div>
<div><strong>Distancia aprox.:</strong> <span id="deliveryDistance">—</span></div>
<div><strong>Delivery:</strong> <span id="deliveryCostText">—</span></div>
<div class="pc-out-range" id="deliveryOutOfRange" style="display:none; margin-top:6px;">
          Nuestro servicio no esta disponible en esta zona
        </div>
</div>
</div>
<div class="pc-modal-footer">
<button class="btn btn-secondary" id="deliveryCancelBtn" type="button">Cancelar</button>
<button class="btn btn-primary" id="deliveryApplyBtn" type="button">Aplicar ubicación</button>
</div>
</div>
</div>`,
    confirmDeliveryModal: `<div aria-hidden="true" class="pc-modal" id="confirmDeliveryModal">
<div aria-labelledby="confirmDeliveryModalTitle" aria-modal="true" class="pc-modal-dialog pc-modal-dialog-sm" role="dialog">
<div class="pc-modal-header">
<div class="pc-modal-title" id="confirmDeliveryModalTitle">
<i class="fas fa-triangle-exclamation"></i>
<span>Confirmar ubicación</span>
</div>
<button aria-label="Cerrar" class="pc-modal-close" id="confirmDeliveryModalClose" type="button">×</button>
</div>
<div class="pc-modal-body">
<p class="pc-confirm-text">¿Deseas confirmar esta ubicación para el <strong>DELIVERY</strong>?</p>
<div class="pc-confirm-box">
<div><strong>Ubicación:</strong> <span id="confirmDeliveryLocation">—</span></div>
<div><strong>Delivery:</strong> <span id="confirmDeliveryCost">—</span></div>
</div>
</div>
<div class="pc-modal-footer">
<button class="btn btn-secondary" id="confirmDeliveryCancelBtn" type="button">Cancelar</button>
<button class="btn btn-primary" id="confirmDeliveryConfirmBtn" type="button">Confirmar</button>
</div>
</div>
</div>`,
    deliveryPaymentModal: `<div aria-hidden="true" class="pc-modal" id="deliveryPaymentModal">
<div aria-labelledby="deliveryPaymentModalTitle" aria-modal="true" class="pc-modal-dialog pc-modal-dialog-sm" role="dialog">
<div class="pc-modal-header">
<div class="pc-modal-title" id="deliveryPaymentModalTitle">
<i class="fas fa-credit-card"></i>
<span>Método de pago (Delivery)</span>
</div>
<button aria-label="Cerrar" class="pc-modal-close" id="deliveryPaymentModalClose" type="button">×</button>
</div>
<div class="pc-modal-body">
<!-- Paso 1: lista de métodos (igual que el original) -->
<div id="deliveryPaymentMethodsContainer"></div>
<!-- Paso 2: detalles del método seleccionado (QR + datos + comprobante) -->
<div class="payment-details is-hidden" id="deliveryPaymentDetails"></div>
<div class="pc-geo-error" id="deliveryPaymentError" style="display:none;"></div>
</div>
<div class="pc-modal-footer">
<button class="btn btn-secondary" id="deliveryPaymentCancelBtn" type="button">Cancelar</button>
<button class="btn btn-primary" id="deliveryPaymentConfirmBtn" type="button">Confirmar</button>
</div>
</div>
</div>`,
    deliveryCashInfoModal: `<div aria-hidden="true" class="pc-modal" id="deliveryCashInfoModal">
<div aria-labelledby="deliveryCashInfoModalTitle" aria-modal="true" class="pc-modal-dialog pc-modal-dialog-sm" role="dialog">
<div class="pc-modal-header">
<div class="pc-modal-title" id="deliveryCashInfoModalTitle">
<i class="fas fa-circle-info"></i>
<span>Pago en Efectivo (USD / EUR)</span>
</div>
</div>
<div class="pc-modal-body">
<div class="alert alert-warning" id="deliveryCashInfoProductPayAlert" role="alert" style="margin:0 0 10px; font-weight:normal;">
  Hemos registrado tu pago del producto en: <b id="deliveryCashProductMethodLabel">—</b>, sera confirmado al finalizar tu pedido.
</div>
	<div class="alert alert-info" id="deliveryCashInfoDeliveryNote" role="alert" style="margin:0 0 12px; font-weight:normal;">
	        Indicanos la cantidad exacta que cancelaras en el momento de tu entrega.
	      </div>
<img alt="Efectivo" height="256" src="/assets/images/payment-methods/cash.png" style="display:block; margin: 10px auto 14px; max-width:100%; height:auto;" width="256"/>
<div style="text-align:center; margin: 0 0 10px;">
<div style="font-weight:700;">Monto total a pagar:</div>
<div id="deliveryCashTotalToPay" style="font-size:16px; margin-top:4px; color:#16a34a; font-weight: bold;">—</div>
</div>
<table class="pcpp-picker-table" style="margin-top: 12px;">
<tbody id="deliveryCashInfoTbody">
<tr id="deliveryCashAmountRow">
<td>Monto con el que vas a pagar:</td>
<td style="text-align:right;">
<input class="pcpp-permalink-input" id="deliveryCashAmountInput" inputmode="numeric" maxlength="4" pattern="[0-9]*" style="max-width: 220px; text-align:center;" type="text"/>
</td>
</tr>
<!-- Filas dinámicas (p.ej. Cambio estimado) se insertan aquí desde JS -->
</tbody>
</table>
<div class="alert alert-warning" id="deliveryCashInfoError" role="alert" style="display:none; margin: 10px 0 0;"></div>
</div>
<div class="pc-modal-footer">
<button aria-disabled="true" class="btn btn-primary is-disabled" id="deliveryCashInfoModalOkBtn" type="button">Entendido</button>
</div>
</div>
</div>`,

    // Modal INDEPENDIENTE: cuando el PRODUCTO se paga en efectivo (USD/EUR)
    // pero el DELIVERY se paga con un método distinto a efectivo.
    // Este modal SOLO calcula cambio del producto (sin incluir delivery).
    productCashInfoModal: `<div aria-hidden="true" class="pc-modal" id="productCashInfoModal">
<div aria-labelledby="productCashInfoModalTitle" aria-modal="true" class="pc-modal-dialog pc-modal-dialog-sm" role="dialog">
<div class="pc-modal-header">
<div class="pc-modal-title" id="productCashInfoModalTitle">
<i class="fas fa-circle-info"></i>
<span>Pago en Efectivo (USD / EUR)</span>
</div>
</div>
<div class="pc-modal-body">
<div class="alert alert-warning" id="productCashInfoDynamicAlert" role="alert" style="margin:0 0 10px; font-weight:normal;">
  Hemos registrado tu pago del delivery en: <b id="productCashDeliveryMethodLabel">—</b>, sera confirmado al finalizar tu pedido.
</div>

<div class="alert alert-info" id="productCashInfoDynamicAlert2" role="alert" style="margin:0 0 12px; font-weight:normal;">
  Por favor Indicanos la cantidad exacta que cancelaras en tu pedido en <b id="productCashProductMethodLabel">—</b> en el momento de tu entrega.
</div>
<img alt="Efectivo" height="256" src="/assets/images/payment-methods/cash.png" style="display:block; margin: 10px auto 14px; max-width:100%; height:auto;" width="256"/>
<div style="text-align:center; margin: 0 0 10px;">
<div style="font-weight:700;">Monto total a pagar:</div>
<div id="productCashTotalToPay" style="font-size:16px; margin-top:4px; color:#16a34a; font-weight: bold;">—</div>
</div>
<table class="pcpp-picker-table" style="margin-top: 12px;">
<tbody id="productCashInfoTbody">
<tr id="productCashAmountRow">
<td>Monto con el que vas a pagar:</td>
<td style="text-align:right;">
<input class="pcpp-permalink-input" id="productCashAmountInput" inputmode="numeric" maxlength="4" pattern="[0-9]*" style="max-width: 220px; text-align:center;" type="text"/>
</td>
</tr>
<!-- Filas dinámicas (p.ej. Cambio estimado) se insertan aquí desde JS -->
</tbody>
</table>
<div class="alert alert-warning" id="productCashInfoError" role="alert" style="display:none; margin: 10px 0 0;"></div>
</div>
<div class="pc-modal-footer">
<button aria-disabled="true" class="btn btn-primary is-disabled" id="productCashInfoModalOkBtn" type="button">Entendido</button>
</div>
</div>
</div>`,
  };
function ensure(id){
    if (!id || document.getElementById(id)) return;
    const html = TEMPLATES[id];
    if (!html) return;
    document.body.insertAdjacentHTML('beforeend', html);
  }

  // Inyecta todos (por si un script los necesita todos en init)

  function destroy(id){
    try {
      const el = document.getElementById(id);
      if (el) el.remove();
    } catch (_) {}
  }

  function destroyAll(){
    try { Object.keys(TEMPLATES).forEach(destroy); } catch (_) {}
  }

  function ensureAll(){
    Object.keys(TEMPLATES).forEach(ensure);
  }

  window.PCBOrderVerificationModals = { ensure, ensureAll, destroy, destroyAll };
})();
