/* =====================================================
   PRODUCTS PAGE JAVASCRIPT
   ===================================================== */

// State
let currentPage = 1;
const productsPerPage = 12;
let filteredProducts = [...allProducts];
let currentView = 'grid';

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadProducts();
    initViewToggle();
    initSort();
    initUrlParams();
});

// Load categories in sidebar
function loadCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;

    categoryList.innerHTML = categories.map(cat => `
        <li class="category-item">
            <div class="category-link" data-category="${cat.id}">
                <span>${cat.name}</span>
                <span class="material-icons">expand_more</span>
            </div>
            <ul class="subcategory-list">
                ${cat.subcategories.map(sub => `
                    <li>
                        <a href="?subcate=${encodeURIComponent(sub)}" class="subcategory-link">${sub}</a>
                    </li>
                `).join('')}
            </ul>
        </li>
    `).join('');

    // Toggle subcategories
    categoryList.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const sublist = this.nextElementSibling;
            if (sublist) {
                sublist.classList.toggle('show');
            }
        });
    });
}

// Load products
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);

    if (pageProducts.length === 0) {
        grid.innerHTML = '<p class="no-products">No se encontraron productos</p>';
        return;
    }

    grid.innerHTML = pageProducts.map(product => `
        <div class="product-card">
            ${product.discount ? `
                <div class="product-discount">
                    Descuento<br>
                    <span>$ ${product.discount.toLocaleString('es-AR')}</span>
                </div>
            ` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='${PLACEHOLDER_IMG}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">
                    <a href="?id=${product.id}">${product.title}</a>
                </h3>
                <div class="product-prices">
                    ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="price-current">${formatPrice(product.price)}</span>
                </div>
            </div>
            <button class="add-to-cart" data-id="${product.id}">
                <span class="material-icons">shopping_cart</span>
                Sumar al carrito
            </button>
        </div>
    `).join('');

    // Apply current view
    if (currentView === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }

    // Add to cart handlers
    grid.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId, filteredProducts);
        });
    });

    // Load pagination
    loadPagination();
}

// Load pagination
function loadPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">
            <span class="material-icons">chevron_left</span>
        </button>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 2 && i <= currentPage + 2)
        ) {
            paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHTML += `<span class="page-dots">...</span>`;
        }
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">
            <span class="material-icons">chevron_right</span>
        </button>`;
    }

    pagination.innerHTML = paginationHTML;

    // Add click handlers
    pagination.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentPage = parseInt(this.dataset.page);
            loadProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// View toggle
function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            currentView = this.dataset.view;
            loadProducts();
        });
    });
}

// Sort functionality
function initSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', function() {
        const value = this.value;

        switch (value) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'discount':
                filteredProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
                break;
            default:
                filteredProducts = [...allProducts];
        }

        currentPage = 1;
        loadProducts();
    });
}

// URL params
function initUrlParams() {
    const params = new URLSearchParams(window.location.search);

    // Search query
    const search = params.get('search');
    if (search) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = search;

        filteredProducts = allProducts.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );

        const pageHeader = document.querySelector('.page-header h1');
        if (pageHeader) pageHeader.textContent = `Resultados para "${search}"`;
    }

    // Category filter
    const cate = params.get('cate');
    if (cate) {
        const category = categories.find(c => c.id === cate);
        if (category) {
            filteredProducts = allProducts.filter(p =>
                p.category && p.category.toLowerCase().includes(category.name.toLowerCase())
            );

            const pageHeader = document.querySelector('.page-header h1');
            if (pageHeader) pageHeader.textContent = category.name;
        }
    }

    // Subcategory filter
    const subcate = params.get('subcate');
    if (subcate) {
        filteredProducts = allProducts.filter(p =>
            p.subcategory === subcate
        );

        const pageHeader = document.querySelector('.page-header h1');
        if (pageHeader) pageHeader.textContent = subcate;
    }

    loadProducts();
}
