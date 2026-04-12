/* =====================================================
   CPU STORE VZLA - HOME V2 JAVASCRIPT
   ===================================================== */

// Products data
const homeOfferProducts = [
    {
        id: 201,
        title: 'MSI GeForce RTX 4070 Juego Ventus 2X OC 12GB GDDR6X',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45274_Placa_de_Video_XFX_Radeon_RX_9070_XT_16GB_GDDR6_Swift_Triple_Fan_Gaming_Edition_171a93d4-med.jpg',
        price: 699900,
        oldPrice: 799900,
        badge: 'PROMO',
        badgeType: 'promo'
    },
    {
        id: 202,
        title: 'AMD Ryzen 5 7600X 6 Núcleos 12 Threads + AM5',
        image: PLACEHOLDER_IMG,
        price: 299990,
        oldPrice: null,
        badge: 'HOT',
        badgeType: 'hot'
    },
    {
        id: 203,
        title: 'ASUS TUF Gaming B760 Pro WiFi AM5 ATX DDR5',
        image: PLACEHOLDER_IMG,
        price: 229900,
        oldPrice: 279900,
        badge: 'PROMO',
        badgeType: 'promo'
    },
    {
        id: 204,
        title: 'Corsair Vengeance RGB RT DDR5 32GB DDR5 6000MHz CL36',
        image: PLACEHOLDER_IMG,
        price: 149900,
        oldPrice: null,
        badge: 'GAMER',
        badgeType: 'gamer'
    },
    {
        id: 205,
        title: 'Samsung 990 PRO 1TB NVMe PCIe 4.0 M.2',
        image: PLACEHOLDER_IMG,
        price: 119900,
        oldPrice: 149900,
        badge: 'OFERTA',
        badgeType: 'oferta'
    },
    {
        id: 206,
        title: 'Monitor Gamer LG UltraGear 27" QHD 180Hz IPS 1ms',
        image: PLACEHOLDER_IMG,
        price: 229900,
        oldPrice: null,
        badge: 'HOT',
        badgeType: 'hot'
    }
];

const homeLaptopProducts = [
    {
        id: 301,
        title: 'Logitech G Pro X Superlight 2 Wireless Lightspeed White',
        image: PLACEHOLDER_IMG,
        price: 199900,
        oldPrice: null,
        badge: 'NUEVO',
        badgeType: 'nuevo'
    },
    {
        id: 302,
        title: 'Redragon K562 Aluminio RGB Switch Outemu Blue',
        image: PLACEHOLDER_IMG,
        price: 49900,
        oldPrice: null,
        badge: 'GAMER',
        badgeType: 'gamer'
    },
    {
        id: 303,
        title: 'HyperX Cloud III Wireless Black',
        image: PLACEHOLDER_IMG,
        price: 129900,
        oldPrice: 159900,
        badge: 'PROMO',
        badgeType: 'promo'
    },
    {
        id: 304,
        title: 'WD Black SN850X 2TB NVMe PCIe 4.0',
        image: PLACEHOLDER_IMG,
        price: 199900,
        oldPrice: null,
        badge: 'GAMER',
        badgeType: 'gamer'
    },
    {
        id: 305,
        title: 'Gigabyte Aero 16 OLED 16" RTX 4070',
        image: PLACEHOLDER_IMG,
        price: 499900,
        oldPrice: 599900,
        badge: 'DESCUENTO',
        badgeType: 'descuento'
    },
    {
        id: 306,
        title: 'ASUS ROG Strix G16 RTX 5080 32GB DDR5 1TB',
        image: PLACEHOLDER_IMG,
        price: 1499900,
        oldPrice: null,
        badge: 'HOT',
        badgeType: 'hot'
    }
];

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initMainSlider();
    loadHomeOffers();
    loadHomeLaptops();
});

// Main Slider
function initMainSlider() {
    const slider = document.getElementById('mainSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    let autoSlideInterval;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Dot click events
    dots.forEach((dot, index) => {
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

// Load offer products as a horizontal snap slider
function loadHomeOffers() {
    var track = document.getElementById('offersSliderTrack');
    var dotsWrap = document.getElementById('offersSliderDots');
    var prevBtn = document.getElementById('offersPrev');
    var nextBtn = document.getElementById('offersNext');
    if (!track) return;

    var productsPerSlide = 6;
    var MIN_SLIDES = 4;
    var totalSlides = Math.ceil(homeOfferProducts.length / productsPerSlide) || 1;
    if (totalSlides < MIN_SLIDES) totalSlides = MIN_SLIDES;

    track.innerHTML = '';
    for (var s = 0; s < totalSlides; s++) {
        var slide = document.createElement('div');
        slide.className = 'offers-slide';
        var grid = document.createElement('div');
        grid.className = 'products-grid';
        for (var p = 0; p < productsPerSlide; p++) {
            var idx = (s * productsPerSlide + p) % homeOfferProducts.length;
            grid.innerHTML += createHomeProductCard(homeOfferProducts[idx]);
        }
        slide.appendChild(grid);
        track.appendChild(slide);
    }

    // Add click handlers
    track.querySelectorAll('.product-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.add-to-cart')) return;
            window.location.href = '/productos/?id=' + this.dataset.id;
        });
    });

    // Dots
    if (dotsWrap) {
        dotsWrap.innerHTML = '';
        for (var d = 0; d < totalSlides; d++) {
            var dot = document.createElement('span');
            dot.className = 'offers-dot' + (d === 0 ? ' active' : '');
            dot.setAttribute('data-slide', d);
            dotsWrap.appendChild(dot);
        }
    }

    var currentOfferSlide = 0;
    function goToOfferSlide(idx) {
        var dots = dotsWrap ? dotsWrap.querySelectorAll('.offers-dot') : [];
        dots.forEach(function(dt) { dt.classList.remove('active'); });
        if (dots[idx]) dots[idx].classList.add('active');
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        currentOfferSlide = idx;
    }

    if (prevBtn) prevBtn.addEventListener('click', function() {
        var prev = (currentOfferSlide - 1 + totalSlides) % totalSlides;
        goToOfferSlide(prev);
    });
    if (nextBtn) nextBtn.addEventListener('click', function() {
        var next = (currentOfferSlide + 1) % totalSlides;
        goToOfferSlide(next);
    });
    if (dotsWrap) dotsWrap.addEventListener('click', function(e) {
        var dot = e.target.closest('.offers-dot');
        if (dot) goToOfferSlide(parseInt(dot.getAttribute('data-slide'), 10));
    });

    // Auto advance every 5 seconds
    setInterval(function() {
        goToOfferSlide((currentOfferSlide + 1) % totalSlides);
    }, 5000);
}

// Load laptop products
function loadHomeLaptops() {
    const grid = document.getElementById('laptopsGrid');
    if (!grid) return;

    grid.innerHTML = homeLaptopProducts.map(product => createHomeProductCard(product)).join('');

    // Add click handlers
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.add-to-cart')) return;
            window.location.href = `/productos/?id=${this.dataset.id}`;
        });
    });
}

// Create product card HTML with proper badge classes
function createHomeProductCard(product) {
    const badgeClass = product.badgeType ? ` ${product.badgeType}` : '';

    return `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge${badgeClass}">${product.badge}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='${PLACEHOLDER_IMG}'">
            </div>
            <p class="product-title">${product.title}</p>
            <div>
                <span class="product-price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
        </div>
    `;
}

// Ensure formatPrice is available
if (typeof formatPrice !== 'function') {
    function formatPrice(price) {
        return '$' + price.toLocaleString('es-AR');
    }
}
