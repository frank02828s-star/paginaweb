// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('CPUSTOREVZLA - Inicializando...');
    
    // Inicializar modo claro/oscuro
    initializeTheme();
    // Configurar slider
    setupSlider();
    
    // Configurar carrito
    setupCart();
    
    // Configurar categorías
    setupCategories();
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Configurar búsqueda
    setupSearch();
    
    // Configurar efectos visuales
    setupVisualEffects();
    
    console.log('CPUSTOREVZLA - Inicializado correctamente');
});

// ===== MODO CLARO/OSCURO =====
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('cpustorevzla-theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        if (themeToggle) themeToggle.checked = true;
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        if (themeToggle) themeToggle.checked = false;
    }
    
    // Configurar evento del toggle
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                localStorage.setItem('cpustorevzla-theme', 'dark');
                showNotification('Modo oscuro activado', 'info');
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
                localStorage.setItem('cpustorevzla-theme', 'light');
                showNotification('Modo claro activado', 'info');
            }
        });
    }
    
    // Detectar preferencia del sistema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (!savedTheme && prefersDarkScheme.matches) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        if (themeToggle) themeToggle.checked = true;
        localStorage.setItem('cpustorevzla-theme', 'dark');
    }
    
    // Escuchar cambios en la preferencia del sistema
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('cpustorevzla-theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                if (themeToggle) themeToggle.checked = true;
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
                if (themeToggle) themeToggle.checked = false;
            }
        }
    });
}

// ===== SLIDER =====
function setupSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // Función para mostrar slide
    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;
        
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        currentSlide = index;
    }
    
    // Siguiente slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        showSlide(nextIndex);
        resetAutoSlide();
    }
    
    // Slide anterior
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        showSlide(prevIndex);
        resetAutoSlide();
    }
    
    // Ir a slide específico
    function goToSlide(index) {
        if (index >= 0 && index < slides.length) {
            showSlide(index);
            resetAutoSlide();
        }
    }
    
    // Iniciar slider automático
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Reiniciar slider automático
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }
    
    // Configurar eventos
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Pausar al interactuar
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
        
        // Para móviles
        sliderContainer.addEventListener('touchstart', () => clearInterval(slideInterval));
        sliderContainer.addEventListener('touchend', () => setTimeout(startAutoSlide, 5000));
    }
    
    // Iniciar
    showSlide(0);
    startAutoSlide();
}

