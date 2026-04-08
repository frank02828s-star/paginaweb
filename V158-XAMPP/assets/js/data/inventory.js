// products.js - Base de datos de productos para PCBuilder

const productsData = {
    cpu: [
        { 
            id: 1, 
            name: "AMD Ryzen 7 5800X", 
            price: 299, 
            description: "Procesador de 8 núcleos y 16 hilos para gaming y productividad.",
            socket: "AM4", 
            cores: 8, 
            threads: 16,
            image: "fa-microchip",
            specs: "Socket AM4 | 8 núcleos | 16 hilos | 3.8GHz base | 4.7GHz boost",
            brand: "AMD",
            stock: 15,
            rating: 4.8
        },
        { 
            id: 2, 
            name: "Intel Core i7-12700K", 
            price: 349, 
            description: "Procesador de 12 núcleos con arquitectura híbrida para máximo rendimiento.",
            socket: "LGA1700", 
            cores: 12, 
            threads: 20,
            image: "fa-microchip",
            specs: "Socket LGA1700 | 12 núcleos | 20 hilos | 3.6GHz base | 5.0GHz boost",
            brand: "Intel",
            stock: 8,
            rating: 4.9
        },
        { 
            id: 3, 
            name: "AMD Ryzen 5 5600X", 
            price: 199, 
            description: "Excelente relación calidad-precio para gaming a 1080p y 1440p.",
            socket: "AM4", 
            cores: 6, 
            threads: 12,
            image: "fa-microchip",
            specs: "Socket AM4 | 6 núcleos | 12 hilos | 3.7GHz base | 4.6GHz boost",
            brand: "AMD",
            stock: 22,
            rating: 4.7
        },
        { 
            id: 4, 
            name: "Intel Core i5-12600K", 
            price: 279, 
            description: "Procesador de 10 núcleos ideal para gaming y streaming.",
            socket: "LGA1700", 
            cores: 10, 
            threads: 16,
            image: "fa-microchip",
            specs: "Socket LGA1700 | 10 núcleos | 16 hilos | 3.7GHz base | 4.9GHz boost",
            brand: "Intel",
            stock: 12,
            rating: 4.6
        }
    ],
    motherboard: [
        { 
            id: 1, 
            name: "ASUS ROG Strix B550-F", 
            price: 179, 
            description: "Tarjeta madre ATX con WiFi 6 y soporte PCIe 4.0 para Ryzen.",
            socket: "AM4", 
            chipset: "B550", 
            formFactor: "ATX",
            image: "fa-server",
            specs: "Socket AM4 | Chipset B550 | Formato ATX | WiFi 6 | PCIe 4.0",
            brand: "ASUS",
            stock: 10,
            rating: 4.7
        },
        { 
            id: 2, 
            name: "MSI MPG Z690 Edge", 
            price: 289, 
            description: "Tarjeta madre para Intel de 12ª y 13ª generación con DDR5.",
            socket: "LGA1700", 
            chipset: "Z690", 
            formFactor: "ATX",
            image: "fa-server",
            specs: "Socket LGA1700 | Chipset Z690 | Formato ATX | DDR5 | PCIe 5.0",
            brand: "MSI",
            stock: 6,
            rating: 4.8
        },
        { 
            id: 3, 
            name: "Gigabyte B660M DS3H", 
            price: 119, 
            description: "Tarjeta madre Micro-ATX económica para builds Intel.",
            socket: "LGA1700", 
            chipset: "B660", 
            formFactor: "Micro-ATX",
            image: "fa-server",
            specs: "Socket LGA1700 | Chipset B660 | Formato Micro-ATX | DDR4",
            brand: "Gigabyte",
            stock: 18,
            rating: 4.3
        },
        { 
            id: 4, 
            name: "ASRock B550M Pro4", 
            price: 129, 
            description: "Tarjeta madre Micro-ATX con buen conjunto de características para AMD.",
            socket: "AM4", 
            chipset: "B550", 
            formFactor: "Micro-ATX",
            image: "fa-server",
            specs: "Socket AM4 | Chipset B550 | Formato Micro-ATX | 2x M.2 | USB 3.2 Gen2",
            brand: "ASRock",
            stock: 14,
            rating: 4.5
        }
    ],
    ram: [
        { 
            id: 1, 
            name: "Corsair Vengeance RGB 16GB", 
            price: 89, 
            description: "Kit de memoria DDR4 con iluminación RGB personalizable.",
            type: "DDR4", 
            speed: 3600, 
            capacity: 16,
            image: "fa-memory",
            specs: "DDR4 | 16GB (2x8GB) | 3600MHz | CL18 | RGB",
            brand: "Corsair",
            stock: 25,
            rating: 4.6
        },
        { 
            id: 2, 
            name: "G.Skill Trident Z 32GB", 
            price: 129, 
            description: "Kit de memoria DDR4 de alto rendimiento con disipador de aluminio.",
            type: "DDR4", 
            speed: 3200, 
            capacity: 32,
            image: "fa-memory",
            specs: "DDR4 | 32GB (2x16GB) | 3200MHz | CL16 | RGB",
            brand: "G.Skill",
            stock: 9,
            rating: 4.8
        },
        { 
            id: 3, 
            name: "Crucial Ballistix 16GB", 
            price: 75, 
            description: "Memoria DDR4 de alto rendimiento sin RGB para builds limpias.",
            type: "DDR4", 
            speed: 3200, 
            capacity: 16,
            image: "fa-memory",
            specs: "DDR4 | 16GB (2x8GB) | 3200MHz | CL16 | Sin RGB",
            brand: "Crucial",
            stock: 20,
            rating: 4.4
        },
        { 
            id: 4, 
            name: "Kingston Fury Beast 32GB", 
            price: 189, 
            description: "Kit de memoria DDR5 de nueva generación para plataformas Intel.",
            type: "DDR5", 
            speed: 5200, 
            capacity: 32,
            image: "fa-memory",
            specs: "DDR5 | 32GB (2x16GB) | 5200MHz | CL40 | Compatible Intel/AMD",
            brand: "Kingston",
            stock: 7,
            rating: 4.7
        }
    ],
    gpu: [
        { 
            id: 1, 
            name: "NVIDIA GeForce RTX 3080 10GB", 
            price: 799, 
            description: "Tarjeta gráfica de gama alta para gaming en 4K y ray tracing.",
            vram: 10, 
            power: 320,
            image: "fa-gamepad",
            specs: "10GB GDDR6X | 8704 núcleos CUDA | Ray Tracing | DLSS",
            brand: "NVIDIA",
            stock: 4,
            rating: 4.9
        },
        { 
            id: 2, 
            name: "AMD Radeon RX 6800 XT 16GB", 
            price: 649, 
            description: "Tarjeta gráfica AMD de alto rendimiento con 16GB de VRAM.",
            vram: 16, 
            power: 300,
            image: "fa-gamepad",
            specs: "16GB GDDR6 | 4608 núcleos | Ray Accelerators | FidelityFX",
            brand: "AMD",
            stock: 6,
            rating: 4.8
        },
        { 
            id: 3, 
            name: "NVIDIA GeForce RTX 3070 8GB", 
            price: 499, 
            description: "Excelente rendimiento en 1440p con soporte para ray tracing.",
            vram: 8, 
            power: 220,
            image: "fa-gamepad",
            specs: "8GB GDDR6 | 5888 núcleos CUDA | Ray Tracing | DLSS",
            brand: "NVIDIA",
            stock: 8,
            rating: 4.7
        },
        { 
            id: 4, 
            name: "AMD Radeon RX 6700 XT 12GB", 
            price: 479, 
            description: "Tarjeta gráfica ideal para gaming en 1440p a alta tasa de refresco.",
            vram: 12, 
            power: 230,
            image: "fa-gamepad",
            specs: "12GB GDDR6 | 2560 núcleos | Ray Tracing | FSR",
            brand: "AMD",
            stock: 10,
            rating: 4.6
        }
    ],
    storage: [
        { 
            id: 1, 
            name: "Samsung 970 EVO Plus 1TB", 
            price: 119, 
            description: "SSD NVMe M.2 de alto rendimiento con velocidades de hasta 3500MB/s.",
            type: "NVMe SSD", 
            capacity: 1000, 
            speed: 3500,
            image: "fa-hdd",
            specs: "NVMe M.2 | 1TB | 3500MB/s lectura | 3300MB/s escritura",
            brand: "Samsung",
            stock: 15,
            rating: 4.9
        },
        { 
            id: 2, 
            name: "WD Blue SN570 1TB", 
            price: 89, 
            description: "SSD NVMe M.2 económico pero con buen rendimiento para sistemas de arranque.",
            type: "NVMe SSD", 
            capacity: 1000, 
            speed: 3500,
            image: "fa-hdd",
            specs: "NVMe M.2 | 1TB | 3500MB/s lectura | Ideal para sistema",
            brand: "Western Digital",
            stock: 22,
            rating: 4.5
        },
        { 
            id: 3, 
            name: "Seagate Barracuda 2TB", 
            price: 59, 
            description: "Disco duro de 2TB para almacenamiento masivo de juegos y archivos.",
            type: "HDD", 
            capacity: 2000, 
            speed: 7200,
            image: "fa-hdd",
            specs: "HDD 3.5\" | 2TB | 7200RPM | 256MB caché",
            brand: "Seagate",
            stock: 30,
            rating: 4.3
        },
        { 
            id: 4, 
            name: "Crucial MX500 1TB", 
            price: 79, 
            description: "SSD SATA confiable con cifrado de hardware para mayor seguridad.",
            type: "SATA SSD", 
            capacity: 1000, 
            speed: 560,
            image: "fa-hdd",
            specs: "SATA 2.5\" | 1TB | 560MB/s lectura | Cifrado de hardware",
            brand: "Crucial",
            stock: 18,
            rating: 4.6
        }
    ],
    psu: [
        { 
            id: 1, 
            name: "Corsair RM750x 750W", 
            price: 129, 
            description: "Fuente de alimentación 80 Plus Gold totalmente modular.",
            wattage: 750, 
            certification: "80 Plus Gold",
            image: "fa-plug",
            specs: "750W | 80 Plus Gold | Totalmente modular | Ventilador silencioso",
            brand: "Corsair",
            stock: 12,
            rating: 4.8
        },
        { 
            id: 2, 
            name: "Seasonic Focus GX-850 850W", 
            price: 149, 
            description: "Fuente de alimentación de alta calidad con 10 años de garantía.",
            wattage: 850, 
            certification: "80 Plus Gold",
            image: "fa-plug",
            specs: "850W | 80 Plus Gold | Totalmente modular | 10 años garantía",
            brand: "Seasonic",
            stock: 8,
            rating: 4.9
        },
        { 
            id: 3, 
            name: "EVGA 600W 80 Plus", 
            price: 69, 
            description: "Fuente de alimentación económica con certificación 80 Plus.",
            wattage: 600, 
            certification: "80 Plus",
            image: "fa-plug",
            specs: "600W | 80 Plus | No modular | Ideal para builds económicas",
            brand: "EVGA",
            stock: 20,
            rating: 4.2
        }
    ],
    case: [
        { 
            id: 1, 
            name: "NZXT H510 Flow", 
            price: 89, 
            description: "Chasis ATX con panel frontal de malla para mejor flujo de aire.",
            formFactor: "ATX Mid-Tower", 
            fans: 2,
            image: "fa-desktop",
            specs: "ATX Mid-Tower | Panel frontal de malla | 2 ventiladores | USB 3.2",
            brand: "NZXT",
            stock: 14,
            rating: 4.5
        },
        { 
            id: 2, 
            name: "Fractal Design Meshify C", 
            price: 99, 
            description: "Chasis compacto con excelente flujo de aire y gestión de cables.",
            formFactor: "ATX Mid-Tower", 
            fans: 2,
            image: "fa-desktop",
            specs: "ATX Mid-Tower | Panel frontal de malla | 2 ventiladores | Compacto",
            brand: "Fractal Design",
            stock: 9,
            rating: 4.7
        },
        { 
            id: 3, 
            name: "Corsair 4000D Airflow", 
            price: 109, 
            description: "Chasis con excelente flujo de aire y diseño moderno.",
            formFactor: "ATX Mid-Tower", 
            fans: 2,
            image: "fa-desktop",
            specs: "ATX Mid-Tower | Panel frontal perforado | 2 ventiladores | USB-C",
            brand: "Corsair",
            stock: 11,
            rating: 4.8
        }
    ],
    cooling: [
        { 
            id: 1, 
            name: "Noctua NH-D15", 
            price: 99, 
            description: "Refrigerador de aire de doble torre con excelente rendimiento.",
            type: "Air Cooler", 
            fans: 2,
            image: "fa-fan",
            specs: "Refrigeración por aire | Doble torre | 2 ventiladores | Silencioso",
            brand: "Noctua",
            stock: 10,
            rating: 4.9
        },
        { 
            id: 2, 
            name: "Corsair iCUE H100i RGB", 
            price: 139, 
            description: "Refrigeración líquida AIO de 240mm con control RGB.",
            type: "Liquid Cooler", 
            fans: 2,
            image: "fa-fan",
            specs: "AIO 240mm | Refrigeración líquida | 2 ventiladores RGB | Software iCUE",
            brand: "Corsair",
            stock: 7,
            rating: 4.7
        },
        { 
            id: 3, 
            name: "Cooler Master Hyper 212", 
            price: 39, 
            description: "Refrigerador de aire económico con buen rendimiento.",
            type: "Air Cooler", 
            fans: 1,
            image: "fa-fan",
            specs: "Refrigeración por aire | Torre única | 1 ventilador | Económico",
            brand: "Cooler Master",
            stock: 25,
            rating: 4.4
        }
    ]
};

