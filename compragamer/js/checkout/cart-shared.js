// cart.js - Funciones del carrito compartidas para PCBuilder

// Cargar carrito desde localStorage
function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
        if (savedCart) {
            return JSON.parse(savedCart);
        }
    } catch (error) {
        console.error('Error al cargar el carrito:', error);
    }
    return [];
}

// Guardar carrito en localStorage
function saveCartToStorage(cart) {
    try {
        Storage.set(STORAGE_KEYS.CART, cart);
        return true;
    } catch (error) {
        console.error('Error al guardar el carrito:', error);
        return false;
    }
}

// Actualizar contador del carrito en la página actual
function updateCartCount() {
    const cart = loadCartFromStorage();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    return cartCount;
}

// Añadir producto al carrito
function addToCart(product, category) {
    try {
        localStorage.removeItem('pcbuilder_order_completed');
        localStorage.removeItem('pcbuilder_order_completed_at');
        sessionStorage.removeItem('pcbuilder_order_completed');
        sessionStorage.removeItem('pcbuilder_order_completed_at');
        localStorage.removeItem('pcbuilder_completion_lock');
        sessionStorage.removeItem('pcbuilder_completion_token');
        sessionStorage.removeItem('pcbuilder_completion_token_consumed');
    } catch (_) {}
    const cart = loadCartFromStorage();
    
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex(item => item.id === product.id && item.category === category);
    
    if (existingItemIndex !== -1) {
        // Incrementar cantidad si ya existe
        cart[existingItemIndex].quantity += 1;
    } else {
        // Añadir nuevo producto
        cart.push({
            id: product.id,
            category: category,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    // Guardar en localStorage
    if (saveCartToStorage(cart)) {
        updateCartCount();
        return true;
    }
    
    return false;
}

// Eliminar producto del carrito
function removeFromCart(productId, category) {
    const cart = loadCartFromStorage();
    const initialLength = cart.length;
    
    // Filtrar el producto a eliminar
    const pid = (typeof productId === 'string') ? parseInt(productId, 10) : productId;
    const cat = category || '';
    const updatedCart = cart.filter(item => !(String(item.id) === String(pid) && (item.category || '') === cat));
    
    // Si se eliminó algún elemento, guardar
    if (updatedCart.length < initialLength) {
        saveCartToStorage(updatedCart);
        updateCartCount();
        return true;
    }
    
    return false;
}

// Actualizar cantidad de un producto en el carrito
function updateCartQuantity(productId, category, newQuantity) {
    if (newQuantity < 1) {
        return removeFromCart(productId, category);
    }
    
    const cart = loadCartFromStorage();
    const pid = (typeof productId === 'string') ? parseInt(productId, 10) : productId;
    const cat = category || '';
    const itemIndex = cart.findIndex(item => String(item.id) === String(pid) && (item.category || '') === cat);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = Math.max(1, parseInt(newQuantity, 10) || 1);
        saveCartToStorage(cart);
        updateCartCount();
        return true;
    }
    
    return false;
}

// Obtener el total del carrito
function getCartTotal() {
    const cart = loadCartFromStorage();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Vaciar el carrito completamente
function clearCart() {
    if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
        saveCartToStorage([]);
        updateCartCount();
        return true;
    }
    return false;
}

// Obtener estadísticas del carrito
function getCartStats() {
    const cart = loadCartFromStorage();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = getCartTotal();
    const uniqueProducts = cart.length;
    
    return {
        totalItems,
        totalPrice,
        uniqueProducts,
        items: cart
    };
}

// Mostrar notificación (función auxiliar)
function showNotification(message, type = 'success') {
    // Contenedor (para apilar notificaciones sin que se monten)
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 3000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }

    // Crear notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        background-color: ${type === 'success' ? '#38a169' : type === 'error' ? '#e53e3e' : '#d69e2e'};
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        animation: slideIn 0.3s ease-out;
        pointer-events: auto;
        max-width: 380px;
    `;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-circle' : 
                 'fa-info-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}" style="margin-right: 10px; font-size: 20px;"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) notification.parentNode.removeChild(notification);

            // Si ya no quedan notificaciones, remover el contenedor
            if (container && container.children.length === 0 && container.parentNode) {
                container.parentNode.removeChild(container);
            }
        }, 300);
    }, 3000);
    
    // Añadir estilos de animación si no existen
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Inicializar carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});