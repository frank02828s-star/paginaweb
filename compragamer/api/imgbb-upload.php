<?php
// Simple proxy uploader to imgbb to avoid CORS issues and not expose API key in the browser.
// NOTE: Keep this file server-side only. Requires PHP with cURL enabled.

header('Content-Type: application/json; charset=utf-8');

// === IMGBB API key (server-side) ===
$IMGBB_API_KEY = (string) getenv('IMGBB_API_KEY');
// Fallback: api/config.php
$__cfg = __DIR__ . '/config.php';
if ((!$IMGBB_API_KEY || trim($IMGBB_API_KEY) === '') && file_exists($__cfg)) {
  require $__cfg; // debe definir $IMGBB_API_KEY
}
$IMGBB_API_KEY = (string) ($IMGBB_API_KEY ?? '');

function respond($ok, $payload = []) {
  echo json_encode(array_merge(['ok' => $ok], $payload));
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond(false, ['error' => 'Method not allowed']);
}

if (!isset($_FILES['image'])) {
  respond(false, ['error' => 'No image uploaded', 'detail' => 'Missing field "image"']);
}

if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) {
  $code = (int) $_FILES['image']['error'];
  $limits = [
    'upload_max_filesize' => ini_get('upload_max_filesize'),
    'post_max_size' => ini_get('post_max_size'),
    'file_uploads' => ini_get('file_uploads'),
    'max_file_uploads' => ini_get('max_file_uploads'),
    'memory_limit' => ini_get('memory_limit'),
  ];
  respond(false, ['error' => 'Upload failed', 'upload_error_code' => $code, 'ini' => $limits]);
}

$tmp = $_FILES['image']['tmp_name'];
$mime = '';
if (function_exists('mime_content_type')) {
  $mime = @mime_content_type($tmp);
}
if (!$mime && function_exists('finfo_open')) {
  $fi = finfo_open(FILEINFO_MIME_TYPE);
  if ($fi) {
    $mime = finfo_file($fi, $tmp);
    finfo_close($fi);
  }
}

$allowed = ['image/jpeg','image/png','image/gif','image/webp'];
if (!in_array($mime, $allowed, true)) {
  respond(false, ['error' => 'Invalid image type']);
}

$data = file_get_contents($tmp);
if ($data === false) {
  respond(false, ['error' => 'Failed to read upload']);
}

$base64 = base64_encode($data);

$ch = curl_init();
if (trim($IMGBB_API_KEY) === '') {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'IMGBB_API_KEY no configurada en el servidor']);
  exit;
}
$url = 'https://api.imgbb.com/1/upload?key=' . urlencode($IMGBB_API_KEY);

curl_setopt_array($ch, [
  CURLOPT_URL => $url,
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 45,
  CURLOPT_POSTFIELDS => [
    'image' => $base64
  ]
]);

$response = curl_exec($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);

if ($response === false) {
  respond(false, ['error' => 'cURL error: ' . $err]);
}

$decoded = json_decode($response, true);

if ($http < 200 || $http >= 300 || !isset($decoded['data']['url'])) {
  $msg = $decoded['error']['message'] ?? ('Upload failed (HTTP ' . $http . ')');
  respond(false, ['error' => $msg, 'http' => $http]);
}

respond(true, ['url' => $decoded['data']['url']]);
