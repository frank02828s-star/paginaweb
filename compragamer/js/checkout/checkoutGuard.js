// checkoutGuard.js - Protege páginas de checkout (evita acceso directo sin carrito o sin paso previo)
(function () {
  const STEP_KEY = 'pcbuilder_checkout_step';

  function getCartItemsCount() {
    try {
      if (typeof getCartStats === 'function') {
        const stats = getCartStats();
        return (stats && stats.totalItems) ? Number(stats.totalItems) : 0;
      }
    } catch (_) {}

    try {
      const raw = localStorage.getItem((window.STORAGE_KEYS && STORAGE_KEYS.CART) ? STORAGE_KEYS.CART : 'compragamer_cart');
      const cart = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(cart)) return 0;
      return cart.reduce((sum, item) => sum + (Number(item.quantity || 1)), 0);
    } catch (_) {
      return 0;
    }
  }

  function isOrderCompleted() {
    try {
      return (sessionStorage.getItem('pcbuilder_order_completed') === '1') ||
             (localStorage.getItem('pcbuilder_order_completed') === '1');
    } catch (_) {
      return false;
    }
  }

  function getStep() {
    return sessionStorage.getItem(STEP_KEY) || localStorage.getItem(STEP_KEY) || '';
  }

  function setStep(step) {
    try { sessionStorage.setItem(STEP_KEY, step); } catch (_) {}
    try { localStorage.setItem(STEP_KEY, step); } catch (_) {}
  }

  function clearStep() {
    try { sessionStorage.removeItem(STEP_KEY); } catch (_) {}
    try { localStorage.removeItem(STEP_KEY); } catch (_) {}
  }

  // expone helpers (por si luego los necesitas)
  window.CheckoutFlow = {
    STEP_KEY,
    getCartItemsCount,
    getStep,
    setStep,
    clearStep
  };

  // Guard principal
  window.guardCheckoutStep = function (expectedStep, redirectTo) {
    const items = getCartItemsCount();
    const normalize = (v) => String(v || '').trim().toLowerCase();
    const validSteps = ['shipping', 'payment', 'completion'];

    if (isOrderCompleted() && (!items || items <= 0)) {
      clearStep();
      window.location.replace('../carrito.html');
      return false;
    }

    if (!items || items <= 0) {
      clearStep();
      window.location.replace(redirectTo || '../carrito.html');
      return false;
    }

    const step = normalize(getStep());
    const expected = normalize(expectedStep);
    if (step && !validSteps.includes(step)) {
      clearStep();
      window.location.replace(redirectTo || '../carrito.html');
      return false;
    }
    if (expected && step !== expected) {
      window.location.replace(redirectTo || '../carrito.html');
      return false;
    }

    return true;
  };
})();
