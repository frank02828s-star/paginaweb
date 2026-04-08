// builder.js - Constructor estilo PCPartPicker

// ============================================
// ESTADO DEL CONSTRUCTOR
// ============================================

const BUILD_ROWS = [
    { key: 'cpu', label: 'CPU' },
    { key: 'cooling', label: 'Disipador CPU' },
    { key: 'motherboard', label: 'Tarjeta madre' },
    { key: 'ram', label: 'Memoria' },
    { key: 'storage', label: 'Almacenamiento' },
    { key: 'gpu', label: 'Tarjeta gráfica' },
    { key: 'case', label: 'Gabinete' },
    { key: 'psu', label: 'Fuente de poder' },
    { key: 'os', label: 'Sistema operativo', disabled: true },
    { key: 'monitor', label: 'Monitor', disabled: true }
];

let currentBuild = {
    cpu: null,
    cooling: null,
    motherboard: null,
    ram: null,
    storage: null,
    gpu: null,
    case: null,
    psu: null,
    os: null,
    monitor: null
};

// Estado de compatibilidad para resaltar filas
const compatState = {
    danger: new Set(),
    warn: new Set(),
};

function applyRowHighlights() {
    const tbody = document.getElementById('pcpp-build-body');
    if (!tbody) return;

    tbody.querySelectorAll('tr.pcpp-row').forEach(tr => {
        tr.classList.remove('is-danger', 'is-warn');
        const key = tr.dataset.key;
        if (!key) return;
        if (compatState.danger.has(key)) tr.classList.add('is-danger');
        else if (compatState.warn.has(key)) tr.classList.add('is-warn');
    });
}


let activePickerCategory = null;

// ============================================
// MODAL: PRODUCTO SELECCIONADO (PILL NO CLICKEABLE)
// - Se muestra debajo del buscador
// - El producto seleccionado se oculta del listado
// ============================================

function updatePickerSelectedUI(category) {
    const wrap = document.getElementById('pcpp-selected');
    const pills = document.getElementById('pcpp-selected-pills');
    if (!wrap || !pills) return;

    const selected = currentBuild?.[category] || null;
    pills.innerHTML = '';

    if (!selected) {
        wrap.hidden = true;
        return;
    }

    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'pcpp-selected-pill';
    pill.disabled = true;
    pill.textContent = selected.name;
    pills.appendChild(pill);

    wrap.hidden = false;
}

// ============================================
// ENLACE DEL BUILD (tipo PCPartPicker)
// ============================================

function encodeBuildPayload(payload) {
    try {
        const json = JSON.stringify(payload || {});
        const b64 = btoa(unescape(encodeURIComponent(json)));
        // URL-safe base64
        return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
    } catch (e) {
        console.error('No se pudo codificar el build:', e);
        return '';
    }
}

function decodeBuildPayload(token) {
    try {
        if (!token) return null;
        const safe = token.replace(/-/g, '+').replace(/_/g, '/');
        const padLen = (4 - (safe.length % 4)) % 4;
        const padded = safe + '='.repeat(padLen);
        const json = decodeURIComponent(escape(atob(padded)));
        return JSON.parse(json);
    } catch (e) {
        console.error('No se pudo decodificar el build:', e);
        return null;
    }
}


// --------------------------------------------
// ENLACE CORTO (6 caracteres) SIN BACKEND
// - Genera un código determinístico de 6 chars a partir del build
// - Guarda el build asociado en localStorage para poder reabrirlo desde el enlace
// Nota: Sin servidor, el enlace solo se puede "resolver" en el mismo navegador/dispositivo.
// --------------------------------------------

const BUILD_LINK_MAP_KEY = STORAGE_KEYS.BUILD_LINK_MAP;

function toBase62FromHex(hex, length=6){
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // toma los primeros 12 hex (~48 bits) y conviértelos a base62
    const slice = hex.slice(0, 12);
    let n = parseInt(slice, 16);
    let out = '';
    for (let i=0; i<length; i++){
        out = alphabet[n % 62] + out;
        n = Math.floor(n / 62);
    }
    return out;
}

function canonicalBuildIds(){
    const ids = {};
    Object.keys(currentBuild).sort().forEach(k => {
        if (currentBuild[k] && typeof currentBuild[k].id !== 'undefined') ids[k] = currentBuild[k].id;
    });
    return ids;
}

