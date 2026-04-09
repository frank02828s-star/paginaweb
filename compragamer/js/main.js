/* =====================================================
   COMPRA GAMER CLONE - MAIN JAVASCRIPT
   ===================================================== */

// Cart State
let cart = JSON.parse(localStorage.getItem('compragamer_cart')) || [];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initProductTabs();
    initCart();
    initModal();
    initSearch();
    loadFeaturedProducts('perifericos');
    loadLatestProducts();
    loadMPProducts();
    loadBrandProducts();
    updateCartCount();
});

// Format price to Argentine Peso
function formatPrice(price) {
    return '$' + price.toLocaleString('es-AR');
}

// =====================================================
// HERO SLIDER
// =====================================================
function initSlider() {
    const slider = document.getElementById('heroSlider');
    const dots = document.getElementById('sliderDots');

    if (!slider || !dots) return;

    const slides = slider.querySelectorAll('.slide');
    const dotElements = dots.querySelectorAll('.dot');
    let currentSlide = 0;
    let autoSlideInterval;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dotElements.forEach(d => d.classList.remove('active'));

        slides[index].classList.add('active');
        dotElements[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Dot click events
    dotElements.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Start auto slide
    startAutoSlide();

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
}

// =====================================================
// PRODUCT TABS
// =====================================================
function initProductTabs() {
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const tabName = this.dataset.tab;
            loadFeaturedProducts(tabName);
        });
    });
}

// =====================================================
// LOAD PRODUCTS
// =====================================================
function loadFeaturedProducts(category) {
    const grid = document.getElementById('featuredProducts');
    if (!grid) return;

    const products = featuredProducts[category] || [];

    grid.innerHTML = products.map(product => createProductCard(product)).join('');

    // Add event listeners to add-to-cart buttons
    grid.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId, products);
        });
    });
}

function loadLatestProducts() {
    const grid = document.getElementById('latestProducts');
    if (!grid) return;

    grid.innerHTML = latestProducts.map(product => `
        <a href="/productos/?id=${product.id}" class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='${PLACEHOLDER_IMG}'">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-prices">
                    <span class="price-current">${formatPrice(product.price)}</span>
                </div>
            </div>
        </a>
    `).join('');
}

function loadMPProducts() {
    const container = document.getElementById('mpProducts');
    if (!container) return;

    container.innerHTML = mpProducts.map(product => createProductCard(product)).join('');

    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId, mpProducts);
        });
    });
}

function loadBrandProducts() {
    const container = document.getElementById('brandProducts');
    if (!container) return;

    const products = brandProducts.asus || [];

    container.innerHTML = products.map(product => createProductCard(product)).join('');

    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId, products);
        });
    });
}

// Create Product Card HTML
function createProductCard(product) {
    const hasDiscount = product.discount && product.discount > 0;

    return `
        <div class="product-card">
            ${hasDiscount ? `
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
                    <a href="/productos/?id=${product.id}">${product.title}</a>
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
    `;
}

// =====================================================
// CART FUNCTIONALITY
// =====================================================
function initCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');

    if (!cartBtn || !cartSidebar) return;

    function openCart() {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCartFn() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartFn);
    cartOverlay.addEventListener('click', closeCartFn);

    // ESC key to close cart
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCartFn();
        }
    });

    renderCart();
}

function addToCart(productId, productList) {
    // Find product in list
    let product = productList.find(p => p.id === productId);

    // If not found, search in all product lists
    if (!product) {
        const allLists = [
            ...Object.values(featuredProducts).flat(),
            ...mpProducts,
            ...latestProducts,
            ...Object.values(brandProducts).flat(),
            ...allProducts
        ];
        product = allLists.find(p => p.id === productId);
    }

    if (!product) return;

    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    updateCartCount();

    // Show feedback
    showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateCartCount();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    renderCart();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('compragamer_cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        if (cartTotal) cartTotal.textContent = '$0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='${PLACEHOLDER_IMG}'">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
                <div class="cart-item-qty">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <span class="material-icons">delete</span>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = formatPrice(total);
}

function updateCartCount() {
    const count = document.getElementById('cartCount');
    if (count) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        count.textContent = totalItems;
    }
}

// =====================================================
// MODAL
// =====================================================
function initModal() {
    // Login modal is now handled by partials/login-modal.php
    // This function is kept as a no-op for backward compatibility
}

// =====================================================
// SEARCH
// =====================================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (!searchInput || !searchBtn) return;

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `/productos/?search=${encodeURIComponent(query)}`;
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// =====================================================
// NOTIFICATIONS
// =====================================================
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span class="material-icons">check_circle</span>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #16c750;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Add animation keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Smooth scroll
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions globally available for onclick handlers
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;

// Redirect checkout buttons to carrito
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.checkout-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/carrito/';
        });
    });
});
