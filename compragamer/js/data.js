/* =====================================================
   COMPRA GAMER CLONE - DATA
   ===================================================== */

// Product placeholder image
const PLACEHOLDER_IMG = 'https://ext.same-assets.com/4025281442/1062164900.svg';

// Featured Products Data
const featuredProducts = {
    perifericos: [
        {
            id: 1,
            title: 'Auriculares Corsair Virtuoso MAX Wireless 2.4Ghz Bluetooth Premium Dolby Atmos Black',
            image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_47729_Auriculares_Corsair_Virtuoso_MAX_Wireless_2.4Ghz_Bluetooth_Premium_Dolby_Atmos_Black_USB-C_60Hs_PC_PS_NINTENDO_MAC_df7f3957-mini.jpg',
            price: 654580,
            oldPrice: 684550,
            discount: 29970,
            category: 'Periféricos',
            subcategory: 'Auriculares'
        },
        {
            id: 2,
            title: 'Teclado Mecanico Corsair K100 RGB Premium Switch Cherry MX Speed Silver USB',
            image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33015_Teclado_Mecanico_Corsair_K100_RGB_Premium_Switch_Cherry_MX_Speed_Silver_USB_bd4f635d-mini.jpg',
            price: 231600,
            oldPrice: null,
            discount: null,
            category: 'Periféricos',
            subcategory: 'Teclados'
        },
        {
            id: 3,
            title: 'Teclado Mecanico Corsair K70 PRO MINI SlipStream Wireless 2.4Ghz Bluetooth RGB',
            image: PLACEHOLDER_IMG,
            price: 156350,
            oldPrice: null,
            discount: null,
            category: 'Periféricos',
            subcategory: 'Teclados'
        },
        {
            id: 4,
            title: 'Teclado Mecanico Corsair K70 Core TKL Wireless 2.4Ghz SlipStream Bluetooth RGB',
            image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_47718_Teclado_Mecanico_Corsair_K70_Core_TKL_Wireless_2.4Ghz_SlipStream_Bluetooth_Switch_MLX_RED_V2_RGB_890Hs_febf508b-mini.jpg',
            price: 193776,
            oldPrice: 214250,
            discount: 20474,
            category: 'Periféricos',
            subcategory: 'Teclados'
        },
        {
            id: 5,
            title: 'Auriculares Corsair HS80 Premium SlipStream Wireless 2.4Ghz Dolby Atmos White RGB',
            image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40173_Auriculares_Corsair_HS80_Premium_SlipStream_Wireless_2.4Ghz_Dolby_Atmos_White_RGB_20Hs__10a81acb-mini.jpg',
            price: 238681,
            oldPrice: 254000,
            discount: 15319,
            category: 'Periféricos',
            subcategory: 'Auriculares'
        },
        {
            id: 6,
            title: 'Auriculares Corsair Virtuoso PRO White PC/PS4/PS5/XBOX',
            image: PLACEHOLDER_IMG,
            price: 342410,
            oldPrice: 353750,
            discount: 11340,
            category: 'Periféricos',
            subcategory: 'Auriculares'
        }
    ],
    monitores: [
        {
            id: 7,
            title: 'Monitor Gamer Samsung Odyssey G9 G91F 49" Dual QHD VA 144Hz',
            image: PLACEHOLDER_IMG,
            price: 1771150,
            oldPrice: null,
            discount: null,
            category: 'Monitores',
            subcategory: 'Monitores y pantallas'
        },
        {
            id: 8,
            title: 'Monitor Gamer ASUS ROG Swift PG27AQN 27" QHD IPS 360Hz',
            image: PLACEHOLDER_IMG,
            price: 1450000,
            oldPrice: 1550000,
            discount: 100000,
            category: 'Monitores',
            subcategory: 'Monitores y pantallas'
        },
        {
            id: 9,
            title: 'Monitor Gamer LG UltraGear 27GP950-B 27" 4K Nano IPS 160Hz',
            image: PLACEHOLDER_IMG,
            price: 890000,
            oldPrice: null,
            discount: null,
            category: 'Monitores',
            subcategory: 'Monitores y pantallas'
        }
    ],
    procesadores: [
        {
            id: 10,
            title: 'Procesador AMD Ryzen 9 9950X 5.7GHz Turbo AM5',
            image: PLACEHOLDER_IMG,
            price: 950450,
            oldPrice: null,
            discount: null,
            category: 'Procesadores',
            subcategory: 'Procesadores AMD'
        },
        {
            id: 11,
            title: 'Procesador Intel Core i9 14900K 6.0GHz Turbo Socket 1700',
            image: PLACEHOLDER_IMG,
            price: 849500,
            oldPrice: null,
            discount: null,
            category: 'Procesadores',
            subcategory: 'Procesadores Intel'
        },
        {
            id: 12,
            title: 'Procesador AMD Ryzen 7 7800X3D 5.0GHz Turbo AM5',
            image: PLACEHOLDER_IMG,
            price: 669750,
            oldPrice: null,
            discount: null,
            category: 'Procesadores',
            subcategory: 'Procesadores AMD'
        }
    ],
    placas: [
        {
            id: 13,
            title: 'Placa de Video XFX Radeon RX 9070 XT 16GB GDDR6 Swift Triple Fan',
            image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45274_Placa_de_Video_XFX_Radeon_RX_9070_XT_16GB_GDDR6_Swift_Triple_Fan_Gaming_Edition_171a93d4-med.jpg',
            price: 1195750,
            oldPrice: null,
            discount: null,
            category: 'Placas de Video',
            subcategory: 'Placas de Video Radeon AMD'
        },
        {
            id: 14,
            title: 'Placa de Video NVIDIA GeForce RTX 5090 24GB Founders Edition',
            image: PLACEHOLDER_IMG,
            price: 3500000,
            oldPrice: null,
            discount: null,
            category: 'Placas de Video',
            subcategory: 'Placas de Video GeForce'
        },
        {
            id: 15,
            title: 'Placa de Video ASUS ROG STRIX RTX 5080 16GB OC',
            image: PLACEHOLDER_IMG,
            price: 2100000,
            oldPrice: 2250000,
            discount: 150000,
            category: 'Placas de Video',
            subcategory: 'Placas de Video GeForce'
        }
    ],
    conectividad: [
        {
            id: 16,
            title: 'Router WiFi 6E ASUS ROG Rapture GT-AXE11000',
            image: PLACEHOLDER_IMG,
            price: 450000,
            oldPrice: null,
            discount: null,
            category: 'Conectividad',
            subcategory: 'Routers WiFi'
        },
        {
            id: 17,
            title: 'Placa de Red WiFi 6E Intel AX210 PCIe',
            image: PLACEHOLDER_IMG,
            price: 45000,
            oldPrice: null,
            discount: null,
            category: 'Conectividad',
            subcategory: 'Placas de red inalámbricas'
        }
    ],
    gabinetes: [
        {
            id: 18,
            title: 'Gabinete HYTE Y70 TOUCH INFINITE Black Vidrio Templado Pantalla Tactil 2.5K',
            image: PLACEHOLDER_IMG,
            price: 617500,
            oldPrice: null,
            discount: null,
            category: 'Gabinetes',
            subcategory: 'Gabinetes'
        },
        {
            id: 19,
            title: 'Gabinete HYTE Y70 TOUCH INFINITE Snow White',
            image: PLACEHOLDER_IMG,
            price: 617500,
            oldPrice: null,
            discount: null,
            category: 'Gabinetes',
            subcategory: 'Gabinetes'
        },
        {
            id: 20,
            title: 'Gabinete Corsair 6500D Airflow TG Super Mid-Tower White',
            image: PLACEHOLDER_IMG,
            price: 320000,
            oldPrice: null,
            discount: null,
            category: 'Gabinetes',
            subcategory: 'Gabinetes'
        }
    ],
    sillas: [
        {
            id: 21,
            title: 'Silla Gamer Razer ISKUR V2 X Tela Negro y Verde (Peso MAX. 136Kg)',
            image: PLACEHOLDER_IMG,
            price: 542850,
            oldPrice: null,
            discount: null,
            category: 'Sillas Gamers',
            subcategory: 'Sillas Gamers'
        },
        {
            id: 22,
            title: 'Silla Gamer Razer ISKUR V2 X Tela Gris y Negro',
            image: PLACEHOLDER_IMG,
            price: 542850,
            oldPrice: null,
            discount: null,
            category: 'Sillas Gamers',
            subcategory: 'Sillas Gamers'
        },
        {
            id: 23,
            title: 'Silla Gamer Secretlab TITAN Evo Black',
            image: PLACEHOLDER_IMG,
            price: 780000,
            oldPrice: 850000,
            discount: 70000,
            category: 'Sillas Gamers',
            subcategory: 'Sillas Gamers'
        }
    ]
};

