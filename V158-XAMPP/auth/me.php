<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/bootstrap.php';

$user = Auth::user();
json_response([
    'ok' => true,
    'authenticated' => $user !== null,
    'csrf' => csrf_token(),
    'user' => $user,
]);