// Categorías para el catálogo
const catalogCategories = [
    { id: "cpu", name: "Procesadores", icon: "fa-microchip", color: "#4299e1" },
    { id: "motherboard", name: "Tarjetas Madre", icon: "fa-server", color: "#dd6b20" },
    { id: "ram", name: "Memoria RAM", icon: "fa-memory", color: "#38a169" },
    { id: "gpu", name: "Tarjetas Gráficas", icon: "fa-gamepad", color: "#805ad5" },
    { id: "storage", name: "Almacenamiento", icon: "fa-hdd", color: "#d69e2e" },
    { id: "psu", name: "Fuentes de Poder", icon: "fa-plug", color: "#e53e3e" },
    { id: "case", name: "Gabinetes", icon: "fa-desktop", color: "#4a5568" },
    { id: "cooling", name: "Refrigeración", icon: "fa-fan", color: "#3182ce" }
];

// Función para obtener productos por categoría
function getProductsByCategory(category) {
    return productsData[category] || [];
}

// Función para obtener todas las categorías
function getAllCategories() {
    return catalogCategories;
}

// Función para obtener producto por ID y categoría
function getProductById(category, id) {
    const categoryProducts = productsData[category];
    if (!categoryProducts) return null;
    
    return categoryProducts.find(product => product.id === id) || null;
}

// Función para obtener el nombre de la categoría
function getCategoryName(categoryId) {
    const category = catalogCategories.find(c => c.id === categoryId);
    return category ? category.name : "Categoría Desconocida";
}

// Exportar funciones y datos (para usar en otros archivos)
if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = {
        productsData,
        catalogCategories,
        getProductsByCategory,
        getAllCategories,
        getProductById,
        getCategoryName
    };
}