// Latest Products
const latestProducts = [
    {
        id: 24,
        title: 'Odyssey G9 G91F 49" Dual QHD',
        image: PLACEHOLDER_IMG,
        price: 1771150,
        category: 'Monitores',
        subcategory: 'Monitores y pantallas'
    },
    {
        id: 25,
        title: 'Juga donde quieras - ROG Ally',
        image: PLACEHOLDER_IMG,
        price: 1104990,
        category: 'Consolas',
        subcategory: 'Consolas'
    },
    {
        id: 26,
        title: 'Mother ASUS Z590 GUNDAM EDITION WIFI',
        image: PLACEHOLDER_IMG,
        price: 357650,
        category: 'Mothers',
        subcategory: 'Mothers Intel'
    },
    {
        id: 27,
        title: 'Seasonic 1200W 80+ Platinum',
        image: PLACEHOLDER_IMG,
        price: 549650,
        category: 'Fuentes',
        subcategory: 'Fuentes de alimentación'
    },
    {
        id: 28,
        title: 'Seasonic CORE GX850W 80+ Gold',
        image: PLACEHOLDER_IMG,
        price: 238150,
        category: 'Fuentes',
        subcategory: 'Fuentes de alimentación'
    },
    {
        id: 29,
        title: 'TUF GAMING B850-E WIFI',
        image: PLACEHOLDER_IMG,
        price: 348750,
        category: 'Mothers',
        subcategory: 'Mothers AMD'
    }
];

