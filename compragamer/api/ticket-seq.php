<?php
// api/ticket-seq.php - Genera un número de ticket secuencial persistente (server-side)
//
// Guarda el contador en un archivo JSON dentro de /api y usa flock() para evitar colisiones.
//
// Respuesta: { success: true, ticket: <int> }

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

$path = __DIR__ . '/.ticket_seq.json';

$fp = @fopen($path, 'c+'); // crea si no existe
if (!$fp) {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'cannot_open_storage']);
  exit;
}

if (!flock($fp, LOCK_EX)) {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'cannot_lock_storage']);
  fclose($fp);
  exit;
}

// Leer contenido actual
$contents = stream_get_contents($fp);
$seq = 0;

if ($contents) {
  $data = json_decode($contents, true);
  if (is_array($data) && isset($data['seq'])) {
    $seq = intval($data['seq']);
  }
}

$seq = $seq + 1;

// Escribir nuevo valor
ftruncate($fp, 0);
rewind($fp);

$out = [
  'seq' => $seq,
  'updated_at' => date('c'),
];

fwrite($fp, json_encode($out, JSON_UNESCAPED_SLASHES));
fflush($fp);

flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['success' => true, 'ticket' => $seq], JSON_UNESCAPED_SLASHES);
