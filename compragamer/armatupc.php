<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Armá tu PC - COMPRA GAMER</title>
    <meta name="description" content="Configurá tu nueva PC sin errores de compatibilidad, seleccionando todos los componentes que deseás.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/armatupc.css">
    <link rel="icon" href="https://ext.same-assets.com/4025281442/4260243455.svg" type="image/svg+xml">
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>
    <!-- Page Header -->
    <section class="page-header">
        <div class="page-header-container">
            <a href="/" class="back-link">
                <span class="material-icons">chevron_left</span>
            </a>
            <h1>Elegí tu Procesador</h1>
        </div>
    </section>

    <!-- Builder Info -->
    <section class="builder-info">
        <div class="info-container">
            <p>Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.</p>
        </div>
    </section>

    <!-- Main Content -->
    <main class="builder-page">
        <!-- Component Navigator -->
        <aside class="builder-sidebar">
            <div class="component-nav">
                <button class="component-btn active" data-component="procesadores">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/cpu.png" alt="CPU">
                </button>
                <button class="component-btn" data-component="mothers">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/mother.png" alt="Mother">
                </button>
                <button class="component-btn" data-component="coolers">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/cooler.png" alt="Cooler">
                </button>
                <button class="component-btn" data-component="memorias">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/ram.png" alt="RAM">
                </button>
                <button class="component-btn" data-component="placas">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/gpu.png" alt="GPU">
                </button>
                <button class="component-btn" data-component="almacenamiento">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/hdd.png" alt="Storage">
                </button>
                <button class="component-btn" data-component="fuentes">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/power.png" alt="PSU">
                </button>
                <button class="component-btn" data-component="gabinetes">
                    <img src="https://imagenes.compragamer.com/assets/iconos/atpc/case.png" alt="Case">
                </button>
            </div>

            <div class="build-summary">
                <div class="summary-watts">
                    (<span id="totalWatts">0</span> watts)
                </div>
                <div class="summary-total">
                    Total: <strong id="buildTotal">$0</strong>
                </div>
                <div class="summary-actions">
                    <select id="navPrev">
                        <option value="">VOLVER ATRÁS</option>
                    </select>
                    <select id="navNext">
                        <option value="">SALTEAR PASO</option>
                    </select>
                </div>
            </div>
        </aside>

        <!-- Components Grid -->
        <section class="components-content">
            <!-- Brand Filter -->
            <div class="brand-filter">
                <button class="brand-btn active" data-brand="all">Todos</button>
                <button class="brand-btn" data-brand="AMD">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='10' y='22' font-family='Arial' font-size='20' font-weight='bold'%3EAMD%3C/text%3E%3C/svg%3E" alt="AMD">
                </button>
                <button class="brand-btn" data-brand="Intel">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='10' y='22' font-family='Arial' font-size='16' fill='%230071c5'%3Eintel%3C/text%3E%3C/svg%3E" alt="Intel">
                </button>
            </div>

            <!-- Components List -->
            <div class="components-grid" id="componentsGrid">
                <!-- Components loaded dynamically -->
            </div>
        </section>
    </main>
<?php include __DIR__ . '/partials/footer.php'; ?>
    <!-- Cart Sidebar -->
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h3>Tu carrito</h3>
            <button class="close-cart" id="closeCart">
                <span class="material-icons">close</span>
            </button>
        </div>
        <div class="cart-items" id="cartItems">
            <p class="empty-cart">Tu carrito está vacío</p>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total:</span>
                <span id="cartTotal">$0</span>
            </div>
            <button class="btn-primary checkout-btn">Finalizar compra</button>
        </div>
    </div>
    <div class="cart-overlay" id="cartOverlay"></div>

<?php include __DIR__ . '/partials/login-modal.php'; ?>

    <script src="/js/data.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/armatupc.js"></script>
</body>
</html>