// MP Banner Products
const mpProducts = [
    {
        id: 30,
        title: 'Notebook ASUS Vivobook 15 15.6" Intel Core Ultra 7 150U 16GB DDR4 SSD 512GB',
        image: PLACEHOLDER_IMG,
        price: 1141200,
        oldPrice: 1521600,
        discount: 380400,
        category: 'Notebooks',
        subcategory: 'Notebooks'
    },
    {
        id: 31,
        title: 'Notebook Samsung Book 4 FHD 15.6" Intel Core i3-1315U 8GB 512GB SSD',
        image: PLACEHOLDER_IMG,
        price: 1325760,
        oldPrice: 1657200,
        discount: 331440,
        category: 'Notebooks',
        subcategory: 'Notebooks'
    },
    {
        id: 32,
        title: 'Notebook Acer Nitro Lite 16 16" Intel I5 13420H 16GB SSD 512GB RTX 4050',
        image: PLACEHOLDER_IMG,
        price: 1690330,
        oldPrice: 1965500,
        discount: 275170,
        category: 'Notebooks',
        subcategory: 'Notebooks Gaming'
    }
];

// Brand Products
const brandProducts = {
    asus: [
        {
            id: 33,
            title: 'Consola ROG Xbox Ally AMD Ryzen AI Z2A 16GB SSD 512GB',
            image: PLACEHOLDER_IMG,
            price: 1104990,
            category: 'Consolas',
            subcategory: 'Consolas'
        },
        {
            id: 34,
            title: 'Microfono Asus ROG STRIX Carnyx RGB AuraSync USB-C White',
            image: PLACEHOLDER_IMG,
            price: 280050,
            category: 'Periféricos',
            subcategory: 'Micrófonos'
        },
        {
            id: 35,
            title: 'Mother ASUS TUF GAMING X870-PLUS WIFI DDR5 AM5',
            image: PLACEHOLDER_IMG,
            price: 518150,
            category: 'Mothers',
            subcategory: 'Mothers AMD'
        },
        {
            id: 36,
            title: 'Notebook ASUS Vivobook Go 15 15.6" AMD Ryzen 5 7520U 8GB DDR5 SSD 512GB',
            image: PLACEHOLDER_IMG,
            price: 776520,
            oldPrice: 862800,
            discount: 86280,
            category: 'Notebooks',
            subcategory: 'Notebooks'
        }
    ]
};

