<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';
require_post();

$data = request_json();
if (!verify_csrf((string) ($data['csrf'] ?? ''))) {
    json_response(['ok' => false, 'message' => 'Sesión inválida.'], 419);
}

try {
    $user = Auth::register($data, 'modal', false);
    json_response(['ok' => true, 'message' => 'Cuenta creada correctamente.', 'user' => $user]);
} catch (Throwable $e) {
    json_response(['ok' => false, 'message' => $e->getMessage()], 422);
}