async function hashIdsToCode(ids){
    const json = JSON.stringify(ids);
    // WebCrypto si está disponible (moderno)
    if (window.crypto && crypto.subtle) {
        const data = new TextEncoder().encode(json);
        const buf = await crypto.subtle.digest('SHA-1', data);
        const bytes = Array.from(new Uint8Array(buf));
        const hex = bytes.map(b => b.toString(16).padStart(2,'0')).join('');
        return toBase62FromHex(hex, 6);
    }
    // Fallback simple (no cripto)
    let h = 0;
    for (let i=0; i<json.length; i++){
        h = (h*31 + json.charCodeAt(i)) >>> 0;
    }
    const hex = h.toString(16).padStart(8,'0') + '000000000000';
    return toBase62FromHex(hex, 6);
}

function loadBuildLinkMap(){
    try{
        return JSON.parse(localStorage.getItem(BUILD_LINK_MAP_KEY) || '{}') || {};
    }catch(e){
        return {};
    }
}

function saveBuildLinkMap(map){
    try{
        Storage.set(BUILD_LINK_MAP_KEY, map);
    }catch(e){}
}

async function getShortBuildLink(){
    const ids = canonicalBuildIds();
    const base = `${window.location.origin}${window.location.pathname}`;
    // si no hay nada seleccionado, solo devuelve la URL base
    if (!Object.keys(ids).length) return base;

    const code = await hashIdsToCode(ids);

    // guarda relación code->ids
    const map = loadBuildLinkMap();
    map[code] = ids;
    saveBuildLinkMap(map);

    const url = new URL(base);
    url.searchParams.set('b', code);
    return url.toString();
}

function resolveBuildFromShortCode(code){
    if (!code) return null;
    const map = loadBuildLinkMap();
    return map[code] || null;
}

async function updateBuildLinkUI() {
    const input = document.getElementById('build-link');
    if (!input) return;
    input.value = await getShortBuildLink();
}

function copyBuildLink() {
    const input = document.getElementById('build-link');
    if (!input) return;

    const text = input.value || '';
    if (!text) return;

    const done = () => showNotification('Enlace copiado', 'success');

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => {
            input.select();
            document.execCommand('copy');
            done();
        });
        return;
    }

    input.select();
    document.execCommand('copy');
    done();
}

// ============================================
// HELPERS UI
// ============================================

function formatMoney(value) {
    const n = Number(value || 0);
    return n.toFixed(2);
}

function getPartIcon(part) {
    // El inventario usa iconos FontAwesome (fa-*)
    if (part && part.image) return part.image;
    return 'fa-box';
}

function buildTotal() {
    return Object.keys(currentBuild)
        .map(k => currentBuild[k]?.price || 0)
        .reduce((a, b) => a + b, 0);
}

function updateTotalUI() {
    const totalEl = document.getElementById('total-price');
    if (totalEl) totalEl.textContent = formatMoney(buildTotal());
}

// ============================================
// RENDER TABLA PRINCIPAL (estilo PCPartPicker)
// ============================================