// All Products (for products page)
const allProducts = [
    {
        id: 101,
        title: 'Auriculares Corsair HS80 Premium SlipStream Wireless 2.4Ghz Dolby Atmos Black RGB',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40177_Auriculares_Corsair_HS80_Premium_SlipStream_Wireless_2.4Ghz_Dolby_Atmos_Black_RGB_20Hs__077043cd-med.jpg',
        price: 238667,
        oldPrice: 256100,
        discount: 17433,
        category: 'Periféricos',
        subcategory: 'Auriculares'
    },
    {
        id: 102,
        title: 'Notebook ASUS ROG Strix G16 16" Intel Core Ultra 9 275HX 32GB DDR5 SSD 1TB RTX 5070 Ti',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_48885_Notebook_ASUS_ROG_Strix_G16_16__Intel_Core_Ultra_9_275HX_32GB_DDR5_SSD_1TB_RTX_5070_Ti_2.5K_Win11_G615LR-S5072W_be164521-med.jpg',
        price: 5434808,
        oldPrice: 5720850,
        discount: 286042,
        category: 'Notebooks',
        subcategory: 'Notebooks Gaming'
    },
    {
        id: 103,
        title: 'Notebook ASUS ROG Strix SCAR 18 18" Intel Core Ultra 9 275HX 32GB DDR5 SSD 2TB RTX 5080',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_49443_Notebook_ASUS_ROG_Strix_SCAR_18_18__Intel_Core_Ultra_9_275HX_32GB_DDR5_SSD_2TB_RTX_5080_2.5K_240Hz_Win11_G835LW-SA024W_a2fceebc-med.jpg',
        price: 7567752,
        oldPrice: 8050800,
        discount: 483048,
        category: 'Notebooks',
        subcategory: 'Notebooks Gaming'
    },
    {
        id: 104,
        title: 'Placa de Video XFX Radeon RX 9070 XT 16GB GDDR6 Swift Triple Fan Gaming Edition',
        image: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45274_Placa_de_Video_XFX_Radeon_RX_9070_XT_16GB_GDDR6_Swift_Triple_Fan_Gaming_Edition_171a93d4-med.jpg',
        price: 1195750,
        oldPrice: null,
        discount: null,
        category: 'Placas de Video',
        subcategory: 'Placas de Video Radeon AMD'
    },
    {
        id: 105,
        title: 'Silla Gamer Razer ISKUR V2 X Tela Negro y Verde (Peso MAX. 136Kg)',
        image: PLACEHOLDER_IMG,
        price: 542850,
        oldPrice: null,
        discount: null,
        category: 'Sillas Gamers',
        subcategory: 'Sillas Gamers'
    },
    {
        id: 106,
        title: 'Consola ROG Xbox Ally X AMD Ryzen AI Z2 Extreme 24GB SSD M.2 1TB',
        image: PLACEHOLDER_IMG,
        price: 1839990,
        oldPrice: null,
        discount: null,
        category: 'Consolas',
        subcategory: 'Consolas'
    },
    {
        id: 107,
        title: 'Consola ROG Xbox Ally AMD Ryzen AI Z2A 16GB SSD M.2 512GB White',
        image: PLACEHOLDER_IMG,
        price: 1104990,
        oldPrice: null,
        discount: null,
        category: 'Consolas',
        subcategory: 'Consolas'
    },
    {
        id: 108,
        title: 'Gabinete HYTE Y70 TOUCH INFINITE Black Vidrio Templado Pantalla Tactil 2.5K LCD IPS',
        image: PLACEHOLDER_IMG,
        price: 617500,
        oldPrice: null,
        discount: null,
        category: 'Gabinetes',
        subcategory: 'Gabinetes'
    },
    {
        id: 109,
        title: 'Gabinete HYTE Y70 TOUCH INFINITE Snow White Vidrio Templado Pantalla Tactil 2.5K',
        image: PLACEHOLDER_IMG,
        price: 617500,
        oldPrice: null,
        discount: null,
        category: 'Gabinetes',
        subcategory: 'Gabinetes'
    },
    {
        id: 110,
        title: 'Gabinete HYTE Y70 TOUCH INFINITE Black Cherry Vidrio Templado',
        image: PLACEHOLDER_IMG,
        price: 599700,
        oldPrice: null,
        discount: null,
        category: 'Gabinetes',
        subcategory: 'Gabinetes'
    },
    {
        id: 111,
        title: 'Gabinete Corsair 6500D Airflow TG Super Mid-Tower White',
        image: PLACEHOLDER_IMG,
        price: 320000,
        oldPrice: null,
        discount: null,
        category: 'Gabinetes',
        subcategory: 'Gabinetes'
    },
    {
        id: 112,
        title: 'Mother ASUS ROG STRIX X870-A GAMING WIFI DDR5 AM5',
        image: PLACEHOLDER_IMG,
        price: 577850,
        oldPrice: null,
        discount: null,
        category: 'Mothers',
        subcategory: 'Mothers AMD'
    },
    {
        id: 113,
        title: 'Mother ASUS ROG STRIX B650E-F GAMING WIFI',
        image: PLACEHOLDER_IMG,
        price: 426650,
        oldPrice: null,
        discount: null,
        category: 'Mothers',
        subcategory: 'Mothers AMD'
    },
    {
        id: 114,
        title: 'Mother ASUS PRIME B550M-K AM4',
        image: PLACEHOLDER_IMG,
        price: 124050,
        oldPrice: null,
        discount: null,
        category: 'Mothers',
        subcategory: 'Mothers AMD'
    },
    {
        id: 115,
        title: 'Procesador Intel Core i9 14900K 6.0GHz Turbo Socket 1700 Raptor Lake',
        image: PLACEHOLDER_IMG,
        price: 849500,
        oldPrice: null,
        discount: null,
        category: 'Procesadores',
        subcategory: 'Procesadores Intel'
    }
];

