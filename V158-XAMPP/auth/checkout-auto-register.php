<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';
require_post();

$data = request_json();

try {
    $user = Auth::registerFromCheckout([
        'first_name' => (string) ($data['first_name'] ?? 'Cliente'),
        'last_name' => (string) ($data['last_name'] ?? 'Checkout'),
        'id_type' => (string) ($data['id_type'] ?? 'V'),
        'id_number' => (string) ($data['id_number'] ?? ''),
        'email' => (string) ($data['email'] ?? ''),
    ]);
    json_response(['ok' => true, 'user' => $user]);
} catch (Throwable $e) {
    json_response(['ok' => false, 'message' => $e->getMessage()], 422);
}
