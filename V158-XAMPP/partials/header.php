<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';
$user = Auth::user();
?>
<header>
    <div class="container">
        <div class="header-content">
            <a href="/" class="logo logo-link">PC<span>Builder</span></a>
            <nav>
                <ul>
                    <li><a href="/" data-nav="index"><i class="fas fa-home"></i> Inicio</a></li>
                    <li><a href="/builder/" data-nav="builder"><i class="fas fa-tools"></i> Custom PC Builder</a></li>
                    <li><a href="/products/" data-nav="products"><i class="fas fa-store"></i> Productos</a></li>
                    <li><a href="/cart.html" data-nav="guides"><i class="fas fa-list"></i> Guías</a></li>
                    <li><a href="/cart.html" data-nav="forum"><i class="fas fa-comments"></i> Foro</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <a href="/help.html" class="header-action-link" id="helpBtn">
                    <span class="header-action-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M9.35 9a2.65 2.65 0 1 1 4.73 1.65c-.78.86-1.58 1.36-1.58 2.35"></path>
                            <circle cx="12" cy="16.9" r="0.75" fill="currentColor" stroke="none"></circle>
                        </svg>
                    </span>
                    <span>Ayuda</span>
                </a>

                <?php if ($user): ?>
                    <button type="button" class="header-action-link header-action-button" id="userMenuBtn" aria-expanded="false" aria-haspopup="menu">
                        <span class="header-action-button__inner">
                            <span class="header-action-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21a5 5 0 0 0-10 0"></path>
                                    <circle cx="12" cy="8" r="4"></circle>
                                </svg>
                            </span>
                            <span><?= htmlspecialchars($user['first_name']) ?></span>
                        </span>
                    </button>
                <?php else: ?>
                    <button type="button" class="header-action-link header-action-button" id="loginBtn" aria-haspopup="dialog" aria-expanded="false">
                        <span class="header-action-button__inner">
                            <span class="header-action-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21a5 5 0 0 0-10 0"></path>
                                    <circle cx="12" cy="8" r="4"></circle>
                                </svg>
                            </span>
                            <span>Iniciar Sesión</span>
                        </span>
                    </button>
                <?php endif; ?>

                <div class="cart-icon" id="cart-icon">
                    <a href="/cart.html" class="u-inline-f7b8221415" aria-label="Carrito">
                        <i class="fas fa-shopping-cart fa-lg"></i>
                        <div class="cart-count" id="cart-count">0</div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <?php if ($user): ?>
    <div class="header-user-menu" id="headerUserMenu" aria-hidden="true">
        <a href="/mi-cuenta" class="header-user-menu__item">Mi cuenta</a>
        <button type="button" class="header-user-menu__item header-user-menu__item--danger" id="headerLogoutBtn">Cerrar sesión</button>
    </div>
    <?php endif; ?>
</header>
