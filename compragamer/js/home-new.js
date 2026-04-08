/* =====================================================
   COMPRA GAMER - NEW HOME PAGE JAVASCRIPT
   ===================================================== */

// Product data for the new design
const offerProducts = [
    {
        id: 201,
        title: 'MSI GeForce RTX 4070 Juego Ventus 2X OC 12GB GDDR6X',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45274_Placa_de_Video_XFX_Radeon_RX_9070_XT_16GB_GDDR6_Swift_Triple_Fan_Gaming_Edition_171a93d4-med.jpg',
        price: 699900,
        badge: 'HOT'
    },
    {
        id: 202,
        title: 'AMD Ryzen 5 7600X 6 Núcleos 12 Threads + AM5',
        image: PLACEHOLDER_IMG,
        price: 299990,
        badge: 'HOT'
    },
    {
        id: 203,
        title: 'ASUS TUF Gaming B760 Pro WiFi AM5 ATX DDR5',
        image: PLACEHOLDER_IMG,
        price: 229900,
        badge: 'HOT'
    },
    {
        id: 204,
        title: 'Corsair Vengeance RGB RT DDR5 32GB DDR5 6000MHz CL36',
        image: PLACEHOLDER_IMG,
        price: 149900,
        badge: null
    },
    {
        id: 205,
        title: 'Samsung 990 PRO 1TB NVMe PCIe 4.0 M.2',
        image: PLACEHOLDER_IMG,
        price: 119900,
        badge: null
    },
    {
        id: 206,
        title: 'Monitor Gamer LG UltraGear 27" QHD 180Hz IPS 1ms',
        image: PLACEHOLDER_IMG,
        price: 229900,
        badge: 'HOT'
    }
];

const laptopProducts = [
    {
        id: 301,
        title: 'Logitech G Pro X Superlight 2 Wireless Lightspeed White',
        image: PLACEHOLDER_IMG,
        price: 199900,
        badge: 'NUEVO'
    },
    {
        id: 302,
        title: 'Raditagon K562 Aluminio RGB Switch Outemu Blue',
        image: PLACEHOLDER_IMG,
        price: 49900,
        badge: 'GAMER'
    },
    {
        id: 303,
        title: 'HyperX Cloud III Wireless Black',
        image: PLACEHOLDER_IMG,
        price: 129900,
        badge: 'OFERTA'
    },
    {
        id: 304,
        title: 'WD Black SN850X 2TB NVMe PCIe 4.0',
        image: PLACEHOLDER_IMG,
        price: 199900,
        badge: 'GAMER'
    },
    {
        id: 305,
        title: 'Gigabyte Aero 16 OLED 16306 RTX 4070 16"',
        image: PLACEHOLDER_IMG,
        price: 499900,
        badge: null
    },
    {
        id: 306,
        title: 'ASUS ROG Strix G16 G16 RTX 5080 1600 32GB DDR5 1TB',
        image: PLACEHOLDER_IMG,
        price: 1499900,
        badge: null
    }
];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    loadOfferProducts();
    loadLaptopProducts();
});

// Load offer products
function loadOfferProducts() {
    const grid = document.getElementById('offersGrid');
    if (!grid) return;

    grid.innerHTML = offerProducts.map(product => createProductCardNew(product)).join('');

    // Add click handlers
    grid.querySelectorAll('.product-card-new').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId, offerProducts);
        });
    });
}

// Load laptop products
function loadLaptopProducts() {
    const grid = document.getElementById('laptopsGrid');
    if (!grid) return;

    grid.innerHTML = laptopProducts.map(product => createProductCardNew(product)).join('');

    // Add click handlers
    grid.querySelectorAll('.product-card-new').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId, laptopProducts);
        });
    });
}

// Create product card HTML for new design
function createProductCardNew(product) {
    return `
        <div class="product-card-new" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-image-new">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='${PLACEHOLDER_IMG}'">
            </div>
            <p class="product-title-new">${product.title}</p>
            <div class="product-price-new">
                ${formatPrice(product.price)}
                ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
        </div>
    `;
}

// Make sure formatPrice is available
if (typeof formatPrice !== 'function') {
    function formatPrice(price) {
        return '$' + price.toLocaleString('es-AR');
    }
}
