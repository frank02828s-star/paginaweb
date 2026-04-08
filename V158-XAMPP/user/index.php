<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';
$user = Auth::requireAuth();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PCBuilder - Mi cuenta</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
    <?php require __DIR__ . '/../partials/header.php'; ?>

    <main>
        <div class="container user-panel-page">
            <div class="page-title">
                <h1>Mi cuenta</h1>
                <p>Hola, <?= htmlspecialchars($user['full_name']) ?>.</p>
            </div>

            <section class="cart-panel user-panel-card">
                <div class="cart-panel-header">
                    <h2 class="cart-panel-title">Panel de usuario</h2>
                </div>
                <div class="user-panel-tabs">
                    <button type="button" class="btn btn-secondary user-panel-tab is-active" data-panel-tab="account">Mi cuenta</button>
                    <button type="button" class="btn btn-secondary user-panel-tab" data-panel-tab="orders">Órdenes</button>
                    <button type="button" class="btn btn-secondary user-panel-tab" data-panel-tab="settings">Configuración</button>
                </div>

                <div class="user-panel-section" data-panel-section="account">
                    <div class="oc-kv"><span>Nombre:</span> <strong><?= htmlspecialchars($user['full_name']) ?></strong></div>
                    <div class="oc-kv"><span>Correo:</span> <strong><?= htmlspecialchars($user['email']) ?></strong></div>
                    <div class="oc-kv"><span>Cédula:</span> <strong><?= htmlspecialchars($user['id_type'] . '-' . $user['id_number']) ?></strong></div>
                </div>

                <div class="user-panel-section is-hidden" data-panel-section="orders">
                    <p>Tus órdenes aparecerán aquí cuando migremos la persistencia completa del checkout.</p>
                </div>

                <div class="user-panel-section is-hidden" data-panel-section="settings">
                    <p>Desde aquí podrás cambiar tu contraseña y opciones de cuenta en el siguiente paso.</p>
                </div>
            </section>
        </div>
    </main>

    <?php require __DIR__ . '/../partials/footer.php'; ?>
    <script src="/assets/js/shared/storageKeys.js"></script>
    <script src="/assets/js/shared/layout.js"></script>
    <script src="/assets/js/shared/cart.js"></script>
    <script>
    document.querySelectorAll('[data-panel-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-panel-tab]').forEach(b => b.classList.remove('is-active'));
            document.querySelectorAll('[data-panel-section]').forEach(s => s.classList.add('is-hidden'));
            btn.classList.add('is-active');
            const target = btn.getAttribute('data-panel-tab');
            const section = document.querySelector('[data-panel-section="' + target + '"]');
            if (section) section.classList.remove('is-hidden');
        });
    });
    </script>
</body>
</html>