function renderBuildTable() {
    const tbody = document.getElementById('pcpp-build-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    BUILD_ROWS.forEach(row => {
        const selected = currentBuild[row.key];
        const hasData = Array.isArray(getProductsByCategory(row.key)) && getProductsByCategory(row.key).length > 0;

        const tr = document.createElement('tr');
        tr.className = 'pcpp-row';
        tr.dataset.key = row.key;

        // Componente
        const tdComponent = document.createElement('td');
        tdComponent.className = 'pcpp-col-component';
        tdComponent.innerHTML = `<a href="#" class="pcpp-component-link" data-open="${row.key}">${row.label}</a>`;
        tr.appendChild(tdComponent);

        // Selección
        const tdSelection = document.createElement('td');
        tdSelection.className = 'pcpp-col-selection';

        if (selected) {
            tdSelection.innerHTML = `
                <div class="pcpp-selection">
                    <div class="pcpp-selection-thumb">
                        <i class="fas ${getPartIcon(selected)}"></i>
                    </div>
                    <div class="pcpp-selection-main">
                        <div class="pcpp-selection-title">${selected.name}</div>
                        <div class="pcpp-selection-sub">${selected.specs || selected.description || ''}</div>
                    </div>
                </div>
            `;
        } else {
            const disabled = row.disabled || !hasData;
            tdSelection.innerHTML = `
                <button class="pcpp-choose-btn" data-open="${row.key}" ${disabled ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i> Elegir ${row.label}
                </button>
            `;
            if (!row.disabled && !hasData) {
                tdSelection.innerHTML += `<div class="pcpp-muted">No hay productos cargados para esta categoría.</div>`;
            }
        }
        tr.appendChild(tdSelection);

        // Base
        const tdBase = document.createElement('td');
        tdBase.className = 'pcpp-col-base';
        tdBase.textContent = selected ? `$${formatMoney(selected.price)}` : '—';
        tr.appendChild(tdBase);

        // Promo
        const tdPromo = document.createElement('td');
        tdPromo.className = 'pcpp-col-promo';
        tdPromo.textContent = '—';
        tr.appendChild(tdPromo);

        // Availability
        const tdAvail = document.createElement('td');
        tdAvail.className = 'pcpp-col-availability';
        tdAvail.textContent = selected ? 'En stock' : '';
        tr.appendChild(tdAvail);

        // Price
        const tdPrice = document.createElement('td');
        tdPrice.className = 'pcpp-col-price pcpp-price';
        tdPrice.textContent = selected ? `$${formatMoney(selected.price)}` : '';
        tr.appendChild(tdPrice);

        // Acciones (comprar)
        const tdBuy = document.createElement('td');
        tdBuy.className = 'pcpp-col-buy';
        if (selected) {
            tdBuy.innerHTML = `<button class="pcpp-buy-btn" data-buy="${row.key}">Comprar</button>`;
        } else {
            tdBuy.innerHTML = '';
        }
        tr.appendChild(tdBuy);

        // Remove
        const tdRemove = document.createElement('td');
        tdRemove.className = 'pcpp-col-remove';
        if (selected) {
            tdRemove.innerHTML = `<button class="pcpp-icon-btn" data-remove="${row.key}" aria-label="Eliminar"><i class="fas fa-times"></i></button>`;
        } else {
            tdRemove.innerHTML = '';
        }
        tr.appendChild(tdRemove);

        tbody.appendChild(tr);
    });

    // Delegación de eventos
    tbody.querySelectorAll('[data-open]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            openPicker(el.dataset.open);
        });
    });

    tbody.querySelectorAll('[data-remove]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            removeComponentFromBuild(btn.dataset.remove);
        });
    });

    tbody.querySelectorAll('[data-buy]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            addComponentToCart(btn.dataset.buy);
        });
    });

    updateTotalUI();
    updateBuildLinkUI();
}

// ============================================
// MODAL: LISTADO Y SELECCIÓN DE COMPONENTES
// ============================================

function openPicker(category) {
    const rowDef = BUILD_ROWS.find(r => r.key === category);
    const hasData = Array.isArray(getProductsByCategory(category)) && getProductsByCategory(category).length > 0;

    if (!rowDef || rowDef.disabled) {
        showNotification('Esta categoría está deshabilitada en la demo.', 'error');
        return;
    }
    if (!hasData) {
        showNotification('No hay productos para esta categoría.', 'error');
        return;
    }

    activePickerCategory = category;

    if (window.ensureBuilderModalInjected) window.ensureBuilderModalInjected();

    const modal = document.getElementById('pcpp-modal');
    const title = document.getElementById('pcpp-modal-title');
    const search = document.getElementById('pcpp-search');

    if (title) title.textContent = `Elegir ${rowDef.label}`;
    if (search) search.value = '';

    updatePickerSelectedUI(category);
    renderPickerList(category, '');

    if (modal) {
        modal.setAttribute('aria-hidden', 'false');
        requestAnimationFrame(() => {
            modal.classList.add('is-open');
        });
    }

    if (search) {
        setTimeout(() => search.focus(), 0);
    }
}

function closePicker() {
    const modal = document.getElementById('pcpp-modal');
    if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    }
    activePickerCategory = null;
}

