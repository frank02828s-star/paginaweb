
  // v86: El botón "Proceder y continuar" NO debe existir en el DOM mientras el estado sea LISTA.
  // Debe aparecer/volver a insertarse únicamente cuando el usuario seleccione un método (estado "pay") o Step 3.
  // Importante: NO romper la lógica original del checkout (el botón tiene listeners/lógica interna).
  let __pmStoredContinueBtn = null;
  let __pmStoredContinueBtnParent = null;
  let __pmStoredContinueBtnNext = null;

  function __pmDetachContinueBtnIfList() {
    const btn = document.getElementById('payment-continue-btn');
    if (!btn) return;
    const st = (btn.getAttribute('data-state') || 'list').toLowerCase();
    if (st !== 'list') return;

    __pmStoredContinueBtn = btn; // conservar listeners
    __pmStoredContinueBtnParent = btn.parentNode;
    __pmStoredContinueBtnNext = btn.nextSibling;
    try { btn.remove(); } catch(_) { if (btn.parentNode) btn.parentNode.removeChild(btn); }
  }

  function __pmEnsureContinueBtnPresent() {
    if (document.getElementById('payment-continue-btn')) return;
    if (!__pmStoredContinueBtn) return;

    const parent = __pmStoredContinueBtnParent || document.querySelector('.checkout-payment-actions') || document.body;
    try {
      if (__pmStoredContinueBtnNext && parent.contains(__pmStoredContinueBtnNext)) {
        parent.insertBefore(__pmStoredContinueBtn, __pmStoredContinueBtnNext);
      } else {
        parent.appendChild(__pmStoredContinueBtn);
      }
    } catch (_) {
      try { parent.appendChild(__pmStoredContinueBtn); } catch(__) {}
    }
  }

  function __pmSyncContinueBtnPresence() {
    const btn = document.getElementById('payment-continue-btn');
    const st = (btn ? (btn.getAttribute('data-state') || 'list') : '').toLowerCase();

    if (btn && st === 'list') {
      __pmDetachContinueBtnIfList();
      return;
    }

    // Si ya estamos fuera de "list" y el botón fue removido, reinsertarlo.
    if (!btn) {
      __pmEnsureContinueBtnPresent();
    }
  }

  // Captura: antes de que el handler original procese el click de método,
  // reinsertamos el botón si está removido para que el flujo "pay" pueda actualizarlo.
  document.addEventListener('click', function(e){
    try {
      const payBtn = e.target && e.target.closest ? e.target.closest('#payment-list [data-pay]') : null;
      if (!payBtn) return;
      if (!document.getElementById('payment-continue-btn')) {
        __pmEnsureContinueBtnPresent();
      }
    } catch(_) {}
  }, true);


  // === Global helpers (para evitar errores de scope) ===
  if (typeof window.nationalSelectionKey !== 'function') {
    window.nationalSelectionKey = function(){ return 'pcbuilder_national_selected_agency'; };
  }
  if (typeof window.saveNationalSelection !== 'function') {
    window.saveNationalSelection = function(obj){
      try { localStorage.setItem(window.nationalSelectionKey(), JSON.stringify(obj || null)); } catch(e){}
      try { sessionStorage.setItem(window.nationalSelectionKey(), JSON.stringify(obj || null)); } catch(e){}
    };
  }
  if (typeof window.getNationalSelection !== 'function') {
    window.getNationalSelection = function(){
      var raw = null;
      try { raw = localStorage.getItem(window.nationalSelectionKey()); } catch(e){}
      if (!raw) { try { raw = sessionStorage.getItem(window.nationalSelectionKey()); } catch(e){} }
      if (!raw) return null;
      try { return JSON.parse(raw); } catch(e){ return null; }
    };
  }
  if (typeof window.clearNationalSelection !== 'function') {
    window.clearNationalSelection = function(){
      try { localStorage.removeItem(window.nationalSelectionKey()); } catch(e){}
      try { sessionStorage.removeItem(window.nationalSelectionKey()); } catch(e){}
    };
  }

  // Borra TODO lo relacionado a Envío Nacional (empresa/estado/agencia/confirmación)
  if (typeof window.clearAllNationalSelection !== 'function') {
    window.clearAllNationalSelection = function(){
      var prefix = 'pcbuilder_national_';
      try {
        for (var i = (localStorage.length - 1); i >= 0; i--) {
          var k = localStorage.key(i);
          if (k && k.indexOf(prefix) === 0) localStorage.removeItem(k);
        }
      } catch(e){}
      try {
        for (var j = (sessionStorage.length - 1); j >= 0; j--) {
          var ks = sessionStorage.key(j);
          if (ks && ks.indexOf(prefix) === 0) sessionStorage.removeItem(ks);
        }
      } catch(e){}
      // Compat: también eliminar la key principal si por alguna razón no tiene prefijo
      try { if (window.nationalSelectionKey) localStorage.removeItem(window.nationalSelectionKey()); } catch(e){}
      try { if (window.nationalSelectionKey) sessionStorage.removeItem(window.nationalSelectionKey()); } catch(e){}
    };
  }
  if (typeof window.hasConfirmedNationalSelection !== 'function') {
    window.hasConfirmedNationalSelection = function(){
      var sel = window.getNationalSelection();
      return !!(sel && sel.carrierKey && sel.agencyId && sel.confirmed === true);
    };
  }