// ===== CARRITO =====
function setupCart() {
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.querySelector('.cart-count');
    const cartModal = $('#cart-modal');
    const closeCart = document.getElementById('close-cart');
    const checkoutBtn = document.querySelector('#cart-modal .ui.orange.button');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    let cart = JSON.parse(localStorage.getItem('cpustorevzla-cart')) || [];
    let total = parseFloat(localStorage.getItem('cpustorevzla-cart-total')) || 0;
    
    // Actualizar contador
    function updateCartCount() {
        const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        if (cartCount) {
            cartCount.textContent = itemCount;
            cartCount.classList.add('pulse-effect');
            setTimeout(() => cartCount.classList.remove('pulse-effect'), 300);
        }
    }
    
    // Añadir al carrito
    function addToCart(product, price) {
        const existingItem = cart.find(item => item.product === product);
        
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({
                product: product,
                price: price,
                quantity: 1,
                id: Date.now()
            });
        }
        
        total += price;
        saveCart();
        updateCartCount();
        showNotification(`"${product}" añadido al carrito`, 'success');
        
        // Efecto visual
        const button = event.target.closest('.add-to-cart');
        if (button) {
            button.classList.add('added');
            setTimeout(() => button.classList.remove('added'), 1000);
        }
    }
    
    // Abrir carrito
    function openCart() {
        updateCartModal();
        cartModal.modal('show');
    }
    
    // Actualizar modal
    function updateCartModal() {
        if (!cartItems) return;
        
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="ui placeholder segment">
                    <div class="ui icon header">
                        <i class="shopping cart icon"></i>
                        <div class="content">
                            <div class="sub header">Tu carrito está vacío</div>
                        </div>
                    </div>
                    <div class="inline">
                        <button class="ui orange button" id="close-cart">Seguir Comprando</button>
                    </div>
                </div>
            `;
            if (cartTotal) cartTotal.textContent = '$0.00';
            return;
        }
        
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <div class="content">
                    <div class="header">${item.product}</div>
                    <div class="meta">$${item.price.toFixed(2)} c/u</div>
                    <div class="description">
                        <div class="ui mini buttons">
                            <button class="ui button decrease-btn" data-index="${index}">
                                <i class="minus icon"></i>
                            </button>
                            <div class="ui button disabled">${item.quantity}</div>
                            <button class="ui button increase-btn" data-index="${index}">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="extra">
                        <div class="ui orange label">
                            $${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button class="ui mini red button remove-btn" data-index="${index}">
                            <i class="trash icon"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });
        
        // Actualizar total
        if (cartTotal) {
            const calculatedTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${calculatedTotal.toFixed(2)}`;
            total = calculatedTotal;
        }
        
        // Configurar eventos
        setupCartItemEvents();
    }
    
    function setupCartItemEvents() {
        document.querySelectorAll('.increase-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                updateQuantity(index, 1);
            });
        });
        
        document.querySelectorAll('.decrease-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                updateQuantity(index, -1);
            });
        });
        
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                removeItem(index);
            });
        });
    }
    
    function updateQuantity(index, change) {
        if (cart[index]) {
            cart[index].quantity += change;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            } else {
                if (change > 0) total += cart[index].price;
                else total -= cart[index].price;
            }
            
            saveCart();
            updateCartCount();
            updateCartModal();
        }
    }
    
    function removeItem(index) {
        if (cart[index]) {
            total -= cart[index].price * cart[index].quantity;
            cart.splice(index, 1);
            saveCart();
            updateCartCount();
            updateCartModal();
            showNotification('Producto eliminado', 'info');
        }
    }
    
    function saveCart() {
        localStorage.setItem('cpustorevzla-cart', JSON.stringify(cart));
        localStorage.setItem('cpustorevzla-cart-total', total.toString());
    }
    
    // Configurar eventos
    if (cartButton) cartButton.addEventListener('click', openCart);
    
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartModal.modal('hide');
        });
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('El carrito está vacío', 'error');
                return;
            }
            
            showNotification('Procesando pedido...', 'info');
            setTimeout(() => {
                showNotification('¡Pedido realizado con éxito!', 'success');
                cart = [];
                total = 0;
                saveCart();
                updateCartCount();
                updateCartModal();
                cartModal.modal('hide');
            }, 2000);
        });
    }
    
    // Botones de añadir al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const price = parseFloat(this.dataset.price);
            addToCart(product, price);
        });
    });
    
    // Inicializar
    updateCartCount();
}

// ===== CATEGORÍAS =====
function setupCategories() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '100';
            this.style.boxShadow = '0 20px 40px rgba(255, 152, 0, 0.25)';
            this.style.transform = 'translateZ(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
            this.style.boxShadow = '';
            this.style.transform = '';
        });
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryTitle = this.querySelector('.category-title').textContent;
            showNotification(`Navegando a: ${categoryTitle}`, 'info');
        });
    });
}

