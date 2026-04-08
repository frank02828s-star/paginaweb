// cart.js - Página de carrito (diseño tipo lista + resumen)

(function () {
  const money = (value) => {
    try {
      return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(Number(value || 0));
    } catch (_) {
      return `$${(Number(value || 0)).toFixed(2)}`;
    }
  };

  // Demo simple: cupón aplica 10% si el código es "PC10OK"
  
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

function computeDiscount(total, code) {
    if (!code) return 0;
    const normalized = String(code).trim().toUpperCase();
    if (normalized === 'PC10OK') return total * 0.10;
    return 0;
  }

  // Impuestos demo: 5% sobre (total - descuento)
  function computeTax(amount) {
    // Impuestos por defecto: 0
    return 0;
  }

  function getPrimaryImage(item) {
    // Si hay imagen en el item, úsala; si no, usa un placeholder simple.
    return item.image || item.img || '/assets/images/placeholder-product.png';
  }

  function renderCartPage() {
    const stats = (typeof getCartStats === 'function') ? getCartStats() : { totalItems: 0, totalPrice: 0, items: [] };
    const emptyEl = document.getElementById('cart-empty');
    const itemsWrap = document.getElementById('cart-items');

    if (!emptyEl || !itemsWrap) return;

    const items = Array.isArray(stats.items) ? stats.items : [];

    if (items.length === 0) {
      emptyEl.classList.remove('is-hidden');
      itemsWrap.innerHTML = '';
      updateTotals(0, 0, 0, 0);
      setProceedEnabled(false);
      if (typeof updateCartCount === 'function') updateCartCount();
      return;
    }

    emptyEl.classList.add('is-hidden');

    itemsWrap.innerHTML = items.map((item) => {
      const name = item.name || 'Producto';
      const cat = item.category || '—';
            const inv = lookupProduct(cat, item.id);
      const desc = (item.description || item.desc || item.details || item.specs || (inv && inv.description) || (inv && inv.specs) || '');
      const price = Number(item.price || 0);
      const qty = Math.max(1, Number(item.quantity || 1));
      const subtotal = price * qty;

      return `
        <article class="cart-item" data-id="${item.id}" data-category="${cat}">
          <div class="cart-item-media">
            <img class="cart-item-img" src="${getPrimaryImage(item)}" alt="${name}">
          </div>

          <div class="cart-item-info">
            <div class="cart-item-name">${name}</div>
            <div class="pcpp-selection-sub cart-item-desc">${desc}</div>
</div>

          <div class="cart-item-qty">
            <input
              class="cart-qty-input cart-input"
              type="number"
              min="1"
              step="1"
              value="${qty}"
              data-id="${item.id}"
              data-category="${cat}"
              aria-label="Cantidad de ${name}"
            />
          </div>

          <div class="cart-item-price">
            <div class="cart-item-price-main">${money(subtotal)}</div>
            <div class="cart-item-price-sub">${money(price)} / por unidad</div>
          </div>

          <div class="cart-item-actions">
            <button class="cart-remove-btn" type="button" data-remove="1" data-id="${item.id}" data-category="${cat}">
              Quitar
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Totales
    const total = Number(stats.totalPrice || 0);
    const code = (localStorage.getItem('pcbuilder_coupon') || '').trim();
    const discount = computeDiscount(total, code);
    const taxable = Math.max(0, total - discount);
    const tax = computeTax(taxable);
    const grand = taxable + tax;

    updateTotals(total, discount, tax, grand);
    setProceedEnabled(true);

    if (typeof updateCartCount === 'function') updateCartCount();
  }

  
  function setProceedEnabled(enabled) {
    const btn = document.getElementById('cart-checkout-btn');
    if (!btn) return;

    const isLink = btn.tagName && btn.tagName.toLowerCase() === 'a';
    btn.classList.toggle('is-disabled', !enabled);
    btn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
    btn.tabIndex = enabled ? 0 : -1;

    if (isLink) {
      // mantenemos href pero prevenimos click cuando está deshabilitado
      btn.dataset.disabled = enabled ? '0' : '1';
    }
  }

function updateTotals(total, discount, tax, grand) {
    const elTotalBefore = document.getElementById('cart-total-before');
    const elDiscount = document.getElementById('cart-discount');
    const elTax = document.getElementById('cart-tax');
    const elGrand = document.getElementById('cart-total');

    if (elTotalBefore) elTotalBefore.textContent = money(total);
    if (elDiscount) elDiscount.textContent = discount ? `-${money(discount)}` : money(0);
    if (elTax) elTax.textContent = money(tax);
    if (elGrand) elGrand.textContent = money(grand);
  }

  function wireCartPageEvents() {
    const itemsWrap = document.getElementById('cart-items');
    if (itemsWrap) {
      itemsWrap.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('[data-remove="1"]');
        if (removeBtn) {
          const id = removeBtn.getAttribute('data-id');
          const category = removeBtn.getAttribute('data-category');
          if (typeof removeFromCart === 'function') removeFromCart(id, category);
          renderCartPage();
          return;
        }
      });

      // Actualiza cantidad (soporta flechas, teclado y pegado)
      const onQtyChange = (e) => {
        const input = e.target.closest('.cart-qty-input');
        if (!input) return;

        const id = input.getAttribute('data-id');
        const category = input.getAttribute('data-category');
        const qty = Math.max(1, parseInt(input.value, 10) || 1);
        input.value = qty;

        if (typeof updateCartQuantity === 'function') {
          updateCartQuantity(id, category, qty);
        }

        // Re-render para recalcular totales
        renderCartPage();
      };

      itemsWrap.addEventListener('change', onQtyChange);
      itemsWrap.addEventListener('input', onQtyChange);
}

    const checkoutBtn = document.getElementById('cart-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', (e) => {
        // si está deshabilitado, bloquear
        if (checkoutBtn.dataset && checkoutBtn.dataset.disabled === '1') {
          e.preventDefault();
          return;
        }
        // setear paso y navegar
        if (window.CheckoutFlow && typeof CheckoutFlow.setStep === 'function') {
          CheckoutFlow.setStep('shipping');
        } else {
          try { sessionStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
          try { localStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
        }
        // si es <a>, dejar navegación normal; si no, navegar manual
        if (!(checkoutBtn.tagName && checkoutBtn.tagName.toLowerCase() === 'a')) {
          window.location.href = '/checkout/shipping-method.html';
        }
      });
    }

    const couponForm = document.getElementById('coupon-form');

    const couponInput = document.getElementById('coupon-code');
    if (couponInput) {
      // Enforce: only letters+numbers, uppercase, exactly 6 chars
      const normalizeCoupon = () => {
        const raw = String(couponInput.value || '');
        const start = couponInput.selectionStart;
        const end = couponInput.selectionEnd;

        const cleaned = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);

        if (cleaned !== raw) {
          couponInput.value = cleaned;
          try {
            const pos1 = Math.min(cleaned.length, start ?? cleaned.length);
            const pos2 = Math.min(cleaned.length, end ?? cleaned.length);
            couponInput.setSelectionRange(pos1, pos2);
          } catch (_) { /* ignore */ }
        }
      };

      couponInput.setAttribute('minlength', '6');
      couponInput.setAttribute('maxlength', '6');
      couponInput.setAttribute('pattern', '^[A-Za-z0-9]{6}$');
      couponInput.addEventListener('input', normalizeCoupon);
      couponInput.addEventListener('blur', normalizeCoupon);
      normalizeCoupon();
    }

    if (couponForm) {
      couponForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let code = (document.getElementById('coupon-code')?.value || '');
        code = String(code).toUpperCase().replace(/[^A-Z0-9]/g, '');
        code = code.slice(0, 6);
        const couponEl = document.getElementById('coupon-code');
        if (couponEl) couponEl.value = code;

        const msg = document.getElementById('coupon-message');

        if (code && code.length !== 6) {
          if (msg) msg.textContent = 'El cupón debe tener exactamente 6 caracteres (solo letras y números).';
          return;
        }

        if (code) {
          localStorage.setItem('pcbuilder_coupon', code);
          if (msg) msg.textContent = (code.toUpperCase() === 'PC10OK')
            ? 'Cupón aplicado: 10% de descuento.'
            : `Cupón "${code}" guardado (demo).`;
        } else {
          localStorage.removeItem('pcbuilder_coupon');
          if (msg) msg.textContent = 'Ingresa un código de cupón.';
        }

        renderCartPage();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    wireCartPageEvents();
    renderCartPage();

    window.addEventListener('storage', (e) => {
      if (e.key === (window.STORAGE_KEYS ? STORAGE_KEYS.CART : 'pcbuilder_cart')) {
        renderCartPage();
      }
    });
  });
})();
