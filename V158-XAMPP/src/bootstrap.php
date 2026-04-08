<?php
declare(strict_types=1);

/**
 * Carga simple de .env compatible con XAMPP / PHP sin librerías externas.
 * Prioridad:
 * 1) Variables ya definidas en servidor/sistema
 * 2) Archivo .env en la raíz del proyecto
 */
(function (): void {
    $envPath = dirname(__DIR__) . '/.env';
    if (!is_file($envPath) || !is_readable($envPath)) {
        return;
    }

    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);

        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        $parts = explode('=', $line, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $key = trim($parts[0]);
        $value = trim($parts[1]);

        if ($key === '') {
            continue;
        }

        if (
            (str_starts_with($value, '"') && str_ends_with($value, '"')) ||
            (str_starts_with($value, "'") && str_ends_with($value, "'"))
        ) {
            $value = substr($value, 1, -1);
        }

        // No sobrescribir si ya existe en entorno real
        if (getenv($key) !== false && getenv($key) !== '') {
            continue;
        }

        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
        putenv($key . '=' . $value);
    }
})();

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
    'httponly' => true,
    'samesite' => 'Lax',
]);

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_name('pcbuilder_session');
    session_start();
}

$config = require __DIR__ . '/../private/config/app.php';

if (!function_exists('app_config')) {
    function app_config(?string $key = null) {
        global $config;
        if ($key === null) return $config;
        $parts = explode('.', $key);
        $value = $config;
        foreach ($parts as $part) {
            if (!is_array($value) || !array_key_exists($part, $value)) {
                return null;
            }
            $value = $value[$part];
        }
        return $value;
    }
}

require_once __DIR__ . '/Support/Helpers.php';
require_once __DIR__ . '/Support/Crypto.php';
require_once __DIR__ . '/Support/Database.php';
require_once __DIR__ . '/Support/Mailer.php';
require_once __DIR__ . '/Support/Auth.php';
