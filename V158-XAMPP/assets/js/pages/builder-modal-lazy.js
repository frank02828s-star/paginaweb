/**
 * builder-modal-lazy.js
 * Inyecta el modal #pcpp-modal solo cuando se va a abrir el selector.
 */
(function(){
  'use strict';
  const MODAL_ID = 'pcpp-modal';
  const TEMPLATE = `<div aria-hidden="true" class="pcpp-modal" id="pcpp-modal">
<div class="pcpp-modal-overlay" data-close="1"></div>
<div aria-labelledby="pcpp-modal-title" aria-modal="true" class="pcpp-modal-panel" role="dialog">
<div class="pcpp-modal-header">
<h3 id="pcpp-modal-title">Elegir componente</h3>
<button aria-label="Cerrar" class="pcpp-icon-btn" id="pcpp-modal-close">
<i class="fas fa-times"></i>
</button>
</div>
<div class="pcpp-modal-controls">
<div class="pcpp-search">
<i class="fas fa-search"></i>
<input autocomplete="off" id="pcpp-search" placeholder="Buscar por nombre, marca o especificación..." type="text"/>
</div>
<!-- Selección actual (se muestra como pill/botón no seleccionable) -->
<div class="pcpp-selected" hidden="" id="pcpp-selected">
<strong class="pcpp-selected-label">Productos seleccionados:</strong>
<div class="pcpp-selected-pills" id="pcpp-selected-pills"></div>
</div>
</div>
<div class="pcpp-modal-body">
<table class="pcpp-picker-table">
<thead>
<tr>
<th>Producto</th>
<th class="u-inline-7a1ab98a4e">Precio</th>
<th class="u-inline-7a1ab98a4e"></th>
</tr>
</thead>
<tbody id="pcpp-picker-body">
<!-- Productos generados por JS -->
</tbody>
</table>
</div>
</div>
</div>`;

  function ensureInjected(){
    if (document.getElementById(MODAL_ID)) return;
    document.body.insertAdjacentHTML('beforeend', TEMPLATE);
  }

  // Exponer para builder.js
  window.ensureBuilderModalInjected = ensureInjected;
})();
