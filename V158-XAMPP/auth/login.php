<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';
require_post();

$data = request_json();
if (!verify_csrf((string) ($data['csrf'] ?? ''))) {
    json_response(['ok' => false, 'message' => 'Sesión inválida.'], 419);
}

$email = (string) ($data['email'] ?? '');
$password = (string) ($data['password'] ?? '');

$user = Auth::attempt($email, $password);
if (!$user) {
    json_response(['ok' => false, 'message' => 'Correo o contraseña incorrectos.'], 422);
}

json_response(['ok' => true, 'message' => 'Sesión iniciada correctamente.', 'user' => $user]);
