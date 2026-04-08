<?php
declare(strict_types=1);

final class Auth
{
    public static function user(): ?array
    {
        $userId = $_SESSION['auth_user_id'] ?? null;
        if (!$userId) return null;

        $stmt = Database::connection()->prepare('SELECT * FROM users WHERE id = :id LIMIT 1');
        $stmt->execute(['id' => $userId]);
        $row = $stmt->fetch();
        if (!$row) return null;

        return self::presentUser($row);
    }

    public static function attempt(string $email, string $password): ?array
    {
        $email = normalize_email($email);
        $stmt = Database::connection()->prepare('SELECT * FROM users WHERE email_hash = :email_hash LIMIT 1');
        $stmt->execute(['email_hash' => Crypto::blindIndex($email)]);
        $row = $stmt->fetch();
        if (!$row) return null;
        if (($row['status'] ?? 'active') !== 'active') return null;
        if (!password_verify($password, (string) $row['password_hash'])) return null;

        $_SESSION['auth_user_id'] = (int) $row['id'];
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

        $update = Database::connection()->prepare('UPDATE users SET last_login_at = NOW() WHERE id = :id');
        $update->execute(['id' => $row['id']]);

        return self::presentUser($row);
    }

    public static function register(array $data, string $createdVia = 'modal', bool $mustChangePassword = false): array
    {
        $pdo = Database::connection();

        $firstName = trim((string) ($data['first_name'] ?? ''));
        $lastName = trim((string) ($data['last_name'] ?? ''));
        $idType = strtoupper(trim((string) ($data['id_type'] ?? '')));
        $idNumber = normalize_id((string) ($data['id_number'] ?? ''));
        $email = normalize_email((string) ($data['email'] ?? ''));
        $password = (string) ($data['password'] ?? '');

        if ($firstName === '' || $lastName === '' || $email === '' || $idNumber === '' || $password === '' || !in_array($idType, ['V','E','J','P','G'], true)) {
            throw new InvalidArgumentException('Debes completar todos los campos obligatorios.');
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException('Correo electrónico inválido.');
        }
        if (strlen($password) < 8 || !preg_match('/[A-Z]/', $password) || !preg_match('/[a-z]/', $password) || !preg_match('/\d/', $password) || !preg_match('/[^A-Za-z0-9]/', $password)) {
            throw new InvalidArgumentException('La contraseña no cumple con la política mínima.');
        }

        $emailHash = Crypto::blindIndex($email);
        $idHash = Crypto::blindIndex($idType . ':' . $idNumber);

        $check = $pdo->prepare('SELECT id FROM users WHERE email_hash = :email_hash OR id_hash = :id_hash LIMIT 1');
        $check->execute(['email_hash' => $emailHash, 'id_hash' => $idHash]);
        if ($check->fetch()) {
            throw new InvalidArgumentException('Ya existe una cuenta con ese correo o cédula.');
        }

        $stmt = $pdo->prepare('
            INSERT INTO users (
                first_name, last_name, email_hash, email_encrypted, id_type, id_hash, id_encrypted,
                password_hash, must_change_password, created_via
            ) VALUES (
                :first_name, :last_name, :email_hash, :email_encrypted, :id_type, :id_hash, :id_encrypted,
                :password_hash, :must_change_password, :created_via
            )
        ');

        $stmt->execute([
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email_hash' => $emailHash,
            'email_encrypted' => Crypto::encrypt($email),
            'id_type' => $idType,
            'id_hash' => $idHash,
            'id_encrypted' => Crypto::encrypt($idNumber),
            'password_hash' => password_hash($password, PASSWORD_DEFAULT),
            'must_change_password' => $mustChangePassword ? 1 : 0,
            'created_via' => in_array($createdVia, ['modal','checkout'], true) ? $createdVia : 'modal',
        ]);

        $id = (int) $pdo->lastInsertId();
        $_SESSION['auth_user_id'] = $id;
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

        $user = self::findById($id);
        if (!$user) {
            throw new RuntimeException('No se pudo completar el registro.');
        }

        return $user;
    }

    public static function registerFromCheckout(array $data): array
    {
        $email = normalize_email((string) ($data['email'] ?? ''));
        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException('Correo electrónico inválido.');
        }

        $emailHash = Crypto::blindIndex($email);
        $stmt = Database::connection()->prepare('SELECT * FROM users WHERE email_hash = :email_hash LIMIT 1');
        $stmt->execute(['email_hash' => $emailHash]);
        $existing = $stmt->fetch();
        if ($existing) {
            return self::presentUser($existing);
        }

        $password = secure_random_password(14);
        $user = self::register([
            'first_name' => trim((string) ($data['first_name'] ?? 'Cliente')),
            'last_name' => trim((string) ($data['last_name'] ?? 'Checkout')),
            'id_type' => strtoupper(trim((string) ($data['id_type'] ?? 'V'))),
            'id_number' => (string) ($data['id_number'] ?? random_int(1000000, 99999999)),
            'email' => $email,
            'password' => $password,
        ], 'checkout', true);

        Mailer::sendWelcomePassword($email, trim($user['first_name'] . ' ' . $user['last_name']), $password);

        return $user;
    }

    public static function logout(): void
    {
        $_SESSION = [];
        if (ini_get('session.use_cookies')) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'] ?? '', $params['secure'] ?? false, $params['httponly'] ?? true);
        }
        session_destroy();
    }

    public static function requireAuth(): array
    {
        $user = self::user();
        if (!$user) {
            header('Location: /');
            exit;
        }
        return $user;
    }

    private static function findById(int $id): ?array
    {
        $stmt = Database::connection()->prepare('SELECT * FROM users WHERE id = :id LIMIT 1');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();
        return $row ? self::presentUser($row) : null;
    }

    private static function presentUser(array $row): array
    {
        return [
            'id' => (int) $row['id'],
            'first_name' => (string) $row['first_name'],
            'last_name' => (string) $row['last_name'],
            'full_name' => trim(((string) $row['first_name']) . ' ' . ((string) $row['last_name'])),
            'email' => Crypto::decrypt((string) $row['email_encrypted']),
            'id_type' => (string) $row['id_type'],
            'id_number' => Crypto::decrypt((string) $row['id_encrypted']),
            'must_change_password' => ((int) ($row['must_change_password'] ?? 0)) === 1,
            'created_via' => (string) ($row['created_via'] ?? 'modal'),
        ];
    }
}