// payment-method.js - Selección de método de pago + resumen
(function () {
  // Reset Envío Nacional al cargar / recargar / volver (no persistir selección entre tabs o F5)
  try { if (window.clearAllNationalSelection) window.clearAllNationalSelection(); else if (window.clearNationalSelection) window.clearNationalSelection(); } catch(e){}
  try {
    document.addEventListener('DOMContentLoaded', function(){
      try {
        var existing = document.getElementById('national-shipping-carriers');
        if (existing) existing.remove();
      } catch(e){}
    });
  } catch(e){}

  // Si el navegador restaura la página desde bfcache (atrás/adelante), forzar reset
  try {
    window.addEventListener('pageshow', function(ev){
      if (ev && ev.persisted) {
        try { if (window.clearNationalSelection) window.clearNationalSelection(); } catch(e){}
        // Forzar re-render limpio
        try { window.location.reload(); } catch(e){}
      }
    });
  } catch(e){}

  // Recordatorio: esta pantalla re-renderiza el panel de detalles.
  // Usamos esto para limpiar comprobantes al cambiar de método y evitar que se mezclen.
  let __lastPaymentDetailsMethod = null;
  // Protege el acceso (carrito + paso correcto)
  if (window.guardCheckoutStep && !window.guardCheckoutStep('payment', '/cart.html')) return;

  const money = (value) => {
    try {
      return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(Number(value || 0));
    } catch (_) {
      return `$${(Number(value || 0)).toFixed(2)}`;
    }
  };

  // Tasa Binance P2P (Bs por USD) para métodos en bolívares (Pago Móvil / Transferencia)
// IMPORTANTE: Esto se obtiene del backend (evita CORS y evita lógica frágil en el navegador).
// Cacheamos por 5 minutos para no spamear la API.
const BINANCE_RATE_CACHE_KEY = 'pcbuilder_binance_p2p_rate_cache_v1';
const BINANCE_RATE_TTL_MS = 5 * 60 * 1000;

const getBinanceRate = () => {
  try {
    const raw = localStorage.getItem(BINANCE_RATE_CACHE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    const rate = Number(parsed?.rate || 0);
    const ts = Number(parsed?.ts || 0);
    if (!Number.isFinite(rate) || rate <= 0) return 0;
    if (!Number.isFinite(ts) || (Date.now() - ts) > BINANCE_RATE_TTL_MS) return 0;
    return rate;
  } catch (_) {
    return 0;
  }
};

const setBinanceRate = (rate) => {
  const n = Number(rate || 0);
  if (!Number.isFinite(n) || n <= 0) return;
  try {
    localStorage.setItem(BINANCE_RATE_CACHE_KEY, JSON.stringify({ rate: n, ts: Date.now() }));
  } catch (_) {}
};

const fetchBinanceRate = async () => {
  // Endpoint PHP incluido en ../api/binance-p2p-rate.php
  const res = await fetch('../api/binance-p2p-rate.php?fiat=VES&asset=USDT', { cache: 'no-store' });
  if (!res.ok) throw new Error('rate_fetch_failed');
  const data = await res.json();
  const n = Number(data?.rate || 0);
  if (!Number.isFinite(n) || n <= 0) throw new Error('rate_invalid');
  setBinanceRate(n);
  return n;
};

// Evita llamadas duplicadas en paralelo
let _binanceRatePromise = null;
const ensureBinanceRate = async () => {
  const cached = getBinanceRate();
  if (cached > 0) return cached;
  if (_binanceRatePromise) return _binanceRatePromise;
  _binanceRatePromise = fetchBinanceRate()
    .catch((err) => { throw err; })
    .finally(() => { _binanceRatePromise = null; });
  return _binanceRatePromise;
};


  const moneyVES = (value) => {
    try {
      // VES no siempre está disponible con todos los locales; lo formateamos manual
      const n = Number(value || 0);
      const formatted = new Intl.NumberFormat('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
      return `Bs ${formatted}`;
    } catch (_) {
      return `Bs ${(Number(value || 0)).toFixed(2)}`;
    }
  };

  const isBinanceBolivaresMethod = (methodId) => {
    const id = String(methodId || '').trim();
    return id === 'pago_movil' || id === 'transferencia' || id === 'transferencia_bancaria';
  };

  function getShippingMethod() {
    return (localStorage.getItem('pcbuilder_shipping_method') || sessionStorage.getItem('pcbuilder_shipping_method') || '').trim();
  }

  function humanShipping(method) {
    if (method === 'pickup') return 'Pickup (Retiro Personal)';
    if (method === 'delivery') return 'Delivery';
    if (method === 'national') return 'Envío nacional';
    return '—';
  }

  // --- Namespacing por método de envío (para separar flujos por shipping) ---
  const __SHIPPING = getShippingMethod() || 'pickup';

  const __nsKey = (baseKey) => `${baseKey}_${__SHIPPING}`;

  const __lsGet = (baseKey) => {
    try {
      const v = localStorage.getItem(__nsKey(baseKey));
      if (v !== null && v !== undefined) return String(v);
    } catch (_) {}
    try {
      const sv = sessionStorage.getItem(__nsKey(baseKey));
      if (sv !== null && sv !== undefined) return String(sv);
    } catch (_) {}
    try {
      const legacy = localStorage.getItem(baseKey);
      if (legacy !== null && legacy !== undefined) return String(legacy);
    } catch (_) {}
    try {
      const legacyS = sessionStorage.getItem(baseKey);
      if (legacyS !== null && legacyS !== undefined) return String(legacyS);
    } catch (_) {}
    return '';
  };

  const __lsSet = (baseKey, value) => {
    try {
      localStorage.setItem(__nsKey(baseKey), String(value ?? ''));
      // Compatibilidad: pickup también escribe en la clave legacy
      if (__SHIPPING === 'pickup') localStorage.setItem(baseKey, String(value ?? ''));
    } catch (_) {}
  };

  const __lsRemove = (baseKey) => {
    try { localStorage.removeItem(__nsKey(baseKey)); } catch (_) {}
    if (__SHIPPING === 'pickup') {
      try { localStorage.removeItem(baseKey); } catch (_) {}
    }
  };

  const __cashBillKey = () => (__SHIPPING === 'pickup')
    ? 'pcbuilder_cash_bill_images'
    : `pcbuilder_cash_bill_images_${__SHIPPING}`;

  // Clave de comprobante por método de pago (separa por shipping + payment)
  const __paymentProofKey = (methodId) => {
    const id = String(methodId || '').trim() || 'unknown';
    // Legacy (pickup): pcbuilder_payment_proof_image_<method>
    if (__SHIPPING === 'pickup') return `pcbuilder_payment_proof_image_${id}`;
    return `pcbuilder_payment_proof_image_${__SHIPPING}_${id}`;
  };

  const __paymentProofGenericKey = () => (__SHIPPING === 'pickup')
    ? 'pcbuilder_payment_proof_image'
    : `pcbuilder_payment_proof_image_${__SHIPPING}`;


  
  // --- Wipe global de comprobantes/capturas (NO se mezclan entre métodos ni envíos) ---
  const __getOrCreateOrderSessionId = () => {
    try {
      const k = 'pcbuilder_order_session_id';
      let v = (localStorage.getItem(k) || '').trim();
      if (!v) {
        v = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
        localStorage.setItem(k, v);
      }
      return v;
    } catch (_) {
      return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    }
  };

  async function __wipeAllProductProof() {
    // 1) LocalStorage: borrar cualquier key relacionada con comprobantes (incluye legacy + nombres con typos)
    try {
      const prefixes = [
        'pcbuilder_payment_proof_image',
        'pcubuilder_payment_proof_image', // por compatibilidad con versiones/typos
        'pcbuilder_cash_bill_images',
        'pcubuilder_cash_bill_images' // por compatibilidad con versiones/typos
      ];
      const toRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k) continue;
        for (const p of prefixes) {
          if (k.startsWith(p)) { toRemove.push(k); break; }
        }
      }
      toRemove.forEach((k) => { try { localStorage.removeItem(k); } catch (_) {} });
    } catch (_) {}

    // También limpiar keys “conocidas”
    try { localStorage.removeItem(__paymentProofGenericKey()); } catch (_) {}
    try { localStorage.removeItem(__cashBillKey()); } catch (_) {}

    // 2) IndexedDB: borrar TODO lo guardado para esta sesión (cualquier shipping/kind)
    try {
      const sessionId = __getOrCreateOrderSessionId();
      const DB_NAME = 'pcbuilder_uploads_db';
      const DB_VERSION = 2;
      const STORE = 'uploads';

      const openDb = () => new Promise((resolve, reject) => {
        try {
          const req = indexedDB.open(DB_NAME, DB_VERSION);
          req.onupgradeneeded = () => {
            const db = req.result;
            // Re-crear el store con keyPath para permitir store.put(obj) sin key
            if (db.objectStoreNames.contains(STORE)) {
              try { db.deleteObjectStore(STORE); } catch (_) {}
            }
            db.createObjectStore(STORE, { keyPath: 'id' });
          };
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(req.error);
        } catch (e) { reject(e); }
      });

      const withStore = async (mode, fn) => {
        const db = await openDb();
        return new Promise((resolve) => {
          try {
            const tx = db.transaction(STORE, mode);
            const store = tx.objectStore(STORE);
            Promise.resolve(fn(store))
              .then(() => {})
              .catch(() => {})
              .finally(() => {
                tx.oncomplete = () => { try { db.close(); } catch (_) {} resolve(true); };
                tx.onerror = () => { try { db.close(); } catch (_) {} resolve(true); };
                tx.onabort = () => { try { db.close(); } catch (_) {} resolve(true); };
              });
          } catch (_) {
            try { db.close(); } catch (_) {}
            resolve(true);
          }
        });
      };

      await withStore('readwrite', (store) => {
        return new Promise((resolve) => {
          const sessionPrefix = `${sessionId}|`;
          const range = IDBKeyRange.bound(sessionPrefix, sessionPrefix + '\uffff');
          const req = store.openCursor(range);
          req.onsuccess = () => {
            const cursor = req.result;
            if (cursor) {
              try {
                const k = String(cursor.key || cursor.value?.id || '');
                // No borrar comprobantes del DELIVERY (se manejan aparte en el modal de ubicación)
                if (k.includes('|delivery_') || k.includes('|delivery|delivery_')) {
                  // skip
                } else {
                  cursor.delete();
                }
              } catch (_) {}
              cursor.continue();
            } else {
              resolve(true);
            }
          };
          req.onerror = () => resolve(true);
        });
      });
    } catch (_) {}

    // 3) UI: limpiar input/preview para que no “se quede pegado” visualmente
    try {
      const fileInput = document.getElementById('payment-proof-file');
      const statusEl = document.getElementById('payment-proof-status');
      const previewsEl = document.getElementById('payment-proof-previews');
      const legacy = document.getElementById('payment-proof-picked-name');

      if (fileInput) fileInput.value = '';
      if (legacy) legacy.textContent = '';
      if (statusEl) statusEl.textContent = '';
      if (previewsEl) previewsEl.innerHTML = '';
    } catch (_) {}
  }

  // Si el usuario cambió el método de envío y volvió, NO arrastrar comprobantes del envío anterior.
  try {
    const k = 'pcbuilder_payment_last_shipping';
    const prev = (localStorage.getItem(k) || '').trim();
    if (prev && prev !== __SHIPPING) {
      __wipeAllProductProof().catch(() => {});
      try { localStorage.removeItem('pcbuilder_payment_method'); } catch (_) {}
      // forzar re-selección visual si aplica
      try { localStorage.setItem('pcbuilder_payment_confirmed', 'false'); } catch (_) {}
    }
    localStorage.setItem(k, __SHIPPING);
  } catch (_) {}

  // Nuevo pedido: evitar que un confirmado anterior habilite el botón sin pasar por el modal
  try { localStorage.removeItem('pcbuilder_product_cash_confirmed'); } catch(_) {}

function humanPayment(methodId) {
    const id = String(methodId || '').trim();
    if (id === 'efectivo_divisas') return 'Efectivo (USD / EUR)';
    if (id === 'pago_movil') return 'Pago Móvil';
    if (id === 'transferencia') return 'Transferencia Bancaria';
    if (id === 'binance_pay') return 'Binance Pay';
    if (id === 'zinli') return 'Zinli';
    if (id === 'airtm') return 'AirTM';
    return '—';
  }

  function getStats() {
    // Prefer shared helper if available
    try {
      if (typeof getCartStats === 'function') {
        const s = getCartStats();
        // If something upstream failed (e.g. STORAGE_KEYS not loaded), getCartStats may return zeros.
        // In that case, fall back to reading localStorage directly so the summary never becomes $0/—.
        if (s && (Number(s.totalItems) > 0 || Number(s.totalPrice) > 0) && Array.isArray(s.items) && s.items.length) return s;
      }
    } catch (_) {}

    // Fallback: read cart directly from localStorage (no dependency on STORAGE_KEYS)
    const __num = (v) => {
      if (v == null) return 0;
      if (typeof v === 'number') return isFinite(v) ? v : 0;
      const s = String(v).trim().replace(/[^0-9,\.\-]/g, '');
      if (!s) return 0;
      // handle "3,00" -> "3.00"
      const norm = s.includes(',') && !s.includes('.') ? s.replace(',', '.') : s.replace(/,/g, '');
      const n = Number(norm);
      return isFinite(n) ? n : 0;
    };

    let items = [];
    try {
      const raw = localStorage.getItem('compragamer_cart');
      if (raw) items = JSON.parse(raw) || [];
    } catch (_) { items = []; }

    if (!Array.isArray(items)) items = [];
    const totalItems = items.reduce((t, it) => t + __num(it.quantity || it.qty || 0), 0);
    const totalPrice = items.reduce((t, it) => {
      const q = __num(it.quantity || it.qty || 0) || 0;
      const p = __num(it.priceUsd ?? it.usd ?? it.price ?? it.unit_price ?? it.unitPrice ?? 0);
      return t + (p * q);
    }, 0);

    return { totalItems, totalPrice, items };
  }

  function setContinueEnabled(enabled) {
    
  // --- HARD GATE: delivery cash confirm ---
  // Si el modal de "cambio del delivery" está requerido, NO permitir habilitar el botón hasta que el cliente confirme.
  try {
    const req = localStorage.getItem('pcbuilder_delivery_cash_confirm_required') === '1';
    const ok  = localStorage.getItem('pcbuilder_delivery_cash_confirmed') === '1';
    if (enabled && req && !ok) {
      enabled = false;
    }
  } catch(_) {}
const btn = document.getElementById('payment-continue-btn');
    if (!btn) return;

    /* v56: Gate SOLO en el último paso para envío DELIVERY */
    try {
      if (btn.getAttribute('data-step3') === 'true') {
        const ship = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
        if (ship === 'delivery') {
          const applied = (function(){
            try { return (localStorage.getItem('pcbuilder_delivery_location_applied') === '1') && document.body.classList.contains('dn-delivery-applied'); } catch(_) { return false; }
          })();

          if (!applied) {
            enabled = false;
          } else {
            const deliveryEl = document.getElementById('summary-delivery');
            const txtRaw = (deliveryEl ? (deliveryEl.textContent || '') : '').replace(/\s+/g,' ').trim();
            const txt = txtRaw.toUpperCase();
            // Detectar "gratis" de forma robusta: soporta "$0.00", "0.00 USD", "GRATIS", etc.
// Primero intenta leer el costo real guardado en LocalStorage (más confiable que el texto del resumen),
// luego cae al texto del resumen si hace falta.
const isFree = (function(){
  try {
    // 1) Fuente de verdad: LS usado por delivery-location.js
    const lsCandidates = [
      'pcbuilder_delivery_payable_usd',
      'pcbuilder_delivery_cost_usd'
    ];
    for (const k of lsCandidates) {
      const v = (function(){ try { return localStorage.getItem(k); } catch(_) { return null; } })();
      if (v == null) continue;
      const n = parseFloat(String(v).replace(',', '.'));
      if (Number.isFinite(n)) return n <= 0.0001;
    }

    // 2) Fallback: texto del resumen
    if (txt.includes('GRATIS')) return true;
    const m2 = txtRaw.match(/(-?\d+(?:[\.,]\d+)?)/);
    if (!m2) return false;
    const n2 = parseFloat(String(m2[1]).replace(',', '.'));
    return Number.isFinite(n2) && n2 <= 0.0001;
  } catch(_) { return false; }
})();
            if (isFree) {
              try { localStorage.setItem('pcbuilder_delivery_payment_confirmed','1'); } catch(_) {}
            }
            if (!isFree) {
              const paidOk = (function(){
                try { return localStorage.getItem('pcbuilder_delivery_payment_confirmed') === '1'; } catch(_) { return false; }
              })();
              if (!paidOk) enabled = false;
            }
          }
        }
      }
    } catch(e) {}


    /* Gate: Producto en efectivo exige confirmar modal de cambio (productCash) */
    try {
      if (enabled && btn.getAttribute('data-step3') === 'true') {
        const shipCash = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
        if (shipCash === 'delivery') {
          const pm = String((__lsGet('pcbuilder_payment_method_final') || __lsGet('pcbuilder_payment_method_final_delivery') || __lsGet('pcbuilder_payment_method') || __lsGet('pcbuilder_payment_method_delivery') || '')).trim().toLowerCase();
          const productIsCash = (pm === 'efectivo_divisas' || pm.includes('efectivo'));
          if (productIsCash) {
            const confirmed = (function(){
              try { return localStorage.getItem('pcbuilder_product_cash_confirmed') === '1'; } catch(_) { return false; }
            })();
            const amountOk = (function(){
              try {
                const v = localStorage.getItem('pcbuilder_product_cash_amount');
                const n = v == null ? NaN : parseFloat(String(v));
                return Number.isFinite(n) && n > 0;
              } catch(_) { return false; }
            })();
            if (!(confirmed && amountOk)) enabled = false;
          }
        }
      }
    } catch(e) {}


    /* Gate: Envío Nacional requiere agencia confirmada */
    try {
      if (btn.getAttribute('data-step3') === 'true') {
        const ship2 = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
        if (ship2 === 'national') {
          if (!window.hasConfirmedNationalSelection()) {
            enabled = false;
          }
        }
      }
    } catch(e) {}

    btn.classList.toggle('is-disabled', !enabled);
    btn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
    btn.dataset.locked = enabled ? 'false' : 'true';
    if (enabled) btn.removeAttribute('disabled'); else btn.setAttribute('disabled','disabled');
}

  function setSelected(el) {
    document.querySelectorAll('.payment-option').forEach(x => x.classList.remove('is-selected'));
    if (el) el.classList.add('is-selected');
  }
  function updatePaymentTitle(){ /* noop */ }


  function renderPaymentList() {
    
    // Nunca mezclar instrucciones dentro del listado
    clearPaymentDetails();
const list = document.getElementById('payment-list');
    const note = document.getElementById('payment-note');
    if (!list) return;

        const shipping = __SHIPPING;
    const optionsPickup = [
      { id: 'efectivo_divisas', title: 'Efectivo (USD / EUR)', icon: 'fa-money-bill-wave', subType: 'pickup' },
      { id: 'pago_movil', title: 'Pago Móvil', icon: 'fa-mobile-screen', sub: 'Tasa Binance P2P', subType: 'binance' },
      { id: 'transferencia', title: 'Transferencia Bancaria', icon: 'fa-building-columns', sub: 'Tasa Binance P2P', subType: 'binance' },
      { id: 'binance_pay', title: 'Binance Pay', icon: 'fa-coins' },
      { id: 'zinli', title: 'Zinli', icon: 'fa-credit-card' },
      { id: 'airtm', title: 'AirTM', icon: 'fa-wallet', sub: 'Impuesto 2% (AirTM)', subType: 'fee' },
    ];

    // Delivery: mismo flujo que Pickup (Retiro Personal), pero separado para futuras modificaciones
    const optionsDelivery = [
      { id: 'efectivo_divisas', title: 'Efectivo (USD / EUR)', icon: 'fa-money-bill-wave', subType: 'pickup' },
      { id: 'pago_movil', title: 'Pago Móvil', icon: 'fa-mobile-screen', sub: 'Tasa Binance P2P', subType: 'binance' },
      { id: 'transferencia', title: 'Transferencia Bancaria', icon: 'fa-building-columns', sub: 'Tasa Binance P2P', subType: 'binance' },
      { id: 'binance_pay', title: 'Binance Pay', icon: 'fa-coins' },
      { id: 'zinli', title: 'Zinli', icon: 'fa-credit-card' },
      { id: 'airtm', title: 'AirTM', icon: 'fa-wallet', sub: 'Impuesto 2% (AirTM)', subType: 'fee' },
    ];

    // Envío nacional: mismo flujo que Pickup (Retiro Personal), pero separado para futuras modificaciones
    const optionsNational = [
      { id: 'pago_movil', title: 'Pago Móvil', icon: 'fa-mobile-screen', sub: 'Tasa Binance P2P', subType: 'binance' },
      { id: 'transferencia', title: 'Transferencia Bancaria', icon: 'fa-building-columns', sub: 'Tasa Binance P2P', subType: 'binance' },
      { id: 'binance_pay', title: 'Binance Pay', icon: 'fa-coins' },
      { id: 'zinli', title: 'Zinli', icon: 'fa-credit-card' },
      { id: 'airtm', title: 'AirTM', icon: 'fa-wallet', sub: 'Impuesto 2% (AirTM)', subType: 'fee' },
    ];

    let options = optionsPickup;
    if (shipping === 'delivery') options = optionsDelivery;
    if (shipping === 'national') options = optionsNational;

        let saved = (__lsGet('pcbuilder_payment_method') || '').trim();
        // Si el método guardado ya no existe para el envío actual (p.ej. Envío nacional sin efectivo), limpiar.
        try {
          const allowed = new Set(options.map(o => o.id));
          if (saved && !allowed.has(saved)) {
            __lsRemove('pcbuilder_payment_method');
            saved = '';
          }
        } catch (_) {}

    list.innerHTML = options.map((o) => {
      const subtitle = o.sub
        ? (o.subType === 'fee'
            ? `<div class="payment-sub payment-sub-fee payment-sub-hover">${o.sub}</div>`
            : `<div class="payment-sub payment-sub-hover">${o.sub}</div>`)
        : '';
      const selected = saved === o.id ? 'is-selected' : '';
      return `
        <button type="button" class="payment-option category-item ${selected}" data-pay="${o.id}">
          <div class="payment-icon"><i class="fas ${o.icon}"></i></div>
          <div class="payment-text">
            <div class="payment-title">${o.title}</div>
            ${subtitle}
          </div>
        </button>
      `;
    }).join('');

    // El botón "Proceder y continuar" solo se habilita automáticamente si ya existe un método guardado.
    // (El caso especial de efectivo divisas se maneja dentro de renderPaymentDetails).
    if (saved) setContinueEnabled(true);
    else setContinueEnabled(false);
}

  function computeDiscount(subtotal, code) {
    if (!code) return 0;
    const normalized = String(code).trim().toUpperCase();
    if (normalized === 'PC10') return subtotal * 0.10;
    return 0;
  }

  
  function computePayableTotal() {
    let stats = { items: [], totalPrice: 0 };
    try { stats = getStats(); } catch (_) { stats = { items: [], totalPrice: 0 }; }
    const items = Array.isArray(stats.items) ? stats.items : [];
    if (items.length === 0) return { total: 0, formatted: money(0) };

    const subtotal = Number(stats.totalPrice || 0);
    const coupon = (localStorage.getItem('compragamer_coupon') || '').trim();
    const discount = computeDiscount(subtotal, coupon);
    const taxable = Math.max(0, subtotal - discount);
    const paymentMethodId = (__lsGet('pcbuilder_payment_method') || '').trim();
    const tax = computeTax(taxable, paymentMethodId);
    // Total del PRODUCTO (sin delivery)
    let total = taxable + tax; 

    const shipMethod = ((localStorage.getItem('pcbuilder_shipping_method') || sessionStorage.getItem('pcbuilder_shipping_method') || '') + '').trim().toLowerCase();
    const isDelivery = (shipMethod === 'delivery');
    const deliveryOut = (localStorage.getItem('pcbuilder_delivery_out_of_service') === '1');
    const deliveryUsdBase = Number(localStorage.getItem('pcbuilder_delivery_cost_usd'));
    const hasPrice = Number.isFinite(deliveryUsdBase);
    // Nota: el costo guardado es el BASE del delivery (USD). Si el método de pago del delivery es AirTM,
    // se suma 2% de impuesto.
    let deliveryToAdd = (isDelivery && !deliveryOut && hasPrice) ? Math.max(0, deliveryUsdBase) : 0;
    const totalWithDeliveryBase = total + deliveryToAdd;
    return { total, formatted: money(total) };
  }

  function clearPaymentDetails(){
    const box=document.getElementById('payment-details');
    if(!box) return;
    box.classList.add('is-hidden');
    box.innerHTML='';
  }
/**
 * Subida de comprobantes:
 * - En producción se recomienda SIEMPRE usar el proxy del servidor para evitar CORS y no exponer la key.
 * - Si el proxy no existe / falla, hace fallback a subida directa a imgbb.
 */
async function uploadProofImage(file) {
  // Subida SIEMPRE vía servidor (proxy) para no exponer la key en el frontend
  const form = new FormData();
  form.append('image', file);

  const res = await fetch('../api/imgbb-upload.php', { method: 'POST', body: form });
  let data = null;
  try { data = await res.json(); } catch (_) {}

  if (res.ok && data?.ok && data?.url) return data.url;

  // Mensaje de error legible
  const msg = (data && (data.message || data.error)) ? (data.message || data.error) : 'Error subiendo imagen';
  throw new Error(msg);
}

  function validateImageFile(file) {
    const allowed = ['image/jpeg','image/png','image/gif','image/webp'];
    if (!allowed.includes(file.type)) return { ok:false, msg:'Formato inválido. Usa JPEG, PNG, GIF, WEBP.' };
    const max = 32 * 1024 * 1024;
    if (file.size > max) return { ok:false, msg:'El archivo excede 32MB.' };
    return { ok:true, msg:'' };
  }

function renderPaymentDetails(methodId) {
  // SOLO_EFECTIVO_DIVISAS_CONTINUE
  // Para Efectivo (USD / EUR) no se requiere comprobante: permitir continuar inmediatamente.
  if (String(methodId) === 'efectivo_divisas') {
    setContinueEnabled(true);
  }

    const box = document.getElementById('payment-details');
    if (!box) return;

    let monto = '';
    let payableUSD = 0;
    try {
      const pay = computePayableTotal();
      monto = pay.formatted || '';
      payableUSD = Number(pay.total || 0);
    } catch (_) {
      monto = '';
      payableUSD = 0;
    }

    const rate = getBinanceRate();
    const montoBsRaw = (rate > 0) ? (payableUSD * rate) : 0;
    const montoBs = (rate > 0) ? moneyVES(montoBsRaw) : 'Bs —';

    
    // Persistir montos/tasa usados para mostrar en la pantalla final (order-completion)
    try {
      __lsSet('pcbuilder_payable_usd', String(payableUSD || 0));
      __lsSet('pcbuilder_binance_rate_used', String(rate || 0));
      __lsSet('pcbuilder_payable_bs', String(montoBsRaw || 0));
    } catch (_) {}
const montoDisplay = isBinanceBolivaresMethod(methodId) ? montoBs : monto;

    const templates = {
      efectivo_divisas: {
        img: '/images/efectivo_divisas.png',
        note: '',
        rows: [
          ['Monto a pagar', monto],
        ],
      },

      pago_movil: {
        img: '/images/pago_movil_qr.png',
        note: 'Escanea el codigo QR para realizar el pago movil.',
        rows: [
          ['Banco', 'Banesco Banco Universal (0134)'],
          ['Cedula', 'V-26908729'],
          ['Numero de telefono', '04241729617'],
          ['Tasa Binance P2P (Bs/USD)', '<div class="binance-rate-row"><span id="binance-rate-display" class="binance-rate-display">Cargando…</span><button type="button" id="binance-rate-refresh" class="binance-rate-refresh">Actualizar</button></div>'],
          ['Monto a pagar (Bs)', montoDisplay],
        ],
      },
      transferencia: {
        img: '/images/transferencia_qr.png',
        note: '',
        rows: [
          ['Banco', 'Banesco Banco Universal'],
          ['Cedula', 'V-26908729'],
          ['Numero de cuenta', '0134-0473-95-4731039270'],
          ['Tasa Binance P2P (Bs/USD)', '<div class="binance-rate-row"><span id="binance-rate-display" class="binance-rate-display">Cargando…</span><button type="button" id="binance-rate-refresh" class="binance-rate-refresh">Actualizar</button></div>'],
          ['Monto a pagar (Bs)', montoDisplay],
        ],
      },
      binance_pay: {
        img: '/images/binance_pay_qr.png',
        note: 'Escanea el codigo QR para realizar el pago.',
        rows: [
          ['Correo electronico', 'goddezzeus@gmail.com'],
          ['Monto a pagar', monto],
        ],
      },
      zinli: {
        img: '/images/zinli_qr.png',
        note: 'Escanea el codigo QR para realizar el pago.',
        rows: [
          ['Correo electronico primario', 'dakspaces@gmail.com'],
          ['Correo electronico secundario', 'godezzeus@gmail.com'],
          ['Monto a pagar', monto],
        ],
      },
      airtm: {
        img: '/images/airtm_qr.png',
        note: 'Escanea el codigo QR para realizar el pago.',
        rows: [
          ['Nombre de usuario', 'cpustorevzla'],
          ['Correo electronico', 'dakspaces@gmail.com'],
          ['Monto a pagar', monto],
        ],
      },
    };

    const t = templates[methodId];
    if (!t) {
      box.classList.add('is-hidden');
      box.innerHTML = '';
      return;
    }

    const noteHtml = t.note ? `<div class="payment-details-note">${t.note}</div>` : '';
    const rowsHtml = t.rows.map(r => {
      const label = r[0];
      let value = r[1];

      // Colorize the payable amount consistently across payment methods
      if (typeof label === 'string' && label.toLowerCase().includes('monto a pagar')) {
        value = `<span class="payment-amount-green">${value}</span>`;
      }

      return `<tr><td>${label}:</td><td>${value}</td></tr>`;
    }).join('');

    
    // Se elimina el texto de formatos/peso de todos los métodos de pago (solicitado)
    const proofHelp = '';
    const proofStatus = `
      <div id="payment-proof-status" class="payment-proof-status"></div>
      <div id="payment-proof-previews" class="payment-proof-previews"></div>
    `;

    // El selector de archivo es personalizado. No mostramos texto tipo "Sin archivos seleccionados"
    // ni nombres duplicados: el estado se entiende por la vista previa + botón eliminar.
    const proofRowsHtml = (methodId === 'efectivo_divisas')
      ? `
<tr>
  <td colspan="2">
    <div class="alert alert-info" role="alert" style="margin-top:10px; font-size:14px; line-height:1.4; text-align:left; font-weight:normal;">
      <strong>Atención:</strong> Informamos a nuestros clientes que solo se aceptan billetes aceptables y/o en perfectas condiciones (sin roturas, sin escrituras, no muy gastados). Agradecemos su comprensión.
    </div>
  </td>
</tr>
`
      : `
        <tr>
          <td>Adjuntar captura de pago:</td>
          <td>
            <div class="file-picker">
              <input id="payment-proof-file" type="file" class="payment-proof-file file-picker-input" style="display:none" accept="image/jpeg,image/png,image/gif,image/webp" />
              <button type="button" id="payment-proof-pick" class="file-picker-btn">Seleccionar archivo</button>
            </div>
            ${proofHelp}
            ${proofStatus}
          </td>
        </tr>
      `;
box.innerHTML = `
      <div class="payment-details-inner">
        <img src="${t.img}" width="256" height="256" alt="QR ${methodId}">
        ${noteHtml}
        <table class="payment-details-table">
          <tbody>
            ${rowsHtml}
            ${proofRowsHtml}
          </tbody>
        </table>
      </div>
    `;
    box.classList.remove('is-hidden');

    

    // DEFENSIVE_CASH_ENABLE
    if (String(methodId) === 'efectivo_divisas') {
      setTimeout(() => setContinueEnabled(true), 0);
    }
// Si el método usa tasa Binance P2P, obtenerla automáticamente y mostrarla
    if (isBinanceBolivaresMethod(methodId)) {
      const display = document.getElementById('binance-rate-display');
      const refreshBtn = document.getElementById('binance-rate-refresh');

      const paint = (rate, isLoading = false) => {
        if (!display) return;
        if (isLoading) {
          display.textContent = 'Cargando…';
          return;
        }
        if (rate > 0) {
          display.textContent = moneyVES(rate) + ' / USD';
        } else {
          display.textContent = 'No disponible';
        }
      };

      const load = async () => {
        paint(0, true);
        try {
          const rate = await ensureBinanceRate();
          paint(rate, false);
          // refrescar monto en Bs y resumen al tener tasa
          renderPaymentDetails(methodId);
          renderSummary();
  window.__pcbuilderRenderSummary = renderSummary;
        } catch (_) {
          paint(0, false);
        }
      };

      // pintar con cache si existe
      paint(getBinanceRate(), false);
      // si no hay cache, cargar
      if (getBinanceRate() <= 0) load();

      if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
          // invalidar cache y recargar
          try { localStorage.removeItem(BINANCE_RATE_CACHE_KEY); } catch (_) {}
          load();
        });
      }
    }


        // Comprobantes: seleccionar imágenes (SIN subir) y habilitar confirmación.
        // Se suben a ImgBB SOLO al final (orden confirmada), para evitar consumir cuotas por reemplazos.
        if (String(methodId) === 'efectivo_divisas') {
          // No requerimos comprobante para efectivo divisas
          setContinueEnabled(true);
          return;
        }
        setContinueEnabled(false);
        const fileInput = document.getElementById('payment-proof-file');
        const statusEl = document.getElementById('payment-proof-status');
        const previewsEl = document.getElementById('payment-proof-previews');
        const pickBtn = document.getElementById('payment-proof-pick');
        // Ya no mostramos el texto/nombre del archivo (evita duplicados y el mensaje nativo).
        const pickedNameEl = null;
        if (pickBtn && fileInput) {
          pickBtn.addEventListener('click', () => fileInput.click());
        }
        const maxFiles = (methodId === 'efectivo_divisas') ? 1 : 1;
        // Claves separadas por método para evitar que se mezclen comprobantes entre métodos
        const storageKey = (methodId === 'efectivo_divisas') ? __cashBillKey() : __paymentProofKey(methodId);

        // ID de sesión de la orden (para poder llevar archivos entre páginas sin subirlos)
        const getOrCreateOrderSessionId = () => {
          try {
            const k = 'pcbuilder_order_session_id';
            let v = (localStorage.getItem(k) || '').trim();
            if (!v) {
              v = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
              localStorage.setItem(k, v);
            }
            return v;
          } catch (_) {
            return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
          }
        };
        const sessionId = getOrCreateOrderSessionId();

        // IndexedDB (guardamos Blob para previsualizar y subir luego)
        const DB_NAME = 'pcbuilder_uploads_db';
        const DB_VERSION = 2;
        const STORE = 'uploads';
        // Guardamos comprobantes en 2 buckets: bills (efectivo) y proof (resto).
        // Cuando el usuario cambia de método, limpiamos el bucket anterior para que no se “arrastre”.
        const kind = (methodId === 'efectivo_divisas') ? 'bills' : 'proof';
        const prefix = `${sessionId}|${__SHIPPING}|${kind}|`;
        let previewObjectUrls = [];

        const openUploadsDb = () => new Promise((resolve, reject) => {
          try {
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onupgradeneeded = () => {
              const db = req.result;
              // Migración segura: si existe el store pero fue creado sin keyPath, lo recreamos.
              // (Sin esto, store.put({id,...}) falla silenciosamente en algunos entornos.)
              if (db.objectStoreNames.contains(STORE)) {
                try {
                  const existing = req.transaction.objectStore(STORE);
                  if (existing && existing.keyPath !== 'id') {
                    db.deleteObjectStore(STORE);
                    db.createObjectStore(STORE, { keyPath: 'id' });
                  }
                } catch (_) {
                  // si no podemos inspeccionar, intentamos recrear
                  try { db.deleteObjectStore(STORE); } catch (_) {}
                  db.createObjectStore(STORE, { keyPath: 'id' });
                }
              } else {
                db.createObjectStore(STORE, { keyPath: 'id' });
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
            const tx = db.transaction(STORE, mode);
            const store = tx.objectStore(STORE);
            let result;
            try { result = fn(store); } catch (e) { reject(e); return; }
            tx.oncomplete = () => resolve(result);
            tx.onerror = () => reject(tx.error || new Error('IndexedDB error'));
            tx.onabort = () => reject(tx.error || new Error('IndexedDB abort'));
          });
        };

        // Si el usuario cambia de método de pago, limpiamos TODOS los comprobantes de esta sesión
        // (evita que una captura aparezca en otro método y evita que se suba el comprobante equivocado).
        const clearAllSessionUploads = async () => {
          await withStore('readwrite', (store) => {
            return new Promise((resolve) => {
              const sessionPrefix = `${sessionId}|${__SHIPPING}|`;
              const range = IDBKeyRange.bound(sessionPrefix, sessionPrefix + '\uffff');
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
          // Limpiar posibles URLs previas
          try { localStorage.removeItem(__cashBillKey()); } catch (_) {}
          try {
            if (__lastPaymentDetailsMethod) {
              localStorage.removeItem(__paymentProofKey(__lastPaymentDetailsMethod));
            }
            // También limpiar el key genérico (por si alguna versión anterior lo usó)
            localStorage.removeItem(__paymentProofGenericKey());
          } catch (_) {}
        };

        if (__lastPaymentDetailsMethod && __lastPaymentDetailsMethod !== methodId) {
          // Cambio real de método (no re-render por tasa Binance, etc.)
          clearAllSessionUploads().catch(() => {});
        }
        __lastPaymentDetailsMethod = methodId;

        const listSelected = async () => {
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
        };

        const clearSelected = async () => {
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
          try { localStorage.removeItem(storageKey); } catch (_) {}
          if (fileInput) fileInput.value = '';
          await updateSelectedStatus();
          await renderPreviews();
          await updatePickerName();
          setContinueEnabled(false);
        };

        const removeOne = async (id) => {
          const key = String(id || '');
          if (!key) return;
          await withStore('readwrite', (store) => {
            store.delete(key);
          });
          try { localStorage.removeItem(storageKey); } catch (_) {}
                    if (fileInput) fileInput.value = '';
await updateSelectedStatus();
          await renderPreviews();
          await updatePickerName();
          const count = (await listSelected()).length;
          setContinueEnabled(count > 0);
        };

        const updateSelectedStatus = async () => {
          // No mostramos texto adicional ("estado", contadores, etc.) para evitar duplicar información
          if (!statusEl) return;
          statusEl.textContent = '';
        };

        // Mantiene sincronizado el picker (mostrar/ocultar el botón) según si hay una imagen guardada.
        // Ya no mostramos texto tipo "Sin archivos seleccionados" ni "1 archivo seleccionado".
        const updatePickerName = async () => {
          const existing = await listSelected();
          try {
            if (pickBtn) {
              if (existing && existing.length > 0) pickBtn.classList.add('is-hidden');
              else pickBtn.classList.remove('is-hidden');
            }
          } catch (_) {}

          // Por compatibilidad con versiones anteriores: si existiera el span, lo ocultamos.
          try {
            const legacy = document.getElementById('payment-proof-picked-name');
            if (legacy) {
              legacy.textContent = '';
              legacy.classList.add('is-empty');
              legacy.style.display = 'none';
            }
          } catch (_) {}
        };


        const escapeHtml = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c));
        const renderPreviews = async () => {
          if (!previewsEl) return;
          try { previewObjectUrls.forEach(u => URL.revokeObjectURL(u)); } catch (_) {}
          previewObjectUrls = [];
          const existing = await listSelected();
          if (!existing.length) {
            previewsEl.innerHTML = '';
            return;
          }
          previewsEl.innerHTML = existing.map((item, idx) => {
            const url = URL.createObjectURL(item.data);
            previewObjectUrls.push(url);
            const name = escapeHtml(item.name || `Imagen ${idx+1}`);
            const idAttr = escapeHtml(item.id);
            return `
              <div class="payment-proof-preview">
                <a href="${url}" target="_blank" rel="noopener">
                  <img src="${url}" alt="${name}">
                </a>
                <div class="payment-proof-filename">${name}</div>
                <button type="button" class="payment-proof-remove" data-proof-remove="${idAttr}">Eliminar</button>
              </div>
            `;
          }).join('');
        };

        // Si el usuario cambia de método, limpiamos el tipo contrario para evitar que se suban imágenes equivocadas al final
        (async () => {
          const otherKind = (kind === 'bills') ? 'proof' : 'bills';
          const otherPrefix = `${sessionId}|${otherKind}|`;
          try {
            await withStore('readwrite', (store) => {
              return new Promise((resolve) => {
                const range = IDBKeyRange.bound(otherPrefix, otherPrefix + '\uffff');
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
          } catch (_) {}
          try {
            localStorage.removeItem(otherKind === 'bills' ? __cashBillKey() : __paymentProofGenericKey());
          } catch (_) {}
        })();

        (async () => {
          await updateSelectedStatus();
          await renderPreviews();
          await updatePickerName();
          const count = (await listSelected()).length;
          if (count > 0) setContinueEnabled(true);
        })();

        if (previewsEl) {
          previewsEl.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-proof-remove]');
            if (!btn) return;
            e.preventDefault();
            removeOne(btn.getAttribute('data-proof-remove'));
          });
        }

        if (fileInput) {
          fileInput.addEventListener('change', async () => {
            const files = fileInput.files ? Array.from(fileInput.files) : [];
            if (files.length === 0) return;
            // Mostrar nombre(s) seleccionado(s) en UI personalizada
            try {
              if (files.length === 1) {
                await updatePickerName(files[0].name || '1 archivo seleccionado');
              } else {
                await updatePickerName(`${files.length} archivos seleccionados`);
              }
            } catch (_) {}

            // Para comprobante único, reemplazamos automáticamente
            if (kind === 'proof') {
              await clearSelected();
            }

            const existing = await listSelected();
            const remaining = maxFiles - existing.length;

            if (remaining <= 0) {
              if (statusEl) statusEl.textContent = `Ya seleccionaste el máximo (${maxFiles}). Elimina para volver a subir.`;
              fileInput.value = '';
              await updatePickerName();
              setContinueEnabled(existing.length > 0);
              return;
            }

            if (files.length > remaining) {
              if (statusEl) statusEl.textContent = `Solo puedes seleccionar ${remaining} archivo(s) más (máximo ${maxFiles}).`;
              if (maxFiles > 1) fileInput.value = '';
              await updatePickerName();
              setContinueEnabled(existing.length > 0);
              return;
            }

            for (const f of files) {
              const v = validateImageFile(f);
              if (!v.ok) {
                if (statusEl) statusEl.textContent = v.msg;
                if (maxFiles > 1) fileInput.value = '';
                setContinueEnabled(false);
                return;
              }
            }

            try {
              if (statusEl) statusEl.textContent = (maxFiles > 1) ? 'Guardando imágenes...' : 'Guardando imagen...';
              await withStore('readwrite', (store) => {
                for (const f of files) {
                  const id = prefix + `${Date.now()}_${Math.random().toString(16).slice(2)}`;
                  store.put({
                    id,
                    name: f.name || '',
                    type: f.type || '',
                    size: f.size || 0,
                    data: f
                  });
                }
              });
              try { localStorage.removeItem(storageKey); } catch (_) {}
              if (maxFiles > 1) fileInput.value = '';
              await updateSelectedStatus();
              await renderPreviews();
              await updatePickerName();
              setContinueEnabled(true);
            } catch (e) {
              if (statusEl) statusEl.textContent = 'Error al guardar imagen. Intenta de nuevo.';
              setContinueEnabled(false);
              if (maxFiles > 1) fileInput.value = '';
              await updateSelectedStatus();
              await renderPreviews();
              await updatePickerName();
            }
          });
        }
}
function computeTax(amount, paymentMethodId) {
    // Impuestos por defecto: 0
    // Solo se aplica 2% si el método de pago seleccionado es AirTM
    if (paymentMethodId === 'airtm') return amount * 0.02;
    return 0;
  }

  function lookupProduct(category, id) {
    try {
      const data = (typeof productsData !== 'undefined') ? productsData : (window.productsData || null);
      if (!data) return null;
      const list = data[category];
      if (!Array.isArray(list)) return null;
      const numId = (typeof id === 'string') ? parseInt(id, 10) : id;
      return list.find(p => p && p.id == numId) || null;
    } catch (_) {
      return null;
    }
  }

  function getPrimaryImage(item, inv) {
    // Preferimos la imagen del inventario (fuente de verdad) para que,
    // si cambias inventory.js, el checkout lo refleje aunque el carrito
    // tenga un valor antiguo (ej: un ícono FontAwesome).
    const rawItem = (item && (item.image || item.img)) || '';
    const rawInv = (inv && (inv.image || inv.img)) || '';

    const fallback = '/assets/images/placeholder-product.png';

    const norm = (raw) => String(raw || '').trim();

    const isFontAwesome = (v) => {
      if (!v) return false;
      // "fa-microchip" o "fas fa-microchip"
      return v.startsWith('fa-') || (v.includes('fa-') && !v.includes('/') && !v.includes('.'));
    };

    const pick = () => {
      const vi = norm(rawInv);
      const vt = norm(rawItem);

      // 1) Inventario si es una ruta/URL válida
      if (vi && !isFontAwesome(vi)) return vi;

      // 2) Carrito si es una ruta/URL válida
      if (vt && !isFontAwesome(vt)) return vt;

      // 3) Nada útil
      return '';
    };

    const v = pick();
    if (!v) return fallback;

    // Remoto
    if (v.startsWith('http://') || v.startsWith('https://')) return v;
    // Absoluto desde raíz
    if (v.startsWith('/')) return v;
    // Relativo -> hacerlo absoluto (necesario en /checkout/*)
    return '/' + v.replace(/^\.\/?/, '');
  }

  function renderSummary() {
    const stats = getStats();

    const listEl = document.getElementById('summary-items-list');
    const subtotalEl = document.getElementById('summary-subtotal');
    const discountEl = document.getElementById('summary-discount');
    const couponEl = document.getElementById('summary-coupon');
    const taxEl = document.getElementById('summary-tax');
    const deliveryRowEl = document.getElementById('summary-delivery-row');
    const deliveryEl = document.getElementById('summary-delivery');
    const totalEl = document.getElementById('summary-total');
    const shipEl = document.getElementById('summary-shipping');
    const shipLabel = document.getElementById('payment-shipping-label');

    const items = Array.isArray(stats.items) ? stats.items : [];
    const subtotal = Number(stats.totalPrice || 0);

    const coupon = (localStorage.getItem('compragamer_coupon') || '').trim();
    const discount = computeDiscount(subtotal, coupon);
    const taxable = Math.max(0, subtotal - discount);
    const paymentMethodId = (__lsGet('pcbuilder_payment_method') || '').trim();
    const tax = computeTax(taxable, paymentMethodId);
    const total = taxable + tax;

    const shipMethod = ((localStorage.getItem('pcbuilder_shipping_method') || sessionStorage.getItem('pcbuilder_shipping_method') || '') + '').trim().toLowerCase();
    const isDelivery = (shipMethod === 'delivery');
    const deliveryOut = (localStorage.getItem('pcbuilder_delivery_out_of_service') === '1');
    const deliveryUsd = Number(localStorage.getItem('pcbuilder_delivery_cost_usd'));
    const hasPrice = Number.isFinite(deliveryUsd);
    const deliveryPaidOk = (function(){ try { return localStorage.getItem('pcbuilder_delivery_payment_confirmed') === '1'; } catch(_) { return false; } })();
    let deliveryToAdd = (isDelivery && !deliveryOut && hasPrice && (deliveryUsd <= 0 || deliveryPaidOk)) ? Math.max(0, deliveryUsd) : 0;
// totalWithDelivery se calcula después de aplicar recargos del método de pago del delivery

    if (listEl) {
      if (items.length === 0) {
        listEl.innerHTML = '<div class="checkout-note">Tu carrito está vacío.</div>';
      } else {
        listEl.innerHTML = items.map((item) => {
          const name = item.name || 'Producto';
          const cat = item.category || '—';
          const qty = Math.max(1, Number(item.quantity || 1));
          const inv = lookupProduct(cat, item.id);
          const img = getPrimaryImage(item, inv);
          return `
            <div class="summary-item">
              <div class="summary-item-img">
                <img src="${img}" alt="${name}">
              </div>
              <div class="summary-item-info">
                <div class="summary-item-name">${name}</div>
</div>
              <div class="summary-item-qty">x${qty}</div>
            </div>
          `;
        }).join('');
      }
    }

    const deliveryPaymentMethodId = (function(){
  try {
    return localStorage.getItem('pcbuilder_delivery_payment_method') || sessionStorage.getItem('pcbuilder_delivery_payment_method') || '';
  } catch(_) { return ''; }
})();
const useVES = isBinanceBolivaresMethod(paymentMethodId);
const deliveryUseVES = isBinanceBolivaresMethod(deliveryPaymentMethodId);
    // IMPORTANTE:
    // El resumen SIEMPRE debe renderizar el subtotal/descuento/impuesto/total del PRODUCTO.
    // Antes se suprimía cuando el producto era en Bs pero el delivery era en USD,
    // dejando el panel en $0/— al volver atrás o cambiar métodos. Esto NO debe ocurrir.
    const __suppressBolivaresSummary = false;
    // AirTM: impuesto 2% SOLO al delivery
    if (String(deliveryPaymentMethodId||'').trim() === 'airtm') {
      deliveryToAdd = deliveryToAdd * 1.02;
    }
    const totalWithDelivery = total + deliveryToAdd;
    const rate = getBinanceRate();

    // Si el pago del producto es en bolívares y no hay tasa aún, pedirla y re-renderizar.
    // Evita que al volver atrás el resumen quede en 0 o en "Bs —" sin actualizar.
    if (useVES && !(Number(rate) > 0)) {
      try {
        if (!window.__pcbuilder_summary_rate_req) {
          window.__pcbuilder_summary_rate_req = true;
          ensureBinanceRate()
            .then(() => { try { renderSummary(); } catch (_) {} })
            .catch(() => {})
            .finally(() => { try { window.__pcbuilder_summary_rate_req = false; } catch(_) {} });
        }
      } catch(_) {}
    }

    const fmtSubtotal = useVES ? (rate > 0 ? moneyVES(subtotal * rate) : 'Bs —') : money(subtotal);
    const fmtDiscount = useVES ? (rate > 0 ? moneyVES(discount * rate) : 'Bs —') : money(discount);
    const fmtTax = useVES ? (rate > 0 ? moneyVES(tax * rate) : 'Bs —') : money(tax);
    const fmtTotal = useVES ? (rate > 0 ? moneyVES(totalWithDelivery * rate) : 'Bs —') : money(totalWithDelivery);

    if (subtotalEl) subtotalEl.textContent = fmtSubtotal;
    if (discountEl) discountEl.textContent = discount ? `-${fmtDiscount}` : (useVES ? (rate > 0 ? moneyVES(0) : 'Bs —') : money(0));
    if (couponEl) couponEl.textContent = coupon ? coupon : '—';
    if (taxEl) taxEl.textContent = fmtTax;

    // Delivery row rendering (solo DELIVERY)
    if (deliveryRowEl) deliveryRowEl.style.display = isDelivery ? 'flex' : 'none';
    if (deliveryEl) {
      if (!isDelivery) {
        deliveryEl.textContent = '—';
      } else if (deliveryOut) {
        deliveryEl.textContent = '—';
      } else if (!hasPrice) {
        deliveryEl.textContent = '—';
      } else {
        // Para DELIVERY: mostrar Bs solo si el método de pago del DELIVERY es en bolívares (Pago Móvil / Transferencia)
        if (deliveryToAdd <= 0) {
          deliveryEl.textContent = 'GRATIS';
        } else {
          const usdTxt = money(deliveryToAdd);
          const r = Number(rate || 0);

          if (deliveryUseVES) {
            if (r > 0) {
              deliveryEl.textContent = `${usdTxt} (${moneyVES(deliveryToAdd * r)})`;
            } else {
              // disparar carga de tasa si aún no está, y refrescar
              ensureBinanceRate()
                .then(() => { try { renderSummary(); } catch (_) {} })
                .catch(() => {});
              deliveryEl.textContent = `${usdTxt} (Bs —)`;
            }
          } else {
            // Método en USD/EUR/etc: solo USD en el resumen
            deliveryEl.textContent = usdTxt;
          }
        }
      }
    }

    if (totalEl) totalEl.textContent = fmtTotal;
    const shipText = humanShipping(getShippingMethod());
    if (shipEl) shipEl.innerHTML = `
<span class="method-badge">
  <i class="fas fa-check-circle"></i>
  <span>${shipText}</span>
</span>
`;
        if (shipLabel) shipLabel.innerHTML = `<i class="fas fa-check-circle"></i><span>${shipText}</span>`;
  }


  function goToPayInstructions(methodId){
    // Mostrar instrucciones/tabla de pago inmediatamente
    const titleEl = document.getElementById('payment-title');
    if (titleEl) titleEl.textContent = 'Realiza el pago';

    renderPaymentDetails(methodId);

    // Cambiar el botón a estado de confirmación (la validación de comprobante lo habilita)
    const contBtn = document.getElementById('payment-continue-btn');
    if (contBtn) {
      contBtn.textContent = 'Confirmar tu pago';
      contBtn.setAttribute('data-state', 'pay');
      
      try { __pmSyncContinueBtnPresence(); } catch(_) {}contBtn.setAttribute('data-locked', 'true');
    }

    // Ocultar los demás métodos (mantener solo el seleccionado) y permitir cambiar
    const listWrap = document.getElementById('payment-list');
    if (listWrap) {
      listWrap.querySelectorAll('.payment-option').forEach(opt => {
        if (!opt.classList.contains('is-selected')) opt.classList.add('is-hidden');
      });
    }

    const changeBtn = document.getElementById('change-payment-method-btn');
    if (changeBtn) changeBtn.classList.remove('is-hidden');
  }

  function wire() {
    const list = document.getElementById('payment-list');
    const cont = document.getElementById('payment-continue-btn');
    const changeBtn = document.getElementById('change-payment-method-btn');
    if (changeBtn) changeBtn.classList.add('is-hidden');
    const back = document.getElementById('back-to-shipping-btn');

    if (back) {
      back.addEventListener('click', () => {
        // No borrar la tasa aquí. Al volver atrás el resumen debe seguir funcionando,
        // y si hace falta recalcular, renderSummary() ya dispara ensureBinanceRate().
        // permitir volver y mantener el step en shipping
        try { sessionStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
        try { localStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
        window.location.href = '/checkout/shipping-method.html';
      });
    }

    if (list) {
      list.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-pay]');
        if (!btn) return;

        const opt = btn.closest('.payment-option');
        if (opt && opt.classList.contains('is-locked')) return;

        const id = btn.getAttribute('data-pay');
        if (!id) return;

        // NO conservar comprobantes entre métodos/envíos
        __wipeAllProductProof().catch(() => {});

        try { __lsSet('pcbuilder_payment_method', id); } catch (_) {}

        // Mantener sincronizado el método "final" para evitar que quede pegado un valor anterior
        try { __lsSet('pcbuilder_payment_method_final', id); } catch (_) {}

        // Si el usuario cambia a un método NO efectivo, limpiar banderas del modal de efectivo (product cash)
        try {
          const isCash = (String(id || '').toLowerCase() === 'efectivo_divisas' || String(id || '').toLowerCase().includes('efectivo'));
          if (!isCash) {
            localStorage.removeItem('pcbuilder_product_cash_confirmed');
            localStorage.removeItem('pcbuilder_product_cash_amount');
            localStorage.removeItem('pcbuilder_product_cash_required');
          }
        } catch (_) {}


        // Al seleccionar un método, mostrar inmediatamente sus datos de pago
        // Asegurar que NO se marque como confirmado ni se salte al Step 3
        try { __lsSet('pcbuilder_payment_confirmed', 'false'); } catch (_) {}
        try { __lsRemove('pcbuilder_payment_step3'); } catch (_) {}

        const selectedOpt = btn.closest('.payment-option');
        setSelected(selectedOpt);
        renderSummary();
  window.__pcbuilderRenderSummary = renderSummary;
        if (selectedOpt) {
          selectedOpt.classList.add('is-locked');
          selectedOpt.setAttribute('aria-disabled','true');
        }
        goToPayInstructions(id);
      });
}

    if (cont) {
      cont.addEventListener('click', () => {
        if (cont.classList.contains('is-disabled')) return;

        // Si estamos en Step 3 (Confirmar tu pedido), completar pedido
        if (cont.getAttribute('data-step3') === 'true') {
          try { sessionStorage.setItem('pcbuilder_checkout_step', 'complete'); } catch (_) {}
          try { localStorage.setItem('pcbuilder_checkout_step', 'complete'); } catch (_) {}
          // Guardar datos de nota de entrega
          try {
            const first = (document.getElementById('dn-firstname')?.value || '').trim();
            const last = (document.getElementById('dn-lastname')?.value || '').trim();
            const idType = (document.getElementById('dn-idtype')?.value || '').trim();
            const idNum = (document.getElementById('dn-idnumber')?.value || '').trim();
            const area = (document.getElementById('dn-areacode')?.value || '').trim();
            const phoneNum = (document.getElementById('dn-phonenum')?.value || '').trim();
            const email = (document.getElementById('dn-email')?.value || '').trim();

            // Nuevas llaves
            __lsSet('pcbuilder_dn_firstname', first);
            __lsSet('pcbuilder_dn_lastname', last);
            __lsSet('pcbuilder_dn_idtype', idType);
            __lsSet('pcbuilder_dn_idnumber', idNum);
            __lsSet('pcbuilder_dn_areacode', area);
            __lsSet('pcbuilder_dn_phonenum', phoneNum);
            __lsSet('pcbuilder_dn_email', email);

            // Compatibilidad con llaves anteriores (si alguna otra parte las usa)
            __lsSet('pcbuilder_dn_name', `${first} ${last}`.trim());
            __lsSet('pcbuilder_dn_id', `${idType}-${idNum}`.trim());
            __lsSet('pcbuilder_dn_phone', `${area}${phoneNum}`.trim());
          } catch (_) {}
          try { const m = __lsGet('pcbuilder_payment_method') || ''; if (m) __lsSet('pcbuilder_payment_method_final', m); } catch (_) {}
        try { localStorage.setItem('pcbuilder_checkout_step', 'completion'); } catch (_) {}
try { localStorage.setItem('pcbuilder_order_confirmed', '1'); } catch (_) {}
try { localStorage.setItem('pcbuilder_order_confirmed_at', String(Date.now())); } catch (_) {}
try {
  const t = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : (Date.now() + '-' + Math.random().toString(16).slice(2));
  sessionStorage.setItem('pcbuilder_completion_token', t);
  window.location.href = 'orden-completada.html?token=' + encodeURIComponent(t);
} catch (_) {
  window.location.href = 'orden-completada.html';
}

          return;
        }

        const state = cont.getAttribute('data-state') || 'list';
        const methodId = (__lsGet('pcbuilder_payment_method') || '').trim();
        if (!methodId) return;

        if (state === 'list') {
          // Paso: mostrar instrucciones de pago
          const titleEl = document.getElementById('payment-title');
          if (titleEl) titleEl.textContent = 'Realiza el pago';

          // Renderizar datos/QR del método seleccionado
          renderPaymentDetails(methodId);

          // Ocultar los demás métodos (opcional) y permitir cambiar
          const list = document.getElementById('payment-list');
          if (list) {
            list.querySelectorAll('.payment-option').forEach((b) => {
              if ((b.getAttribute('data-pay') || '') !== methodId) b.style.display = 'none';
            });
          }

          if (changeBtn) changeBtn.classList.remove('is-hidden');

          cont.textContent = 'Confirmar tu pago';
          cont.setAttribute('data-state', 'pay');
          
          try { __pmSyncContinueBtnPresence(); } catch(_) {}return;
        }

        if (state === 'pay') {
          // Paso: confirmar pago -> ir a Step 3 (Confirmar pedido)
          try { __lsSet('pcbuilder_payment_confirmed', 'true'); } catch (_) {}
          try { __lsSet('pcbuilder_payment_step3', 'true'); } catch (_) {}
          enterOrderConfirmStep();
          return;
        }
      });
    }
  

    if (changeBtn) {
      changeBtn.addEventListener('click', () => {

// Reset tasa (para que al volver a elegir Pago Móvil/Transferencia se recargue la tasa actual)
try { localStorage.removeItem(BINANCE_RATE_CACHE_KEY); } catch (_) {}

// Al cambiar método manualmente, limpiar comprobantes/capturas del método anterior (evita que se “arrastren”)
try { localStorage.removeItem(__cashBillKey()); } catch (_) {}
try {
  if (__lastPaymentDetailsMethod) {
    localStorage.removeItem(__paymentProofKey(__lastPaymentDetailsMethod));
  }
  localStorage.removeItem(__paymentProofGenericKey());
} catch (_) {}
__lastPaymentDetailsMethod = null;
        const list = document.getElementById('payment-list');

        // Mostrar todos los métodos y desbloquear
        if (list) {
          list.querySelectorAll('.payment-option').forEach((btn) => {
            btn.style.display = '';
            btn.removeAttribute('disabled');
            btn.classList.remove('is-locked');
            btn.classList.remove('is-hidden');
          });
        }

        // Limpiar selección + storage
        setSelected(null);
        try { __lsRemove('pcbuilder_payment_method'); } catch (_) {}
        try { __lsSet('pcbuilder_payment_confirmed', 'false'); } catch (_) {}
        try { __lsRemove('pcbuilder_payment_step3'); } catch (_) {}

        // Re-render para volver al estado inicial
        renderPaymentList();
        setContinueEnabled(false);

        // Restaurar título y botón continuar
        const titleEl = document.getElementById('payment-title');
        if (titleEl) titleEl.textContent = 'Selecciona tu método de pago';

        if (cont) {
          cont.textContent = 'Proceder y continuar';
          cont.setAttribute('data-locked', 'false');
          cont.setAttribute('data-state', 'list');
          
          try { __pmSyncContinueBtnPresence(); } catch(_) {}cont.removeAttribute('data-step3');
        }

        changeBtn.classList.add('is-hidden');
      });
    }
}

  
  function enterOrderConfirmStep() {
    // Step 3: confirmar pedido (después de confirmar pago)
    const titleEl = document.getElementById('payment-title');
    if (titleEl) titleEl.textContent = 'Confirmar tu pedido';

    const cont = document.getElementById('payment-continue-btn');
    if (cont) {
      cont.textContent = 'Completar tu pedido';
      // requerimos datos para habilitar completar
      cont.classList.add('is-disabled');
      cont.setAttribute('aria-disabled', 'true');
      cont.setAttribute('data-step3', 'true');
      try { updateCompleteButtonState(); } catch (_) {}

    }

    const changeBtn = document.getElementById('change-payment-method-btn');
    if (changeBtn) changeBtn.classList.add('is-hidden');

    // Ocultar tabla de instrucciones y listado de métodos
    const details = document.getElementById('payment-details');
    if (details) { details.classList.add('is-hidden'); details.innerHTML = ''; }
    const list = document.getElementById('payment-list');
    if (list) list.classList.add('is-hidden');

    // Mostrar método seleccionado junto a payment-shipping-label
    const badge = document.getElementById('payment-method-selected-label');
    if (badge) {
      // Fuente de verdad: storage (evita depender del DOM/selector)
      const methodId = (__lsGet('pcbuilder_payment_method') || '').trim();
      const label = humanPayment(methodId);
      if (label && label !== '—') {
        // Icono ✓ a la izquierda
        badge.innerHTML = `<i class="fas fa-check-circle"></i><span>${label}</span>`;
        badge.classList.remove('is-hidden');
      } else {
        badge.textContent = '';
        badge.classList.add('is-hidden');
      }
    }

    // Mostrar formulario de nota de entrega
    const formBox = document.getElementById('delivery-note-form');
    if (formBox) formBox.classList.remove('is-hidden');

    const fields = [
      document.getElementById('dn-firstname'),
      document.getElementById('dn-lastname'),
      document.getElementById('dn-idtype'),
      document.getElementById('dn-idnumber'),
      document.getElementById('dn-areacode'),
      document.getElementById('dn-phonenum'),
      document.getElementById('dn-email'),
    ];

    const validate = () => {
      const contBtn = document.getElementById('payment-continue-btn');
      // Solo controlar el botón cuando sea el último paso ("Completar tu pedido")
      if (!contBtn || contBtn.getAttribute('data-step3') !== 'true') return false;

      const email = (document.getElementById('dn-email')?.value || '').trim();
      let ok = fields.every(f => f && String(f.value || '').trim().length > 0) &&
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
               fields.every(f => f && f.checkValidity());

      // Envío Nacional: requiere agencia confirmada
      try {
        const ship = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
        if (ship === 'national') {
          if (!window.hasConfirmedNationalSelection()) {
            ok = false;
            const a = document.getElementById('national-agency-alert');
            if (a) a.style.display = 'block';
          } else {
            const a2 = document.getElementById('national-agency-alert');
            if (a2) a2.style.display = 'none';
          }
        } else {
          const a3 = document.getElementById('national-agency-alert');
          if (a3) a3.style.display = 'none';
        }
      } catch(e) {}

      setContinueEnabled(ok);
      return ok;
    };

    fields.forEach(f => {
      if (!f) return;
      f.addEventListener('input', validate);
      f.addEventListener('change', validate);
      f.addEventListener('blur', validate);
    });

    validate();
try { __lsSet('pcbuilder_payment_step3', 'true'); } catch (_) {}
  }


document.addEventListener('DOMContentLoaded', () => {
// Limpiar método de pago al salir de la página
  window.addEventListener('beforeunload', () => {
    try {
      // Persistir método seleccionado para la pantalla final
      const m = __lsGet('pcbuilder_payment_method') || '';
      if (m) __lsSet('pcbuilder_payment_method_final', m);

      // Limpiar banderas temporales del wizard
      __lsRemove('pcbuilder_payment_confirmed');
      __lsRemove('pcbuilder_payment_step3');
      // NOTA: NO borrar pcbuilder_payment_method aquí, porque la navegación a order-completion dispara beforeunload.
    } catch (e) {}
  });

    renderPaymentList();
    renderSummary();
  window.__pcbuilderRenderSummary = renderSummary;
    wire();
    try { __pmSyncContinueBtnPresence(); } catch(_) {}

    // Restaurar Step 3 si ya se confirmó el pago
    try {
      if (__lsGet('pcbuilder_payment_step3') === 'true') {
        enterOrderConfirmStep();
      }
    } catch (_) {}
// Re-render si cambian datos en otra pestaña
    window.addEventListener('storage', (e) => {
      if (e.key === (window.STORAGE_KEYS ? STORAGE_KEYS.CART : 'compragamer_cart') || e.key === 'pcbuilder_shipping_method') {
        renderPaymentList();
        renderSummary();
  window.__pcbuilderRenderSummary = renderSummary;
      }
    });
  });
})();


/* === Nota de entrega: validaciones/sanitización === */
function setupDeliveryNoteForm(){
  const first = document.getElementById('dn-firstname');
  const last = document.getElementById('dn-lastname');
  const idType = document.getElementById('dn-idtype');
  const idNum = document.getElementById('dn-idnumber');
  const phone = document.getElementById('dn-phonenum');
  const email = document.getElementById('dn-email');

  // Solo letras y espacios (máx. 20)
  const onlyLetters = (el) => {
    if (!el) return;
    el.addEventListener('input', () => {
      el.value = el.value
        .replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '')
        .slice(0, 20);
    });
  };
  onlyLetters(first);
  onlyLetters(last);

  // Documento: validar longitud según tipo
  const getIdLen = () => {
    const t = String(idType?.value || '').trim().toUpperCase();
    // V, E => 8 dígitos | J, G, P => 10 dígitos
    if (t === 'V' || t === 'E') return 8;
    if (t === 'J' || t === 'G' || t === 'P') return 10;
    return 10;
  };

  const applyIdRules = () => {
    if (!idNum) return;
    const len = getIdLen();
    idNum.setAttribute('maxlength', String(len));
    idNum.setAttribute('minlength', String(len));
    idNum.setAttribute('pattern', `\\d{${len}}`);
    idNum.setAttribute('inputmode', 'numeric');
    idNum.placeholder = (len === 8) ? 'Ej: 12345678' : 'Ej: 1234567890';
    idNum.title = `Solo números (${len} dígitos)`;
    // Sanitizar valor actual
    const prev = String(idNum.value || '');
    const next = prev.replace(/\D/g, '').slice(0, len);
    if (next !== prev) idNum.value = next;
  };

  // Inicial
  applyIdRules();

  // Al escribir: solo números y recorte al máximo actual
  if (idNum){
    idNum.addEventListener('input', () => {
      const len = getIdLen();
      idNum.value = String(idNum.value || '').replace(/\D/g, '').slice(0, len);
    });
  }

  // Al cambiar el tipo, ajustar reglas y recortar
  if (idType){
    idType.addEventListener('change', () => {
      applyIdRules();
      // Recalcular feedback/validación visual del documento
      if (idNum) idNum.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  // Solo números máx. 7
  if (phone){
    phone.addEventListener('input', () => {
      phone.value = phone.value.replace(/\D/g, '').slice(0, 7);
    });
  }

  // Email:
  // - forzar minúsculas, sin espacios
  // - maxlength 50
  // - validar proveedor permitido (gmail/outlook/hotmail/yahoo/icloud/live/msn/aol)
  // - permitir TLDs comunes (ej: .com, .es, .fr, .com.ve, etc.)
  const EMAIL_MAX = 50;
  const ALLOWED_PROVIDERS = ['gmail','outlook','hotmail','yahoo','icloud','live','msn','aol'];
  const emailRegex = new RegExp(
    '^\\s*[^\\s@]+@(' + ALLOWED_PROVIDERS.join('|') + ')\\.[a-z]{2,6}(\\.[a-z]{2,6})?\\s*$',
    'i'
  );

  const validateEmailAllowlist = () => {
    if (!email) return;
    const v = String(email.value || '').trim().toLowerCase();
    // Si está vacío, que el required se encargue
    if (!v) { try { email.setCustomValidity(''); } catch(_) {} return; }
    const ok = emailRegex.test(v);
    if (ok) {
      try { email.setCustomValidity(''); } catch(_) {}
    } else {
      try {
        email.setCustomValidity('Ingresa un correo válido de: ' + ALLOWED_PROVIDERS.join(', ') + '.');
      } catch(_) {}
    }
  };

  if (email){
    try { email.setAttribute('maxlength', String(EMAIL_MAX)); } catch(_) {}
    email.addEventListener('input', () => {
      email.value = email.value.replace(/\s/g, '').toLowerCase().slice(0, EMAIL_MAX);
      validateEmailAllowlist();
    });
    email.addEventListener('blur', validateEmailAllowlist);
    email.addEventListener('change', validateEmailAllowlist);
    // Validación inicial
    validateEmailAllowlist();
  }
}

// Aplicar las mismas reglas a cualquier input[type=email] que exista en el sitio.
// (Evita casos donde el campo se renderiza sin pasar por setupDeliveryNoteForm)
document.addEventListener('DOMContentLoaded', () => {
  try {
    const EMAIL_MAX = 50;
    const ALLOWED_PROVIDERS = ['gmail','outlook','hotmail','yahoo','icloud','live','msn','aol'];
    const emailRegex = new RegExp(
      '^\\s*[^\\s@]+@(' + ALLOWED_PROVIDERS.join('|') + ')\\.[a-z]{2,6}(\\.[a-z]{2,6})?\\s*$',
      'i'
    );
    document.querySelectorAll('input[type="email"]').forEach((el) => {
      try { el.setAttribute('maxlength', String(EMAIL_MAX)); } catch(_) {}
      const validate = () => {
        const v = String(el.value || '').trim().toLowerCase();
        if (!v) { try { el.setCustomValidity(''); } catch(_) {} return; }
        if (emailRegex.test(v)) {
          try { el.setCustomValidity(''); } catch(_) {}
        } else {
          try { el.setCustomValidity('Ingresa un correo válido de: ' + ALLOWED_PROVIDERS.join(', ') + '.'); } catch(_) {}
        }
      };
      el.addEventListener('input', () => {
        el.value = String(el.value || '').replace(/\s/g,'').toLowerCase().slice(0, EMAIL_MAX);
        validate();
      });
      el.addEventListener('blur', validate);
      el.addEventListener('change', validate);
      validate();
    });
  } catch(_) {}
});

document.addEventListener('DOMContentLoaded', () => {
  // Si estamos en la pantalla de verificación, estos campos existirán
  if (document.getElementById('dn-firstname') || document.getElementById('dn-email')) {
    setupDeliveryNoteForm();
  }
});





/* === Feedback visual al escribir === */

function updateCompleteButtonState(){
  const cont = document.getElementById('payment-continue-btn');
  if (!cont) return;
  // Solo controlar en el último paso (Confirmar tu pedido)
  if (cont.getAttribute('data-step3') !== 'true') return;

  const first = document.getElementById('dn-firstname');
  const last = document.getElementById('dn-lastname');
  const idType = document.getElementById('dn-idtype');
  const idNum = document.getElementById('dn-idnumber');
  const area = document.getElementById('dn-areacode');
  const phone = document.getElementById('dn-phonenum');
  const email = document.getElementById('dn-email');

  const fields = [first, last, idType, idNum, area, phone, email].filter(Boolean);
  if (!fields.length) return;

  const ok = fields.every(f => f.checkValidity() && String(f.value || '').trim().length > 0);
  setContinueEnabled(ok);
}

  // Exponer para que otros módulos (modales) puedan forzar recálculo
  try { window.updateCompleteButtonState = updateCompleteButtonState; } catch(_) {}
  // Exponer helper para que modales puedan forzar habilitación usando los mismos candados
  try { window.__pcbuilderRecalcContinue = function(){ try { updateCompleteButtonState(); } catch(_) {} try { setContinueEnabled(true); } catch(_) {} }; } catch(_) {}

  // Recalcular cuando el usuario confirma el efectivo del PRODUCTO
  document.addEventListener('pcbuilder:product_cash_confirmed', () => {
    // Al confirmar el modal de cambio del PRODUCTO, recalcular y luego intentar habilitar.
    try { updateCompleteButtonState(); } catch(_) {}

    // Si el delivery es gratis, asegúrate de marcar el pago del delivery como confirmado
    // (evita quedar bloqueado por el gate de "pago delivery confirmado" cuando el costo es 0).
    try {
      const ship = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
      if (ship === 'delivery') {
        let free = false;
        const candidates = ['pcbuilder_delivery_payable_usd','pcbuilder_delivery_cost_usd'];
        for (const k of candidates) {
          const raw = localStorage.getItem(k);
          if (raw == null) continue;
          const n = parseFloat(String(raw).replace(',', '.'));
          if (Number.isFinite(n)) { free = (n <= 0.0001); break; }
        }
        if (!free) {
          const deliveryEl = document.getElementById('summary-delivery');
          const txtRaw = (deliveryEl ? (deliveryEl.textContent || '') : '').replace(/\s+/g,' ').trim();
          const up = txtRaw.toUpperCase();
          if (up.includes('GRATIS')) free = true;
          else {
            const m = txtRaw.match(/(-?\d+(?:[\.,]\d+)?)/);
            if (m) {
              const n2 = parseFloat(String(m[1]).replace(',', '.'));
              if (Number.isFinite(n2) && n2 <= 0.0001) free = true;
            }
          }
        }
        if (free) localStorage.setItem('pcbuilder_delivery_payment_confirmed','1');
      }
    } catch(_) {}

    try { setContinueEnabled(true); } catch(_) {}

    // Fallback por timing: reintentar luego de que el modal cierre/DOM se estabilice.
    try {
      setTimeout(() => {
        try { updateCompleteButtonState(); } catch(_) {}
        try { setContinueEnabled(true); } catch(_) {}

        // Si TODO está OK pero el botón sigue bloqueado, forzar habilitación visual.
        try {
          const btn = document.getElementById('payment-continue-btn');
          if (!btn || btn.getAttribute('data-step3') !== 'true') return;

          const ship = (typeof getShippingMethod === 'function' ? (getShippingMethod() || '') : '').toLowerCase();
          if (ship !== 'delivery') return;

          const applied = (localStorage.getItem('pcbuilder_delivery_location_applied') === '1') && document.body.classList.contains('dn-delivery-applied');
          if (!applied) return;

          const pm = String((__lsGet('pcbuilder_payment_method_final') || __lsGet('pcbuilder_payment_method_final_delivery') || __lsGet('pcbuilder_payment_method') || __lsGet('pcbuilder_payment_method_delivery') || '')).trim().toLowerCase();
          const productIsCash = (pm === 'efectivo_divisas' || pm.includes('efectivo'));
          if (!productIsCash) return;

          const confirmed = localStorage.getItem('pcbuilder_product_cash_confirmed') === '1';
          const amount = parseFloat(String(localStorage.getItem('pcbuilder_product_cash_amount') || ''));
          const amountOk = Number.isFinite(amount) && amount > 0;
          if (!(confirmed && amountOk)) return;

          // Validación de DN (mismo set de campos)
          const reqIds = ['dn-firstname','dn-lastname','dn-idtype','dn-idnumber','dn-areacode','dn-phonenum','dn-email'];
          for (const id of reqIds) {
            const el = document.getElementById(id);
            if (!el) return;
            const v = String(el.value || '').trim();
            if (!v || !el.checkValidity()) return;
          }

          // Si el delivery es gratis, no debe exigir confirmación de pago del delivery
          try { localStorage.setItem('pcbuilder_delivery_payment_confirmed','1'); } catch(_) {}

          // Fuerza habilitado (visual + atributo disabled)
          btn.classList.remove('is-disabled');
          btn.setAttribute('aria-disabled','false');
          btn.dataset.locked = 'false';
          try { btn.removeAttribute('disabled'); } catch(_) {}
        } catch(_) {}
      }, 120);
    } catch(_) {}
  }, true);


function applyInputFeedback(el, isValid){
  if (!el) return;
  el.classList.toggle('is-valid', isValid);
  el.classList.toggle('is-invalid', !isValid && el.value.length > 0);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cart-input').forEach(input => {
    const handler = () => {
      applyInputFeedback(input, input.checkValidity());
      updateCompleteButtonState();
    };
    input.addEventListener('input', handler);
    input.addEventListener('change', handler);
    input.addEventListener('blur', handler);
  });

  // Estado inicial (si ya estamos en el último paso)
  updateCompleteButtonState();
});


