<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$fiat  = 'VES';
$asset = 'USDT';

// Endpoint público P2P
$url = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';

// Queremos tasa VES por 1 USDT usando el lado "BUY" y promediando las primeras 20 ofertas
$payload = [
  'page' => 1,
  'rows' => 20,
  'payTypes' => [],          // sin filtrar por método (general)
  'countries' => [],
'asset' => $asset,
  'fiat' => $fiat,
  'tradeType' => 'BUY',
];

// Cache simple para evitar rate-limit (60s)
$cacheFile = __DIR__ . '/.binance_p2p_cache.json';
$cacheTtl  = 5;

if (file_exists($cacheFile)) {
  $raw = file_get_contents($cacheFile);
  $c = json_decode($raw, true);
  if (is_array($c) && isset($c['ts'], $c['data']) && (time() - intval($c['ts']) < $cacheTtl)) {
    echo json_encode($c['data']);
    exit;
  }
}

$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CONNECTTIMEOUT => 10,
  CURLOPT_TIMEOUT => 20,

  // IMPORTANTÍSIMO: soportar gzip/deflate
  CURLOPT_ENCODING => '',

  // Headers que suelen evitar respuestas raras/bloqueos
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    'Accept: application/json',
    'Origin: https://p2p.binance.com',
    'Referer: https://p2p.binance.com/',
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
  ],
]);

$resp = curl_exec($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err  = curl_error($ch);
curl_close($ch);

if ($resp === false) {
  http_response_code(502);
  echo json_encode(['success' => false, 'error' => 'curl_error', 'detail' => $err]);
  exit;
}

if ($http < 200 || $http >= 300) {
  http_response_code(502);
  echo json_encode([
    'success' => false,
    'error' => 'http_error',
    'http' => $http,
    'snippet' => mb_substr($resp, 0, 300),
  ]);
  exit;
}

$data = json_decode($resp, true);
if (!is_array($data)) {
  http_response_code(502);
  echo json_encode([
    'success' => false,
    'error' => 'non_json_response',
    'snippet' => mb_substr($resp, 0, 300),
  ]);
  exit;
}

// Binance normalmente devuelve: { "code":"000000", "message":"success", "data":[...] }
$list = $data['data'] ?? null;
if (!is_array($list)) {
  http_response_code(502);
  echo json_encode([
    'success' => false,
    'error' => 'bad_response',
    'keys' => array_keys($data),
    'snippet' => mb_substr(json_encode($data, JSON_UNESCAPED_UNICODE), 0, 300),
  ]);
  exit;
}

$prices = [];
foreach ($list as $row) {
  $p = $row['adv']['price'] ?? null;
  if ($p !== null) {
    $f = floatval($p);
    if ($f > 0) $prices[] = $f;
  }
}

if (count($prices) < 3) {
  http_response_code(502);
  echo json_encode([
    'success' => false,
    'error' => 'no_prices',
    'count' => count($prices),
  ]);
  exit;
}

// Promedio de las primeras 20 ofertas (en el orden que devuelve Binance)
$take = min(20, count($prices));
$subset = array_slice($prices, 0, $take);
$avg = array_sum($subset) / max(1, count($subset));
$rate = round($avg, 2);

$out = [
  'success' => true,
  'fiat' => $fiat,
  'asset' => $asset,
  'rate' => $rate,
  'sample' => array_slice($subset, 0, 5),
  'ts' => time(),
];

@file_put_contents($cacheFile, json_encode(['ts' => time(), 'data' => $out], JSON_UNESCAPED_UNICODE));
echo json_encode($out, JSON_UNESCAPED_UNICODE);
