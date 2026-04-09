<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMPRA GAMER - Confirmar tu pedido</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/checkout.css">
    <link rel="icon" href="https://ext.same-assets.com/4025281442/4260243455.svg" type="image/svg+xml">
</head>
<body>
<?php include __DIR__ . '/../partials/header.php'; ?>
    <main>
        <div class="container checkout-page">
            <div class="page-title">
                <h1>Confirmar tu pedido</h1>
            </div>

            <div class="checkout-payment-layout">
                <!-- LEFT: payment methods + form -->
                <section aria-label="Selecciona un método de pago" class="cart-panel checkout-payment-panel">
                    <div class="cart-panel-header">
                        <h2 class="cart-panel-title payment-title-row">
                            <span class="payment-title-text" id="payment-title">Selecciona tu método de pago</span>
                            <span class="payment-title-divider"></span>
                            <span class="payment-shipping-alert">
                                <span class="method-badge" id="payment-shipping-label">—</span>
                                <span class="method-badge is-hidden" id="payment-method-selected-label"></span>
                                <button class="btn btn-secondary is-hidden payment-change-btn" id="change-payment-method-btn" type="button">Cambiar método de pago</button>
                            </span>
                        </h2>
                    </div>
                    <div class="checkout-payment-body">
                        <div class="checkout-note is-hidden" id="payment-note"></div>
                        <div class="payment-list" id="payment-list" role="list">
                            <!-- filled by JS -->
                        </div>
                        <div class="payment-details is-hidden" id="payment-details"></div>
                        <div class="payment-details is-hidden" id="delivery-note-form">
                            <div class="checkout-alert checkout-alert-info">
                                Rellena el formulario para completar tu pedido. Los datos deben ser reales dado que enviaremos la nota de entrega a la información proporcionada.
                            </div>
                            <div class="payment-details-inner" style="align-items: stretch; text-align: left;">
                                <div class="dn-form">
                                    <div class="dn-row">
                                        <div class="dn-field">
                                            <label for="dn-firstname">Nombre</label>
                                            <input
                                                autocomplete="given-name"
                                                class="cart-input"
                                                id="dn-firstname"
                                                inputmode="text"
                                                maxlength="20"
                                                pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}"
                                                placeholder="Tu nombre"
                                                required
                                                title="Solo letras (máx. 20 caracteres)"
                                                type="text"
                                            />
                                        </div>
                                        <div class="dn-field">
                                            <label for="dn-lastname">Apellido</label>
                                            <input
                                                autocomplete="family-name"
                                                class="cart-input"
                                                id="dn-lastname"
                                                inputmode="text"
                                                maxlength="20"
                                                pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}"
                                                placeholder="Tu apellido"
                                                required
                                                title="Solo letras (máx. 20 caracteres)"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div class="dn-row">
                                        <div class="dn-field dn-field-select">
                                            <label for="dn-idtype">Tipo</label>
                                            <select class="cart-input" id="dn-idtype" required>
                                                <option value="V">V</option>
                                                <option value="E">E</option>
                                                <option value="J">J</option>
                                                <option value="G">G</option>
                                                <option value="P">P</option>
                                            </select>
                                        </div>
                                        <div class="dn-field">
                                            <label for="dn-idnumber">Documento</label>
                                            <input
                                                autocomplete="off"
                                                class="cart-input"
                                                id="dn-idnumber"
                                                inputmode="numeric"
                                                maxlength="8"
                                                minlength="8"
                                                pattern="\d{8}"
                                                placeholder="Nro. de documento"
                                                required
                                                title="Solo números (8 dígitos)"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div class="dn-row">
                                        <div class="dn-field dn-field-select">
                                            <label for="dn-areacode">Código</label>
                                            <select class="cart-input" id="dn-areacode" required>
                                                <option value="0412">0412</option>
                                                <option value="0414">0414</option>
                                                <option value="0416">0416</option>
                                                <option value="0424">0424</option>
                                                <option value="0426">0426</option>
                                            </select>
                                        </div>
                                        <div class="dn-field">
                                            <label for="dn-phonenum">Número de teléfono</label>
                                            <input
                                                autocomplete="tel-national"
                                                class="cart-input"
                                                id="dn-phonenum"
                                                inputmode="numeric"
                                                maxlength="7"
                                                pattern="\d{7}"
                                                placeholder="Nro. de teléfono"
                                                required
                                                title="Solo números (7 dígitos)"
                                                type="tel"
                                            />
                                        </div>
                                    </div>
                                    <div class="dn-row dn-row-single">
                                        <div class="dn-field">
                                            <label for="dn-email">Correo electrónico</label>
                                            <input
                                                autocomplete="email"
                                                class="cart-input"
                                                id="dn-email"
                                                inputmode="email"
                                                maxlength="50"
                                                placeholder="tucorreo@ejemplo.com"
                                                required
                                                title="Ingresa un correo válido (máx. 50 caracteres)"
                                                type="email"
                                            />
                                        </div>
                                        <!-- Botón elegir ubicación (solo DELIVERY) -->
                                        <div id="deliveryLocationWrapper" style="display:none;">
                                            <button class="btn btn-secondary cart-purchase-btn" id="btnDeliveryLocation" type="button">
                                                <i class="fas fa-map-marker-alt"></i> Elegir la ubicación del delivery
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="checkout-payment-actions">
                            <button aria-disabled="true" class="btn btn-success is-disabled" id="payment-continue-btn" type="button">Proceder y continuar</button>
                            <button class="btn btn-secondary checkout-back-btn" id="back-to-shipping-btn" type="button">
                                <i class="fas fa-arrow-left"></i> Volver
                            </button>
                        </div>
                    </div>
                </section>

                <!-- RIGHT: order summary -->
                <aside aria-label="Resumen del pedido" class="cart-panel checkout-summary-panel">
                    <div class="cart-panel-header">
                        <h2 class="cart-panel-title">Resumen de tu pedido</h2>
                    </div>
                    <div class="checkout-summary-body">
                        <div class="summary-items-list" id="summary-items-list">
                            <!-- items filled by JS -->
                        </div>
                        <div class="cart-divider"></div>
                        <div class="checkout-summary-row">
                            <span>Subtotal</span>
                            <strong id="summary-subtotal">$0</strong>
                        </div>
                        <div class="checkout-summary-row">
                            <span>Descuento</span>
                            <strong id="summary-discount">$0</strong>
                        </div>
                        <div class="checkout-summary-row">
                            <span>Cupón</span>
                            <strong id="summary-coupon">—</strong>
                        </div>
                        <div class="checkout-summary-row">
                            <span>Impuestos</span>
                            <strong id="summary-tax">$0</strong>
                        </div>
                        <div class="cart-divider"></div>
                        <div class="checkout-summary-row checkout-summary-total">
                            <span>Total a pagar</span>
                            <strong id="summary-total">$0</strong>
                        </div>
                        <div class="checkout-summary-hint">
                            <i class="fas fa-shield-halved"></i>
                            <span>Tu pago será verificado antes de completar el pedido.</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>
