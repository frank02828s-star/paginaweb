<?php
// $rootPath is set by the including page (e.g. '' for root-level, '' for checkout subdir since URLs are absolute)
if (!isset($rootPath)) $rootPath = '';
?>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <a href="/" class="logo">
                <img src="https://ext.same-assets.com/4025281442/1301851404.svg" alt="Compra Gamer" class="logo-full">
                <img src="https://ext.same-assets.com/4025281442/4260243455.svg" alt="Compra Gamer" class="logo-icon">
            </a>
            <div class="search-box">
                <input type="text" placeholder="Buscar productos" id="searchInput">
                <button class="search-btn" id="searchBtn">
                    <span class="material-icons">search</span>
                </button>
            </div>
            <div class="header-actions">
                <a href="#" class="login-btn" id="loginBtn">
                    <span class="material-icons">person_outline</span>
                    <span class="login-text">Ingresá</span>
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
            <a href="/productos/" class="nav-link">Productos</a>
            <a href="/productos/?cate=notebooks" class="nav-link">Notebooks</a>
            <a href="/armatupc/" class="nav-link">Armá tu PC</a>
            <a href="/ayuda/" class="nav-link">Ayuda</a>
        </div>
    </nav>
