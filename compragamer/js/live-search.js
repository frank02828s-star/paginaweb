/* =====================================================
   CPU STORE VZLA - LIVE SEARCH (Shared across all pages)
   ===================================================== */
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var searchInput = document.getElementById('searchInput');
        var searchBtn = document.getElementById('searchBtn');
        var dropdown = document.getElementById('searchResultsDropdown');

        if (!searchInput || !searchBtn) return;

        function formatSearchPrice(price) {
            if (typeof formatPrice === 'function') return formatPrice(price);
            return '$' + Number(price || 0).toLocaleString('es-AR');
        }

        function debounceSearch(fn, wait) {
            var timeout;
            return function() {
                var args = arguments;
                var ctx = this;
                clearTimeout(timeout);
                timeout = setTimeout(function() { fn.apply(ctx, args); }, wait);
            };
        }

        function getAllSearchableProducts() {
            var products = [];
            if (typeof allProducts !== 'undefined' && Array.isArray(allProducts)) {
                products = products.concat(allProducts);
            }
            if (typeof featuredProducts !== 'undefined' && typeof featuredProducts === 'object') {
                Object.keys(featuredProducts).forEach(function(k) {
                    if (Array.isArray(featuredProducts[k])) products = products.concat(featuredProducts[k]);
                });
            }
            if (typeof homeOfferProducts !== 'undefined' && Array.isArray(homeOfferProducts)) {
                products = products.concat(homeOfferProducts);
            }
            if (typeof homeLaptopProducts !== 'undefined' && Array.isArray(homeLaptopProducts)) {
                products = products.concat(homeLaptopProducts);
            }
            var seen = {};
            return products.filter(function(p) {
                if (!p || !p.id || seen[p.id]) return false;
                seen[p.id] = true;
                return true;
            });
        }

        function doLiveSearch(query) {
            if (!dropdown) return;
            if (!query || query.length < 2) {
                dropdown.classList.remove('open');
                dropdown.innerHTML = '';
                return;
            }

            var q = query.toLowerCase();
            var products = getAllSearchableProducts();
            var matches = products.filter(function(p) {
                return (p.title || '').toLowerCase().indexOf(q) !== -1 ||
                       (p.category || '').toLowerCase().indexOf(q) !== -1;
            }).slice(0, 8);

            if (matches.length === 0) {
                dropdown.innerHTML = '<div class="search-no-results">No se encontraron productos</div>';
                dropdown.classList.add('open');
                return;
            }

            var placeholder = typeof PLACEHOLDER_IMG !== 'undefined' ? PLACEHOLDER_IMG : 'https://via.placeholder.com/40';
            dropdown.innerHTML = matches.map(function(p) {
                var price = formatSearchPrice(p.price);
                var img = p.image || placeholder;
                return '<a href="/productos/?id=' + p.id + '" class="search-result-item">' +
                    '<img class="search-result-img" src="' + img + '" alt="" onerror="this.src=\'' + placeholder + '\'">' +
                    '<div class="search-result-info">' +
                        '<div class="search-result-title">' + (p.title || '') + '</div>' +
                        '<div class="search-result-price">' + price + '</div>' +
                    '</div>' +
                '</a>';
            }).join('') +
            '<a href="/productos/?search=' + encodeURIComponent(query) + '" class="search-view-all">Ver todos los resultados</a>';

            dropdown.classList.add('open');
        }

        function performSearch() {
            var query = searchInput.value.trim();
            if (dropdown) dropdown.classList.remove('open');
            if (query) {
                window.location.href = '/productos/?search=' + encodeURIComponent(query);
            }
        }

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });

        searchInput.addEventListener('input', debounceSearch(function() {
            doLiveSearch(searchInput.value.trim());
        }, 200));

        searchInput.addEventListener('focus', function() {
            if (searchInput.value.trim().length >= 2) {
                doLiveSearch(searchInput.value.trim());
            }
        });

        document.addEventListener('click', function(e) {
            if (dropdown && !e.target.closest('.search-box')) {
                dropdown.classList.remove('open');
            }
        });
    });
})();
