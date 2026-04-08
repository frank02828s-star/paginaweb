<?php
declare(strict_types=1);

$env = static function (string $key, ?string $default = null): ?string {
    $value = getenv($key);

    if ($value === false) {
        $value = $_ENV[$key] ?? $_SERVER[$key] ?? null;
    }

    if ($value === null || $value === false) {
        return $default;
    }

    return (string) $value;
};

return [
    'app_name' => $env('APP_NAME', 'PCBuilder'),
    'app_url' => rtrim((string) $env('APP_URL', 'http://localhost'), '/'),
    'app_env' => $env('APP_ENV', 'local'),
    'app_debug' => $env('APP_DEBUG', '1') === '1',
    'app_key' => (string) $env('APP_KEY', ''),
    'mail_from' => $env('MAIL_FROM', 'no-reply@localhost'),
    'mail_from_name' => $env('MAIL_FROM_NAME', 'PCBuilder'),
    'db' => [
        'host' => (string) $env('DB_HOST', '127.0.0.1'),
        'port' => (string) $env('DB_PORT', '3306'),
        'name' => (string) $env('DB_NAME', 'pcbuilder'),
        'user' => (string) $env('DB_USER', 'root'),
        'pass' => (string) $env('DB_PASS', ''),
        'charset' => 'utf8mb4',
    ],
];
