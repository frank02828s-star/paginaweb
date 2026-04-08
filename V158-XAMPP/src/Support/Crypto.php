<?php
declare(strict_types=1);

final class Crypto
{
    private static function rawKey(): string
    {
        $key = (string) app_config('app_key');
        if ($key === '') {
            throw new RuntimeException('APP_KEY no configurada.');
        }
        if (str_starts_with($key, 'base64:')) {
            $decoded = base64_decode(substr($key, 7), true);
            if ($decoded !== false) {
                $key = $decoded;
            }
        }
        if (strlen($key) < 32) {
            throw new RuntimeException('APP_KEY debe tener al menos 32 bytes.');
        }
        return substr($key, 0, 32);
    }

    public static function encrypt(string $plain): string
    {
        $nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $cipher = sodium_crypto_secretbox($plain, $nonce, self::rawKey());
        return base64_encode($nonce . $cipher);
    }

    public static function decrypt(string $payload): string
    {
        $raw = base64_decode($payload, true);
        if ($raw === false || strlen($raw) <= SODIUM_CRYPTO_SECRETBOX_NONCEBYTES) {
            return '';
        }
        $nonce = substr($raw, 0, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $cipher = substr($raw, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $plain = sodium_crypto_secretbox_open($cipher, $nonce, self::rawKey());
        return $plain === false ? '' : $plain;
    }

    public static function blindIndex(string $value): string
    {
        return hash_hmac('sha256', $value, self::rawKey());
    }
}