function renderPickerList(category, query) {
    const tbody = document.getElementById('pcpp-picker-body');
    if (!tbody) return;

    // Actualiza la sección "Productos seleccionados" y oculta el seleccionado del listado
    updatePickerSelectedUI(category);
    const selectedId = currentBuild?.[category]?.id;

    const q = (query || '').trim().toLowerCase();
    const products = (getProductsByCategory(category) || []).filter(p => {
        if (typeof selectedId !== 'undefined' && selectedId !== null && p.id === selectedId) return false;
        if (!q) return true;
        const haystack = `${p.name} ${p.brand || ''} ${p.specs || ''} ${p.description || ''}`.toLowerCase();
        return haystack.includes(q);
    });

    tbody.innerHTML = '';

    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="pcpp-picker-item">
                    <div class="pcpp-picker-thumb"><i class="fas ${getPartIcon(p)}"></i></div>
                    <div>
                        <div class="pcpp-picker-title">${p.name}</div>
                        <div class="pcpp-picker-sub">${p.specs || p.description || ''}</div>
                    </div>
                </div>
            </td>
            <td class="pcpp-picker-price">$${formatMoney(p.price)}</td>
            <td class="pcpp-picker-action">
                <button class="btn btn-primary btn-sm" data-pick="${p.id}">Seleccionar</button>
            </td>
        `;
        tr.querySelector('[data-pick]').addEventListener('click', () => {
            // Selecciona y vuelve a renderizar dentro del mismo modal
            // para que desaparezca del listado y aparezca como "pill".
            selectComponent(category, p.id);

            const searchInput = document.getElementById('pcpp-search');
            const qNow = searchInput ? searchInput.value : '';
            renderPickerList(category, qNow);
        });
        tbody.appendChild(tr);
    });

    if (products.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="3" class="pcpp-muted" style="padding:16px;">No se encontraron resultados.</td>`;
        tbody.appendChild(tr);
    }
}

// ============================================
// ACCIONES DE BUILD
// ============================================

function selectComponent(category, componentId) {
    const component = getProductById(category, parseInt(componentId));
    if (!component) {
        showNotification('Producto no encontrado', 'error');
        return;
    }

    currentBuild[category] = component;
    showNotification(`${component.name} añadido a la construcción`, 'success');

    saveBuildToStorage(currentBuild);

    renderBuildTable();
    checkCompatibility();
}

function removeComponentFromBuild(category) {
    if (!currentBuild[category]) return;

    const removed = currentBuild[category];
    currentBuild[category] = null;

    showNotification(`${removed.name} eliminado`, 'success');

    saveBuildToStorage(currentBuild);

    renderBuildTable();
    checkCompatibility();
}

function addComponentToCart(category) {
    const component = currentBuild[category];
    if (!component) {
        showNotification('No hay componente seleccionado en esta fila', 'error');
        return;
    }

    addToCart(component, category);
    showNotification(`${component.name} añadido al carrito`, 'success');
}

function addBuildToCart() {
    const selectedParts = Object.keys(currentBuild).filter(k => currentBuild[k]);
    if (selectedParts.length === 0) {
        showNotification('No hay componentes para añadir', 'error');
        return;
    }

    selectedParts.forEach(k => addToCart(currentBuild[k], k));
    showNotification('Construcción añadida al carrito', 'success');
}

// ============================================
// GUARDAR / CARGAR BUILD
// ============================================

function loadBuildFromStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.BUILD);
        if (!saved) return { ...currentBuild };
        const parsed = JSON.parse(saved);

        // Normalizar claves (por si faltan)
        const normalized = { ...currentBuild };
        Object.keys(normalized).forEach(k => {
            normalized[k] = parsed[k] || null;
        });
        return normalized;
    } catch (e) {
        console.error('Error al cargar la construcción:', e);
        return { ...currentBuild };
    }
}

function saveBuildToStorage(build) {
    try {
        Storage.set(STORAGE_KEYS.BUILD, build);
    } catch (e) {
        console.error('Error al guardar la construcción:', e);
    }
}

function saveBuild() {
    saveBuildToStorage(currentBuild);
    showNotification('Construcción guardada', 'success');
}

function clearBuild() {
    Object.keys(currentBuild).forEach(k => currentBuild[k] = null);
    saveBuildToStorage(currentBuild);
    renderBuildTable();
    checkCompatibility();
    updateBuildLinkUI();
    showNotification('Construcción limpiada', 'success');
}