;




;


/* NATIONAL_CARRIER_SELECTOR: Selector de empresa de envío SOLO para método de envío "Envío nacional" */
(function () {
  var STORAGE_KEY = 'pcbuilder_national_carrier';

  function getShip() {
    try {
      return (((sessionStorage.getItem('pcbuilder_shipping_method') || localStorage.getItem('pcbuilder_shipping_method') || '') + '').trim().toLowerCase());
    } catch (e) { return ''; }
  }

  function getSavedCarrier() {
    try {
      return (((sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY) || '') + '').trim().toLowerCase());
    } catch (e) { return ''; }
  }

  function saveCarrier(val) {
    try { sessionStorage.setItem(STORAGE_KEY, val); } catch (e) {}
    try { localStorage.setItem(STORAGE_KEY, val); } catch (e) {}
  }

  function stateStorageKey(carrierKey){ return 'pcbuilder_national_carrier_state_' + carrierKey; }
  function agencyStorageKey(carrierKey){ return 'pcbuilder_national_carrier_agency_' + carrierKey; }

  function getSavedState(carrierKey){
    var k = stateStorageKey(carrierKey);
    try { return ((sessionStorage.getItem(k) || localStorage.getItem(k) || '') + '').trim(); }
    catch(e){ return ''; }
  }

  function saveState(carrierKey, stateVal){
    var k = stateStorageKey(carrierKey);
    try { sessionStorage.setItem(k, stateVal); } catch (e) {}
    try { localStorage.setItem(k, stateVal); } catch (e) {}
  }

  function getSavedAgency(carrierKey){
    var k = agencyStorageKey(carrierKey);
    try { return ((sessionStorage.getItem(k) || localStorage.getItem(k) || '') + '').trim(); }
    catch(e){ return ''; }
  }

  function saveAgency(carrierKey, agencyId){
    var k = agencyStorageKey(carrierKey);
    try { sessionStorage.setItem(k, agencyId); } catch (e) {}
    try { localStorage.setItem(k, agencyId); } catch (e) {}
  }

  function clearAgency(carrierKey){
    var k = agencyStorageKey(carrierKey);
    try { sessionStorage.removeItem(k); } catch (e) {}
    try { localStorage.removeItem(k); } catch (e) {}
  }

  function removeSelector() {
    var existing = document.getElementById('national-shipping-carriers');
    if (existing) existing.remove();
  }

  function ensureSelector() {
    if (getShip() !== 'national') {
      removeSelector();
      return;
    }

    if (document.getElementById('national-shipping-carriers')) return;

    var email = document.getElementById('dn-email') || document.querySelector('input[type="email"]');
    if (!email) return;

    var carrierData = window.CarrierData;
    if (!carrierData) return;

    var section = document.createElement('div');
    section.id = 'national-shipping-carriers';
    section.className = 'national-carriers-section';

    var title = document.createElement('div');
    title.className = 'national-carriers-title';
    title.textContent = 'Selecciona tu empresa de envío';

    var grid = document.createElement('div');
    grid.className = 'national-carriers-grid';

    var stateWrap = document.createElement('div');
    stateWrap.className = 'national-carriers-statewrap';
    stateWrap.id = 'national-carriers-statewrap';

    var agencyWrap = document.createElement('div');
    agencyWrap.className = 'national-carriers-agencywrap';
    agencyWrap.id = 'national-carriers-agencywrap';
    // Alert (si falta confirmar agencia)
    var alertWrap = document.createElement('div');
    alertWrap.id = 'national-agency-alert';
    alertWrap.className = 'national-agency-alert';
    alertWrap.style.display = 'none';
    alertWrap.textContent = 'Debes seleccionar y confirmar una agencia para continuar.';

    // Resumen de agencia confirmada
    var summaryWrap = document.createElement('div');
    summaryWrap.id = 'national-agency-summary';
    summaryWrap.className = 'national-agency-summary';
    summaryWrap.style.display = 'none';

    function showNationalAlert(){
      alertWrap.style.display = 'block';
    }
    function hideNationalAlert(){
      alertWrap.style.display = 'none';
    }


    // === Bloquear empresas hasta completar formulario (Nombre/Apellido/Documento/Teléfono/Correo) ===
    var __nationalRequiredEls = null;
    function __getNationalRequiredEls(){
      if (__nationalRequiredEls) return __nationalRequiredEls;
      __nationalRequiredEls = {
        firstname: document.getElementById('dn-firstname'),
        lastname: document.getElementById('dn-lastname'),
        idnumber: document.getElementById('dn-idnumber'),
        phonenum: document.getElementById('dn-phonenum'),
        email: document.getElementById('dn-email')
      };
      return __nationalRequiredEls;
    }
    function __isNationalFormComplete(){
      var els = __getNationalRequiredEls();
      if (!els.firstname || !els.lastname || !els.idnumber || !els.phonenum || !els.email) return false;
      var ok = true;
      [els.firstname, els.lastname, els.idnumber, els.phonenum, els.email].forEach(function(el){
        if (!el) ok = false;
        else {
          var v = String(el.value || '').trim();
          if (!v) ok = false;
          // Validación HTML (pattern/type/required)
          try { if (typeof el.checkValidity === 'function' && !el.checkValidity()) ok = false; } catch(e){}
        }
      });
      return ok;
    }
    function __applyNationalFormLock(){
      // Si no está completo, bloqueamos selección de empresas (y cualquier interacción relacionada)
      var complete = __isNationalFormComplete();
      if (!complete){
        section.classList.add('national-form-incomplete');
        grid.classList.add('is-locked');
        stateWrap.classList.add('is-locked');
        agencyWrap.classList.add('is-locked');
      } else {
        section.classList.remove('national-form-incomplete');
        // Solo desbloquear si NO está confirmado (confirmado usa su propio lock)
        if (!section.classList.contains('national-is-confirmed')){
          grid.classList.remove('is-locked');
          stateWrap.classList.remove('is-locked');
          agencyWrap.classList.remove('is-locked');
        }
      }
      return complete;
    }
    function __bindNationalFormLockWatchers(){
      var els = __getNationalRequiredEls();
      var handler = function(){ __applyNationalFormLock(); };
      [els.firstname, els.lastname, els.idnumber, els.phonenum, els.email].forEach(function(el){
        if (!el) return;
        el.addEventListener('input', handler);
        el.addEventListener('change', handler);
        el.addEventListener('blur', handler);
      });
    }

    function lockNationalUI(){
      // Confirmado: bloqueamos empresa/estado para evitar inconsistencias,
      // pero dejamos que el usuario pueda seleccionar otra agencia si quiere.
      section.classList.add('national-is-confirmed');
      grid.classList.add('is-locked');
      stateWrap.classList.add('is-locked');
      // NO bloqueamos las cards de agencias (puede cambiar y reconfirmar)
      agencyWrap.classList.remove('is-locked');
      agencyWrap.querySelectorAll('.national-agency-card').forEach(function(el){
        el.classList.remove('is-locked');
      });
    }

    function unlockNationalUI(){
      section.classList.remove('national-is-confirmed');
      grid.classList.remove('is-locked');
      stateWrap.classList.remove('is-locked');
      agencyWrap.classList.remove('is-locked');
      agencyWrap.querySelectorAll('.national-agency-card').forEach(function(el){
        el.classList.remove('is-locked');
        el.classList.remove('is-confirmed');
      });
    }

    
    function lockAgencyGrid(){
      agencyWrap.classList.add('is-locked');
      agencyWrap.querySelectorAll('.national-agency-card').forEach(function(el){
        el.classList.add('is-locked');
      });
    }
    function unlockAgencyGrid(){
      agencyWrap.classList.remove('is-locked');
      agencyWrap.querySelectorAll('.national-agency-card').forEach(function(el){
        el.classList.remove('is-locked');
      });
    }

    function carrierLogoPath(key){
      var k = String(key||'').toLowerCase();
      if (k === 'mrw') return '/assets/images/mrw.png';
      if (k === 'zoom') return '/assets/images/zoom.png';
      if (k === 'domesa') return '/assets/images/domesa.png';
      if (k === 'tealca') return '/assets/images/tealca.png';
      return '';
    }

    // Modal injected on-demand (no aparece en el DOM hasta que se llama)
    function openAgencyPreviewModal(sel, onConfirm, onChange){
      // cleanup any existing
      var existing = document.getElementById('nationalAgencyPreviewModal');
      if (existing) existing.remove();

      var modal = document.createElement('div');
      modal.id = 'nationalAgencyPreviewModal';
      modal.className = 'national-confirm-modal';
      modal.innerHTML = ''
        + '<div class="national-confirm-backdrop"></div>'
        + '<div class="national-confirm-dialog" role="dialog" aria-modal="true">'
        + '  <div class="national-confirm-title">Agencia seleccionada</div>'
        + '  <div class="national-confirm-sub">Revisa los datos antes de confirmar.</div>'
        + '  <div class="national-confirm-body"></div>'
        + '  <div class="national-confirm-actions">'
        + '    <button type="button" class="national-confirm-cancel">Cambiar agencia</button>'
        + '    <button type="button" class="national-confirm-ok">Confirmar agencia</button>'
        + '  </div>'
        + '</div>';

      var body = modal.querySelector('.national-confirm-body');
      var table = document.createElement('table');
      table.className = 'national-confirm-table';
      function addRow(k,v){
        var tr=document.createElement('tr');
        var th=document.createElement('th'); th.textContent=k;
        var td=document.createElement('td'); td.textContent=v||'';
        tr.appendChild(th); tr.appendChild(td);
        table.appendChild(tr);
      }
      addRow('Empresa', String((sel.carrierName||sel.carrierKey||'')).toUpperCase());
      addRow('Estado', sel.state||'');
      addRow('Agencia', sel.name||'');
      if (sel.code) addRow('Código', sel.code);
      addRow('Dirección', sel.address||'');
      if (sel.city) addRow('Ciudad', sel.city);
      if (sel.schedule) addRow('Horario', sel.schedule);
      if (sel.phone) addRow('Teléfono(s)', sel.phone);
      body.appendChild(table);

      function close(){ modal.remove(); }
      // NO cerrar al hacer click fuera del modal
      modal.querySelector('.national-confirm-backdrop').addEventListener('click', function(e){
        try{ e.preventDefault(); }catch(_){ }
        try{ e.stopPropagation(); }catch(_){ }
        return;
      });
      modal.querySelector('.national-confirm-cancel').addEventListener('click', function(){
        close();
        if (typeof onChange === 'function') onChange();
      });
      modal.querySelector('.national-confirm-ok').addEventListener('click', function(){
        close();
        if (typeof onConfirm === 'function') onConfirm();
      });

      document.body.appendChild(modal);
      requestAnimationFrame(function(){ modal.classList.add('is-open'); });
    }

    function openConfirmAgencyModal(onConfirm, onCancel){
      var existing = document.getElementById('nationalConfirmAgencyModal');
      if (existing) existing.remove();

      var modal = document.createElement('div');
      modal.id = 'nationalConfirmAgencyModal';
      modal.className = 'national-confirm-modal';
      modal.innerHTML = ''
        + '<div class="national-confirm-backdrop"></div>'
        + '<div class="national-confirm-dialog" role="dialog" aria-modal="true">'
        + '  <div class="national-confirm-title">Confirmar agencia</div>'
        + '  <div class="national-confirm-sub">¿Deseas confirmar la agencia seleccionada?</div>'
        + '  <div class="national-confirm-actions">'
        + '    <button type="button" class="national-confirm-cancel">Cancelar</button>'
        + '    <button type="button" class="national-confirm-ok">Confirmar</button>'
        + '  </div>'
        + '</div>';

      function close(){ modal.remove(); }
      // NO cerrar al hacer click fuera del modal
      modal.querySelector('.national-confirm-backdrop').addEventListener('click', function(e){
        try{ e.preventDefault(); }catch(_){ }
        try{ e.stopPropagation(); }catch(_){ }
        return;
      });
      modal.querySelector('.national-confirm-cancel').addEventListener('click', function(){ close(); if (typeof onCancel==='function') onCancel(); });
      modal.querySelector('.national-confirm-ok').addEventListener('click', function(){ close(); if (typeof onConfirm==='function') onConfirm(); });

      document.body.appendChild(modal);
      requestAnimationFrame(function(){ modal.classList.add('is-open'); });
    }

function renderNationalSummary(sel){
      if (sel && sel.confirmed !== true){
        // No mostrar resumen hasta confirmar
        summaryWrap.innerHTML='';
        summaryWrap.style.display='none';
        return;
      }
      if (!sel){
        summaryWrap.innerHTML = '';
        summaryWrap.style.display = 'none';
        var hid0 = document.getElementById('national-agency-hidden');
        if (hid0) hid0.remove();
        return;
      }
      summaryWrap.style.display = 'block';
      summaryWrap.innerHTML = '';

      // Hidden input para enviar en la orden (si tu form lo procesa)
      var hid = document.getElementById('national-agency-hidden');
      if (!hid){
        hid = document.createElement('input');
        hid.type = 'hidden';
        hid.id = 'national-agency-hidden';
        hid.name = 'national_agency';
        section.appendChild(hid);
      }
      try { hid.value = JSON.stringify(sel || {}); } catch(e) { hid.value = ''; }

      var card = document.createElement('div');
      card.className = 'national-summary-card';

      var title2 = document.createElement('div');
      title2.className = 'national-summary-title';
      title2.textContent = '';
      var tspan = document.createElement('span');
      tspan.textContent = 'Agencia seleccionada:';
      title2.appendChild(tspan);
      var logoSrc = carrierLogoPath(sel.carrierKey || sel.carrierName);
      if (logoSrc){
        var img = document.createElement('img');
        img.className = 'selected-agency-logo';
        img.src = logoSrc;
        img.alt = (sel.carrierName || sel.carrierKey || '');
        title2.appendChild(img);
      }
      card.appendChild(title2);

      var row2 = document.createElement('div');
      row2.className = 'national-summary-row';
      row2.innerHTML = '<span class="k">Estado:</span> <span class="v">' + (sel.state || '') + '</span>';
      card.appendChild(row2);

      var row3 = document.createElement('div');
      row3.className = 'national-summary-row';
      row3.innerHTML = '<span class="k">Agencia:</span> <span class="v">' + (sel.name || '') + '</span>';
      card.appendChild(row3);

      if (sel.code){
        var rowCode = document.createElement('div');
        rowCode.className = 'national-summary-row';
        rowCode.innerHTML = '<span class="k">Código:</span> <span class="v">' + (sel.code || '') + '</span>';
        card.appendChild(rowCode);
      }

      var row4 = document.createElement('div');
      row4.className = 'national-summary-row';
      row4.innerHTML = '<span class="k">Dirección:</span> <span class="v">' + (sel.address || '') + '</span>';
      card.appendChild(row4);

      summaryWrap.appendChild(card);
    }


    function renderStateSelect(carrierKey){
      stateWrap.innerHTML = '';

      var label = document.createElement('div');
      label.className = 'national-carriers-state-label';
      label.textContent = 'Selecciona tu estado';

      var wrap = document.createElement('div');
      wrap.className = 'national-cselect';
      wrap.setAttribute('data-carrier', carrierKey);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'national-cselect-btn';
      btn.setAttribute('aria-haspopup', 'listbox');
      btn.setAttribute('aria-expanded', 'false');

      var btnText = document.createElement('span');
      btnText.className = 'national-cselect-btntext';
      btn.appendChild(btnText);

      var caret = document.createElement('span');
      caret.className = 'national-cselect-caret';
      caret.textContent = '▾';
      btn.appendChild(caret);

      var panel = document.createElement('div');
      panel.className = 'national-cselect-panel';
      panel.setAttribute('role', 'listbox');

      function setButtonText(stateVal){
        if (!stateVal){
          btnText.textContent = 'Selecciona un estado';
          return;
        }
        var count = carrierData.getAgencyCount(carrierKey, stateVal);
        btnText.textContent = stateVal;
      }

      function closePanel(){
        wrap.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }

      function openPanel(){
        wrap.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }

      function togglePanel(){
        if (wrap.classList.contains('is-open')) closePanel();
        else openPanel();
      }

      // Build options
      var saved = getSavedState(carrierKey);
      carrierData.listStates().forEach(function(st){
        var count = carrierData.getAgencyCount(carrierKey, st);

        var opt = document.createElement('button');
        opt.type = 'button';
        opt.className = 'national-cselect-opt';
        opt.setAttribute('role', 'option');
        opt.setAttribute('data-state', st);

        var name = document.createElement('span');
        name.className = 'national-cselect-name';
        name.textContent = st;

        var badge = document.createElement('span');
        badge.className = 'national-cselect-badge' + (count ? '' : ' is-zero');
        badge.textContent = count + ' Agencias Disponibles';

        opt.appendChild(name);
        opt.appendChild(badge);

        if (saved && saved === st) opt.classList.add('is-selected');

        opt.addEventListener('click', function(){
          try {
            // selección visual
            panel.querySelectorAll('.national-cselect-opt').forEach(function(el){ el.classList.remove('is-selected'); });
            opt.classList.add('is-selected');

            // Guardar estado seleccionado
            saveState(carrierKey, st);

            // Al cambiar de estado, limpiamos la agencia guardada para ese carrier
            try { clearAgency(carrierKey); } catch(e){}

            // Limpiar confirmación nacional (si existía) y desbloquear UI (si la función existe)
            try { window.clearNationalSelection(); } catch(e){}
            try { if (typeof unlockNationalUI === 'function') unlockNationalUI(); } catch(e){}
            try { if (typeof renderNationalSummary === 'function') renderNationalSummary(null); } catch(e){}
            try { if (typeof hideNationalAlert === 'function') hideNationalAlert(); } catch(e){}

            setButtonText(st);
            closePanel();

            // Render agencias (lo esencial)
            renderAgencies(carrierKey, st);

            // Re-evaluar botón continuar
            try { setContinueEnabled(true); } catch(e){}
          } catch(err) {
            // Si algo falla, al menos intenta renderizar agencias
            try { renderAgencies(carrierKey, st); } catch(e){}
          }
        });

        panel.appendChild(opt);
      });

      // initial
      setButtonText(saved || '');
      if (saved){
        renderAgencies(carrierKey, saved);
      } else {
        agencyWrap.innerHTML = '';
      }

      btn.addEventListener('click', function(e){
        e.preventDefault();
        togglePanel();
      });

      // click outside close
      document.addEventListener('click', function(e){
        if (!wrap.isConnected) return;
        if (!wrap.contains(e.target)) closePanel();
      });

      // esc close
      document.addEventListener('keydown', function(e){
        if (!wrap.isConnected) return;
        if (e.key === 'Escape') closePanel();
      });

      wrap.appendChild(btn);
      wrap.appendChild(panel);

      stateWrap.appendChild(label);
      stateWrap.appendChild(wrap);
    }

    /* NATIONAL_AGENCY_DETAILS_MODAL */
    function ensureAgencyModal(){
      if (document.getElementById('nationalAgencyModalOverlay')) return;

      var overlay = document.createElement('div');
      overlay.id = 'nationalAgencyModalOverlay';
      overlay.className = 'national-agency-modal-overlay';

      var modal = document.createElement('div');
      modal.className = 'national-agency-modal';

      var header = document.createElement('div');
      header.className = 'national-agency-modal-header';

      var title = document.createElement('div');
      title.id = 'nationalAgencyModalTitle';
      title.className = 'national-agency-modal-title';
      title.textContent = 'Detalles de la agencia';

      var closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'national-agency-modal-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', closeAgencyModal);

      header.appendChild(title);
      header.appendChild(closeBtn);

      var body = document.createElement('div');
      body.className = 'national-agency-modal-body';

      var tableWrap = document.createElement('div');
      tableWrap.className = 'national-agency-modal-tablewrap';

      var table = document.createElement('table');
      table.className = 'national-agency-modal-table';
      table.id = 'nationalAgencyModalTable';
      tableWrap.appendChild(table);

      var mapWrap = document.createElement('div');
      mapWrap.className = 'national-agency-modal-mapwrap';

      var iframe = document.createElement('iframe');
      iframe.id = 'nationalAgencyModalMap';
      iframe.className = 'national-agency-modal-map';
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

      var gbtn = document.createElement('a');
      gbtn.id = 'nationalAgencyModalGmaps';
      gbtn.className = 'national-agency-modal-gmapsbtn';
      gbtn.target = '_blank';
      gbtn.rel = 'noopener';
      gbtn.textContent = 'Ver en Google Maps';

      mapWrap.appendChild(iframe);
      mapWrap.appendChild(gbtn);

      body.appendChild(tableWrap);
      body.appendChild(mapWrap);

      modal.appendChild(header);
      modal.appendChild(body);
      overlay.appendChild(modal);

      overlay.addEventListener('click', function(e){
        if (e.target === overlay){
          // No cerrar al hacer clic fuera del modal (solo botón X)
          try{ e.preventDefault(); }catch(_){ }
          try{ e.stopPropagation(); }catch(_){ }
          return;
        }
      });

      document.body.appendChild(overlay);
    }

    function closeAgencyModal(){
      var overlay = document.getElementById('nationalAgencyModalOverlay');
      if (overlay) overlay.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }

    function openAgencyModal(agency, carrierKey){
      ensureAgencyModal();

      var overlay = document.getElementById('nationalAgencyModalOverlay');
      var title = document.getElementById('nationalAgencyModalTitle');
      var table = document.getElementById('nationalAgencyModalTable');
      var iframe = document.getElementById('nationalAgencyModalMap');
      var gbtn = document.getElementById('nationalAgencyModalGmaps');

      title.textContent = (agency && agency.name ? agency.name : 'Detalles de la agencia');

      function escapeHtml(s){
        return String(s)
          .replace(/&/g,'&amp;')
          .replace(/</g,'&lt;')
          .replace(/>/g,'&gt;')
          .replace(/"/g,'&quot;')
          .replace(/'/g,'&#039;');
      }

      var rows = [];
      function addRow(k, v){
        if (v === undefined || v === null) return;
        if (String(v).trim() === '') return;
        rows.push('<tr><th>' + escapeHtml(k) + '</th><td>' + escapeHtml(String(v)) + '</td></tr>');
      }

      addRow('Empresa', (carrierKey || '').toUpperCase());
      if (agency){
        addRow('Código', agency.code || '');
        addRow('Dirección', agency.address || '');
        addRow('Ciudad', agency.city || '');
        addRow('Horario', agency.schedule || '');
        if (agency.phones && agency.phones.length) addRow('Teléfono(s)', agency.phones.join(' / '));

        if (agency.details && typeof agency.details === 'object'){
          Object.keys(agency.details).forEach(function(key){
            var lk = String(key).toLowerCase();
            if (['codigo','código','direccion','dirección','ciudad','horario','telefono','teléfono','telefonos','teléfonos','telefono(s)','teléfono(s)'].includes(lk)) return;
            addRow(key, agency.details[key]);
          });
        }
      }

      table.innerHTML = rows.join('') || '<tr><td style="padding:12px;" colspan="2">Sin detalles disponibles.</td></tr>';

      // Google Maps
      function extractLatLng(url){
        if (!url) return null;
        var u = String(url);
        // Patterns: @lat,lng or q=lat,lng or query=lat,lng
        var m1 = u.match(/@(-?\d+\.\d+),\s*(-?\d+\.\d+)/);
        if (m1) return { lat: parseFloat(m1[1]), lng: parseFloat(m1[2]) };
        var m2 = u.match(/[?&](q|query)=(-?\d+\.\d+),\s*(-?\d+\.\d+)/);
        if (m2) return { lat: parseFloat(m2[2]), lng: parseFloat(m2[3]) };
        return null;
      }

      function buildEmbedUrl(gmapsUrl, agency){
        var ll = extractLatLng(gmapsUrl);
        if (!ll && agency && agency.details && typeof agency.details === 'object'){
          // Optional fields if you later add them from scraper: lat/lng
          var lat = agency.details.lat || agency.details.Lat || agency.details.latitude;
          var lng = agency.details.lng || agency.details.Lng || agency.details.longitude;
          if (lat && lng && !isNaN(parseFloat(lat)) && !isNaN(parseFloat(lng))){
            ll = { lat: parseFloat(lat), lng: parseFloat(lng) };
          }
        }
        if (ll){
          return 'https://www.google.com/maps?q=' + ll.lat + ',' + ll.lng + '&z=16&output=embed';
        }

        // Fallback 1: si viene un link de Google Maps, intenta forzar embed de búsqueda
        if (gmapsUrl && String(gmapsUrl).includes('google.com/maps')){
          // Para links compartidos largos, lo más estable es usar búsqueda por dirección
          var q = '';
          if (agency && agency.address) q = agency.address + (agency.city ? (', ' + agency.city) : '');
          if (q) return 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&output=embed';
        }

        // Fallback 2: búsqueda por dirección
        var q2 = '';
        if (agency && agency.address) q2 = agency.address + (agency.city ? (', ' + agency.city) : '');
        if (q2) return 'https://www.google.com/maps?q=' + encodeURIComponent(q2) + '&output=embed';

        return 'about:blank';
      }

      var gmapsUrl = (agency && agency.googleMapsUrl) ? agency.googleMapsUrl : '';
      if (!gmapsUrl){
        var q = '';
        if (agency && agency.address) q = agency.address + (agency.city ? (', ' + agency.city) : '');
        if (q) gmapsUrl = 'https://www.google.com/maps?q=' + encodeURIComponent(q);
      }

      iframe.src = buildEmbedUrl(gmapsUrl, agency);
      gbtn.href = gmapsUrl || '#';
      gbtn.style.display = gmapsUrl ? 'inline-flex' : 'none';

      document.body.classList.add('no-scroll');
      requestAnimationFrame(function(){ overlay.classList.add('is-open'); });
    }

    // Cerrar con ESC
    document.addEventListener('keydown', function(e){
      var overlay = document.getElementById('nationalAgencyModalOverlay');
      if (!overlay || !overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeAgencyModal();
    });

function renderAgencies(carrierKey, stateVal){
      agencyWrap.innerHTML = '';
      agencyWrap.style.display = 'block';
      if (!stateVal) return;

      var list = carrierData.getAgencies(carrierKey, stateVal) || [];

      var head = document.createElement('div');
      head.className = 'national-carriers-agency-head';
      head.textContent = 'Agencias disponibles en ' + stateVal + ' (' + list.length + ')';
      agencyWrap.appendChild(head);

      // (debug temporal eliminado)
      var debugLine = document.getElementById('national-agency-debug-line');
      if (debugLine) debugLine.remove();

      if (!list.length){
        var empty = document.createElement('div');
        empty.className = 'national-carriers-agency-empty';
        empty.textContent = 'Sin agencias disponibles';
        agencyWrap.appendChild(empty);
        try { agencyWrap.scrollIntoView({behavior:'smooth', block:'start'}); } catch(e) {}
        return;
      }

      var cards = document.createElement('div');
      cards.className = 'national-carriers-agency-cards';

      var savedAgency = getSavedAgency(carrierKey);
      var confirmed = window.getNationalSelection();

      function hideAllUseButtons(){
        cards.querySelectorAll('.btn-use-agency-inline').forEach(function(b){
          b.style.display = 'none';
        });
      }

      list.forEach(function(a){
        if (!a || typeof a !== 'object') return;

        var card = document.createElement('div');
        card.className = 'national-agency-card';
        card.setAttribute('data-agency-id', a.id || '');

        var t = document.createElement('div');
        t.className = 'national-agency-title';
        t.textContent = a.name || 'Agencia';

        var addr = document.createElement('div');
        addr.className = 'national-agency-address';
        addr.textContent = 'Dirección: ' + (a.address || '');

        card.appendChild(t);
        card.appendChild(addr);

        var detailsBtn = document.createElement('button');
        detailsBtn.type = 'button';
        detailsBtn.className = 'btn-agency-details';
        detailsBtn.textContent = 'Ver Detalles';
        detailsBtn.addEventListener('click', function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          try { openAgencyModal(a, carrierKey); } catch(e) {}
        });
        card.appendChild(detailsBtn);

        var useBtn = document.createElement('button');
        useBtn.type = 'button';
        useBtn.className = 'btn-use-agency btn-use-agency-inline';
        useBtn.textContent = 'Quiero usar esta agencia';
        useBtn.style.display = 'none';

        
        useBtn.addEventListener('click', function(ev){
          ev.preventDefault();
          ev.stopPropagation();

          // Selecciona esta agencia (pendiente de confirmación)
          cards.querySelectorAll('.national-agency-card').forEach(function(el){ el.classList.remove('is-confirmed'); });
          card.classList.add('is-confirmed');

          var sel = {};
          for (var k in a){ try { sel[k] = a[k]; } catch(_){} }
          sel.carrierKey = carrierKey;
          sel.carrierName = carrierKey;
          sel.state = stateVal;
          sel.agencyId = a.id || '';
          sel.confirmed = false;

          window.saveNationalSelection(sel);
          saveAgency(carrierKey, sel.agencyId);

          // Bloquear grid de agencias hasta que cambie (para eso existe "Cambiar agencia")
          try { lockAgencyGrid(); } catch(e) {}

          // Mostrar la agencia seleccionada en un modal centrado (no abajo)
          openAgencyPreviewModal(sel, function(){
            // Al pulsar "Confirmar agencia" dentro del modal preview, mostramos el modal final de confirmación
            openConfirmAgencyModal(function(){
              // Confirmación final
              sel.confirmed = true;
              window.saveNationalSelection(sel);

              // Eliminar TODO el render de empresas/estado/agencias/botones
              try { if (title && title.parentNode) title.parentNode.removeChild(title); } catch(e) {}
              try { if (grid && grid.parentNode) grid.parentNode.removeChild(grid); } catch(e) {}
              try { if (stateWrap && stateWrap.parentNode) stateWrap.parentNode.removeChild(stateWrap); } catch(e) {}
              try { if (agencyWrap && agencyWrap.parentNode) agencyWrap.parentNode.removeChild(agencyWrap); } catch(e) {}
              try { if (alertWrap && alertWrap.parentNode) alertWrap.parentNode.removeChild(alertWrap); } catch(e) {}

              // Mostrar SOLO el resumen debajo del correo (sin botones)
              try { renderNationalSummary(sel); } catch(e) {}

              // Re-evaluar validación para habilitar "Completar tu pedido"
              try { if (typeof validate === 'function') validate(); } catch(e) {}
              try {
                var emailEl = document.getElementById('dn-email');
                if (emailEl) { emailEl.dispatchEvent(new Event('input', {bubbles:true})); emailEl.dispatchEvent(new Event('change', {bubbles:true})); }
              } catch(e) {}

            }, function(){
              // cancel confirm modal: mantener grid bloqueado y selección pendiente
            });
          }, function(){
            // Cambiar agencia (desde modal): desbloquear grid y limpiar selección pendiente
            try { unlockAgencyGrid(); } catch(e) {}
            try { window.clearNationalSelection(); } catch(e) {}
            try { clearAgency(carrierKey); } catch(e) {}
            try { card.classList.remove('is-confirmed'); } catch(e) {}
            try { hideNationalAlert(); } catch(e) {}
          });

        });

        card.appendChild(useBtn);

        card.addEventListener('click', function(){
          if (agencyWrap.classList.contains('is-locked')) return;
          // Selección visual: muestra el botón solo para esta card
          cards.querySelectorAll('.national-agency-card').forEach(function(el){ el.classList.remove('is-selected'); });
          card.classList.add('is-selected');

          hideAllUseButtons();
          useBtn.style.display = 'block';
        });

        if (savedAgency && savedAgency === a.id) {
          card.classList.add('is-selected');
          useBtn.style.display = 'block';
        }

        if (confirmed && confirmed.carrierKey === carrierKey && confirmed.agencyId === a.id){
          card.classList.add('is-confirmed');
        }

        cards.appendChild(card);
      });

      agencyWrap.appendChild(cards);
      try { agencyWrap.scrollIntoView({behavior:'smooth', block:'start'}); } catch(e) {}

      // Si hay selección confirmada en este estado+carrier, renderizar resumen
      if (confirmed && confirmed.carrierKey === carrierKey && confirmed.state === stateVal && confirmed.agencyId){
        try { renderNationalSummary(confirmed); } catch(e) {}
      }
    }


  function setSelectedCarrier(carrierKey){
      // Si ya hay una agencia confirmada, no permitir cambiar empresa hasta 'Cambiar agencia'
      if (section.classList.contains('national-is-confirmed')) return;
      grid.querySelectorAll('.national-carrier-card').forEach(function (el) { el.classList.remove('is-selected'); });
      var btn = grid.querySelector('.national-carrier-card[data-carrier="'+carrierKey+'"]');
      if (btn) btn.classList.add('is-selected');
      saveCarrier(carrierKey);
      renderStateSelect(carrierKey);
    }

    carrierData.listCarriers().forEach(function (c) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'national-carrier-card';
      btn.setAttribute('data-carrier', c.key);

      var check = document.createElement('i');
      check.className = 'fas fa-check-circle national-carrier-check';
      btn.appendChild(check);

      var img = document.createElement('img');
      img.className = 'national-carrier-logo' + (c.imgClass ? (' ' + c.imgClass) : '');
      img.src = c.logo;
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      btn.appendChild(img);

      btn.addEventListener('click', function () { setSelectedCarrier(c.key); });
      grid.appendChild(btn);
    });

    var savedCarrier = getSavedCarrier();
    if (savedCarrier) setSelectedCarrier(savedCarrier);

    section.appendChild(title);
    section.appendChild(grid);
    section.appendChild(stateWrap);
    section.appendChild(agencyWrap);
    section.appendChild(alertWrap);
    section.appendChild(summaryWrap);

    email.insertAdjacentElement('afterend', section);

    // Bloquear empresas hasta que el usuario complete el formulario
    __bindNationalFormLockWatchers();
    __applyNationalFormLock();
  }

  function bootNationalCarrierSelector() {
    ensureSelector();
    var tries = 0;
    var t = setInterval(function () {
      ensureSelector();
      tries++;
      if (tries >= 12) clearInterval(t);
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootNationalCarrierSelector);
  } else {
    bootNationalCarrierSelector();
  }
})();;;
