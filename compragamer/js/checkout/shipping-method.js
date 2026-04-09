/**
 * shipping-method.js
 * Maneja la selección de método de envío (pickup/delivery/national).
 */
(function(){
  'use strict';

  function init(){
    if (window.guardCheckoutStep && !window.guardCheckoutStep('shipping', '/carrito/')) return;
    const cards = document.querySelectorAll('.checkout-method-card[data-shipping]');
    if (!cards || !cards.length) return;

    cards.forEach((btn) => {
      btn.addEventListener('click', () => {
        const method = btn.getAttribute('data-shipping') || '';
        if (method === 'pickup'){
          try { sessionStorage.removeItem('pcbuilder_shipping_method'); } catch (_) {}
          try { localStorage.removeItem('pcbuilder_shipping_method'); } catch (_) {}
          document.dispatchEvent(new CustomEvent('pcbuilder:pickup:open'));
          return;
        }
        try { sessionStorage.setItem('pcbuilder_shipping_method', method); } catch (_) {}
        try { localStorage.setItem('pcbuilder_shipping_method', method); } catch (_) {}
        if (window.CheckoutFlow && typeof window.CheckoutFlow.setStep === 'function'){
          window.CheckoutFlow.setStep('payment');
        } else {
          try { sessionStorage.setItem('pcbuilder_checkout_step', 'payment'); } catch (_) {}
          try { localStorage.setItem('pcbuilder_checkout_step', 'payment'); } catch (_) {}
        }
        window.location.href = '/checkout/verificacion-orden/';
      });
    });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
