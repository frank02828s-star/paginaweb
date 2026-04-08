/* delivery-location.js - Modal + Google Maps por kilometraje (solo DELIVERY) */
(function(){

// Guard: only run for DELIVERY
try {
  const m = sessionStorage.getItem('pcbuilder_shipping_method') || localStorage.getItem('pcbuilder_shipping_method');
  if (m !== 'delivery') return;
} catch(e) {}

  function __initDeliveryModal(__forceInit){
    __forceInit = !!__forceInit;

    const KEY = "AIzaSyDX443TJy-JCoAO4qaUU2JCv7AtN3fYUks";
    const ORIGIN = { lat: 10.4606805, lng: -66.9860788 };

    const LS_SHIP = "pcbuilder_shipping_method";
    const LS_DELIVERY = {
      lat: "pcbuilder_delivery_lat",
      lng: "pcbuilder_delivery_lng",
      km:  "pcbuilder_delivery_km",
      usd: "pcbuilder_delivery_cost_usd",
      oos: "pcbuilder_delivery_out_of_service"
    };

    // Helper: persist delivery coordinates also with namespaced keys (delivery) because some pages read ${key}_delivery
    function setDeliveryLS(baseKey, value){
      try { localStorage.setItem(baseKey, String(value)); } catch(_) {}
      try { localStorage.setItem(baseKey + "_delivery", String(value)); } catch(_) {}
    }


    const DELIVERY_BY_DISTANCE = [
      { maxKm: 2.5, usd: 0  },
      { maxKm: 5,   usd: 3  },
      { maxKm: 7,   usd: 4  },
      { maxKm: 9,   usd: 5  },
      { maxKm: 11,  usd: 6  },
      { maxKm: 13,  usd: 7  },
      { maxKm: 15,  usd: 8  },
      { maxKm: 18,  usd: 11 },
      { maxKm: 20,  usd: 12 },
      { maxKm: 22,  usd: 13 },
      { maxKm: 24,  usd: 14 },
      { maxKm: 26,  usd: 16 },
      { maxKm: 28,  usd: 18 },
      { maxKm: 30,  usd: 20 }
    ];

    function norm(s){ return (s||"").toString().trim().toLowerCase(); }
    function getShip(){ return norm(localStorage.getItem(LS_SHIP) || sessionStorage.getItem(LS_SHIP) || ""); }

    function haversineKm(a,b){
      const R=6371;
      const dLat=(b.lat-a.lat)*Math.PI/180;
      const dLng=(b.lng-a.lng)*Math.PI/180;
      const s1=Math.sin(dLat/2), s2=Math.sin(dLng/2);
      const c1=Math.cos(a.lat*Math.PI/180), c2=Math.cos(b.lat*Math.PI/180);
      const h=s1*s1 + c1*c2*s2*s2;
      return 2*R*Math.asin(Math.sqrt(h));
    }


// Distancia real (por carretera) usando Google Distance Matrix.
// Si falla (API no habilitada / sin billing / rate limit), cae a haversine.
let _dmService = null;
let _lastDmReqId = 0;

function getRoadDistanceKm(origin, dest){
  return new Promise((resolve)=>{
    if(!(window.google && google.maps)) return resolve({ km: null, ok:false, reason:'no_gmaps' });
    try{
      if(!_dmService) _dmService = new google.maps.DistanceMatrixService();
      const reqId = ++_lastDmReqId;
      _dmService.getDistanceMatrix({
        origins: [origin],
        destinations: [dest],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
      }, (response, status)=>{
        // Ignore out-of-order responses
        if(reqId != _lastDmReqId) return;
        if(status !== 'OK' || !response || !response.rows || !response.rows[0] || !response.rows[0].elements || !response.rows[0].elements[0]){
          return resolve({ km: null, ok:false, reason: status || 'bad_response' });
        }
        const el = response.rows[0].elements[0];
        if(el.status !== 'OK' || !el.distance || typeof el.distance.value !== 'number'){
          return resolve({ km: null, ok:false, reason: el.status || 'no_distance' });
        }
        // distance.value is meters
        resolve({ km: el.distance.value / 1000, ok:true, text: el.distance.text });
      });
    }catch(e){
      resolve({ km: null, ok:false, reason:'exception' });
    }
  });
}

    function priceByDistance(km){
      const k = Number(km||0);
      for(const r of DELIVERY_BY_DISTANCE){
        if(k <= r.maxKm) return { usd: r.usd, outOfService: false };
      }
      return { usd: 0, outOfService: true };
    }

    // ===============================
    // Formateo + Tasa Binance (VES)
    // Compartido entre: modal del mapa (preview de costo) y modal de pago delivery.
    // ===============================
    const moneyVES = (value) => {
      try {
        const n = Number(value || 0);
        const formatted = new Intl.NumberFormat('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
        return `Bs ${formatted}`;
      } catch (_) {
        return `Bs ${(Number(value || 0)).toFixed(2)}`;
      }
    };

    // Tasa Binance P2P (misma lógica del original)
    const BINANCE_RATE_CACHE_KEY = 'pcbuilder_binance_p2p_rate_cache_v1';
    const clearBinanceRateCache = () => {
      try { localStorage.removeItem(BINANCE_RATE_CACHE_KEY); } catch (_) {}
      try { sessionStorage.removeItem(BINANCE_RATE_CACHE_KEY); } catch (_) {}
      // también limpiar rastros usados en el delivery para evitar mostrar Bs viejo
      try {
        localStorage.removeItem(LS_DELIVERY_PAY.rateUsed);
        localStorage.removeItem(LS_DELIVERY_PAY.payableBs);
      } catch (_) {}
    };
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
      try { localStorage.setItem(BINANCE_RATE_CACHE_KEY, JSON.stringify({ rate: n, ts: Date.now() })); } catch (_) {}
    };
    const fetchBinanceRate = async () => {
      const res = await fetch('/api/binance-p2p-rate.php?fiat=VES&asset=USDT', { cache: 'no-store' });
      if (!res.ok) throw new Error('rate_fetch_failed');
      const data = await res.json();
      const n = Number(data?.rate || 0);
      if (!Number.isFinite(n) || n <= 0) throw new Error('rate_invalid');
      setBinanceRate(n);
      return n;
    };
    let _binanceRatePromise = null;
    const ensureBinanceRate = async () => {
      const cached = getBinanceRate();
      if (cached > 0) return cached;
      if (_binanceRatePromise) return _binanceRatePromise;
      _binanceRatePromise = fetchBinanceRate().finally(() => { _binanceRatePromise = null; });
      return _binanceRatePromise;
    };

    function ensureMapsLoaded(){
      if (window.google && google.maps) return Promise.resolve();
      return new Promise((resolve,reject)=>{
        const existing=document.querySelector('script[data-gmaps="1"]');
        if(existing){ existing.addEventListener('load', ()=>resolve()); existing.addEventListener('error', ()=>reject(new Error('No se pudo cargar Google Maps.'))); return; }
        const s=document.createElement('script');
        s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(KEY)}`;
        s.async=true; s.defer=true; s.dataset.gmaps="1";
        s.onload=()=>resolve();
        s.onerror=()=>reject(new Error('No se pudo cargar Google Maps.'));
        document.head.appendChild(s);
      });
    }


// Reverse geocoding: convertir coordenadas en texto (ej: "Sambil La Candelaria, Caracas")
// Si falla, se mantiene solo (lat,lng). Se usa request-id para ignorar respuestas viejas.
let _geoReqId = 0;
function reverseGeocodeLabel(lat, lng){
  return new Promise((resolve)=>{
    try{
      if(!geocoder) return resolve({ ok:false, label:null });
      const reqId = ++_geoReqId;
      geocoder.geocode({ location: { lat, lng } }, (results, status)=>{
        if(reqId !== _geoReqId) return;
        if(status !== 'OK' || !results || !results[0] || !results[0].formatted_address){
          return resolve({ ok:false, label:null });
        }
        const full = results[0].formatted_address;
        const short = full.split(',').slice(0,2).join(',').trim();
        resolve({ ok:true, label: short, full });
      });
    }catch(e){
      resolve({ ok:false, label:null });
    }
  });
}


function __destroyInjectedDeliveryModals(){
  try{
    if(window.PCBOrderVerificationModals && window.PCBOrderVerificationModals.destroy){
      ['deliveryModal','confirmDeliveryModal','deliveryPaymentModal','deliveryCashInfoModal','productCashInfoModal'].forEach(function(id){
        try{ window.PCBOrderVerificationModals.destroy(id); }catch(_){}
      });
    }
  }catch(_){}
}


function __ensureModal(id){
  try{
    if(window.PCBOrderVerificationModals && window.PCBOrderVerificationModals.ensure){
      window.PCBOrderVerificationModals.ensure(id);
    }
  }catch(_){}
}
function __destroyModal(id){
  try{
    if(window.PCBOrderVerificationModals && window.PCBOrderVerificationModals.destroy){
      window.PCBOrderVerificationModals.destroy(id);
    }else{
      const el = document.getElementById(id);
      if(el) el.remove();
    }
  }catch(_){}
}

    // === Lazy injection: inyectar modales SOLO cuando se necesiten (y re-inyectar si fueron removidos)
    try {
      const btnOpenLazy = document.getElementById('btnDeliveryLocation');
      if (btnOpenLazy && !window.__pcb_delivery_lazy_hooked) {
        window.__pcb_delivery_lazy_hooked = true;

        btnOpenLazy.addEventListener('click', function _lazyInjectEveryTime(ev){
          const hasModalAlready = !!document.getElementById('deliveryModal');
          if (!hasModalAlready) {
            try { ev.preventDefault(); ev.stopImmediatePropagation(); } catch(_) {}
            try {
              if (window.PCBOrderVerificationModals && window.PCBOrderVerificationModals.ensure) {
                window.PCBOrderVerificationModals.ensure('deliveryModal');
              }
            } catch(_) {}
            setTimeout(function(){
              try { __initDeliveryModal(true); } catch(_) {}
              // NO forzar el botón habilitado aquí: debe respetar la validación del formulario.
              // (Antes esto dejaba el botón activo aunque el usuario no hubiese llenado los datos.)
              try { if (typeof window.__pcb_refresh_delivery_btn === 'function') window.__pcb_refresh_delivery_btn(); } catch(_) {}
              try {
                const mEl = document.getElementById('deliveryModal');
                if (mEl) {
                  mEl.classList.remove('is-open');
                  mEl.setAttribute('aria-hidden','false');
                  try { void mEl.offsetWidth; } catch(_) {}
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => { try { mEl.classList.add('is-open'); } catch(_) {} });
                  });
                }
              } catch(_) {}

              try { btnOpenLazy.click(); } catch(_) {}
            }, 0);
          }
        }, true);
      }
    } catch(_) {}

const btnOpen = document.getElementById('btnDeliveryLocation');
    let modal = document.getElementById('deliveryModal');
    if(!btnOpen) return;

    // El botón debe respetar siempre la validación del formulario.
    // Si el envío aún NO es delivery, se mantiene deshabilitado.


// El botón solo se habilita cuando el formulario (DELIVERY) está completo y válido
const REQUIRED_FIELDS = [
  'dn-firstname',
  'dn-lastname',
  'dn-idtype',
  'dn-idnumber',
  'dn-areacode',
  'dn-phonenum',
  'dn-email'
].map(id => document.getElementById(id)).filter(Boolean);

function refreshDeliveryBtnEnabled(){
  if(!btnOpen) return;
  // Si falta algún campo, mantenemos deshabilitado
  if(REQUIRED_FIELDS.length < 7){ btnOpen.disabled = true; return; }
  const ok = REQUIRED_FIELDS.every(el => {
    // Para <select>, validar que no esté vacío
    if(el.tagName && el.tagName.toLowerCase() === 'select'){
      return String(el.value || '').trim().length > 0;
    }
    // Para inputs, usar validity nativa
    return (typeof el.checkValidity === 'function') ? el.checkValidity() : (String(el.value||'').trim().length > 0);
  });
  btnOpen.disabled = !ok;
}

// Exponer para el hook lazy-inject (re-inyección del modal) sin romper el gate de validación.
try { window.__pcb_refresh_delivery_btn = refreshDeliveryBtnEnabled; } catch(_) {}

// Estado inicial + listeners
try{ btnOpen.disabled = true; }catch(e){}
refreshDeliveryBtnEnabled();
REQUIRED_FIELDS.forEach(el => {
  el.addEventListener('input', refreshDeliveryBtnEnabled);
  el.addEventListener('change', refreshDeliveryBtnEnabled);
  el.addEventListener('blur', refreshDeliveryBtnEnabled);
});

    const btnClose = document.getElementById('deliveryModalClose');
    const btnCancel = document.getElementById('deliveryCancelBtn');
    const btnApply = document.getElementById('deliveryApplyBtn');
    let confirmModal = document.getElementById('confirmDeliveryModal');
    let confirmClose = document.getElementById('confirmDeliveryModalClose');
    let confirmCancel = document.getElementById('confirmDeliveryCancelBtn');
    let confirmOk = document.getElementById('confirmDeliveryConfirmBtn');
    let confirmLoc = document.getElementById('confirmDeliveryLocation');
    let confirmCost = document.getElementById('confirmDeliveryCost');


    let payClose = document.getElementById('deliveryPaymentModalClose');
    let payCancel = document.getElementById('deliveryPaymentCancelBtn');
    let payOk = document.getElementById('deliveryPaymentConfirmBtn');
    let payContainer = document.getElementById('deliveryPaymentMethodsContainer');
    // Estos nodos NO existen al cargar la página (se inyectan dinámicamente),
    // así que deben ser re-consultados cada vez que se abre el modal.
    let payDetails = document.getElementById('deliveryPaymentDetails');
    let payError = document.getElementById('deliveryPaymentError');
    const mapEl = document.getElementById('deliveryMap');

    const coordsEl = document.getElementById('deliveryCoords');
    const distEl = document.getElementById('deliveryDistance');
    const costEl = document.getElementById('deliveryCostText');
    const oosEl = document.getElementById('deliveryOutOfRange');

    let map, marker, geocoder;
    let current = { lat: ORIGIN.lat, lng: ORIGIN.lng };
    // Ensure initial coordinates are persisted even if user doesn't move the marker
    setDeliveryLS(LS_DELIVERY.lat, current.lat);
    setDeliveryLS(LS_DELIVERY.lng, current.lng);

    let currentKm = 0;
    let currentUsd = 0;
    let outOfService = false;
    let mapReady = false;

    function refreshApplyEnabled(){
      if(!btnApply) return;
      // Solo habilitar cuando el mapa terminó de cargar (tiles) y la zona NO está fuera de servicio
      btnApply.disabled = (!mapReady) || (!!outOfService);
    }

    function openModal(){
      __ensureModal('deliveryModal');
      modal = document.getElementById('deliveryModal');
      if(!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','false');
      try { void modal.offsetWidth; } catch(_) {}
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try { modal.classList.add('is-open'); } catch(_) {}
        });
      });
      // Deshabilitar "Aplicar ubicación" mientras carga el mapa
      mapReady = false;
      try{ if(btnApply) btnApply.disabled = true; }catch(_){ }
      initIfNeeded();
    }
    function openConfirmModal(){
  __ensureModal('confirmDeliveryModal');
  confirmModal = document.getElementById('confirmDeliveryModal');
  confirmClose = document.getElementById('confirmDeliveryModalClose');
  confirmCancel = document.getElementById('confirmDeliveryCancelBtn');
  confirmOk = document.getElementById('confirmDeliveryConfirmBtn');
  confirmLoc = document.getElementById('confirmDeliveryLocation');
  confirmCost = document.getElementById('confirmDeliveryCost');
  if(!confirmModal) return false;

  // Bind once per injection
  if(!confirmModal.dataset.bound){
    confirmModal.dataset.bound = '1';
    const closeAndDestroy = ()=>{
      try{ confirmModal.classList.remove('is-open'); confirmModal.setAttribute('aria-hidden','true'); }catch(_){}
      __destroyModal('confirmDeliveryModal');
      confirmModal = null; confirmClose=null; confirmCancel=null; confirmOk=null; confirmLoc=null; confirmCost=null;
    };
    if(confirmClose) confirmClose.addEventListener('click', closeAndDestroy);
    // Cancel no cierra (se mantiene igual)
    if(confirmCancel) confirmCancel.addEventListener('click', (e)=>{ try{ e.preventDefault(); }catch(_){ } closeAndDestroy(); });
    // Backdrop disabled (igual)
    confirmModal.addEventListener('click', (e)=>{ if(e.target === confirmModal){ /* no-op */ } });

    // Confirm
    if(confirmOk) confirmOk.addEventListener('click', ()=>{
      closeAndDestroy();
      // Guard extra: si por alguna razón el costo es 0, aplicamos directo.
      if(Number(currentUsd||0) <= 0){
        applySelection();
        return;
      }
      openPayModal();
    });
  }

  const locText = (coordsEl && coordsEl.textContent) ? coordsEl.textContent : '—';
  const costText = (costEl && costEl.textContent) ? costEl.textContent : '—';
  if(confirmLoc) confirmLoc.textContent = locText;
  if(confirmCost){
    confirmCost.className = '';
    confirmCost.textContent = costText;
    if(costEl){
      if(costEl.classList.contains('pc-delivery-free')) confirmCost.classList.add('pc-delivery-free');
      if(costEl.classList.contains('pc-delivery-paid')) confirmCost.classList.add('pc-delivery-paid');
    }
  }
  confirmModal.classList.remove('is-open');
  confirmModal.setAttribute('aria-hidden','false');
  try { void confirmModal.offsetWidth; } catch(_) {}
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      try { confirmModal.classList.add('is-open'); } catch(_) {}
    });
  });
  return true;
}
function openPayModal(){
  __ensureModal('deliveryPaymentModal');
  payModal = document.getElementById('deliveryPaymentModal');
  payClose = document.getElementById('deliveryPaymentModalClose');
  payCancel = document.getElementById('deliveryPaymentCancelBtn');
  payOk = document.getElementById('deliveryPaymentConfirmBtn');
  payContainer = document.getElementById('deliveryPaymentMethodsContainer');
  // Re-consultar nodos inyectados
  payDetails = document.getElementById('deliveryPaymentDetails');
  payError = document.getElementById('deliveryPaymentError');
  if(!payModal) return false;

  if(!payModal.dataset.bound){
    payModal.dataset.bound='1';
    const closeAndDestroyPay = ()=>{
      try{ payModal.classList.remove('is-open'); payModal.setAttribute('aria-hidden','true'); }catch(_){}
      __destroyModal('deliveryPaymentModal');
      payModal=null; payClose=null; payCancel=null; payOk=null; payContainer=null; payDetails=null; payError=null;
    };
    if(payClose) payClose.addEventListener('click', closeAndDestroyPay);
    // Cancelar: cerrar modal de pago del delivery
    if(payCancel) payCancel.addEventListener('click', (e)=>{ try{ e.preventDefault(); }catch(_){} closeAndDestroyPay(); });
    // Backdrop disabled
    payModal.addEventListener('click', (e)=>{ if(e.target === payModal){ /* no-op */ } });
    // Confirmar: en lazy-inject NO existe el listener original (se bindea al cargar cuando el nodo no existe),
    // así que lo manejamos aquí.
    if(payOk) payOk.addEventListener('click', (e)=>{
      try{ e.preventDefault(); }catch(_){}
      // En lazy-inject, la selección puede vivir en 3 sitios:
      // 1) localStorage (fuente de verdad), 2) el botón marcado .is-selected, 3) variable en memoria.
      // Usamos fallback para evitar falsos "vacío".
      let val = '';
      try { val = String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim(); } catch(_) {}
      if(!val){
        try{
          const selBtn = (payContainer && payContainer.querySelector)
            ? payContainer.querySelector('button[data-delivery-pay].is-selected')
            : null;
          if(selBtn) val = String(selBtn.getAttribute('data-delivery-pay') || '').trim();
        }catch(_){ }
      }
      if(!val){
        try{ val = String(_deliveryPaySelected || '').trim(); }catch(_){ val = ''; }
      }
      if(!val){
        if(payError){ payError.textContent='Selecciona un método de pago.'; payError.style.display='block'; }
        return;
      }
      // Asegurar persistencia antes de continuar
      try { localStorage.setItem('pcbuilder_delivery_payment_method', val); } catch(_) {}
      _deliveryPayJustConfirmed = true;
      closeAndDestroyPay();
      // Aplicar selección y continuar flujo normal
      try { applySelection(); } catch(_) {}
    });
  }

  if(!payModal) return false;
  if(payError){ payError.textContent=''; payError.style.display='none'; }
  // Si el delivery es GRATIS, no se requiere método de pago.
  if(Number(currentUsd||0) <= 0) return false;

  // ====== Copia independiente del flujo original (payment-method.js) ======
  const money = (value) => {
    try {
      return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(Number(value || 0));
    } catch (_) {
      return `$${(Number(value || 0)).toFixed(2)}`;
    }
  };

  // Nota: moneyVES / getBinanceRate / ensureBinanceRate viven arriba,
  // para poder usarse también en el modal del mapa.
  const isBinanceBolivaresMethod = (methodId) => {
    const id = String(methodId || '').trim();
    return id === 'pago_movil' || id === 'transferencia';
  };
  function validateImageFile(file) {
    const allowed = ['image/jpeg','image/png','image/gif','image/webp'];
    if (!allowed.includes(file.type)) return { ok:false, msg:'Formato inválido. Usa JPEG, PNG, GIF, WEBP.' };
    const max = 32 * 1024 * 1024;
    if (file.size > max) return { ok:false, msg:'El archivo excede 32MB.' };
    return { ok:true, msg:'' };
  }

  // Storage keys independientes (solo delivery)
  const LS_DELIVERY_PAY = {
    method: 'pcbuilder_delivery_payment_method',
    payableUsd: 'pcbuilder_delivery_payable_usd',
    rateUsed: 'pcbuilder_delivery_binance_rate_used',
    payableBs: 'pcbuilder_delivery_payable_bs',
  };
  const deliveryCashBillKey = () => 'pcbuilder_delivery_cash_bill_images';
  const deliveryProofKey = (methodId) => `pcbuilder_delivery_payment_proof_image_${String(methodId||'').trim()}`;
  const deliveryProofGenericKey = () => 'pcbuilder_delivery_payment_proof_image';

  const setPayConfirmEnabled = (enabled) => {
    if(!payOk) return;
    payOk.classList.toggle('is-disabled', !enabled);
    payOk.setAttribute('aria-disabled', enabled ? 'false' : 'true');
  };

  // En el modal, el botón Confirmar se bloquea hasta tener método + comprobante
  setPayConfirmEnabled(false);

  const optionsDelivery = [
    { id: 'efectivo_divisas', title: 'Efectivo (USD / EUR)', icon: 'fa-money-bill-wave', subType: 'pickup' },
    { id: 'pago_movil', title: 'Pago Móvil', icon: 'fa-mobile-screen', sub: 'Tasa Binance P2P', subType: 'binance' },
    { id: 'transferencia', title: 'Transferencia Bancaria', icon: 'fa-building-columns', sub: 'Tasa Binance P2P', subType: 'binance' },
    { id: 'binance_pay', title: 'Binance Pay', icon: 'fa-coins' },
    { id: 'zinli', title: 'Zinli', icon: 'fa-credit-card' },
    { id: 'airtm', title: 'AirTM', icon: 'fa-wallet', sub: 'Impuesto 2% (AirTM)', subType: 'fee' },
  ];

  const getSavedMethod = () => {
    try { return String(localStorage.getItem(LS_DELIVERY_PAY.method) || '').trim(); } catch (_) { return ''; }
  };
  const saveMethod = (id) => {
    try { localStorage.setItem(LS_DELIVERY_PAY.method, String(id||'')); } catch (_) {}
  };

  const basePayableUSD = Math.max(0, Number(currentUsd || 0));
  try { localStorage.setItem(LS_DELIVERY_PAY.payableUsd, String(basePayableUSD || 0)); } catch (_) {}

  const renderList = () => {
    if(!payContainer) return;
    const saved = getSavedMethod();
    payContainer.innerHTML = `
      <div class="payment-list" role="list" id="delivery-payment-list">
        ${optionsDelivery.map((o) => {
          const subtitle = o.sub
            ? (o.subType === 'fee'
                ? `<div class="payment-sub payment-sub-fee payment-sub-hover">${o.sub}</div>`
                : `<div class="payment-sub payment-sub-hover">${o.sub}</div>`)
            : '';
          const selected = (saved === o.id) ? 'is-selected' : '';
          return `
            <button type="button" class="payment-option category-item ${selected}" data-delivery-pay="${o.id}">
              <div class="payment-icon"><i class="fas ${o.icon}"></i></div>
              <div class="payment-text">
                <div class="payment-title">${o.title}</div>
                ${subtitle}
              </div>
            </button>
          `;
        }).join('')}
      </div>
    `;
  };

  // --- IndexedDB (igual que el original, pero buckets separados para delivery) ---
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

  const DB_NAME = 'pcbuilder_uploads_db';
  const DB_VERSION = 2;
  const STORE = 'uploads';
  const openUploadsDb = () => new Promise((resolve, reject) => {
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        // v10-fix: Asegurar que el objectStore tenga keyPath 'id' (compatibilidad con otras pantallas).
        // Si existe un store viejo sin keyPath, lo recreamos en una nueva versión del DB.
        try {
          if (db.objectStoreNames.contains(STORE)) {
            db.deleteObjectStore(STORE);
          }
        } catch (_) {}
        db.createObjectStore(STORE, { keyPath: 'id' });
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

  const escapeHtml = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c));

  let _deliveryPaySelected = '';
  let _deliveryPayLastRendered = '';
let _deliveryPayJustConfirmed = false;
  let _previewObjectUrls = [];
  let _deliveryProofWipePromise = null;

  // Borrar cualquier comprobante/captura seleccionada en el modal de pago del DELIVERY.
  // Requisito: si el usuario cambia de método o cierra el modal, NO debe quedar la imagen seleccionada.
  const wipeAllDeliveryProof = () => {
    // Limpieza inmediata UI + localStorage
    try {
      localStorage.removeItem(deliveryProofGenericKey());
      (optionsDelivery || []).forEach((o)=>{ try{ localStorage.removeItem(deliveryProofKey(o.id)); }catch(_){ } });
      localStorage.removeItem(deliveryCashBillKey());
      localStorage.removeItem(LS_DELIVERY_PAY.payableBs);
      localStorage.removeItem(LS_DELIVERY_PAY.rateUsed);
    } catch (_) {}

    try { _deliveryPaySelected = ''; } catch(_) {}
    try { _deliveryPayLastRendered = ''; } catch(_) {}

    try {
      const fileInput = document.getElementById('delivery-payment-proof-file');
      if (fileInput) fileInput.value = '';
      const previewsEl = document.getElementById('delivery-payment-proof-previews');
      if (previewsEl) previewsEl.innerHTML = '';
      const pickBtn = document.getElementById('delivery-payment-proof-pick');
      if (pickBtn) pickBtn.classList.remove('is-hidden');
    } catch (_) {}

    try { _previewObjectUrls.forEach(u => URL.revokeObjectURL(u)); } catch (_) {}
    _previewObjectUrls = [];
    try { setPayConfirmEnabled(false); } catch (_) {}
    try { clearBinanceRateCache(); } catch (_) {}

    // Limpieza IDB: guardar promesa global para que listSelected espere (evita que reaparezca)
    try {
      const sessionId = getOrCreateOrderSessionId();
      const prefix = `${sessionId}|delivery|`;
      _deliveryProofWipePromise = withStore('readwrite', (store) => {
        return new Promise((resolve) => {
          const range = IDBKeyRange.bound(prefix, prefix + '\uffff');
          const req = store.openCursor(range);
          req.onsuccess = () => {
            const cursor = req.result;
            if (cursor) {
              try { cursor.delete(); } catch (_) {}
              cursor.continue();
            } else {
              resolve(true);
            }
          };
          req.onerror = () => resolve(true);
        });
      }).finally(() => {
        _deliveryProofWipePromise = null;
      });
      return _deliveryProofWipePromise;
    } catch (_) {
      _deliveryProofWipePromise = null;
      return Promise.resolve(true);
    }
  };

  const renderDetails = async (methodId) => {
    // Nota: el método ya se guarda en el click del listado.
    if(!payDetails) return;
    const id = String(methodId||'').trim();
    if(!id){ payDetails.classList.add('is-hidden'); payDetails.innerHTML=''; return; }

    // Si el usuario CAMBIA de método de pago del DELIVERY, limpiar cualquier imagen seleccionada.
    if (_deliveryPayLastRendered && _deliveryPayLastRendered !== id) {
      // Si venías de Pago móvil/Transferencia, fuerza actualización de tasa al volver.
      if (isBinanceBolivaresMethod(_deliveryPayLastRendered)) {
        clearBinanceRateCache();
      }
      await wipeAllDeliveryProof();
    }
    _deliveryPayLastRendered = id;

    // Guardar selección
    saveMethod(id);
    _deliveryPaySelected = id;

    // Calcular monto a pagar (USD) del DELIVERY.
    // Si el método del delivery es AirTM, se aplica impuesto 2% al DELIVERY.
    const payableUSD = (id === 'airtm') ? (basePayableUSD * 1.02) : basePayableUSD;
    try { localStorage.setItem(LS_DELIVERY_PAY.payableUsd, String(payableUSD || 0)); } catch (_) {}

    // Calcular Bs si aplica
    const rate = getBinanceRate();
    const montoBsRaw = (rate > 0) ? (payableUSD * rate) : 0;
    try {
      localStorage.setItem(LS_DELIVERY_PAY.rateUsed, String(rate || 0));
      localStorage.setItem(LS_DELIVERY_PAY.payableBs, String(montoBsRaw || 0));
    } catch (_) {}
    const montoDisplay = isBinanceBolivaresMethod(id) ? ((rate > 0) ? moneyVES(montoBsRaw) : 'Bs —') : money(payableUSD);

    const templates = {
      efectivo_divisas: {
        img: '/images/efectivo_divisas.png',
        note: '',
        rows: [
          ['Monto a pagar', `<span class="payment-amount-green">${money(payableUSD)}</span>`],
          ['__ALERT__', `<div class="alert alert-info" role="alert" style="margin-top:10px; font-size:14px; line-height:1.4; text-align:left; font-weight:normal;"><strong>Atención:</strong> Informamos a nuestros clientes que solo se aceptan billetes aceptables y/o en perfectas condiciones (sin roturas, sin escrituras, no muy gastados). Agradecemos su comprensión.</div>`],
        ],
      },
      pago_movil: {
        img: '/images/pago_movil_qr.png',
        note: 'Escanea el codigo QR para realizar el pago movil.',
        rows: [
          ['Banco', 'Banesco Banco Universal (0134)'],
          ['Cedula', 'V-26908729'],
          ['Numero de telefono', '04241729617'],
          ['Tasa Binance P2P (Bs/USD)', '<div class="binance-rate-row"><span id="delivery-binance-rate-display" class="binance-rate-display">Cargando…</span><button type="button" id="delivery-binance-rate-refresh" class="binance-rate-refresh">Actualizar</button></div>'],
          ['Monto a pagar (Bs)', `<span class="payment-amount-green">${montoDisplay}</span>`],
        ],
      },
      transferencia: {
        img: '/images/transferencia_qr.png',
        note: '',
        rows: [
          ['Banco', 'Banesco Banco Universal'],
          ['Cedula', 'V-26908729'],
          ['Numero de cuenta', '0134-0473-95-4731039270'],
          ['Tasa Binance P2P (Bs/USD)', '<div class="binance-rate-row"><span id="delivery-binance-rate-display" class="binance-rate-display">Cargando…</span><button type="button" id="delivery-binance-rate-refresh" class="binance-rate-refresh">Actualizar</button></div>'],
          ['Monto a pagar (Bs)', `<span class="payment-amount-green">${montoDisplay}</span>`],
        ],
      },
      binance_pay: {
        img: '/images/binance_pay_qr.png',
        note: 'Escanea el codigo QR para realizar el pago.',
        rows: [ ['Correo electronico', 'goddezzeus@gmail.com'], ['Monto a pagar', `<span class="payment-amount-green">${money(payableUSD)}</span>`] ],
      },
      zinli: {
        img: '/images/zinli_qr.png',
        note: 'Escanea el codigo QR para realizar el pago.',
        rows: [
          ['Correo electronico primario', 'dakspaces@gmail.com'],
          ['Correo electronico secundario', 'godezzeus@gmail.com'],
          ['Monto a pagar', `<span class="payment-amount-green">${money(payableUSD)}</span>`],
        ],
      },
      airtm: {
        img: '/images/airtm_qr.png',
        note: 'Escanea el codigo QR para realizar el pago.',
        rows: [
          ['Nombre de usuario', 'cpustorevzla'],
          ['Correo electronico', 'dakspaces@gmail.com'],
          ['Monto a pagar', `<span class="payment-amount-green">${money(payableUSD)}</span>`],
        ],
      },
    };

    const t = templates[id];
    if(!t){ payDetails.classList.add('is-hidden'); payDetails.innerHTML=''; return; }

    const noteHtml = t.note ? `<div class="payment-details-note">${t.note}</div>` : '';
    const rowsHtml = t.rows.map((r)=>{
      if (r[0] === '__ALERT__') return `<tr><td colspan="2">${r[1]}</td></tr>`;
      return `<tr><td>${r[0]}:</td><td>${r[1]}</td></tr>`;
    }).join('');


    const proofStatus = `
      <div id="delivery-payment-proof-status" class="payment-proof-status"></div>
      <div id="delivery-payment-proof-previews" class="payment-proof-previews"></div>
    `;

    // Efectivo divisas no requiere campo extra ni comprobantes.
    const cashRow = '';

    const proofRow = (id !== 'efectivo_divisas')
      ? `
        <tr>
          <td>Adjuntar captura de pago:</td>
          <td>
            <div class="file-picker">
              <input id="delivery-payment-proof-file" type="file" class="payment-proof-file file-picker-input" style="display:none" accept="image/jpeg,image/png,image/gif,image/webp" />
              <button type="button" id="delivery-payment-proof-pick" class="file-picker-btn">Seleccionar archivo</button>
            </div>
            ${proofStatus}
          </td>
        </tr>
      `
      : '';

    // Encabezado + botón cambiar (idéntico al flujo original)
    const selectedOpt = optionsDelivery.find(o => o.id === id);
    const selectedTitle = selectedOpt ? selectedOpt.title : '—';
    payDetails.innerHTML = `
      <div class="payment-details-inner" style="align-items: stretch;">
          <button type="button" id="delivery-change-pay-method" class="btn btn-secondary">Cambiar método de pago</button>
        </div>
        <div style="display:flex; justify-content:center; padding:12px 0 0;">
          <img src="${t.img}" width="256" height="256" alt="QR ${id}" />
        </div>
        ${noteHtml}
        <table class="payment-details-table">
          <tbody>
            ${rowsHtml}
            ${cashRow}
            ${proofRow}
          </tbody>
        </table>
      </div>
    `;
    payDetails.classList.remove('is-hidden');

    // Mostrar/ocultar lista cuando hay detalles
    try {
      if(payContainer) payContainer.style.display = 'none';
    } catch (_) {}

    // Botón cambiar: vuelve a lista
    const changeBtn = document.getElementById('delivery-change-pay-method');
    if(changeBtn){
      changeBtn.addEventListener('click', ()=>{
        try { if(payContainer) payContainer.style.display = ''; } catch (_) {}
        payDetails.classList.add('is-hidden');
        payDetails.innerHTML = '';
        setPayConfirmEnabled(false);
      });
    }

    // Tasa Binance (auto + refresh) en el modal
    if (isBinanceBolivaresMethod(id)) {
      const display = document.getElementById('delivery-binance-rate-display');
      const refreshBtn = document.getElementById('delivery-binance-rate-refresh');
      const paint = (rate, isLoading=false)=>{
        if(!display) return;
        if(isLoading){ display.textContent = 'Cargando…'; return; }
        display.textContent = rate > 0 ? (moneyVES(rate) + ' / USD') : 'No disponible';
      };
      const load = async ()=>{
        paint(0,true);
        try{
          const r = await ensureBinanceRate();
          paint(r,false);
          // re-render para recalcular Bs y guardar tasa
          renderDetails(id);
        }catch(_){ paint(0,false); }
      };
      paint(getBinanceRate(), false);
      if(getBinanceRate() <= 0) load();
      if(refreshBtn){
        refreshBtn.addEventListener('click', ()=>{
          try{ localStorage.removeItem(BINANCE_RATE_CACHE_KEY); }catch(_){ }
          load();
        });
      }
    }


    // ==== Efectivo Divisas: no requiere comprobante ni campos extra ====
    if (id === 'efectivo_divisas') {
      setPayConfirmEnabled(true);
      return; // no ejecutar lógica de comprobantes
    }

    // ==== Comprobante (igual que el original) ====
    const fileInput = document.getElementById('delivery-payment-proof-file');
    const previewsEl = document.getElementById('delivery-payment-proof-previews');
    const pickBtn = document.getElementById('delivery-payment-proof-pick');
    const sessionId = getOrCreateOrderSessionId();
    const kind = (id === 'efectivo_divisas') ? 'delivery_bills' : 'delivery_proof';
    const prefix = `${sessionId}|delivery|${kind}|${id}|`;

    const listSelected = async () => {
      try { if (_deliveryProofWipePromise) await _deliveryProofWipePromise; } catch(_) {}
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
      if(fileInput) fileInput.value = '';
      await renderPreviews();
      await updatePicker();
      setPayConfirmEnabled(false);
    };

    const updatePicker = async () => {
      const existing = await listSelected();
      if(pickBtn){
        if(existing && existing.length > 0) pickBtn.classList.add('is-hidden');
        else pickBtn.classList.remove('is-hidden');
      }
    };

    const renderPreviews = async () => {
      if(!previewsEl) return;
      try{ _previewObjectUrls.forEach(u => URL.revokeObjectURL(u)); }catch(_){ }
      _previewObjectUrls = [];
      const existing = await listSelected();
      if(!existing.length){ previewsEl.innerHTML=''; return; }
      previewsEl.innerHTML = existing.map((item, idx)=>{
        const url = URL.createObjectURL(item.data);
        _previewObjectUrls.push(url);
        const name = escapeHtml(item.name || `Imagen ${idx+1}`);
        const idAttr = escapeHtml(item.id);
        return `
          <div class="payment-proof-preview">
            <a href="${url}" target="_blank" rel="noopener"><img src="${url}" alt="${name}"></a>
            <div class="payment-proof-filename">${name}</div>
            <button type="button" class="payment-proof-remove" data-delivery-proof-remove="${idAttr}">Eliminar</button>
          </div>
        `;
      }).join('');
    };

    const removeOne = async (idToRemove) => {
      const key = String(idToRemove || '');
      if(!key) return;
      await withStore('readwrite', (store) => { store.delete(key); });
      if(fileInput) fileInput.value = '';
      await renderPreviews();
      await updatePicker();
      const count = (await listSelected()).length;
      setPayConfirmEnabled(count > 0);
    };

    if(previewsEl){
      previewsEl.addEventListener('click', (e)=>{
        const btn = e.target && e.target.closest ? e.target.closest('[data-delivery-proof-remove]') : null;
        if(!btn) return;
        e.preventDefault();
        removeOne(btn.getAttribute('data-delivery-proof-remove'));
      });
    }
    if(pickBtn && fileInput){
      pickBtn.addEventListener('click', ()=>fileInput.click());
    }
    if(fileInput){
      fileInput.addEventListener('change', async ()=>{
        const files = fileInput.files ? Array.from(fileInput.files) : [];
        if(!files.length) return;
        // 1 archivo (igual que original)
        await clearSelected();
        const f = files[0];
        const v = validateImageFile(f);
        if(!v.ok){
          if(payError){ payError.textContent = v.msg; payError.style.display='block'; }
          setPayConfirmEnabled(false);
          return;
        }
        try{
          await withStore('readwrite', (store)=>{
            const idKey = prefix + `${Date.now()}_${Math.random().toString(16).slice(2)}`;
            store.put({ id: idKey, name: f.name || '', type: f.type || '', size: f.size || 0, data: f });
          });
          if(fileInput) fileInput.value = '';
          await renderPreviews();
          await updatePicker();
          setPayConfirmEnabled(true);
        }catch(_){
          if(payError){ payError.textContent = 'Error al guardar imagen. Intenta de nuevo.'; payError.style.display='block'; }
          setPayConfirmEnabled(false);
        }
      });
    }

    // Inicial
    await renderPreviews();
    await updatePicker();
    const count = (await listSelected()).length;
    setPayConfirmEnabled(count > 0);
  };

  const bindListClicks = () => {
    if(!payContainer) return;
    const list = payContainer.querySelector('#delivery-payment-list');
    if(!list) return;
    list.addEventListener('click', (ev)=>{
      const btn = ev.target && ev.target.closest ? ev.target.closest('button[data-delivery-pay]') : null;
      if(!btn) return;
      const id = btn.getAttribute('data-delivery-pay') || '';

      // Guardar selección INMEDIATA (evita que Confirmar falle si los detalles aún no renderizan)
      try { saveMethod(id); } catch(_) {}
      try { _deliveryPaySelected = id; } catch(_) {}
      // Seleccionar visualmente
      list.querySelectorAll('button[data-delivery-pay]').forEach(b=>b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      // Render detalles
      renderDetails(id);
    });
  };

  // Render inicial
  renderList();
  bindListClicks();
  // Si había un método guardado y ya tenías comprobante, entra directo a detalles
  const saved = getSavedMethod();
  if(saved){
    // marcarlo en la lista
    try{
      const b = payContainer ? payContainer.querySelector(`button[data-delivery-pay="${CSS && CSS.escape ? CSS.escape(saved) : saved}"]`) : null;
      if(b) b.classList.add('is-selected');
    }catch(_){ }
  }

  // Abrir modal
  payModal.classList.remove('is-open');
  payModal.setAttribute('aria-hidden','false');
  try { void payModal.offsetWidth; } catch(_) {}
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      try { payModal.classList.add('is-open'); } catch(_) {}
    });
  });
  // Por defecto, mostramos lista (el usuario elige)
  try { if(payContainer) payContainer.style.display = ''; } catch (_) {}
  if(payDetails){ payDetails.classList.add('is-hidden'); payDetails.innerHTML = ''; }
  setPayConfirmEnabled(false);
  return true;
}
function closePayModal(){
  if(!payModal) return;
  payModal.classList.remove('is-open');
  payModal.setAttribute('aria-hidden','true');

  // Si el usuario CIERRA/VUELVE sin confirmar, invalidar el pago del delivery para que el total NO incluya delivery.
  if(!_deliveryPayJustConfirmed){
    try { localStorage.removeItem('pcbuilder_delivery_payment_confirmed'); } catch(_){}
    try { localStorage.removeItem('pcbuilder_delivery_payment_method'); } catch(_){}
  }

  // Al cerrar el modal, limpiar comprobantes/capturas del delivery.
  // Requisito: si se cierra y se vuelve a abrir, NO debe aparecer la imagen anterior.
  try { wipeAllDeliveryProof(); } catch (_) {}
  try { clearBinanceRateCache(); } catch (_) {}
  _deliveryPayLastRendered = '';
  _deliveryPayJustConfirmed = false;
  try { __destroyInjectedDeliveryModals(); } catch(_) {}

}

function closeConfirmModal(){

  if(!confirmModal) return;
  confirmModal.classList.remove('is-open');
  confirmModal.setAttribute('aria-hidden','true');

  // Si el usuario cancela/cierra el flujo, también limpiamos cualquier imagen de comprobante.
  try { wipeAllDeliveryProof(); } catch (_) {}
  try { clearBinanceRateCache(); } catch (_) {}
  _deliveryPayLastRendered = '';
  try { __destroyInjectedDeliveryModals(); } catch(_) {}

}

function closeModal(){

      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','true');

      // Cierre total del delivery -> limpiar comprobantes/capturas del delivery
      try { wipeAllDeliveryProof(); } catch (_) {}
  try { clearBinanceRateCache(); } catch (_) {}
      _deliveryPayLastRendered = '';
    }

    function updateCostLabel(usd, oos){
      if(!costEl) return;
      costEl.classList.remove('pc-delivery-free','pc-delivery-paid');
      if(oos){
        costEl.textContent = '—';
        if(oosEl) oosEl.style.display = 'block';
        if(btnApply) btnApply.disabled = true;
        return;
      }
      if(oosEl) oosEl.style.display = 'none';
      if(btnApply) btnApply.disabled = false;

      const nUsd = Number(usd) || 0;
      if(nUsd <= 0){
        costEl.classList.add('pc-delivery-free');
        costEl.textContent = 'GRATIS';
        return;
      }

      costEl.classList.add('pc-delivery-paid');

      // Mostrar siempre USD + Bs (independiente del método de pago; solo DELIVERY)
      const stamp = Date.now();
      updateCostLabel.__stamp = stamp;

      const setText = (bsText) => {
        if(updateCostLabel.__stamp !== stamp) return; // evita carreras
        costEl.textContent = `US$ ${nUsd.toFixed(2)}`;
      };

      // fallback mientras carga la tasa
      setText('Bs —');

      // intentar obtener tasa Binance para calcular VES
      Promise.resolve()
        .then(()=>ensureBinanceRate())
        .then((rate)=>{
          const r = Number(rate) || 0;
          if(r > 0){
            setText(moneyVES(nUsd * r));
          }
        })
        .catch(()=>{/* silencioso */});
    }

let _computeTimer = null;
function computeAndRender(){
  // Debounce para no spamear Distance Matrix mientras arrastras
  if(_computeTimer) clearTimeout(_computeTimer);
  _computeTimer = setTimeout(async ()=>{
    const havKm = haversineKm(ORIGIN, current);

    // Intentar distancia real por carretera
    const road = await getRoadDistanceKm(ORIGIN, current);
    const usedKm = (road && road.ok && typeof road.km === 'number') ? road.km : havKm;

    currentKm = usedKm;
    const p = priceByDistance(currentKm);
    currentUsd = p.usd;
    outOfService = p.outOfService;

    const latStr = current.lat.toFixed(5);
      const lngStr = current.lng.toFixed(5);
      if(coordsEl){
        // placeholder inmediato
        coordsEl.textContent = `(${latStr}, ${lngStr})`;
        reverseGeocodeLabel(current.lat, current.lng).then((r)=>{
          if(!coordsEl) return;
          if(r && r.ok && r.label){
            coordsEl.textContent = `${r.label} (${latStr}, ${lngStr})`;
          }
        });
      }
    if(distEl){
      // si tenemos texto de google, mostrarlo; si no, km calculado
      distEl.textContent = (road && road.ok && road.text) ? `${road.text} (~${currentKm.toFixed(2)} km)` : `${currentKm.toFixed(2)} km`;
    }
    
// MAP_PREVIEW_ONLY: al mover el pin NO actualizamos el resumen del pedido.
// Solo guardamos lat/lng/km para reabrir el mapa; el costo (usd) se guarda al aplicar ubicación.
try{
  setDeliveryLS(LS_DELIVERY.lat, current.lat);
  setDeliveryLS(LS_DELIVERY.lng, current.lng);
  localStorage.setItem(LS_DELIVERY.km,  String(currentKm.toFixed(2)));
  localStorage.setItem(LS_DELIVERY.oos, outOfService ? "1" : "0");
}catch(e){}
updateCostLabel(currentUsd, outOfService);
  // Habilitar/inhabilitar botón según estado
  refreshApplyEnabled();
  }, 250);
}

    function initIfNeeded(){
      // Si el mapa ya existe (reabrir modal), ya está cargado: habilitar botón inmediatamente
      if(map) {
        try{ google.maps.event.trigger(map, 'resize'); }catch(_){ }
        mapReady = true;
        refreshApplyEnabled();
        return;
      }
      ensureMapsLoaded().then(()=>{
        geocoder = new google.maps.Geocoder();
        const savedLat = Number(localStorage.getItem(LS_DELIVERY.lat));
        const savedLng = Number(localStorage.getItem(LS_DELIVERY.lng));
        if(Number.isFinite(savedLat) && Number.isFinite(savedLng) && savedLat && savedLng){
          current = { lat: savedLat, lng: savedLng };
        }else{
          current = { lat: ORIGIN.lat, lng: ORIGIN.lng };
        }

        map = new google.maps.Map(mapEl, {
          center: current,
          zoom: 12,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true
        });

        // Esperar a que terminen de cargar los tiles del mapa para habilitar el botón
        try{
          google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
            mapReady = true;
            refreshApplyEnabled();
          });
        }catch(_){
          mapReady = true;
          refreshApplyEnabled();
        }

        marker = new google.maps.Marker({ position: current, map, draggable: true });

        map.addListener('click', (e)=>{
          marker.setPosition(e.latLng);
          current = { lat: e.latLng.lat(), lng: e.latLng.lng() };
          computeAndRender();
        });
        marker.addListener('dragend', (e)=>{
          current = { lat: e.latLng.lat(), lng: e.latLng.lng() };
          computeAndRender();
        });

        computeAndRender();
      }).catch((err)=>{
        if(costEl) costEl.textContent = (err && err.message) ? err.message : 'No se pudo cargar el mapa.';
        if(btnApply) btnApply.disabled = true;
      });
    }

    function applySelection(){
      setDeliveryLS(LS_DELIVERY.lat, current.lat);
      setDeliveryLS(LS_DELIVERY.lng, current.lng);
      // Guardar URL de mapas (sin https) con la ubicación CONFIRMADA
      try {
        const __m = `maps.google.com/?q=${current.lat},${current.lng}`;
        localStorage.setItem('pcbuilder_delivery_map_url', __m);
        localStorage.setItem('pcbuilder_delivery_map_url_delivery', __m);
      } catch(_) {}
      localStorage.setItem(LS_DELIVERY.km,  String(currentKm.toFixed(2)));
      localStorage.setItem(LS_DELIVERY.oos, outOfService ? "1" : "0");

      if(outOfService){
        localStorage.removeItem(LS_DELIVERY.usd);
      }else{
        localStorage.setItem(LS_DELIVERY.usd, String(Number(currentUsd||0).toFixed(2)));
      }

      if(typeof window.__pcbuilderRenderSummary === 'function'){
        window.__pcbuilderRenderSummary();
      }
      closeModal();
    }

    btnOpen.addEventListener('click', function(ev){
      try{
        // Cuando el usuario vuelve a "Elegir la ubicación del delivery", regresamos el botón de completar pedido a estado bloqueado.
        const continueBtn = document.getElementById('payment-continue-btn');
        if (continueBtn) {
          continueBtn.setAttribute('disabled','disabled');
          continueBtn.setAttribute('aria-disabled','true');
          continueBtn.classList.add('is-disabled');
          continueBtn.dataset.locked = 'true';
        }
        // Limpiar confirmación/monto de Product Cash para obligar a confirmarlo nuevamente
        try {
          localStorage.removeItem('pcbuilder_product_cash_confirmed');
          localStorage.removeItem('pcbuilder_product_cash_amount');
          localStorage.removeItem('pcbuilder_product_cash_required');
          } catch(_) {}
          // Limpiar confirmación/monto de Delivery Cash para obligar a confirmarlo nuevamente
          try {
            localStorage.removeItem('pcbuilder_delivery_cash_confirmed');
            localStorage.removeItem('pcbuilder_delivery_cash_amount');
          } catch(_) {}
        }catch(_){}
      openModal(ev);
    });
    if(btnClose) btnClose.addEventListener('click', closeModal);
    // Cancel/back button no cierra el modal (solo X)
    if(btnCancel) btnCancel.addEventListener('click', (e)=>{ try{ e.preventDefault(); }catch(_){ } try{ closeModal(); }catch(_){ } try{ __destroyModal('deliveryModal'); }catch(_){ } });
    if(btnApply) btnApply.addEventListener('click', ()=>{
      if(outOfService) return;
      // Si el delivery es GRATIS, aplicamos la ubicación y (si corresponde)
      // dispararemos un modal INDEPENDIENTE para capturar el cambio (efectivo) del pedido.
      if(Number(currentUsd||0) <= 0){
        applySelection();
        // Asegura que el modal de efectivo pueda detectar que el delivery es gratis.
        try { localStorage.setItem('pcbuilder_delivery_payable_usd','0'); } catch(_) {}
        try {
          try { localStorage.setItem('pcbuilder_delivery_payment_confirmed','1'); } catch(_) {}
          document.dispatchEvent(new CustomEvent('pcbuilder:delivery_free_applied'));
        } catch(_) {}
        return;
      }
      openConfirmModal();
    });
    if(confirmOk) confirmOk.addEventListener('click', ()=>{
      closeConfirmModal();
      // Guard extra: si por alguna razón el costo es 0, aplicamos directo.
      if(Number(currentUsd||0) <= 0){
        applySelection();
        return;
      }
      openPayModal();
    });
    if(confirmClose) confirmClose.addEventListener('click', closeConfirmModal);
    // Cancel no cierra el modal (solo X)
    if(confirmCancel) confirmCancel.addEventListener('click', (e)=>{ try{ e.preventDefault(); }catch(_){ } try{ closeConfirmModal(); }catch(_){ } });
    // Backdrop click disabled: solo se cierra con el botón X
    if(confirmModal) confirmModal.addEventListener('click', (e)=>{ if(e.target === confirmModal) { /* no-op */ } });
    if(payClose) payClose.addEventListener('click', closePayModal);
    // Cancel no cierra el modal (solo X)
    if(payCancel) payCancel.addEventListener('click', closePayModal);
    // Backdrop click disabled: solo se cierra con el botón X
    if(payModal) payModal.addEventListener('click', (e)=>{ if(e.target === payModal) { /* no-op */ } });
    if(payOk) payOk.addEventListener('click', ()=>{
      // Respetar bloqueo visual (se habilita solo cuando hay método + comprobante)
      if(payOk.classList.contains('is-disabled') || payOk.getAttribute('aria-disabled') === 'true'){
        const m = (function(){
          try { return String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim(); } catch (_) { return ''; }
        })();
        // Para métodos que requieren comprobante
        if(m !== 'efectivo_divisas'){
          if(payError){ payError.textContent='Adjunta el comprobante para continuar.'; payError.style.display='block'; }
        }
        return;
      }
      const val = (function(){
        try { return String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim(); } catch (_) { return ''; }
      })();
      if(!val){
        if(payError){ payError.textContent='Selecciona un método de pago.'; payError.style.display='block'; }
        return;
      }
      _deliveryPayJustConfirmed = true;
      closePayModal();
      applySelection();
    });
    // Backdrop click disabled: solo se cierra con el botón X
    modal.addEventListener('click', (e)=>{ if(e.target === modal) { /* no-op */ } });
        // ESC disabled: solo se cierra con el botón X
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ /* no-op */ } });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __initDeliveryModal);
  } else {
    __initDeliveryModal();
  }
})();

/* v46 - Habilitar mostrar delivery en resumen SOLO al aplicar ubicación (sin congelar) */
(function(){
  const boot = ()=>{
    document.body.classList.remove('dn-delivery-applied');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Delegación: el botón puede existir luego
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t && (t.id === 'deliveryApplyBtn' || (t.closest && t.closest('#deliveryApplyBtn')))) {
      document.body.classList.add('dn-delivery-applied');
    }
  }, true);
})();

/* v56 delivery flags (LS) */
(function(){
  const LS_APPLIED = 'pcbuilder_delivery_location_applied';
  const LS_PAID_OK = 'pcbuilder_delivery_payment_confirmed';

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;

    if (t.id === 'deliveryApplyBtn' || (t.closest && t.closest('#deliveryApplyBtn'))) {
      try { localStorage.setItem(LS_APPLIED, '1'); } catch(_) {}
      try { localStorage.removeItem(LS_PAID_OK); } catch(_) {}
      // Siempre forzar reconfirmación del cambio del PRODUCTO cuando se aplica/reaplica ubicación
      try { localStorage.removeItem('pcbuilder_product_cash_confirmed'); } catch(_) {}
      try { localStorage.removeItem('pcbuilder_product_cash_amount'); } catch(_) {}
    }

    if (t.id === 'deliveryPaymentConfirmBtn' || (t.closest && t.closest('#deliveryPaymentConfirmBtn'))) {
      const btn = t.id === 'deliveryPaymentConfirmBtn' ? t : (t.closest ? t.closest('#deliveryPaymentConfirmBtn') : null);
      if (!btn) return;
      const disabled = btn.disabled || btn.getAttribute('aria-disabled') === 'true' || btn.classList.contains('is-disabled');
      if (!disabled) {
        try { localStorage.setItem(LS_PAID_OK, '1'); } catch(_) {}
      }
    }
  }, true);
})();

/* v58 reset delivery flags + recalc cuando el costo/GRATIS ya esté escrito */
(function(){
  const LS_APPLIED = 'pcbuilder_delivery_location_applied';
  const LS_PAID_OK = 'pcbuilder_delivery_payment_confirmed';

  const clearFlags = () => {
    try { localStorage.removeItem(LS_APPLIED); localStorage.removeItem(LS_PAID_OK); } catch(_) {}
  };

  // Cuando el usuario selecciona el método de envío DELIVERY, forzar que vuelva a confirmar ubicación/pago
  document.addEventListener('click', (e) => {
    const el = e.target && e.target.closest ? e.target.closest('[data-shipping],[data-shipping-method],.shipping-option') : null;
    if (!el) return;
    const v = (el.getAttribute('data-shipping') || el.getAttribute('data-shipping-method') || el.value || '').toString().trim().toLowerCase();
    if (v === 'delivery') {
      clearFlags();
      // también quitar clase que muestra la fila de delivery hasta que aplique ubicación
      try { document.body.classList.remove('dn-delivery-applied'); } catch(_) {}
    }
  }, true);


  // --- VXX: helpers para NO recalcular todo el resumen cuando el producto es Pago móvil / Transferencia ---
  const __isProductBolivarPay = () => {
    try {
      const m = String(localStorage.getItem('pcbuilder_payment_method') || localStorage.getItem('pcbuilder_payment_method_final') || '').trim().toLowerCase();
      return m === 'pago_movil' || m === 'transferencia_bancaria';
    } catch(_) { return false; }
  };

  const __parseMoneyNumber = (v) => {
    if (v == null) return NaN;
    const s = String(v).replace(/[^0-9.,-]/g,'').trim();
    if (!s) return NaN;
    // si tiene coma y punto, asume coma miles y punto decimal? aquí los nuestros suelen ser "3,00"
    if (s.includes(',') && !s.includes('.')) return Number(s.replace(',','.'));
    // "1.234,56" -> "1234.56"
    if (s.includes('.') && s.includes(',')) return Number(s.replace(/\./g,'').replace(',','.'));
    return Number(s);
  };

  const __getBinanceRateFromCache = () => {
    try {
      const raw = localStorage.getItem('pcbuilder_binance_p2p_rate_cache_v1');
      if (!raw) return 0;
      const parsed = JSON.parse(raw);
      const rate = Number(parsed?.rate || 0);
      if (!Number.isFinite(rate) || rate <= 0) return 0;
      return rate;
    } catch(_) { return 0; }
  };

  const __ensureDeliverySummaryRow = () => {
    let row = document.getElementById('summary-delivery-row');
    let val = document.getElementById('summary-delivery');
    if (row && val) return { row, val };

    const body = document.querySelector('.checkout-summary-body');
    if (!body) return { row: null, val: null };

    // insertar antes del divisor previo al total, o al final
    const dividers = body.querySelectorAll('.cart-divider');
    const beforeNode = dividers && dividers.length ? dividers[dividers.length-1] : null;

    row = document.createElement('div');
    row.className = 'checkout-summary-row';
    row.id = 'summary-delivery-row';

    const label = document.createElement('span');
    label.textContent = 'Delivery';

    val = document.createElement('strong');
    val.id = 'summary-delivery';
    val.textContent = '—';

    row.appendChild(label);
    row.appendChild(val);

    if (beforeNode && beforeNode.parentNode === body) body.insertBefore(row, beforeNode);
    else body.appendChild(row);

    return { row, val };
  };

  const __renderDeliveryOnly = () => {
    const { row, val } = __ensureDeliverySummaryRow();
    if (!row || !val) return;

    // solo mostrar si shipping es delivery
    let ship = '';
    try { ship = String(localStorage.getItem('pcbuilder_shipping_method') || sessionStorage.getItem('pcbuilder_shipping_method') || '').trim().toLowerCase(); } catch(_) {}
    const isDelivery = ship === 'delivery';
    row.style.display = isDelivery ? 'flex' : 'none';
    if (!isDelivery) return;

    // costo USD del delivery
    const usdRaw = (function(){
      try {
        return localStorage.getItem('pcbuilder_delivery_cost_usd') ||
               localStorage.getItem('pcbuilder_delivery_payable_usd') ||
               localStorage.getItem('delivery_cost_usd') || '';
      } catch(_) { return ''; }
    })();

    let usd = __parseMoneyNumber(usdRaw);
    if (!Number.isFinite(usd)) usd = NaN;

    if (!Number.isFinite(usd)) {
      val.textContent = '—';
      return;
    }

    if (usd <= 0) {
      val.textContent = 'GRATIS';
      return;
    }

    // método de pago del delivery
    let dm = '';
    try {
      dm = String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim().toLowerCase();
    } catch(_) {}

    // normalizar (quitar espacios/acentos y unificar separadores)
    const __norm = (s) => String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '_')
      .replace(/-+/g, '_')
      .replace(/[^a-z0-9_]/g, '')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '');

    const dmNorm = __norm(dm);

    // Métodos que deben mostrar Bs en el resumen (solo estos 2)
    const dmShowsBs = (dmNorm === 'pago_movil' || dmNorm === 'transferencia_bancaria' || dmNorm === 'transferencia');

    // Métodos que deben mostrar SOLO USD (sin Bs)
    const dmUsdOnly = (
      dmNorm === 'efectivo_divisas' ||
      dmNorm === 'binance_pay' ||
      dmNorm === 'zinli' ||
      dmNorm === 'airtm'
    );

    const usdTxt = usd.toFixed(2).replace('.',',') + ' US$';

    if (dmShowsBs && !dmUsdOnly) {
      const rate = __getBinanceRateFromCache();
      if (rate > 0) {
        const bs = usd * rate;
        const bsTxt = 'Bs ' + bs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        val.textContent = usdTxt + ' (' + bsTxt + ')';
      } else {
        val.textContent = usdTxt + ' (Bs —)';
      }
    } else {
      val.textContent = usdTxt;
    }
  };

  const triggerRecalc = () => {
    if (__isProductBolivarPay()) { __renderDeliveryOnly(); return; }
    try {
      const ev = new Event('input', { bubbles: true });
      document.dispatchEvent(ev);
      const first = document.getElementById('dn-firstname');
      if (first) first.dispatchEvent(ev);
    } catch(_) {}
  };

  // Al aplicar ubicación: esperar a que se actualice summary-delivery y luego recalcular
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (!(t.id === 'deliveryApplyBtn' || (t.closest && t.closest('#deliveryApplyBtn')))) return;

    if (__isProductBolivarPay()) {
      // No recalcular todo el resumen; solo refrescar la línea Delivery
      setTimeout(__renderDeliveryOnly, 0);
      setTimeout(__renderDeliveryOnly, 150);
      return;
    }

    const target = document.getElementById('summary-delivery');
    if (!target) {
      requestAnimationFrame(triggerRecalc);
      return;
    }

    const before = (target.textContent || '').trim();

    const obs = new MutationObserver(() => {
      const now = (target.textContent || '').trim();
      if (now && now !== before) {
        obs.disconnect();
        // cuando ya cambió el texto (GRATIS o monto), recalcular en el siguiente frame
        requestAnimationFrame(triggerRecalc);
      }
    });

    obs.observe(target, { childList: true, characterData: true, subtree: true });

    // fallback por si no muta
    setTimeout(() => {
      try { obs.disconnect(); } catch(_) {}
      requestAnimationFrame(triggerRecalc);
    }, 800);
  }, true);
})();

/* v59 recalc after delivery payment confirm (cuando cierra el modal) */
(function(){
  const triggerRecalc = () => {
    if (typeof __isProductBolivarPay === 'function' && __isProductBolivarPay()) { if (typeof __renderDeliveryOnly === 'function') { __renderDeliveryOnly(); } return; }
    try {
      const evInput = new Event('input', { bubbles: true });
      const evChange = new Event('change', { bubbles: true });
      document.dispatchEvent(evInput);
      document.dispatchEvent(evChange);
      const first = document.getElementById('dn-firstname');
      if (first) { first.dispatchEvent(evInput); first.dispatchEvent(evChange); }
    } catch(_) {}
  };

  const scheduleRecalcAfterClose = () => {
    // 1) intenta detectar cierre del modal de pago delivery
    const modal = document.getElementById('deliveryPaymentModal');
    if (!modal) {
      // fallback simple
      if (typeof __isProductBolivarPay === 'function' && __isProductBolivarPay()) {
        setTimeout(__renderDeliveryOnly, 50);
        setTimeout(__renderDeliveryOnly, 250);
      } else {
        setTimeout(triggerRecalc, 150);
        setTimeout(triggerRecalc, 450);
      }
      return;
    }

    const isHidden = () => {
      const st = (modal.getAttribute('style') || '').toLowerCase();
      const aria = (modal.getAttribute('aria-hidden') || '').toLowerCase();
      return aria === 'true' || st.includes('display:none') || st.includes('display: none');
    };

    // si ya está cerrado, recalcular ya
    if (isHidden()) {
      setTimeout(triggerRecalc, 50);
      return;
    }

    // observa atributos para cuando se oculte
    const obs = new MutationObserver(() => {
      if (isHidden()) {
        obs.disconnect();
        // dar un pequeño margen para que el wizard termine de actualizar estados
        setTimeout(triggerRecalc, 50);
        setTimeout(triggerRecalc, 200);
      }
    });

    obs.observe(modal, { attributes: true, attributeFilter: ['style','aria-hidden','class'] });

    // fallback por si no cambia atributos
    setTimeout(() => {
      try { obs.disconnect(); } catch(_) {}
      triggerRecalc();
    }, 800);
  };

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (t.id === 'deliveryPaymentConfirmBtn' || (t.closest && t.closest('#deliveryPaymentConfirmBtn'))) {
      // después de confirmar pago, al cerrar el modal, recalcular el botón del último paso
      scheduleRecalcAfterClose();
    }
  }, true);
})();


/* v60 abrir modal extra al confirmar Efectivo Divisas (cuando ya cerraron mapa + pago) */
(function(){
  const LS_METHOD = 'pcbuilder_delivery_payment_method';
  const LS_CASH_AMOUNT = 'pcbuilder_delivery_cash_amount';
  // Modal independiente (cambio del PRODUCTO cuando el delivery se paga por transferencia/pago móvil/etc.)
  const LS_PRODUCT_CASH_AMOUNT = 'pcbuilder_product_cash_amount';

  const parseMoney = (txt) => {
    if (txt == null) return NaN;
    let s = String(txt).trim();
    if (!s) return NaN;
    // conservar solo dígitos, separadores y signo
    s = s.replace(/[^0-9.,\-]/g, '');
    if (!s) return NaN;

    // Si vienen ambos separadores, decidir decimal por el último separador
    const hasComma = s.includes(',');
    const hasDot = s.includes('.');
    if (hasComma && hasDot) {
      if (s.lastIndexOf(',') > s.lastIndexOf('.')) {
        // coma es decimal: quitar puntos miles
        s = s.replace(/\./g, '').replace(',', '.');
      } else {
        // punto es decimal: quitar comas miles
        s = s.replace(/,/g, '');
      }
    } else if (hasComma && !hasDot) {
      // asumir coma decimal si hay hasta 2 dígitos luego de la coma
      const parts = s.split(',');
      if (parts.length === 2 && parts[1].length > 0 && parts[1].length <= 2) {
        s = parts[0].replace(/\./g, '') + '.' + parts[1];
      } else {
        s = s.replace(/,/g, '');
      }
    }

    const n = parseFloat(s);
    return Number.isFinite(n) ? n : NaN;
  };

  const formatMoney = (n) => {
    if (!Number.isFinite(n)) return '—';
    return n.toFixed(2).replace('.', ',') + ' US$';
  };

  const getTotalToPay = () => {
    // El resumen de checkout ya incluye delivery cuando aplica
    const el = document.getElementById('summary-total');
    const txt = el ? el.textContent : '';
    const v = parseMoney(txt);
    return Number.isFinite(v) ? v : 0;
  };

  // Cuando el cliente ya pagó los PRODUCTOS con métodos no-efectivo (y solo paga el delivery en efectivo),
  // en el modal de efectivo para DELIVERY debemos mostrar únicamente el monto del DELIVERY.
  const getProductPaymentMethod = () => {
    try {
      // payment-method.js guarda el método de pago con namespace por shipping:
      //   pcbuilder_payment_method_<shipping> (ej: _delivery) y también pcbuilder_payment_method_final_<shipping>
      const ship = String(
        localStorage.getItem('pcbuilder_shipping_method') ||
        sessionStorage.getItem('pcbuilder_shipping_method') ||
        ''
      ).trim().toLowerCase();

      const nsKey = (base) => ship ? `${base}_${ship}` : base;

      const v =
        localStorage.getItem(nsKey('pcbuilder_payment_method')) ||
        localStorage.getItem(nsKey('pcbuilder_payment_method_final')) ||
        // Fallback legacy (pickup / compat)
        localStorage.getItem('pcbuilder_payment_method_final') ||
        localStorage.getItem('pcbuilder_payment_method') ||
        '';

      return String(v || '').trim();
    } catch(_) { return ''; }
  };

  const getDeliveryCostUsd = () => {
    // 1) Preferir localStorage si existe
    try {
      const raw = localStorage.getItem(LS_DELIVERY.usd);
      const n = parseFloat(String(raw || '').replace(',', '.'));
      if (Number.isFinite(n) && n > 0) return n;
    } catch(_) {}

    // 2) Fallback: leer del resumen (fila "Delivery")
    try {
      const rows = Array.from(document.querySelectorAll('.checkout-summary-row'));
      for (const row of rows) {
        const labelEl = row.querySelector('span');
        const valueEl = row.querySelector('strong');
        const label = (labelEl ? labelEl.textContent : '').trim().toLowerCase();
        if (!label) continue;
        if (label === 'delivery' || label.includes('delivery')) {
          const txt = valueEl ? valueEl.textContent : '';
          const v = parseMoney(txt);
          if (Number.isFinite(v) && v > 0) return v;
        }
      }
    } catch(_) {}

    return 0;
  };

  const getDeliveryCashModalTotal = () => {
    try{
      const deliveryMethodRaw = getMethod(); // pcbuilder_delivery_payment_method
      const productMethodRaw  = getProductPaymentMethod();

      const dm = String(deliveryMethodRaw || '').trim().toLowerCase();
      const pm = String(productMethodRaw  || '').trim().toLowerCase();

      // Detect "product already paid" methods (non-cash) robustly (ids OR labels)
      const productPaidNonCash = (
        pm === 'transferencia' ||
        pm === 'transferencia_bancaria' ||
        pm.includes('transferencia') ||

        pm === 'pago_movil' ||
        pm.includes('pago movil') ||
        pm.includes('pago móvil') ||

        pm === 'binance_pay' ||
        pm.includes('binance') ||

        pm === 'zinli' ||
        pm.includes('zinli') ||

        pm === 'airtm' ||
        pm.includes('airtm')
      );

      // If delivery is cash USD/EUR and product was already paid via non-cash, show ONLY delivery cost
      if (dm === 'efectivo_divisas' && productPaidNonCash) {
        const d = getDeliveryCostUsd();
        if (Number.isFinite(d) && d > 0) return d;
      }

      // Otherwise (e.g. product cash + delivery cash), show full order total (includes delivery)
      return getTotalToPay();
    } catch(_){
      return getTotalToPay();
    }
  };

  // Total SOLO del PRODUCTO (sin delivery). Se usa cuando el producto se paga en efectivo,
  // pero el delivery ya se pagó por transferencia/pago móvil/zinli/binance/airtm.
  const getProductCashModalTotal = () => {
    try {
      const total = getTotalToPay();
      const d = getDeliveryCostUsd();
      const p = (Number.isFinite(total) ? total : 0) - (Number.isFinite(d) ? d : 0);
      // Evitar negativos por redondeos/ausencia de fila delivery
      return (Number.isFinite(p) && p > 0) ? p : 0;
    } catch(_){
      return 0;
    }
  };


  const getMethod = () => {
    try { return String(localStorage.getItem(LS_METHOD) || '').trim(); } catch(_) { return ''; }
  };

  const isHidden = (m) => {
    if(!m) return true;
    const st = String(m.getAttribute('style') || '').toLowerCase();
    const aria = String(m.getAttribute('aria-hidden') || '').toLowerCase();
    return aria === 'true' || st.includes('display:none') || st.includes('display: none') || !m.classList.contains('is-open');
  };

  const open = (m) => {
    if(!m) return;
    m.classList.remove('is-open');
    m.setAttribute('aria-hidden','false');
    try { void m.offsetWidth; } catch(_) {}
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        try { m.classList.add('is-open'); } catch(_) {}
      });
    });
  };

  const close = (m) => {
    if(!m) return;
    m.classList.remove('is-open');
    m.setAttribute('aria-hidden','true');
  };

  const setOkEnabled = (btn, enabled) => {
    if (!btn) return;
    btn.disabled = !enabled;
    if (enabled) {
      btn.classList.remove('is-disabled');
      btn.setAttribute('aria-disabled','false');
    } else {
      btn.classList.add('is-disabled');
      btn.setAttribute('aria-disabled','true');
    }
  };

  const scheduleOpenAfterAllClosed = () => {
    // Lazy-injected modal: ensure it exists BEFORE trying to open/bind
    try {
      if (!document.getElementById('deliveryCashInfoModal') && window.PCBOrderVerificationModals && typeof window.PCBOrderVerificationModals.ensure === 'function') {
        window.PCBOrderVerificationModals.ensure('deliveryCashInfoModal');
      }
    } catch(_) {}

    // (Re)bind listeners each time because the modal can be destroyed and re-injected
    try { bindCashModal(); } catch(_) {}

    const cashModal = document.getElementById('deliveryCashInfoModal');
    const payModal  = document.getElementById('deliveryPaymentModal');
    const mapModal  = document.getElementById('deliveryModal');

    if(!cashModal) return;

    const start = Date.now();
    const tick = () => {
      // Esperar a que ambos modales estén realmente cerrados
      if (isHidden(payModal) && isHidden(mapModal)) {
        // preparar contenido/validaciones antes de abrir
        try {
          const total = getDeliveryCashModalTotal();
          const totalEl = document.getElementById('deliveryCashTotalToPay');
          if (totalEl) totalEl.textContent = formatMoney(total);
        } catch(_) {}
        try {
          const cont = document.getElementById('payment-continue-btn');
          if (cont) {
            cont.setAttribute('disabled','disabled');
            cont.setAttribute('aria-disabled','true');
            cont.classList.add('is-disabled');
            cont.dataset.locked = 'true';
          }
        } catch(_) {}
        try { localStorage.removeItem('pcbuilder_delivery_cash_confirmed'); } catch(_) {}
        try { localStorage.setItem('pcbuilder_delivery_cash_confirm_required','1'); } catch(_) {}
        
        open(cashModal);
        return;
      }
      // timeout de seguridad
      if (Date.now() - start > 2000) {
        try {
          const total = getDeliveryCashModalTotal();
          const totalEl = document.getElementById('deliveryCashTotalToPay');
          if (totalEl) totalEl.textContent = formatMoney(total);
        } catch(_) {}
        try {
          const cont = document.getElementById('payment-continue-btn');
          if (cont) {
            cont.setAttribute('disabled','disabled');
            cont.setAttribute('aria-disabled','true');
            cont.classList.add('is-disabled');
            cont.dataset.locked = 'true';
          }
        } catch(_) {}
        try { localStorage.removeItem('pcbuilder_delivery_cash_confirmed'); } catch(_) {}
        try { localStorage.setItem('pcbuilder_delivery_cash_confirm_required','1'); } catch(_) {}
        
        open(cashModal);
        return;
      }
      setTimeout(tick, 60);
    };

    setTimeout(tick, 30);
  };

  const scheduleOpenProductCashAfterAllClosed = () => {
    // Lazy-injected modal: ensure it exists BEFORE trying to open/bind
    try {
      if (!document.getElementById('productCashInfoModal') && window.PCBOrderVerificationModals && typeof window.PCBOrderVerificationModals.ensure === 'function') {
        window.PCBOrderVerificationModals.ensure('productCashInfoModal');
      }
    } catch(_) {}

    // (Re)bind listeners each time because the modal can be destroyed and re-injected
    try { bindProductCashModal(); } catch(_) {}

    const productCashModal = document.getElementById('productCashInfoModal');
    const payModal  = document.getElementById('deliveryPaymentModal');
    const mapModal  = document.getElementById('deliveryModal');

    if (!productCashModal) return;

    const start = Date.now();
    const tick = () => {
      if (isHidden(payModal) && isHidden(mapModal)) {
        try {
          const total = getProductCashModalTotal();
          const totalEl = document.getElementById('productCashTotalToPay');
          if (totalEl) totalEl.textContent = formatMoney(total);
        } catch(_) {}
        
        // --- Dynamic alert labels (delivery method + product method) ---
        try {
          const methodId =
            String(localStorage.getItem(LS_METHOD) || '').trim() ||
            String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim() ||
            String(localStorage.getItem('pcbuilder_delivery_method_confirmed') || '').trim();

          const payableUsdRaw = String(localStorage.getItem('pcbuilder_delivery_payable_usd') || '').trim();
          const payableUsd = parseFloat(payableUsdRaw);

          const getDeliveryTitle = (id) => {
            switch (String(id || '').trim()) {
              case 'efectivo_divisas': return 'Efectivo (USD / EUR)';
              case 'pago_movil': return 'Pago Móvil';
              case 'transferencia': return 'Transferencia Bancaria';
              case 'binance_pay': return 'Binance Pay';
              case 'zinli': return 'Zinli';
              case 'airtm': return 'AirTM';
              default: return '';
            }
          };

          let deliveryTitle = getDeliveryTitle(methodId);
          if (!deliveryTitle) {
            // Si el delivery es gratis, no hay método seleccionado
            if (!isNaN(payableUsd) && payableUsd <= 0) deliveryTitle = 'Delivery Gratis';
          }
          if (!deliveryTitle) deliveryTitle = '—';

          const deliveryLabelEl = document.getElementById('productCashDeliveryMethodLabel');
          const productLabelEl = document.getElementById('productCashProductMethodLabel');

          if (deliveryLabelEl) deliveryLabelEl.textContent = deliveryTitle;
          if (productLabelEl) productLabelEl.textContent = 'Efectivo (USD / EUR)';

          const deliveryAlertEl = document.getElementById('productCashInfoDynamicAlert');
          if (deliveryAlertEl) {
            // Si el delivery es gratis, no mostramos el mensaje de "pago del delivery".
            deliveryAlertEl.style.display = (!isNaN(payableUsd) && payableUsd <= 0) ? 'none' : '';
          }


          const deliveryAlertEl2 = document.getElementById('productCashInfoDynamicAlert');
          if (deliveryAlertEl2) {
            // Si el delivery es gratis, no mostramos el mensaje de "pago del delivery".
            deliveryAlertEl2.style.display = (!isNaN(payableUsd) && payableUsd <= 0) ? 'none' : '';
          }

        } catch(_) {}
        // --------------------------------------------------------------
        open(productCashModal);
        return;
      }
      if (Date.now() - start > 2000) {
        try {
          const total = getProductCashModalTotal();
          const totalEl = document.getElementById('productCashTotalToPay');
          if (totalEl) totalEl.textContent = formatMoney(total);
        } catch(_) {}
        
        // --- Dynamic alert labels (delivery method + product method) ---
        try {
          const methodId =
            String(localStorage.getItem(LS_METHOD) || '').trim() ||
            String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim() ||
            String(localStorage.getItem('pcbuilder_delivery_method_confirmed') || '').trim();

          const payableUsdRaw = String(localStorage.getItem('pcbuilder_delivery_payable_usd') || '').trim();
          const payableUsd = parseFloat(payableUsdRaw);

          const getDeliveryTitle = (id) => {
            switch (String(id || '').trim()) {
              case 'efectivo_divisas': return 'Efectivo (USD / EUR)';
              case 'pago_movil': return 'Pago Móvil';
              case 'transferencia': return 'Transferencia Bancaria';
              case 'binance_pay': return 'Binance Pay';
              case 'zinli': return 'Zinli';
              case 'airtm': return 'AirTM';
              default: return '';
            }
          };

          let deliveryTitle = getDeliveryTitle(methodId);
          if (!deliveryTitle) {
            // Si el delivery es gratis, no hay método seleccionado
            if (!isNaN(payableUsd) && payableUsd <= 0) deliveryTitle = 'Delivery Gratis';
          }
          if (!deliveryTitle) deliveryTitle = '—';

          const deliveryLabelEl = document.getElementById('productCashDeliveryMethodLabel');
          const productLabelEl = document.getElementById('productCashProductMethodLabel');

          if (deliveryLabelEl) deliveryLabelEl.textContent = deliveryTitle;
          if (productLabelEl) productLabelEl.textContent = 'Efectivo (USD / EUR)';
        } catch(_) {}
        // --------------------------------------------------------------
        open(productCashModal);
        return;
      }
      setTimeout(tick, 60);
    };
    setTimeout(tick, 30);
  };

  const bindCashModal = () => {
    const m = document.getElementById('deliveryCashInfoModal');
    if(!m) return;
    if(m.dataset.bound === '1') return;
    m.dataset.bound = '1';
    if(!m) return;

    const btnClose = document.getElementById('deliveryCashInfoModalClose');
    const btnOk = document.getElementById('deliveryCashInfoModalOkBtn');
    const input = document.getElementById('deliveryCashAmountInput');

  const getDigitsValue = (v) => String(v || '').replace(/[^0-9]/g, '');
const err = document.getElementById('deliveryCashInfoError');
	    const tbody = document.getElementById('deliveryCashInfoTbody');

	    // La fila de cambio se crea/elimina dinámicamente (no existe en el DOM si no hace falta)
	    let changeRowEl = null;
	    let changeAmountEl = null;

	    const removeChangeRow = () => {
	      // Evitar duplicados al reabrir: remover cualquier fila existente en el DOM
	      try {
	        document.querySelectorAll('#deliveryCashChangeRow').forEach(n => { try { n.remove(); } catch(_) {} });
        // Fallback: si quedó alguna fila duplicada sin id, elimínala por texto
        document.querySelectorAll('#deliveryCashInfoTbody tr').forEach(tr=>{
          try{
            const t = (tr.textContent||'').toLowerCase();
            if(t.includes('cambio estimado')) tr.remove();
          }catch(_){}
        });
	      } catch(_) {}
	      changeRowEl = null;
	      changeAmountEl = null;
	    };

	    const ensureChangeRow = () => {
	      if (changeRowEl) return;
	      if (!tbody) return;
	      const tr = document.createElement('tr');
	      tr.id = 'deliveryCashChangeRow';
	      tr.innerHTML = '<td>Cambio Estimado:</td><td style="text-align:center;"><strong id="deliveryCashChangeAmount">—</strong></td>';
	      tbody.appendChild(tr);
	      changeRowEl = tr;
	      changeAmountEl = tr.querySelector('#deliveryCashChangeAmount');
	    };

    const resetUi = () => {
      if (input) input.value = '';
      if (err) { err.style.display = 'none'; err.textContent = ''; }
	      removeChangeRow();
      setOkEnabled(btnOk, false);
    };

    const validate = () => {
      const total = getDeliveryCashModalTotal();
      const raw = input ? String(input.value || '') : '';
      const valStr = raw.replace(/\D/g,'').slice(0, 4);
      if (input && String(input.value || '') !== valStr) input.value = valStr;

      if (!valStr) {
        if (err) { err.style.display = 'none'; err.textContent = ''; }
	        removeChangeRow();
        setOkEnabled(btnOk, false);
        try { localStorage.removeItem(LS_CASH_AMOUNT); } catch(_) {}
        try { localStorage.removeItem(LS_CASH_AMOUNT + '_delivery'); } catch(_) {}
        return;
      }

      const pay = parseInt(valStr, 10);
      if (!Number.isFinite(pay)) {
        if (err) { err.style.display = 'block'; err.textContent = 'Ingresa un monto válido.'; }
	        removeChangeRow();
        setOkEnabled(btnOk, false);
        return;
      }

      // Guardar para uso posterior si hace falta
      try { localStorage.setItem(LS_CASH_AMOUNT, String(pay)); } catch(_) {}
      // Guardar también la versión con sufijo para flujos que usan namespace por shipping
      try { localStorage.setItem(LS_CASH_AMOUNT + '_delivery', String(pay)); } catch(_) {}

      if (pay + 1e-9 < total) {
        if (err) {
          err.style.display = 'block';
          err.textContent = 'El monto ingresado debe ser igual o mayor al total a pagar.';
        }
	        removeChangeRow();
        setOkEnabled(btnOk, false);
        return;
      }

      if (err) { err.style.display = 'none'; err.textContent = ''; }

	      const change = pay - total;
	      if (change > 0.009) {
	        ensureChangeRow();
	        if (changeAmountEl) changeAmountEl.textContent = formatMoney(change);
	      } else {
	        removeChangeRow();
	      }

      setOkEnabled(btnOk, true);
    };

    // Inicial
    resetUi();

    // Revalidar al abrir (por si cambia total/delivery)
    const obs = new MutationObserver(() => {
      if (m.classList.contains('is-open')) {
        // refrescar total visible
        try {
          const totalEl = document.getElementById('deliveryCashTotalToPay');
          if (totalEl) totalEl.textContent = formatMoney(getDeliveryCashModalTotal());
        } catch(_) {}

        // Actualizar alerta superior: método de pago del PRODUCTO
        try {
          const norm = (s) => String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
            .replace(/\s+/g,'_').replace(/-+/g,'_').replace(/[^a-z0-9_]/g,'').replace(/_+/g,'_').replace(/^_+|_+$/g,'');
	          // payment-method.js guarda el método de pago con namespace por shipping:
	          //   pcbuilder_payment_method_<shipping> (ej: _delivery) y pcbuilder_payment_method_final_<shipping>
	          const ship = String(
	            localStorage.getItem('pcbuilder_shipping_method') ||
	            sessionStorage.getItem('pcbuilder_shipping_method') ||
	            ''
	          ).trim().toLowerCase();
	          const nsKey = (base) => ship ? `${base}_${ship}` : base;
	          const raw = String(
	            localStorage.getItem(nsKey('pcbuilder_payment_method_final')) ||
	            localStorage.getItem(nsKey('pcbuilder_payment_method')) ||
	            // Fallback legacy (pickup / compat)
	            localStorage.getItem('pcbuilder_payment_method_final') ||
	            localStorage.getItem('pcbuilder_payment_method') ||
	            ''
	          ).trim();
          const id = norm(raw);
          const getTitle = (x) => {
            switch (String(x||'')) {
              case 'efectivo_divisas': return 'Efectivo (USD / EUR)';
              case 'pago_movil': return 'Pago Móvil';
              case 'transferencia_bancaria':
              case 'transferencia': return 'Transferencia Bancaria';
              case 'binance_pay':
              case 'binance': return 'Binance Pay';
              case 'zinli': return 'Zinli';
              case 'airtm': return 'AirTM';
              default: return '';
            }
          };
          const title = getTitle(id) || '—';
          const labelEl = document.getElementById('deliveryCashProductMethodLabel');
          if (labelEl) labelEl.textContent = title;

          // Mostrar alert superior y texto inferior según método de pago del PRODUCTO.
          // - Solo mostrar el alert warning si el producto NO se paga en efectivo.
          // - Cambiar el texto informativo según sea efectivo o no.
          try {
            const warnEl = document.getElementById('deliveryCashInfoProductPayAlert');
            const noteEl = document.getElementById('deliveryCashInfoDeliveryNote');
            const isCash = (id === 'efectivo_divisas');
            if (warnEl) warnEl.style.display = isCash ? 'none' : 'block';
            if (noteEl) {
              noteEl.textContent = isCash
                ? 'Indicanos la cantidad exacta que cancelaras en el momento de tu entrega.'
                : 'Indicanos la cantidad exacta que cancelaras sobre tu delivery en el momento de tu entrega.';
            }
          } catch(_) {}
        } catch(_) {}

        validate();
      }
    });
    obs.observe(m, { attributes: true, attributeFilter: ['class','style','aria-hidden'] });

    if (input) {
      input.addEventListener('input', validate);
      input.addEventListener('blur', validate);
    }

    if(btnClose) btnClose.addEventListener('click', ()=>{ resetUi(); close(m); });
    if(btnOk) btnOk.addEventListener('click', ()=>{
      // solo cerrar si es válido
      const disabled = btnOk.disabled || btnOk.getAttribute('aria-disabled') === 'true' || btnOk.classList.contains('is-disabled');
      if (disabled) {
        if (err) {
          err.style.display = 'block';
          err.textContent = 'Ingresa el monto con el que vas a pagar para continuar.';
        }
        return;
      }
      // Confirmación explícita del cliente (delivery en efectivo)
      try { localStorage.setItem('pcbuilder_delivery_cash_confirmed','1'); } catch(_) {}
      try { localStorage.removeItem('pcbuilder_delivery_cash_confirm_required'); } catch(_) {}

      // Si el DELIVERY se paga en efectivo y el PRODUCTO es por métodos no-efectivo (PM/Transfer/AirTM/Zinli/Binance),
      // habilitar "Completar tu pedido" SOLO al presionar "Entendido".
      try {
        const dm = String(localStorage.getItem('pcbuilder_delivery_payment_method') || '').trim();
        const norm = (s) => String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
          .replace(/\s+/g,'_').replace(/-+/g,'_').replace(/[^a-z0-9_]/g,'').replace(/_+/g,'_').replace(/^_+|_+$/g,'');
        const dmNorm = norm(dm);
        const pmRaw = String(localStorage.getItem('pcbuilder_payment_method') || localStorage.getItem('pcbuilder_payment_method_final') || '').trim();
        const pmNorm = norm(pmRaw);

        const productOk = (pmNorm === 'transferencia_bancaria' || pmNorm === 'transferencia' || pmNorm === 'pago_movil' ||
                           pmNorm === 'airtm' || pmNorm === 'zinli' || pmNorm === 'binance_pay' || pmNorm === 'binance');

        if (dmNorm === 'efectivo_divisas' && productOk) {
          const cont = document.getElementById('payment-continue-btn');
          if (cont) {
            cont.classList.remove('is-disabled');
            cont.setAttribute('aria-disabled','false');
            cont.dataset.locked = 'false';
            cont.removeAttribute('disabled');
          }
        }
      } catch(_) {}

      close(m);
    });
    // Backdrop click disabled: solo se cierra con el botón X
    // Usamos capture para bloquear cualquier handler global que cierre al hacer click fuera.
    m.addEventListener('click', (e)=>{
      if (e.target === m) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

        // ESC disabled: solo se cierra con el botón X
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ /* no-op */ } });
  };

  const bindProductCashModal = () => {
    const m = document.getElementById('productCashInfoModal');
    if(!m) return;
    if(m.dataset.bound === '1') return;
    m.dataset.bound = '1';
    if (!m) return;

    const btnClose = document.getElementById('productCashInfoModalClose');
    const btnOk = document.getElementById('productCashInfoModalOkBtn');
    const input = document.getElementById('productCashAmountInput');
    const err = document.getElementById('productCashInfoError');
    const tbody = document.getElementById('productCashInfoTbody');

    let changeRowEl = null;
    let changeAmountEl = null;

    const removeChangeRow = () => {
	      // Evitar duplicados al reabrir: remover cualquier fila existente en el DOM
	      try {
	        document.querySelectorAll('#productCashChangeRow').forEach(n => { try { n.remove(); } catch(_) {} });
        document.querySelectorAll('#productCashInfoTbody tr').forEach(tr=>{
          try{
            const t = (tr.textContent||'').toLowerCase();
            if(t.includes('cambio estimado')) tr.remove();
          }catch(_){}
        });
	      } catch(_) {}
      changeRowEl = null;
      changeAmountEl = null;
    };

    const ensureChangeRow = () => {
      if (changeRowEl) return;
      if (!tbody) return;
      const tr = document.createElement('tr');
      tr.id = 'productCashChangeRow';
      tr.innerHTML = '<td>Cambio Estimado:</td><td style="text-align:center;"><strong id="productCashChangeAmount">—</strong></td>';
      tbody.appendChild(tr);
      changeRowEl = tr;
      changeAmountEl = tr.querySelector('#productCashChangeAmount');
    };

    const resetUi = () => {
      if (input) input.value = '';
      if (err) { err.style.display = 'none'; err.textContent = ''; }
      removeChangeRow();
      setOkEnabled(btnOk, false);
    };

    const validate = () => {
      const total = getProductCashModalTotal();
      const raw = input ? String(input.value || '') : '';
      const valStr = raw.replace(/\D/g,'').slice(0, 4);
      if (input && String(input.value || '') !== valStr) input.value = valStr;

      if (!valStr) {
        if (err) { err.style.display = 'none'; err.textContent = ''; }
        removeChangeRow();
        setOkEnabled(btnOk, false);
        try { localStorage.removeItem(LS_PRODUCT_CASH_AMOUNT); } catch(_) {}
        return;
      }

      const pay = parseInt(valStr, 10);
      if (!Number.isFinite(pay)) {
        if (err) { err.style.display = 'block'; err.textContent = 'Ingresa un monto válido.'; }
        removeChangeRow();
        setOkEnabled(btnOk, false);
        return;
      }

      try { localStorage.setItem(LS_PRODUCT_CASH_AMOUNT, String(pay)); } catch(_) {}

      if (pay + 1e-9 < total) {
        if (err) {
          err.style.display = 'block';
          err.textContent = 'El monto ingresado debe ser igual o mayor al total a pagar.';
        }
        removeChangeRow();
        setOkEnabled(btnOk, false);
        return;
      }

      if (err) { err.style.display = 'none'; err.textContent = ''; }

      const change = pay - total;
      if (change > 0.009) {
        ensureChangeRow();
        if (changeAmountEl) changeAmountEl.textContent = formatMoney(change);
      } else {
        removeChangeRow();
      }

      setOkEnabled(btnOk, true);
    };

    resetUi();

    const obs = new MutationObserver(() => {
      if (m.classList.contains('is-open')) {
        try {
          const totalEl = document.getElementById('productCashTotalToPay');
          if (totalEl) totalEl.textContent = formatMoney(getProductCashModalTotal());
        } catch(_) {}
        validate();
      }
    });
    obs.observe(m, { attributes: true, attributeFilter: ['class','style','aria-hidden'] });

    if (input) {
      input.addEventListener('input', validate);
      input.addEventListener('blur', validate);
    }

    if (btnClose) btnClose.addEventListener('click', ()=>{
      // No permitir confirmar sin pasar por "Entendido"
      try { localStorage.removeItem('pcbuilder_product_cash_confirmed'); } catch(_) {}
      resetUi();
      close(m);
    });
    if (btnOk) btnOk.addEventListener('click', ()=>{
      const disabled = btnOk.disabled || btnOk.getAttribute('aria-disabled') === 'true' || btnOk.classList.contains('is-disabled');
      if (disabled) {
        if (err) {
          err.style.display = 'block';
          err.textContent = 'Ingresa el monto con el que vas a pagar para continuar.';
        }
        return;
      }
            // Confirmación explícita del cliente
      try { localStorage.setItem('pcbuilder_product_cash_confirmed', '1'); } catch(_) {}
      try { document.dispatchEvent(new Event('pcbuilder:product_cash_confirmed')); } catch(_) {}
      try { if (window.__pcbuilderRecalcContinue) window.__pcbuilderRecalcContinue(); else if (window.updateCompleteButtonState) window.updateCompleteButtonState(); } catch(_) {}
      try { setTimeout(()=>{ try { if (window.__pcbuilderRecalcContinue) window.__pcbuilderRecalcContinue(); else if (window.updateCompleteButtonState) window.updateCompleteButtonState(); } catch(_) {} }, 80); } catch(_) {}


      // v39: HABILITAR "Completar tu pedido" al presionar "Entendido" (productCash)
      try { localStorage.setItem('pcbuilder_delivery_location_applied','1'); } catch(_) {}
      try { document.body.classList.add('dn-delivery-applied'); } catch(_) {}
      // Si el delivery es gratis, o para evitar gates frágiles por texto, marcamos pago del delivery como confirmado
      try { localStorage.setItem('pcbuilder_delivery_payment_confirmed','1'); } catch(_) {}

      try {
        const cont = document.getElementById('payment-continue-btn');
        if (cont) {
          cont.classList.remove('is-disabled');
          cont.setAttribute('aria-disabled','false');
          cont.dataset.locked = 'false';
          cont.removeAttribute('disabled');
        }
      } catch(_) {}
close(m);
    });
    // Backdrop click disabled: solo se cierra con el botón X
    m.addEventListener('click', (e)=>{
      if (e.target === m) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

        // ESC disabled: solo se cierra con el botón X
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ /* no-op */ } });
  };

  const boot = () => {
    bindCashModal();
    bindProductCashModal();

    // Persistencia: si ya existe costo de delivery guardado (reload / back / nueva pestaña), reflejarlo en el resumen.
    try { setTimeout(()=>{ try { __renderDeliveryOnly(); } catch(_) {} }, 0); } catch(_) {}
    try { window.addEventListener('pageshow', ()=>{ try { __renderDeliveryOnly(); } catch(_) {} }, true); } catch(_) {}

    // Caso ESPECIAL: delivery GRATIS.
    // Cuando el usuario aplica ubicación y el delivery queda en 0,
    // queremos capturar el cambio del pedido si el PRODUCTO se paga en efectivo.
    document.addEventListener('pcbuilder:delivery_free_applied', () => {
      try {
        const pm = String(getProductPaymentMethod() || '').trim().toLowerCase();
        const productIsCash = (pm === 'efectivo_divisas' || pm.includes('efectivo'));
        if (!productIsCash) return;
        scheduleOpenProductCashAfterAllClosed();
      } catch(_) {}
    }, true);

    // Capturar click de confirmar pago delivery
    document.addEventListener('click', (e) => {
      const t = e.target;
      if (!t) return;
      if (!(t.id === 'deliveryPaymentConfirmBtn' || (t.closest && t.closest('#deliveryPaymentConfirmBtn')))) return;

      const btn = t.id === 'deliveryPaymentConfirmBtn' ? t : (t.closest ? t.closest('#deliveryPaymentConfirmBtn') : null);
      if (!btn) return;
      const disabled = btn.disabled || btn.getAttribute('aria-disabled') === 'true' || btn.classList.contains('is-disabled');
      if (disabled) return;

      const dm = String(getMethod() || '').trim().toLowerCase();
      const pm = String(getProductPaymentMethod() || '').trim().toLowerCase();

      const productIsCash = (
        pm === 'efectivo_divisas' ||
        pm.includes('efectivo')
      );

      const deliveryIsNonCash = (
        dm === 'transferencia' ||
        dm.includes('transferencia') ||
        dm === 'pago_movil' ||
        dm.includes('pago movil') ||
        dm.includes('pago móvil') ||
        dm === 'zinli' || dm.includes('zinli') ||
        dm === 'binance_pay' || dm.includes('binance') ||
        dm === 'airtm' || dm.includes('airtm')
      );

      // 1) Si el DELIVERY se paga en efectivo -> modal original (cambio del delivery o total según regla existente)
      if (dm === 'efectivo_divisas') {
        try { localStorage.setItem('pcbuilder_delivery_cash_confirm_required','1'); } catch(_) {}
        try { localStorage.removeItem('pcbuilder_delivery_cash_confirmed'); } catch(_) {}
        try {
          const cont = document.getElementById('payment-continue-btn');
          if (cont) {
            cont.setAttribute('disabled','disabled');
            cont.setAttribute('aria-disabled','true');
            cont.classList.add('is-disabled');
            cont.dataset.locked = 'true';
          }
        } catch(_) {}
        scheduleOpenAfterAllClosed();
        return;
      }

      // 2) Si el PRODUCTO es en efectivo pero el DELIVERY se paga por métodos no-efectivo -> modal independiente
      if (productIsCash && deliveryIsNonCash) {
        scheduleOpenProductCashAfterAllClosed();
      }
    }, true);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();



/* v60 summary delivery row dynamic insert/remove */
(function(){
  const ensureRow = () => {
    try {
      let row = document.getElementById('summary-delivery-row');
      if (row) return row;

      const taxVal = document.getElementById('summary-tax');
      const taxRow = taxVal ? taxVal.closest('.checkout-summary-row') : null;

      row = document.createElement('div');
      row.className = 'checkout-summary-row';
      row.id = 'summary-delivery-row';
      row.style.display = 'flex';

      const span = document.createElement('span');
      span.textContent = 'Delivery';

      const strong = document.createElement('strong');
      strong.id = 'summary-delivery';
      strong.innerHTML = '—';

      row.appendChild(span);
      row.appendChild(strong);

      // Insertar debajo de impuestos (antes del divisor/total)
      if (taxRow && taxRow.parentNode) {
        if (taxRow.nextSibling) taxRow.parentNode.insertBefore(row, taxRow.nextSibling);
        else taxRow.parentNode.appendChild(row);
      } else {
        const body = document.querySelector('.checkout-summary-body') || document.body;
        body.appendChild(row);
      }
      return row;
    } catch(e) { return null; }
  };

  const removeRow = () => {
    try {
      const row = document.getElementById('summary-delivery-row');
      if (row && row.parentNode) row.parentNode.removeChild(row);
    } catch(e) {}
  };

  // Cuando el usuario aplica/confirma la ubicacion -> crear el DIV antes de que otros scripts intenten escribir en #summary-delivery
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (t.id === 'deliveryApplyBtn' || (t.closest && t.closest('#deliveryApplyBtn'))) {
      ensureRow();
    }
  }, true); // capture

  // Si el usuario vuelve a abrir/cambiar la ubicacion -> quitar el DIV hasta que confirme de nuevo
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (t.id === 'btnDeliveryLocation' || (t.closest && t.closest('#btnDeliveryLocation'))) {
      removeRow();
    }
  }, true); // capture
/* V71: Delivery cash modal controls continue button */
(function(){
  const CONTINUE_ID = 'payment-continue-btn';
  const MODAL_ID = 'deliveryCashInfoModal';
  const OK_ID = 'deliveryCashInfoModalOkBtn';

  function lockContinue(){
    const btn = document.getElementById(CONTINUE_ID);
    if(!btn) return;
    btn.setAttribute('disabled','disabled');
    btn.setAttribute('aria-disabled','true');
    btn.classList.add('is-disabled');
    btn.dataset.locked = 'true';
  }
  function unlockContinue(){
    const btn = document.getElementById(CONTINUE_ID);
    if(!btn) return;
    btn.removeAttribute('disabled');
    btn.setAttribute('aria-disabled','false');
    btn.classList.remove('is-disabled');
    btn.dataset.locked = 'false';
  }

  // Enable ONLY when user clicks OK/Entendido on delivery cash modal
  document.addEventListener('click', function(e){
    const t = e.target;
    if(!t) return;
    if(t.id === OK_ID || (t.closest && t.closest('#'+OK_ID))) {
      unlockContinue();
    }
  }, true);

  // Lock whenever the delivery cash modal becomes visible
  function isVisible(el){
    if(!el) return false;
    if(el.classList && el.classList.contains('show')) return true;
    const aria = el.getAttribute && el.getAttribute('aria-hidden');
    if(aria === 'false') return true;
    const st = window.getComputedStyle ? getComputedStyle(el) : null;
    if(st && st.display !== 'none' && st.visibility !== 'hidden' && st.opacity !== '0') {
      if(el.offsetWidth > 0 || el.offsetHeight > 0) return true;
    }
    return false;
  }

  function attachObserver(){
    const modal = document.getElementById(MODAL_ID);
    if(!modal) return false;
    if(isVisible(modal)) lockContinue();

    const obs = new MutationObserver(() => {
      if(isVisible(modal)) lockContinue();
    });
    obs.observe(modal, { attributes:true, attributeFilter:['class','style','aria-hidden'] });
    return true;
  }

  // Retry because modal may be injected lazily
  let tries = 0;
  const maxTries = 60; // ~6s
  const timer = setInterval(() => {
    tries++;
    if(attachObserver() || tries >= maxTries){
      clearInterval(timer);
    }
  }, 100);
})();

})();