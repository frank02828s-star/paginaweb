/**
 * shipping-pickup.js
 * Modal de Pickup: se inyecta SOLO cuando el usuario selecciona el método "Pickup".
 * No existe en el DOM hasta el click.
 */
(function(){
  'use strict';

  const MODAL_ID = 'pickup-modal';
  const TEMPLATE = `<div aria-hidden="true" class="pcpp-modal pickup-modal" id="pickup-modal">
<div class="pcpp-modal-overlay" data-pickup-close="1"></div>
<div aria-labelledby="pickupModalTitle" aria-modal="true" class="pcpp-modal-panel" role="dialog">
<div class="pcpp-modal-header">
<div>
<div id="pickupModalTitle" style="font-weight:700;">Pickup (Retiro Personal)</div>
<div style="font-size:13px;color:#64748b;margin-top:2px;">Verifica la ubicación antes de continuar</div>
</div>
<button aria-label="Cerrar" class="pcpp-icon-btn" data-pickup-close="1" type="button">
<i class="fas fa-times"></i>
</button>
</div>
<div class="pickup-map-wrap">
<div class="alert alert-info">
<strong>Información:</strong> Seleccionaste el método de envío <strong>Pickup</strong>.
                    A continuación verás el punto de retiro en el mapa.
                </div>
<div aria-hidden="false" class="pickup-map" id="pickup-map">
<iframe id="pickupMapIframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.5064200486217!2d-66.98865372317782!3d10.460685764934615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5f2672927f49%3A0x5e4bd81d2d167d53!2sCPU%20Store%20VZLA!5e0!3m2!1sen!2sus!4v1768262236719!5m2!1sen!2sus"></iframe>
</div>
<div class="pcpp-modal-controls" style="display:flex;gap:10px;justify-content:flex-end;">
<button class="btn btn-secondary" id="pickup-cancel" type="button">Cancelar</button>
<button class="btn btn-primary" id="pickup-continue" type="button">Continuar</button>
</div>
</div>
</div>
</div>`;

  function ensureInjected(){
    if (document.getElementById(MODAL_ID)) return;
    document.body.insertAdjacentHTML('beforeend', TEMPLATE);
  }

  function getEls(){
    const modal = document.getElementById(MODAL_ID);
    return {
      modal,
      pickupMap: modal ? modal.querySelector('#pickup-map') : null,
      cancelBtn: modal ? modal.querySelector('#pickup-cancel') : null,
      continueBtn: modal ? modal.querySelector('#pickup-continue') : null,
      closeEls: modal ? Array.from(modal.querySelectorAll('[data-pickup-close="1"]')) : []
    };
  }

  function open(){
    ensureInjected();
    const { modal, pickupMap, continueBtn } = getEls();
    if (!modal) return;

    // Deshabilitar "Continuar" hasta que el iframe del mapa termine de cargar
    try { if (continueBtn) continueBtn.disabled = true; } catch(_) {}
    const iframe = modal.querySelector('#pickupMapIframe') || modal.querySelector('iframe');
    if (iframe){
      const enable = () => { try { if (continueBtn) continueBtn.disabled = false; } catch(_) {} };
      // Habilitar al terminar de cargar el mapa
      iframe.addEventListener('load', enable, { once: true });
      // Fallback (por si el navegador no dispara load con lazy): habilitar igual
      setTimeout(enable, 6000);
    }else{
      try { if (continueBtn) continueBtn.disabled = false; } catch(_) {}
    }

    if (pickupMap) pickupMap.setAttribute('aria-hidden', 'false');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'false');
    try { void modal.offsetWidth; } catch(_) {}
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        try { modal.classList.add('is-open'); } catch(_) {}
      });
    });
    document.addEventListener('keydown', onEsc);
    document.addEventListener('click', onDocClick, true);
  }

  function close(){
    const { modal, pickupMap } = getEls();
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (pickupMap) pickupMap.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', onEsc);
    document.removeEventListener('click', onDocClick, true);
    try { modal.remove(); } catch(e) {}
  }

  function onEsc(e){
    const { modal } = getEls();
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) close();
  }

  function onDocClick(e){
    const t = e.target;
    if (!t) return;
    const closeBtn = t.closest && t.closest('[data-pickup-close="1"]');
    if (closeBtn){
      const { modal } = getEls();
      if (modal && modal.classList.contains('is-open')) close();
      return;
    }
    const cancel = t.closest && t.closest('#pickup-cancel');
    if (cancel){ close(); return; }
    const cont = t.closest && t.closest('#pickup-continue');
    if (cont){
      const method = 'pickup';
      try { sessionStorage.setItem('pcbuilder_shipping_method', method); } catch (_) {}
      try { localStorage.setItem('pcbuilder_shipping_method', method); } catch (_) {}
      // Datos pickup para WhatsApp (solo lectura)
      try { localStorage.setItem('pcbuilder_pickup_location_name', 'Tienda Principal'); } catch(_) {}
      try { localStorage.setItem('pcbuilder_pickup_maps_url', 'maps.app.goo.gl/1hGXbnkgjvnj85HRA'); } catch(_) {}
      try { localStorage.setItem('pcbuilder_pickup_address_text', ''); } catch(_) {}
      try { localStorage.setItem('pcbuilder_pickup_schedule', `Nosotros *SOMOS TIENDA VIRTUAL* por lo cual trabajamos de *Lunes* a *Lunes* las 24/7 del año, pero si desea *PROBAR EL PRODUCTO*, *VER EL PRODUCTO*, *RETIRAR EL PRODUCTO* pueden venir a la oficina de MRW ubicada en Antimano de Lunes a Viernes de 8:30 AM a 3:30 PM *(Solo horario de oficina de MRW)*. En caso de ser *FIN DE SEMANA, DÍA DE FESTIVO, etc* pueden venir de igual manera a la misma ubicación dado que estamos al lado de la oficina.`); } catch(_) {}

      if (window.CheckoutFlow && typeof window.CheckoutFlow.setStep === 'function'){
        window.CheckoutFlow.setStep('payment');
      } else {
        try { sessionStorage.setItem('pcbuilder_checkout_step', 'payment'); } catch (_) {}
        try { localStorage.setItem('pcbuilder_checkout_step', 'payment'); } catch (_) {}
      }
      window.location.href = 'verificacion-orden.html';
    }
  }

  document.addEventListener('pcbuilder:pickup:open', () => { open(); });
  window.PCBPickupModal = { open, close, ensureInjected };
})();
