<?php
// $rootPath is set by the including page (e.g. '' for root-level, '' for checkout subdir since URLs are absolute)
if (!isset($rootPath)) $rootPath = '';
?>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <a href="/" class="logo">
                <img src="https://github.com/user-attachments/assets/06c387e3-ef71-4004-aade-acbb0d8327c1" alt="CPU Store VZLA" class="logo-full">
                <img src="https://github.com/user-attachments/assets/06c387e3-ef71-4004-aade-acbb0d8327c1" alt="CPU Store VZLA" class="logo-icon">
            </a>
            <div class="search-box">
                <input type="text" placeholder="Buscar productos" id="searchInput" autocomplete="off">
                <button class="search-btn" id="searchBtn">
                    <span class="material-icons">search</span>
                </button>
                <div class="search-results-dropdown" id="searchResultsDropdown"></div>
            </div>
            <div class="header-actions">
                <a href="/ayuda/" class="header-action-link">
                    <span class="material-icons">settings</span>
                    <span>Ayuda</span>
                </a>
                <a href="#" class="header-action-link" id="loginBtn">
                    <span class="material-icons">person_outline</span>
                    <span>Iniciar sesión</span>
                </a>
                <button class="cart-btn" id="cartBtn" onclick="window.location.href='/carrito/'">
                    <span class="material-icons">shopping_cart</span>
                    <span class="cart-count" id="cartCount">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="main-nav">
        <div class="nav-container">
            <a href="/armatupc/" class="nav-link">Armá tu PC</a>
            <a href="/productos/" class="nav-link">Ofertas Especiales</a>
            <a href="/productos/?cate=notebooks" class="nav-link">Licencias Digitales</a>
        </div>
    </nav>
    <script src="/js/live-search.js"></script>
