<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ayuda - CPU STORE VZLA</title>
    <meta name="description" content="Preguntas frecuentes y centro de ayuda de CPU Store VZLA">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/ayuda.css">
    <link rel="icon" href="https://github.com/user-attachments/assets/06c387e3-ef71-4004-aade-acbb0d8327c1" type="image/png">
</head>
<body>
<?php include __DIR__ . '/partials/header.php'; ?>
    <section class="page-header">
        <div class="page-header-container">
            <a href="/" class="back-link"><span class="material-icons">chevron_left</span></a>
            <h1>Preguntas Frecuentes</h1>
        </div>
    </section>

    <main class="ayuda-page">
        <section class="faq-section">
            <div class="faq-container" id="faqContainer"></div>
        </section>

        <section class="service-section">
            <div class="service-card">
                <h2>Servicio postventa y garantías</h2>
                <p>Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado <strong>"CPU Store VZLA te ayuda. ¿Cuál es tu consulta?"</strong> donde debes exponer tu caso, seleccionando el motivo de <strong>"Postventa"</strong> que se adapte a tu requerimiento.</p>
                <p>Para saber si tu producto califica, te aconsejamos revisar los <a href="#">términos y condiciones de garantía.</a></p>
                <p>Podes sacar un turno para venir <strong>en forma presencial a gestionar tu garantía en CPU Store VZLA</strong> o, si pasaron <strong>más de 30 días, podés gestionar la garantía con la marca.</strong></p>
                <div class="service-buttons">
                    <a href="#" class="btn-primary">SACAR TURNO PRESENCIAL EN CPU STORE VZLA</a>
                    <a href="#" class="btn-outline">CÓMO TRAMITAR LA GARANTÍA CON LA MARCA</a>
                </div>
            </div>
        </section>

        <section class="contact-section">
            <div class="contact-card">
                <h3>CPU Store VZLA te ayuda. ¿Cuál es tu consulta?</h3>
                <p>Para realizar una consulta es necesario que inicies sesión en tu cuenta</p>
                <button class="btn-primary login-required" id="helpLoginBtn">
                    <span class="material-icons">person</span>
                    Iniciar Sesión
                </button>
            </div>
        </section>
    </main>
<?php include __DIR__ . '/partials/footer.php'; ?>
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header"><h3>Tu carrito</h3><button class="close-cart" id="closeCart"><span class="material-icons">close</span></button></div>
        <div class="cart-items" id="cartItems"><p class="empty-cart">Tu carrito está vacío</p></div>
        <div class="cart-footer">
            <div class="cart-total"><span>Total:</span><span id="cartTotal">$0</span></div>
            <button class="btn-primary checkout-btn">Finalizar compra</button>
        </div>
    </div>
    <div class="cart-overlay" id="cartOverlay"></div>

<?php include __DIR__ . '/partials/login-modal.php'; ?>

    <script src="/js/data.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/ayuda.js"></script>
</body>
</html>