// Categories data
const categories = [
    { id: 'combos', name: 'Combos', subcategories: ['Kits de actualización'] },
    { id: 'pc', name: 'PC de Escritorio', subcategories: ['PC de Escritorio'] },
    { id: 'notebooks', name: 'Notebooks', subcategories: ['Notebooks'] },
    { id: 'procesadores', name: 'Procesadores', subcategories: ['Procesadores AMD', 'Procesadores Intel'] },
    { id: 'mothers', name: 'Mothers', subcategories: ['Mothers AMD', 'Mothers Intel'] },
    { id: 'placas', name: 'Placas de Video', subcategories: ['Placas de Video GeForce', 'Placas de Video Radeon AMD', 'Placas de Video Intel ARC'] },
    { id: 'ram', name: 'Memorias RAM', subcategories: ['Memorias', 'Memorias Notebook'] },
    { id: 'almacenamiento', name: 'Almacenamiento', subcategories: ['Discos Externos', 'Discos Rígidos', 'Discos Sólidos SSD'] },
    { id: 'refrigeracion', name: 'Refrigeración', subcategories: ['Coolers Fan', 'Coolers CPU', 'Pasta Térmica'] },
    { id: 'gabinetes', name: 'Gabinetes', subcategories: ['Gabinetes', 'Modding | Cables, Iluminación y otros'] },
    { id: 'fuentes', name: 'Fuentes', subcategories: ['Fuentes de alimentación'] },
    { id: 'monitores', name: 'Monitores', subcategories: ['Monitores y pantallas'] },
    { id: 'perifericos', name: 'Periféricos', subcategories: ['Auriculares', 'Teclados', 'Mouses', 'Webcam', 'Joysticks', 'Mouse Pads', 'Parlantes', 'Micrófonos'] },
    { id: 'sillas', name: 'Sillas Gamers', subcategories: ['Sillas Gamers'] },
    { id: 'conectividad', name: 'Conectividad', subcategories: ['Placas de red inalámbricas', 'Routers WiFi'] },
    { id: 'consolas', name: 'Consolas de Video Juego', subcategories: ['Consolas'] }
];

