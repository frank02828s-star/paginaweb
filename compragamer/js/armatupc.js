/* =====================================================
   PC BUILDER JAVASCRIPT
   ===================================================== */

// Build state
let currentComponent = 'procesadores';
let selectedComponents = {};
let currentBrandFilter = 'all';

// Component names for display
const componentNames = {
    procesadores: 'Procesador',
    mothers: 'Motherboard',
    coolers: 'Cooler CPU',
    memorias: 'Memoria RAM',
    placas: 'Placa de Video',
    almacenamiento: 'Almacenamiento',
    fuentes: 'Fuente',
    gabinetes: 'Gabinete'
};

// Component order
const componentOrder = ['procesadores', 'mothers', 'coolers', 'memorias', 'placas', 'almacenamiento', 'fuentes', 'gabinetes'];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initComponentNav();
    initBrandFilter();
    loadComponents();
    updateBuildSummary();
});

// Initialize component navigation
function initComponentNav() {
    const componentBtns = document.querySelectorAll('.component-btn');

    componentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            componentBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            currentComponent = this.dataset.component;
            updatePageTitle();
            loadComponents();
        });
    });
}

// Update page title based on current component
function updatePageTitle() {
    const title = document.querySelector('.page-header h1');
    const info = document.querySelector('.info-container p');

    if (title) {
        title.textContent = `Elegí tu ${componentNames[currentComponent]}`;
    }

    if (info) {
        const descriptions = {
            procesadores: 'Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.',
            mothers: 'El motherboard es la placa base donde se conectan todos los componentes de tu PC. Elegí uno compatible con tu procesador.',
            coolers: 'El cooler mantiene tu procesador a temperaturas seguras. Elegí uno según el TDP de tu procesador.',
            memorias: 'La memoria RAM permite ejecutar programas y juegos. Más RAM = mejor multitarea.',
            placas: 'La placa de video es fundamental para gaming y diseño. Elegí según la resolución y FPS que buscás.',
            almacenamiento: 'El almacenamiento guarda tus archivos y programas. Los SSD son más rápidos que los HDD.',
            fuentes: 'La fuente alimenta todos tus componentes. Elegí una con suficiente potencia y certificación 80+.',
            gabinetes: 'El gabinete aloja todos tus componentes. Considerá el tamaño y el flujo de aire.'
        };

        info.textContent = descriptions[currentComponent] || '';
    }
}

// Initialize brand filter
function initBrandFilter() {
    const brandBtns = document.querySelectorAll('.brand-filter .brand-btn');

    brandBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            brandBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            currentBrandFilter = this.dataset.brand;
            loadComponents();
        });
    });
}

// Load components for current category
function loadComponents() {
    const grid = document.getElementById('componentsGrid');
    if (!grid) return;

    let components = pcComponents[currentComponent] || [];

    // Filter by brand if not "all"
    if (currentBrandFilter !== 'all' && currentComponent === 'procesadores') {
        components = components.filter(c => c.brand === currentBrandFilter);
    }

    // Sort by price
    components.sort((a, b) => a.price - b.price);

    grid.innerHTML = components.map(component => {
        const isSelected = selectedComponents[currentComponent]?.id === component.id;

        return `
            <div class="component-card ${isSelected ? 'selected' : ''}" data-id="${component.id}">
                <div class="component-image">
                    <img src="${PLACEHOLDER_IMG}" alt="${component.name}">
                </div>
                <div class="component-info">
                    <h3 class="component-title">${component.name}</h3>
                    <span class="component-price">${formatPrice(component.price)}</span>
                    <div class="component-status">
                        <span class="material-icons">check_circle</span>
                        <span>Compatible</span>
                    </div>
                </div>
                <div class="component-actions">
                    <button class="info-btn" title="Ver detalles">
                        <span class="material-icons">info</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers
    grid.querySelectorAll('.component-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Ignore if clicking info button
            if (e.target.closest('.info-btn')) return;

            const componentId = this.dataset.id;
            selectComponent(componentId);
        });
    });
}

// Select a component
function selectComponent(componentId) {
    const components = pcComponents[currentComponent] || [];
    const component = components.find(c => c.id === componentId);

    if (!component) return;

    // Toggle selection
    if (selectedComponents[currentComponent]?.id === componentId) {
        delete selectedComponents[currentComponent];
    } else {
        selectedComponents[currentComponent] = component;
    }

    // Update UI
    loadComponents();
    updateBuildSummary();
    updateComponentNav();

    // Show notification
    if (selectedComponents[currentComponent]) {
        showNotification(`${componentNames[currentComponent]} agregado a tu build`);
    }
}

// Update component navigation to show selected
function updateComponentNav() {
    const componentBtns = document.querySelectorAll('.component-btn');

    componentBtns.forEach(btn => {
        const comp = btn.dataset.component;
        if (selectedComponents[comp]) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

// Update build summary
function updateBuildSummary() {
    const totalEl = document.getElementById('buildTotal');
    const wattsEl = document.getElementById('totalWatts');

    let total = 0;
    let watts = 0;

    Object.values(selectedComponents).forEach(component => {
        total += component.price;
        if (component.watts) {
            watts += component.watts;
        }
    });

    // Estimate watts based on components
    if (selectedComponents.procesadores) {
        watts += 125; // Average CPU TDP
    }
    if (selectedComponents.placas) {
        watts += 200; // Average GPU TDP
    }
    if (selectedComponents.memorias) {
        watts += 10;
    }
    if (selectedComponents.almacenamiento) {
        watts += 10;
    }

    if (totalEl) totalEl.textContent = formatPrice(total);
    if (wattsEl) wattsEl.textContent = watts;
}

// Navigation helpers
function goToPreviousComponent() {
    const currentIndex = componentOrder.indexOf(currentComponent);
    if (currentIndex > 0) {
        currentComponent = componentOrder[currentIndex - 1];
        updateActiveComponent();
    }
}

function goToNextComponent() {
    const currentIndex = componentOrder.indexOf(currentComponent);
    if (currentIndex < componentOrder.length - 1) {
        currentComponent = componentOrder[currentIndex + 1];
        updateActiveComponent();
    }
}

function updateActiveComponent() {
    const componentBtns = document.querySelectorAll('.component-btn');
    componentBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.component === currentComponent) {
            btn.classList.add('active');
        }
    });

    updatePageTitle();
    loadComponents();
}

// Make formatPrice available if not already
if (typeof formatPrice !== 'function') {
    function formatPrice(price) {
        return '$' + price.toLocaleString('es-AR');
    }
}