// ===== MENÚ MÓVIL =====
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function openMenu() {
        isMenuOpen = true;
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = 'var(--navbar-bg)';
        navMenu.style.zIndex = '1001';
        navMenu.style.padding = '20px 0';
        navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        
        // Ocultar mega dropdown en móvil
        if (megaDropdown) {
            megaDropdown.style.display = 'none';
        }
        
        // Ajustar items
        const navItems = navMenu.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.style.width = '100%';
            item.style.padding = '15px 30px !important';
            item.style.justifyContent = 'flex-start';
            item.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        });
        
        mobileToggle.innerHTML = '<i class="times icon"></i>';
    }
    
    function closeMenu() {
        isMenuOpen = false;
        navMenu.style.display = '';
        if (megaDropdown) {
            megaDropdown.style.display = '';
        }
        mobileToggle.innerHTML = '<i class="bars icon"></i>';
    }
    
    mobileToggle.addEventListener('click', toggleMenu);
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Cerrar al redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });

// ===== BÚSQUEDA =====
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.querySelector('.search-container .search.icon');
    
    if (!searchInput || !searchIcon) return;
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            showNotification(`Buscando: "${query}"`, 'info');
            // Aquí iría la lógica real de búsqueda
            console.log('Búsqueda:', query);
        }
    }
    
    searchIcon.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// ===== EFECTOS VISUALES =====
function setupVisualEffects() {
    // Cargar imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            img.addEventListener('error', function() {
                console.error('Error al cargar imagen:', this.src);
                this.classList.add('loaded');
            });
        }
    });
    
    // Animaciones al scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('section, .product-card, .service-item, .brand-logo').forEach(element => {
        observer.observe(element);
    });
}

// ===== NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    // Contenedor fijo para apilar notificaciones (evita que se monten)
    let stack = document.getElementById('notification-stack');
    if (!stack) {
        stack = document.createElement('div');
        stack.id = 'notification-stack';
        stack.style.position = 'fixed';
        stack.style.top = '100px';
        stack.style.right = '20px';
        stack.style.display = 'flex';
        stack.style.flexDirection = 'column';
        stack.style.gap = '10px';
        stack.style.zIndex = '10000';
        stack.style.pointerEvents = 'none';
        document.body.appendChild(stack);
    }

    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    
    const icon = type === 'success' ? 'check circle' : 
                 type === 'error' ? 'exclamation circle' : 
                 'info circle';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icon} icon"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Estilos dinámicos (el contenedor maneja posición)
    notification.style.backgroundColor = type === 'success' ? '#4CAF50' : 
                                      type === 'error' ? '#F44336' : 
                                      '#FF9800';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.minWidth = '300px';
    notification.style.maxWidth = '400px';
    notification.style.animation = 'notificationFadeIn 0.3s ease-out';
    notification.style.pointerEvents = 'auto';
    
    stack.appendChild(notification);
    
    // Cerrar
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'notificationFadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Cerrar automáticamente
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'notificationFadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Añadir estilos si no existen
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes notificationFadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes notificationFadeOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }
            
            .custom-notification .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .custom-notification .icon {
                font-size: 1.2rem;
            }
            
            .custom-notification .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                margin-left: auto;
                padding: 0;
                line-height: 1;
            }
            
            .pulse-effect {
                animation: pulse 0.3s ease;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
            
            .added {
                background-color: #4CAF50 !important;
                animation: addedEffect 1s ease;
            }
            
            @keyframes addedEffect {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== UTILIDADES =====
// Prevenir enlaces vacíos
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

// Mejorar accesibilidad
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Cerrar modal
        if ($('#cart-modal').modal('is active')) {
            $('#cart-modal').modal('hide');
        }
        
        
        // Cerrar menú móvil
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle && window.innerWidth <= 992) {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = '';
                mobileToggle.innerHTML = '<i class="bars icon"></i>';
            }
        }
    }
});

// Manejar errores
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    if (!e.message.includes('img') && !e.message.includes('loading')) {
        showNotification('Ocurrió un error inesperado', 'error');
    }
});

// Detectar conexión
if (!navigator.onLine) {
    showNotification('Estás en modo offline', 'info');
}

window.addEventListener('online', function() {
    showNotification('Conexión restablecida', 'success');
});

window.addEventListener('offline', function() {
    showNotification('Sin conexión a internet', 'error');
});