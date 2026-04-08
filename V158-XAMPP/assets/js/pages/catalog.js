// catalog-functions.js - Funciones específicas del catálogo

// ============================================
// ESTADO DEL CATÁLOGO
// ============================================

let currentCategory = "cpu";
let maxPrice = 1000;
let currentSort = "default";

// ============================================
// HELPERS (IMÁGENES)
// ============================================

function isProbablyIconClass(value) {
    // Soporta los valores existentes tipo "fa-microchip".
    // Si el valor es una ruta (contiene "/" o tiene extensión), lo tratamos como imagen.
    const v = String(value || '').trim();
    if (!v) return true;
    if (v.startsWith('fa-')) return true;
    // cosas como "fas fa-microchip" (por si alguien guarda clases completas)
    if (v.includes('fa-') && !v.includes('/')) return true;
    return false;
}

function normalizeImageSrc(src) {
    const fallback = '/assets/images/placeholder-product.png';
    const v = String(src || '').trim();
    if (!v) return fallback;
    // Si es un icono, no es un src válido
    if (isProbablyIconClass(v)) return fallback;
    // Remoto
    if (v.startsWith('http://') || v.startsWith('https://')) return v;
    // Absoluto desde raíz
    if (v.startsWith('/')) return v;
    // Relativo -> lo convertimos a absoluto para que funcione en /products y /checkout/...
    return '/' + v.replace(/^\.?\//, '');
}

// ============================================
// FUNCIONES DEL CATÁLOGO
// ============================================

// Renderizar categorías en el sidebar
function renderCatalogCategories() {
    const container = document.getElementById('catalog-categories');
    if (!container) return;
    
    container.innerHTML = '';
    
    const categories = getAllCategories();
    
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        categoryElement.className = `category-item ${category.id === currentCategory ? 'active' : ''}`;
        categoryElement.dataset.category = category.id;
        
        categoryElement.innerHTML = `
            <i class="fas ${category.icon}" style="color: ${category.color};"></i>
            <span>${category.name}</span>
            <span class="category-count">(${getProductsByCategory(category.id).length})</span>
        `;
        
        // Añadir event listener
        categoryElement.addEventListener('click', function() {
            const categoryId = this.dataset.category;
            selectCategory(categoryId);
        });
        
        container.appendChild(categoryElement);
    });
}

// Seleccionar categoría
function selectCategory(categoryId) {
    currentCategory = categoryId;
    
    // Actualizar categoría activa
    renderCatalogCategories();
    
    // Actualizar título
    const categoryName = getCategoryName(categoryId);
    document.getElementById('current-category-title').textContent = categoryName;
    
    // Renderizar productos
    renderCatalogProducts();
}