// ============================================
// COMPATIBILIDAD (simple, como demo)
// ============================================

function checkCompatibility() {
    const alerts = document.getElementById('compatibility-alerts');
    if (!alerts) return;

    const summaryEl = document.getElementById('compatibility-summary');
    const setSummary = (text, level = '') => {
        if (!summaryEl) return;
        summaryEl.textContent = text;
        summaryEl.classList.remove('ok', 'warn', 'danger');
        if (level) summaryEl.classList.add(level);
    };

    // Si está vacío
    const hasAny = Object.keys(currentBuild).some(k => !!currentBuild[k]);
    if (!hasAny) {
        alerts.innerHTML = `
            <li class="alert-item alert-success"><span>Compatibilidad: Tu construcción está vacía. Añade componentes para verificar compatibilidad.</span></li>
        `;
        setSummary('Añade componentes para verificar.', 'ok');
        return;
    }

    let alertsHTML = '';

    // Reset de filas resaltadas
    compatState.danger.clear();
    compatState.warn.clear();

// CPU <-> Motherboard (socket)
    if (currentBuild.cpu && currentBuild.motherboard) {
        if (currentBuild.cpu.socket && currentBuild.motherboard.socket && currentBuild.cpu.socket !== currentBuild.motherboard.socket) {
                        compatState.danger.add('cpu');
            compatState.danger.add('motherboard');
alertsHTML += `
                <li class="alert-item alert-danger">
                    <span><strong>Incompatible:</strong> El procesador (${currentBuild.cpu.socket}) no coincide con la tarjeta madre (${currentBuild.motherboard.socket}).</span>
                </li>
            `;
        } else {
            alertsHTML += `
                <li class="alert-item alert-success">
                    <span><strong>Compatible:</strong> CPU y tarjeta madre comparten socket (${currentBuild.cpu.socket || currentBuild.motherboard.socket}).</span>
                </li>
            `;
        }
    } else if (currentBuild.cpu || currentBuild.motherboard) {
                compatState.warn.add('cpu');
        compatState.warn.add('motherboard');
alertsHTML += `
            <li class="alert-item alert-warning">
                <span><strong>Nota:</strong> Selecciona ${currentBuild.cpu ? 'una tarjeta madre' : 'un procesador'} para verificar el socket.</span>
            </li>
        `;
    }

    // RAM <-> Motherboard (tipo)
    if (currentBuild.ram && currentBuild.motherboard) {
        const ramType = currentBuild.ram.type;
        const chipset = currentBuild.motherboard.chipset || '';

        // Demo: reglas simples existentes en el proyecto (DDR4 vs DDR5)
        if ((ramType === 'DDR5' && chipset.includes('B550')) || (ramType === 'DDR4' && chipset.includes('Z690'))) {
            alertsHTML += `
                <li class="alert-item alert-warning">
                    <span><strong>Posible incompatibilidad:</strong> RAM ${ramType} podría no coincidir con chipset ${chipset}. Verifica especificaciones.</span>
                </li>
            `;
        } else {
            alertsHTML += `
                <li class="alert-item alert-success">
                    <span><strong>OK:</strong> RAM seleccionada y tarjeta madre no presentan conflictos evidentes.</span>
                </li>
            `;
        }
    }

    if (!alertsHTML.trim()) {
        alertsHTML = `
            <li class="alert-item alert-success">
                <span>No se detectaron conflictos con los componentes seleccionados.</span>
            </li>
        `;
    }

    alerts.innerHTML = alertsHTML;

    
    applyRowHighlights();
// Resumen (tipo PCPartPicker): prioridad a errores > advertencias > ok
    const dangerCount = alerts.querySelectorAll('.alert-danger').length;
    const warnCount = alerts.querySelectorAll('.alert-warning').length;
    if (dangerCount > 0) {
        setSummary(`Hay ${dangerCount} incompatibilidad(es).`, 'danger');
    } else if (warnCount > 0) {
        setSummary(`Hay ${warnCount} advertencia(s).`, 'warn');
    } else {
        setSummary('Sin problemas de compatibilidad detectados.', 'ok');
    }
}