<?php include __DIR__ . '/../partials/footer.php'; ?>
<?php include __DIR__ . '/../partials/login-modal.php'; ?>
    <!-- Shared checkout scripts -->
    <script src="/js/checkout/storageKeys.js"></script>
    <script src="/js/checkout/storage.js"></script>
    <script src="/js/checkout/cart-shared.js"></script>
    <script src="/js/checkout/checkoutGuard.js"></script>
    <script src="/js/checkout/carrier.js"></script>
    <script src="/js/checkout/order-verification-modals-lazy.js"></script>
    <script src="/js/checkout/payment-method.js"></script>
    <script src="/js/checkout/delivery-location.js"></script>

    <!-- Show/hide delivery location button -->
    <script>
    (function(){
      function getShip(){
        return (localStorage.getItem('pcbuilder_shipping_method') ||
                sessionStorage.getItem('pcbuilder_shipping_method') || '').toString().trim().toLowerCase();
      }
      function toggle(){
        var wrap = document.getElementById('deliveryLocationWrapper');
        if (!wrap) return;
        wrap.style.display = (getShip() === 'delivery') ? 'block' : 'none';
      }
      document.addEventListener('DOMContentLoaded', toggle);
      setTimeout(toggle, 300);
      setTimeout(toggle, 900);
    })();
    </script>

    <script src="/js/checkout/checkout-modal-effects.js"></script>

    <!-- Cart count + search -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
      const cartCountEl = document.getElementById('cartCount');
      if (cartCountEl && typeof getCartStats === 'function') {
        const s = getCartStats();
        cartCountEl.textContent = s.totalItems || 0;
      }
      const searchInput = document.getElementById('searchInput');
      const searchBtn = document.getElementById('searchBtn');
      if (searchInput && searchBtn) {
        const go = () => {
          const q = searchInput.value.trim();
          if (q) window.location.href = '/productos/?search=' + encodeURIComponent(q);
        };
        searchBtn.addEventListener('click', go);
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') go(); });
      }
    });
    </script>

</body>
</html>