// Renderizar productos en el grid
function renderCatalogProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    let products = getProductsByCategory(currentCategory);
    
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-box-open fa-3x" style="color: #cbd5e0; margin-bottom: 15px;"></i>
                <h3>No hay productos en esta categoría</h3>
                <p>Prueba con otra categoría o ajusta los filtros</p>
            </div>
        `;
        document.getElementById('products-count').textContent = 'Mostrando 0 productos';
        return;
    }
    
    // Aplicar filtro de precio
    products = products.filter(product => product.price <= maxPrice);
    
    // Aplicar ordenamiento
    products = sortProducts(products, currentSort);
    
    const categoryName = getCategoryName(currentCategory);
    
    // Actualizar contador
    document.getElementById('products-count').textContent = `Mostrando ${products.length} productos`;
    
    products.forEach(product => {
        const productElement = createProductCard(product, categoryName);
        container.appendChild(productElement);
    });
}

// Crear tarjeta de producto
function createProductCard(product, categoryName) {
    const productElement = document.createElement('div');
    productElement.className = 'product-card';
    
    // Determinar clase de stock
    let stockClass = 'in-stock';
    let stockText = `Stock: ${product.stock}`;
    
    if (product.stock === 0) {
        stockClass = 'out-of-stock';
        stockText = 'Agotado';
    } else if (product.stock < 5) {
        stockClass = 'low-stock';
        stockText = `Quedan ${product.stock}`;
    }
    
    productElement.innerHTML = `
        <div class="product-image">
            ${
                isProbablyIconClass(product.image)
                    ? `<i class="fas ${product.image} fa-3x"></i>`
                    : `<img src="${normalizeImageSrc(product.image)}" alt="${product.name}">`
            }
            ${product.rating ? `<div class="product-rating"><i class="fas fa-star"></i> ${product.rating}</div>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${categoryName}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-specs">${product.specs || 'Especificaciones no disponibles'}</div>
            
            <div class="product-meta">
                <span class="product-brand"><i class="fas fa-tag"></i> ${product.brand || 'Marca no especificada'}</span>
                <span class="product-stock ${stockClass}"><i class="fas fa-${product.stock === 0 ? 'times-circle' : 'check-circle'}"></i> ${stockText}</span>
            </div>
            
            <div class="product-price">$${product.price}</div>
            <div class="product-actions">
                <button class="add-to-cart" data-category="${currentCategory}" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> ${product.stock === 0 ? 'Agotado' : 'Añadir al Carrito'}
                </button>

                <!-- ✅ Ahora SIEMPRE se muestra en todas las categorías (psu/case/cooling también) -->
                <button class="add-to-build" data-category="${currentCategory}" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-tools"></i> Usar en tu Build
                </button>
            </div>
        </div>
    `;
    
    // Añadir event listeners a los botones
    const addToCartBtn = productElement.querySelector('.add-to-cart');
    if (addToCartBtn && product.stock > 0) {
        addToCartBtn.addEventListener('click', function() {
            const category = this.dataset.category;
            const id = parseInt(this.dataset.id);
            const product = getProductById(category, id);
            
            if (product) {
                const success = addToCart(product, category);
                if (success) {
                    showNotification(`${product.name} añadido al carrito`);
                }
            }
        });
    }
    
    const addToBuildBtn = productElement.querySelector('.add-to-build');
    if (addToBuildBtn && product.stock > 0) {
        addToBuildBtn.addEventListener('click', function() {
            const category = this.dataset.category;
            const id = parseInt(this.dataset.id);
            addProductToBuild(category, id);
        });
    }
    
    return productElement;
}

// Ordenar productos
function sortProducts(products, sortType) {
    switch(sortType) {
        case 'price-asc':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name-asc':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return [...products].sort((a, b) => b.name.localeCompare(a.name));
        case 'rating-desc':
            return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        default:
            return products;
    }
}

// ✅ Añadir producto a la construcción (formato compatible con el builder)
function addProductToBuild(category, productId) {
    const product = getProductById(category, productId);
    if (!product) {
        showNotification('Producto no encontrado', 'error');
        return;
    }

    // ✅ Formato compatible con builder.js:
    // builder espera { category, product } (y rehidrata por product.id)
    // Guardamos el producto completo como fallback.
    const buildData = {
        category,
        product: { ...product, id: productId }
    };

    Storage.set(STORAGE_KEYS.PRODUCT_TO_ADD, buildData);

    // Notificación antes de navegar (después no se ve)
    showNotification(`Redirigiendo al constructor con ${product.name}`);

    // Redirigir al constructor
    window.location.href = '/builder/';
}

// Aplicar filtros
function applyFilters() {
    renderCatalogProducts();
    showNotification(`Filtros aplicados: Precio máximo $${maxPrice}`);
}

// Cambiar ordenamiento
function changeSort(sortType) {
    currentSort = sortType;
    renderCatalogProducts();
    
    const sortNames = {
        'default': 'Por defecto',
        'price-asc': 'Precio: Menor a Mayor',
        'price-desc': 'Precio: Mayor a Menor',
        'name-asc': 'Nombre: A-Z',
        'name-desc': 'Nombre: Z-A',
        'rating-desc': 'Mejor valorados'
    };
    
    showNotification(`Ordenado: ${sortNames[sortType] || 'Por defecto'}`);
}

