<?php
$page_title = 'Productos - COMPRA GAMER';
$page_description = 'La mayor variedad de productos, al mejor precio y la mejor financiación. Envíos a todo el país';
$extra_css = ['css/productos.css'];
$active_nav = 'productos';
$base_path = '';
include 'partials/header.php';
?>

    <!-- Page Header -->
    <section class="page-header">
        <div class="page-header-container">
            <a href="index.php" class="back-link">
                <span class="material-icons">chevron_left</span>
            </a>
            <h1>Destacados</h1>
            <div class="view-options">
                <select id="sortSelect">
                    <option value="">Ordenar por</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="name">Nombre</option>
                    <option value="discount">Mayor descuento</option>
                </select>
                <button class="view-btn grid active" data-view="grid">
                    <span class="material-icons">grid_view</span>
                </button>
                <button class="view-btn list" data-view="list">
                    <span class="material-icons">view_list</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main class="products-page">
        <aside class="sidebar">
            <div class="sidebar-section">
                <h3 class="sidebar-title">
                    <span class="material-icons">expand_less</span>
                    Categorías
                </h3>
                <ul class="category-list" id="categoryList"></ul>
            </div>
            <div class="sidebar-section">
                <h3 class="sidebar-title">
                    <span class="material-icons">tune</span>
                    Filtros
                </h3>
                <p class="filter-note">Los filtros de productos son aplicables a las subcategorías, elegí una en el menú de categorías.</p>
            </div>
            <div class="sidebar-banner">
                <img src="https://imagenes.compragamer.com/espacioWeb/DC_20260406173957_SWBQrWvo.jpg" alt="Sale Notebooks">
            </div>
        </aside>
        <section class="products-content">
            <div class="products-grid" id="productsGrid"></div>
            <div class="pagination" id="pagination"></div>
        </section>
    </main>

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

    <script src="js/data.js"></script>
    <script src="js/main.js"></script>
    <script src="js/productos.js"></script>
</body>
</html>
