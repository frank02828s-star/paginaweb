<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMPRA GAMER - Orden confirmada</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/compragamer/css/styles.css">
    <link rel="stylesheet" href="/compragamer/css/checkout.css">
    <link rel="icon" href="https://ext.same-assets.com/4025281442/4260243455.svg" type="image/svg+xml">
    <style>
        /* Inline spacing override for order-completion */
        .order-completion-page .cart-panel-body {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
            padding: 18px 18px 22px 18px !important;
        }
        .order-completion-page .cart-panel {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        .order-completion-page .cart-panel-header {
            padding-left: 18px !important;
            padding-right: 18px !important;
        }
        .order-completion-page .checkout-alert { margin: 0 !important; }
        .order-completion-page .oc-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
        }
        .order-completion-page .oc-card { padding: 22px !important; margin: 0 !important; }
        .order-completion-page .oc-kv { padding: 12px 0 !important; }
        .order-completion-page .oc-actions { display: flex !important; gap: 12px !important; flex-wrap: wrap !important; }
        @media (max-width: 900px) {
            .order-completion-page .oc-grid { grid-template-columns: 1fr !important; }
        }
    </style>
</head>
<body>
<?php include __DIR__ . '/../partials/header.php'; ?>
    <main>
        <div class="container order-completion-page">
            <div class="page-title">
                <h1>Orden confirmada</h1>
            </div>

            <section class="cart-panel" aria-label="Resumen de orden confirmada">
                <div class="cart-panel-header">
                    <h2 class="cart-panel-title">
                        <span id="oc-ticket-title">Ticket</span>
                    </h2>
                </div>

                <div class="cart-panel-body">
                    <div class="checkout-alert checkout-alert-info">
                        Vamos a abrir WhatsApp con el resumen de tu pedido para que puedas enviarlo y coordinar la entrega.
                    </div>

                    <div class="oc-grid">
                        <div class="oc-card">
                            <h3 class="oc-card-title">Datos del cliente</h3>
                            <div class="oc-kv"><span>Cliente:</span> <strong id="oc-client">—</strong></div>
                            <div class="oc-kv"><span>Documento:</span> <strong id="oc-id">—</strong></div>
                            <div class="oc-kv"><span>Teléfono:</span> <strong id="oc-phone">—</strong></div>
                            <div class="oc-kv"><span>Correo:</span> <strong id="oc-email">—</strong></div>
                            <div class="oc-kv"><span>Envío:</span> <strong id="oc-shipping">—</strong></div>
                        </div>
                        <div class="oc-card">
                            <h3 class="oc-card-title">Pago</h3>
                            <div class="oc-kv"><span>Método:</span> <strong id="oc-payment">—</strong></div>
                            <div class="oc-kv" id="oc-amounts-row" style="display:none;"><span>Monto:</span> <strong id="oc-amounts">—</strong></div>
                            <div class="oc-kv" id="oc-rate-row" style="display:none;"><span>Tasa usada:</span> <strong id="oc-rate">—</strong></div>
                            <div class="oc-kv"><span>Comprobante:</span> <strong id="oc-proof-status">—</strong></div>
                            <div class="oc-kv"><span>Enlace:</span> <a id="oc-proof-link" href="#" target="_blank" rel="noopener">—</a></div>
                        </div>
                    </div>

                    <div class="oc-card" style="margin-top:0;">
                        <h3 class="oc-card-title">Productos</h3>
                        <div id="oc-products"></div>
                        <div class="oc-totals">
                            <div class="oc-total-row" id="oc-products-rate-row" style="display:none;">
                                <span>Tasa usada:</span>
                                <strong id="oc-products-rate">—</strong>
                            </div>
                            <div class="oc-total-row">
                                <span>Total productos:</span>
                                <strong id="oc-total-products">$0.00</strong>
                                <span class="oc-muted" id="oc-total-products-bs" style="display:none;">—</span>
                            </div>
                            <div class="oc-total-row">
                                <span>Total a pagar:</span>
                                <strong id="oc-total-pay">$0.00</strong>
                                <span class="oc-muted" id="oc-total-pay-bs" style="display:none;">—</span>
                            </div>
                        </div>
                    </div>

                    <div class="oc-actions">
                        <button id="oc-whatsapp-btn" class="btn btn-success">
                            <i class="fab fa-whatsapp"></i> Enviar por WhatsApp
                        </button>
                        <a class="btn btn-secondary" href="/compragamer/">
                            <i class="fas fa-home"></i> Volver al inicio
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </main>
<?php include __DIR__ . '/../partials/footer.php'; ?>
    <!-- Shared checkout scripts -->
    <script src="/compragamer/js/checkout/storageKeys.js"></script>
    <script src="/compragamer/js/checkout/storage.js"></script>
    <script src="/compragamer/js/checkout/cart-shared.js"></script>
    <script src="/compragamer/js/checkout/checkoutGuard.js"></script>
    <script src="/compragamer/js/checkout/whatsapp-template.js"></script>
    <script src="/compragamer/js/checkout/order-completion.js"></script>

    <!-- WhatsApp Redirect Overlay -->
    <div id="wa-redirect-overlay" class="wa-redirect-overlay" style="display:none;">
        <div class="wa-redirect-card">
            <div class="wa-spinner" aria-hidden="true">
                <span id="wa-spinner-num" class="wa-spinner-num" style="visibility:hidden;"></span>
            </div>
            <div class="wa-redirect-text">
                <div class="wa-redirect-title">Redireccionando a WhatsApp…</div>
                <div class="wa-redirect-subtitle">Ya estás en el último paso. Ahora verificaremos tu orden con nuestros agentes disponibles.</div>
            </div>
        </div>
    </div>

    <script src="/compragamer/js/checkout/checkout-modal-effects.js"></script>

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
          if (q) window.location.href = '/compragamer/productos/?search=' + encodeURIComponent(q);
        };
        searchBtn.addEventListener('click', go);
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') go(); });
      }
    });
    </script>

</body>
</html>