// PC Builder components
const pcComponents = {
    procesadores: [
        { id: 'cpu1', name: 'Procesador Intel Celeron G4900 3.10GHz Socket 1151 OEM', price: 49650, socket: 1151, brand: 'Intel', compatible: true },
        { id: 'cpu2', name: 'Procesador AMD Athlon 3000G 3.5GHz + Radeon Vega 3 AM4', price: 51450, socket: 'AM4', brand: 'AMD', compatible: true },
        { id: 'cpu3', name: 'Procesador AMD Ryzen 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4', price: 97600, socket: 'AM4', brand: 'AMD', compatible: true },
        { id: 'cpu4', name: 'Procesador AMD Ryzen 5 5600GT 4.6GHz Turbo AM4', price: 230800, socket: 'AM4', brand: 'AMD', compatible: true },
        { id: 'cpu5', name: 'Procesador AMD Ryzen 5 7600 5.1GHz Turbo AM5', price: 305600, socket: 'AM5', brand: 'AMD', compatible: true },
        { id: 'cpu6', name: 'Procesador AMD Ryzen 7 7800X3D 5.0GHz Turbo AM5', price: 669750, socket: 'AM5', brand: 'AMD', compatible: true },
        { id: 'cpu7', name: 'Procesador Intel Core i5 14400F 4.7GHz Turbo Socket 1700', price: 305150, socket: 1700, brand: 'Intel', compatible: true },
        { id: 'cpu8', name: 'Procesador Intel Core i7 14700K 5.6GHz Turbo Socket 1700', price: 600800, socket: 1700, brand: 'Intel', compatible: true },
        { id: 'cpu9', name: 'Procesador Intel Core i9 14900K 6.0GHz Turbo Socket 1700', price: 849500, socket: 1700, brand: 'Intel', compatible: true },
        { id: 'cpu10', name: 'Procesador AMD Ryzen 9 9950X 5.7GHz Turbo AM5', price: 950450, socket: 'AM5', brand: 'AMD', compatible: true }
    ],
    mothers: [
        { id: 'mb1', name: 'Mother ASUS PRIME B550M-K AM4', price: 124050, socket: 'AM4', brand: 'ASUS', compatible: true },
        { id: 'mb2', name: 'Mother ASUS TUF GAMING B650M-PLUS WIFI', price: 309900, socket: 'AM5', brand: 'ASUS', compatible: true },
        { id: 'mb3', name: 'Mother ASUS TUF GAMING B850-E WIFI AM5', price: 348750, socket: 'AM5', brand: 'ASUS', compatible: true },
        { id: 'mb4', name: 'Mother ASUS PRIME Z890-P WIFI LGA1851 DDR5', price: 418400, socket: 1851, brand: 'ASUS', compatible: true },
        { id: 'mb5', name: 'Mother ASUS TUF GAMING X870-PLUS WIFI DDR5 AM5', price: 518150, socket: 'AM5', brand: 'ASUS', compatible: true }
    ],
    memorias: [
        { id: 'ram1', name: 'Memoria RAM Corsair Vengeance 16GB (2x8GB) DDR4 3200MHz', price: 65000, type: 'DDR4', compatible: true },
        { id: 'ram2', name: 'Memoria RAM Corsair Vengeance 32GB (2x16GB) DDR4 3600MHz', price: 120000, type: 'DDR4', compatible: true },
        { id: 'ram3', name: 'Memoria RAM Kingston Fury Beast 32GB (2x16GB) DDR5 5600MHz', price: 180000, type: 'DDR5', compatible: true },
        { id: 'ram4', name: 'Memoria RAM G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5 6000MHz', price: 350000, type: 'DDR5', compatible: true }
    ],
    placas: [
        { id: 'gpu1', name: 'Placa de Video NVIDIA GeForce RTX 4060 8GB', price: 450000, compatible: true },
        { id: 'gpu2', name: 'Placa de Video AMD Radeon RX 7600 8GB', price: 420000, compatible: true },
        { id: 'gpu3', name: 'Placa de Video XFX Radeon RX 9070 XT 16GB', price: 1195750, compatible: true },
        { id: 'gpu4', name: 'Placa de Video NVIDIA GeForce RTX 5080 16GB', price: 2100000, compatible: true },
        { id: 'gpu5', name: 'Placa de Video NVIDIA GeForce RTX 5090 24GB', price: 3500000, compatible: true }
    ],
    almacenamiento: [
        { id: 'ssd1', name: 'SSD Kingston A400 480GB SATA', price: 45000, compatible: true },
        { id: 'ssd2', name: 'SSD Samsung 970 EVO Plus 1TB NVMe M.2', price: 120000, compatible: true },
        { id: 'ssd3', name: 'SSD Samsung 990 PRO 2TB NVMe M.2 PCIe 4.0', price: 280000, compatible: true },
        { id: 'ssd4', name: 'SSD Corsair MP600 PRO 4TB NVMe M.2 PCIe 5.0', price: 550000, compatible: true }
    ],
    fuentes: [
        { id: 'psu1', name: 'Fuente Corsair CV550 550W 80+ Bronze', price: 75000, watts: 550, compatible: true },
        { id: 'psu2', name: 'Fuente Corsair RM750 750W 80+ Gold Modular', price: 150000, watts: 750, compatible: true },
        { id: 'psu3', name: 'Fuente Seasonic CORE GX850W 80+ Gold', price: 238150, watts: 850, compatible: true },
        { id: 'psu4', name: 'Fuente Seasonic 1200W 80+ Platinum', price: 549650, watts: 1200, compatible: true }
    ],
    gabinetes: [
        { id: 'case1', name: 'Gabinete Corsair 4000D Airflow TG Black', price: 120000, compatible: true },
        { id: 'case2', name: 'Gabinete NZXT H510 Flow Black', price: 150000, compatible: true },
        { id: 'case3', name: 'Gabinete Corsair 6500D Airflow TG White', price: 320000, compatible: true },
        { id: 'case4', name: 'Gabinete HYTE Y70 TOUCH INFINITE Black', price: 617500, compatible: true }
    ],
    coolers: [
        { id: 'cool1', name: 'Cooler CPU Cooler Master Hyper 212 EVO', price: 45000, compatible: true },
        { id: 'cool2', name: 'Cooler CPU Noctua NH-D15', price: 120000, compatible: true },
        { id: 'cool3', name: 'Cooler CPU Corsair iCUE H150i Elite LCD XT', price: 280000, compatible: true }
    ]
};

