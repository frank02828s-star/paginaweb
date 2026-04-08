<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';
Auth::logout();

if (str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json')) {
    json_response(['ok' => true]);
}

header('Location: /');
exit;
