<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($page_title ?? 'COMPRA GAMER') ?></title>
<?php if (!empty($page_description)): ?>
    <meta name="description" content="<?= htmlspecialchars($page_description) ?>">
<?php endif; ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="<?= $base_path ?>css/styles.css">
<?php if (!empty($extra_css)): foreach ($extra_css as $css): ?>
    <link rel="stylesheet" href="<?= $base_path ?><?= htmlspecialchars($css) ?>">
<?php endforeach; endif; ?>
    <link rel="icon" href="https://ext.same-assets.com/4025281442/4260243455.svg" type="image/svg+xml">
</head>
<body>

    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <a href="<?= $base_path ?>index.php" class="logo">
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
                <button class="cart-btn" id="cartBtn" onclick="window.location.href='<?= $base_path ?>carrito.php'">
                    <span class="material-icons">shopping_cart</span>
                    <span class="cart-count" id="cartCount">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="main-nav">
        <div class="nav-container">
            <a href="<?= $base_path ?>productos.php" class="nav-link<?= (($active_nav ?? '') === 'productos') ? ' active' : '' ?>">Productos</a>
            <a href="<?= $base_path ?>productos.php?cate=notebooks" class="nav-link">Notebooks</a>
            <a href="<?= $base_path ?>armatupc.php" class="nav-link<?= (($active_nav ?? '') === 'armatupc') ? ' active' : '' ?>">Armá tu PC</a>
            <a href="<?= $base_path ?>ayuda.php" class="nav-link<?= (($active_nav ?? '') === 'ayuda') ? ' active' : '' ?>">Ayuda</a>
        </div>
    </nav>
