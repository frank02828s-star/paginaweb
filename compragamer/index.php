<?php
$page_title = 'COMPRA GAMER - La mayor variedad de productos gaming';
$page_description = 'La mayor variedad de productos, al mejor precio y la mejor financiación. Envíos a todo el país';
$extra_css = ['css/home-v2.css'];
$base_path = '';
include 'partials/header.php';
?>

    <!-- Hero Banner Section -->
    <section class="hero-section">
        <div class="hero-container">
            <!-- Main Slider -->
            <div class="main-slider">
                <div class="slider-wrapper" id="mainSlider">
                    <div class="slide active">
                        <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260406111502_acZ5SQHT.jpg" alt="Promoción">
                        <div class="slide-overlay">
                            <p>En <span class="highlight">Clones &amp; Periféricos</span> celebramos <strong>21 años</strong> llevando lo mejor en tecnología PC y gaming al siguiente nivel.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260406173831_fnCVhoKY.jpg" alt="Notebooks">
                    </div>
                    <div class="slide">
                        <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260331180627_MDGyNnty.jpg" alt="Sale Corsair">
                    </div>
                    <div class="slide">
                        <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260401111814_3wR0YRKX.jpg" alt="Arma tu PC">
                    </div>
                </div>
                <div class="slider-dots">
                    <span class="dot active" data-slide="0"></span>
                    <span class="dot" data-slide="1"></span>
                    <span class="dot" data-slide="2"></span>
                    <span class="dot" data-slide="3"></span>
                    <span class="dot" data-slide="4"></span>
                    <span class="dot" data-slide="5"></span>
                    <span class="dot" data-slide="6"></span>
                    <span class="dot" data-slide="7"></span>
                </div>
            </div>

            <!-- Side Banners -->
            <div class="side-banners">
                <a href="productos.php" class="side-banner">
                    <img src="https://imagenes.compragamer.com/espacioWeb/DC_20260406161521_svzvf1OB.jpg" alt="Lista de Precios">
                    <div class="banner-content">
                        <span class="banner-small">¿Tienes una idea de los componentes que quieres en tu nueva PC?</span>
                        <h3>LISTA DE PRECIOS</h3>
                        <p>AHORRA usando nuestros precios más bajos.</p>
                    </div>
                </a>
                <a href="productos.php?cate=pc" class="side-banner">
                    <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260401111814_3wR0YRKX.jpg" alt="Edition Gamer Limited">
                    <div class="banner-content">
                        <h3>EDITION<br>GAMER LIMITED</h3>
                    </div>
                </a>
                <a href="productos.php" class="side-banner addi-banner">
                    <div class="banner-content">
                        <span class="banner-small">Compra ahora,<br>y paga después con</span>
                        <h3 class="addi-logo">Addi</h3>
                        <p>Sin intereses,<br>sin costos adicionales*</p>
                        <span class="banner-small">Fácil y en minutos solo necesitas tu cédula y Whatsapp</span>
                        <button class="btn-comprar">Comprar</button>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section">
        <div class="section-container">
            <h2 class="section-title">CATEGORÍAS DESTACADAS</h2>
            <div class="categories-grid">
                <a href="productos.php?cate=pc" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/1125559298.webp" alt="PC"></div><span>PC</span></a>
                <a href="productos.php?cate=notebooks" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/1531796865.webp" alt="Portátiles"></div><span>PORTATILES</span></a>
                <a href="productos.php?cate=placas" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/3438154732.webp" alt="GPU"></div><span>GPU</span></a>
                <a href="productos.php?cate=monitores" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/2258092406.webp" alt="Monitores"></div><span>MONITORES</span></a>
                <a href="productos.php?cate=gabinetes" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/4013758804.webp" alt="Chasis"></div><span>CHASIS</span></a>
                <a href="productos.php?cate=sillas" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/4257531422.webp" alt="Sillas"></div><span>SILLAS</span></a>
                <a href="productos.php?cate=refrigeracion" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/2388835604.webp" alt="Cooling"></div><span>COOLING</span></a>
                <a href="productos.php?cate=procesadores" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/1535875518.webp" alt="CPU"></div><span>CPU</span></a>
                <a href="productos.php" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/1761895700.webp" alt="SimRacing"></div><span>SIMRACING</span></a>
                <a href="productos.php?cate=mothers" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/562476740.webp" alt="Board"></div><span>BOARD</span></a>
                <a href="productos.php?cate=ram" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/896279546.webp" alt="RAM"></div><span>RAM</span></a>
                <a href="productos.php?cate=fuentes" class="category-item"><div class="category-icon"><img src="https://ext.same-assets.com/2607188538/1524861650.webp" alt="Fuente"></div><span>FUENTE</span></a>
            </div>
        </div>
    </section>

    <!-- Product Offers -->
    <section class="products-section">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">OFERTAS EN PRODUCTOS</h2>
                <a href="productos.php" class="btn-ver-mas">Ver más</a>
            </div>
            <div class="products-grid" id="offersGrid"></div>
        </div>
    </section>

    <!-- Brands Section Header -->
    <section class="brands-header-section">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">MARCAS DESTACADAS</h2>
                <a href="productos.php" class="btn-ver-mas">Ver más</a>
            </div>
        </div>
    </section>

    <!-- Brands Slider -->
    <section class="brands-slider-section">
        <div class="brands-slider-container">
            <div class="brands-slider brands-slider-animated" id="brandsSlider">
                <img src="https://ext.same-assets.com/2607188538/3500028319.webp" alt="SteelSeries" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/174554472.webp" alt="MSI" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/2949603871.webp" alt="Corsair" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/2413374335.webp" alt="ASUS" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/1606536654.webp" alt="Logitech" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/2832023656.webp" alt="Lian Li" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/328983973.webp" alt="HYTE" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/3699102926.webp" alt="AOC" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/3500028319.webp" alt="SteelSeries" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/174554472.webp" alt="MSI" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/2949603871.webp" alt="Corsair" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/2413374335.webp" alt="ASUS" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/1606536654.webp" alt="Logitech" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/2832023656.webp" alt="Lian Li" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/328983973.webp" alt="HYTE" class="brand-logo">
                <img src="https://ext.same-assets.com/2607188538/3699102926.webp" alt="AOC" class="brand-logo">
            </div>
        </div>
    </section>

    <!-- PC Slider Banner -->
    <section class="pc-banner-section">
        <div class="section-container">
            <div class="pc-banner">
                <div class="pc-banner-content">
                    <h2>SLIDER DE PC ENSAMBLADAS</h2>
                    <p>Equipos listos para jugar, crear y streamear</p>
                    <a href="armatupc.php" class="btn-primary">Ver configuraciones</a>
                </div>
                <div class="pc-banner-image">
                    <img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260401111814_3wR0YRKX.jpg" alt="PC Gaming">
                </div>
            </div>
            <div class="banner-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    </section>

    <!-- Laptops Gamer -->
    <section class="products-section">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">LAPTOPS GAMER</h2>
                <a href="productos.php?cate=notebooks" class="btn-ver-mas">Ver más</a>
            </div>
            <div class="products-grid" id="laptopsGrid"></div>
        </div>
    </section>

    <!-- Setup Cards Section -->
    <section class="setup-section">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">ARMA TU SETUP</h2>
                <a href="productos.php" class="btn-ver-mas">Ver más</a>
            </div>
            <div class="setup-grid">
                <a href="armatupc.php" class="setup-card"><img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260401111814_3wR0YRKX.jpg" alt="Arma tu Setup"><div class="setup-overlay"><h3>ARMA TU SETUP</h3><p>Configura Rápido Desde $15M / Build Gamer</p></div></a>
                <a href="productos.php?cate=refrigeracion" class="setup-card"><img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260331180627_MDGyNnty.jpg" alt="Refrigeración Líquida"><div class="setup-overlay"><h3>REFRIGERACIÓN LIQUIDA</h3><p>Corsair | NZXT | De Gabinete Gamer</p></div></a>
                <a href="productos.php?cate=gabinetes" class="setup-card"><img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260406173831_fnCVhoKY.jpg" alt="RGB &amp; Modding"><div class="setup-overlay"><h3>RGB &amp; MODDING</h3><p>Controladores | RGB | Teclados | USB</p></div></a>
                <a href="productos.php" class="setup-card"><img src="https://imagenes.compragamer.com/bannerPrincipal/DC_20260406091339_TtGSabc9.jpg" alt="Streaming Pro"><div class="setup-overlay"><h3>STREAMING PRO</h3><p>Webcam | Capturadora | USB | Monitor</p></div></a>
            </div>
        </div>
    </section>

<?php include 'partials/footer.php'; ?>

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
            <button class="btn-primary checkout-btn" onclick="window.location.href='carrito.php'">Finalizar compra</button>
        </div>
    </div>
    <div class="cart-overlay" id="cartOverlay"></div>

    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <button class="modal-close" id="closeLogin">
                <span class="material-icons">close</span>
            </button>
            <h2>Iniciá sesión</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit" class="btn-primary">Ingresar</button>
            </form>
            <p class="register-link">¿No tenés cuenta? <a href="#">Registrate</a></p>
        </div>
    </div>
    <div class="modal-overlay" id="modalOverlay"></div>

    <script src="js/data.js"></script>
    <script src="js/main.js"></script>
    <script src="js/home-v2.js"></script>
</body>
</html>
