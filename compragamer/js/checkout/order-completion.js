// order-completion.js - Resumen del pedido + envío a WhatsApp


(function(){
  // ===== Guard: impedir acceso directo a order-completion sin flujo válido =====
  function __getQS(name){
    try { return new URLSearchParams(window.location.search || '').get(name) || ''; } catch(_) { return ''; }
  }
  function __lsGet(k){ try { return (localStorage.getItem(k) || '').toString(); } catch(_) { return ''; } }
  function __lsDel(k){ try { localStorage.removeItem(k); } catch(_) {} }
  function __ssGet(k){ try { return (sessionStorage.getItem(k) || '').toString(); } catch(_) { return ''; } }
  function __ssDel(k){ try { sessionStorage.removeItem(k); } catch(_) {} }
  function __ssSet(k,v){ try { sessionStorage.setItem(k, String(v)); } catch(_) {} }

  
  // ===== Single-tab lock (evita abrir completion en otra pestaña/ventana) =====
  (function __singleTabLock(){
    const TAB_ID_KEY = 'pcbuilder_completion_tab_id';
    const LOCK_KEY = 'pcbuilder_completion_lock';
    const now = () => Date.now();

    const tabId = (function(){
      const prev = __ssGet(TAB_ID_KEY);
      if (prev) return prev;
      const id = 'tab-' + now() + '-' + Math.random().toString(16).slice(2);
      __ssSet(TAB_ID_KEY, id);
      return id;
    })();

    function readLock(){
      try { return JSON.parse(__lsGet(LOCK_KEY) || '{}'); } catch(_) { return {}; }
    }
    function writeLock(obj){
      try { localStorage.setItem(LOCK_KEY, JSON.stringify(obj)); } catch(_) {}
    }
    function otherActive(lock){
      if (!lock || !lock.tabId || lock.tabId === tabId) return false;
      const age = now() - Number(lock.ts || 0);
      return age >= 0 && age < 7000; // 7s ventana de actividad
    }

    const existing = readLock();
    if (otherActive(existing)) {
      // Ya hay otra pestaña con completion abierta
      try { alert('Esta página ya está abierta en otra pestaña.'); } catch(_) {}
      window.location.replace('/compragamer/carrito/');
      return;
    }

    // Adquirir lock
    writeLock({ tabId, ts: now() });

    // Heartbeat
    const hb = setInterval(() => {
      const cur = readLock();
      if (cur && cur.tabId && cur.tabId !== tabId) {
        clearInterval(hb);
        try { alert('Esta página ya está abierta en otra pestaña.'); } catch(_) {}
        window.location.replace('/compragamer/carrito/');
        return;
      }
      writeLock({ tabId, ts: now() });
    }, 2000);

    // Liberar lock al cerrar
    window.addEventListener('beforeunload', () => {
      try {
        const cur = readLock();
        if (cur && cur.tabId === tabId) localStorage.removeItem(LOCK_KEY);
      } catch(_) {}
    });
  })();

(function __guardCompletion(){
    // 1) Requiere token si existe (flow normal desde payment-method)
    const tokenQS = __getQS('token');
    const tokenSS = __ssGet('pcbuilder_completion_token');
    const confirmed = __lsGet('pcbuilder_order_confirmed') === '1';
    const step = __lsGet('pcbuilder_checkout_step');

    // 2) Datos mínimos para considerar "hay pedido"
    const cartRaw = __lsGet((window.STORAGE_KEYS && STORAGE_KEYS.CART) ? STORAGE_KEYS.CART : 'compragamer_cart');
    const hasCart = !!cartRaw && cartRaw.length > 2;
    const shipping = (__lsGet('pcbuilder_shipping_method') || '').trim();
    const payFinal = (__lsGet('pcbuilder_payment_method_final') || __lsGet('pcbuilder_payment_method') || '').trim();
    const payableUSD = Number(__lsGet('pcbuilder_payable_usd') || 0);

    const hasMinimum = (!!shipping && !!payFinal) || payableUSD > 0 || hasCart;

    // Si se entra sin nada, redirigir
    if (!hasMinimum) {
      try { __lsDel('pcbuilder_order_confirmed'); __lsDel('pcbuilder_order_confirmed_at'); } catch(_) {}
      window.location.replace('/compragamer/carrito/');
      return;
    }

    // Si venimos del flujo normal, debe coincidir el token (sessionStorage) y es one-time.
// Además, bloquear recarga/reuso: si no hay token válido, se redirige.
if (confirmed) {
  const nav = (function(){
    try {
      const e = performance.getEntriesByType && performance.getEntriesByType('navigation');
      if (e && e[0] && e[0].type) return e[0].type;
    } catch(_) {}
    try { return (performance && performance.navigation && performance.navigation.type === 1) ? 'reload' : 'navigate'; } catch(_) {}
    return 'navigate';
  })();

  // Si se recarga, bloquear (redirigir)
  if (nav === 'reload') {
    __ssDel('pcbuilder_completion_token');
    window.location.replace('/compragamer/carrito/');
    return;
  }

  if (tokenQS && tokenSS && tokenSS === tokenQS) {
    // Consumir token (one-time) para impedir reuso en otra ventana/pestaña
    __ssDel('pcbuilder_completion_token');
    __ssSet('pcbuilder_completion_token_consumed', '1');
    try { window.history.replaceState({}, document.title, window.location.pathname); } catch(_) {}
    return;
  }

  // Si ya fue consumido o no coincide: bloquear
  window.location.replace('/compragamer/carrito/');
  return;
}

// Si no está confirmado, no permitir entrar directo
    if (!confirmed) {
      window.location.replace('/compragamer/carrito/');
      return;
    }
  })();


  function moneyVES(value){
    const n = Number(value || 0);
    const formatted = new Intl.NumberFormat('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
    return `Bs ${formatted}`;
  }

  function moneyUSD(n){
    const num = Number(n || 0);
    return `$${num.toFixed(2)} USD`;
  }

  function safeGet(key){
    try {
      const lv = localStorage.getItem(key);
      if (lv !== null && lv !== undefined && String(lv) !== '') return String(lv);
    } catch(_) {}
    try {
      const sv = sessionStorage.getItem(key);
      if (sv !== null && sv !== undefined) return String(sv);
    } catch(_) {}
    return '';
  }


  // --- Namespacing por método de envío (para separar flujos por shipping) ---
  const __SHIPPING = (function(){
    try {
      return ((localStorage.getItem('pcbuilder_shipping_method') || sessionStorage.getItem('pcbuilder_shipping_method') || 'pickup')).trim() || 'pickup';
    } catch (_) {
      try { return (sessionStorage.getItem('pcbuilder_shipping_method') || 'pickup').trim() || 'pickup'; } catch(__) {}
      return 'pickup';
    }
  })();

  const __nsKey = (baseKey) => `${baseKey}_${__SHIPPING}`;

  const safeGetNS = (baseKey) => {
    const v = safeGet(__nsKey(baseKey));
    if (v) return v;
    // Compatibilidad: pickup lee también claves legacy
    if (__SHIPPING === 'pickup') return safeGet(baseKey);
    return '';
  };

  const __cashBillKey = () => (__SHIPPING === 'pickup')
    ? 'pcbuilder_cash_bill_images'
    : `pcbuilder_cash_bill_images_${__SHIPPING}`;

  const __paymentProofKey = (methodId) => (__SHIPPING === 'pickup')
    ? `pcbuilder_payment_proof_image_${methodId}`
    : `pcbuilder_payment_proof_image_${__SHIPPING}_${methodId}`;

  const __paymentProofGenericKey = () => (__SHIPPING === 'pickup')
    ? 'pcbuilder_payment_proof_image'
    : `pcbuilder_payment_proof_image_${__SHIPPING}`;
  function safeGetJson(key, fallback){
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch(_) {
      return fallback;
    }
  }

  function getShippingMethod(){
    return safeGet('pcbuilder_shipping_method').trim();
  }
  function humanShipping(method){
    if (method === 'pickup') return 'Retiro personal';
    if (method === 'delivery') return 'Delivery';
    if (method === 'national') return 'Envío nacional';
    return '—';
  }
  
  function humanPayment(methodId){
    const id = String(methodId || '').trim();

    if (!id) return '—';

    // IDs conocidos
    if (id === 'efectivo_divisas' || id === 'efectivo_divisas_euros') return 'Efectivo (USD / EUR)';
    if (id === 'pago_movil') return 'Pago Móvil';
    if (id === 'transferencia_bancaria' || id === 'transferencia') return 'Transferencia Bancaria';
    if (id === 'binance_pay') return 'Binance Pay';
    if (id === 'zinli') return 'Zinli';
    if (id === 'airtm') return 'AirTM';

    // Fallback: título guardado
    const title = safeGet('pcbuilder_payment_title').trim();
    if (title) return title;

    return id;
  }

  // Normaliza rutas de imagen para que funcionen en /checkout/*
  function normalizeImageSrc(src) {
    const fallback = 'https://via.placeholder.com/44x44?text=+';
    const v = String(src || '').trim();
    if (!v) return fallback;

    // Si el valor parece ser un ícono FontAwesome (ej: "fa-microchip"),
    // no es válido para <img> y usamos placeholder.
    if (v.startsWith('fa-') || (v.includes('fa-') && !v.includes('/'))) return fallback;

    if (v.startsWith('http://') || v.startsWith('https://')) return v;
    if (v.startsWith('/')) return v;
    return '/' + v.replace(/^\.\/?/, '');
  }

    function getCookie(name){
    try {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const m = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : '';
    } catch(_) { return ''; }
  }

  function setCookie(name, value, days){
    try {
      const d = new Date();
      d.setTime(d.getTime() + (Number(days || 365) * 24 * 60 * 60 * 1000));
      const expires = 'expires=' + d.toUTCString();
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(String(value))}; ${expires}; path=/; SameSite=Lax`;
    } catch(_) {}
  }

async function buildTicket(){
    const k = 'pcbuilder_ticket_seq';

    // 1) Intentar obtener ticket desde el servidor (persistente aunque el navegador borre storage)
    //    Requiere que el sitio esté servido por HTTP/HTTPS y tenga PHP habilitado.
    try {
      const endpoint = new URL('../api/ticket-seq.php', window.location.href).toString();
      const res = await fetch(endpoint, { cache: 'no-store' });
      if (res && res.ok) {
        const data = await res.json().catch(() => null);
        if (data && data.success && Number.isFinite(Number(data.ticket))) {
          const t = Number(data.ticket);

          try { localStorage.setItem(k, String(t)); } catch(_) {}
          setCookie(k, t, 365);

          return t;
        }
      }
    } catch(_) {
      // Si falla (offline / sin PHP / file://), usamos fallback local
    }

    // 2) Fallback local: localStorage + cookie
    let nLocal = 0;
    let nCookie = 0;

    try {
      const raw = localStorage.getItem(k);
      // Soporta valores guardados como "6" o como JSON "\"6\""
      const parsed = raw && raw[0] === '"' ? JSON.parse(raw) : raw;
      nLocal = parseInt(parsed || '0', 10) || 0;
    } catch(_) { nLocal = 0; }

    try { nCookie = parseInt(getCookie(k) || '0', 10) || 0; } catch(_) { nCookie = 0; }

    const next = Math.max(nLocal, nCookie, 0) + 1;

    try { localStorage.setItem(k, String(next)); } catch(_) {}
    setCookie(k, next, 365);

    return next;
  }



  function buildProductsText(items){
    if (!Array.isArray(items) || items.length === 0) return '—';
    const lines = items.map(it => {
      const name = it.name || it.title || 'Producto';
      const qty = Number(it.quantity || 0) || 0;
      const price = Number(it.price || 0) || 0;
      return `* ${name} (x${qty}) - $${price.toFixed(2)}`;
    });
    return lines.join('\n');
  }

  function computeTotals(items){
    let total = 0;
    (items || []).forEach(it => {
      total += (Number(it.price || 0) * Number(it.quantity || 0));
    });
    return total;
  }
  function buildWhatsappMessage(data){
    // Normalizar datos del cliente
    const idType = safeGetNS('pcbuilder_dn_idtype').trim();
    const idNum = safeGetNS('pcbuilder_dn_idnumber').trim();
    const doc = (idType && idNum) ? `${idType}-${idNum}` : safeGetNS('pcbuilder_dn_id').trim();

    const area = safeGetNS('pcbuilder_dn_areacode').trim();
    const phoneNum = safeGetNS('pcbuilder_dn_phonenum').trim();
    const phone = (area && phoneNum) ? `${area}${phoneNum}` : safeGetNS('pcbuilder_dn_phone').trim();

    const email = safeGetNS('pcbuilder_dn_email').trim();

    const payId = (safeGetNS('pcbuilder_payment_method_final') || safeGetNS('pcbuilder_payment_method')).trim();
    const paidInBolivares = (payId === 'pago_movil' || payId === 'transferencia' || payId === 'transferencia_bancaria');
    const rateUsed = Number(safeGetNS('pcbuilder_binance_rate_used') || 0);

    // Delivery (si aplica)
    const deliveryPaymentId = (
      safeGetNS('pcbuilder_delivery_payment_method') ||
      safeGet('pcbuilder_delivery_payment_method') ||
      (function(){ try { return localStorage.getItem('pcbuilder_delivery_payment_method') || ''; } catch(_) { return ''; } })() ||
      (function(){ try { return sessionStorage.getItem('pcbuilder_delivery_payment_method') || ''; } catch(_) { return ''; } })() ||
      ''
    ).trim();
    const deliveryPaidInBolivares = (deliveryPaymentId === 'pago_movil' || deliveryPaymentId === 'transferencia' || deliveryPaymentId === 'transferencia_bancaria');
    const deliveryRateUsed = Number(
      safeGetNS('pcbuilder_delivery_binance_rate_used') ||
      safeGet('pcbuilder_delivery_binance_rate_used') ||
      (function(){ try { return localStorage.getItem('pcbuilder_delivery_binance_rate_used') || ''; } catch(_) { return ''; } })() ||
      (function(){ try { return sessionStorage.getItem('pcbuilder_delivery_binance_rate_used') || ''; } catch(_) { return ''; } })() ||
      0
    );
    const deliveryPayableBs = Number(
      safeGetNS('pcbuilder_delivery_payable_bs') ||
      safeGet('pcbuilder_delivery_payable_bs') ||
      (function(){ try { return localStorage.getItem('pcbuilder_delivery_payable_bs') || ''; } catch(_) { return ''; } })() ||
      (function(){ try { return sessionStorage.getItem('pcbuilder_delivery_payable_bs') || ''; } catch(_) { return ''; } })() ||
      0
    );

    const delLat = safeGetNS('pcbuilder_delivery_lat') || safeGet('pcbuilder_delivery_lat');
    const delLng = safeGetNS('pcbuilder_delivery_lng') || safeGet('pcbuilder_delivery_lng');
    const deliveryMapUrl = (safeGetNS('pcbuilder_delivery_map_url') || safeGet('pcbuilder_delivery_map_url') || (function(){
      const lat = (delLat || '').trim();
      const lng = (delLng || '').trim();
      if(!lat || !lng) return '';
      return `maps.google.com/?q=${lat},${lng}`;
    })());
    const deliveryAddressText = safeGetNS('pcbuilder_delivery_address_text') || safeGet('pcbuilder_delivery_address_text') || safeGetNS('pcbuilder_delivery_address') || safeGet('pcbuilder_delivery_address') || '';

    const deliveryCashAmountUsd = Number(safeGetNS('pcbuilder_delivery_cash_amount') || localStorage.getItem('pcbuilder_delivery_cash_amount') || localStorage.getItem('pcbuilder_delivery_cash_amount_delivery') || 0);

    // Pickup (ubicación fija)
    const pickupName = safeGetNS('pcbuilder_pickup_location_name') || 'Tienda Principal';
    const pickupMapUrl = safeGetNS('pcbuilder_pickup_maps_url') || safeGet('pcbuilder_pickup_maps_url') || '';
    const pickupAddressText = safeGetNS('pcbuilder_pickup_address_text') || safeGet('pcbuilder_pickup_address_text') || '';
    const pickupSchedule = (function(){
      const raw = safeGetNS('pcbuilder_pickup_schedule') || safeGet('pcbuilder_pickup_schedule') || '';
      const weekendNote = 'En caso de ser *FIN DE SEMANA* y deseen *RETIRARLO PERSONAMENTE* en la dirección mencionada pueden venir a buscarlo pero solamente se entregará el producto, dado que la oficina estará cerrada para probar el producto.';
      if (!raw) return '';
      const first = raw.indexOf(weekendNote);
      if (first === -1) return raw;
      const second = raw.indexOf(weekendNote, first + weekendNote.length);
      if (second === -1) return raw;
      let merged = raw.slice(0, second) + raw.slice(second + weekendNote.length);
      while (merged.indexOf('\n\n\n') !== -1) merged = merged.replace('\n\n\n', '\n\n');
      return merged.trim();
    })();

    // Envío Nacional (agencia confirmada)
    let nat = null;
try {
  const rawNat =
    safeGetNS('pcbuilder_national_selected_agency') ||
    safeGet('pcbuilder_national_selected_agency') ||
    sessionStorage.getItem('pcbuilder_national_selected_agency') ||
    localStorage.getItem('pcbuilder_national_selected_agency') ||
    (typeof window.getNationalSelection === 'function'
      ? JSON.stringify(window.getNationalSelection())
      : '');

  nat = rawNat ? JSON.parse(rawNat) : null;
} catch(_){ nat = null; }
    const nationalCarrierName =
  nat && (nat.carrierName || nat.carrier || nat.company || nat.companyName)
    ? String(nat.carrierName || nat.carrier || nat.company || nat.companyName).toUpperCase()
    : '';
    const nationalState =
  nat && (nat.stateName || nat.state)
    ? String(nat.stateName || nat.state)
    : '';
    const nationalAgencyName =
  nat && (nat.name || nat.agencyName)
    ? String(nat.name || nat.agencyName)
    : '';
    const nationalAgencyCode =
  nat && (nat.code || nat.codigo)
    ? String(nat.code || nat.codigo)
    : '';
    const nationalAgencyAddress =
  nat && (nat.address || nat.direccion || nat.addressText)
    ? String(nat.address || nat.direccion || nat.addressText)
    : '';
    const nationalAgencyMapUrl = nat && (nat.gmaps || nat.googleMaps || nat.googleMapsUrl || nat.mapUrl) ? String(nat.gmaps || nat.googleMaps || nat.googleMapsUrl || nat.mapUrl) : '';

    // Construir productsLines limpio
    let productsLines = (data.productsText || '').trim();
    if (productsLines){
      productsLines = productsLines.split('\n').map(l => l.replace(/^\*\s*/,'').trim()).join('\n');
    } else {
      productsLines = '—';
    }

    const payload = {
      ticket: data.ticket,
      shippingMethod: (safeGetNS('pcbuilder_shipping_method') || '').trim(),
      // ID interno del método de pago del producto (ej: efectivo_divisas, transferencia, pago_movil, etc.)
      paymentMethodId: (safeGetNS('pcbuilder_payment_method') || '').trim(),
      // Info de efectivo (divisas) del PRODUCTO (confirmado en productCashInfoModal)
      productCashConfirmed: (safeGetNS('pcbuilder_product_cash_confirmed') || safeGet('pcbuilder_product_cash_confirmed') || '').trim(),
      productCashAmountUsd: (safeGetNS('pcbuilder_product_cash_amount') || safeGet('pcbuilder_product_cash_amount') || '').trim(),
      productCashRequired: (safeGetNS('pcbuilder_product_cash_required') || safeGet('pcbuilder_product_cash_required') || '').trim(),
      shippingLabel: (function(){
        const m = (safeGetNS('pcbuilder_shipping_method') || '').trim();
        if (m === 'pickup') return 'PICKUP';
        if (m === 'delivery') return 'DELIVERY';
        if (m === 'national') return 'ENVÍO NACIONAL';
        return (data.shippingLabel || m || '—');
      })(),
      clientName: data.clientName,
      doc,
      phone,
      email,
      productsLines,
      totalProductsUsd: Number(data.totalProducts || 0),
      discountUsd: 0,
      taxUsd: 0,
      totalPayUsd: Number(data.totalPay || 0),
      paymentLabel: data.paymentLabel || '—',
      proofLink: data.proofLink || 'N/A',
      paidInBolivares,
      rateUsed,
      // pickup
      pickupName,
      pickupMapUrl,
      pickupAddressText,
      pickupSchedule,
      // delivery
      deliveryCostUsd: Number(data.deliveryCostUsd || 0),
      deliveryPaymentId,
      deliveryPaymentLabel: (function(){
        const label = (typeof humanPayment === 'function' ? humanPayment(deliveryPaymentId) : deliveryPaymentId);
        return (label && label !== '—' && label !== '-') ? label : (deliveryPaymentId || 'N/A');
      })(),
      // Comprobante del delivery (si existe). El template de WhatsApp lo mostrará según condiciones.
      deliveryProofLink: (safeGet(__deliveryProofGenericKey()) || '').trim(),
      deliveryPaidInBolivares,
      deliveryRateUsed,
      deliveryPayableBs,
      deliveryMapUrl,
      deliveryAddressText,
      deliveryCashAmountUsd,
      // national
      nationalCarrierName,
      nationalState,
      nationalAgencyName,
      nationalAgencyCode,
      nationalAgencyAddress,
      nationalAgencyMapUrl
    };

    if (window.PCBWhatsAppTemplate && typeof window.PCBWhatsAppTemplate.buildMessage === 'function'){
      return window.PCBWhatsAppTemplate.buildMessage(payload);
    }

    // Fallback mínimo
    return `Confirmación de orden ${payload.ticket}`;
  }


// ===== Subida de comprobantes al FINAL (ImgBB) + cooldown (10s) =====
const UPLOAD_DB_NAME = 'pcbuilder_uploads_db';
// Debe coincidir con payment-method.js (v6+). Si no coincide, no podremos leer los blobs guardados.
const UPLOAD_DB_VERSION = 2;
const UPLOAD_STORE = 'uploads';

function showOverlay(title, subtitle) {
  const overlay = document.getElementById('wa-redirect-overlay');
  if (overlay) overlay.style.display = 'flex';
  const titleEl = overlay ? overlay.querySelector('.wa-redirect-title') : null;
  const subEl = overlay ? overlay.querySelector('.wa-redirect-subtitle') : null;
  if (titleEl && typeof title === 'string') titleEl.textContent = title;
  if (subEl && typeof subtitle === 'string') subEl.textContent = subtitle;
  // Reset del contador dentro del círculo
  setSpinnerNumber('');
}

function setSpinnerNumber(value) {
  const overlay = document.getElementById('wa-redirect-overlay');
  const numEl = overlay ? overlay.querySelector('#wa-spinner-num') : null;
  if (!numEl) return;
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) {
    numEl.textContent = '';
    numEl.style.visibility = 'hidden';
    return;
  }
  numEl.textContent = String(Math.max(0, Math.floor(n)));
  numEl.style.visibility = 'visible';
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitWithCooldown(seconds, prefix) {
  for (let s = Number(seconds) || 0; s > 0; s--) {
    // El contador se muestra dentro del círculo de carga (sin texto adicional)
    setSpinnerNumber(s);
    await sleep(1000);
  }
  setSpinnerNumber('');
}

async function uploadToImgbb(blob) {
  // Subida SIEMPRE vía servidor (proxy) para no exponer la key en el frontend
  const form = new FormData();
  form.append('image', blob);

  const res = await fetch('../api/imgbb-upload.php', { method: 'POST', body: form });
  let data = null;
  try { data = await res.json(); } catch (_) {}

  if (res.ok && data?.ok && data?.url) return data.url;

  const msg = (data && (data.message || data.error)) ? (data.message || data.error) : 'Error subiendo imagen';
  throw new Error(msg);
}

function getShippingMethod() {
  try {
    return ((localStorage.getItem('pcbuilder_shipping_method') || sessionStorage.getItem('pcbuilder_shipping_method') || '') + '').trim().toLowerCase();
  } catch (_) {
    return '';
  }
}

function getOrderSessionId() {
  try {
    return (localStorage.getItem('pcbuilder_order_session_id') || '').trim();
  } catch (_) {
    return '';
  }
}

const openUploadsDb = () => new Promise((resolve, reject) => {
  try {
    const req = indexedDB.open(UPLOAD_DB_NAME, UPLOAD_DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      // Migración segura: si existe el store pero fue creado sin keyPath, lo recreamos.
      if (db.objectStoreNames.contains(UPLOAD_STORE)) {
        try {
          const existing = req.transaction.objectStore(UPLOAD_STORE);
          if (existing && existing.keyPath !== 'id') {
            db.deleteObjectStore(UPLOAD_STORE);
            db.createObjectStore(UPLOAD_STORE, { keyPath: 'id' });
          }
        } catch (_) {
          try { db.deleteObjectStore(UPLOAD_STORE); } catch (_) {}
          db.createObjectStore(UPLOAD_STORE, { keyPath: 'id' });
        }
      } else {
        db.createObjectStore(UPLOAD_STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('No se pudo abrir IndexedDB'));
  } catch (e) {
    reject(e);
  }
});

const withStore = async (mode, fn) => {
  const db = await openUploadsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(UPLOAD_STORE, mode);
    const store = tx.objectStore(UPLOAD_STORE);
    let result;
    try { result = fn(store); } catch (e) { reject(e); return; }
    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(tx.error || new Error('IndexedDB error'));
    tx.onabort = () => reject(tx.error || new Error('IndexedDB abort'));
  });
};

async function listPending(kind) {
  const sessionId = getOrderSessionId();
  if (!sessionId) return [];
  const ship = getShippingMethod();
  // Debe coincidir con payment-method.js: `${sessionId}|${__SHIPPING}|${kind}|`.
  const prefix = `${sessionId}|${ship}|${kind}|`;
  return await withStore('readonly', (store) => {
    return new Promise((resolve) => {
      const items = [];
      const range = IDBKeyRange.bound(prefix, prefix + '\uffff');
      const req = store.openCursor(range);
      req.onsuccess = () => {
        const cursor = req.result;
        if (cursor) {
          items.push(cursor.value);
          cursor.continue();
        } else {
          items.sort((a,b) => String(a.id).localeCompare(String(b.id)));
          resolve(items);
        }
      };
      req.onerror = () => resolve([]);
    });
  });
}

async function clearPending(kind) {
  const sessionId = getOrderSessionId();
  if (!sessionId) return;
  const ship = getShippingMethod();

  const prefixes = [
    `${sessionId}|${ship}|${kind}|`,
    `${sessionId}|${kind}|`,
  ];

  for (const prefix of prefixes) {
    // eslint-disable-next-line no-await-in-loop
    await withStore('readwrite', (store) => {
      return new Promise((resolve) => {
        const range = IDBKeyRange.bound(prefix, prefix + '\uffff');
        const req = store.openCursor(range);
        req.onsuccess = () => {
          const cursor = req.result;
          if (cursor) {
            cursor.delete();
            cursor.continue();
          } else {
            resolve(true);
          }
        };
        req.onerror = () => resolve(true);
      });
    });
  }
}


async function ensurePaymentUploads(payId) {
  // Devuelve: { links: [..], display: '...', href: '...' }
  const id = String(payId || '').trim();
  if (!id) return { links: [], display: '', href: '' };

  // Efectivo divisas: 1 foto del billete (array para compatibilidad)
  if (id === 'efectivo_divisas') {
    let existing = [];
    try {
      const raw = localStorage.getItem(__cashBillKey());
      existing = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(existing)) existing = [];
      existing = existing.filter(Boolean);
    } catch (_) {
      existing = [];
    }
    if (existing.length) {
      return { links: existing, display: existing.join(' | '), href: existing[0] || '' };
    }

    const pending = await listPending('bills');
    if (!pending.length) return { links: [], display: '', href: '' };

    // Mensaje unificado
    showOverlay('Procesando tu orden…', 'Subiendo captura de pago…');

    // Cooldown SOLO cuando hay 1 imagen por subir (solicitado)
    if (pending.length === 1) {
      await waitWithCooldown(5, '');
    }

    const urls = [];
    for (let i = 0; i < pending.length; i++) {
      // Sin contador visible fuera del círculo
      showOverlay('Procesando tu orden…', 'Subiendo captura de pago…');
      const url = await uploadToImgbb(pending[i].data);
      urls.push(url);
    }

    try { localStorage.setItem(__cashBillKey(), JSON.stringify(urls)); } catch (_) {}
    // Para compatibilidad en UI/mensaje (primer enlace)
    try { localStorage.setItem(__paymentProofKey('efectivo_divisas'), urls[0] || ''); } catch (_) {}
    await clearPending('bills');

    return { links: urls, display: urls.join(' | '), href: urls[0] || '' };
  }

  // Otros métodos: 1 captura (string)
  const existing = (safeGet(`pcbuilder_payment_proof_image_${id}`) || '').trim();
  if (existing) return { links: [existing], display: existing, href: existing };

  // Para todos los métodos no-efectivo, guardamos la captura en el bucket "proof".
  const pending = await listPending('proof');
  if (!pending.length) return { links: [], display: '', href: '' };

  showOverlay('Procesando tu orden…', 'Subiendo captura de pago…');
  // Cooldown SOLO cuando hay 1 imagen por subir (solicitado)
  await waitWithCooldown(5, '');

  const url = await uploadToImgbb(pending[0].data);
  try { localStorage.setItem(`pcbuilder_payment_proof_image_${id}`, url); } catch (_) {}
  try { localStorage.setItem(__paymentProofGenericKey(), url); } catch (_) {}
  await clearPending('proof');

  return { links: [url], display: url, href: url };
}

// --- Comprobante de Delivery (modal independiente) ---
function __deliveryCashBillKey(){ return 'pcbuilder_delivery_cash_bill_images'; }
function __deliveryProofKey(methodId){ return `pcbuilder_delivery_payment_proof_image_${String(methodId||'').trim()}`; }
function __deliveryProofGenericKey(){ return 'pcbuilder_delivery_payment_proof_image'; }

async function ensureDeliveryUploads(deliveryPayId){
  const id = String(deliveryPayId || '').trim();
  if (!id) return { links: [], display: '', href: '' };

  // Efectivo: 1+ fotos (compat)
  if (id === 'efectivo_divisas') {
    let existing = [];
    try {
      const raw = localStorage.getItem(__deliveryCashBillKey());
      existing = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(existing)) existing = [];
      existing = existing.filter(Boolean);
    } catch (_) { existing = []; }
    if (existing.length) {
      return { links: existing, display: existing.join(' | '), href: existing[0] || '' };
    }

    const pending = await listPending('delivery_bills');
    if (!pending.length) return { links: [], display: '', href: '' };

    showOverlay('Procesando tu orden…', 'Subiendo captura de pago (Delivery)…');
    if (pending.length === 1) await waitWithCooldown(5, '');

    const urls = [];
    for (let i = 0; i < pending.length; i++) {
      showOverlay('Procesando tu orden…', 'Subiendo captura de pago (Delivery)…');
      const url = await uploadToImgbb(pending[i].data);
      urls.push(url);
    }

    try { localStorage.setItem(__deliveryCashBillKey(), JSON.stringify(urls)); } catch (_) {}
    try { localStorage.setItem(__deliveryProofKey('efectivo_divisas'), urls[0] || ''); } catch (_) {}
    await clearPending('delivery_bills');
    return { links: urls, display: urls.join(' | '), href: urls[0] || '' };
  }

  // Otros: 1 captura
  const existing = (safeGet(__deliveryProofKey(id)) || '').trim();
  if (existing) return { links: [existing], display: existing, href: existing };

  const pending = await listPending('delivery_proof');
  if (!pending.length) return { links: [], display: '', href: '' };

  showOverlay('Procesando tu orden…', 'Subiendo captura de pago (Delivery)…');
  await waitWithCooldown(5, '');

  const url = await uploadToImgbb(pending[0].data);
  try { localStorage.setItem(__deliveryProofKey(id), url); } catch (_) {}
  try { localStorage.setItem(__deliveryProofGenericKey(), url); } catch (_) {}
  await clearPending('delivery_proof');
  return { links: [url], display: url, href: url };
}


async function autoProvisionCheckoutAccount(){
  try{
    const payload = {
      first_name: (localStorage.getItem('pcbuilder_client_firstname') || localStorage.getItem('dn-firstname') || '').trim(),
      last_name: (localStorage.getItem('pcbuilder_client_lastname') || localStorage.getItem('dn-lastname') || '').trim(),
      id_type: (localStorage.getItem('pcbuilder_client_idtype') || localStorage.getItem('dn-idtype') || 'V').trim(),
      id_number: (localStorage.getItem('pcbuilder_client_idnumber') || localStorage.getItem('dn-idnumber') || '').trim(),
      email: (localStorage.getItem('pcbuilder_client_email') || localStorage.getItem('dn-email') || '').trim()
    };
    if(!payload.email) return;
    await fetch('/auth/checkout-auto-register.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
  }catch(_){}
}

  function redirectToWhatsapp(msg){
    showOverlay('Redireccionando a WhatsApp…', 'Ya estas en el ultimo paso! Ahora verificaremos tu orden con nuestros agentes disponibles.');
    // contador (5s) dentro del círculo de carga
    let remaining = 5;
    setSpinnerNumber(remaining);

    const safeMsg = (typeof msg === 'string' ? msg : '');
    const url = toWaLink('+584123071146', safeMsg);

    const interval = setInterval(() => {
      remaining -= 1;
      setSpinnerNumber(Math.max(0, remaining));
      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(async () => {
      clearInterval(interval);
      try {
        const nowIso = new Date().toISOString();
        localStorage.setItem('pcbuilder_order_completed', '1');
        localStorage.setItem('pcbuilder_order_completed_at', nowIso);
        sessionStorage.setItem('pcbuilder_order_completed', '1');
        sessionStorage.setItem('pcbuilder_order_completed_at', nowIso);

        localStorage.removeItem('compragamer_cart');
        localStorage.removeItem('compragamer_cart_items');
        localStorage.removeItem('pcbuilder_checkout_state');
        localStorage.removeItem('pcbuilder_checkout_step');
        localStorage.removeItem('pcbuilder_completion_lock');

        sessionStorage.removeItem('compragamer_cart');
        sessionStorage.removeItem('compragamer_cart_items');
        sessionStorage.removeItem('pcbuilder_checkout_step');
        sessionStorage.removeItem('pcbuilder_completion_token');
      } catch(_) {}
      try { await autoProvisionCheckoutAccount(); } catch(_) {}
      window.location.replace(url);
  }, 5000);
  }

  function toWaLink(veNumber, text){
    if (window.PCBWhatsAppTemplate && typeof window.PCBWhatsAppTemplate.toWaLink === 'function'){
      return window.PCBWhatsAppTemplate.toWaLink(veNumber, text);
    }
    // Venezuela: convert 0412xxxxxxx -> 58412xxxxxxx
    const raw = String(veNumber || '').replace(/\D/g,'');
    let intl = raw;
    if (raw.startsWith('0')) intl = '58' + raw.slice(1);
    else if (!raw.startsWith('58')) intl = '58' + raw;
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${intl}?text=${encoded}`;
  }



  function __isBolivaresMethod(id){
    const v = String(id || '').trim().toLowerCase();
    return v === 'pago_movil' || v === 'transferencia' || v === 'transferencia_bancaria';
  }

  function __isCashDivisasMethod(id){
    return String(id || '').trim().toLowerCase() === 'efectivo_divisas';
  }

  function __needsProofForMethod(id){
    const v = String(id || '').trim().toLowerCase();
    return !!v && v !== 'efectivo_divisas';
  }

  function __storageGetAny(keys){
    const list = Array.isArray(keys) ? keys : [keys];
    for (const key of list){
      if (!key) continue;
      try {
        const a = (localStorage.getItem(key) || '').toString().trim();
        if (a) return a;
      } catch(_) {}
      try {
        const b = (sessionStorage.getItem(key) || '').toString().trim();
        if (b) return b;
      } catch(_) {}
    }
    return '';
  }

  function __goBackForFix(url, msg){
    try { alert(msg); } catch(_) {}
    try { hideOverlay(); } catch(_) {}
    window.location.replace(url);
    return false;
  }

  function __validateCompletionState(ctx){
    const shippingMethod = String(ctx.shippingMethod || '').trim().toLowerCase();
    const payId = String(ctx.payId || '').trim().toLowerCase();
    const deliveryPayId = String(ctx.deliveryPayId || '').trim().toLowerCase();

    if (!Array.isArray(ctx.items) || !ctx.items.length) {
      return __goBackForFix('/compragamer/carrito/', 'Tu carrito está vacío. Agrega productos antes de continuar.');
    }

    if (!ctx.clientName || !ctx.doc || !ctx.phone || !ctx.email) {
      return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Faltan datos personales del cliente. Verifica el formulario y continúa nuevamente.');
    }

    if (!['pickup','delivery','national'].includes(shippingMethod)) {
      return __goBackForFix('/compragamer/checkout/metodo-envio/', 'Debes seleccionar un método de envío válido antes de finalizar tu pedido.');
    }

    if (!payId) {
      return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Debes seleccionar un método de pago para el producto antes de finalizar.');
    }

    if (__isBolivaresMethod(payId) && !(Number(ctx.rateUsed || 0) > 0) && !(Number(ctx.payableBsStored || 0) > 0)) {
      return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'No se encontró la tasa del pago del producto. Vuelve a seleccionar el método de pago y confirma nuevamente.');
    }

    if (__isCashDivisasMethod(payId) && shippingMethod !== 'pickup') {
      const productCashAmount = Number(__storageGetAny([
        'pcbuilder_product_cash_amount_' + shippingMethod,
        'pcbuilder_product_cash_amount'
      ]) || 0);
      const productCashConfirmed = __storageGetAny([
        'pcbuilder_product_cash_confirmed_' + shippingMethod,
        'pcbuilder_product_cash_confirmed'
      ]);
      if (!(productCashConfirmed === '1' || productCashAmount > 0)) {
        return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Debes confirmar con cuánto pagarás el producto en efectivo antes de finalizar.');
      }
    }

    if (__needsProofForMethod(payId) && !ctx.proofLink) {
      return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Falta el comprobante del pago del producto. Sube la imagen y confirma nuevamente.');
    }

    if (shippingMethod === 'pickup') {
      if (!ctx.pickupMapUrl && !ctx.pickupAddressText) {
        return __goBackForFix('/compragamer/checkout/metodo-envio/', 'No se encontró la información del pickup. Vuelve a seleccionar Pickup y continúa nuevamente.');
      }
    }

    if (shippingMethod === 'national') {
      if (!ctx.nationalCarrierName || !ctx.nationalAgencyName || !ctx.nationalAgencyAddress) {
        return __goBackForFix('/compragamer/checkout/metodo-envio/', 'Debes seleccionar y confirmar la agencia del envío nacional antes de finalizar.');
      }
    }

    if (shippingMethod === 'delivery') {
      const hasLocation = (!!ctx.deliveryAddressText) || (
        Number.isFinite(Number(ctx.deliveryLat)) && Number.isFinite(Number(ctx.deliveryLng))
      );
      if (!hasLocation) {
        return __goBackForFix('/compragamer/checkout/metodo-envio/', 'Debes confirmar la ubicación del delivery antes de finalizar tu pedido.');
      }

      const deliveryCostUsd = Number(ctx.deliveryCostUsd || 0);
      if (deliveryCostUsd > 0 && !deliveryPayId) {
        return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Debes seleccionar el método de pago del delivery antes de finalizar.');
      }

      if (deliveryCostUsd > 0 && __isBolivaresMethod(deliveryPayId)) {
        const dRate = Number(ctx.deliveryRateUsed || 0);
        const dBs = Number(ctx.deliveryPayableBs || 0);
        if (!(dRate > 0) || !(dBs > 0)) {
          return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Falta la tasa o el monto en bolívares del delivery. Vuelve a confirmar el pago del delivery.');
        }
      }

      if (deliveryCostUsd > 0 && __isCashDivisasMethod(deliveryPayId)) {
        const deliveryCashAmount = Number(__storageGetAny([
          'pcbuilder_delivery_cash_amount_delivery',
          'pcbuilder_delivery_cash_amount'
        ]) || 0);
        const deliveryCashConfirmed = __storageGetAny([
          'pcbuilder_delivery_cash_confirmed_delivery',
          'pcbuilder_delivery_cash_confirmed'
        ]);
        if (!(deliveryCashConfirmed === '1' || deliveryCashAmount > 0)) {
          return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Debes confirmar con cuánto pagarás el delivery en efectivo antes de finalizar.');
        }
      }

      if (deliveryCostUsd > 0 && __needsProofForMethod(deliveryPayId) && !ctx.deliveryProofLink) {
        return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'Falta el comprobante del pago del delivery. Sube la imagen y confirma nuevamente.');
      }
    }

    return true;
  }

  async function render(){
    const ticket = await buildTicket();

    const first = safeGetNS('pcbuilder_dn_firstname').trim();
    const last = safeGetNS('pcbuilder_dn_lastname').trim();
    const clientName = `${first} ${last}`.trim() || safeGetNS('pcbuilder_dn_name').trim();

    const idType = safeGetNS('pcbuilder_dn_idtype').trim();
    const idNum = safeGetNS('pcbuilder_dn_idnumber').trim();
    const doc = (idType && idNum) ? `${idType}-${idNum}` : safeGetNS('pcbuilder_dn_id').trim();

    const area = safeGetNS('pcbuilder_dn_areacode').trim();
    const phoneNum = safeGetNS('pcbuilder_dn_phonenum').trim();
    const phone = (area && phoneNum) ? `${area}${phoneNum}` : safeGetNS('pcbuilder_dn_phone').trim();

    const email = safeGetNS('pcbuilder_dn_email').trim();

    const items = safeGetJson('compragamer_cart', []);
    const totalProducts = computeTotals(items);

    // Delivery extra (se paga solo si aplica)
    const shippingMethod = getShippingMethod();
    let deliveryCostUsd = 0;
    try {
      const oos = String(localStorage.getItem('pcbuilder_delivery_out_of_service') || '0') === '1';
      const usd = Number(localStorage.getItem('pcbuilder_delivery_cost_usd') || 0);
      if (!oos && shippingMethod === 'delivery' && Number.isFinite(usd) && usd > 0) {
        deliveryCostUsd = usd;
      }
    } catch (_) {
      deliveryCostUsd = 0;
    }

    const totalPay = totalProducts + deliveryCostUsd;

    const shippingLabel = shippingMethod ? humanShipping(shippingMethod) : 'N/A (Retiro personal)';

    const payId = (safeGetNS('pcbuilder_payment_method_final') || safeGetNS('pcbuilder_payment_method')).trim();
    const paymentLabel = humanPayment(payId);

    // Montos en Bs + USD y tasa usada (solo para Pago Móvil / Transferencia)
    const payableUSDStored = Number(safeGetNS('pcbuilder_payable_usd') || totalProducts || 0);
    const rateUsed = Number(safeGetNS('pcbuilder_binance_rate_used') || 0);
    const payableBsStored = Number(safeGetNS('pcbuilder_payable_bs') || 0);

    const isBolivares = (payId === 'pago_movil' || payId === 'transferencia' || payId === 'transferencia_bancaria');
// Subir comprobantes solo aquí (al final), con cooldown de 10s entre subidas.
let proofLinks = [];
let proofDisplay = '';
let proofHref = '';

try {
  const up = await ensurePaymentUploads(payId);
  proofLinks = (up && Array.isArray(up.links)) ? up.links.filter(Boolean) : [];
  proofDisplay = (up && typeof up.display === 'string') ? up.display : '';
  proofHref = (up && typeof up.href === 'string') ? up.href : '';
} catch (_) {
  proofLinks = [];
  proofDisplay = '';
  proofHref = '';
}

if (!proofDisplay) {
  // fallback desde storage (por si ya estaba)
  if (payId === 'efectivo_divisas') {
    try {
      const raw = localStorage.getItem(__cashBillKey());
      const arr = raw ? JSON.parse(raw) : [];
      if (Array.isArray(arr)) {
        const cleaned = arr.filter(Boolean);
        if (cleaned.length) {
          proofLinks = cleaned;
          proofDisplay = cleaned.join(' | ');
          proofHref = cleaned[0] || '';
        }
      }
    } catch (_) {}
  } else {
    const single = safeGet('pcbuilder_payment_proof_image').trim();
    if (single) {
      proofLinks = [single];
      proofDisplay = single;
      proofHref = single;
    }
  }
}

const proofLink = (proofDisplay || '').trim();
const proofStatus = proofLink ? 'Subido correctamente' : 'No enviado';

// ===== Pago Delivery (modal independiente) =====
// ====== Pago Delivery (modal independiente) =====
let deliveryPayId = '';
let deliveryPaymentLabel = '';
let deliveryProofLink = '';
let deliveryProofHref = '';

// v10-fix(v3): Subir comprobante de Delivery SIEMPRE que el método de envío sea Delivery
// y exista un método de pago seleccionado o un comprobante pendiente/guardado,
// incluso si el costo del delivery es 0 (cobro destino).
try {
  const shipNow = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
  if (shipNow === 'delivery') {
    try { deliveryPayId = String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim(); } catch (_) { deliveryPayId = ''; }
    deliveryPaymentLabel = humanPayment(deliveryPayId);

    // Detectar si hay comprobante pendiente/guardado aunque no haya método seleccionado aún
    let hasPending = false;
    try {
      const p1 = await listPending('delivery_proof');
      const p2 = await listPending('delivery_bills');
      hasPending = (Array.isArray(p1) && p1.length > 0) || (Array.isArray(p2) && p2.length > 0);
    } catch (_) { hasPending = false; }

    let hasExisting = false;
    try {
      const ex = (safeGet(__deliveryProofGenericKey()) || '').trim();
      hasExisting = !!ex;
    } catch (_) { hasExisting = false; }

    if (deliveryPayId || hasPending || hasExisting) {
      try {
        const up = await ensureDeliveryUploads(deliveryPayId || 'pago_movil');
        deliveryProofLink = (up && typeof up.display === 'string') ? up.display : '';
        deliveryProofHref = (up && typeof up.href === 'string') ? up.href : '';
      } catch (_) {}
    }
  }
} catch (_) {}


    // Fill UI
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('oc-ticket-title', `✅ ORDEN CONFIRMADA - TICKET #${ticket}`);
    set('oc-client', clientName || '—');
    set('oc-id', doc || '—');
    set('oc-phone', phone || '—');
    set('oc-email', email || '—');
    set('oc-shipping', shippingLabel || '—');
    set('oc-payment', paymentLabel || '—');

    // Mostrar USD + Bs y tasa en la tabla "Pago" cuando aplique
    const amountsRow = document.getElementById('oc-amounts-row');
    const rateRow = document.getElementById('oc-rate-row');
    const amountsEl = document.getElementById('oc-amounts');
    const rateEl = document.getElementById('oc-rate');

    if (isBolivares && rateUsed > 0 && payableUSDStored > 0){
      if (amountsRow) amountsRow.style.display = '';
      if (rateRow) rateRow.style.display = '';
      if (amountsEl) amountsEl.textContent = `$${payableUSDStored.toFixed(2)} USD / ${moneyVES(payableUSDStored * rateUsed)}`;
      if (rateEl) rateEl.textContent = `${moneyVES(rateUsed)} por USD`;
    } else {
      if (amountsRow) amountsRow.style.display = 'none';
      if (rateRow) rateRow.style.display = 'none';
    }

    set('oc-proof-status', proofStatus);

    const linkEl = document.getElementById('oc-proof-link');
    if (linkEl){
      if (proofLink){
        linkEl.href = proofHref || '#';
        linkEl.textContent = proofLink;
      } else {
        linkEl.href = '#';
        linkEl.textContent = 'N/A';
      }
    }
    const list = document.getElementById('oc-products');
    if (list){
      if (Array.isArray(items) && items.length){
        const ul = document.createElement('ul');
        ul.className = 'oc-products-list';
        items.forEach(it => {
          const li = document.createElement('li');
          const name = it.name || it.title || 'Producto';
          const qty = Number(it.quantity || 0) || 0;
          const price = Number(it.price || 0) || 0;
          const img = normalizeImageSrc(it.image || it.img);
          const lineUSD = price.toFixed(2);
          const priceText = (isBolivares && rateUsed > 0)
            ? `$${lineUSD} / ${moneyVES(price * rateUsed)}`
            : `$${lineUSD}`;

          li.className = 'oc-product-row';
          li.innerHTML = `
            <div class="oc-product-img"><img src="${img}" alt="${name}"></div>
            <div class="oc-product-text">
              <div class="oc-product-name">${name} <span class="oc-product-qty">(x${qty})</span></div>
              <div class="oc-product-price">${priceText}</div>
            </div>
          `;
          ul.appendChild(li);
        });
        list.innerHTML = '';
        list.appendChild(ul);
      } else {
        list.textContent = '—';
      }
    }

    const tp = document.getElementById('oc-total-products');
    if (tp) tp.textContent = moneyUSD(totalProducts);
    const tpay = document.getElementById('oc-total-pay');
    if (tpay) tpay.textContent = moneyUSD(totalPay);
    const tpBs = document.getElementById('oc-total-products-bs');
    const tpayBs = document.getElementById('oc-total-pay-bs');
    const prRow = document.getElementById('oc-products-rate-row');
    const prEl = document.getElementById('oc-products-rate');

    if (isBolivares && rateUsed > 0){
      if (tpBs){ tpBs.style.display = ''; tpBs.textContent = moneyVES(totalProducts * rateUsed); }
      if (tpayBs){ tpayBs.style.display = ''; tpayBs.textContent = moneyVES(totalPay * rateUsed); }
      if (prRow) prRow.style.display = '';
      if (prEl) prEl.textContent = `${moneyVES(rateUsed)} por USD`;
    } else {
      if (tpBs) tpBs.style.display = 'none';
      if (tpayBs) tpayBs.style.display = 'none';
      if (prRow) prRow.style.display = 'none';
    }


    // Validación final estricta antes de generar WhatsApp
    if (!__validateCompletionState({
      items,
      clientName,
      doc,
      phone,
      email,
      shippingMethod,
      payId,
      proofLink,
      rateUsed,
      payableBsStored,
      pickupMapUrl: (safeGetNS('pcbuilder_pickup_maps_url') || safeGet('pcbuilder_pickup_maps_url') || '').trim(),
      pickupAddressText: (safeGetNS('pcbuilder_pickup_address_text') || safeGet('pcbuilder_pickup_address_text') || '').trim(),
      deliveryCostUsd,
      deliveryPayId,
      deliveryProofLink,
      deliveryRateUsed: Number(
        safeGetNS('pcbuilder_delivery_binance_rate_used') ||
        safeGet('pcbuilder_delivery_binance_rate_used') ||
        0
      ),
      deliveryPayableBs: Number(
        safeGetNS('pcbuilder_delivery_payable_bs') ||
        safeGet('pcbuilder_delivery_payable_bs') ||
        0
      ),
      deliveryLat: (function(){ try { return Number(localStorage.getItem('pcbuilder_delivery_lat')); } catch(_) { return NaN; } })(),
      deliveryLng: (function(){ try { return Number(localStorage.getItem('pcbuilder_delivery_lng')); } catch(_) { return NaN; } })(),
      deliveryAddressText: (function(){
        try {
          return (localStorage.getItem('pcbuilder_delivery_address_text') || localStorage.getItem('pcbuilder_delivery_address') || '').trim();
        } catch(_) { return ''; }
      })(),
      nationalCarrierName: (function(){ try { return (JSON.parse(localStorage.getItem('pcbuilder_national_selected_agency') || 'null') || {}).carrierName || ''; } catch(_) { return ''; } })(),
      nationalAgencyName: (function(){ try { const n=(JSON.parse(localStorage.getItem('pcbuilder_national_selected_agency') || 'null') || {}); return n.name || n.agencyName || ''; } catch(_) { return ''; } })(),
      nationalAgencyAddress: (function(){ try { const n=(JSON.parse(localStorage.getItem('pcbuilder_national_selected_agency') || 'null') || {}); return n.address || n.direccion || n.addressText || ''; } catch(_) { return ''; } })()
    })) {
      return;
    }

    // WhatsApp
    const msg = buildWhatsappMessage({
      ticket,
      clientName,
      productsText: buildProductsText(items),
      totalProducts,
      shippingLabel,
      totalPay,
      paymentLabel,
      proofLink,
      deliveryCostUsd,
      deliveryPaymentLabel,
      deliveryProofLink: (deliveryProofLink || '').trim(),
      // Coordenadas confirmadas en el modal "Aplicar ubicación"
      deliveryLat: (function(){ try { const v = Number(localStorage.getItem('pcbuilder_delivery_lat')); return Number.isFinite(v) ? v : null; } catch(_) { return null; } })(),
      deliveryLng: (function(){ try { const v = Number(localStorage.getItem('pcbuilder_delivery_lng')); return Number.isFinite(v) ? v : null; } catch(_) { return null; } })(),
      // Si en el futuro guardas un link completo, también lo soportamos:
      deliveryMapUrl: (function(){
        try {
          const a = (localStorage.getItem('pcbuilder_delivery_map_url_delivery')||'').trim();
          const b = (localStorage.getItem('pcbuilder_delivery_map_url')||'').trim();
          if (a) return a;
          if (b) return b;
        } catch(_) {}
        return '';
      })()

    });

    if (!msg || !String(msg).trim()) {
      return __goBackForFix('/compragamer/checkout/verificacion-orden/', 'No se pudo generar el mensaje final de WhatsApp. Revisa el checkout y vuelve a intentarlo.');
    }

    redirectToWhatsapp(msg);

const waBtn = document.getElementById('oc-whatsapp-btn');
    const waUrl = toWaLink('04123071146', msg);

    if (waBtn){
      waBtn.addEventListener('click', () => {
        window.location.href = waUrl;
      });
    }

    // Auto-redirect (opcional): si quieres que se abra automáticamente, descomenta:
    // window.location.href = waUrl;
  }

  document.addEventListener('DOMContentLoaded', () => { render().catch(console.error); });
})();