// Buscar productos
function searchProducts(query) {
    if (!query || query.trim() === '') {
        renderCatalogProducts();
        return;
    }
    
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    const searchTerm = query.toLowerCase().trim();
    let allProducts = [];
    
    // Buscar en todas las categorías
    Object.keys(productsData).forEach(category => {
        const categoryProducts = getProductsByCategory(category);
        const filtered = categoryProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand?.toLowerCase().includes(searchTerm) ||
            product.specs?.toLowerCase().includes(searchTerm)
        );
        
        allProducts = [...allProducts, ...filtered.map(p => ({ ...p, searchCategory: category }))];
    });
    
    container.innerHTML = '';
    
    if (allProducts.length === 0) {
        container.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search fa-3x" style="color: #cbd5e0; margin-bottom: 15px;"></i>
                <h3>No se encontraron productos</h3>
                <p>No hay resultados para "${query}"</p>
            </div>
        `;
        document.getElementById('products-count').textContent = '0 productos encontrados';
        return;
    }
    
    // Aplicar filtro de precio a los resultados
    allProducts = allProducts.filter(product => product.price <= maxPrice);
    
    // Actualizar contador
    document.getElementById('products-count').textContent = `${allProducts.length} productos encontrados para "${query}"`;
    
    allProducts.forEach(product => {
        const categoryName = getCategoryName(product.searchCategory || currentCategory);
        const productElement = createProductCard(product, categoryName);
        container.appendChild(productElement);
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Renderizar categorías
    renderCatalogCategories();
    
    // Renderizar productos
    renderCatalogProducts();
    
    // Configurar filtro de precio
    const priceRange = document.getElementById('price-range');
    const maxPriceLabel = document.getElementById('max-price-label');
    
    if (priceRange && maxPriceLabel) {
        priceRange.addEventListener('input', function() {
            maxPrice = parseInt(this.value);
            maxPriceLabel.textContent = `$${maxPrice}`;
        });
        
        // Configurar botón de aplicar filtros
        document.getElementById('apply-filters').addEventListener('click', applyFilters);
    }
    
    // Configurar ordenamiento si existe el selector
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            changeSort(this.value);
        });
    }
    
    // Configurar búsqueda si existe el campo
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput) {
        // Buscar al presionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts(this.value);
            }
        });
        
        // Buscar al hacer clic en el botón
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                searchProducts(searchInput.value);
            });
        }
    }

    // ✅ Leer con Storage (consistente) si hay un producto para resaltar
    const productToAdd = Storage.get(STORAGE_KEYS.PRODUCT_TO_ADD, null);
    if (productToAdd) {
        try {
            if (productToAdd && productToAdd.category && productToAdd.id != null) {
                // Seleccionar la categoría del producto
                selectCategory(productToAdd.category);
                
                // Buscar y resaltar el producto
                setTimeout(() => {
                    const productElement = document.querySelector(`[data-id="${productToAdd.id}"][data-category="${productToAdd.category}"]`);
                    if (productElement) {
                        productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        productElement.classList.add('highlighted');
                        
                        setTimeout(() => {
                            productElement.classList.remove('highlighted');
                        }, 2000);
                    }
                }, 500);
                
                // Limpiar el dato
                Storage.remove(STORAGE_KEYS.PRODUCT_TO_ADD);
            }
        } catch (error) {
            console.error('Error al procesar producto para añadir:', error);
        }
    }
    
    // Botones de inicio de sesión y registro
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Funcionalidad de inicio de sesión no implementada en esta demo.');
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            alert('Funcionalidad de registro no implementada en esta demo.');
        });
    }
    
    // Configurar botón de limpiar filtros
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            maxPrice = 1000;
            currentSort = 'default';
            
            if (priceRange) priceRange.value = 1000;
            if (maxPriceLabel) maxPriceLabel.textContent = '$1000';
            if (sortSelect) sortSelect.value = 'default';
            if (searchInput) searchInput.value = '';
            
            renderCatalogProducts();
            showNotification('Filtros limpiados');
        });
    }
});