<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMPRA GAMER - Método de envío</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/compragamer/css/styles.css">
    <link rel="stylesheet" href="/compragamer/css/checkout.css">
    <link rel="icon" href="https://ext.same-assets.com/4025281442/4260243455.svg" type="image/svg+xml">
</head>
<body>
<?php include __DIR__ . '/../partials/header.php'; ?>
    <main>
        <div class="container checkout-page">
            <div class="page-title">
                <h1>Método de envío</h1>
            </div>
            <div class="checkout-top-actions">
                <a class="btn btn-secondary checkout-back-btn" href="/compragamer/carrito/">
                    <i class="fas fa-arrow-left"></i> Volver al carrito
                </a>
            </div>

            <section aria-label="Selecciona un método de envío" class="checkout-methods">
                <button class="checkout-method-card" data-shipping="pickup" type="button">
                    <div class="checkout-method-icon">
                        <i class="fas fa-store"></i>
                    </div>
                    <div class="checkout-method-text">
                        <div class="checkout-method-title">Pickup</div>
                        <div class="checkout-method-subtitle">(Retiro Personal)</div>
                    </div>
                </button>

                <button class="checkout-method-card" data-shipping="delivery" type="button">
                    <div class="checkout-method-icon">
                        <i class="fas fa-truck-fast"></i>
                    </div>
                    <div class="checkout-method-text">
                        <div class="checkout-method-title">Delivery</div>
                        <div class="checkout-method-subtitle">(solo en Caracas)</div>
                    </div>
                </button>

                <button class="checkout-method-card" data-shipping="national" type="button">
                    <div class="checkout-method-icon">
                        <i class="fas fa-truck"></i>
                    </div>
                    <div class="checkout-method-text">
                        <div class="checkout-method-title">Envío nacional</div>
                        <div class="checkout-method-subtitle">(Cobro en destino)</div>
                    </div>
                </button>
            </section>
        </div>
    </main>
<?php include __DIR__ . '/../partials/footer.php'; ?>
    <!-- Shared checkout scripts -->
    <script src="/compragamer/js/checkout/storageKeys.js"></script>
    <script src="/compragamer/js/checkout/storage.js"></script>
    <script src="/compragamer/js/checkout/cart-shared.js"></script>
    <script src="/compragamer/js/checkout/checkoutGuard.js"></script>

    <!-- Guard: bloquea acceso si no hay carrito -->
    <script>
      window.guardCheckoutStep && window.guardCheckoutStep('shipping', '/compragamer/carrito/');
    </script>

    <!-- Pickup modal + shipping method logic -->
    <script src="/compragamer/js/checkout/shipping-pickup.js"></script>
    <script src="/compragamer/js/checkout/shipping-method.js"></script>
    <script src="/compragamer/js/checkout/checkout-modal-effects.js"></script>

    <!-- Cart count in header -->
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
          if (q) window.location.href = '/compragamer/productos/?search=' + encodeURIComponent(q);
        };
        searchBtn.addEventListener('click', go);
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') go(); });
      }
    });
    </script>

</body>
</html>