// FAQ Data
const faqData = [
    {
        title: 'Realizar un pedido',
        content: 'Comprar en nuestra web es muy fácil! Primero, sumá al carrito todos los productos que querés. Luego, elegí si preferís envío a domicilio o retirarlo en un punto de entrega. Indicá si necesitás factura A o factura B. Después, seleccioná el medio de pago que más te convenga. Revisá todos los detalles y confirmá tu compra.'
    },
    {
        title: 'Precio',
        content: 'Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.'
    },
    {
        title: 'Formas de pago',
        content: 'Contás con varias opciones para abonar tu pedido: Podés elegir entre depósito o transferencia bancaria (abonando el precio especial), tarjetas de crédito (en hasta 18 cuotas fijas) o billeteras virtuales, como Mercado Pago y MODO.'
    },
    {
        title: 'Códigos de descuento',
        content: 'Si tenés un código de descuento, deberás agregar todos los productos que desees a tu carrito y completar los pasos de Envíos, Facturación y Forma de Pago. Al momento de la revisión, verás un campo de "Tenés un código de descuento?", seleccionalo e ingresá tu código.'
    },
    {
        title: 'Mercado Pago',
        content: 'Para pagar con Mercado Pago, al momento de elegir la forma de pago en el carrito, elegí Billetera virtual y seleccioná "Mercado Pago". Luego, vas a poder seleccionar la cantidad de cuotas. Confirmá tu reserva y vas a ver el link para pagar desde la App.'
    },
    {
        title: 'MODO',
        content: 'Para pagar con MODO, al momento de elegir la forma de pago en el carrito, elegí Billetera virtual y seleccioná MODO. Confirmá tu pedido y continuá: si estás desde una PC, hacé clic en Pagar con MODO para generar el QR y escanearlo con tu app.'
    },
    {
        title: 'Depósito - Transferencia bancaria',
        content: 'Una vez que realizás tu pedido, te enviamos los datos bancarios para hacer el depósito o la transferencia. Para informar el pago, ingresá a tu perfil, buscá el pedido y hacé clic en Cargar comprobante.'
    },
    {
        title: 'Tarjetas de crédito',
        content: 'En el paso de "Forma de pago" en el carrito, deberás seleccionar la opción "Tarjeta de crédito" y completar con los datos de tu tarjeta. Luego, deberás seleccionar la cantidad de cuotas e indicar los datos del titular de la tarjeta.'
    },
    {
        title: 'Envíos',
        content: 'Realizamos envíos a todo el país! Al avanzar con tu compra e ingresar tu dirección, vas a ver los métodos de envío disponibles y el costo según tu zona. Trabajamos con: OCA (envíos a todo el país), Entregar (CABA, AMBA, Rosario y Córdoba) y Pickit.'
    },
    {
        title: 'Facturación',
        content: 'En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente.'
    },
    {
        title: 'Utilizar el saldo en mi cuenta de Compra Gamer',
        content: 'Sí. Podés utilizar el saldo a favor en tu cuenta de Compra Gamer para realizar un nuevo pedido. En ese caso, simplemente elegí el mismo método de pago al finalizar la compra o contactanos desde la sección Ayuda.'
    },
    {
        title: 'Solicitar el reintegro de un pago',
        content: 'Primero debés cancelar la compra para solicitar el reintegro. Podés hacerlo desde Mi cuenta, utilizar el Botón de Arrepentimiento o contactarnos para que un representante pueda ayudarte.'
    },
    {
        title: 'Garantías',
        content: 'Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, contamos con el apartado "Compra Gamer te ayuda. ¿Cuál es tu consulta?" donde debés exponer tu caso.'
    }
];