// ============================================
// INICIALIZACIÓN + EVENTOS MODAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // 1) Si viene un build en la URL, cargarlo (prioridad)
    const params = new URLSearchParams(window.location.search);
    const shortCode = params.get('b');
    const resolvedIds = resolveBuildFromShortCode(shortCode);

    const token = params.get('build'); // compatibilidad con enlaces antiguos
    const payload = decodeBuildPayload(token);

    if (resolvedIds && typeof resolvedIds === 'object') {
        const loaded = { ...currentBuild };
        Object.keys(loaded).forEach(k => {
            if (!resolvedIds[k]) return;
            const part = getProductById(k, parseInt(resolvedIds[k]));
            loaded[k] = part || null;
        });
        currentBuild = loaded;
        saveBuildToStorage(currentBuild);
    } else if (payload && typeof payload === 'object') {
        const loaded = { ...currentBuild };
        Object.keys(loaded).forEach(k => {
            if (!payload[k]) return;
            const part = getProductById(k, parseInt(payload[k]));
            loaded[k] = part || null;
        });
        currentBuild = loaded;
        saveBuildToStorage(currentBuild);
    } else {
        // 2) Cargar build guardado
        currentBuild = loadBuildFromStorage();
    }

    // 3) Si vienes desde el catálogo con "Usar en Build", agrega esa pieza
    //    (el catálogo deja el dato en localStorage y redirige aquí)
    try {
        const pendingRaw = localStorage.getItem(STORAGE_KEYS.PRODUCT_TO_ADD);
        if (pendingRaw) {
            const pending = JSON.parse(pendingRaw);
            const category = pending?.category;
            // Compatibilidad:
            // - Formato nuevo/recomendado: { category, product: { id, ... } }
            // - Formato antiguo (bug):    { category, id }
            let product = pending?.product;
            if (!product && typeof pending?.id !== 'undefined') {
                product = { id: pending.id };
            }

            if (category && currentBuild.hasOwnProperty(category) && product && typeof product.id !== 'undefined') {
                // Re-hidrata desde inventario por id para evitar datos desactualizados
                const fresh = getProductById(category, parseInt(product.id));
                currentBuild[category] = fresh || product;
                saveBuildToStorage(currentBuild);
                // Limpia para que no se vuelva a agregar al recargar
                Storage.remove(STORAGE_KEYS.PRODUCT_TO_ADD);
                // Limpia query params del enlace corto si existían (opcional)
                showNotification(`${(fresh || product).name} añadido al build`, 'success');
            }
        }
    } catch (e) {
        console.warn('No se pudo procesar el producto pendiente del catálogo:', e);
        try { Storage.remove(STORAGE_KEYS.PRODUCT_TO_ADD); } catch (_) {}
    }

    // Render inicial
    renderBuildTable();
    checkCompatibility();
    updateBuildLinkUI();

    // Botones de toolbar
    document.getElementById('save-build')?.addEventListener('click', saveBuild);
    document.getElementById('clear-build')?.addEventListener('click', clearBuild);
    document.getElementById('add-all-to-cart')?.addEventListener('click', addBuildToCart);

    // Copiar enlace
    document.getElementById('copy-build-link')?.addEventListener('click', copyBuildLink);

    // Modal: cerrar
    document.getElementById('pcpp-modal-close')?.addEventListener('click', closePicker);
    document.querySelector('#pcpp-modal .pcpp-modal-overlay')?.addEventListener('click', closePicker);

    // Modal: cerrar (delegación para soportar inyección lazy del modal)
    if (!window.__pcpp_close_delegate__) {
        window.__pcpp_close_delegate__ = true;
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (!target) return;
            const closeEl = target.closest && target.closest('#pcpp-modal-close, #pcpp-modal .pcpp-modal-overlay');
            if (!closeEl) return;
            e.preventDefault();
            closePicker();
        }, true);
    }


    // Modal: búsqueda
    const search = document.getElementById('pcpp-search');
    if (search) {
        search.addEventListener('input', (e) => {
            if (!activePickerCategory) return;
            renderPickerList(activePickerCategory, e.target.value);
        });
        search.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePicker();
        });
    }

    // Escape global para cerrar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePicker();
    });
});
