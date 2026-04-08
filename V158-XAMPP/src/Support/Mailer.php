<?php
declare(strict_types=1);

final class Mailer
{
    public static function sendWelcomePassword(string $to, string $name, string $password): bool
    {
        $subject = 'Tu cuenta fue creada en ' . app_config('app_name');
        $body = "Hola {$name},\n\n"
            . "Tu cuenta fue creada correctamente en " . app_config('app_name') . ".\n\n"
            . "Tu contraseña temporal es:\n{$password}\n\n"
            . "Por seguridad, cambia esta contraseña al iniciar sesión.\n";
        $headers = [
            'From: ' . app_config('mail_from_name') . ' <' . app_config('mail_from') . '>',
            'Reply-To: ' . app_config('mail_from'),
            'Content-Type: text/plain; charset=UTF-8',
        ];
        return @mail($to, $subject, $body, implode("\r\n", $headers));
    }
}
