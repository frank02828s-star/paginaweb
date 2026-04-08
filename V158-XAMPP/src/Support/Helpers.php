<?php
declare(strict_types=1);

function json_response(array $payload, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function request_json(): array {
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') return [];
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function csrf_token(): string {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return (string) $_SESSION['csrf_token'];
}

function verify_csrf(?string $token): bool {
    $known = $_SESSION['csrf_token'] ?? '';
    return is_string($token) && $token !== '' && is_string($known) && hash_equals($known, $token);
}

function normalize_email(string $email): string {
    return mb_strtolower(trim($email));
}

function normalize_id(string $id): string {
    return preg_replace('/\D+/', '', trim($id)) ?: '';
}

function secure_random_password(int $length = 14): string {
    $alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
    $result = '';
    $max = strlen($alphabet) - 1;
    for ($i = 0; $i < $length; $i++) {
        $result .= $alphabet[random_int(0, $max)];
    }
    return $result;
}

function require_post(): void {
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
        json_response(['ok' => false, 'message' => 'Método no permitido.'], 405);
    }
}
