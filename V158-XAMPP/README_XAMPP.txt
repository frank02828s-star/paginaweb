CONFIGURACIÓN RÁPIDA EN XAMPP

1. Copia esta carpeta a:
   htdocs/pcbuilder

2. Abre phpMyAdmin:
   http://localhost/phpmyadmin

3. Crea la base de datos:
   pcbuilder
   cotejamiento: utf8mb4_unicode_ci

4. Importa:
   /database/schema.sql

5. Verifica que XAMPP tenga:
   - Apache encendido
   - MySQL encendido

6. Credenciales por defecto incluidas en .env:
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_NAME=pcbuilder
   DB_USER=root
   DB_PASS=

7. Abre:
   http://localhost/pcbuilder

NOTAS IMPORTANTES
- En XAMPP normalmente el usuario es root y la contraseña va vacía.
- Este ZIP ya carga automáticamente el archivo .env.
- Si cambias el nombre de la carpeta del proyecto, ajusta APP_URL en .env.
- Si ves error de APP_KEY, revisa que exista el archivo .env en la raíz.

PRUEBA DE CONEXIÓN
- Intenta registrarte desde el modal.
- Si la conexión está bien, ya no aparecerá:
  Access denied for user ''@'localhost'
