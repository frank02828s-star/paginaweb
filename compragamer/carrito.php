<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CPU STORE VZLA - Carrito de compras</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/checkout.css">
    <link rel="icon" href="https://github.com/user-attachments/assets/06c387e3-ef71-4004-aade-acbb0d8327c1" type="image/png">
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>
    <main>
        <div class="container cart-page">
            <div class="page-title">
                <h1>Tu carrito de compras</h1>
            </div>

            <div class="cart-layout">
                <!-- LEFT: items -->
                <section class="cart-panel cart-items-panel" aria-label="Carrito de compras">
                    <div class="cart-panel-header">
                        <h2 class="cart-panel-title">Tu carrito de compras</h2>
                    </div>

                    <div id="cart-empty" class="cart-empty is-hidden">
                        <p>Tu carrito está vacío. Agrega productos desde el catálogo para verlos aquí.</p>
                        <a class="btn btn-primary" href="/productos/">
                            <i class="fas fa-store"></i> Ir a productos
                        </a>
                    </div>

                    <div class="cart-items-header" aria-hidden="true">
                        <div class="cart-col-producto">Producto</div>
                        <div class="cart-col-cantidad">Cantidad</div>
                        <div class="cart-col-precio">Precio</div>
                        <div class="cart-col-accion">Acción</div>
                    </div>
                    <div id="cart-items" class="cart-items" aria-live="polite"></div>
                </section>

                <!-- RIGHT: summary -->
                <aside class="cart-panel cart-summary-panel" aria-label="Resumen del carrito">
                    <div class="cart-panel-block">
                        <div class="cart-block-title">¿Tienes cupón?</div>
                        <form id="coupon-form" class="cart-coupon-form">
                            <input
                                type="text"
                                id="coupon-code"
                                class="cart-input"
                                placeholder="Código de cupón"
                                minlength="6"
                                maxlength="6"
                                pattern="^[A-Za-z0-9]{6}$"
                                autocomplete="off"
                                autocapitalize="characters"
                                spellcheck="false"
                            >
                            <button type="submit" class="btn btn-secondary cart-apply-btn">Aplicar</button>
                        </form>
                        <div id="coupon-message" class="coupon-message" aria-live="polite"></div>
                    </div>

                    <div class="cart-panel-block cart-totals">
                        <div class="cart-total-row">
                            <span>Precio total:</span>
                            <strong id="cart-total-before">$0</strong>
                        </div>
                        <div class="cart-total-row cart-total-row-muted">
                            <span>Descuento:</span>
                            <strong id="cart-discount">$0</strong>
                        </div>
                        <div class="cart-total-row cart-total-row-muted">
                            <span>Impuestos:</span>
                            <strong id="cart-tax">$0</strong>
                        </div>
                        <div class="cart-divider"></div>
                        <div class="cart-total-row cart-total-row-grand">
                            <span>Total:</span>
                            <strong id="cart-total">$0</strong>
                        </div>

                        <a class="btn btn-success cart-purchase-btn" id="cart-checkout-btn" href="/checkout/metodo-envio/">
                            Proceder y continuar
                        </a>
                        <a class="btn btn-secondary cart-back-btn" href="/productos/">
                            Volver a la tienda
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    </main>
<?php include __DIR__ . '/partials/footer.php'; ?>
<?php include __DIR__ . '/partials/login-modal.php'; ?>
    <!-- Shared checkout scripts -->
    <script src="/js/checkout/storageKeys.js"></script>
    <script src="/js/checkout/storage.js"></script>
    <script src="/js/checkout/cart-shared.js"></script>
    <script src="/js/checkout/checkoutGuard.js"></script>

    <!-- Cart page script -->
    <script>
    (function () {
      const money = (value) => {
        try {
          return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(Number(value || 0));
        } catch (_) {
          return '$' + (Number(value || 0)).toFixed(2);
        }
      };

      function computeDiscount(total, code) {
        if (!code) return 0;
        const normalized = String(code).trim().toUpperCase();
        if (normalized === 'PC10OK') return total * 0.10;
        return 0;
      }

      function computeTax(amount) {
        return 0; // sin impuestos por defecto
      }

      function getPrimaryImage(item) {
        return item.image || item.img || 'https://via.placeholder.com/56x56?text=+';
      }

      function renderCartPage() {
        const stats = (typeof getCartStats === 'function') ? getCartStats() : { totalItems: 0, totalPrice: 0, items: [] };
        const emptyEl = document.getElementById('cart-empty');
        const itemsWrap = document.getElementById('cart-items');
        const cartItemsHeader = document.querySelector('.cart-items-header');

        if (!emptyEl || !itemsWrap) return;

        const items = Array.isArray(stats.items) ? stats.items : [];

        if (items.length === 0) {
          emptyEl.classList.remove('is-hidden');
          itemsWrap.innerHTML = '';
          if (cartItemsHeader) cartItemsHeader.style.display = 'none';
          updateTotals(0, 0, 0, 0);
          setProceedEnabled(false);
          return;
        }

        emptyEl.classList.add('is-hidden');
        if (cartItemsHeader) cartItemsHeader.style.display = '';

        itemsWrap.innerHTML = items.map((item) => {
          const name = item.name || item.title || 'Producto';
          const cat = item.category || '';
          const price = Number(item.price || 0);
          const qty = Math.max(1, Number(item.quantity || 1));
          const subtotal = price * qty;

          return `
            <article class="cart-item" data-id="${item.id}" data-category="${cat}">
              <div class="cart-item-media">
                <img class="cart-item-img" src="${getPrimaryImage(item)}" alt="${name}" onerror="this.src='https://via.placeholder.com/56x56?text=+'">
              </div>
              <div class="cart-item-info">
                <div class="cart-item-name">${name}</div>
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

        const total = Number(stats.totalPrice || 0);
        const code = (localStorage.getItem('compragamer_coupon') || '').trim();
        const discount = computeDiscount(total, code);
        const taxable = Math.max(0, total - discount);
        const tax = computeTax(taxable);
        const grand = taxable + tax;

        updateTotals(total, discount, tax, grand);
        setProceedEnabled(true);
      }

      function setProceedEnabled(enabled) {
        const btn = document.getElementById('cart-checkout-btn');
        if (!btn) return;
        btn.classList.toggle('is-disabled', !enabled);
        btn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
        btn.tabIndex = enabled ? 0 : -1;
        btn.dataset.disabled = enabled ? '0' : '1';
      }

      function updateTotals(total, discount, tax, grand) {
        const elTotalBefore = document.getElementById('cart-total-before');
        const elDiscount = document.getElementById('cart-discount');
        const elTax = document.getElementById('cart-tax');
        const elGrand = document.getElementById('cart-total');
        if (elTotalBefore) elTotalBefore.textContent = money(total);
        if (elDiscount) elDiscount.textContent = discount ? '-' + money(discount) : money(0);
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
            }
          });

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
            renderCartPage();
          };

          itemsWrap.addEventListener('change', onQtyChange);
          itemsWrap.addEventListener('input', onQtyChange);
        }

        const checkoutBtn = document.getElementById('cart-checkout-btn');
        if (checkoutBtn) {
          checkoutBtn.addEventListener('click', (e) => {
            if (checkoutBtn.dataset && checkoutBtn.dataset.disabled === '1') {
              e.preventDefault();
              return;
            }
            if (window.CheckoutFlow && typeof CheckoutFlow.setStep === 'function') {
              CheckoutFlow.setStep('shipping');
            } else {
              try { sessionStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
              try { localStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
            }
          });
        }

        const couponForm = document.getElementById('coupon-form');
        const couponInput = document.getElementById('coupon-code');
        if (couponInput) {
          const normalizeCoupon = () => {
            const raw = String(couponInput.value || '');
            const cleaned = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
            if (cleaned !== raw) couponInput.value = cleaned;
          };
          couponInput.addEventListener('input', normalizeCoupon);
          couponInput.addEventListener('blur', normalizeCoupon);
        }

        if (couponForm) {
          couponForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let code = (document.getElementById('coupon-code')?.value || '');
            code = String(code).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
            const couponEl = document.getElementById('coupon-code');
            if (couponEl) couponEl.value = code;
            const msg = document.getElementById('coupon-message');
            if (code && code.length !== 6) {
              if (msg) msg.textContent = 'El cupón debe tener exactamente 6 caracteres (solo letras y números).';
              return;
            }
            if (code) {
              localStorage.setItem('compragamer_coupon', code);
              if (msg) msg.textContent = (code === 'PC10OK')
                ? '¡Cupón aplicado! 10% de descuento.'
                : `Cupón "${code}" no es válido.`;
            } else {
              localStorage.removeItem('compragamer_coupon');
              if (msg) msg.textContent = 'Ingresa un código de cupón.';
            }
            renderCartPage();
          });
        }
      }

      document.addEventListener('DOMContentLoaded', () => {
        // Set checkout step for guard
        if (window.CheckoutFlow && typeof CheckoutFlow.setStep === 'function') {
          CheckoutFlow.setStep('shipping');
        } else {
          try { sessionStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
          try { localStorage.setItem('pcbuilder_checkout_step', 'shipping'); } catch (_) {}
        }
        wireCartPageEvents();
        renderCartPage();

        // Update cart count in header
        const cartCountEl = document.getElementById('cartCount');
        if (cartCountEl && typeof getCartStats === 'function') {
          const s = getCartStats();
          cartCountEl.textContent = s.totalItems || 0;
        }

        window.addEventListener('storage', (e) => {
          if (e.key === 'compragamer_cart') renderCartPage();
        });
      });
    })();
    </script>


</body>
</html>
