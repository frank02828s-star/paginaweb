/* assets/js/shared/carrier.js
 * Fuente de datos para empresas de envío (Envío Nacional) y sus agencias.
 * Aquí puedes AGREGAR / QUITAR / MODIFICAR agencias y automáticamente:
 * - Cambian los conteos por estado
 * - Cambia lo que se muestra en el checkout
 *
 * Nota importante:
 * Este archivo está pensado como "inventory.js": data + helpers.
 */

(function () {
  // Logos (rutas relativas desde checkout/order-verification.html)
  var LOGOS = {
    mrw:    '/assets/images/mrw.png',
    zoom:   '/assets/images/zoom.png',
    domesa: '/assets/images/domesa.png',
    tealca: '/assets/images/tealca.png'
  };

  // Estados de Venezuela (lista base)
  var STATES = [
    'Amazonas',
    'Anzoategui',
    'Apure',
    'Aragua',
    'Barinas',
    'Bolivar',
    'Carabobo',
    'Cojedes',
    'Delta Amacuro',
    'Distrito Capital',
    'Falcon',
    'Guarico',
    'Lara',
    'Merida',
    'Miranda',
    'Monagas',
    'Nueva Esparta',
    'Portuguesa',
    'Sucre',
    'Tachira',
    'Trujillo',
    'Vargas',
    'Yaracuy',
    'Zulia'
  ];

  // DATA: agencias por empresa -> estado -> lista de agencias
  // Estructura:
  // agencies[carrierKey][state] = [{ id, name, address, city, lat, lng }]
  // Puedes añadir los campos que quieras.
  var agencies = {
  "mrw": {
    "#": [],
    "Amazonas": [
      {
        "id": "mrw-amazonas-puerto-ayacucho",
        "name": "PUERTO AYACUCHO",
        "code": "0200000",
        "address": "Calle Principal Local S/n Barrio Union, Zona Centropuerto Ayacucho Amazonas Zona Postal.",
        "city": "Puerto Ayacucho, Amazonas",
        "schedule": "No Disponible",
        "phones": [
          "0248-414.56.79",
          "0248-521.42.17",
          "0248-521.34.04"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Amazonas/Puerto_Ayacucho/Puerto_Ayacucho/",
        "details": {
          "Codigo": "0200000",
          "Direccion": "Calle Principal Local S/n Barrio Union, Zona Centropuerto Ayacucho Amazonas Zona Postal.",
          "Ciudad": "Puerto Ayacucho, Amazonas",
          "Horario": "No Disponible",
          "Telefono(s)": "0248-414.56.79 | 0248-521.42.17 | 0248-521.34.04 | 0248-521.34.04"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=5.66406,-67.62353",
        "lat": 5.66406,
        "lng": -67.62353
      }
    ],
    "Anzoategui": [
      {
        "id": "mrw-anzoategui-anaco",
        "name": "ANACO",
        "code": "0301000",
        "address": "Av. José Antonio Anzoátegui, C.c. Anaco Center, Local 79-c. Anaco Edo. Anzoategui.",
        "city": "Anaco, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0282-424.75.83",
          "0282-424.67.10",
          "0282-424.93.14"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Anaco/Anaco/",
        "details": {
          "Codigo": "0301000",
          "Direccion": "Av. José Antonio Anzoátegui, C.c. Anaco Center, Local 79-c. Anaco Edo. Anzoategui.",
          "Ciudad": "Anaco, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0282-424.75.83 | 0282-424.67.10 | 0282-424.93.14 | 0282-424.93.14"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.433646,-64.46495",
        "lat": 9.433646,
        "lng": -64.46495
      },
      {
        "id": "mrw-anzoategui-barcelona",
        "name": "BARCELONA",
        "code": "0300000",
        "address": "Av. Fuerzas Armadas. Esquina Calle Eulalia Buroz, Edif Azgan Piso Pb Local 02 Sector Centro, Barcelona.",
        "city": "Barcelona, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0281-274.45.77",
          "0281-276.17.64",
          "0281-276.11.76"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Barcelona/Barcelona/",
        "details": {
          "Codigo": "0300000",
          "Direccion": "Av. Fuerzas Armadas. Esquina Calle Eulalia Buroz, Edif Azgan Piso Pb Local 02 Sector Centro, Barcelona.",
          "Ciudad": "Barcelona, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0281-274.45.77 | 0281-276.17.64 | 0281-276.17.64 | 0281-276.11.76"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.137268,-64.68306",
        "lat": 10.137268,
        "lng": -64.68306
      },
      {
        "id": "mrw-anzoategui-clarines",
        "name": "CLARINES",
        "code": "0311000",
        "address": "Av. Fernandez Padilla, Mini C.c. Los Cocos. C.c. \"mtc\". Local 5 P.b. Clarines",
        "city": "Clarines, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0281-418.02.74",
          "0281-445.17.19",
          "0281-422.36.81"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Clarines/Clarines/",
        "details": {
          "Codigo": "0311000",
          "Direccion": "Av. Fernandez Padilla, Mini C.c. Los Cocos. C.c. \"mtc\". Local 5 P.b. Clarines",
          "Ciudad": "Clarines, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0281-418.02.74 | 0281-445.17.19 | 0281-422.36.81 | 0281-445.17.19"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.943772,-65.163958",
        "lat": 9.943772,
        "lng": -65.163958
      },
      {
        "id": "mrw-anzoategui-el-tigre",
        "name": "EL TIGRE",
        "code": "0302000",
        "address": "Av. Fco. De Miranda Con Calle 18 Sur. Edif. Los Geranios # 2 Y 3 Frente A La Panaderia Siria.",
        "city": "El Tigre, Anzoategui",
        "schedule": "8:00AM / 12:00PM",
        "phones": [
          "0283-241.64.85",
          "0283-241.38.31",
          "0283-241.92.74"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/El_Tigre/El_Tigre/",
        "details": {
          "Codigo": "0302000",
          "Direccion": "Av. Fco. De Miranda Con Calle 18 Sur. Edif. Los Geranios # 2 Y 3 Frente A La Panaderia Siria.",
          "Ciudad": "El Tigre, Anzoategui",
          "Horario": "8:00AM / 12:00PM",
          "Telefono(s)": "0283-241.64.85 | 0283-241.38.31 | 0283-241.92.74"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.89412,-64.236924",
        "lat": 8.89412,
        "lng": -64.236924
      },
      {
        "id": "mrw-anzoategui-el-tigre-centro",
        "name": "EL TIGRE CENTRO",
        "code": "0313000",
        "address": "Carrera 2 Sur, Entre Calles 2 Y 3, Edificio Hana, Piso 1,. Local Nº 1, Sector Pueblo Nuevo Sur. El Tigre-estado Anzoategui.",
        "city": "El Tigre, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0283-416.79.39",
          "0283-226.28.62",
          "0283-226.28.30"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/El_Tigre/El_Tigre_Centro/",
        "details": {
          "Codigo": "0313000",
          "Direccion": "Carrera 2 Sur, Entre Calles 2 Y 3, Edificio Hana, Piso 1,. Local Nº 1, Sector Pueblo Nuevo Sur. El Tigre-estado Anzoategui.",
          "Ciudad": "El Tigre, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0283-416.79.39 | 0283-226.28.62 | 0283-226.28.30"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.886999,-64.257783",
        "lat": 8.886999,
        "lng": -64.257783
      },
      {
        "id": "mrw-anzoategui-el-tigrito",
        "name": "EL TIGRITO",
        "code": "0307000",
        "address": "Centro Comercial Deca, Pb, Local Nro. 2, Av. Fernández Padilla, Municipio San José De Guanipa, Estado Anzoátegui.",
        "city": "El Tigrito, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/El_Tigrito/El_Tigrito/",
        "details": {
          "Codigo": "0307000",
          "Direccion": "Centro Comercial Deca, Pb, Local Nro. 2, Av. Fernández Padilla, Municipio San José De Guanipa, Estado Anzoátegui.",
          "Ciudad": "El Tigrito, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.89,-64.18",
        "lat": 8.89,
        "lng": -64.18
      },
      {
        "id": "mrw-anzoategui-lecheria",
        "name": "LECHERIA",
        "code": "0312000",
        "address": "Av. Principal De Lechería, Mini Centro Principal, Local 02, Al Lado De Panadería La Principal. Lechería. Estado Anzoátegui.",
        "city": "Lechería, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0281-282.29.77",
          "0281-281.65.89",
          "0281-282.14.51"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Lecheria/Lecheria/",
        "details": {
          "Codigo": "0312000",
          "Direccion": "Av. Principal De Lechería, Mini Centro Principal, Local 02, Al Lado De Panadería La Principal. Lechería. Estado Anzoátegui.",
          "Ciudad": "Lechería, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0281-282.29.77 | 0281-281.65.89 | 0281-282.14.51 | 0281-282.14.51"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.182808,-64.689339",
        "lat": 10.182808,
        "lng": -64.689339
      },
      {
        "id": "mrw-anzoategui-nueva-barcelona",
        "name": "NUEVA BARCELONA",
        "code": "0310000",
        "address": "Av. El Ejército Con Av. Centurion C.c Nueva Barcelona, P.b Local 07, Barcelona, Estado Anzoátegui",
        "city": "Barcelona, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0281-275.48.18",
          "0281-275.15.49"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Barcelona/Nueva_Barcelona/",
        "details": {
          "Codigo": "0310000",
          "Direccion": "Av. El Ejército Con Av. Centurion C.c Nueva Barcelona, P.b Local 07, Barcelona, Estado Anzoátegui",
          "Ciudad": "Barcelona, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0281-275.48.18 | 0281-275.15.49"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.14,-64.694",
        "lat": 10.14,
        "lng": -64.694
      },
      {
        "id": "mrw-anzoategui-pariaguan",
        "name": "PARIAGUAN",
        "code": "0308000",
        "address": "Calle Bolívar Cruce Con Colombia, Sector Centro Frente Cooperativa De Transporte Pariaguan Express A Pocos Mts De Farmacia Continental.",
        "city": "Pariaguán, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0283-631.40.46",
          "0283-416.71.51"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Pariaguan/Pariaguan/",
        "details": {
          "Codigo": "0308000",
          "Direccion": "Calle Bolívar Cruce Con Colombia, Sector Centro Frente Cooperativa De Transporte Pariaguan Express A Pocos Mts De Farmacia Continental.",
          "Ciudad": "Pariaguán, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0283-631.40.46 | 0283-416.71.51"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.84332,-64.716693",
        "lat": 8.84332,
        "lng": -64.716693
      },
      {
        "id": "mrw-anzoategui-pto-la-cruz",
        "name": "PTO LA CRUZ",
        "code": "0309000",
        "address": "Calle Miranda, Cruce Con Calle Bolivar, Edif. Hotel Senador, Piso Pb, Zona Centro, Puerto La Cruz",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "No Disponible",
        "phones": [
          "0281-268.61.33",
          "0281-268.60.59",
          "0281-418.99.99"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Anzoategui/Puerto_La_Cruz/Pto_La_Cruz/",
        "details": {
          "Codigo": "0309000",
          "Direccion": "Calle Miranda, Cruce Con Calle Bolivar, Edif. Hotel Senador, Piso Pb, Zona Centro, Puerto La Cruz",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "No Disponible",
          "Telefono(s)": "0281-268.61.33 | 0281-268.61.33 | 0281-268.60.59 | 0281-418.99.99"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.22,-64.63",
        "lat": 10.22,
        "lng": -64.63
      }
    ],
    "Apure": [
      {
        "id": "mrw-apure-guasdualito",
        "name": "GUASDUALITO",
        "code": "0401000",
        "address": "Calle Sucre Entre Carrera Mariño Y Simón Rodríguez, A Cuadra Y Media De La Santísima Trinidad, Guasdualito Estado Apure.",
        "city": "Guasdualito, Apure",
        "schedule": "No Disponible",
        "phones": [
          "0278-332.01.54",
          "0278-415.68.75"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Apure/Guasdualito/Guasdualito/",
        "details": {
          "Codigo": "0401000",
          "Direccion": "Calle Sucre Entre Carrera Mariño Y Simón Rodríguez, A Cuadra Y Media De La Santísima Trinidad, Guasdualito Estado Apure.",
          "Ciudad": "Guasdualito, Apure",
          "Horario": "No Disponible",
          "Telefono(s)": "0278-332.01.54 | 0278-332.01.54 | 0278-415.68.75"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.244789,-70.726875",
        "lat": 7.244789,
        "lng": -70.726875
      },
      {
        "id": "mrw-apure-san-fernando",
        "name": "SAN FERNANDO",
        "code": "0400000",
        "address": "Calle Bolivar Entre Calle Piar Y Girardot, Local Nro S/n Sector Centro, San Fernando De Apure",
        "city": "Achaguas, Apure",
        "schedule": "No Disponible",
        "phones": [
          "0247-341.09.94",
          "0247-808.66.46",
          "0247-808.6287"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Apure/Achaguas/San_Fernando/",
        "details": {
          "Codigo": "0400000",
          "Direccion": "Calle Bolivar Entre Calle Piar Y Girardot, Local Nro S/n Sector Centro, San Fernando De Apure",
          "Ciudad": "Achaguas, Apure",
          "Horario": "No Disponible",
          "Telefono(s)": "0247-341.09.94 | 0247-808.66.46 | 0247-808.6287 | 0247-341.09.94"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.887714,-67.475549",
        "lat": 7.887714,
        "lng": -67.475549
      },
      {
        "id": "mrw-apure-san-fernando-centro",
        "name": "SAN FERNANDO CENTRO",
        "code": "0402000",
        "address": "Av Caracas A 50 Mtrs Del Paseo Libertador, Centro Empresarial Genesis, Pb Local 1, Sector Centro San Fernando De Apure.",
        "city": "San Fernando De Apure, Apure",
        "schedule": "No Disponible",
        "phones": [
          "0247-341.42.52",
          "0247-689.37.62"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Apure/San_Fernando_De_Apure/San_Fernando_Centro/",
        "details": {
          "Codigo": "0402000",
          "Direccion": "Av Caracas A 50 Mtrs Del Paseo Libertador, Centro Empresarial Genesis, Pb Local 1, Sector Centro San Fernando De Apure.",
          "Ciudad": "San Fernando De Apure, Apure",
          "Horario": "No Disponible",
          "Telefono(s)": "0247-341.42.52 | 0247-689.37.62 | 0247-341.42.52"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.882042,-67.470711",
        "lat": 7.882042,
        "lng": -67.470711
      }
    ],
    "Aragua": [
      {
        "id": "mrw-aragua-la-encrucijada",
        "name": "LA ENCRUCIJADA",
        "code": "0512000",
        "address": "Av. Principal, C.c. Los Laureles, Nivel P.b, Local 12, Sector La Encrucijada De Turmero. Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0244-871.71.54",
          "0244-395.94.78",
          "0244-417.61.50",
          "0244-395.43.66"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/La_Encrucijada/",
        "details": {
          "Codigo": "0512000",
          "Direccion": "Av. Principal, C.c. Los Laureles, Nivel P.b, Local 12, Sector La Encrucijada De Turmero. Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0244-871.71.54 | 0244-395.94.78 | 0244-417.61.50 | 0244-395.94.78 | 0244-395.43.66"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.202434,-67.471634",
        "lat": 10.202434,
        "lng": -67.471634
      },
      {
        "id": "mrw-aragua-la-victoria",
        "name": "LA VICTORIA",
        "code": "0503000",
        "address": "Urbanización Bolivar Sur, Av. Victoria # 44-2, Local A-2, La Victoria, Aragua.",
        "city": "La Victoria, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0244-322.89.47",
          "0244-321.47.67",
          "0244-321.85.75"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/La_Victoria/La_Victoria/",
        "details": {
          "Codigo": "0503000",
          "Direccion": "Urbanización Bolivar Sur, Av. Victoria # 44-2, Local A-2, La Victoria, Aragua.",
          "Ciudad": "La Victoria, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0244-322.89.47 | 0244-321.47.67 | 0244-321.85.75 | 0244-322.89.47"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.226545,-67.331594",
        "lat": 10.226545,
        "lng": -67.331594
      },
      {
        "id": "mrw-aragua-los-cedros",
        "name": "LOS CEDROS",
        "code": "0518000",
        "address": "Calle 5 De Julio, Cruce Con Cjn \"в\" Local Nro. 116 Barrio Libertad Maracay Estado Aragua",
        "city": "Los Cedros, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Los_Cedros/Los_Cedros/",
        "details": {
          "Codigo": "0518000",
          "Direccion": "Calle 5 De Julio, Cruce Con Cjn \"в\" Local Nro. 116 Barrio Libertad Maracay Estado Aragua",
          "Ciudad": "Los Cedros, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.241056602801367,67.60134115612699",
        "lat": 10.241056602801367,
        "lng": 67.60134115612699
      },
      {
        "id": "mrw-aragua-maracay-5-de-julio",
        "name": "MARACAY 5 DE JULIO",
        "code": "0504000",
        "address": "Calle 5 De Julio, Entre Paez Y Miranda. Edif Santimone. P.b.b Local 3, Zona Centro, Diagonal A Imgeve, Maracay Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0243-246.95.15",
          "0243-246.93.09",
          "0243-246.94.90"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/Maracay_5_De_Julio/",
        "details": {
          "Codigo": "0504000",
          "Direccion": "Calle 5 De Julio, Entre Paez Y Miranda. Edif Santimone. P.b.b Local 3, Zona Centro, Diagonal A Imgeve, Maracay Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0243-246.95.15 | 0243-246.93.09 | 0243-246.94.90 | 0243-246.93.09"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.249356,-67.599302",
        "lat": 10.249356,
        "lng": -67.599302
      },
      {
        "id": "mrw-aragua-maracay-base-aragua",
        "name": "MARACAY BASE ARAGUA",
        "code": "0513000",
        "address": "Av. Las Delicias C.c. Hotel Paseo Las Delicias Ii Nivel Pb Local 12 Urb Base Aragua Maracay.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0243-233.17.67",
          "0243-232.87.77",
          "0243-237.06.02"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/Maracay_Base_Aragua/",
        "details": {
          "Codigo": "0513000",
          "Direccion": "Av. Las Delicias C.c. Hotel Paseo Las Delicias Ii Nivel Pb Local 12 Urb Base Aragua Maracay.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0243-233.17.67 | 0243-232.87.77 | 0243-233.17.67 | 0243-237.06.02"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.255998,-67.591659",
        "lat": 10.255998,
        "lng": -67.591659
      },
      {
        "id": "mrw-aragua-maracay-la-democracia",
        "name": "MARACAY LA DEMOCRACIA",
        "code": "0510000",
        "address": "Av Ayacucho Norte Nro 83, Barrio La Democracia, Maracay Edo Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0243-553.02.24",
          "0243-553.06.82",
          "0243-553.87.79"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/Maracay_La_Democracia/",
        "details": {
          "Codigo": "0510000",
          "Direccion": "Av Ayacucho Norte Nro 83, Barrio La Democracia, Maracay Edo Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0243-553.02.24 | 0243-553.06.82 | 0243-553.87.79 | 0243-553.06.82"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.257628,-67.609777",
        "lat": 10.257628,
        "lng": -67.609777
      },
      {
        "id": "mrw-aragua-maracay-la-romana",
        "name": "MARACAY LA ROMANA",
        "code": "0517000",
        "address": "Centro Comercial Tiuna, Av. Bolívar Oeste Nro. 198, Sector La Romana, Municipio Girardot, Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0243-556.07.69"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/Maracay_La_Romana/",
        "details": {
          "Codigo": "0517000",
          "Direccion": "Centro Comercial Tiuna, Av. Bolívar Oeste Nro. 198, Sector La Romana, Municipio Girardot, Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0243-556.07.69"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.254263,-67.613806",
        "lat": 10.254263,
        "lng": -67.613806
      },
      {
        "id": "mrw-aragua-maracay-santa-rita",
        "name": "MARACAY SANTA RITA",
        "code": "0511100",
        "address": "Av. Generalísimo francisco De Miranda, Entre Prolongación Y Andrés Bello, Calle Andrés Bello, Local Nro. 75, Sector Guaruto, Santa Rita, Estado Aragua .",
        "city": "Maracay Santa Rita, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay_Santa_Rita/Maracay_Santa_Rita/",
        "details": {
          "Codigo": "0511100",
          "Direccion": "Av. Generalísimo francisco De Miranda, Entre Prolongación Y Andrés Bello, Calle Andrés Bello, Local Nro. 75, Sector Guaruto, Santa Rita, Estado Aragua .",
          "Ciudad": "Maracay Santa Rita, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.201149,-67.575355",
        "lat": 10.201149,
        "lng": -67.575355
      },
      {
        "id": "mrw-aragua-maracay-santa-rosa",
        "name": "MARACAY SANTA ROSA",
        "code": "0516000",
        "address": "Calle Carabobo, Nº 75-a, Sector Santa Rosa. Maracay, Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0243-872.70.92",
          "0243-247.93.58",
          "0243-219.51.45"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/Maracay_Santa_Rosa/",
        "details": {
          "Codigo": "0516000",
          "Direccion": "Calle Carabobo, Nº 75-a, Sector Santa Rosa. Maracay, Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0243-872.70.92 | 0243-247.93.58 | 0243-247.93.58 | 0243-219.51.45"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.24413,-67.61696",
        "lat": 10.24413,
        "lng": -67.61696
      },
      {
        "id": "mrw-aragua-maracay-zona-ind",
        "name": "MARACAY ZONA IND.",
        "code": "0501000",
        "address": "Av Bermudez Cc Maracay Plaza Nivel Pb Local Pb-82f Urb Centro Maracay Aragua .",
        "city": "Maracay, Aragua",
        "schedule": "8:00AM / 11:00AM",
        "phones": [
          "0243-234.95.43",
          "0243-235.95.22",
          "0243-235.80.12"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Maracay/Maracay_Zona_Ind/",
        "details": {
          "Codigo": "0501000",
          "Direccion": "Av Bermudez Cc Maracay Plaza Nivel Pb Local Pb-82f Urb Centro Maracay Aragua .",
          "Ciudad": "Maracay, Aragua",
          "Horario": "8:00AM / 11:00AM",
          "Telefono(s)": "0243-234.95.43 | 0243-235.95.22 | 0243-235.95.22 | 0243-235.80.12"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.233359,-67.596572",
        "lat": 10.233359,
        "lng": -67.596572
      },
      {
        "id": "mrw-aragua-s-sebastian-d-los-reyes",
        "name": "S.SEBASTIAN D LOS REYES",
        "code": "0509000",
        "address": "Calle La Pista, Local Nro 03, Sector El Polvero, San Sebastian De Los Reyes Aragua.",
        "city": "San Sebastián, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0246-521.03.66"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/San_Sebastian/Ssebastian_D_Los_Reyes/",
        "details": {
          "Codigo": "0509000",
          "Direccion": "Calle La Pista, Local Nro 03, Sector El Polvero, San Sebastian De Los Reyes Aragua.",
          "Ciudad": "San Sebastián, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0246-521.03.66 | 0246-521.03.66"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.946000,-67.179501",
        "lat": 9.946,
        "lng": -67.179501
      },
      {
        "id": "mrw-aragua-turmero",
        "name": "TURMERO",
        "code": "0506000",
        "address": "Calle Mariño C/c Calle Peñalver C.c Mariño Plaza P.b Local 02, Turmero Edo. Aragua.",
        "city": "Turmero, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0244-663.10.55",
          "0244-663.68.89"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Turmero/Turmero/",
        "details": {
          "Codigo": "0506000",
          "Direccion": "Calle Mariño C/c Calle Peñalver C.c Mariño Plaza P.b Local 02, Turmero Edo. Aragua.",
          "Ciudad": "Turmero, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0244-663.10.55 | 0244-663.68.89 | 0244-663.10.55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.229092,-67.477899",
        "lat": 10.229092,
        "lng": -67.477899
      },
      {
        "id": "mrw-aragua-turmero-zona-industrial",
        "name": "TURMERO ZONA INDUSTRIAL",
        "code": "0511000",
        "address": "av. Intercomunal Maracay-turmero, Centro Comercial Intercomunal Center, Local Nro. Pb 6, Sector La Morita, Turmero, Estado Aragua.",
        "city": "Turmero, Aragua",
        "schedule": "8:00AM / 11:00AM",
        "phones": [
          "0243-269.58.24",
          "0243-218.65.85",
          "0243-269.56.63"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Turmero/Turmero_Zona_Industrial/",
        "details": {
          "Codigo": "0511000",
          "Direccion": "av. Intercomunal Maracay-turmero, Centro Comercial Intercomunal Center, Local Nro. Pb 6, Sector La Morita, Turmero, Estado Aragua.",
          "Ciudad": "Turmero, Aragua",
          "Horario": "8:00AM / 11:00AM",
          "Telefono(s)": "0243-269.58.24 | 0243-218.65.85 | 0243-269.58.24 | 0243-269.56.63"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.231931,-67.547920",
        "lat": 10.231931,
        "lng": -67.54792
      },
      {
        "id": "mrw-aragua-villa-de-cura",
        "name": "VILLA DE CURA",
        "code": "0507000",
        "address": "Calle Bolivar Y Villegas Local Nro 54/a Sector Centro Villa De Cura, Estado Aragua",
        "city": "Villa De Cura, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0244-386.19.73",
          "0244-989.5645"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Aragua/Villa_De_Cura/Villa_De_Cura/",
        "details": {
          "Codigo": "0507000",
          "Direccion": "Calle Bolivar Y Villegas Local Nro 54/a Sector Centro Villa De Cura, Estado Aragua",
          "Ciudad": "Villa De Cura, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0244-386.19.73 | 0244-386.19.73 | 0244-989.5645"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.033978,-67.485398",
        "lat": 10.033978,
        "lng": -67.485398
      }
    ],
    "Barinas": [
      {
        "id": "mrw-barinas-alto-barinas",
        "name": "ALTO BARINAS",
        "code": "0605000",
        "address": "Urb Alto Barinas Norte, Av Francia Con Av Pie De Monte Y Tachira, Local 135, Barinas.",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0273-552.06.93",
          "0273-541.41.63",
          "0273-935.13.04"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Alto_Barinas/",
        "details": {
          "Codigo": "0605000",
          "Direccion": "Urb Alto Barinas Norte, Av Francia Con Av Pie De Monte Y Tachira, Local 135, Barinas.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0273-552.06.93 | 0273-541.41.63 | 0273-541.41.63 | 0273-935.13.04"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.618111,-70.253139",
        "lat": 8.618111,
        "lng": -70.253139
      },
      {
        "id": "mrw-barinas-av-sucre-barinas",
        "name": "AV SUCRE BARINAS",
        "code": "0600100",
        "address": "Av. Sucre, Edificio Residencias Karo, Local N° 1, Pb",
        "city": "Av Sucre Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Av_Sucre_Barinas/Av_Sucre_Barinas/",
        "details": {
          "Codigo": "0600100",
          "Direccion": "Av. Sucre, Edificio Residencias Karo, Local N° 1, Pb",
          "Ciudad": "Av Sucre Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.62568,-70.21675",
        "lat": 8.62568,
        "lng": -70.21675
      },
      {
        "id": "mrw-barinas-barinas",
        "name": "BARINAS",
        "code": "0600000",
        "address": "Calle Cedeðo, C.c. Giamma, Local 6. Diagonal Al Hospital Luis Razzetti",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0273-533.53.40",
          "0273-415.88.03",
          "0273-514.24.45",
          "0273-415.87.81"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Barinas/",
        "details": {
          "Codigo": "0600000",
          "Direccion": "Calle Cedeðo, C.c. Giamma, Local 6. Diagonal Al Hospital Luis Razzetti",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0273-533.53.40 | 0273-415.88.03 | 0273-514.24.45 | 0273-415.87.81"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.621125,-70.202049",
        "lat": 8.621125,
        "lng": -70.202049
      },
      {
        "id": "mrw-barinas-barinas-23-de-enero",
        "name": "BARINAS 23 DE ENERO",
        "code": "0606000",
        "address": "Avenida 23 De Enero, Edificio La Fontana, Local N¦ 3. A 50 Metros Del Registro Inmobiliario.",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0273-552.05.26"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Barinas_23_De_Enero/",
        "details": {
          "Codigo": "0606000",
          "Direccion": "Avenida 23 De Enero, Edificio La Fontana, Local N¦ 3. A 50 Metros Del Registro Inmobiliario.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0273-552.05.26 | 0273-552.05.26"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.622771,-70.227173",
        "lat": 8.622771,
        "lng": -70.227173
      },
      {
        "id": "mrw-barinas-barinas-sabaneta",
        "name": "BARINAS SABANETA",
        "code": "0604000",
        "address": "Calle 1 Entre Av. Obispos Y Av. Antonio Maria Bayon, Sector 9 De Diciembre. C.c. Tricolor, P.b. Local 2.",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0273-311.83.46",
          "0273-775.61.75"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Barinas_Sabaneta/",
        "details": {
          "Codigo": "0604000",
          "Direccion": "Calle 1 Entre Av. Obispos Y Av. Antonio Maria Bayon, Sector 9 De Diciembre. C.c. Tricolor, P.b. Local 2.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0273-311.83.46 | 0273-775.61.75"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.752412,-69.936872",
        "lat": 8.752412,
        "lng": -69.936872
      },
      {
        "id": "mrw-barinas-barinas-zona-ind",
        "name": "BARINAS ZONA IND.",
        "code": "0602000",
        "address": "Av Elias Cordero Edificio Rey De Reyes Pasos Detr-s Del Terminal De Pasajeros Diagonal A La Ferreteria Mecataso",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0273-532.34.82",
          "0273-411.57.67",
          "0273-415.43.67"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Barinas_Zona_Ind/",
        "details": {
          "Codigo": "0602000",
          "Direccion": "Av Elias Cordero Edificio Rey De Reyes Pasos Detr-s Del Terminal De Pasajeros Diagonal A La Ferreteria Mecataso",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0273-532.34.82 | 0273-532.34.82 | 0273-411.57.67 | 0273-415.43.67"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.631257,-70.224886",
        "lat": 8.631257,
        "lng": -70.224886
      },
      {
        "id": "mrw-barinas-forum",
        "name": "FORUM",
        "code": "0605100",
        "address": "Av 23 De Enero Con Av Guaipuro, Centro Comercial Forum, Pb, Local N¦52. Barinas.",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Forum/",
        "details": {
          "Codigo": "0605100",
          "Direccion": "Av 23 De Enero Con Av Guaipuro, Centro Comercial Forum, Pb, Local N¦52. Barinas.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.620782,-70.231907",
        "lat": 8.620782,
        "lng": -70.231907
      },
      {
        "id": "mrw-barinas-socopo",
        "name": "SOCOPO",
        "code": "0601000",
        "address": "Calle 1 Entre Carreras 6 Y 7, Barrio El Carmen, Diagonal Al Comercial La Estrella Oriental De Los Chinos",
        "city": "Socopó, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0273-928.10.73",
          "0273-311.51.48"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Socopo/Socopo/",
        "details": {
          "Codigo": "0601000",
          "Direccion": "Calle 1 Entre Carreras 6 Y 7, Barrio El Carmen, Diagonal Al Comercial La Estrella Oriental De Los Chinos",
          "Ciudad": "Socopó, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0273-928.10.73 | 0273-311.51.48 | 0273-928.10.73"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.236666,-70.818169",
        "lat": 8.236666,
        "lng": -70.818169
      },
      {
        "id": "mrw-barinas-sta-barbara-de-barinas",
        "name": "STA BARBARA DE BARINAS",
        "code": "0603000",
        "address": "Calle 12 Entre Carreras 0 Y 00 ( Punto De Referencia 2 Cuadras Y Media De Corpoelec",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "0278-414.56.85",
          "0278-414.57.06"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Barinas/Barinas/Sta_Barbara_De_Barinas/",
        "details": {
          "Codigo": "0603000",
          "Direccion": "Calle 12 Entre Carreras 0 Y 00 ( Punto De Referencia 2 Cuadras Y Media De Corpoelec",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "0278-414.56.85 | 0278-414.57.06"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.818387,-71.179698",
        "lat": 7.818387,
        "lng": -71.179698
      }
    ],
    "Bolivar": [
      {
        "id": "mrw-bolivar-alta-vista",
        "name": "ALTA VISTA",
        "code": "0701000",
        "address": "C.c. Zulia, En La Entrada Frente Al Supermercado Río, Local 3 Y 4, Alta Vista - Puerto Ordaz",
        "city": "Ciudad Bolívar, Bolivar",
        "schedule": "No Disponible",
        "phones": [
          "0286-961.06.16",
          "0286-962.05.69",
          "0286-962.60.32"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Bolivar/Ciudad_Bolivar/Alta_Vista/",
        "details": {
          "Codigo": "0701000",
          "Direccion": "C.c. Zulia, En La Entrada Frente Al Supermercado Río, Local 3 Y 4, Alta Vista - Puerto Ordaz",
          "Ciudad": "Ciudad Bolívar, Bolivar",
          "Horario": "No Disponible",
          "Telefono(s)": "0286-961.06.16 | 0286-962.05.69 | 0286-962.60.32"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.29,-62.731",
        "lat": 8.29,
        "lng": -62.731
      },
      {
        "id": "mrw-bolivar-av-las-americas",
        "name": "AV LAS AMERICAS",
        "code": "0709000",
        "address": "Av. Brasil, Urb. Villa Brasil, Manzana 142, Local N°2, A 200mts Del Abasto La Española, Sector Villa Antillana, Puerto Ordaz.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Bolivar/Puerto_Ordaz/Av_Las_Americas/",
        "details": {
          "Codigo": "0709000",
          "Direccion": "Av. Brasil, Urb. Villa Brasil, Manzana 142, Local N°2, A 200mts Del Abasto La Española, Sector Villa Antillana, Puerto Ordaz.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.312743079567095,-62.73015092522482",
        "lat": 8.312743079567095,
        "lng": -62.73015092522482
      },
      {
        "id": "mrw-bolivar-caicara-del-orinoco",
        "name": "CAICARA DEL ORINOCO",
        "code": "0702000",
        "address": "Carretera Troncal 19 Local Nro. S/n, Sector San Rafael, Caicara Del Orinoco, Estado Bolívar",
        "city": "Caicara Del Orinoco, Bolivar",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Bolivar/Caicara_Del_Orinoco/Caicara_Del_Orinoco/",
        "details": {
          "Codigo": "0702000",
          "Direccion": "Carretera Troncal 19 Local Nro. S/n, Sector San Rafael, Caicara Del Orinoco, Estado Bolívar",
          "Ciudad": "Caicara Del Orinoco, Bolivar",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.612650365002802,-66.14514042313505",
        "lat": 7.612650365002802,
        "lng": -66.14514042313505
      },
      {
        "id": "mrw-bolivar-cdad-bolivar-zona-ind",
        "name": "CDAD BOLIVAR ZONA IND.",
        "code": "0708000",
        "address": "Av. Nueva Granada. Edif. Gran Sabana. P.b., Local 1 Ciudad Bolivar. Edo. Boliva.",
        "city": "Ciudad Bolívar, Bolivar",
        "schedule": "No Disponible",
        "phones": [
          "0285-651.82.59",
          "0285-631.66.35",
          "0285-617.69.54"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Bolivar/Ciudad_Bolivar/Cdad_Bolivar_Zona_Ind/",
        "details": {
          "Codigo": "0708000",
          "Direccion": "Av. Nueva Granada. Edif. Gran Sabana. P.b., Local 1 Ciudad Bolivar. Edo. Boliva.",
          "Ciudad": "Ciudad Bolívar, Bolivar",
          "Horario": "No Disponible",
          "Telefono(s)": "0285-651.82.59 | 0285-631.66.35 | 0285-617.69.54 | 0285-631.66.35"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.112018,-63.542608",
        "lat": 8.112018,
        "lng": -63.542608
      },
      {
        "id": "mrw-bolivar-ciudad-bolivar",
        "name": "CIUDAD BOLIVAR",
        "code": "0700000",
        "address": "Avenida Republica. Edif. Franco, Pb Locales 1 Y 2, Al Lado De Banesco. Ciudad Bolivar.",
        "city": "Ciudad Bolívar, Bolivar",
        "schedule": "No Disponible",
        "phones": [
          "0285-654.67.01",
          "0285-617.37.39",
          "0285-654.29.11",
          "0285-654.60.20"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Bolivar/Ciudad_Bolivar/Ciudad_Bolivar/",
        "details": {
          "Codigo": "0700000",
          "Direccion": "Avenida Republica. Edif. Franco, Pb Locales 1 Y 2, Al Lado De Banesco. Ciudad Bolivar.",
          "Ciudad": "Ciudad Bolívar, Bolivar",
          "Horario": "No Disponible",
          "Telefono(s)": "0285-654.67.01 | 0285-617.37.39 | 0285-654.67.01 | 0285-654.29.11 | 0285-654.60.20"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.124342,-63.548001",
        "lat": 8.124342,
        "lng": -63.548001
      },
      {
        "id": "mrw-bolivar-santa-elena-de-uairen",
        "name": "SANTA ELENA DE UAIREN",
        "code": "0704000",
        "address": "Calle Ikabarú, Troncal 10. Casco Central, Local S/n, A 100 Mtrs. Del Hospital Rosario Vera Zurita, Santa Elena De Uairen, Edo. Bolivar. Código Postal 8011.",
        "city": "Santa Elena De Uairen, Bolivar",
        "schedule": "No Disponible",
        "phones": [
          "0289-995.18.91",
          "0289-416.06.21",
          "0289-995.14.50"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Bolivar/Santa_Elena_De_Uairen/Santa_Elena_De_Uairen/",
        "details": {
          "Codigo": "0704000",
          "Direccion": "Calle Ikabarú, Troncal 10. Casco Central, Local S/n, A 100 Mtrs. Del Hospital Rosario Vera Zurita, Santa Elena De Uairen, Edo. Bolivar. Código Postal 8011.",
          "Ciudad": "Santa Elena De Uairen, Bolivar",
          "Horario": "No Disponible",
          "Telefono(s)": "0289-995.18.91 | 0289-416.06.21 | 0289-995.18.91 | 0289-995.14.50"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=4.603938,-61.110664",
        "lat": 4.603938,
        "lng": -61.110664
      }
    ],
    "Carabobo": [
      {
        "id": "mrw-carabobo-alianza-mall",
        "name": "ALIANZA MALL",
        "code": "0802100",
        "address": "Carretera Nacional Guacara, Urb Ciudad Alianza, C.c. Central Guacara, Local 27, Frente Al Supermercado Central Madeirense. Valencia. .",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Alianza_Mall/",
        "details": {
          "Codigo": "0802100",
          "Direccion": "Carretera Nacional Guacara, Urb Ciudad Alianza, C.c. Central Guacara, Local 27, Frente Al Supermercado Central Madeirense. Valencia. .",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.214366,-67.894257",
        "lat": 10.214366,
        "lng": -67.894257
      },
      {
        "id": "mrw-carabobo-av-las-ferias",
        "name": "AV. LAS FERIAS",
        "code": "0810100",
        "address": "Av. Las Ferias, Entre Calles Silva Y Rangel, Cc Isora, Local Na-21. Valencia Estado Carabobo.valencia, Estado Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-835.65.93"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Av_Las_Ferias/",
        "details": {
          "Codigo": "0810100",
          "Direccion": "Av. Las Ferias, Entre Calles Silva Y Rangel, Cc Isora, Local Na-21. Valencia Estado Carabobo.valencia, Estado Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-835.65.93"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.1761,-68.002843",
        "lat": 10.1761,
        "lng": -68.002843
      },
      {
        "id": "mrw-carabobo-bejuma",
        "name": "BEJUMA",
        "code": "0809000",
        "address": "Av Carabobo Entre Calles Piar Y Calle Valencia Local Nro S/n Sector Unión Bejuma Carabobo Zona Postal 2040 10.175001772364226, -",
        "city": "Bejuma, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0249-793.2682",
          "0249-414.84.16"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Bejuma/Bejuma/",
        "details": {
          "Codigo": "0809000",
          "Direccion": "Av Carabobo Entre Calles Piar Y Calle Valencia Local Nro S/n Sector Unión Bejuma Carabobo Zona Postal 2040 10.175001772364226, -",
          "Ciudad": "Bejuma, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0249-793.2682 | 0249-414.84.16 | 0249-793.2682"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.175001,-68.257599",
        "lat": 10.175001,
        "lng": -68.257599
      },
      {
        "id": "mrw-carabobo-bolivar-sur",
        "name": "BOLIVAR SUR",
        "code": "0817000",
        "address": "Calle 73, Nro. Civico 90-27,, Local S/n, Barrio La Isabela, Valencia Estado Carabobo",
        "city": "Bolivar Sur, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Bolivar_Sur/Bolivar_Sur/",
        "details": {
          "Codigo": "0817000",
          "Direccion": "Calle 73, Nro. Civico 90-27,, Local S/n, Barrio La Isabela, Valencia Estado Carabobo",
          "Ciudad": "Bolivar Sur, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.161073931779228,67.98868971985027",
        "lat": 10.161073931779228,
        "lng": 67.98868971985027
      },
      {
        "id": "mrw-carabobo-flor-amarillo",
        "name": "FLOR AMARILLO",
        "code": "0804000",
        "address": "Av. Las Industrias, Cruce Con Av. Principal, Urb. Parque Valencia, C.c. Mega Mercado, Pb , Local 8c1.valencia Edo Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-832.93.16",
          "0241-832.47.27",
          "0241-834.30.50"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Flor_Amarillo/",
        "details": {
          "Codigo": "0804000",
          "Direccion": "Av. Las Industrias, Cruce Con Av. Principal, Urb. Parque Valencia, C.c. Mega Mercado, Pb , Local 8c1.valencia Edo Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-832.93.16 | 0241-832.47.27 | 0241-832.47.27 | 0241-834.30.50"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.154921,-67.957543",
        "lat": 10.154921,
        "lng": -67.957543
      },
      {
        "id": "mrw-carabobo-guacara",
        "name": "GUACARA",
        "code": "0802000",
        "address": "Calle Piar, Cruce Con Jacinto Lara, C.c San Pedro, Nivel Pb, Local 8, Guacara, Estado Carabobo",
        "city": "Guacara, Carabobo",
        "schedule": "8:00AM / 1:00PM",
        "phones": [
          "0245-564.09.20",
          "0245-415.12.78",
          "0245-564.59.28"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Guacara/Guacara/",
        "details": {
          "Codigo": "0802000",
          "Direccion": "Calle Piar, Cruce Con Jacinto Lara, C.c San Pedro, Nivel Pb, Local 8, Guacara, Estado Carabobo",
          "Ciudad": "Guacara, Carabobo",
          "Horario": "8:00AM / 1:00PM",
          "Telefono(s)": "0245-564.09.20 | 0245-415.12.78 | 0245-564.09.20 | 0245-564.59.28"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.23,-67.87",
        "lat": 10.23,
        "lng": -67.87
      },
      {
        "id": "mrw-carabobo-la-esmeralda-san-diego",
        "name": "LA ESMERALDA SAN DIEGO",
        "code": "0815100",
        "address": "Av. Intercomunal Don Julio Centeno C.c la esmeralda local 13.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/La_Esmeralda_San_Diego/",
        "details": {
          "Codigo": "0815100",
          "Direccion": "Av. Intercomunal Don Julio Centeno C.c la esmeralda local 13.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.221,-67.964072",
        "lat": 10.221,
        "lng": -67.964072
      },
      {
        "id": "mrw-carabobo-la-isabelica",
        "name": "LA ISABELICA",
        "code": "0812000",
        "address": "Av. 04 Sector 10, Vereda 14, Local 01, Urb. La Isabelica. Valencia - Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-838.94.37",
          "0241-838.92.41",
          "0241-990.26.26"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/La_Isabelica/",
        "details": {
          "Codigo": "0812000",
          "Direccion": "Av. 04 Sector 10, Vereda 14, Local 01, Urb. La Isabelica. Valencia - Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-838.94.37 | 0241-838.94.37 | 0241-838.92.41 | 0241-990.26.26"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.160974,-67.970584",
        "lat": 10.160974,
        "lng": -67.970584
      },
      {
        "id": "mrw-carabobo-los-guayos-zona-ind",
        "name": "LOS GUAYOS ZONA IND.",
        "code": "0802500",
        "address": "Los Guayos Calle Negro Primero Cc Las Delicias Local. Valencia -edo Carabobo",
        "city": "Los Guayos, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-832.53.37",
          "0241-205.37.31",
          "0241-814.43.66"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Los_Guayos/Los_Guayos_Zona_Ind/",
        "details": {
          "Codigo": "0802500",
          "Direccion": "Los Guayos Calle Negro Primero Cc Las Delicias Local. Valencia -edo Carabobo",
          "Ciudad": "Los Guayos, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-832.53.37 | 0241-205.37.31 | 0241-814.43.66"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.184388,-67.960165",
        "lat": 10.184388,
        "lng": -67.960165
      },
      {
        "id": "mrw-carabobo-moron",
        "name": "MORON",
        "code": "0803500",
        "address": "Avda. Yaracuy - Nª 52, Frente Al Banco Banesco, Al Lado Del Banco Bod. Moron Estado Carabobo.",
        "city": "Morón, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0242-558.17.25",
          "0242-372.35.11"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Moron/Moron/",
        "details": {
          "Codigo": "0803500",
          "Direccion": "Avda. Yaracuy - Nª 52, Frente Al Banco Banesco, Al Lado Del Banco Bod. Moron Estado Carabobo.",
          "Ciudad": "Morón, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0242-558.17.25 | 0242-372.35.11 | 0242-372.35.11"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.489728,-68.200872",
        "lat": 10.489728,
        "lng": -68.200872
      },
      {
        "id": "mrw-carabobo-naguanagua",
        "name": "NAGUANAGUA",
        "code": "0806000",
        "address": "Av. 96-b, C.c. Crstal, Pb. Local B-06 A Dos Locales Del Banco Bicentenario, Por La Entrada Principal. Naguanagua, Edo. Carabobo",
        "city": "Naguanagua, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-868.78.23",
          "0241-617.52.12",
          "0241-217.99.07",
          "0241-417.15.46"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Naguanagua/Naguanagua/",
        "details": {
          "Codigo": "0806000",
          "Direccion": "Av. 96-b, C.c. Crstal, Pb. Local B-06 A Dos Locales Del Banco Bicentenario, Por La Entrada Principal. Naguanagua, Edo. Carabobo",
          "Ciudad": "Naguanagua, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-868.78.23 | 0241-617.52.12 | 0241-217.99.07 | 0241-868.78.23 | 0241-417.15.46"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.242749,-68.006612",
        "lat": 10.242749,
        "lng": -68.006612
      },
      {
        "id": "mrw-carabobo-paraparal",
        "name": "PARAPARAL",
        "code": "0826000",
        "address": "Centro Comercial Galerías Paraparal, Local B-22 . Av. Principal De Paraparal, Estado Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Paraparal/",
        "details": {
          "Codigo": "0826000",
          "Direccion": "Centro Comercial Galerías Paraparal, Local B-22 . Av. Principal De Paraparal, Estado Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.19870446032424,-67.92052927997442",
        "lat": 10.19870446032424,
        "lng": -67.92052927997442
      },
      {
        "id": "mrw-carabobo-puerto-cabello",
        "name": "PUERTO CABELLO",
        "code": "0803000",
        "address": "Calle Rondon Edificio El Naranjal Local N° 2 Frente Al Templo El Refugio, Al Lado De La Clinica San Agustin. Puerto Cabello Edo. Carabobo",
        "city": "Puerto Cabello, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0242-362.09.35",
          "0242-361.80.61",
          "0242-362.15.68"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Puerto_Cabello/Puerto_Cabello/",
        "details": {
          "Codigo": "0803000",
          "Direccion": "Calle Rondon Edificio El Naranjal Local N° 2 Frente Al Templo El Refugio, Al Lado De La Clinica San Agustin. Puerto Cabello Edo. Carabobo",
          "Ciudad": "Puerto Cabello, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0242-362.09.35 | 0242-361.80.61 | 0242-362.15.68 | 0242-361.80.61"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.466321,-68.01004",
        "lat": 10.466321,
        "lng": -68.01004
      },
      {
        "id": "mrw-carabobo-san-diego-terrazas-de-castillito",
        "name": "SAN DIEGO TERRAZAS DE CASTILLITO",
        "code": "0818000",
        "address": "Av. Don Julio Centeno, Calle 103, C.c Prati Nivel Pb, Local L-4 Urb. Terrazas De Castillito. Frente Al Mar De La Ceramica.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-871.79.01",
          "0241-995.53.54",
          "0241-617.03.36"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/San_Diego_Terrazas_De_Castillito/",
        "details": {
          "Codigo": "0818000",
          "Direccion": "Av. Don Julio Centeno, Calle 103, C.c Prati Nivel Pb, Local L-4 Urb. Terrazas De Castillito. Frente Al Mar De La Ceramica.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-871.79.01 | 0241-871.79.01 | 0241-995.53.54 | 0241-617.03.36"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.194837,-67.963883",
        "lat": 10.194837,
        "lng": -67.963883
      },
      {
        "id": "mrw-carabobo-valencia-av-lara",
        "name": "VALENCIA AV. LARA",
        "code": "0823000",
        "address": "Av. Lara Con Calle Uslar, Local 87-107. Frente A Molinari Caccia Guerra, Valencia Carabobo. ,17",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-615.26.28",
          "0241-858.00.43"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_Av_Lara/",
        "details": {
          "Codigo": "0823000",
          "Direccion": "Av. Lara Con Calle Uslar, Local 87-107. Frente A Molinari Caccia Guerra, Valencia Carabobo. ,17",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-615.26.28 | 0241-858.00.43"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.179958,-67.990962",
        "lat": 10.179958,
        "lng": -67.990962
      },
      {
        "id": "mrw-carabobo-valencia-big-low",
        "name": "VALENCIA BIG LOW",
        "code": "0801000",
        "address": "Calle 97, C.c. Ciudad Valencia, Pb, Local B4. Urb. Zona Industrial Castillito. Valencia, Estado Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-871.60.90",
          "0241-871.60.40",
          "0241-871.52.46"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_Big_Low/",
        "details": {
          "Codigo": "0801000",
          "Direccion": "Calle 97, C.c. Ciudad Valencia, Pb, Local B4. Urb. Zona Industrial Castillito. Valencia, Estado Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-871.60.90 | 0241-871.60.40 | 0241-871.52.46 | 0241-871.60.40"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.194944,-67.966712",
        "lat": 10.194944,
        "lng": -67.966712
      },
      {
        "id": "mrw-carabobo-valencia-centro",
        "name": "VALENCIA CENTRO",
        "code": "0800000",
        "address": "Av. Miranda Local 118-31 Mrw Diagonal A Damasco, Av. Rojas Queipo, Sector San Jose Valencia-carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-822.67.29",
          "0241-822.68.81",
          "0241-822.67.95",
          "0241-825.20.52"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_Centro/",
        "details": {
          "Codigo": "0800000",
          "Direccion": "Av. Miranda Local 118-31 Mrw Diagonal A Damasco, Av. Rojas Queipo, Sector San Jose Valencia-carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-822.67.29 | 0241-822.68.81 | 0241-822.67.95 | 0241-825.20.52"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.197774,-68.005435",
        "lat": 10.197774,
        "lng": -68.005435
      },
      {
        "id": "mrw-carabobo-valencia-el-parral",
        "name": "VALENCIA EL PARRAL",
        "code": "0814000",
        "address": "Las 4 Avenidas, C.c. Profesional Ceravica Pb, Local 2, Urb. El Parral - Edo. Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-825.39.29",
          "0241-825.75.85",
          "0241-619.00.71"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_El_Parral/",
        "details": {
          "Codigo": "0814000",
          "Direccion": "Las 4 Avenidas, C.c. Profesional Ceravica Pb, Local 2, Urb. El Parral - Edo. Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-825.39.29 | 0241-825.75.85 | 0241-825.39.29 | 0241-619.00.71"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.206328,-68.027472",
        "lat": 10.206328,
        "lng": -68.027472
      },
      {
        "id": "mrw-carabobo-valencia-el-trigal",
        "name": "VALENCIA EL TRIGAL",
        "code": "0805000",
        "address": "Av. Principal De Mañongo, C.c. Patio Trigal. Nivel Pb Local 208 A Urb Trigal Norte, Valencia Carabobo Zona Postal 2001.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-843.0828",
          "0241-843.23.67",
          "0241-842.69.32"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_El_Trigal/",
        "details": {
          "Codigo": "0805000",
          "Direccion": "Av. Principal De Mañongo, C.c. Patio Trigal. Nivel Pb Local 208 A Urb Trigal Norte, Valencia Carabobo Zona Postal 2001.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-843.0828 | 0241-843.23.67 | 0241-842.69.32 | 0241-843.23.67"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.226637,-67.996996",
        "lat": 10.226637,
        "lng": -67.996996
      },
      {
        "id": "mrw-carabobo-valencia-gobernacion",
        "name": "VALENCIA GOBERNACIÓN",
        "code": "0820000",
        "address": "Calle Paez Entre Montes De Oca Y Carabobo C.c. Papin Pb Local Nro 1, Centro De Valencia ( Cerca Del Capitolio). Edo Carabobo. ,17",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-857.02.12",
          "0241-989.05.51",
          "0241-817.25.67"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_GobernaciOn/",
        "details": {
          "Codigo": "0820000",
          "Direccion": "Calle Paez Entre Montes De Oca Y Carabobo C.c. Papin Pb Local Nro 1, Centro De Valencia ( Cerca Del Capitolio). Edo Carabobo. ,17",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-857.02.12 | 0241-857.02.12 | 0241-989.05.51 | 0241-817.25.67"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.180960,-68.008455",
        "lat": 10.18096,
        "lng": -68.008455
      },
      {
        "id": "mrw-carabobo-valencia-la-candelaria",
        "name": "VALENCIA LA CANDELARIA",
        "code": "0810000",
        "address": "Av. Aranzazu, Edificio Vorma, Piso P.b., Local Pb-3, La Candelaria. Valencia Edo. Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-831.27.65",
          "0241-897.84.67",
          "0241-831.43.97",
          "0241-831.86.70"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_La_Candelaria/",
        "details": {
          "Codigo": "0810000",
          "Direccion": "Av. Aranzazu, Edificio Vorma, Piso P.b., Local Pb-3, La Candelaria. Valencia Edo. Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-831.27.65 | 0241-897.84.67 | 0241-831.43.97 | 0241-831.86.70"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.174248,-68.011492",
        "lat": 10.174248,
        "lng": -68.011492
      },
      {
        "id": "mrw-carabobo-valencia-norte",
        "name": "VALENCIA NORTE",
        "code": "0816000",
        "address": "Av. Bolivar Norte, Sector Majay, Local Nº 151-54, , Frente A La Torre Princiapal (banco Bnc). Valencia, Edo. Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-826.80.96",
          "0241-826.90.62",
          "0241-826.95.53",
          "0241-826.94.21"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_Norte/",
        "details": {
          "Codigo": "0816000",
          "Direccion": "Av. Bolivar Norte, Sector Majay, Local Nº 151-54, , Frente A La Torre Princiapal (banco Bnc). Valencia, Edo. Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-826.80.96 | 0241-826.90.62 | 0241-826.95.53 | 0241-826.94.21"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.220879,-68.009288",
        "lat": 10.220879,
        "lng": -68.009288
      },
      {
        "id": "mrw-carabobo-valencia-san-diego",
        "name": "VALENCIA SAN DIEGO",
        "code": "0815000",
        "address": "Av. Don Julio Centeno C.c. Metro Plaza P.b Local 33 San Diego Edo. Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-871.19.30",
          "0241-415.73.13",
          "0241-817.18.96",
          "0241-872.47.47"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_San_Diego/",
        "details": {
          "Codigo": "0815000",
          "Direccion": "Av. Don Julio Centeno C.c. Metro Plaza P.b Local 33 San Diego Edo. Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-871.19.30 | 0241-871.19.30 | 0241-415.73.13 | 0241-817.18.96 | 0241-872.47.47"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.207803,-67.962601",
        "lat": 10.207803,
        "lng": -67.962601
      },
      {
        "id": "mrw-carabobo-valencia-sur",
        "name": "VALENCIA SUR",
        "code": "0808000",
        "address": "Autopista Valencia - Campo Carabobo. Centro Comercial El Prado, Planta Baja Local B 6. Los Caobos, Valencia-edo.carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-808.00.14",
          "0241-218.66.38",
          "0241-835.76.99"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_Sur/",
        "details": {
          "Codigo": "0808000",
          "Direccion": "Autopista Valencia - Campo Carabobo. Centro Comercial El Prado, Planta Baja Local B 6. Los Caobos, Valencia-edo.carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-808.00.14 | 0241-218.66.38 | 0241-835.76.99 | 0241-835.76.99"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.159099,-68.024767",
        "lat": 10.159099,
        "lng": -68.024767
      },
      {
        "id": "mrw-carabobo-valencia-zona-ind",
        "name": "VALENCIA ZONA IND.",
        "code": "0811000",
        "address": "Av.prolongacion Michelena C.c. Mycra Local 10 Zona Industrial Valencia.",
        "city": "Valencia, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "0241-832.50.28",
          "0241-832.60.61",
          "0241-617.88.31"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Carabobo/Valencia/Valencia_Zona_Ind/",
        "details": {
          "Codigo": "0811000",
          "Direccion": "Av.prolongacion Michelena C.c. Mycra Local 10 Zona Industrial Valencia.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "0241-832.50.28 | 0241-832.60.61 | 0241-617.88.31 | 0241-832.60.61"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.174423,-67.974932",
        "lat": 10.174423,
        "lng": -67.974932
      }
    ],
    "Cojedes": [
      {
        "id": "mrw-cojedes-san-carlos",
        "name": "SAN CARLOS",
        "code": "0900000",
        "address": "Calle Sucre Entre Zamora Y Libertad Local #8-33, Edo. Cojedes.",
        "city": "San Carlos, Cojedes",
        "schedule": "No Disponible",
        "phones": [
          "0258-433.13.36",
          "0258-433.10.23",
          "0258-511.18.99"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Cojedes/San_Carlos/San_Carlos/",
        "details": {
          "Codigo": "0900000",
          "Direccion": "Calle Sucre Entre Zamora Y Libertad Local #8-33, Edo. Cojedes.",
          "Ciudad": "San Carlos, Cojedes",
          "Horario": "No Disponible",
          "Telefono(s)": "0258-433.13.36 | 0258-433.10.23 | 0258-433.10.23 | 0258-511.18.99"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.661140,-68.592579",
        "lat": 9.66114,
        "lng": -68.592579
      },
      {
        "id": "mrw-cojedes-tinaquillo",
        "name": "TINAQUILLO",
        "code": "0901000",
        "address": "Av. Madariaga, Entre Calle Cedeño Y Calle Negro Primero, Tinaquillo - Estado Cojedes",
        "city": "Tinaquillo, Cojedes",
        "schedule": "No Disponible",
        "phones": [
          "0258-766.15.89",
          "0258-766.04.41",
          "0258-766.61.09"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Cojedes/Tinaquillo/Tinaquillo/",
        "details": {
          "Codigo": "0901000",
          "Direccion": "Av. Madariaga, Entre Calle Cedeño Y Calle Negro Primero, Tinaquillo - Estado Cojedes",
          "Ciudad": "Tinaquillo, Cojedes",
          "Horario": "No Disponible",
          "Telefono(s)": "0258-766.15.89 | 0258-766.04.41 | 0258-766.04.41 | 0258-766.61.09"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.917131,-68.303607",
        "lat": 9.917131,
        "lng": -68.303607
      }
    ],
    "Delta_Amacuro": [
      {
        "id": "mrw-delta-amacuro-tucupita",
        "name": "TUCUPITA",
        "code": "1000000",
        "address": "Calle Dalla Costa # 22, Local 1, Edf. Ciarcia Frente A La Plaza Bolivar, Pq. San Jose, Mncp: Tucupita, Cd: Tucupita Edo: Delta Amacuro.",
        "city": "Tucupita, Delta Amacuro",
        "schedule": "No Disponible",
        "phones": [
          "0287-721.08.79",
          "0287-721.44.66"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Delta_Amacuro/Tucupita/Tucupita/",
        "details": {
          "Codigo": "1000000",
          "Direccion": "Calle Dalla Costa # 22, Local 1, Edf. Ciarcia Frente A La Plaza Bolivar, Pq. San Jose, Mncp: Tucupita, Cd: Tucupita Edo: Delta Amacuro.",
          "Ciudad": "Tucupita, Delta Amacuro",
          "Horario": "No Disponible",
          "Telefono(s)": "0287-721.08.79 | 0287-721.44.66 | 0287-721.08.79"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.057097,-62.050932",
        "lat": 9.057097,
        "lng": -62.050932
      }
    ],
    "Distrito_Capital": [
      {
        "id": "mrw-distrito-capital-boleita",
        "name": "BOLEITA",
        "code": "0127000",
        "address": "Av. Las Palmas, Edif. Torre Don Leonardo, Piso Pb, Local 6, Urb. Boleita Sur, Caracas (petare), Zona Postal 1071",
        "city": "Boleita, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Distrito_Capital/Boleita/Boleita/",
        "details": {
          "Codigo": "0127000",
          "Direccion": "Av. Las Palmas, Edif. Torre Don Leonardo, Piso Pb, Local 6, Urb. Boleita Sur, Caracas (petare), Zona Postal 1071",
          "Ciudad": "Boleita, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.492951,-66.823265",
        "lat": 10.492951,
        "lng": -66.823265
      },
      {
        "id": "mrw-distrito-capital-el-junquito",
        "name": "EL JUNQUITO",
        "code": "0129000",
        "address": "El Junquito. Km 18, Cc. Casa Junco, Local A7, Punto De Referencia: Piso 1.",
        "city": "El Junquito, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "0212-422.37.99",
          "0212-325.61.78"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Distrito_Capital/El_Junquito/El_Junquito/",
        "details": {
          "Codigo": "0129000",
          "Direccion": "El Junquito. Km 18, Cc. Casa Junco, Local A7, Punto De Referencia: Piso 1.",
          "Ciudad": "El Junquito, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "0212-422.37.99 | 0212-325.61.78 | 0212-422.37.99"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.476943,-67.016269",
        "lat": 10.476943,
        "lng": -67.016269
      },
      {
        "id": "mrw-distrito-capital-la-california",
        "name": "LA CALIFORNIA",
        "code": "0149000",
        "address": "Av. Fco. De Miranda Con Av. Madrid C.c. Puertas Del Este, Local 5 La California Norte.",
        "city": "La California, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Distrito_Capital/La_California/La_California/",
        "details": {
          "Codigo": "0149000",
          "Direccion": "Av. Fco. De Miranda Con Av. Madrid C.c. Puertas Del Este, Local 5 La California Norte.",
          "Ciudad": "La California, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.48524,-66.82292",
        "lat": 10.48524,
        "lng": -66.82292
      }
    ],
    "Falcon": [
      {
        "id": "mrw-falcon-caja-de-agua",
        "name": "CAJA DE AGUA",
        "code": "1103000",
        "address": "Calle Manuelita Sáenz Entre Calle Comercio Y Providencia Sector, Sector Caja De Agua, Diagonal A La Iglesia Los Mormones, Local Nro. 01, Edo. Falcón.",
        "city": "Judibana, Falcon",
        "schedule": "8:00AM / 12:00PM",
        "phones": [
          "0269-245.87.30",
          "0269-246.89.34",
          "0269-414.40.15",
          "0269-416.42.24"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Judibana/Caja_De_Agua/",
        "details": {
          "Codigo": "1103000",
          "Direccion": "Calle Manuelita Sáenz Entre Calle Comercio Y Providencia Sector, Sector Caja De Agua, Diagonal A La Iglesia Los Mormones, Local Nro. 01, Edo. Falcón.",
          "Ciudad": "Judibana, Falcon",
          "Horario": "8:00AM / 12:00PM",
          "Telefono(s)": "0269-245.87.30 | 0269-246.89.34 | 0269-414.40.15 | 0269-416.42.24"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.712457,-70.191581",
        "lat": 11.712457,
        "lng": -70.191581
      },
      {
        "id": "mrw-falcon-coro",
        "name": "CORO",
        "code": "1100000",
        "address": "Calle Zamora. Esquina Callejon Las Flores E Iturbe Local S/n Sector Chimpire Coro Mcipio Miranda Edo Falcon Santa Ana De Coro.",
        "city": "Coro, Falcon",
        "schedule": "No Disponible",
        "phones": [
          "0268-252.69.86",
          "0268-252.56.72",
          "0268-252.17.07"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Coro/Coro/",
        "details": {
          "Codigo": "1100000",
          "Direccion": "Calle Zamora. Esquina Callejon Las Flores E Iturbe Local S/n Sector Chimpire Coro Mcipio Miranda Edo Falcon Santa Ana De Coro.",
          "Ciudad": "Coro, Falcon",
          "Horario": "No Disponible",
          "Telefono(s)": "0268-252.69.86 | 0268-252.56.72 | 0268-252.17.07 | 0268-252.69.86"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.410683,-69.670994",
        "lat": 11.410683,
        "lng": -69.670994
      },
      {
        "id": "mrw-falcon-el-castillo",
        "name": "EL CASTILLO",
        "code": "1105000",
        "address": "Avenida Manaure, Esquina Con Calle Monzon . C.c. El Castillo Don Leoncio, Pb, Local Nº 10. Coro.",
        "city": "Coro, Falcon",
        "schedule": "No Disponible",
        "phones": [
          "0268-253.60.86",
          "0268-417.19.86",
          "0268-411.70.08",
          "0268-253.67.63"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Coro/El_Castillo/",
        "details": {
          "Codigo": "1105000",
          "Direccion": "Avenida Manaure, Esquina Con Calle Monzon . C.c. El Castillo Don Leoncio, Pb, Local Nº 10. Coro.",
          "Ciudad": "Coro, Falcon",
          "Horario": "No Disponible",
          "Telefono(s)": "0268-253.60.86 | 0268-417.19.86 | 0268-411.70.08 | 0268-253.67.63 | 0268-253.67.63"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.402722,-69.672359",
        "lat": 11.402722,
        "lng": -69.672359
      },
      {
        "id": "mrw-falcon-puerta-maraven",
        "name": "PUERTA MARAVEN",
        "code": "1104000",
        "address": "Calle San Román Entre Av General Pelayo Y Av. Ollarvides, Diagonal A Rías Altas.",
        "city": "Dabajuro, Falcon",
        "schedule": "No Disponible",
        "phones": [
          "0269-248.77.85",
          "0269-2463038"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Dabajuro/Puerta_Maraven/",
        "details": {
          "Codigo": "1104000",
          "Direccion": "Calle San Román Entre Av General Pelayo Y Av. Ollarvides, Diagonal A Rías Altas.",
          "Ciudad": "Dabajuro, Falcon",
          "Horario": "No Disponible",
          "Telefono(s)": "0269-248.77.85 | 0269-2463038 | 0269-2463038"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.658290956091525,-70.19685672010422",
        "lat": 11.658290956091525,
        "lng": -70.19685672010422
      },
      {
        "id": "mrw-falcon-punto-fijo-av-monagas",
        "name": "PUNTO FIJO AV.MONAGAS",
        "code": "1106000",
        "address": "Calle Monagas Entre Garces Y Zamora Edif. Lucriscar Planta Baja, Punto Fijo-edo.falcon.",
        "city": "Punto Fijo, Falcon",
        "schedule": "No Disponible",
        "phones": [
          "0269-511.99.34",
          "0269-245.07.27"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Punto_Fijo/Punto_Fijo_Avmonagas/",
        "details": {
          "Codigo": "1106000",
          "Direccion": "Calle Monagas Entre Garces Y Zamora Edif. Lucriscar Planta Baja, Punto Fijo-edo.falcon.",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "No Disponible",
          "Telefono(s)": "0269-511.99.34 | 0269-245.07.27 | 0269-245.07.27"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.6912,-70.200283",
        "lat": 11.6912,
        "lng": -70.200283
      },
      {
        "id": "mrw-falcon-punto-fijo-centro",
        "name": "PUNTO FIJO CENTRO",
        "code": "1101000",
        "address": "Av Colombia Entre Ayacucho Y Peninsular Cc Don Jose Lay Nivel Pb Local 5b Sector Centro Punto Fijo Falcon.",
        "city": "Punto Fijo Centro, Falcón",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Punto_Fijo_Centro/Punto_Fijo_Centro/",
        "details": {
          "Codigo": "1101000",
          "Direccion": "Av Colombia Entre Ayacucho Y Peninsular Cc Don Jose Lay Nivel Pb Local 5b Sector Centro Punto Fijo Falcon.",
          "Ciudad": "Punto Fijo Centro, Falcón",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.68,-70.20",
        "lat": 11.68,
        "lng": -70.2
      },
      {
        "id": "mrw-falcon-tucacas",
        "name": "TUCACAS",
        "code": "1102000",
        "address": "Av Libertador De Tucacas, Diagonal Al Hotel La Suerte , Local Nro #1. Edo. Falcon.",
        "city": "Tucacas, Falcon",
        "schedule": "No Disponible",
        "phones": [
          "0259-812.32.98",
          "0259-882.17.58",
          "0259-416.05.13"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Falcon/Tucacas/Tucacas/",
        "details": {
          "Codigo": "1102000",
          "Direccion": "Av Libertador De Tucacas, Diagonal Al Hotel La Suerte , Local Nro #1. Edo. Falcon.",
          "Ciudad": "Tucacas, Falcon",
          "Horario": "No Disponible",
          "Telefono(s)": "0259-812.32.98 | 0259-882.17.58 | 0259-416.05.13"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.792738,-68.321324",
        "lat": 10.792738,
        "lng": -68.321324
      }
    ],
    "Guarico": [
      {
        "id": "mrw-guarico-altagracia-de-orituco",
        "name": "ALTAGRACIA DE ORITUCO",
        "code": "1205000",
        "address": "Calle Hurtado Ascanio Cruce Con Vuelvan Cara. Edf. Residencias La Paz, Pb, Local 2, Sector Las Brisas Del Este Altagracia De Orituco. Edo. Guarico.",
        "city": "Altagracia De Orituco, Guarico",
        "schedule": "No Disponible",
        "phones": [
          "0238-3342973",
          "0238-3340565"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Guarico/Altagracia_De_Orituco/Altagracia_De_Orituco/",
        "details": {
          "Codigo": "1205000",
          "Direccion": "Calle Hurtado Ascanio Cruce Con Vuelvan Cara. Edf. Residencias La Paz, Pb, Local 2, Sector Las Brisas Del Este Altagracia De Orituco. Edo. Guarico.",
          "Ciudad": "Altagracia De Orituco, Guarico",
          "Horario": "No Disponible",
          "Telefono(s)": "0238-3342973 | 0238-3340565 | 0238-3342973"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.855472,-66.379503",
        "lat": 9.855472,
        "lng": -66.379503
      },
      {
        "id": "mrw-guarico-calabozo",
        "name": "CALABOZO",
        "code": "1201000",
        "address": "Carretera 13, Entre Calles 13 Y 14, Local Nro S/n, Sector Casco Central Calabozo, Estado Guárico",
        "city": "Calabozo, Guarico",
        "schedule": "No Disponible",
        "phones": [
          "0246-871.79.02",
          "0246-871.92.72",
          "0246-871.57.19",
          "0246-414.80.59"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Guarico/Calabozo/Calabozo/",
        "details": {
          "Codigo": "1201000",
          "Direccion": "Carretera 13, Entre Calles 13 Y 14, Local Nro S/n, Sector Casco Central Calabozo, Estado Guárico",
          "Ciudad": "Calabozo, Guarico",
          "Horario": "No Disponible",
          "Telefono(s)": "0246-871.79.02 | 0246-871.92.72 | 0246-871.79.02 | 0246-871.57.19 | 0246-414.80.59"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.923212570409564,67.4299921620964",
        "lat": 8.923212570409564,
        "lng": 67.4299921620964
      },
      {
        "id": "mrw-guarico-s-juan-de-los-morros",
        "name": "S. JUAN DE LOS MORROS",
        "code": "1200000",
        "address": "Calle El Carmen, Edf. Rauseo, Local 2 Bajando Por La Gobernación, Diagonal A La Cantv.",
        "city": "San Juan De Los Morros, Guarico",
        "schedule": "No Disponible",
        "phones": [
          "0246-205.31.82",
          "0246-228.98.74",
          "0246-432.09.22"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Guarico/San_Juan_De_Los_Morros/S_Juan_De_Los_Morros/",
        "details": {
          "Codigo": "1200000",
          "Direccion": "Calle El Carmen, Edf. Rauseo, Local 2 Bajando Por La Gobernación, Diagonal A La Cantv.",
          "Ciudad": "San Juan De Los Morros, Guarico",
          "Horario": "No Disponible",
          "Telefono(s)": "0246-205.31.82 | 0246-228.98.74 | 0246-432.09.22 | 0246-432.09.22"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.915116,-67.355273",
        "lat": 9.915116,
        "lng": -67.355273
      },
      {
        "id": "mrw-guarico-tucupido",
        "name": "TUCUPIDO",
        "code": "1204000",
        "address": "Calle Salom Nro 24 Diagonal A La Alcaldia, Entre San Pablo Y Zaraza, Local Mrw Pb.",
        "city": "Tucupido, Guarico",
        "schedule": "No Disponible",
        "phones": [
          "0238-5520854"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Guarico/Tucupido/Tucupido/",
        "details": {
          "Codigo": "1204000",
          "Direccion": "Calle Salom Nro 24 Diagonal A La Alcaldia, Entre San Pablo Y Zaraza, Local Mrw Pb.",
          "Ciudad": "Tucupido, Guarico",
          "Horario": "No Disponible",
          "Telefono(s)": "0238-5520854 | 0238-5520854"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.274725496659391,-65.77430766291953",
        "lat": 9.274725496659391,
        "lng": -65.77430766291953
      },
      {
        "id": "mrw-guarico-valle-de-la-pascua",
        "name": "VALLE DE LA PASCUA",
        "code": "1202000",
        "address": "Calle Bolivar Entre Av. Libertador Y Calle Deleite, Local N° 58-1 Sector Centro, Diagonal A Poliguarico, Valle De La Pascua.",
        "city": "Valle De La Pascua, Guarico",
        "schedule": "No Disponible",
        "phones": [
          "0235-341.86.84",
          "0235-341.33.26",
          "0235-342.58.08"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Guarico/Valle_De_La_Pascua/Valle_De_La_Pascua/",
        "details": {
          "Codigo": "1202000",
          "Direccion": "Calle Bolivar Entre Av. Libertador Y Calle Deleite, Local N° 58-1 Sector Centro, Diagonal A Poliguarico, Valle De La Pascua.",
          "Ciudad": "Valle De La Pascua, Guarico",
          "Horario": "No Disponible",
          "Telefono(s)": "0235-341.86.84 | 0235-341.33.26 | 0235-341.86.84 | 0235-342.58.08"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.212806,-65.998180",
        "lat": 9.212806,
        "lng": -65.99818
      },
      {
        "id": "mrw-guarico-zaraza",
        "name": "ZARAZA",
        "code": "1203000",
        "address": "Calle Bolivar, Entre Ayacucho Y Sucre , Local Mrw, Pb, A 100 Mts Del Saime, Sector Centro, Zaraza, Estado Guarico.",
        "city": "Zaraza, Guarico",
        "schedule": "No Disponible",
        "phones": [
          "0238-762.19.02",
          "0238-511.56.69"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Guarico/Zaraza/Zaraza/",
        "details": {
          "Codigo": "1203000",
          "Direccion": "Calle Bolivar, Entre Ayacucho Y Sucre , Local Mrw, Pb, A 100 Mts Del Saime, Sector Centro, Zaraza, Estado Guarico.",
          "Ciudad": "Zaraza, Guarico",
          "Horario": "No Disponible",
          "Telefono(s)": "0238-762.19.02 | 0238-762.19.02 | 0238-511.56.69"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.347319,-65.324467",
        "lat": 9.347319,
        "lng": -65.324467
      }
    ],
    "Lara": [
      {
        "id": "mrw-lara-altagracia",
        "name": "ALTAGRACIA",
        "code": "1303200",
        "address": "Carretera 21, Entre Calle 20 Y 21, Local Comercial S/n, Edificio Nro. 20 – 81, Barquisimeto .",
        "city": "Altagracia, Lara",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Altagracia/Altagracia/",
        "details": {
          "Codigo": "1303200",
          "Direccion": "Carretera 21, Entre Calle 20 Y 21, Local Comercial S/n, Edificio Nro. 20 – 81, Barquisimeto .",
          "Ciudad": "Altagracia, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.068,-69.312",
        "lat": 10.068,
        "lng": -69.312
      },
      {
        "id": "mrw-lara-andres-bello",
        "name": "ANDRES BELLO",
        "code": "1300300",
        "address": "Av. Andres Bello, Entre Carrera 22 Y 23, Edf. Pulca 2, Locales 2 Y 3. Barquisimeto.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0212-880.43.17",
          "0212-793.14.72",
          "0212-881.60.30"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Andres_Bello/",
        "details": {
          "Codigo": "1300300",
          "Direccion": "Av. Andres Bello, Entre Carrera 22 Y 23, Edf. Pulca 2, Locales 2 Y 3. Barquisimeto.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0212-880.43.17 | 0212-793.14.72 | 0212-881.60.30 | 0212-793.14.72"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.069684,-69.313254",
        "lat": 10.069684,
        "lng": -69.313254
      },
      {
        "id": "mrw-lara-av-moran",
        "name": "AV. MORAN",
        "code": "1303100",
        "address": "Carrera 21 Con Calle 9, Barquisimeto, Estado Lara",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 5:00PM",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Av_Moran/",
        "details": {
          "Codigo": "1303100",
          "Direccion": "Carrera 21 Con Calle 9, Barquisimeto, Estado Lara",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 5:00PM",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.069171,-69.298903",
        "lat": 10.069171,
        "lng": -69.298903
      },
      {
        "id": "mrw-lara-av-venezuela",
        "name": "AV. VENEZUELA",
        "code": "1310000",
        "address": "Av Venezuela Con Calle 21, Edificio Lazio, Local Nro. 02, Bqto. Edo. Lara. C",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 5:00PM",
        "phones": [
          "0251-233.56.75",
          "0251-418.45.25"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Av_Venezuela/",
        "details": {
          "Codigo": "1310000",
          "Direccion": "Av Venezuela Con Calle 21, Edificio Lazio, Local Nro. 02, Bqto. Edo. Lara. C",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 5:00PM",
          "Telefono(s)": "0251-233.56.75 | 0251-233.56.75 | 0251-418.45.25"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.073560,-69.312544",
        "lat": 10.07356,
        "lng": -69.312544
      },
      {
        "id": "mrw-lara-babilom",
        "name": "BABILOM",
        "code": "1308000",
        "address": "Calle 19 Con Av Libertador Zona Industrial I C.c Libertador Local 13-b.",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 12:00PM",
        "phones": [
          "0251-237.57.79",
          "0251-928.00.97",
          "0251-511.74.94"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Babilom/",
        "details": {
          "Codigo": "1308000",
          "Direccion": "Calle 19 Con Av Libertador Zona Industrial I C.c Libertador Local 13-b.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 12:00PM",
          "Telefono(s)": "0251-237.57.79 | 0251-928.00.97 | 0251-237.57.79 | 0251-511.74.94"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.077511,-69.339444",
        "lat": 10.077511,
        "lng": -69.339444
      },
      {
        "id": "mrw-lara-barquisimeto-nueva-segovia",
        "name": "BARQUISIMETO NUEVA SEGOVIA",
        "code": "1307000",
        "address": "Calle 3 Entre Carrera 1 Y Av Lara, Casa Nro Al-99 Urb Nueva Segovia Barquisimeto Edo Lara",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251- 935.18.70",
          "0251-935.18.71",
          "0251-935.18.72",
          "0251-935.18.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Barquisimeto_Nueva_Segovia/",
        "details": {
          "Codigo": "1307000",
          "Direccion": "Calle 3 Entre Carrera 1 Y Av Lara, Casa Nro Al-99 Urb Nueva Segovia Barquisimeto Edo Lara",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251- 935.18.70 | 0251-935.18.71 | 0251-935.18.72 | 0251-935.18.73"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.064554,-69.295216",
        "lat": 10.064554,
        "lng": -69.295216
      },
      {
        "id": "mrw-lara-bqmeto-este",
        "name": "BQMETO ESTE",
        "code": "1303000",
        "address": "Calle 15, Entre Carreras 20 Y 21, Local No. 5, Diagonal A La Clinica San Francisco. Barquisimeto,estado Lara.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251-252.37.70",
          "0251-252.53.93",
          "0251-252.17.15"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Bqmeto_Este/",
        "details": {
          "Codigo": "1303000",
          "Direccion": "Calle 15, Entre Carreras 20 Y 21, Local No. 5, Diagonal A La Clinica San Francisco. Barquisimeto,estado Lara.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-252.37.70 | 0251-252.53.93 | 0251-252.17.15 | 0251-252.37.70"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.068485,-69.306644",
        "lat": 10.068485,
        "lng": -69.306644
      },
      {
        "id": "mrw-lara-bqmeto-oeste",
        "name": "BQMETO OESTE",
        "code": "1301000",
        "address": "Av. Florencio Jimenez, C.c. Arcoiris, Local 5, P.b., Frente Al Decanato De La Ucla, Barquisimeto, Edo. Lara.",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 12:00PM",
        "phones": [
          "0251-4413077",
          "0251-4427375",
          "0251-4431070"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Bqmeto_Oeste/",
        "details": {
          "Codigo": "1301000",
          "Direccion": "Av. Florencio Jimenez, C.c. Arcoiris, Local 5, P.b., Frente Al Decanato De La Ucla, Barquisimeto, Edo. Lara.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 12:00PM",
          "Telefono(s)": "0251-4413077 | 0251-4427375 | 0251-4431070 | 0251-4427375"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.0638,-69.361274",
        "lat": 10.0638,
        "lng": -69.361274
      },
      {
        "id": "mrw-lara-bqto-centro",
        "name": "BQTO CENTRO",
        "code": "1300000",
        "address": "Av. Venezuela Entre Calles 39 Y 40, Número 39-55, Sentido Oeste-este. Barquisimeto.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251-4459134",
          "0251-240.44.88",
          "0251-4459613"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Bqto_Centro/",
        "details": {
          "Codigo": "1300000",
          "Direccion": "Av. Venezuela Entre Calles 39 Y 40, Número 39-55, Sentido Oeste-este. Barquisimeto.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-4459134 | 0251-240.44.88 | 0251-4459134 | 0251-4459613"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.071487,-69.330903",
        "lat": 10.071487,
        "lng": -69.330903
      },
      {
        "id": "mrw-lara-cabudare",
        "name": "CABUDARE",
        "code": "1304000",
        "address": "Av. Santa Barbara, Entre Calles Guillermo Alvizu Y La Cruz, C.c. Sta. Barbara, Local 2, Detras Ferreteria Tabure. Código Postal 3023",
        "city": "Cabudare, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251-261.64.44",
          "0251-261.95.55",
          "0251-611.47.24",
          "0251-935.15.05"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Cabudare/Cabudare/",
        "details": {
          "Codigo": "1304000",
          "Direccion": "Av. Santa Barbara, Entre Calles Guillermo Alvizu Y La Cruz, C.c. Sta. Barbara, Local 2, Detras Ferreteria Tabure. Código Postal 3023",
          "Ciudad": "Cabudare, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-261.64.44 | 0251-261.95.55 | 0251-611.47.24 | 0251-935.15.05"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.033014950234612,-69.26017948943476",
        "lat": 10.033014950234612,
        "lng": -69.26017948943476
      },
      {
        "id": "mrw-lara-cabudare-sur",
        "name": "CABUDARE SUR",
        "code": "1309000",
        "address": "Av El Placer Local Trigalpa Nro 7 Urb El Trigal Los Rastrojos Lara, Gp",
        "city": "Cabudare, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251-418.26.48",
          "0251-418.26.60"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Cabudare/Cabudare_Sur/",
        "details": {
          "Codigo": "1309000",
          "Direccion": "Av El Placer Local Trigalpa Nro 7 Urb El Trigal Los Rastrojos Lara, Gp",
          "Ciudad": "Cabudare, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-418.26.48 | 0251-418.26.60"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.034372,-69.238268",
        "lat": 10.034372,
        "lng": -69.238268
      },
      {
        "id": "mrw-lara-canaima",
        "name": "CANAIMA",
        "code": "1300200",
        "address": "Calle 55 Entre Av. Pedro Leon Torres Y Carrera 19, C.c. Canaima, Local F-02. Zona Este Barquisimeto.",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 5:00PM",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Canaima/",
        "details": {
          "Codigo": "1300200",
          "Direccion": "Calle 55 Entre Av. Pedro Leon Torres Y Carrera 19, C.c. Canaima, Local F-02. Zona Este Barquisimeto.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 5:00PM",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.064008,-69.346627",
        "lat": 10.064008,
        "lng": -69.346627
      },
      {
        "id": "mrw-lara-carora",
        "name": "CARORA",
        "code": "1302000",
        "address": "Av Fco De Miranda / Clls 15a Y 16 Casa Nro 15 Sector Egidio Montesino-carora A 50 Mts De La Plaza Chio Zubillaga.",
        "city": "Carora, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0252-421.07.72",
          "0252-201.39.67",
          "0252-421.22.69"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Carora/Carora/",
        "details": {
          "Codigo": "1302000",
          "Direccion": "Av Fco De Miranda / Clls 15a Y 16 Casa Nro 15 Sector Egidio Montesino-carora A 50 Mts De La Plaza Chio Zubillaga.",
          "Ciudad": "Carora, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0252-421.07.72 | 0252-421.07.72 | 0252-201.39.67 | 0252-421.22.69"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.173098,-70.081354",
        "lat": 10.173098,
        "lng": -70.081354
      },
      {
        "id": "mrw-lara-el-recreo",
        "name": "EL RECREO",
        "code": "1308100",
        "address": "Av. Libertador. C.c. El Rosario. Local 5. Frente Al Ipasme",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 5:00PM",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/El_Recreo/",
        "details": {
          "Codigo": "1308100",
          "Direccion": "Av. Libertador. C.c. El Rosario. Local 5. Frente Al Ipasme",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 5:00PM",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.083112,-69.323332",
        "lat": 10.083112,
        "lng": -69.323332
      },
      {
        "id": "mrw-lara-patarata",
        "name": "PATARATA",
        "code": "1307100",
        "address": "Av. Libertador Entre Av. Argemiro Bracamonte Y Av. Lopez Contrera, Sector Patarata, Centro Recreacional Parque Jardin, Local 04, Barquisimeto Edo. Lara.",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00AM / 5:00PM",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Barquisimeto/Patarata/",
        "details": {
          "Codigo": "1307100",
          "Direccion": "Av. Libertador Entre Av. Argemiro Bracamonte Y Av. Lopez Contrera, Sector Patarata, Centro Recreacional Parque Jardin, Local 04, Barquisimeto Edo. Lara.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00AM / 5:00PM",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.079994,-69.293941",
        "lat": 10.079994,
        "lng": -69.293941
      },
      {
        "id": "mrw-lara-quibor",
        "name": "QUIBOR",
        "code": "1305000",
        "address": "Calle 8 Entre Avenida 8 Y 9 A 200mts Del Supermercado La Palma.",
        "city": "Quíbor, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0253-514.11.21",
          "0253-491.20.34"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Quibor/Quibor/",
        "details": {
          "Codigo": "1305000",
          "Direccion": "Calle 8 Entre Avenida 8 Y 9 A 200mts Del Supermercado La Palma.",
          "Ciudad": "Quíbor, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0253-514.11.21 | 0253-491.20.34 | 0253-491.20.34"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.927536522218347,-69.61906615874732",
        "lat": 9.927536522218347,
        "lng": -69.61906615874732
      },
      {
        "id": "mrw-lara-valle-lindo",
        "name": "VALLE LINDO",
        "code": "1306000",
        "address": "Autopista Via Duaca Km 10 Sector Sabana Grande Al Lado De La Farmacia San Ignacio, Zona Norte, Bqto.",
        "city": "Duaca, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251-886.15.94",
          "0251-817.27.70"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Lara/Duaca/Valle_Lindo/",
        "details": {
          "Codigo": "1306000",
          "Direccion": "Autopista Via Duaca Km 10 Sector Sabana Grande Al Lado De La Farmacia San Ignacio, Zona Norte, Bqto.",
          "Ciudad": "Duaca, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-886.15.94 | 0251-886.15.94 | 0251-817.27.70"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.169172,-69.313092",
        "lat": 10.169172,
        "lng": -69.313092
      }
    ],
    "Merida": [
      {
        "id": "mrw-merida-ejido",
        "name": "EJIDO",
        "code": "1404000",
        "address": "Av. Fernandez Peña Casa Planta Baja Nro 133-c Sector Montalban, A 100 Mts Del Diario Frontera. Centro Ejido Merida.",
        "city": "Ejido, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0274-221.38.57",
          "0274-221.67.74",
          "0274-245.83.86"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Ejido/Ejido/",
        "details": {
          "Codigo": "1404000",
          "Direccion": "Av. Fernandez Peña Casa Planta Baja Nro 133-c Sector Montalban, A 100 Mts Del Diario Frontera. Centro Ejido Merida.",
          "Ciudad": "Ejido, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0274-221.38.57 | 0274-221.67.74 | 0274-245.83.86 | 0274-221.38.57"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.548986,-71.238306",
        "lat": 8.548986,
        "lng": -71.238306
      },
      {
        "id": "mrw-merida-el-vigia",
        "name": "EL VIGIA",
        "code": "1402000",
        "address": "Av. 11, Local 2, Numero 6-21, Sector La Imagulada El Vigía En El Estado Mérida.",
        "city": "El Vigía, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0275-882.01.79",
          "0275-881.25.65",
          "0275-881.36.33"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/El_Vigia/El_Vigia/",
        "details": {
          "Codigo": "1402000",
          "Direccion": "Av. 11, Local 2, Numero 6-21, Sector La Imagulada El Vigía En El Estado Mérida.",
          "Ciudad": "El Vigía, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0275-882.01.79 | 0275-881.25.65 | 0275-881.36.33 | 0275-881.36.33"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.616976,-71.6",
        "lat": 8.616976,
        "lng": -71.6
      },
      {
        "id": "mrw-merida-mda-los-proceres",
        "name": "MDA LOS PROCERES",
        "code": "1406000",
        "address": "Av Los Proceres, Calle La Orquídea , Minicentro Comercial , Don Luis, Local 2b O Mrw",
        "city": "Mérida, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0274-266.75.63",
          "0274-266.71.55",
          "0274-415.12.09"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Merida/Mda_Los_Proceres/",
        "details": {
          "Codigo": "1406000",
          "Direccion": "Av Los Proceres, Calle La Orquídea , Minicentro Comercial , Don Luis, Local 2b O Mrw",
          "Ciudad": "Mérida, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0274-266.75.63 | 0274-266.71.55 | 0274-415.12.09"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.577583,-71.186393",
        "lat": 8.577583,
        "lng": -71.186393
      },
      {
        "id": "mrw-merida-merida-cubo-rojo",
        "name": "MERIDA CUBO ROJO",
        "code": "1400000",
        "address": "Av Gonzalo Picon Con Viaducto Miranda, Cc Cubo Rojo Nivel Pb Local 2,4,6,7,8 Sector Glorias Patrias Merida.",
        "city": "Mérida, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0274-263.82.16",
          "0274-263.58.85",
          "0274-416.99.16"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Merida/Merida_Cubo_Rojo/",
        "details": {
          "Codigo": "1400000",
          "Direccion": "Av Gonzalo Picon Con Viaducto Miranda, Cc Cubo Rojo Nivel Pb Local 2,4,6,7,8 Sector Glorias Patrias Merida.",
          "Ciudad": "Mérida, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0274-263.82.16 | 0274-263.58.85 | 0274-416.99.16 | 0274-263.58.85"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.588125,-71.154546",
        "lat": 8.588125,
        "lng": -71.154546
      },
      {
        "id": "mrw-merida-merida-milla",
        "name": "MERIDA MILLA",
        "code": "1405000",
        "address": "Av. Dos Lora, Centro Profesional Moli-rod, Pb, Local 4, Diagonal A La Plaza De Millacón, Mérida.",
        "city": "Mérida, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0274-252.27.94",
          "0274-251.20.83",
          "0274-252.85.71"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Merida/Merida_Milla/",
        "details": {
          "Codigo": "1405000",
          "Direccion": "Av. Dos Lora, Centro Profesional Moli-rod, Pb, Local 4, Diagonal A La Plaza De Millacón, Mérida.",
          "Ciudad": "Mérida, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0274-252.27.94 | 0274-251.20.83 | 0274-252.27.94 | 0274-252.85.71"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.597212448889334,-71.14695404802343",
        "lat": 8.597212448889334,
        "lng": -71.14695404802343
      },
      {
        "id": "mrw-merida-merida-paseo-de-la-feria",
        "name": "MERIDA PASEO DE LA FERIA",
        "code": "1401000",
        "address": "Av. Don Tulio Febres Cordero, Con Calle 29, Detrás Del Edf. Administrativo De La Ula, Edf. El Paseo Pb, Local único.",
        "city": "Mérida, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0274-252.56.66",
          "0274-252.37.27",
          "0274-252.93.70"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Merida/Merida_Paseo_De_La_Feria/",
        "details": {
          "Codigo": "1401000",
          "Direccion": "Av. Don Tulio Febres Cordero, Con Calle 29, Detrás Del Edf. Administrativo De La Ula, Edf. El Paseo Pb, Local único.",
          "Ciudad": "Mérida, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0274-252.56.66 | 0274-252.37.27 | 0274-252.93.70 | 0274-252.93.70"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.592518,-71.147430",
        "lat": 8.592518,
        "lng": -71.14743
      },
      {
        "id": "mrw-merida-tovar",
        "name": "TOVAR",
        "code": "1403000",
        "address": "Carretera 4ta. Cc El Llano Nivel Pb Local 4 Sector El Llano Tovar, Edo.merida,",
        "city": "Tovar, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0275-988.13.68",
          "0414-744.71.26",
          "0275-873.47.68",
          "0275-873.04.89"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Tovar/Tovar/",
        "details": {
          "Codigo": "1403000",
          "Direccion": "Carretera 4ta. Cc El Llano Nivel Pb Local 4 Sector El Llano Tovar, Edo.merida,",
          "Ciudad": "Tovar, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0275-988.13.68 | 0414-744.71.26 | 0275-873.47.68 | 0275-873.04.89"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.324256,-71.753001",
        "lat": 8.324256,
        "lng": -71.753001
      },
      {
        "id": "mrw-merida-tucanizon",
        "name": "TUCANIZON",
        "code": "1407000",
        "address": "Carretera Panamericana , Sector El Carmen,galpon 1, Al Lado De La Estacion De Servicio El Indio.tucanizon Edo Merida.",
        "city": "Tucani, Merida",
        "schedule": "No Disponible",
        "phones": [
          "0275-444.14.38"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Merida/Tucani/Tucanizon/",
        "details": {
          "Codigo": "1407000",
          "Direccion": "Carretera Panamericana , Sector El Carmen,galpon 1, Al Lado De La Estacion De Servicio El Indio.tucanizon Edo Merida.",
          "Ciudad": "Tucani, Merida",
          "Horario": "No Disponible",
          "Telefono(s)": "0275-444.14.38 | 0275-444.14.38"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.966192,-71.275704",
        "lat": 8.966192,
        "lng": -71.275704
      }
    ],
    "Miranda": [
      {
        "id": "mrw-miranda-carrizal",
        "name": "CARRIZAL",
        "code": "1500100",
        "address": "Kilómetro 21 De La Carretera Panamericana, Ingresando Por La Urbanización Montaña Alta, Local S-1, Centro Comercial Colinas De Carrizal, Frente Al Centro Comercial La Cascada, Carrizal Estado Miranda",
        "city": "Carrizal, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Carrizal/Carrizal/",
        "details": {
          "Codigo": "1500100",
          "Direccion": "Kilómetro 21 De La Carretera Panamericana, Ingresando Por La Urbanización Montaña Alta, Local S-1, Centro Comercial Colinas De Carrizal, Frente Al Centro Comercial La Cascada, Carrizal Estado Miranda",
          "Ciudad": "Carrizal, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10357203249381234,6700124854621886",
        "lat": 10357203249381234,
        "lng": 6700124854621886
      },
      {
        "id": "mrw-miranda-charallave",
        "name": "CHARALLAVE",
        "code": "1501000",
        "address": "Calle 9, Avenida Jose Gregorio Hernandez Con Avenida Bolivar Edf. Los Samanes Nro 03 Sector Casco Central Charallave Miranda.",
        "city": "Charallave, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0239-248.24.35",
          "0239-248.24.75",
          "0239-716.91.15"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Charallave/Charallave/",
        "details": {
          "Codigo": "1501000",
          "Direccion": "Calle 9, Avenida Jose Gregorio Hernandez Con Avenida Bolivar Edf. Los Samanes Nro 03 Sector Casco Central Charallave Miranda.",
          "Ciudad": "Charallave, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0239-248.24.35 | 0239-248.24.75 | 0239-248.24.35 | 0239-716.91.15"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.240259,-66.857937",
        "lat": 10.240259,
        "lng": -66.857937
      },
      {
        "id": "mrw-miranda-cua",
        "name": "CUA",
        "code": "1509000",
        "address": "Urbanizacion Jardines De Santa Rosa, C. C. El Colonial, Local 26-a, Cúa, Miranda.",
        "city": "Cúa, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0239-212.23.23",
          "0239-212.54.40"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Cua/Cua/",
        "details": {
          "Codigo": "1509000",
          "Direccion": "Urbanizacion Jardines De Santa Rosa, C. C. El Colonial, Local 26-a, Cúa, Miranda.",
          "Ciudad": "Cúa, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0239-212.23.23 | 0239-212.54.40 | 0239-212.23.23"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.169015,-66.888505",
        "lat": 10.169015,
        "lng": -66.888505
      },
      {
        "id": "mrw-miranda-guarenas",
        "name": "GUARENAS",
        "code": "1503000",
        "address": "C.c La Candelaria, Nivel Planta Baja, Local 01, Estado Miranda.",
        "city": "Guarenas, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0212-3620846",
          "0212-3633025",
          "0212-3635572"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Guarenas/Guarenas/",
        "details": {
          "Codigo": "1503000",
          "Direccion": "C.c La Candelaria, Nivel Planta Baja, Local 01, Estado Miranda.",
          "Ciudad": "Guarenas, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0212-3620846 | 0212-3633025 | 0212-3635572 | 0212-3633025"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.469689,-66.621637",
        "lat": 10.469689,
        "lng": -66.621637
      },
      {
        "id": "mrw-miranda-guatire",
        "name": "GUATIRE",
        "code": "1504000",
        "address": "Guatire, Calle Zamora Numero 47, Local Pb-1, Edificio Quinta Arelis.",
        "city": "Guatire, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Guatire/Guatire/",
        "details": {
          "Codigo": "1504000",
          "Direccion": "Guatire, Calle Zamora Numero 47, Local Pb-1, Edificio Quinta Arelis.",
          "Ciudad": "Guatire, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.475604,-66.545377",
        "lat": 10.475604,
        "lng": -66.545377
      },
      {
        "id": "mrw-miranda-guatire-oasis",
        "name": "GUATIRE OASIS",
        "code": "1510000",
        "address": "Av Intercomunal Guarenas , Guatire , Centro Comercial Oasis Center Planta Baja Local 15, Frente Al Banco Bicentenario",
        "city": "Guatire, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0212-844.51.19",
          "0212-326.16.06",
          "0212-429.12.79"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Guatire/Guatire_Oasis/",
        "details": {
          "Codigo": "1510000",
          "Direccion": "Av Intercomunal Guarenas , Guatire , Centro Comercial Oasis Center Planta Baja Local 15, Frente Al Banco Bicentenario",
          "Ciudad": "Guatire, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0212-844.51.19 | 0212-326.16.06 | 0212-429.12.79"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.465076,-66.571121",
        "lat": 10.465076,
        "lng": -66.571121
      },
      {
        "id": "mrw-miranda-higuerote",
        "name": "HIGUEROTE",
        "code": "1506000",
        "address": "Calle El Río, Cc Martí Plaza, Local 1, Higuerote Edo. Miranda,",
        "city": "Higuerote, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0234-323.27.51",
          "0234-514.55.83"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Higuerote/Higuerote/",
        "details": {
          "Codigo": "1506000",
          "Direccion": "Calle El Río, Cc Martí Plaza, Local 1, Higuerote Edo. Miranda,",
          "Ciudad": "Higuerote, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0234-323.27.51 | 0234-323.27.51 | 0234-514.55.83"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.485067,-66.100898",
        "lat": 10.485067,
        "lng": -66.100898
      },
      {
        "id": "mrw-miranda-los-teques",
        "name": "LOS TEQUES",
        "code": "1500000",
        "address": "Calle Sucre Norte, Locales Nro. 2 Y 15-1, Sector El Pueblo, Los Teques, Miranda",
        "city": "Los Teques, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Los_Teques/Los_Teques/",
        "details": {
          "Codigo": "1500000",
          "Direccion": "Calle Sucre Norte, Locales Nro. 2 Y 15-1, Sector El Pueblo, Los Teques, Miranda",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.349844,-67.043481",
        "lat": 10.349844,
        "lng": -67.043481
      },
      {
        "id": "mrw-miranda-ocumare-del-tuy",
        "name": "OCUMARE DEL TUY",
        "code": "1501500",
        "address": "Avenida Miranda Con Calle Toribio Mota, Edif. Televisa, Pb. Frente A La Parada De Parosca..",
        "city": "Ocumare Del Tuy, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0239-225.39.37",
          "0239-225.48.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Ocumare_Del_Tuy/Ocumare_Del_Tuy/",
        "details": {
          "Codigo": "1501500",
          "Direccion": "Avenida Miranda Con Calle Toribio Mota, Edif. Televisa, Pb. Frente A La Parada De Parosca..",
          "Ciudad": "Ocumare Del Tuy, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0239-225.39.37 | 0239-225.48.73 | 0239-225.39.37"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.117001,-66.77541",
        "lat": 10.117001,
        "lng": -66.77541
      },
      {
        "id": "mrw-miranda-rio-chico",
        "name": "RIO CHICO",
        "code": "1507000",
        "address": "Calle Comercio, Local Mrw. Al Lado De La Farmacia Las Mercedes, Río Chico- Municipio Páez- Edo. Miranda.",
        "city": "Río Chico, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0234-8724812",
          "0234-872.42.29"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Rio_Chico/Rio_Chico/",
        "details": {
          "Codigo": "1507000",
          "Direccion": "Calle Comercio, Local Mrw. Al Lado De La Farmacia Las Mercedes, Río Chico- Municipio Páez- Edo. Miranda.",
          "Ciudad": "Río Chico, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0234-8724812 | 0234-872.42.29 | 0234-8724812"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.316573,-65.977928",
        "lat": 10.316573,
        "lng": -65.977928
      },
      {
        "id": "mrw-miranda-san-antonio-de-los-altos",
        "name": "SAN ANTONIO DE LOS ALTOS",
        "code": "1505000",
        "address": "Carreta Panamericana, Kilometro 16, C.c. La Casona Ii, Piso 1, Local #2-17 Al Lado De Cinex,",
        "city": "San Antonio De Los Altos, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0212-372.48.77",
          "0212-373.50.01",
          "0212-373.19.91",
          "0212-373.52.77"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/San_Antonio_De_Los_Altos/San_Antonio_De_Los_Altos/",
        "details": {
          "Codigo": "1505000",
          "Direccion": "Carreta Panamericana, Kilometro 16, C.c. La Casona Ii, Piso 1, Local #2-17 Al Lado De Cinex,",
          "Ciudad": "San Antonio De Los Altos, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0212-372.48.77 | 0212-373.50.01 | 0212-373.19.91 | 0212-373.52.77"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.369778,-66.982711",
        "lat": 10.369778,
        "lng": -66.982711
      },
      {
        "id": "mrw-miranda-sta-teresa-del-tuy",
        "name": "STA TERESA DEL TUY",
        "code": "1508000",
        "address": "Calle Ayacucho Edif Don Guillermo Piso 1 Of 2 Zona Centro Santa Teresa Del Tuy Miranda.",
        "city": "Santa Teresa, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0239-231.74.63",
          "0239-611.71.84",
          "0239-231.35.19"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Miranda/Santa_Teresa/Sta_Teresa_Del_Tuy/",
        "details": {
          "Codigo": "1508000",
          "Direccion": "Calle Ayacucho Edif Don Guillermo Piso 1 Of 2 Zona Centro Santa Teresa Del Tuy Miranda.",
          "Ciudad": "Santa Teresa, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0239-231.74.63 | 0239-231.74.63 | 0239-611.71.84 | 0239-231.35.19"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.233783,-66.664674",
        "lat": 10.233783,
        "lng": -66.664674
      }
    ],
    "Monagas": [
      {
        "id": "mrw-monagas-maturin-av-raul-leoni",
        "name": "MATURIN AV. RAUL LEONI",
        "code": "1608000",
        "address": "Av. Raul Leoni Entre Carrera 3 (antigua Av. Rivas) Y Carrera 4 (antigua Prolongacion Cedeðo) Frente Al Polideportivo, Maturin Edo. Monagas",
        "city": "Maturín, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0291-641.03.85",
          "0291-314.29.97"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Maturin/Maturin_Av_Raul_Leoni/",
        "details": {
          "Codigo": "1608000",
          "Direccion": "Av. Raul Leoni Entre Carrera 3 (antigua Av. Rivas) Y Carrera 4 (antigua Prolongacion Cedeðo) Frente Al Polideportivo, Maturin Edo. Monagas",
          "Ciudad": "Maturín, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0291-641.03.85 | 0291-641.03.85 | 0291-314.29.97"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.748185876688478,-63.16701766670111",
        "lat": 9.748185876688478,
        "lng": -63.16701766670111
      },
      {
        "id": "mrw-monagas-maturin-centro",
        "name": "MATURIN CENTRO",
        "code": "1603000",
        "address": "Av Rojas Edif Bravo Piso P.b Local 01 Sector Centro Maturin Monagas",
        "city": "Maturín, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0291-643.88.15",
          "0291-643.26.67",
          "0291-315.25.51"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Maturin/Maturin_Centro/",
        "details": {
          "Codigo": "1603000",
          "Direccion": "Av Rojas Edif Bravo Piso P.b Local 01 Sector Centro Maturin Monagas",
          "Ciudad": "Maturín, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0291-643.88.15 | 0291-643.26.67 | 0291-315.25.51 | 0291-643.26.67"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.744426507604238,-63.182343675813314",
        "lat": 9.744426507604238,
        "lng": -63.182343675813314
      },
      {
        "id": "mrw-monagas-maturin-la-floresta",
        "name": "MATURIN LA FLORESTA",
        "code": "1609000",
        "address": "Cr 1 N¦ 4 C.c La Redoma Nivel Pb Local 5 Sector Brisas Del Aeropueto Maturin Monagas Zona Postal 6201",
        "city": "Maturín, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0291-314.32.29",
          "0291-641.59.64",
          "0291-315.69.61",
          "0291-315.63.89"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Maturin/Maturin_La_Floresta/",
        "details": {
          "Codigo": "1609000",
          "Direccion": "Cr 1 N¦ 4 C.c La Redoma Nivel Pb Local 5 Sector Brisas Del Aeropueto Maturin Monagas Zona Postal 6201",
          "Ciudad": "Maturín, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0291-314.32.29 | 0291-641.59.64 | 0291-315.69.61 | 0291-315.63.89"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.733327644892569,-63.19139889415848",
        "lat": 9.733327644892569,
        "lng": -63.19139889415848
      },
      {
        "id": "mrw-monagas-maturin-norte",
        "name": "MATURIN NORTE",
        "code": "1606000",
        "address": "Av. Ppal Via Viboral, Centro Comercial Las Colinas B, P.b. Local 09",
        "city": "Maturín, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0291-643.74.62",
          "0291-316.19.35",
          "0291-643.74.35"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Maturin/Maturin_Norte/",
        "details": {
          "Codigo": "1606000",
          "Direccion": "Av. Ppal Via Viboral, Centro Comercial Las Colinas B, P.b. Local 09",
          "Ciudad": "Maturín, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0291-643.74.62 | 0291-643.74.62 | 0291-316.19.35 | 0291-643.74.35"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.782847849760499,-63.19115003633186",
        "lat": 9.782847849760499,
        "lng": -63.19115003633186
      },
      {
        "id": "mrw-monagas-maturin-plaza-el-indio",
        "name": "MATURIN PLAZA EL INDIO",
        "code": "1610000",
        "address": "Av. Bicentenario Edif. Zamora, P.b. Diagonal Al Hospital Central De Maturin",
        "city": "Maturin, Monagas",
        "schedule": "8:00AM / 12:00PM",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Maturin/Maturin_Plaza_El_Indio/",
        "details": {
          "Codigo": "1610000",
          "Direccion": "Av. Bicentenario Edif. Zamora, P.b. Diagonal Al Hospital Central De Maturin",
          "Ciudad": "Maturin, Monagas",
          "Horario": "8:00AM / 12:00PM",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.741304692035948,-63.19772195582855",
        "lat": 9.741304692035948,
        "lng": -63.19772195582855
      },
      {
        "id": "mrw-monagas-maturin-zona-industrial",
        "name": "MATURIN ZONA INDUSTRIAL",
        "code": "1607000",
        "address": "Av. Principal De La Cruz, C.c Macarenas, Local # 23 Pb",
        "city": "Maturín, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0291-961.11.20",
          "0291-652.56.08",
          "0291-315.67.58",
          "0291-317.79.91"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Maturin/Maturin_Zona_Industrial/",
        "details": {
          "Codigo": "1607000",
          "Direccion": "Av. Principal De La Cruz, C.c Macarenas, Local # 23 Pb",
          "Ciudad": "Maturín, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0291-961.11.20 | 0291-652.56.08 | 0291-315.67.58 | 0291-317.79.91"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.721634244083685,-63.260218954358734",
        "lat": 9.721634244083685,
        "lng": -63.260218954358734
      },
      {
        "id": "mrw-monagas-punta-de-mata",
        "name": "PUNTA DE MATA",
        "code": "1602000",
        "address": "Calle 5 De Julio Cruce Con Calle Nueva, Local Mrw, Detr-s Del Banco Caroni W3w Despacho.aspira.impuestos",
        "city": "Punta De Mata, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0292-415.22.73",
          "0292-337.08.50",
          "0292-337.07.82"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Punta_De_Mata/Punta_De_Mata/",
        "details": {
          "Codigo": "1602000",
          "Direccion": "Calle 5 De Julio Cruce Con Calle Nueva, Local Mrw, Detr-s Del Banco Caroni W3w Despacho.aspira.impuestos",
          "Ciudad": "Punta De Mata, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0292-415.22.73 | 0292-337.08.50 | 0292-337.07.82"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.732466366962067,-63.18641841579158",
        "lat": 9.732466366962067,
        "lng": -63.18641841579158
      },
      {
        "id": "mrw-monagas-temblador",
        "name": "TEMBLADOR",
        "code": "1605000",
        "address": "Calle Bolivar. No 70-a. Diagonal A La Linea De Taxi Ejecutivo Del Sur.",
        "city": "Temblador, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "0287-792.19.89",
          "0287-792.27.89"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Monagas/Temblador/Temblador/",
        "details": {
          "Codigo": "1605000",
          "Direccion": "Calle Bolivar. No 70-a. Diagonal A La Linea De Taxi Ejecutivo Del Sur.",
          "Ciudad": "Temblador, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "0287-792.19.89 | 0287-792.27.89 | 0287-792.19.89"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.00700314575568,-62.643568576814964",
        "lat": 9.00700314575568,
        "lng": -62.643568576814964
      }
    ],
    "Nueva_Esparta": [
      {
        "id": "mrw-nueva-esparta-el-espinal",
        "name": "EL ESPINAL",
        "code": "1702100",
        "address": "Av. Juan Bautista Arismendi, Sector La Encrucijada Del Espinal Via San Juan Bautista. A 100 Metros De La Regional. El Espinal",
        "city": "San Juan Bautista, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/San_Juan_Bautista/El_Espinal/",
        "details": {
          "Codigo": "1702100",
          "Direccion": "Av. Juan Bautista Arismendi, Sector La Encrucijada Del Espinal Via San Juan Bautista. A 100 Metros De La Regional. El Espinal",
          "Ciudad": "San Juan Bautista, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.982777178132618,-63.979268926731926",
        "lat": 10.982777178132618,
        "lng": -63.979268926731926
      },
      {
        "id": "mrw-nueva-esparta-jovito-villalba",
        "name": "JOVITO VILLALBA",
        "code": "1704000",
        "address": "Av. Jovito Villalba, Local Estacion De Servicio Maneiro, Nro 9493, Urb San Lorenzo, Al Lado Del Sambil. Pampatar Edo. Nueva Esparta.",
        "city": "Pampatar, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "0295-262.53.16",
          "0295-262.48.82",
          "0295-262.60.44"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/Pampatar/Jovito_Villalba/",
        "details": {
          "Codigo": "1704000",
          "Direccion": "Av. Jovito Villalba, Local Estacion De Servicio Maneiro, Nro 9493, Urb San Lorenzo, Al Lado Del Sambil. Pampatar Edo. Nueva Esparta.",
          "Ciudad": "Pampatar, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "0295-262.53.16 | 0295-262.48.82 | 0295-262.60.44 | 0295-262.60.44"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.994878551493771,-63.8099027284142",
        "lat": 10.994878551493771,
        "lng": -63.8099027284142
      },
      {
        "id": "mrw-nueva-esparta-juan-griego",
        "name": "JUAN GRIEGO",
        "code": "1702000",
        "address": "Calle Guevara, N¦ 12 B, Entre Calles La Marina Y Marcano, Diagonal A Comercial Juan Griego.",
        "city": "Juan Griego, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "0295-253.63.30",
          "0295-414.95.01",
          "0295-311.46.67"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/Juan_Griego/Juan_Griego/",
        "details": {
          "Codigo": "1702000",
          "Direccion": "Calle Guevara, N¦ 12 B, Entre Calles La Marina Y Marcano, Diagonal A Comercial Juan Griego.",
          "Ciudad": "Juan Griego, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "0295-253.63.30 | 0295-414.95.01 | 0295-253.63.30 | 0295-311.46.67"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.082589129693599,-63.970826773967985",
        "lat": 11.082589129693599,
        "lng": -63.970826773967985
      },
      {
        "id": "mrw-nueva-esparta-nueva-cadiz",
        "name": "NUEVA CADIZ",
        "code": "1705000",
        "address": "Avenida Juan Bautista Arismendi, Edificio Ultra Mar , Local 2, Los Cocos, Diagonal A Citroen. Porlamar",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/Porlamar/Nueva_Cadiz/",
        "details": {
          "Codigo": "1705000",
          "Direccion": "Avenida Juan Bautista Arismendi, Edificio Ultra Mar , Local 2, Los Cocos, Diagonal A Citroen. Porlamar",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.95307134595112,-63.86194972072881",
        "lat": 10.95307134595112,
        "lng": -63.86194972072881
      },
      {
        "id": "mrw-nueva-esparta-porlamar",
        "name": "PORLAMAR",
        "code": "1701000",
        "address": "Calle Cedeño Cruce Con Calle Narvaez, Edificio R. Amaya & Cia , Planta Baja, Local S/n, Sector Tachira, Porlamar, Municipio Mariño Del Estado Nueva Esparta.",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/Porlamar/Porlamar/",
        "details": {
          "Codigo": "1701000",
          "Direccion": "Calle Cedeño Cruce Con Calle Narvaez, Edificio R. Amaya & Cia , Planta Baja, Local S/n, Sector Tachira, Porlamar, Municipio Mariño Del Estado Nueva Esparta.",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.960697359856736,-63.84350655246909",
        "lat": 10.960697359856736,
        "lng": -63.84350655246909
      },
      {
        "id": "mrw-nueva-esparta-porlamar-centro",
        "name": "PORLAMAR CENTRO",
        "code": "1706000",
        "address": "Calle Velazquez Con Esquina Fajardo, Casa S/n, Sector Centro Porlamar, Nueva Esparta.",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "0295-264.63.89",
          "0295-263.09.47",
          "0295-263.87.77"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/Porlamar/Porlamar_Centro/",
        "details": {
          "Codigo": "1706000",
          "Direccion": "Calle Velazquez Con Esquina Fajardo, Casa S/n, Sector Centro Porlamar, Nueva Esparta.",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "0295-264.63.89 | 0295-263.09.47 | 0295-263.87.77 | 0295-264.63.89"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.956936891522595,-63.84798872314384",
        "lat": 10.956936891522595,
        "lng": -63.84798872314384
      },
      {
        "id": "mrw-nueva-esparta-villa-rosa",
        "name": "VILLA ROSA",
        "code": "1707000",
        "address": "Av Juan Bautista Arismendi Local Galpon Seven-art Nro Planta Baja Sector San Antonio Norte Villa Rosa Nueva Esparta",
        "city": "Villa Rosa, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Nueva_Esparta/Villa_Rosa/Villa_Rosa/",
        "details": {
          "Codigo": "1707000",
          "Direccion": "Av Juan Bautista Arismendi Local Galpon Seven-art Nro Planta Baja Sector San Antonio Norte Villa Rosa Nueva Esparta",
          "Ciudad": "Villa Rosa, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.947403386053988,-63.921636824655195",
        "lat": 10.947403386053988,
        "lng": -63.921636824655195
      }
    ],
    "Portuguesa": [
      {
        "id": "mrw-portuguesa-acarigua",
        "name": "ACARIGUA",
        "code": "1801000",
        "address": "Calle 22. Entre Avenidas Libertador Y Alianza Diagonal A La Panaderia Trebol, Acarigua Centro. Edo. Portuguesa.",
        "city": "Acarigua, Portuguesa",
        "schedule": "No Disponible",
        "phones": [
          "0255-621.59.44",
          "0255-622.31.59",
          "0255-623.62.96"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Portuguesa/Acarigua/Acarigua/",
        "details": {
          "Codigo": "1801000",
          "Direccion": "Calle 22. Entre Avenidas Libertador Y Alianza Diagonal A La Panaderia Trebol, Acarigua Centro. Edo. Portuguesa.",
          "Ciudad": "Acarigua, Portuguesa",
          "Horario": "No Disponible",
          "Telefono(s)": "0255-621.59.44 | 0255-622.31.59 | 0255-623.62.96 | 0255-623.62.96"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.558532,-69.212572",
        "lat": 9.558532,
        "lng": -69.212572
      },
      {
        "id": "mrw-portuguesa-centro-los-llanos",
        "name": "CENTRO LOS LLANOS",
        "code": "1804000",
        "address": "Calle 31 Con Av 28 C.c Los Llanos Local 5 Planta Baja.",
        "city": "Acarigua, Portuguesa",
        "schedule": "No Disponible",
        "phones": [
          "0255-622.01.69",
          "0255-211.65.86",
          "0255-414.47.93"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Portuguesa/Acarigua/Centro_Los_Llanos/",
        "details": {
          "Codigo": "1804000",
          "Direccion": "Calle 31 Con Av 28 C.c Los Llanos Local 5 Planta Baja.",
          "Ciudad": "Acarigua, Portuguesa",
          "Horario": "No Disponible",
          "Telefono(s)": "0255-622.01.69 | 0255-211.65.86 | 0255-414.47.93 | 0255-622.01.69"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.560477,-69.204717",
        "lat": 9.560477,
        "lng": -69.204717
      },
      {
        "id": "mrw-portuguesa-guanare",
        "name": "GUANARE",
        "code": "1800000",
        "address": "Av. Principal Jose Maria Vargas Con Av. Simon Bolivar Centro Comercial Revica Galpon N. 4",
        "city": "Guanare, Portuguesa",
        "schedule": "No Disponible",
        "phones": [
          "0257-2514238",
          "0257-415.66.39",
          "0257-253-3512"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Portuguesa/Guanare/Guanare/",
        "details": {
          "Codigo": "1800000",
          "Direccion": "Av. Principal Jose Maria Vargas Con Av. Simon Bolivar Centro Comercial Revica Galpon N. 4",
          "Ciudad": "Guanare, Portuguesa",
          "Horario": "No Disponible",
          "Telefono(s)": "0257-2514238 | 0257-2514238 | 0257-415.66.39 | 0257-253-3512"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.033083,-69.740321",
        "lat": 9.033083,
        "lng": -69.740321
      },
      {
        "id": "mrw-portuguesa-turen",
        "name": "TUREN",
        "code": "1802000",
        "address": "Avenida 6, Entre Calle 8 Y 9, Turén Portuguesa.",
        "city": "Turén, Portuguesa",
        "schedule": "No Disponible",
        "phones": [
          "0256-730.13.59",
          "0256-321.34.97"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Portuguesa/Turen/Turen/",
        "details": {
          "Codigo": "1802000",
          "Direccion": "Avenida 6, Entre Calle 8 Y 9, Turén Portuguesa.",
          "Ciudad": "Turén, Portuguesa",
          "Horario": "No Disponible",
          "Telefono(s)": "0256-730.13.59 | 0256-321.34.97 | 0256-321.34.97"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.332935,-69.123615",
        "lat": 9.332935,
        "lng": -69.123615
      }
    ],
    "Sucre": [
      {
        "id": "mrw-sucre-carupano",
        "name": "CARUPANO",
        "code": "1901000",
        "address": "Av Universitaria Edif Prossein Piso Mezanina Local B Sector Los Molinos Carupano Sucre",
        "city": "Carúpano, Sucre",
        "schedule": "No Disponible",
        "phones": [
          "0294-331.43.10",
          "0294-514.94.83",
          "0294-331.42.97"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Sucre/Carupano/Carupano/",
        "details": {
          "Codigo": "1901000",
          "Direccion": "Av Universitaria Edif Prossein Piso Mezanina Local B Sector Los Molinos Carupano Sucre",
          "Ciudad": "Carúpano, Sucre",
          "Horario": "No Disponible",
          "Telefono(s)": "0294-331.43.10 | 0294-514.94.83 | 0294-331.42.97"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.642378022487527,-63.25623876038623",
        "lat": 10.642378022487527,
        "lng": -63.25623876038623
      },
      {
        "id": "mrw-sucre-cumana",
        "name": "CUMANA",
        "code": "1900000",
        "address": "Calle Mariño, Edif Turimiquire , Frente A La Cruz Roja De Cumana.",
        "city": "Cumaná, Sucre",
        "schedule": "No Disponible",
        "phones": [
          "0293-433.00.88",
          "0293-431.11.14",
          "0293-433.01.88"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Sucre/Cumana/Cumana/",
        "details": {
          "Codigo": "1900000",
          "Direccion": "Calle Mariño, Edif Turimiquire , Frente A La Cruz Roja De Cumana.",
          "Ciudad": "Cumaná, Sucre",
          "Horario": "No Disponible",
          "Telefono(s)": "0293-433.00.88 | 0293-431.11.14 | 0293-431.11.14 | 0293-433.01.88"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.463194187406774,-64.18565641678401",
        "lat": 10.463194187406774,
        "lng": -64.18565641678401
      },
      {
        "id": "mrw-sucre-cumana-urdaneta",
        "name": "CUMANA URDANETA",
        "code": "1902000",
        "address": "4ta Transversal De La Avenida Gran Mariscal. Edificio Ceu, P.b. Local 2 Mrw",
        "city": "Cumaná, Sucre",
        "schedule": "No Disponible",
        "phones": [
          "0293-431.20.73",
          "0293-431.11.60",
          "0293-431.56.95"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Sucre/Cumana/Cumana_Urdaneta/",
        "details": {
          "Codigo": "1902000",
          "Direccion": "4ta Transversal De La Avenida Gran Mariscal. Edificio Ceu, P.b. Local 2 Mrw",
          "Ciudad": "Cumaná, Sucre",
          "Horario": "No Disponible",
          "Telefono(s)": "0293-431.20.73 | 0293-431.11.60 | 0293-431.20.73 | 0293-431.56.95"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.4726423407558,-64.16803703351304",
        "lat": 10.4726423407558,
        "lng": -64.16803703351304
      }
    ],
    "Tachira": [
      {
        "id": "mrw-tachira-barrio-obrero",
        "name": "BARRIO OBRERO",
        "code": "2008000",
        "address": "Barrio Obrero, Carrera 22, Esquina Calle 12, Diagonal A La Plaza Los Mangos, Al Lado De La Capilla De Los Ahorcados, N° 22-9 San Cristobal Edo. Táchira",
        "city": "San Cristobal, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-356.77.31",
          "0276-355.75.21",
          "0276-356.63.11"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/San_Cristobal/Barrio_Obrero/",
        "details": {
          "Codigo": "2008000",
          "Direccion": "Barrio Obrero, Carrera 22, Esquina Calle 12, Diagonal A La Plaza Los Mangos, Al Lado De La Capilla De Los Ahorcados, N° 22-9 San Cristobal Edo. Táchira",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-356.77.31 | 0276-355.75.21 | 0276-356.77.31 | 0276-356.63.11"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.770796,-72.218302",
        "lat": 7.770796,
        "lng": -72.218302
      },
      {
        "id": "mrw-tachira-barrio-obrero-carrera-20",
        "name": "BARRIO OBRERO CARRERA 20",
        "code": "2000000",
        "address": "Barrio Obrero Calle 10 Carrera 20 No. 9-108, Local 6 Frente Licorer-a 9 Con 19. San Cristëbal Estado Tachira",
        "city": "San Cristobal, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-517.59.14",
          "0276-517.59.15",
          "0276-356.14.43",
          "0276-356.65.08"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/San_Cristobal/Barrio_Obrero_Carrera_20/",
        "details": {
          "Codigo": "2000000",
          "Direccion": "Barrio Obrero Calle 10 Carrera 20 No. 9-108, Local 6 Frente Licorer-a 9 Con 19. San Cristëbal Estado Tachira",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-517.59.14 | 0276-517.59.15 | 0276-356.14.43 | 0276-356.65.08"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.7682205284770065,-72.22064867467596",
        "lat": 7.7682205284770065,
        "lng": -72.22064867467596
      },
      {
        "id": "mrw-tachira-el-pinal",
        "name": "EL PIÑAL",
        "code": "2006000",
        "address": "Calle 1 Con Carrera 3, Local No. 1. Zona Comercial El Mirador. Via La Morita. Cerca De La E/s El Piðal",
        "city": "El Pinal, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0277-234.03.91",
          "0277-415.83.54"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/El_Pinal/El_PiNal/",
        "details": {
          "Codigo": "2006000",
          "Direccion": "Calle 1 Con Carrera 3, Local No. 1. Zona Comercial El Mirador. Via La Morita. Cerca De La E/s El Piðal",
          "Ciudad": "El Pinal, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0277-234.03.91 | 0277-234.03.91 | 0277-415.83.54"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.531381188625078,-71.96179596570428",
        "lat": 7.531381188625078,
        "lng": -71.96179596570428
      },
      {
        "id": "mrw-tachira-la-fria",
        "name": "LA FRIA",
        "code": "2003000",
        "address": "Carrera 11 Entre Calles 4 Y 5 Al Lado De Ramini La Fria Edo. Tachira",
        "city": "La Fría, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0277-415.44.82",
          "0277-415.43.65",
          "0277-541.19.37"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/La_Fria/La_Fria/",
        "details": {
          "Codigo": "2003000",
          "Direccion": "Carrera 11 Entre Calles 4 Y 5 Al Lado De Ramini La Fria Edo. Tachira",
          "Ciudad": "La Fría, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0277-415.44.82 | 0277-415.43.65 | 0277-541.19.37"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.214688017834678,-72.25000014102986",
        "lat": 8.214688017834678,
        "lng": -72.25000014102986
      },
      {
        "id": "mrw-tachira-la-grita",
        "name": "LA GRITA",
        "code": "2004000",
        "address": "Av Fco De Caceres Diagonal Al Colegio Sta Rosa De Lima , La Grita Edo. Tachira",
        "city": "La Grita, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0277-311.76.31",
          "0277-514.80.29"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/La_Grita/La_Grita/",
        "details": {
          "Codigo": "2004000",
          "Direccion": "Av Fco De Caceres Diagonal Al Colegio Sta Rosa De Lima , La Grita Edo. Tachira",
          "Ciudad": "La Grita, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0277-311.76.31 | 0277-514.80.29"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.133264938202345,-71.98614261548148",
        "lat": 8.133264938202345,
        "lng": -71.98614261548148
      },
      {
        "id": "mrw-tachira-paramillo",
        "name": "PARAMILLO",
        "code": "2011000",
        "address": "Barrio El Lobo Calle 1 Frente A La Manga De Coleo De Asogata, A 100 Mts De La Av. Los Agustinos, Residencias Marsee P.b. Sector Paramillo.",
        "city": "Paramillo, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-356.41.29",
          "0276-356.53.07",
          "0276-356.41.61"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/Paramillo/Paramillo/",
        "details": {
          "Codigo": "2011000",
          "Direccion": "Barrio El Lobo Calle 1 Frente A La Manga De Coleo De Asogata, A 100 Mts De La Av. Los Agustinos, Residencias Marsee P.b. Sector Paramillo.",
          "Ciudad": "Paramillo, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-356.41.29 | 0276-356.41.29 | 0276-356.53.07 | 0276-356.41.61"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.791915804020803,-72.20619724065122",
        "lat": 7.791915804020803,
        "lng": -72.20619724065122
      },
      {
        "id": "mrw-tachira-rubio",
        "name": "RUBIO",
        "code": "2005000",
        "address": "Centro Comercial Venezia Frente A La Plaza Bolivar De Rubio Sector Centr0o Locales 6 Y 7, Estado Tachira.",
        "city": "Rubio, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-762.54.47",
          "0276-424.47.72"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/Rubio/Rubio/",
        "details": {
          "Codigo": "2005000",
          "Direccion": "Centro Comercial Venezia Frente A La Plaza Bolivar De Rubio Sector Centr0o Locales 6 Y 7, Estado Tachira.",
          "Ciudad": "Rubio, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-762.54.47 | 0276-424.47.72 | 0276-762.54.47"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.770128520214142,-72.22115545552745",
        "lat": 7.770128520214142,
        "lng": -72.22115545552745
      },
      {
        "id": "mrw-tachira-s-antonio-del-tachira",
        "name": "S. ANTONIO DEL TACHIRA",
        "code": "2002000",
        "address": "Av Venezuela Con Calle 7 Edif Real Local N 7-09 Sector Centro, A Tres Cuadras De La Aduana Principal.",
        "city": "San Antonio Del Tachira, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-771.02.64",
          "0276-771.20.87",
          "0276-771.27.04",
          "0276-771.52.79",
          "0276-796.21.67",
          "0276-796.21.69"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/San_Antonio_Del_Tachira/S_Antonio_Del_Tachira/",
        "details": {
          "Codigo": "2002000",
          "Direccion": "Av Venezuela Con Calle 7 Edif Real Local N 7-09 Sector Centro, A Tres Cuadras De La Aduana Principal.",
          "Ciudad": "San Antonio Del Tachira, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-771.02.64 | 0276-771.20.87 | 0276-771.27.04 | 0276-771.27.04 | 0276-771.52.79 | 0276-796.21.67 | 0276-796.21.69"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.817990049333534,-72.44440962269171",
        "lat": 7.817990049333534,
        "lng": -72.44440962269171
      },
      {
        "id": "mrw-tachira-san-cristobal-centro",
        "name": "SAN CRISTOBAL CENTRO",
        "code": "2010000",
        "address": "7ma Av Entre Calle 5 Y 6 C.c. Partenën , Nivel P.b Local N¦ 3 Diagonal A La Torre Uniën, A Cuadra Y Media De La Plaza Bolivar, Sector Centro, San Cristobal Estado Tachira.",
        "city": "Capacho, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-342.50.34",
          "0276-342.34.17",
          "0276-424.60.69",
          "0276-516.79.01"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/Capacho/San_Cristobal_Centro/",
        "details": {
          "Codigo": "2010000",
          "Direccion": "7ma Av Entre Calle 5 Y 6 C.c. Partenën , Nivel P.b Local N¦ 3 Diagonal A La Torre Uniën, A Cuadra Y Media De La Plaza Bolivar, Sector Centro, San Cristobal Estado Tachira.",
          "Ciudad": "Capacho, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-342.50.34 | 0276-342.34.17 | 0276-424.60.69 | 0276-516.79.01"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.76602204239048,-72.23237672214098",
        "lat": 7.76602204239048,
        "lng": -72.23237672214098
      },
      {
        "id": "mrw-tachira-san-cristobal-concordia",
        "name": "SAN CRISTOBAL CONCORDIA",
        "code": "2001000",
        "address": "Calle 4 C/c Carreras 6 Y 7 Edf. Ram-rez Pb Local 1, Detr-s Del Diario La Naciën. La Concordia. San Cristëbal, Estado Tachira..",
        "city": "San Cristobal, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-346.88.82",
          "0276-347.44.90",
          "0276-889.84.41"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/San_Cristobal/San_Cristobal_Concordia/",
        "details": {
          "Codigo": "2001000",
          "Direccion": "Calle 4 C/c Carreras 6 Y 7 Edf. Ram-rez Pb Local 1, Detr-s Del Diario La Naciën. La Concordia. San Cristëbal, Estado Tachira..",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-346.88.82 | 0276-347.44.90 | 0276-889.84.41 | 0276-346.88.82"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.758111559889172,-72.23328548894746",
        "lat": 7.758111559889172,
        "lng": -72.23328548894746
      },
      {
        "id": "mrw-tachira-san-juan-de-colon",
        "name": "SAN JUAN DE COLON",
        "code": "2012000",
        "address": "C. 7 Esquina Carrera 5. No 4-79. San Juan De Colon.",
        "city": "Colón, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0277-291.52.46",
          "0277-808.53.27"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/Colon/San_Juan_De_Colon/",
        "details": {
          "Codigo": "2012000",
          "Direccion": "C. 7 Esquina Carrera 5. No 4-79. San Juan De Colon.",
          "Ciudad": "Colón, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0277-291.52.46 | 0277-808.53.27 | 0277-291.52.46"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.03426509019042,-72.26179906250293",
        "lat": 8.03426509019042,
        "lng": -72.26179906250293
      },
      {
        "id": "mrw-tachira-tariba",
        "name": "TARIBA",
        "code": "2007000",
        "address": "Calle 8, Con Carrera 8, Nº 7-87, Local Nº 3, A Dos Cuadras Del Hospital San Antonio.",
        "city": "Táriba, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-391.32.01",
          "0276-422.18.79",
          "0276-416.09.26"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/Tariba/Tariba/",
        "details": {
          "Codigo": "2007000",
          "Direccion": "Calle 8, Con Carrera 8, Nº 7-87, Local Nº 3, A Dos Cuadras Del Hospital San Antonio.",
          "Ciudad": "Táriba, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-391.32.01 | 0276-422.18.79 | 0276-416.09.26 | 0276-391.32.01"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.821747124558381,-72.22373474573386",
        "lat": 7.821747124558381,
        "lng": -72.22373474573386
      },
      {
        "id": "mrw-tachira-urena",
        "name": "UREÑA",
        "code": "2009000",
        "address": "Calle 5 Con Esquina Carrera 6, Edif. Sofi, Local 106, Barrio La Guajira. Ureña",
        "city": "Ureña, Tachira",
        "schedule": "No Disponible",
        "phones": [
          "0276-787.47.34",
          "0276-787.14.44",
          "0276-787.29.18"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Tachira/Urena/UreNa/",
        "details": {
          "Codigo": "2009000",
          "Direccion": "Calle 5 Con Esquina Carrera 6, Edif. Sofi, Local 106, Barrio La Guajira. Ureña",
          "Ciudad": "Ureña, Tachira",
          "Horario": "No Disponible",
          "Telefono(s)": "0276-787.47.34 | 0276-787.14.44 | 0276-787.29.18 | 0276-787.14.44"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.91624977063076,-72.4540388045285",
        "lat": 7.91624977063076,
        "lng": -72.4540388045285
      }
    ],
    "Trujillo": [
      {
        "id": "mrw-trujillo-bocono",
        "name": "BOCONO",
        "code": "2103000",
        "address": "Av. Miranda C/c C. Andres Bello. Local 2",
        "city": "Boconó, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "0272-652.46.76",
          "0272-652.49.30"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Bocono/Bocono/",
        "details": {
          "Codigo": "2103000",
          "Direccion": "Av. Miranda C/c C. Andres Bello. Local 2",
          "Ciudad": "Boconó, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "0272-652.46.76 | 0272-652.49.30 | 0272-652.46.76"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.242876740525235,-70.27058188855564",
        "lat": 9.242876740525235,
        "lng": -70.27058188855564
      },
      {
        "id": "mrw-trujillo-carache",
        "name": "CARACHE",
        "code": "2102000",
        "address": "Av. Principal Casa S/n Sector Palo Negro, Carache Estado Trujillo",
        "city": "Carache, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "0272-511.43.54",
          "0272-999.13.92"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Carache/Carache/",
        "details": {
          "Codigo": "2102000",
          "Direccion": "Av. Principal Casa S/n Sector Palo Negro, Carache Estado Trujillo",
          "Ciudad": "Carache, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "0272-511.43.54 | 0272-999.13.92 | 0272-999.13.92"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.62637980958744,-70.23188210914795",
        "lat": 9.62637980958744,
        "lng": -70.23188210914795
      },
      {
        "id": "mrw-trujillo-sabana-de-mendoza",
        "name": "SABANA DE MENDOZA",
        "code": "2106000",
        "address": "C.c. Sabana Mall, Av. Bolivar Con Calle Bermudez De Sabana De Mendoza, Municipio Sucre, Edo. Trujillo,",
        "city": "Sabana De Mendoza, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Sabana_De_Mendoza/Sabana_De_Mendoza/",
        "details": {
          "Codigo": "2106000",
          "Direccion": "C.c. Sabana Mall, Av. Bolivar Con Calle Bermudez De Sabana De Mendoza, Municipio Sucre, Edo. Trujillo,",
          "Ciudad": "Sabana De Mendoza, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.434551339375316,-70.77070722224428",
        "lat": 9.434551339375316,
        "lng": -70.77070722224428
      },
      {
        "id": "mrw-trujillo-trujillo",
        "name": "TRUJILLO",
        "code": "2100000",
        "address": "Av. Independencia Centro Comercial Los Torres Local 02, Trujillo Estado Trujillo.",
        "city": "Trujillo, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "0272-236.55.15",
          "0272-808.37.46",
          "0272-808.05.26"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Trujillo/Trujillo/",
        "details": {
          "Codigo": "2100000",
          "Direccion": "Av. Independencia Centro Comercial Los Torres Local 02, Trujillo Estado Trujillo.",
          "Ciudad": "Trujillo, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "0272-236.55.15 | 0272-808.37.46 | 0272-808.05.26 | 0272-236.55.15"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.369718382542098,-70.43527629870594",
        "lat": 9.369718382542098,
        "lng": -70.43527629870594
      },
      {
        "id": "mrw-trujillo-valera",
        "name": "VALERA",
        "code": "2101000",
        "address": "Calle 5 Entre Av. Bolivar Y 9. Edif. Don Pepe. P.b. Al Lado De La Antigua Sede.",
        "city": "Valera, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "0271-221.30.24",
          "0271-221.47.32",
          "0271-415.52.53",
          "0271-221.14.82"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Valera/Valera/",
        "details": {
          "Codigo": "2101000",
          "Direccion": "Calle 5 Entre Av. Bolivar Y 9. Edif. Don Pepe. P.b. Al Lado De La Antigua Sede.",
          "Ciudad": "Valera, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "0271-221.30.24 | 0271-221.47.32 | 0271-415.52.53 | 0271-221.14.82"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.31545550815666,-70.60584584051065",
        "lat": 9.31545550815666,
        "lng": -70.60584584051065
      },
      {
        "id": "mrw-trujillo-valera-centro",
        "name": "VALERA CENTRO",
        "code": "2105000",
        "address": "Av. 12 Entre Calles 8 Y 9, Edif. Beatriz, P.b., Local 1, A Una Cuadra De La Plaza Bol-var.",
        "city": "Valera, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Valera/Valera_Centro/",
        "details": {
          "Codigo": "2105000",
          "Direccion": "Av. 12 Entre Calles 8 Y 9, Edif. Beatriz, P.b., Local 1, A Una Cuadra De La Plaza Bol-var.",
          "Ciudad": "Valera, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.315079109145378,-70.60908455789537",
        "lat": 9.315079109145378,
        "lng": -70.60908455789537
      },
      {
        "id": "mrw-trujillo-valera-los-limoncitos",
        "name": "VALERA LOS LIMONCITOS",
        "code": "2104000",
        "address": "Av. Bolivar, Entre Calle 22 Y 23, Centro Comercial Arichuna, Nivel Pb, Local 14, Sector Los Limoncitos, Municipio Valera, Estado Trujillo.",
        "city": "Valera, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "0271-231.35.63",
          "0271-414.79.35",
          "0271-414.79.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Trujillo/Valera/Valera_Los_Limoncitos/",
        "details": {
          "Codigo": "2104000",
          "Direccion": "Av. Bolivar, Entre Calle 22 Y 23, Centro Comercial Arichuna, Nivel Pb, Local 14, Sector Los Limoncitos, Municipio Valera, Estado Trujillo.",
          "Ciudad": "Valera, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "0271-231.35.63 | 0271-231.35.63 | 0271-414.79.35 | 0271-414.79.73"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.300367195360668,-70.61385269148468",
        "lat": 9.300367195360668,
        "lng": -70.61385269148468
      }
    ],
    "Vargas": [
      {
        "id": "mrw-vargas-catia-la-mar",
        "name": "CATIA LA MAR",
        "code": "2201000",
        "address": "Calle 3 Y 8 C.c Profesional La Colina, Nivel Pb-5 Catia La Mar Edo. Vargas.",
        "city": "Catia La Mar, Vargas",
        "schedule": "No Disponible",
        "phones": [
          "0212-316.69.75",
          "0212-316.69.70",
          "0212-352.83.05"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Vargas/Catia_La_Mar/Catia_La_Mar/",
        "details": {
          "Codigo": "2201000",
          "Direccion": "Calle 3 Y 8 C.c Profesional La Colina, Nivel Pb-5 Catia La Mar Edo. Vargas.",
          "Ciudad": "Catia La Mar, Vargas",
          "Horario": "No Disponible",
          "Telefono(s)": "0212-316.69.75 | 0212-316.69.70 | 0212-352.83.05 | 0212-352.83.05"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.599374,-67.032893",
        "lat": 10.599374,
        "lng": -67.032893
      }
    ],
    "Yaracuy": [
      {
        "id": "mrw-yaracuy-nirgua",
        "name": "NIRGUA",
        "code": "2301000",
        "address": "Av. 5 Entre Calles 4 Y 5. Edif. Murcia, Local 3. Diagonal Al Banco Provincial, Sector Plaza Sucre. Nirgua.",
        "city": "Nirgua, Yaracuy",
        "schedule": "No Disponible",
        "phones": [
          "0254-572.55.45",
          "0254- 572.21.21"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Yaracuy/Nirgua/Nirgua/",
        "details": {
          "Codigo": "2301000",
          "Direccion": "Av. 5 Entre Calles 4 Y 5. Edif. Murcia, Local 3. Diagonal Al Banco Provincial, Sector Plaza Sucre. Nirgua.",
          "Ciudad": "Nirgua, Yaracuy",
          "Horario": "No Disponible",
          "Telefono(s)": "0254-572.55.45 | 0254-572.55.45 | 0254- 572.21.21"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.149915,-68.565877",
        "lat": 10.149915,
        "lng": -68.565877
      },
      {
        "id": "mrw-yaracuy-san-felipe",
        "name": "SAN FELIPE",
        "code": "2300000",
        "address": "Calle 12, Entre Avenida 8 Y 9, Edificio Don Jorge, Planta Baja, Local 3, Sector Caja De Agua, San Felipe, Estado Yaracuy.",
        "city": "San Felipe, Yaracuy",
        "schedule": "No Disponible",
        "phones": [
          "0254-231.80.92",
          "0254-231.71.45"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Yaracuy/San_Felipe/San_Felipe/",
        "details": {
          "Codigo": "2300000",
          "Direccion": "Calle 12, Entre Avenida 8 Y 9, Edificio Don Jorge, Planta Baja, Local 3, Sector Caja De Agua, San Felipe, Estado Yaracuy.",
          "Ciudad": "San Felipe, Yaracuy",
          "Horario": "No Disponible",
          "Telefono(s)": "0254-231.80.92 | 0254-231.71.45 | 0254-231.71.45"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.340352,-68.738470",
        "lat": 10.340352,
        "lng": -68.73847
      },
      {
        "id": "mrw-yaracuy-yaritagua",
        "name": "YARITAGUA",
        "code": "2303000",
        "address": "Calle 17 Entre Carreras 7 Y 8 Local S/n, Diagonal Al Registro Civil. Sector Centro Yaritagua - Yaracuy.",
        "city": "Yaritagua, Yaracuy",
        "schedule": "No Disponible",
        "phones": [
          "0251-829.72.14"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Yaracuy/Yaritagua/Yaritagua/",
        "details": {
          "Codigo": "2303000",
          "Direccion": "Calle 17 Entre Carreras 7 Y 8 Local S/n, Diagonal Al Registro Civil. Sector Centro Yaritagua - Yaracuy.",
          "Ciudad": "Yaritagua, Yaracuy",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-829.72.14"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.078376,-69.128987",
        "lat": 10.078376,
        "lng": -69.128987
      }
    ],
    "Zulia": [
      {
        "id": "mrw-zulia-cabimas",
        "name": "CABIMAS",
        "code": "2412000",
        "address": "Av Intercomunal, Esquina Cumana Edif Intercumana Local N 02 Pb Cabimas Edo Zulia.",
        "city": "Cabimas, Zulia",
        "schedule": "8:00AM / 2:00PM",
        "phones": [
          "0264-241.47.18",
          "0264-808.80.89",
          "0264-241.49.22"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Cabimas/Cabimas/",
        "details": {
          "Codigo": "2412000",
          "Direccion": "Av Intercomunal, Esquina Cumana Edif Intercumana Local N 02 Pb Cabimas Edo Zulia.",
          "Ciudad": "Cabimas, Zulia",
          "Horario": "8:00AM / 2:00PM",
          "Telefono(s)": "0264-241.47.18 | 0264-808.80.89 | 0264-241.47.18 | 0264-241.49.22"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.39890552074531,-71.44576410404672",
        "lat": 10.39890552074531,
        "lng": -71.44576410404672
      },
      {
        "id": "mrw-zulia-caja-seca",
        "name": "CAJA SECA",
        "code": "2424000",
        "address": "Ctra. Panamericana, C.c. Sagrado Corazon De Jesus, Nivel Pb, Local 1, Sector El Latino. Nueva Bolivia, Edo. Merida , Zona Postal 5115.",
        "city": "Caja Seca, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0271-772.27.59",
          "0271-416.29.32"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Caja_Seca/Caja_Seca/",
        "details": {
          "Codigo": "2424000",
          "Direccion": "Ctra. Panamericana, C.c. Sagrado Corazon De Jesus, Nivel Pb, Local 1, Sector El Latino. Nueva Bolivia, Edo. Merida , Zona Postal 5115.",
          "Ciudad": "Caja Seca, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0271-772.27.59 | 0271-772.27.59 | 0271-416.29.32"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.14213641938779,-71.0818224672427",
        "lat": 9.14213641938779,
        "lng": -71.0818224672427
      },
      {
        "id": "mrw-zulia-circunvalacion-2",
        "name": "CIRCUNVALACION 2",
        "code": "2400100",
        "address": "Parroquia Cecilio Acosta, Municipio Maracaibo, Av. 58 Circunvalacion N° 2 Edif, Casa Saas Piso: Pb, Local 98e-164 Barrio Entre Calles 98e Y 99, Barrio Andres Eloy Blanco",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-719.42.30"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Circunvalacion_2/",
        "details": {
          "Codigo": "2400100",
          "Direccion": "Parroquia Cecilio Acosta, Municipio Maracaibo, Av. 58 Circunvalacion N° 2 Edif, Casa Saas Piso: Pb, Local 98e-164 Barrio Entre Calles 98e Y 99, Barrio Andres Eloy Blanco",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-719.42.30"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.631539471793804,-71.66364906571424",
        "lat": 10.631539471793804,
        "lng": -71.66364906571424
      },
      {
        "id": "mrw-zulia-ciudad-ojeda",
        "name": "CIUDAD OJEDA",
        "code": "2404000",
        "address": "Av. Intercomunal. Sector Las Morochas. Frente A La Estacion De Servicio Central Sector Las Morochas",
        "city": "Ciudad Ojeda, Zulia",
        "schedule": "8:00AM / 2:00PM",
        "phones": [
          "0265-631.87.13",
          "0265-415.36.28",
          "0265-631.25.32"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Ciudad_Ojeda/Ciudad_Ojeda/",
        "details": {
          "Codigo": "2404000",
          "Direccion": "Av. Intercomunal. Sector Las Morochas. Frente A La Estacion De Servicio Central Sector Las Morochas",
          "Ciudad": "Ciudad Ojeda, Zulia",
          "Horario": "8:00AM / 2:00PM",
          "Telefono(s)": "0265-631.87.13 | 0265-631.87.13 | 0265-415.36.28 | 0265-631.25.32"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.199443906511913,-71.32861828284835",
        "lat": 10.199443906511913,
        "lng": -71.32861828284835
      },
      {
        "id": "mrw-zulia-coromoto",
        "name": "COROMOTO",
        "code": "2406200",
        "address": "Urbanizaciën Coromoto, Avenida 40, C.c. Villa Mall, Pb. 4.",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-717.50.96"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Coromoto/",
        "details": {
          "Codigo": "2406200",
          "Direccion": "Urbanizaciën Coromoto, Avenida 40, C.c. Villa Mall, Pb. 4.",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-717.50.96"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.5592628108392,-71.63508934113167",
        "lat": 10.5592628108392,
        "lng": -71.63508934113167
      },
      {
        "id": "mrw-zulia-curva-de-molina",
        "name": "CURVA DE MOLINA",
        "code": "2425000",
        "address": "Calle 79 Nro 92-58 Frente Al Modulo Libertador, Al Lado De La Ferreteria Rayen.",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-717.08.44",
          "0261-611.90.84",
          "0261-755.03.61",
          "0261-755.03.65"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Curva_De_Molina/",
        "details": {
          "Codigo": "2425000",
          "Direccion": "Calle 79 Nro 92-58 Frente Al Modulo Libertador, Al Lado De La Ferreteria Rayen.",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-717.08.44 | 0261-611.90.84 | 0261-755.03.61 | 0261-755.03.65"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.68608057542167,-71.68063603598236",
        "lat": 10.68608057542167,
        "lng": -71.68063603598236
      },
      {
        "id": "mrw-zulia-el-venado",
        "name": "EL VENADO",
        "code": "2416000",
        "address": "Av. Independencia, Centro Comercial San Antonio (los Duartes), Local #01, Mene Grande; Municipio Baralt Del Estado Zulia, Codigo Postal 4015",
        "city": "El Venado, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0267-358.50.54",
          "0267-807.65.16"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/El_Venado/El_Venado/",
        "details": {
          "Codigo": "2416000",
          "Direccion": "Av. Independencia, Centro Comercial San Antonio (los Duartes), Local #01, Mene Grande; Municipio Baralt Del Estado Zulia, Codigo Postal 4015",
          "Ciudad": "El Venado, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0267-358.50.54 | 0267-807.65.16 | 0267-358.50.54"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.817864362848162,-70.9303888228213",
        "lat": 9.817864362848162,
        "lng": -70.9303888228213
      },
      {
        "id": "mrw-zulia-la-chinita",
        "name": "LA CHINITA",
        "code": "2413000",
        "address": "Av.19 Con Calle 93, Edifico Padilla, Pb, Local 33, Al Lado Del Centro De Literatura Cristiana, Casco Central, Maracaibo",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-419.47.03",
          "0261-723.09.74",
          "0261-419.84.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/La_Chinita/",
        "details": {
          "Codigo": "2413000",
          "Direccion": "Av.19 Con Calle 93, Edifico Padilla, Pb, Local 33, Al Lado Del Centro De Literatura Cristiana, Casco Central, Maracaibo",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-419.47.03 | 0261-723.09.74 | 0261-723.09.74 | 0261-419.84.73"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.644755981518854,-71.6136623233157",
        "lat": 10.644755981518854,
        "lng": -71.6136623233157
      },
      {
        "id": "mrw-zulia-los-olivos",
        "name": "LOS OLIVOS",
        "code": "2400500",
        "address": "Av 28 La Limpia Con Avenida 69a Local #69b-09 Sector Los Aceitunos, Al Lado De La E/s Los Aceitunos",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-754.52.94",
          "0261-525.70.79",
          "0261-778.05.59"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Los_Olivos/",
        "details": {
          "Codigo": "2400500",
          "Direccion": "Av 28 La Limpia Con Avenida 69a Local #69b-09 Sector Los Aceitunos, Al Lado De La E/s Los Aceitunos",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-754.52.94 | 0261-525.70.79 | 0261-754.52.94 | 0261-778.05.59"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.675914190270818,-71.65819283206038",
        "lat": 10.675914190270818,
        "lng": -71.65819283206038
      },
      {
        "id": "mrw-zulia-machiques",
        "name": "MACHIQUES",
        "code": "2408000",
        "address": "Calle Union, Entre Avenidas Udon Perez Y Valle Frio, Casa S/n, Sector Valle Frio. Machiques",
        "city": "Machiques, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0263-473.03.96",
          "0263-808.77.64"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Machiques/Machiques/",
        "details": {
          "Codigo": "2408000",
          "Direccion": "Calle Union, Entre Avenidas Udon Perez Y Valle Frio, Casa S/n, Sector Valle Frio. Machiques",
          "Ciudad": "Machiques, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0263-473.03.96 | 0263-808.77.64 | 0263-473.03.96"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.054355239499436,-72.55663570446956",
        "lat": 10.054355239499436,
        "lng": -72.55663570446956
      },
      {
        "id": "mrw-zulia-manzanillo",
        "name": "MANZANILLO",
        "code": "2406000",
        "address": "Calle Union (10a) Con Av. 24, Sector Manzanillo, Local N¦2.",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-711.05.18",
          "0261-762.09.66",
          "0261-523.44.12"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Manzanillo/",
        "details": {
          "Codigo": "2406000",
          "Direccion": "Calle Union (10a) Con Av. 24, Sector Manzanillo, Local N¦2.",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-711.05.18 | 0261-762.09.66 | 0261-523.44.12"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.587584205043251,-71.62494329100133",
        "lat": 10.587584205043251,
        "lng": -71.62494329100133
      },
      {
        "id": "mrw-zulia-maracaibo-norte",
        "name": "MARACAIBO NORTE",
        "code": "2400600",
        "address": "Av. Paul Moreno, Antigua Fuerzas Armadas Con Calle 20, Edif. Milenium Farmacia Ya!, Marcaibo Edo-zulia",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Maracaibo_Norte/",
        "details": {
          "Codigo": "2400600",
          "Direccion": "Av. Paul Moreno, Antigua Fuerzas Armadas Con Calle 20, Edif. Milenium Farmacia Ya!, Marcaibo Edo-zulia",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "No Disponible"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.720756066693236,-71.6233388498742",
        "lat": 10.720756066693236,
        "lng": -71.6233388498742
      },
      {
        "id": "mrw-zulia-mbo-indio-mara",
        "name": "MBO INDIO MARA",
        "code": "2401000",
        "address": "Calle 78 Dr Portillo Entre Avenidas 16 Y 17 Local 17-35 Sector Para-so",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-798.50.66",
          "0261-798.30.01",
          "0261-797.37.73",
          "0261-714.90.25"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Mbo_Indio_Mara/",
        "details": {
          "Codigo": "2401000",
          "Direccion": "Calle 78 Dr Portillo Entre Avenidas 16 Y 17 Local 17-35 Sector Para-so",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-798.50.66 | 0261-798.30.01 | 0261-797.37.73 | 0261-714.90.25"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.662281228789102,-71.62143614436297",
        "lat": 10.662281228789102,
        "lng": -71.62143614436297
      },
      {
        "id": "mrw-zulia-mbo-irama",
        "name": "MBO IRAMA",
        "code": "2414000",
        "address": "Av 5 Con Calle E Local E-71 Sector 18 De Octubre A Pocos Metros De Frenos Irazuca",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-7436874",
          "0261-419.82.46",
          "0261-7432484"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Mbo_Irama/",
        "details": {
          "Codigo": "2414000",
          "Direccion": "Av 5 Con Calle E Local E-71 Sector 18 De Octubre A Pocos Metros De Frenos Irazuca",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-7436874 | 0261-419.82.46 | 0261-7432484 | 0261-7432484"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.692265347285627,-71.6113834882312",
        "lat": 10.692265347285627,
        "lng": -71.6113834882312
      },
      {
        "id": "mrw-zulia-mbo-la-lago",
        "name": "MBO LA LAGO",
        "code": "2423000",
        "address": "Av. 3e Entre Calle 72 Y 73 Edif. Asociación Zuliana De Ciegos, Local 3",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-7936685"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Mbo_La_Lago/",
        "details": {
          "Codigo": "2423000",
          "Direccion": "Av. 3e Entre Calle 72 Y 73 Edif. Asociación Zuliana De Ciegos, Local 3",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-7936685"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.671692566651219,-71.60348538880086",
        "lat": 10.671692566651219,
        "lng": -71.60348538880086
      },
      {
        "id": "mrw-zulia-mbo-la-limpia",
        "name": "MBO LA LIMPIA",
        "code": "2400000",
        "address": "Av. 28 (la Limpia) N¦ 14-54. Edif. Rodr-guez Y Barboza, Diagonal Al Hotel Maracaibo Suite. Pb",
        "city": "Maracaibo, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0261-783.47.20",
          "0261-783.18.75",
          "0261-759.50.92",
          "0261-417.43.82"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Maracaibo/Mbo_La_Limpia/",
        "details": {
          "Codigo": "2400000",
          "Direccion": "Av. 28 (la Limpia) N¦ 14-54. Edif. Rodr-guez Y Barboza, Diagonal Al Hotel Maracaibo Suite. Pb",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0261-783.47.20 | 0261-783.18.75 | 0261-759.50.92 | 0261-417.43.82"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.650359991444178,-71.63203480781765",
        "lat": 10.650359991444178,
        "lng": -71.63203480781765
      },
      {
        "id": "mrw-zulia-santa-barbara-del-zulia",
        "name": "SANTA BARBARA DEL ZULIA",
        "code": "2415000",
        "address": "Av 8 Casa N¦ 5-117 Sector Bolivar, Santa Barbara Zulia.",
        "city": "Santa Bárbara Del Zulia, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0275-555.06.05",
          "0275-555.24.84"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Santa_Barbara_Del_Zulia/Santa_Barbara_Del_Zulia/",
        "details": {
          "Codigo": "2415000",
          "Direccion": "Av 8 Casa N¦ 5-117 Sector Bolivar, Santa Barbara Zulia.",
          "Ciudad": "Santa Bárbara Del Zulia, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0275-555.06.05 | 0275-555.06.05 | 0275-555.24.84"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.999303745600683,-71.91559652688348",
        "lat": 8.999303745600683,
        "lng": -71.91559652688348
      },
      {
        "id": "mrw-zulia-tia-juana",
        "name": "TIA JUANA",
        "code": "2420000",
        "address": "Avenida Intercomunal De Tia Juana, Sector Ezequiel Zamora, Local # 1. Frente A Prodata Wire - Line. Tia Juana",
        "city": "Tía Juana, Zulia",
        "schedule": "8:00AM / 5:00PM",
        "phones": [
          "0265-631.47.43"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/MRW/Zulia/Tia_Juana/Tia_Juana/",
        "details": {
          "Codigo": "2420000",
          "Direccion": "Avenida Intercomunal De Tia Juana, Sector Ezequiel Zamora, Local # 1. Frente A Prodata Wire - Line. Tia Juana",
          "Ciudad": "Tía Juana, Zulia",
          "Horario": "8:00AM / 5:00PM",
          "Telefono(s)": "0265-631.47.43 | 0265-631.47.43"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.2325658615905,-71.35249661657916",
        "lat": 10.2325658615905,
        "lng": -71.35249661657916
      }
    ]
  },
  "zoom": {
    "#": [],
    "Amazonas": [
      {
        "id": "zoom-amazonas-zoom-av-orinoco",
        "name": "ZOOM AV ORINOCO",
        "code": "4070",
        "address": "Av. Orinoco Edif El Rey Piso P.b Local N°02 Zona Centro",
        "city": "Puerto Ayacucho, Amazonas",
        "schedule": "Lunes: 08:00 AM - 03:00 PM, Martes: 08:00 AM - 03:00 PM, Miercoles: 08:00 AM - 03:00 PM, Jueves: 08:00 AM - 03:00 PM, Viernes: 08:00 AM - 03:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02485215654"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Amazonas/Puerto_Ayacucho/Zoom_Av_Orinoco/",
        "details": {
          "Codigo": "4070",
          "Direccion": "Av. Orinoco Edif El Rey Piso P.b Local N°02 Zona Centro",
          "Ciudad": "Puerto Ayacucho, Amazonas",
          "Horario": "Lunes: 08:00 AM - 03:00 PM, Martes: 08:00 AM - 03:00 PM, Miercoles: 08:00 AM - 03:00 PM, Jueves: 08:00 AM - 03:00 PM, Viernes: 08:00 AM - 03:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02485215654",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=5.668283,-67.630612",
        "lat": 5.668283,
        "lng": -67.630612
      },
      {
        "id": "zoom-amazonas-zoom-puerto-ayacucho",
        "name": "ZOOM PUERTO AYACUCHO",
        "code": "100",
        "address": "Av. Rio Negro, Centro Comercial Juncosa, Local 2-a.",
        "city": "Puerto Ayacucho, Amazonas",
        "schedule": "Lunes: 08:00 AM - 12:30 PM, Martes: 08:00 AM - 12:30 PM, Miercoles: 08:00 AM - 12:30 PM, Jueves: 08:00 AM - 12:30 PM, Viernes: 08:00 AM - 12:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Amazonas/Puerto_Ayacucho/Zoom_Puerto_Ayacucho/",
        "details": {
          "Codigo": "100",
          "Direccion": "Av. Rio Negro, Centro Comercial Juncosa, Local 2-a.",
          "Ciudad": "Puerto Ayacucho, Amazonas",
          "Horario": "Lunes: 08:00 AM - 12:30 PM, Martes: 08:00 AM - 12:30 PM, Miercoles: 08:00 AM - 12:30 PM, Jueves: 08:00 AM - 12:30 PM, Viernes: 08:00 AM - 12:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=5.668400,-67.628500",
        "lat": 5.6684,
        "lng": -67.6285
      }
    ],
    "Anzoategui": [
      {
        "id": "zoom-anzoategui-zoom-amana",
        "name": "ZOOM AMANA",
        "code": "919",
        "address": "Calle Bolivar Cruce Con Calle Maneiro. Centro Comercial Amana Local Pb A-6",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_La_Cruz/Zoom_Amana/",
        "details": {
          "Codigo": "919",
          "Direccion": "Calle Bolivar Cruce Con Calle Maneiro. Centro Comercial Amana Local Pb A-6",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.222462,-64.636233",
        "lat": 10.222462,
        "lng": -64.636233
      },
      {
        "id": "zoom-anzoategui-zoom-anaco",
        "name": "ZOOM ANACO",
        "code": "3",
        "address": "Calle 5 De Julio, Edf. San Elias Nro 3-23b Pb. P.ref. Una Cuadra De Banesco.",
        "city": "Anaco, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Anaco/Zoom_Anaco/",
        "details": {
          "Codigo": "3",
          "Direccion": "Calle 5 De Julio, Edf. San Elias Nro 3-23b Pb. P.ref. Una Cuadra De Banesco.",
          "Ciudad": "Anaco, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.428201,-64.476141",
        "lat": 9.428201,
        "lng": -64.476141
      },
      {
        "id": "zoom-anzoategui-zoom-anaco-center",
        "name": "ZOOM ANACO CENTER",
        "code": "4135",
        "address": "Av. Jose Antonio Anzoategui. C.c Anaco Center Piso 1 Local 75-s.a",
        "city": "Anaco, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:30 PMMartes: 08:00 AM - 05:30 PMMiercoles: 08:00 AM - 05:30 PMJueves: 08:00 AM - 05:30 PMViernes: 08:00 AM - 05:30 PMSabado: 08:00 AM - 03:30 PMDomingo: Cerrado",
        "phones": [
          "04121147476"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Anaco/Zoom_Anaco_Center/",
        "details": {
          "Codigo": "4135",
          "Direccion": "Av. Jose Antonio Anzoategui. C.c Anaco Center Piso 1 Local 75-s.a",
          "Ciudad": "Anaco, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:30 PMMartes: 08:00 AM - 05:30 PMMiercoles: 08:00 AM - 05:30 PMJueves: 08:00 AM - 05:30 PMViernes: 08:00 AM - 05:30 PMSabado: 08:00 AM - 03:30 PMDomingo: Cerrado",
          "Telefono(s)": "04121147476",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 05:30 PM",
          "Martes": "08:00 AM - 05:30 PM",
          "Miercoles": "08:00 AM - 05:30 PM",
          "Jueves": "08:00 AM - 05:30 PM",
          "Viernes": "08:00 AM - 05:30 PM",
          "Sabado": "08:00 AM - 03:30 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.433780,-64.464008",
        "lat": 9.43378,
        "lng": -64.464008
      },
      {
        "id": "zoom-anzoategui-zoom-barcelona",
        "name": "ZOOM BARCELONA",
        "code": "106",
        "address": "Av. Intercomunal Jorge Rodriguez, C.c. Brisas Del Neveri, Local 04. P.ref. Frente A La Escuela De Ingenieria Ugma.",
        "city": "Barcelona, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Barcelona/Zoom_Barcelona/",
        "details": {
          "Codigo": "106",
          "Direccion": "Av. Intercomunal Jorge Rodriguez, C.c. Brisas Del Neveri, Local 04. P.ref. Frente A La Escuela De Ingenieria Ugma.",
          "Ciudad": "Barcelona, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.147179,-64.682445",
        "lat": 10.147179,
        "lng": -64.682445
      },
      {
        "id": "zoom-anzoategui-zoom-c-c-alba",
        "name": "ZOOM C.C ALBA",
        "code": "4094",
        "address": "Av Francisco De Miranda Cc C.c Alba Nivel Baja Local Nro 8",
        "city": "El Tigre, Anzoategui",
        "schedule": "Lunes: 07:30 AM - 06:00 PM, Martes: 07:30 AM - 06:00 PM, Miercoles: 07:30 AM - 06:00 PM, Jueves: 07:30 AM - 06:00 PM, Viernes: 07:30 AM - 06:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "04248483009",
          "04269989020"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/El_Tigre/Zoom__Cc_Alba/",
        "details": {
          "Codigo": "4094",
          "Direccion": "Av Francisco De Miranda Cc C.c Alba Nivel Baja Local Nro 8",
          "Ciudad": "El Tigre, Anzoategui",
          "Horario": "Lunes: 07:30 AM - 06:00 PM, Martes: 07:30 AM - 06:00 PM, Miercoles: 07:30 AM - 06:00 PM, Jueves: 07:30 AM - 06:00 PM, Viernes: 07:30 AM - 06:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04248483009 | 04269989020",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.889347,-64.252335",
        "lat": 8.889347,
        "lng": -64.252335
      },
      {
        "id": "zoom-anzoategui-zoom-c-c-judibana",
        "name": "ZOOM C.C JUDIBANA",
        "code": "4161",
        "address": "Av Stadium C.c Judibana Nivel Pb Local,sector Chuparin",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 09:00 AM - 03:00 PMDomingo: Cerrado",
        "phones": [
          "04120123058"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_La_Cruz/Zoom_Cc_Judibana/",
        "details": {
          "Codigo": "4161",
          "Direccion": "Av Stadium C.c Judibana Nivel Pb Local,sector Chuparin",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 09:00 AM - 03:00 PMDomingo: Cerrado",
          "Telefono(s)": "04120123058",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "09:00 AM - 03:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.209630,-64.632140",
        "lat": 10.20963,
        "lng": -64.63214
      },
      {
        "id": "zoom-anzoategui-zoom-calle-20-sur",
        "name": "ZOOM CALLE 20 SUR",
        "code": "2345",
        "address": "Calle 20 Sur, Cruce Con 5ta Carrera Bis",
        "city": "El Tigre, Anzoategui",
        "schedule": "Lunes: 09:00 AM - 05:30 PM, Martes: 09:00 AM - 05:30 PM, Miercoles: 09:00 AM - 05:30 PM, Jueves: 09:00 AM - 05:30 PM, Viernes: 09:00 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02832411295"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/El_Tigre/Zoom_Calle_20_Sur/",
        "details": {
          "Codigo": "2345",
          "Direccion": "Calle 20 Sur, Cruce Con 5ta Carrera Bis",
          "Ciudad": "El Tigre, Anzoategui",
          "Horario": "Lunes: 09:00 AM - 05:30 PM, Martes: 09:00 AM - 05:30 PM, Miercoles: 09:00 AM - 05:30 PM, Jueves: 09:00 AM - 05:30 PM, Viernes: 09:00 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02832411295",
          "Servicio(s)": "Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.892987,-64.234295",
        "lat": 8.892987,
        "lng": -64.234295
      },
      {
        "id": "zoom-anzoategui-zoom-calle-guaraguao",
        "name": "ZOOM CALLE GUARAGUAO",
        "code": "694",
        "address": "Calle Las Flores Con Calle Guaraguao, Centro Comercial Carabel, Planta Baja, Local 2",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02812686871",
          "02812685196"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_La_Cruz/Zoom_Calle_Guaraguao/",
        "details": {
          "Codigo": "694",
          "Direccion": "Calle Las Flores Con Calle Guaraguao, Centro Comercial Carabel, Planta Baja, Local 2",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02812686871 | 02812685196",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.224610,-64.631444",
        "lat": 10.22461,
        "lng": -64.631444
      },
      {
        "id": "zoom-anzoategui-zoom-camino-real",
        "name": "ZOOM CAMINO REAL",
        "code": "4058",
        "address": "Av Costanera Con Av Fuerzas Armadas C.c Camino Real Nivel Plaza Pb Local C11, Sector Nueva Barcelona",
        "city": "Barcelona, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Barcelona/Zoom_Camino_Real/",
        "details": {
          "Codigo": "4058",
          "Direccion": "Av Costanera Con Av Fuerzas Armadas C.c Camino Real Nivel Plaza Pb Local C11, Sector Nueva Barcelona",
          "Ciudad": "Barcelona, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.161006,-64.693514",
        "lat": 10.161006,
        "lng": -64.693514
      },
      {
        "id": "zoom-anzoategui-zoom-cantaura-centro",
        "name": "ZOOM CANTAURA CENTRO",
        "code": "2262",
        "address": "Av. Bolivar Cruce Con Calle Arismendi, Sector Centro Cantaura",
        "city": "Cantaura, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 05:30 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: 08:00 AM - 03:30 PM, Domingo: Cerrado",
        "phones": [
          "04121147476"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Cantaura/Zoom__Cantaura_Centro/",
        "details": {
          "Codigo": "2262",
          "Direccion": "Av. Bolivar Cruce Con Calle Arismendi, Sector Centro Cantaura",
          "Ciudad": "Cantaura, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 05:30 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: 08:00 AM - 03:30 PM, Domingo: Cerrado",
          "Telefono(s)": "04121147476"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.309857,-64.348365",
        "lat": 9.309857,
        "lng": -64.348365
      },
      {
        "id": "zoom-anzoategui-zoom-casco-central-lecheria",
        "name": "ZOOM CASCO CENTRAL LECHERIA",
        "code": "2051",
        "address": "Sector Casco Central Lecherias Carrera 5 Entre Calle 2 Y 3 Centro Empresarial 17-11 Local Pb-1",
        "city": "Lecherias, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04248316682"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Lecherias/Zoom_Casco_Central_Lecheria/",
        "details": {
          "Codigo": "2051",
          "Direccion": "Sector Casco Central Lecherias Carrera 5 Entre Calle 2 Y 3 Centro Empresarial 17-11 Local Pb-1",
          "Ciudad": "Lecherias, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04248316682",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.198508,-64.695961",
        "lat": 10.198508,
        "lng": -64.695961
      },
      {
        "id": "zoom-anzoategui-zoom-central-madeirense",
        "name": "ZOOM CENTRAL MADEIRENSE",
        "code": "4023",
        "address": "Av Municipal Cc Central Madeirense Nivel Pb Local 17,sector Pueblo Nuevo",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "Lunes: 08:20 AM - 05:20 PM, Martes: 08:20 AM - 05:20 PM, Miercoles: 08:20 AM - 05:20 PM, Jueves: 08:20 AM - 05:20 PM, Viernes: 08:20 AM - 05:20 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04121815617"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_La_Cruz/Zoom_Central_Madeirense/",
        "details": {
          "Codigo": "4023",
          "Direccion": "Av Municipal Cc Central Madeirense Nivel Pb Local 17,sector Pueblo Nuevo",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "Lunes: 08:20 AM - 05:20 PM, Martes: 08:20 AM - 05:20 PM, Miercoles: 08:20 AM - 05:20 PM, Jueves: 08:20 AM - 05:20 PM, Viernes: 08:20 AM - 05:20 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04121815617"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.201844,-64.634305",
        "lat": 10.201844,
        "lng": -64.634305
      },
      {
        "id": "zoom-anzoategui-zoom-el-tigre",
        "name": "ZOOM EL TIGRE",
        "code": "62",
        "address": "Av. Fco. De Miranda, Centro Comercial Flamingo, Pb. Locales A-07 Y A-08. P.ref. Al Lado De La Alcaldia.",
        "city": "El Tigre, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/El_Tigre/Zoom_El_Tigre/",
        "details": {
          "Codigo": "62",
          "Direccion": "Av. Fco. De Miranda, Centro Comercial Flamingo, Pb. Locales A-07 Y A-08. P.ref. Al Lado De La Alcaldia.",
          "Ciudad": "El Tigre, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.887469,-64.259062",
        "lat": 8.887469,
        "lng": -64.259062
      },
      {
        "id": "zoom-anzoategui-zoom-el-tigrito",
        "name": "ZOOM EL TIGRITO",
        "code": "4146",
        "address": "Av Fernandez Padilla Cc Deca Nivel N/a Local Local 3 Zona San Jose De Guanipa",
        "city": "El Tigrito, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 01:00 PMDomingo: Cerrado",
        "phones": [
          "04247775152"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/El_Tigrito/Zoom_El_Tigrito/",
        "details": {
          "Codigo": "4146",
          "Direccion": "Av Fernandez Padilla Cc Deca Nivel N/a Local Local 3 Zona San Jose De Guanipa",
          "Ciudad": "El Tigrito, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 01:00 PMDomingo: Cerrado",
          "Telefono(s)": "04247775152",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "08:00 AM - 01:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.894500,-64.180400",
        "lat": 8.8945,
        "lng": -64.1804
      },
      {
        "id": "zoom-anzoategui-zoom-hotel-rasil",
        "name": "ZOOM HOTEL RASIL",
        "code": "3107",
        "address": "Av. Paseo Colon Edif. Hotel Rasil Piso, 1 Local Nro 02 Sector, Puerto La Cruz.",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 07:00 PM, Martes: 08:00 AM - 07:00 PM, Miercoles: 08:00 AM - 07:00 PM, Jueves: 08:00 AM - 07:00 PM, Viernes: 08:00 AM - 07:00 PM, Sabado: 08:00 AM - 03:00 PM, Domingo: Cerrado",
        "phones": [
          "02812687582",
          "04129494925"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_La_Cruz/Zoom__Hotel_Rasil/",
        "details": {
          "Codigo": "3107",
          "Direccion": "Av. Paseo Colon Edif. Hotel Rasil Piso, 1 Local Nro 02 Sector, Puerto La Cruz.",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 07:00 PM, Martes: 08:00 AM - 07:00 PM, Miercoles: 08:00 AM - 07:00 PM, Jueves: 08:00 AM - 07:00 PM, Viernes: 08:00 AM - 07:00 PM, Sabado: 08:00 AM - 03:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02812687582 | 04129494925",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.218493,-64.640960",
        "lat": 10.218493,
        "lng": -64.64096
      },
      {
        "id": "zoom-anzoategui-zoom-pueblo-nuevo-norte",
        "name": "ZOOM PUEBLO NUEVO NORTE",
        "code": "2251",
        "address": "Calle 18 Norte Local Nro 04 Sector Pueblo Nuevo Norte",
        "city": "Anaco, Anzoategui",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04248654630"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Anaco/Zoom_Pueblo_Nuevo_Norte/",
        "details": {
          "Codigo": "2251",
          "Direccion": "Calle 18 Norte Local Nro 04 Sector Pueblo Nuevo Norte",
          "Ciudad": "Anaco, Anzoategui",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04248654630",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.896468,-64.235532",
        "lat": 8.896468,
        "lng": -64.235532
      },
      {
        "id": "zoom-anzoategui-zoom-puerto-piritu",
        "name": "ZOOM PUERTO PIRITU",
        "code": "4077",
        "address": "Calle Bolivar Cc Zeghen Inversiones Georgina Nivel Pb Local 06, 08 Y 10,sector Centro",
        "city": "Puerto Piritu, Anzoategui",
        "schedule": "Lunes: 08:30 AM - 12:30 PM, Martes: 08:30 AM - 12:30 PM, Miercoles: 08:30 AM - 12:30 PM, Jueves: 08:30 AM - 12:30 PM, Viernes: 08:30 AM - 12:30 PM, Sabado: 09:00 AM - 03:00 PM, Domingo: Cerrado",
        "phones": [
          "04125486274"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_Piritu/Zoom_Puerto_Piritu/",
        "details": {
          "Codigo": "4077",
          "Direccion": "Calle Bolivar Cc Zeghen Inversiones Georgina Nivel Pb Local 06, 08 Y 10,sector Centro",
          "Ciudad": "Puerto Piritu, Anzoategui",
          "Horario": "Lunes: 08:30 AM - 12:30 PM, Martes: 08:30 AM - 12:30 PM, Miercoles: 08:30 AM - 12:30 PM, Jueves: 08:30 AM - 12:30 PM, Viernes: 08:30 AM - 12:30 PM, Sabado: 09:00 AM - 03:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04125486274",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.063333,-65.045129",
        "lat": 10.063333,
        "lng": -65.045129
      },
      {
        "id": "zoom-anzoategui-zoom-terminal-pasajeros",
        "name": "ZOOM TERMINAL PASAJEROS",
        "code": "4120",
        "address": "Calle Democracia Cruce Con Calle Juncal, Local Dentro Del Terminal De Pasajeros De Puerto La Cruz Nro Local 71 Pasillo 6.",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "Lunes: 07:30 AM - 05:30 PM, Martes: 07:30 AM - 05:30 PM, Miercoles: 07:30 AM - 05:30 PM, Jueves: 07:30 AM - 05:30 PM, Viernes: 07:30 AM - 05:30 PM, Sabado: 07:00 AM - 02:30 PM, Domingo: Cerrado",
        "phones": [
          "02812656859"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Puerto_La_Cruz/Zoom_Terminal_Pasajeros/",
        "details": {
          "Codigo": "4120",
          "Direccion": "Calle Democracia Cruce Con Calle Juncal, Local Dentro Del Terminal De Pasajeros De Puerto La Cruz Nro Local 71 Pasillo 6.",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "Lunes: 07:30 AM - 05:30 PM, Martes: 07:30 AM - 05:30 PM, Miercoles: 07:30 AM - 05:30 PM, Jueves: 07:30 AM - 05:30 PM, Viernes: 07:30 AM - 05:30 PM, Sabado: 07:00 AM - 02:30 PM, Domingo: Cerrado",
          "Telefono(s)": "02812656859",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.217598,-64.634968",
        "lat": 10.217598,
        "lng": -64.634968
      },
      {
        "id": "zoom-anzoategui-zoom-venecia",
        "name": "ZOOM VENECIA",
        "code": "4090",
        "address": "Av Nueva Esparta C.c Nascar Nivel Pb Local 06, Sector Venecia",
        "city": "Barcelona, Anzoategui",
        "schedule": "Lunes: 08:20 AM - 05:00 PM, Martes: 08:20 AM - 05:00 PM, Miercoles: 08:20 AM - 05:00 PM, Jueves: 08:20 AM - 05:00 PM, Viernes: 08:20 AM - 05:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04248135156",
          "04265771056"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Anzoategui/Barcelona/Zoom_Venecia/",
        "details": {
          "Codigo": "4090",
          "Direccion": "Av Nueva Esparta C.c Nascar Nivel Pb Local 06, Sector Venecia",
          "Ciudad": "Barcelona, Anzoategui",
          "Horario": "Lunes: 08:20 AM - 05:00 PM, Martes: 08:20 AM - 05:00 PM, Miercoles: 08:20 AM - 05:00 PM, Jueves: 08:20 AM - 05:00 PM, Viernes: 08:20 AM - 05:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04248135156 | 04265771056",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.184696,-64.662179",
        "lat": 10.184696,
        "lng": -64.662179
      }
    ],
    "Apure": [
      {
        "id": "zoom-apure-zoom-avenida-paseo-libertador",
        "name": "ZOOM AVENIDA PASEO LIBERTADOR",
        "code": "4148",
        "address": "Av Paseo Libertador Edif DoÑa Isabel Piso Sn Local Sn",
        "city": "San Fernando, Apure",
        "schedule": "Lunes: 08:00 AM - 06:30 PMMartes: 08:00 AM - 06:30 PMMiercoles: 08:00 AM - 06:30 PMJueves: 08:00 AM - 06:30 PMViernes: 08:00 AM - 06:30 PMSabado: 08:00 AM - 05:00 PMDomingo: Cerrado",
        "phones": [
          "04241935646",
          "02473410911"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Apure/San_Fernando/Zoom_Avenida_Paseo_Libertador/",
        "details": {
          "Codigo": "4148",
          "Direccion": "Av Paseo Libertador Edif DoÑa Isabel Piso Sn Local Sn",
          "Ciudad": "San Fernando, Apure",
          "Horario": "Lunes: 08:00 AM - 06:30 PMMartes: 08:00 AM - 06:30 PMMiercoles: 08:00 AM - 06:30 PMJueves: 08:00 AM - 06:30 PMViernes: 08:00 AM - 06:30 PMSabado: 08:00 AM - 05:00 PMDomingo: Cerrado",
          "Telefono(s)": "04241935646 | 02473410911",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 06:30 PM",
          "Martes": "08:00 AM - 06:30 PM",
          "Miercoles": "08:00 AM - 06:30 PM",
          "Jueves": "08:00 AM - 06:30 PM",
          "Viernes": "08:00 AM - 06:30 PM",
          "Sabado": "08:00 AM - 05:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.886424,-67.471468",
        "lat": 7.886424,
        "lng": -67.471468
      },
      {
        "id": "zoom-apure-zoom-biruaca",
        "name": "ZOOM BIRUACA",
        "code": "2714",
        "address": "Av. Las Acacias , Local N°. 2 , Sector Encrucijada De Biruaca Apure.",
        "city": "Biruaca, Apure",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 PM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02473640461",
          "04243189370"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Apure/Biruaca/Zoom_Biruaca/",
        "details": {
          "Codigo": "2714",
          "Direccion": "Av. Las Acacias , Local N°. 2 , Sector Encrucijada De Biruaca Apure.",
          "Ciudad": "Biruaca, Apure",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 PM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02473640461 | 04243189370"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.844380,-67.521410",
        "lat": 7.84438,
        "lng": -67.52141
      },
      {
        "id": "zoom-apure-zoom-san-fernando-de-apure",
        "name": "ZOOM SAN FERNANDO DE APURE",
        "code": "871",
        "address": "Edificio Lara,planta Baja Calle Bolívar, Cruce Con Calle 24 De Julio.",
        "city": "San Fernando, Apure",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Apure/San_Fernando/Zoom_San_Fernando_De_Apure/",
        "details": {
          "Codigo": "871",
          "Direccion": "Edificio Lara,planta Baja Calle Bolívar, Cruce Con Calle 24 De Julio.",
          "Ciudad": "San Fernando, Apure",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.893697,-67.471228",
        "lat": 7.893697,
        "lng": -67.471228
      }
    ],
    "Aragua": [
      {
        "id": "zoom-aragua-zoom-amani-calle-comercio",
        "name": "ZOOM AMANI CALLE COMERCIO",
        "code": "3460",
        "address": "Calle Comercio Cruce Con Calle Sucre Edif Amani Piso Pb Local 104-70-17,sector Centro Cagua",
        "city": "Cagua, Aragua",
        "schedule": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: 08:00 AM - 06:00 PM, Domingo: Cerrado",
        "phones": [
          "04123138039"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Cagua/Zoom_Amani_Calle_Comercio/",
        "details": {
          "Codigo": "3460",
          "Direccion": "Calle Comercio Cruce Con Calle Sucre Edif Amani Piso Pb Local 104-70-17,sector Centro Cagua",
          "Ciudad": "Cagua, Aragua",
          "Horario": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: 08:00 AM - 06:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04123138039",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.185257,-67.459525",
        "lat": 10.185257,
        "lng": -67.459525
      },
      {
        "id": "zoom-aragua-zoom-cagua",
        "name": "ZOOM CAGUA",
        "code": "1266",
        "address": "Sector Centro, Calle Rondon C/c Calle Bermudez Nro 104-03-07, Local L-3.",
        "city": "Cagua, Aragua",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Cagua/Zoom_Cagua/",
        "details": {
          "Codigo": "1266",
          "Direccion": "Sector Centro, Calle Rondon C/c Calle Bermudez Nro 104-03-07, Local L-3.",
          "Ciudad": "Cagua, Aragua",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.189460,-67.462261",
        "lat": 10.18946,
        "lng": -67.462261
      },
      {
        "id": "zoom-aragua-zoom-colonia-tovar",
        "name": "ZOOM COLONIA TOVAR",
        "code": "1843",
        "address": "Sector Plan De Moreno, Carretera Principal Plan De Moreno, C.c. Parque Moritz, Nivel 1, Local N1-3.",
        "city": "Colonia Tovar, Aragua",
        "schedule": "Lunes: 09:00 AM - 12:00 PM, Martes: 09:00 AM - 12:00 PM, Miercoles: 09:00 AM - 12:00 PM, Jueves: 09:00 AM - 12:00 PM, Viernes: 09:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04129989906"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Colonia_Tovar/Zoom_Colonia_Tovar/",
        "details": {
          "Codigo": "1843",
          "Direccion": "Sector Plan De Moreno, Carretera Principal Plan De Moreno, C.c. Parque Moritz, Nivel 1, Local N1-3.",
          "Ciudad": "Colonia Tovar, Aragua",
          "Horario": "Lunes: 09:00 AM - 12:00 PM, Martes: 09:00 AM - 12:00 PM, Miercoles: 09:00 AM - 12:00 PM, Jueves: 09:00 AM - 12:00 PM, Viernes: 09:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04129989906"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.411710,-67.277320",
        "lat": 10.41171,
        "lng": -67.27732
      },
      {
        "id": "zoom-aragua-zoom-la-victoria",
        "name": "ZOOM LA VICTORIA",
        "code": "1556",
        "address": "Calle Rivas Davila, C.c. Victoria Center, Primera Etapa, Nivel Planta Baja, Local A-6.",
        "city": "La Victoria, Aragua",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/La_Victoria/Zoom_La_Victoria/",
        "details": {
          "Codigo": "1556",
          "Direccion": "Calle Rivas Davila, C.c. Victoria Center, Primera Etapa, Nivel Planta Baja, Local A-6.",
          "Ciudad": "La Victoria, Aragua",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.227600,-67.333125",
        "lat": 10.2276,
        "lng": -67.333125
      },
      {
        "id": "zoom-aragua-zoom-santa-cruz-de-aragua",
        "name": "ZOOM SANTA CRUZ DE ARAGUA",
        "code": "3966",
        "address": "Av 02 Casa Parcela B-17-a Y B-17-b Zona Industrial Santa Cruz",
        "city": "Santa Cruz De Aragua, Aragua",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: 08:00 AM - 03:00 PM, Domingo: Cerrado",
        "phones": [
          "04243799915",
          "04125488679"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Santa_Cruz_De_Aragua/Zoom_Santa_Cruz_De_Aragua/",
        "details": {
          "Codigo": "3966",
          "Direccion": "Av 02 Casa Parcela B-17-a Y B-17-b Zona Industrial Santa Cruz",
          "Ciudad": "Santa Cruz De Aragua, Aragua",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: 08:00 AM - 03:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04243799915 | 04125488679"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.177606,-67.497389",
        "lat": 10.177606,
        "lng": -67.497389
      },
      {
        "id": "zoom-aragua-zoom-turmero-centro",
        "name": "ZOOM TURMERO CENTRO",
        "code": "2351",
        "address": "Sector Centro Turmero, Calle Urdaneta Casa Nro. 16 Y Nro. 1.",
        "city": "Turmero, Aragua",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 08:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04243155639",
          "04121493125"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Turmero/Zoom_Turmero_Centro/",
        "details": {
          "Codigo": "2351",
          "Direccion": "Sector Centro Turmero, Calle Urdaneta Casa Nro. 16 Y Nro. 1.",
          "Ciudad": "Turmero, Aragua",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 08:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04243155639 | 04121493125",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.226208,-67.474255",
        "lat": 10.226208,
        "lng": -67.474255
      },
      {
        "id": "zoom-aragua-zoom-turmero-encrucijada",
        "name": "ZOOM TURMERO ENCRUCIJADA",
        "code": "1221",
        "address": "Carretera Nacional Turmero - Cagua Centro Comercial Paseo Los Laureles Nivel Pb Local 4. Urb. La Encrucijada.",
        "city": "Turmero, Aragua",
        "schedule": "Lunes: 08:30 AM - 12:00 PM, Martes: 08:30 AM - 12:00 PM, Miercoles: 08:30 AM - 12:00 PM, Jueves: 08:30 AM - 12:00 PM, Viernes: 08:30 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02443957879"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Turmero/Zoom_Turmero_Encrucijada/",
        "details": {
          "Codigo": "1221",
          "Direccion": "Carretera Nacional Turmero - Cagua Centro Comercial Paseo Los Laureles Nivel Pb Local 4. Urb. La Encrucijada.",
          "Ciudad": "Turmero, Aragua",
          "Horario": "Lunes: 08:30 AM - 12:00 PM, Martes: 08:30 AM - 12:00 PM, Miercoles: 08:30 AM - 12:00 PM, Jueves: 08:30 AM - 12:00 PM, Viernes: 08:30 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02443957879",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.202740,-67.471790",
        "lat": 10.20274,
        "lng": -67.47179
      },
      {
        "id": "zoom-aragua-zoom-turmero-intercomunal",
        "name": "ZOOM TURMERO INTERCOMUNAL",
        "code": "2485",
        "address": "Av Intercomunal Maracay-turmero Cc Intercomunal Center Nivel Local 1-7,sector La Morita",
        "city": "Santa Rita - Aragua, Aragua",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04243790087"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Santa_Rita__Aragua/Zoom_Turmero_Intercomunal/",
        "details": {
          "Codigo": "2485",
          "Direccion": "Av Intercomunal Maracay-turmero Cc Intercomunal Center Nivel Local 1-7,sector La Morita",
          "Ciudad": "Santa Rita - Aragua, Aragua",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04243790087",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.231673,-67.548332",
        "lat": 10.231673,
        "lng": -67.548332
      },
      {
        "id": "zoom-aragua-zoom-villa-de-cura",
        "name": "ZOOM VILLA DE CURA",
        "code": "1638",
        "address": "Calle Sucre Con Aduana, C.c. Villa Hermosa, Local 39.",
        "city": "Villa De Cura, Aragua",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02443865962",
          "02443868351"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Aragua/Villa_De_Cura/Zoom_Villa_De_Cura/",
        "details": {
          "Codigo": "1638",
          "Direccion": "Calle Sucre Con Aduana, C.c. Villa Hermosa, Local 39.",
          "Ciudad": "Villa De Cura, Aragua",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02443865962 | 02443868351",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.030000,-67.480000",
        "lat": 10.03,
        "lng": -67.48
      }
    ],
    "Barinas": [
      {
        "id": "zoom-barinas-zoom-alto-barinas-norte",
        "name": "ZOOM ALTO BARINAS NORTE",
        "code": "1753",
        "address": "Alto Barinas Norte, Avenida Colombia, Local 80-c, Frente Al Golfito.",
        "city": "Barinas, Barinas",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02733511230",
          "04145547238"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Barinas/Zoom_Alto_Barinas_Norte/",
        "details": {
          "Codigo": "1753",
          "Direccion": "Alto Barinas Norte, Avenida Colombia, Local 80-c, Frente Al Golfito.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02733511230 | 04145547238",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.622162,-70.253697",
        "lat": 8.622162,
        "lng": -70.253697
      },
      {
        "id": "zoom-barinas-zoom-alto-barinas-sur",
        "name": "ZOOM ALTO BARINAS SUR",
        "code": "3465",
        "address": "Avenida Los Llanos C.c Sion Pb Local 5 Alto Barinas Sur Farmacia Betania C.a (qiaris Farmacia)",
        "city": "Barinas, Barinas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: 08:00 AM - 05:00 PM",
        "phones": [
          "04264292088"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Barinas/Zoom_Alto_Barinas_Sur/",
        "details": {
          "Codigo": "3465",
          "Direccion": "Avenida Los Llanos C.c Sion Pb Local 5 Alto Barinas Sur Farmacia Betania C.a (qiaris Farmacia)",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: 08:00 AM - 05:00 PM",
          "Telefono(s)": "04264292088"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.606779,-70.256468",
        "lat": 8.606779,
        "lng": -70.256468
      },
      {
        "id": "zoom-barinas-zoom-barinas",
        "name": "ZOOM BARINAS",
        "code": "6",
        "address": "Av. Elias Cordero, N° 1- 120. P.ref. Frente A Suelapiel.",
        "city": "Barinas, Barinas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Barinas/Zoom_Barinas/",
        "details": {
          "Codigo": "6",
          "Direccion": "Av. Elias Cordero, N° 1- 120. P.ref. Frente A Suelapiel.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.628500,-70.221529",
        "lat": 8.6285,
        "lng": -70.221529
      },
      {
        "id": "zoom-barinas-zoom-barinas-centro",
        "name": "ZOOM BARINAS CENTRO",
        "code": "1543",
        "address": "Sector Barrio Obrero, Calle Camejo Entre Avenidas Montilla Y Olmedilla, Edificio Los Hermanos.",
        "city": "Barinas, Barinas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Barinas/Zoom_Barinas_Centro/",
        "details": {
          "Codigo": "1543",
          "Direccion": "Sector Barrio Obrero, Calle Camejo Entre Avenidas Montilla Y Olmedilla, Edificio Los Hermanos.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.631489,-70.215792",
        "lat": 8.631489,
        "lng": -70.215792
      },
      {
        "id": "zoom-barinas-zoom-ciudad-bolivia",
        "name": "ZOOM CIUDAD BOLIVIA",
        "code": "4156",
        "address": "Calle 4 Prolongacion 1 Local Don Pancho Nro S/n Sector Vista Hermosa Ii Parte Alta Carretera Via Mijaguas",
        "city": "Ciudad Bolivia, Barinas",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04125659910"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Ciudad_Bolivia/Zoom_Ciudad_Bolivia/",
        "details": {
          "Codigo": "4156",
          "Direccion": "Calle 4 Prolongacion 1 Local Don Pancho Nro S/n Sector Vista Hermosa Ii Parte Alta Carretera Via Mijaguas",
          "Ciudad": "Ciudad Bolivia, Barinas",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04125659910",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=83.428212,-70.566391",
        "lat": 83.428212,
        "lng": -70.566391
      },
      {
        "id": "zoom-barinas-zoom-la-carolina",
        "name": "ZOOM LA CAROLINA",
        "code": "4143",
        "address": "Av Andres Varela Local Estadio Agustin Tovar La Carolina Nro A1, Sector La Carolina",
        "city": "Barinas, Barinas",
        "schedule": "Lunes: 07:30 AM - 05:30 PMMartes: 07:30 AM - 05:30 PMMiercoles: 07:30 AM - 05:30 PMJueves: 07:30 AM - 05:30 PMViernes: 07:30 AM - 05:30 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04245520763",
          "04245832777"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Barinas/Zoom_La_Carolina/",
        "details": {
          "Codigo": "4143",
          "Direccion": "Av Andres Varela Local Estadio Agustin Tovar La Carolina Nro A1, Sector La Carolina",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes: 07:30 AM - 05:30 PMMartes: 07:30 AM - 05:30 PMMiercoles: 07:30 AM - 05:30 PMJueves: 07:30 AM - 05:30 PMViernes: 07:30 AM - 05:30 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04245520763 | 04245832777",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "07:30 AM - 05:30 PM",
          "Martes": "07:30 AM - 05:30 PM",
          "Miercoles": "07:30 AM - 05:30 PM",
          "Jueves": "07:30 AM - 05:30 PM",
          "Viernes": "07:30 AM - 05:30 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.624430,-70.207401",
        "lat": 8.62443,
        "lng": -70.207401
      },
      {
        "id": "zoom-barinas-zoom-santa-barbara",
        "name": "ZOOM SANTA BARBARA",
        "code": "1169",
        "address": "Sector Pueblo Viejo, Carrera 5, Entre Calles 9 Y 10.",
        "city": "Santa Barbara De Barinas, Barinas",
        "schedule": "Lunes: 08:30 AM - 12:00 PM, Martes: 08:30 AM - 12:00 PM, Miercoles: 08:30 AM - 12:00 PM, Jueves: 08:30 PM - 12:00 PM, Viernes: 08:30 PM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02782221082"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Santa_Barbara_De_Barinas/Zoom_Santa_Barbara/",
        "details": {
          "Codigo": "1169",
          "Direccion": "Sector Pueblo Viejo, Carrera 5, Entre Calles 9 Y 10.",
          "Ciudad": "Santa Barbara De Barinas, Barinas",
          "Horario": "Lunes: 08:30 AM - 12:00 PM, Martes: 08:30 AM - 12:00 PM, Miercoles: 08:30 AM - 12:00 PM, Jueves: 08:30 PM - 12:00 PM, Viernes: 08:30 PM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02782221082",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.812000,-71.178700",
        "lat": 7.812,
        "lng": -71.1787
      },
      {
        "id": "zoom-barinas-zoom-socopo",
        "name": "ZOOM SOCOPO",
        "code": "3096",
        "address": "Cr 9 Entre Calles 3 Y 4 Cc Galerias Nivel Pb Local Nro 2 Sector Centro Socopo",
        "city": "Socopo, Barinas",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04142911696",
          "04145112200"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Socopo/Zoom_Socopo/",
        "details": {
          "Codigo": "3096",
          "Direccion": "Cr 9 Entre Calles 3 Y 4 Cc Galerias Nivel Pb Local Nro 2 Sector Centro Socopo",
          "Ciudad": "Socopo, Barinas",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04142911696 | 04145112200",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.236310,-70.817480",
        "lat": 8.23631,
        "lng": -70.81748
      },
      {
        "id": "zoom-barinas-zoom-varyna-alto-barinas-sur",
        "name": "ZOOM VARYNÁ ALTO BARINAS SUR",
        "code": "1904",
        "address": "Av. Venezuela Con Calle Justicia Local, Nro. 127 B-3, Urb, Alto Barinas Sur Barinas",
        "city": "Barinas, Barinas",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02735410623"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Barinas/Barinas/Zoom_VarynA_Alto_Barinas_Sur/",
        "details": {
          "Codigo": "1904",
          "Direccion": "Av. Venezuela Con Calle Justicia Local, Nro. 127 B-3, Urb, Alto Barinas Sur Barinas",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02735410623",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.611100,-70.244100",
        "lat": 8.6111,
        "lng": -70.2441
      }
    ],
    "Bolivar": [
      {
        "id": "zoom-bolivar-zoom-av-germania",
        "name": "ZOOM AV GERMANIA",
        "code": "1810",
        "address": "Sector Germania, Av. Germania, C.c. Los Proceres Nivel Pb, Local Anexo Estacionamiento.",
        "city": "Ciudad Bolivar, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02856320750"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Ciudad_Bolivar/Zoom_Av_Germania/",
        "details": {
          "Codigo": "1810",
          "Direccion": "Sector Germania, Av. Germania, C.c. Los Proceres Nivel Pb, Local Anexo Estacionamiento.",
          "Ciudad": "Ciudad Bolivar, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02856320750 | 02856320750"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.132100,-63.530500",
        "lat": 8.1321,
        "lng": -63.5305
      },
      {
        "id": "zoom-bolivar-zoom-av-republica",
        "name": "ZOOM AV REPUBLICA",
        "code": "4123",
        "address": "Av Siegart Con Av. Republica Edif Ivanna Piso P/b. Local Nro 1 Sector Av. Republica Parroquia Catedral Municipio Agostura Del Orinoco",
        "city": "Ciudad Bolivar, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 03:00 PMSabado: 08:00 AM - 12:00 PMDomingo: Cerrado",
        "phones": [
          "04122838051"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Ciudad_Bolivar/Zoom_Av_Republica/",
        "details": {
          "Codigo": "4123",
          "Direccion": "Av Siegart Con Av. Republica Edif Ivanna Piso P/b. Local Nro 1 Sector Av. Republica Parroquia Catedral Municipio Agostura Del Orinoco",
          "Ciudad": "Ciudad Bolivar, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 03:00 PMSabado: 08:00 AM - 12:00 PMDomingo: Cerrado",
          "Telefono(s)": "04122838051",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 03:00 PM",
          "Sabado": "08:00 AM - 12:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.125402,-63.553181",
        "lat": 8.125402,
        "lng": -63.553181
      },
      {
        "id": "zoom-bolivar-zoom-av-venezuela-centro",
        "name": "ZOOM AV VENEZUELA CENTRO",
        "code": "775",
        "address": "Av Venezuela Con Ciudad Bolivar Edif Centro Residencial Y Empresarial Parque Del Centro Piso Pb Local 5-l2,zona Centro De Puerto Ordaz.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02869235509"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Puerto_Ordaz/Zoom__Av_Venezuela_Centro/",
        "details": {
          "Codigo": "775",
          "Direccion": "Av Venezuela Con Ciudad Bolivar Edif Centro Residencial Y Empresarial Parque Del Centro Piso Pb Local 5-l2,zona Centro De Puerto Ordaz.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02869235509",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.313845,-62.720260",
        "lat": 8.313845,
        "lng": -62.72026
      },
      {
        "id": "zoom-bolivar-zoom-c-c-biblos-center",
        "name": "ZOOM C.C BIBLOS CENTER",
        "code": "4155",
        "address": "Calle Uchire C.c Biblos Center Nivel 54 B Local 54",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes: 08:30 AM - 05:00 PMMartes: 08:30 AM - 05:00 PMMiercoles: 08:30 AM - 05:00 PMJueves: 08:30 AM - 05:00 PMViernes: 08:30 AM - 05:00 PMSabado: 08:30 AM - 12:00 PMDomingo: Cerrado",
        "phones": [
          "04248869747",
          "02869520287"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Puerto_Ordaz/Zoom_Cc_Biblos_Center/",
        "details": {
          "Codigo": "4155",
          "Direccion": "Calle Uchire C.c Biblos Center Nivel 54 B Local 54",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes: 08:30 AM - 05:00 PMMartes: 08:30 AM - 05:00 PMMiercoles: 08:30 AM - 05:00 PMJueves: 08:30 AM - 05:00 PMViernes: 08:30 AM - 05:00 PMSabado: 08:30 AM - 12:00 PMDomingo: Cerrado",
          "Telefono(s)": "04248869747 | 02869520287",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:30 AM - 05:00 PM",
          "Martes": "08:30 AM - 05:00 PM",
          "Miercoles": "08:30 AM - 05:00 PM",
          "Jueves": "08:30 AM - 05:00 PM",
          "Viernes": "08:30 AM - 05:00 PM",
          "Sabado": "08:30 AM - 12:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.277466,-62.756688",
        "lat": 8.277466,
        "lng": -62.756688
      },
      {
        "id": "zoom-bolivar-zoom-calle-venezuela",
        "name": "ZOOM CALLE VENEZUELA",
        "code": "4124",
        "address": "Calle Venezuela Local Nro 20",
        "city": "Ciudad Bolivar, Bolivar",
        "schedule": "Lunes: 07:00 AM - 05:00 PMMartes: 07:00 AM - 05:00 PMMiercoles: 07:00 AM - 05:00 PMJueves: 07:00 AM - 05:00 PMViernes: 07:00 AM - 05:00 PMSabado: 07:00 AM - 03:00 PMDomingo: Cerrado",
        "phones": [
          "04148899668"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Ciudad_Bolivar/Zoom_Calle_Venezuela/",
        "details": {
          "Codigo": "4124",
          "Direccion": "Calle Venezuela Local Nro 20",
          "Ciudad": "Ciudad Bolivar, Bolivar",
          "Horario": "Lunes: 07:00 AM - 05:00 PMMartes: 07:00 AM - 05:00 PMMiercoles: 07:00 AM - 05:00 PMJueves: 07:00 AM - 05:00 PMViernes: 07:00 AM - 05:00 PMSabado: 07:00 AM - 03:00 PMDomingo: Cerrado",
          "Telefono(s)": "04148899668",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "07:00 AM - 05:00 PM",
          "Martes": "07:00 AM - 05:00 PM",
          "Miercoles": "07:00 AM - 05:00 PM",
          "Jueves": "07:00 AM - 05:00 PM",
          "Viernes": "07:00 AM - 05:00 PM",
          "Sabado": "07:00 AM - 03:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.144969,-63.549533",
        "lat": 8.144969,
        "lng": -63.549533
      },
      {
        "id": "zoom-bolivar-zoom-ciudad-bolivar",
        "name": "ZOOM CIUDAD BOLIVAR",
        "code": "56",
        "address": "Av. Jesus Soto Con Calle Caura, C.c. Tepuy, Local 1 Y 2, Pb.",
        "city": "Ciudad Bolivar, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Ciudad_Bolivar/Zoom_Ciudad_Bolivar/",
        "details": {
          "Codigo": "56",
          "Direccion": "Av. Jesus Soto Con Calle Caura, C.c. Tepuy, Local 1 Y 2, Pb.",
          "Ciudad": "Ciudad Bolivar, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.122170,-63.544513",
        "lat": 8.12217,
        "lng": -63.544513
      },
      {
        "id": "zoom-bolivar-zoom-el-callao",
        "name": "ZOOM EL CALLAO",
        "code": "2586",
        "address": "Calle La Paz , Frente Al Parque Infantil Victoria Torrealba Local S/n, Zona El Centro El Callao Bolivar",
        "city": "El Callao, Bolivar",
        "schedule": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: 09:00 AM - 02:00 PM, Domingo: Cerrado",
        "phones": [
          "02887622173"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/El_Callao/Zoom_El_Callao/",
        "details": {
          "Codigo": "2586",
          "Direccion": "Calle La Paz , Frente Al Parque Infantil Victoria Torrealba Local S/n, Zona El Centro El Callao Bolivar",
          "Ciudad": "El Callao, Bolivar",
          "Horario": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: 09:00 AM - 02:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02887622173",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.346915,-61.824106",
        "lat": 7.346915,
        "lng": -61.824106
      },
      {
        "id": "zoom-bolivar-zoom-guasipati",
        "name": "ZOOM GUASIPATI",
        "code": "4068",
        "address": "Calle Merida Cc Clement Nivel 1 Local Nro 5-6, Sector Las Gracias Guasipati",
        "city": "Guasipati, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04148524027"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Guasipati/Zoom_Guasipati/",
        "details": {
          "Codigo": "4068",
          "Direccion": "Calle Merida Cc Clement Nivel 1 Local Nro 5-6, Sector Las Gracias Guasipati",
          "Ciudad": "Guasipati, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04148524027",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.472811,-61.900727",
        "lat": 7.472811,
        "lng": -61.900727
      },
      {
        "id": "zoom-bolivar-zoom-hangar-distribuidora",
        "name": "ZOOM HANGAR DISTRIBUIDORA",
        "code": "4071",
        "address": "Av. Jesus Soto Local Hangar Distribuidora Toms. C.a Nro S/n",
        "city": "Ciudad Bolivar, Bolivar",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02856340680",
          "02856325102"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Ciudad_Bolivar/Zoom__Hangar_Distribuidora/",
        "details": {
          "Codigo": "4071",
          "Direccion": "Av. Jesus Soto Local Hangar Distribuidora Toms. C.a Nro S/n",
          "Ciudad": "Ciudad Bolivar, Bolivar",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02856340680 | 02856325102",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.121975,-63.531591",
        "lat": 8.121975,
        "lng": -63.531591
      },
      {
        "id": "zoom-bolivar-zoom-orinokia-mall",
        "name": "ZOOM ORINOKIA MALL",
        "code": "1809",
        "address": "Urb. Alta Vista, Av. Prolongacion, Av. Las Americas, C.c. Orinokia Mall Nivel Plaza, Santo Tome Local Pb-04.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes: 08:00 AM - 07:30 PM, Martes: 08:00 AM - 07:30 PM, Miercoles: 08:00 AM - 07:30 PM, Jueves: 08:00 AM - 07:30 PM, Viernes: 08:00 AM - 07:30 PM, Sabado: 09:00 AM - 07:30 PM, Domingo: 10:00 AM - 05:00 PM",
        "phones": [
          "04147629598"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Puerto_Ordaz/Zoom_Orinokia_Mall/",
        "details": {
          "Codigo": "1809",
          "Direccion": "Urb. Alta Vista, Av. Prolongacion, Av. Las Americas, C.c. Orinokia Mall Nivel Plaza, Santo Tome Local Pb-04.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes: 08:00 AM - 07:30 PM, Martes: 08:00 AM - 07:30 PM, Miercoles: 08:00 AM - 07:30 PM, Jueves: 08:00 AM - 07:30 PM, Viernes: 08:00 AM - 07:30 PM, Sabado: 09:00 AM - 07:30 PM, Domingo: 10:00 AM - 05:00 PM",
          "Telefono(s)": "04147629598",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.292180,-62.743040",
        "lat": 8.29218,
        "lng": -62.74304
      },
      {
        "id": "zoom-bolivar-zoom-puerto-ordaz",
        "name": "ZOOM PUERTO ORDAZ",
        "code": "109",
        "address": "Sector Unare, Zona Industrial I, Calle Tunapuy, P.ref. Diagonal Al Tigasco.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Puerto_Ordaz/Zoom_Puerto_Ordaz/",
        "details": {
          "Codigo": "109",
          "Direccion": "Sector Unare, Zona Industrial I, Calle Tunapuy, P.ref. Diagonal Al Tigasco.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.284558,-62.753666",
        "lat": 8.284558,
        "lng": -62.753666
      },
      {
        "id": "zoom-bolivar-zoom-san-felix",
        "name": "ZOOM SAN FELIX",
        "code": "1207",
        "address": "Sector El Roble, Av. Morena Mendoza, Centro Comercial La CariÑosa, Local C.",
        "city": "San Felix, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/San_Felix/Zoom_San_Felix/",
        "details": {
          "Codigo": "1207",
          "Direccion": "Sector El Roble, Av. Morena Mendoza, Centro Comercial La CariÑosa, Local C.",
          "Ciudad": "San Felix, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.352800,-62.673200",
        "lat": 8.3528,
        "lng": -62.6732
      },
      {
        "id": "zoom-bolivar-zoom-taquilla-cc-artica",
        "name": "ZOOM TAQUILLA CC ARTICA",
        "code": "1206",
        "address": "Centro Comercial Artica, Carrera Guasipati, Locales 5 Y 6. Centro De Puerto Ordaz. Al Lado Del Banco De Venezuela Y Frente A Cosmeticos Genesis.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Puerto_Ordaz/Zoom_Taquilla_Cc_Artica/",
        "details": {
          "Codigo": "1206",
          "Direccion": "Centro Comercial Artica, Carrera Guasipati, Locales 5 Y 6. Centro De Puerto Ordaz. Al Lado Del Banco De Venezuela Y Frente A Cosmeticos Genesis.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.316584,-62.717197",
        "lat": 8.316584,
        "lng": -62.717197
      },
      {
        "id": "zoom-bolivar-zoom-torre-caura",
        "name": "ZOOM TORRE CAURA",
        "code": "3171",
        "address": "Ctra Tocoma, Con Calle Caura Cc C.c Torre Caura Nivel Sotano Local 4 Sector Alta Vista",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02869675225",
          "04167256342"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Puerto_Ordaz/Zoom_Torre_Caura/",
        "details": {
          "Codigo": "3171",
          "Direccion": "Ctra Tocoma, Con Calle Caura Cc C.c Torre Caura Nivel Sotano Local 4 Sector Alta Vista",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02869675225 | 04167256342",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.294999,-62.728309",
        "lat": 8.294999,
        "lng": -62.728309
      },
      {
        "id": "zoom-bolivar-zoom-tumeremo-calle-bolivar",
        "name": "ZOOM TUMEREMO CALLE BOLIVAR",
        "code": "4096",
        "address": "Calle Bolivar Con Cruce Troncal 10,edif Arabito Pizza Local S/n",
        "city": "Tumeremo, Bolivar",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04164299636",
          "04148946067"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Tumeremo/Zoom_Tumeremo_Calle_Bolivar/",
        "details": {
          "Codigo": "4096",
          "Direccion": "Calle Bolivar Con Cruce Troncal 10,edif Arabito Pizza Local S/n",
          "Ciudad": "Tumeremo, Bolivar",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04164299636 | 04148946067",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.301956,-61.505819",
        "lat": 7.301956,
        "lng": -61.505819
      },
      {
        "id": "zoom-bolivar-zoom-upata-c-c-datil",
        "name": "ZOOM UPATA C.C DATIL",
        "code": "4015",
        "address": "Av Bicentenario Diagonal Calle 19 De Abril Cc El Datil Nivel Pb Local S/n Sector Centro",
        "city": "Upata, Bolivar",
        "schedule": "Lunes: 07:30 AM - 05:30 PM, Martes: 07:30 AM - 05:30 PM, Miercoles: 07:30 AM - 05:30 PM, Jueves: 07:30 AM - 05:30 PM, Viernes: 07:30 AM - 05:30 PM, Sabado: 07:30 AM - 05:30 PM, Domingo: Cerrado",
        "phones": [
          "04249400343"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Bolivar/Upata/Zoom_Upata__Cc_Datil/",
        "details": {
          "Codigo": "4015",
          "Direccion": "Av Bicentenario Diagonal Calle 19 De Abril Cc El Datil Nivel Pb Local S/n Sector Centro",
          "Ciudad": "Upata, Bolivar",
          "Horario": "Lunes: 07:30 AM - 05:30 PM, Martes: 07:30 AM - 05:30 PM, Miercoles: 07:30 AM - 05:30 PM, Jueves: 07:30 AM - 05:30 PM, Viernes: 07:30 AM - 05:30 PM, Sabado: 07:30 AM - 05:30 PM, Domingo: Cerrado",
          "Telefono(s)": "04249400343"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.020540,-62.408441",
        "lat": 8.02054,
        "lng": -62.408441
      }
    ],
    "Carabobo": [
      {
        "id": "zoom-carabobo-zoom-bejuma",
        "name": "ZOOM BEJUMA",
        "code": "4112",
        "address": "Av Sucre C/c Calle Heres Local Nro Sector Pueblo Nuevo La UniÓn",
        "city": "Bejuma, Carabobo",
        "schedule": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 05:30 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04244735850"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Carabobo/Bejuma/Zoom_Bejuma/",
        "details": {
          "Codigo": "4112",
          "Direccion": "Av Sucre C/c Calle Heres Local Nro Sector Pueblo Nuevo La UniÓn",
          "Ciudad": "Bejuma, Carabobo",
          "Horario": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 05:30 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04244735850",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.172368,-68.264808",
        "lat": 10.172368,
        "lng": -68.264808
      },
      {
        "id": "zoom-carabobo-zoom-c-c-central-guacara",
        "name": "ZOOM C.C CENTRAL GUACARA",
        "code": "1624",
        "address": "Carretera Nacional Guacara Los Guayos, Centro Comercial Central Guacara Pb Local 18 Y 20",
        "city": "Guacara, Carabobo",
        "schedule": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04144053334",
          "02455712946"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Carabobo/Guacara/Zoom_Cc_Central_Guacara/",
        "details": {
          "Codigo": "1624",
          "Direccion": "Carretera Nacional Guacara Los Guayos, Centro Comercial Central Guacara Pb Local 18 Y 20",
          "Ciudad": "Guacara, Carabobo",
          "Horario": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04144053334 | 02455712946",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.213800,-67.897300",
        "lat": 10.2138,
        "lng": -67.8973
      },
      {
        "id": "zoom-carabobo-zoom-c-c-guacara-plaza",
        "name": "ZOOM C.C GUACARA PLAZA",
        "code": "1663",
        "address": "Calle Piar C.c Guacara Plaza Nivel Pb Local Pb-09",
        "city": "Guacara, Carabobo",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04244401699"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Carabobo/Guacara/Zoom_Cc_Guacara_Plaza/",
        "details": {
          "Codigo": "1663",
          "Direccion": "Calle Piar C.c Guacara Plaza Nivel Pb Local Pb-09",
          "Ciudad": "Guacara, Carabobo",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04244401699",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.232199,-67.880201",
        "lat": 10.232199,
        "lng": -67.880201
      },
      {
        "id": "zoom-carabobo-zoom-los-guayos",
        "name": "ZOOM LOS GUAYOS",
        "code": "1250",
        "address": "Calle Paez Entre Bruzual Y Negro Primero, Local A-01.",
        "city": "Los Guayos, Carabobo",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "02418774708",
          "04128826631"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Carabobo/Los_Guayos/Zoom_Los_Guayos/",
        "details": {
          "Codigo": "1250",
          "Direccion": "Calle Paez Entre Bruzual Y Negro Primero, Local A-01.",
          "Ciudad": "Los Guayos, Carabobo",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02418774708 | 04128826631",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.190256,-67.940298",
        "lat": 10.190256,
        "lng": -67.940298
      },
      {
        "id": "zoom-carabobo-zoom-puerto-cabello",
        "name": "ZOOM PUERTO CABELLO",
        "code": "101",
        "address": "Primera Calle Segrestaa, Edificio Enna, Pb., Local 26 Y 27.p.ref. Diagonal A La Cruz Roja.",
        "city": "Puerto Cabello, Carabobo",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Carabobo/Puerto_Cabello/Zoom_Puerto_Cabello/",
        "details": {
          "Codigo": "101",
          "Direccion": "Primera Calle Segrestaa, Edificio Enna, Pb., Local 26 Y 27.p.ref. Diagonal A La Cruz Roja.",
          "Ciudad": "Puerto Cabello, Carabobo",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.466422,-68.009287",
        "lat": 10.466422,
        "lng": -68.009287
      }
    ],
    "Cojedes": [
      {
        "id": "zoom-cojedes-zoom-san-carlos",
        "name": "ZOOM SAN CARLOS",
        "code": "939",
        "address": "Av. Bolivar Cruce Con Calle Silva, Centro Comercial Colavita, Planta Baja, Locales L1 Y L2.",
        "city": "San Carlos, Cojedes",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Cojedes/San_Carlos/Zoom_San_Carlos/",
        "details": {
          "Codigo": "939",
          "Direccion": "Av. Bolivar Cruce Con Calle Silva, Centro Comercial Colavita, Planta Baja, Locales L1 Y L2.",
          "Ciudad": "San Carlos, Cojedes",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.661863,-68.591580",
        "lat": 9.661863,
        "lng": -68.59158
      }
    ],
    "Delta_Amacuro": [
      {
        "id": "zoom-delta-amacuro-zoom-tucupita-centro",
        "name": "ZOOM TUCUPITA CENTRO",
        "code": "1159",
        "address": "Calle La Paz Local Nro S/n Sector Centro Tucupita",
        "city": "Tucupita, Delta Amacuro",
        "schedule": "Lunes: 08:30 PM - 12:00 PM, Martes: 08:30 PM - 12:00 PM, Miercoles: 08:30 PM - 12:00 PM, Jueves: 08:30 PM - 12:00 PM, Viernes: 08:30 PM - 12:00 PM, Sabado: 08:30 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02877214546",
          "04164214200"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Delta_Amacuro/Tucupita/Zoom_Tucupita_Centro/",
        "details": {
          "Codigo": "1159",
          "Direccion": "Calle La Paz Local Nro S/n Sector Centro Tucupita",
          "Ciudad": "Tucupita, Delta Amacuro",
          "Horario": "Lunes: 08:30 PM - 12:00 PM, Martes: 08:30 PM - 12:00 PM, Miercoles: 08:30 PM - 12:00 PM, Jueves: 08:30 PM - 12:00 PM, Viernes: 08:30 PM - 12:00 PM, Sabado: 08:30 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02877214546 | 04164214200",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.059367,-62.052411",
        "lat": 9.059367,
        "lng": -62.052411
      }
    ],
    "Distrito_Capital": [
      {
        "id": "zoom-distrito-capital-zoom-altamira",
        "name": "ZOOM ALTAMIRA",
        "code": "651",
        "address": "Avenida Del Avila, Res. Belmont, Pb, Local 01, Altamira Sur.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02122656834"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Altamira/",
        "details": {
          "Codigo": "651",
          "Direccion": "Avenida Del Avila, Res. Belmont, Pb, Local 01, Altamira Sur.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02122656834",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.494070,-66.848170",
        "lat": 10.49407,
        "lng": -66.84817
      },
      {
        "id": "zoom-distrito-capital-zoom-av-francisco-solano",
        "name": "ZOOM AV FRANCISCO SOLANO",
        "code": "4075",
        "address": "Av Francisco Solano Lopez, Entre Calle El Cristo Y Los Manguitos Edif Torre Oasis Piso Pb Local 9, Urb Las Delicias",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127620067"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Av_Francisco_Solano/",
        "details": {
          "Codigo": "4075",
          "Direccion": "Av Francisco Solano Lopez, Entre Calle El Cristo Y Los Manguitos Edif Torre Oasis Piso Pb Local 9, Urb Las Delicias",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127620067",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.493712,-66.874240",
        "lat": 10.493712,
        "lng": -66.87424
      },
      {
        "id": "zoom-distrito-capital-zoom-av-fuerzas-armadas",
        "name": "ZOOM AV FUERZAS ARMADAS",
        "code": "1382",
        "address": "Av. Fuerzas Armadas Norte, Esq. San Jose A San Luis, Edf. Residencia San Jose.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 AM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02125528305"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Av_Fuerzas_Armadas/",
        "details": {
          "Codigo": "1382",
          "Direccion": "Av. Fuerzas Armadas Norte, Esq. San Jose A San Luis, Edf. Residencia San Jose.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 AM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02125528305",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.499500,-66.910300",
        "lat": 10.4995,
        "lng": -66.9103
      },
      {
        "id": "zoom-distrito-capital-zoom-av-lecuna",
        "name": "ZOOM AV LECUNA",
        "code": "1220",
        "address": "Av. Lecuna Esquina De Miracielos Al Lado De La Estacion Del Metro Teatros. Parroquia Santa Teresa",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02124813251",
          "02124818918"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Av_Lecuna/",
        "details": {
          "Codigo": "1220",
          "Direccion": "Av. Lecuna Esquina De Miracielos Al Lado De La Estacion Del Metro Teatros. Parroquia Santa Teresa",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02124813251 | 02124818918",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.499700,-66.916200",
        "lat": 10.4997,
        "lng": -66.9162
      },
      {
        "id": "zoom-distrito-capital-zoom-av-libertador",
        "name": "ZOOM AV LIBERTADOR",
        "code": "2768",
        "address": "Av. Libertador Con Calle Negrin , C.c. Libertador, Local Nro. 13.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127616878"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Av_Libertador/",
        "details": {
          "Codigo": "2768",
          "Direccion": "Av. Libertador Con Calle Negrin , C.c. Libertador, Local Nro. 13.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127616878",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.497178,-66.875953",
        "lat": 10.497178,
        "lng": -66.875953
      },
      {
        "id": "zoom-distrito-capital-zoom-av-victoria",
        "name": "ZOOM AV VICTORIA",
        "code": "725",
        "address": "Av. Victoria, Edf. Meridional Pb, Entre Calle Cuba Y Av. Centro AmÉrica, Diagonal A La PanaderÍa La Flor Del Greco.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02126342589",
          "02126342606"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom__Av_Victoria/",
        "details": {
          "Codigo": "725",
          "Direccion": "Av. Victoria, Edf. Meridional Pb, Entre Calle Cuba Y Av. Centro AmÉrica, Diagonal A La PanaderÍa La Flor Del Greco.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02126342589 | 02126342606",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.485430,-66.902077",
        "lat": 10.48543,
        "lng": -66.902077
      },
      {
        "id": "zoom-distrito-capital-zoom-baruta",
        "name": "ZOOM BARUTA",
        "code": "4035",
        "address": "Calle Paez Local Numero 4, Referencia Diagonal A La Avenida Ricaurte,pueblo De Baruta",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 07:00 PM, Martes: 09:00 AM - 07:00 PM, Miercoles: 09:00 AM - 07:00 PM, Jueves: 09:00 AM - 07:00 PM, Viernes: 09:00 AM - 07:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02129520275"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Baruta/",
        "details": {
          "Codigo": "4035",
          "Direccion": "Calle Paez Local Numero 4, Referencia Diagonal A La Avenida Ricaurte,pueblo De Baruta",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 07:00 PM, Martes: 09:00 AM - 07:00 PM, Miercoles: 09:00 AM - 07:00 PM, Jueves: 09:00 AM - 07:00 PM, Viernes: 09:00 AM - 07:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02129520275"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.433102,-66.874001",
        "lat": 10.433102,
        "lng": -66.874001
      },
      {
        "id": "zoom-distrito-capital-zoom-bellas-artes",
        "name": "ZOOM BELLAS ARTES",
        "code": "4078",
        "address": "Avenida Este 2 Entre Sur 25 Y Boulevard Amador BendayÁn, Edificio Amaya, Pb La Candelaria. Caracas.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 05:30 PM, Martes: 08:30 AM - 05:30 PM, Miercoles: 08:30 AM - 05:30 PM, Jueves: 08:30 AM - 05:30 PM, Viernes: 08:30 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02125721064"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Bellas_Artes/",
        "details": {
          "Codigo": "4078",
          "Direccion": "Avenida Este 2 Entre Sur 25 Y Boulevard Amador BendayÁn, Edificio Amaya, Pb La Candelaria. Caracas.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 05:30 PM, Martes: 08:30 AM - 05:30 PM, Miercoles: 08:30 AM - 05:30 PM, Jueves: 08:30 AM - 05:30 PM, Viernes: 08:30 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02125721064",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.501950,-66.897500",
        "lat": 10.50195,
        "lng": -66.8975
      },
      {
        "id": "zoom-distrito-capital-zoom-bello-monte",
        "name": "ZOOM BELLO MONTE",
        "code": "1192",
        "address": "Av. Beethoven, Edif Ibaizabal, Local F, Colinas De Bello Monte.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127539163"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Bello_Monte/",
        "details": {
          "Codigo": "1192",
          "Direccion": "Av. Beethoven, Edif Ibaizabal, Local F, Colinas De Bello Monte.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127539163",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.488770,-66.877730",
        "lat": 10.48877,
        "lng": -66.87773
      },
      {
        "id": "zoom-distrito-capital-zoom-boleita",
        "name": "ZOOM BOLEITA",
        "code": "3045",
        "address": "Zona Boleita Sur Calle Segunda Calle De Boleita Sur Entre Santa Ana Y Av. Principal Local Nro.6.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02122393510"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Boleita/",
        "details": {
          "Codigo": "3045",
          "Direccion": "Zona Boleita Sur Calle Segunda Calle De Boleita Sur Entre Santa Ana Y Av. Principal Local Nro.6.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02122393510 | 02122393510"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483300,-66.816600",
        "lat": 10.4833,
        "lng": -66.8166
      },
      {
        "id": "zoom-distrito-capital-zoom-c-c-el-recreo",
        "name": "ZOOM C.C EL RECREO",
        "code": "684",
        "address": "Av. Casanova Con Calle El Recreo Centro Comercial El Recreo Nivel C1 Local Lc1-c29/30,urbanizaciÓn Sabana Grande",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 07:00 PM, Martes: 09:00 AM - 07:00 PM, Miercoles: 09:00 AM - 07:00 PM, Jueves: 09:00 AM - 07:00 PM, Viernes: 09:00 AM - 07:00 PM, Sabado: 10:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "02127613358",
          "02127614768"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Cc_El_Recreo/",
        "details": {
          "Codigo": "684",
          "Direccion": "Av. Casanova Con Calle El Recreo Centro Comercial El Recreo Nivel C1 Local Lc1-c29/30,urbanizaciÓn Sabana Grande",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 07:00 PM, Martes: 09:00 AM - 07:00 PM, Miercoles: 09:00 AM - 07:00 PM, Jueves: 09:00 AM - 07:00 PM, Viernes: 09:00 AM - 07:00 PM, Sabado: 10:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02127613358 | 02127614768",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.491614,-66.877098",
        "lat": 10.491614,
        "lng": -66.877098
      },
      {
        "id": "zoom-distrito-capital-zoom-c-c-galerias-el-recreo",
        "name": "ZOOM C.C GALERIAS EL RECREO",
        "code": "249",
        "address": "Av. Venezuela, Centro Comercial Galerias El Recreo. Nivel Avenida. Local Av-1c.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 06:00 PM, Martes: 08:30 AM - 06:00 PM, Miercoles: 08:30 AM - 06:00 PM, Jueves: 08:30 AM - 06:00 PM, Viernes: 08:30 AM - 06:00 PM, Sabado: 10:00 AM - 04:00 PM, Domingo: Cerrado",
        "phones": [
          "02127613920",
          "04127394897"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Cc_Galerias_El_Recreo/",
        "details": {
          "Codigo": "249",
          "Direccion": "Av. Venezuela, Centro Comercial Galerias El Recreo. Nivel Avenida. Local Av-1c.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 06:00 PM, Martes: 08:30 AM - 06:00 PM, Miercoles: 08:30 AM - 06:00 PM, Jueves: 08:30 AM - 06:00 PM, Viernes: 08:30 AM - 06:00 PM, Sabado: 10:00 AM - 04:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02127613920 | 04127394897"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.491718,-66.878156",
        "lat": 10.491718,
        "lng": -66.878156
      },
      {
        "id": "zoom-distrito-capital-zoom-c-c-bello-campo",
        "name": "ZOOM C.C. BELLO CAMPO",
        "code": "4067",
        "address": "Centro Comercial Bello Campo, Entre La Av. Coromoto, JosÉ Felix Sosa Y La Principal De La Urb. Bello Campo, Locales 27, 28 Y 29",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Cc_Bello_Campo/",
        "details": {
          "Codigo": "4067",
          "Direccion": "Centro Comercial Bello Campo, Entre La Av. Coromoto, JosÉ Felix Sosa Y La Principal De La Urb. Bello Campo, Locales 27, 28 Y 29",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.493446,-66.850721",
        "lat": 10.493446,
        "lng": -66.850721
      },
      {
        "id": "zoom-distrito-capital-zoom-c-c-c-t",
        "name": "ZOOM C.C.C.T",
        "code": "4044",
        "address": "Av La Estancia Entre Calle Blohm Y Distribuidor CiempiÉs C.c Ciudad Tamanaco Nivel 1era Etapa Local 43-r2 Urb Chuao",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 09:00 AM - 06:00 PM, Domingo: 09:00 AM - 06:00 PM",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Ccct/",
        "details": {
          "Codigo": "4044",
          "Direccion": "Av La Estancia Entre Calle Blohm Y Distribuidor CiempiÉs C.c Ciudad Tamanaco Nivel 1era Etapa Local 43-r2 Urb Chuao",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 09:00 AM - 06:00 PM, Domingo: 09:00 AM - 06:00 PM",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.484931,-66.854789",
        "lat": 10.484931,
        "lng": -66.854789
      },
      {
        "id": "zoom-distrito-capital-zoom-calle-colombia",
        "name": "ZOOM CALLE COLOMBIA",
        "code": "1485",
        "address": "Calle Colombia, Entre Cristo Y Magallanes, Urb. Nueva Caracas- Catia, Edificio S/n, Piso Pb., Local Unico.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 03:30 PM, Martes: 08:30 AM - 03:30 PM, Miercoles: 08:30 AM - 03:30 PM, Jueves: 08:30 AM - 03:30 PM, Viernes: 08:30 AM - 03:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127442936",
          "02128724989"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Calle_Colombia/",
        "details": {
          "Codigo": "1485",
          "Direccion": "Calle Colombia, Entre Cristo Y Magallanes, Urb. Nueva Caracas- Catia, Edificio S/n, Piso Pb., Local Unico.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 03:30 PM, Martes: 08:30 AM - 03:30 PM, Miercoles: 08:30 AM - 03:30 PM, Jueves: 08:30 AM - 03:30 PM, Viernes: 08:30 AM - 03:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127442936 | 02128724989",
          "Servicio(s)": "Envíos Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.510000,-66.946600",
        "lat": 10.51,
        "lng": -66.9466
      },
      {
        "id": "zoom-distrito-capital-zoom-calle-garcilaso",
        "name": "ZOOM CALLE GARCILASO",
        "code": "4043",
        "address": "Calle Garcilaso Edif Perseo Piso Pb Local A, Urb Bello Monte",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127538615"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Calle_Garcilaso/",
        "details": {
          "Codigo": "4043",
          "Direccion": "Calle Garcilaso Edif Perseo Piso Pb Local A, Urb Bello Monte",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127538615",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.485715,-66.874512",
        "lat": 10.485715,
        "lng": -66.874512
      },
      {
        "id": "zoom-distrito-capital-zoom-cdo-catia",
        "name": "ZOOM CDO CATIA",
        "code": "48",
        "address": "Av.ppal De Altavista, A 50 Metros De La Textileria Ovejita, Galpon Grupo Zoom.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Cdo_Catia/",
        "details": {
          "Codigo": "48",
          "Direccion": "Av.ppal De Altavista, A 50 Metros De La Textileria Ovejita, Galpon Grupo Zoom.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.518663,-66.941638",
        "lat": 10.518663,
        "lng": -66.941638
      },
      {
        "id": "zoom-distrito-capital-zoom-centro",
        "name": "ZOOM CENTRO",
        "code": "2435",
        "address": "Calle Norte 2 Entre Esquina De Santa Capilla A Mijares Edif San Sebastian Piso Pb Local Nro 5 Zona Catedral",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 09:00 AM - 03:00 PM, Domingo: 08:00 AM - 03:00 PM",
        "phones": [
          "02128644386",
          "02128629151"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Centro/",
        "details": {
          "Codigo": "2435",
          "Direccion": "Calle Norte 2 Entre Esquina De Santa Capilla A Mijares Edif San Sebastian Piso Pb Local Nro 5 Zona Catedral",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 09:00 AM - 03:00 PM, Domingo: 08:00 AM - 03:00 PM",
          "Telefono(s)": "02128644386 | 02128629151",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.510050,-66.914182",
        "lat": 10.51005,
        "lng": -66.914182
      },
      {
        "id": "zoom-distrito-capital-zoom-centro-comercial-bello-monte",
        "name": "ZOOM CENTRO COMERCIAL BELLO MONTE",
        "code": "728",
        "address": "Av. Principal De Bello Monte, Entre Av. Leonardo Da Vici Y Av. Lincoln. Ctro. Comercial Bello Monte. P.b. Local Nro. 10. Bello Monte.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 03:45 PM, Martes: 09:00 AM - 03:45 PM, Miercoles: 09:00 AM - 03:45 PM, Jueves: 09:00 AM - 03:45 PM, Viernes: 09:00 AM - 03:45 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127512097",
          "02127538886"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Centro_Comercial_Bello_Monte/",
        "details": {
          "Codigo": "728",
          "Direccion": "Av. Principal De Bello Monte, Entre Av. Leonardo Da Vici Y Av. Lincoln. Ctro. Comercial Bello Monte. P.b. Local Nro. 10. Bello Monte.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 03:45 PM, Martes: 09:00 AM - 03:45 PM, Miercoles: 09:00 AM - 03:45 PM, Jueves: 09:00 AM - 03:45 PM, Viernes: 09:00 AM - 03:45 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127512097 | 02127538886",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.490000,-66.881000",
        "lat": 10.49,
        "lng": -66.881
      },
      {
        "id": "zoom-distrito-capital-zoom-chacaito-i",
        "name": "ZOOM CHACAITO I",
        "code": "825",
        "address": "Av. Tamanaco, Urbanizacion El Rosal, Centro Comercial Arta, Piso 1, Local 1-3.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Chacaito_I/",
        "details": {
          "Codigo": "825",
          "Direccion": "Av. Tamanaco, Urbanizacion El Rosal, Centro Comercial Arta, Piso 1, Local 1-3.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.490000,-66.868000",
        "lat": 10.49,
        "lng": -66.868
      },
      {
        "id": "zoom-distrito-capital-zoom-chacao-c-a",
        "name": "ZOOM CHACAO, C.A",
        "code": "1623",
        "address": "Calle Nro 3 Monsenor Juan Grilc Rezman, Qta. Silvia Nro 309, Local Nro 5 Chacao.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 07:00 AM - 05:00 PM, Martes: 07:00 AM - 05:00 PM, Miercoles: 07:00 AM - 05:00 PM, Jueves: 07:00 AM - 05:00 PM, Viernes: 07:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02122669103"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Chacao_Ca/",
        "details": {
          "Codigo": "1623",
          "Direccion": "Calle Nro 3 Monsenor Juan Grilc Rezman, Qta. Silvia Nro 309, Local Nro 5 Chacao.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 07:00 AM - 05:00 PM, Martes: 07:00 AM - 05:00 PM, Miercoles: 07:00 AM - 05:00 PM, Jueves: 07:00 AM - 05:00 PM, Viernes: 07:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02122669103 | 02122669103",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.495407,-66.856058",
        "lat": 10.495407,
        "lng": -66.856058
      },
      {
        "id": "zoom-distrito-capital-zoom-coche",
        "name": "ZOOM COCHE",
        "code": "1194",
        "address": "Av Intercomunal Valle Coche C.c Coche Nivel Pb Local 25 Urb Delgado Chalbaud Diagonal Al Supermercado Supremo.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02126824855"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Coche/",
        "details": {
          "Codigo": "1194",
          "Direccion": "Av Intercomunal Valle Coche C.c Coche Nivel Pb Local 25 Urb Delgado Chalbaud Diagonal Al Supermercado Supremo.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02126824855"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.448537,-66.924942",
        "lat": 10.448537,
        "lng": -66.924942
      },
      {
        "id": "zoom-distrito-capital-zoom-don-bosco",
        "name": "ZOOM DON BOSCO",
        "code": "4085",
        "address": "Av San Juan Bosco Entre 1 Transversal Y Av Fco De Miranda Edif May Flower Piso Pb Local B",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 05:30 PM, Martes: 08:30 AM - 05:30 PM, Miercoles: 08:30 AM - 05:30 PM, Jueves: 08:30 AM - 05:30 PM, Viernes: 08:30 AM - 05:30 PM, Sabado: 09:00 AM - 04:00 PM, Domingo: Cerrado",
        "phones": [
          "02123105997",
          "04142512277"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Don_Bosco/",
        "details": {
          "Codigo": "4085",
          "Direccion": "Av San Juan Bosco Entre 1 Transversal Y Av Fco De Miranda Edif May Flower Piso Pb Local B",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 05:30 PM, Martes: 08:30 AM - 05:30 PM, Miercoles: 08:30 AM - 05:30 PM, Jueves: 08:30 AM - 05:30 PM, Viernes: 08:30 AM - 05:30 PM, Sabado: 09:00 AM - 04:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02123105997 | 04142512277",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.496100,-66.849550",
        "lat": 10.4961,
        "lng": -66.84955
      },
      {
        "id": "zoom-distrito-capital-zoom-el-cementerio",
        "name": "ZOOM EL CEMENTERIO",
        "code": "4098",
        "address": "Av. Ppal Del Cementerio Calle El Degredo Mercapop Pasillo 6 Gran Mayor Local 12, El Cementerio.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 03:00 PM, Domingo: 08:00 AM - 03:00 PM",
        "phones": [
          "04124834763"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_El_Cementerio/",
        "details": {
          "Codigo": "4098",
          "Direccion": "Av. Ppal Del Cementerio Calle El Degredo Mercapop Pasillo 6 Gran Mayor Local 12, El Cementerio.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 03:00 PM, Domingo: 08:00 AM - 03:00 PM",
          "Telefono(s)": "04124834763",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.480168,-66.918334",
        "lat": 10.480168,
        "lng": -66.918334
      },
      {
        "id": "zoom-distrito-capital-zoom-el-marques",
        "name": "ZOOM EL MARQUES",
        "code": "4103",
        "address": "Av. Sanz, Entre Av. RÓmulo Gallegos Y Calle NaiguatÁ,c.c. El MarquÉs, Locales 2 - 3 -9 10",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_El_Marques/",
        "details": {
          "Codigo": "4103",
          "Direccion": "Av. Sanz, Entre Av. RÓmulo Gallegos Y Calle NaiguatÁ,c.c. El MarquÉs, Locales 2 - 3 -9 10",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.495540,-66.810840",
        "lat": 10.49554,
        "lng": -66.81084
      },
      {
        "id": "zoom-distrito-capital-zoom-el-valle",
        "name": "ZOOM EL VALLE",
        "code": "4145",
        "address": "Calle Antigua Calle Real De Los Jardines Del Valle Calle 14 Local Nro 14 Local, Urb El Valle Taller Rani",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 12:30 PMMartes: 08:30 AM - 12:30 PMMiercoles: 08:30 AM - 12:30 PMJueves: 08:30 AM - 12:30 PMViernes: 08:30 AM - 12:30 PMSabado: 08:30 AM - 12:30 PMDomingo: Cerrado",
        "phones": [
          "04125420836",
          "02126729456"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_El_Valle/",
        "details": {
          "Codigo": "4145",
          "Direccion": "Calle Antigua Calle Real De Los Jardines Del Valle Calle 14 Local Nro 14 Local, Urb El Valle Taller Rani",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 12:30 PMMartes: 08:30 AM - 12:30 PMMiercoles: 08:30 AM - 12:30 PMJueves: 08:30 AM - 12:30 PMViernes: 08:30 AM - 12:30 PMSabado: 08:30 AM - 12:30 PMDomingo: Cerrado",
          "Telefono(s)": "04125420836 | 02126729456",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:30 AM - 12:30 PM",
          "Martes": "08:30 AM - 12:30 PM",
          "Miercoles": "08:30 AM - 12:30 PM",
          "Jueves": "08:30 AM - 12:30 PM",
          "Viernes": "08:30 AM - 12:30 PM",
          "Sabado": "08:30 AM - 12:30 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.456634,-66.917466",
        "lat": 10.456634,
        "lng": -66.917466
      },
      {
        "id": "zoom-distrito-capital-zoom-forum-ipsfa",
        "name": "ZOOM FORUM IPSFA",
        "code": "4150",
        "address": "Centro Comercial Los Próceres (ipsfa), Paseo Los Ilustres, Caracas",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 05:00 PMDomingo: 08:00 AM - 05:00 PM",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Forum_Ipsfa/",
        "details": {
          "Codigo": "4150",
          "Direccion": "Centro Comercial Los Próceres (ipsfa), Paseo Los Ilustres, Caracas",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 05:00 PMDomingo: 08:00 AM - 05:00 PM",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envío Nacional Casillero Internacional Remesas Envío Internacional Casillero Nacional Divisas Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado Domingo",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "08:00 AM - 05:00 PM",
          "Domingo": "08:00 AM - 05:00 PM"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.476350,-66.896090",
        "lat": 10.47635,
        "lng": -66.89609
      },
      {
        "id": "zoom-distrito-capital-zoom-la-california",
        "name": "ZOOM LA CALIFORNIA",
        "code": "1257",
        "address": "Av Francisco De Miranda, Residencias MÓnaco Local B, Urb La California Norte",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_La_California/",
        "details": {
          "Codigo": "1257",
          "Direccion": "Av Francisco De Miranda, Residencias MÓnaco Local B, Urb La California Norte",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483400,-66.819700",
        "lat": 10.4834,
        "lng": -66.8197
      },
      {
        "id": "zoom-distrito-capital-zoom-la-candelaria",
        "name": "ZOOM LA CANDELARIA",
        "code": "510",
        "address": "Av Este 2. Tracabordo A Puente Yanez, Edif. Res. Yanoral, P.b. La Candelaria.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02125767249",
          "02125762250"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_La_Candelaria/",
        "details": {
          "Codigo": "510",
          "Direccion": "Av Este 2. Tracabordo A Puente Yanez, Edif. Res. Yanoral, P.b. La Candelaria.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02125767249 | 02125762250",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.503800,-66.907100",
        "lat": 10.5038,
        "lng": -66.9071
      },
      {
        "id": "zoom-distrito-capital-zoom-la-florida",
        "name": "ZOOM LA FLORIDA",
        "code": "2706",
        "address": "Av. Juan Bautista Arismendi, Entre Calle Pedroza Y Av. Don Bosco.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 12:00 PM, Martes: 08:30 PM - 12:00 PM, Miercoles: 08:30 AM - 12:00 PM, Jueves: 08:30 AM - 12:00 PM, Viernes: 08:30 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02127304991"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_La_Florida/",
        "details": {
          "Codigo": "2706",
          "Direccion": "Av. Juan Bautista Arismendi, Entre Calle Pedroza Y Av. Don Bosco.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 12:00 PM, Martes: 08:30 PM - 12:00 PM, Miercoles: 08:30 AM - 12:00 PM, Jueves: 08:30 AM - 12:00 PM, Viernes: 08:30 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02127304991"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.501791,-66.874347",
        "lat": 10.501791,
        "lng": -66.874347
      },
      {
        "id": "zoom-distrito-capital-zoom-la-hoyada",
        "name": "ZOOM LA HOYADA",
        "code": "4040",
        "address": "Av Fuerzas Armadas Entre Esquinas De Socarras Y CorazÓn De Jesus Edf La Galeria Pb Local 8, La Hoyada",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_La_Hoyada/",
        "details": {
          "Codigo": "4040",
          "Direccion": "Av Fuerzas Armadas Entre Esquinas De Socarras Y CorazÓn De Jesus Edf La Galeria Pb Local 8, La Hoyada",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.503917,-66.910060",
        "lat": 10.503917,
        "lng": -66.91006
      },
      {
        "id": "zoom-distrito-capital-zoom-la-tahona",
        "name": "ZOOM LA TAHONA",
        "code": "4037",
        "address": "Avenida La Guairita Calle Reyna, Instituto Universitario Avepane, Urb La Tahona",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04129293927"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_La_Tahona/",
        "details": {
          "Codigo": "4037",
          "Direccion": "Avenida La Guairita Calle Reyna, Instituto Universitario Avepane, Urb La Tahona",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04129293927"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.440706,-66.857200",
        "lat": 10.440706,
        "lng": -66.8572
      },
      {
        "id": "zoom-distrito-capital-zoom-la-urbina",
        "name": "ZOOM LA URBINA",
        "code": "46",
        "address": "Sector Sur, Calle 7, Urb La Urbina, Edificio Grupo Zoom.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_La_Urbina/",
        "details": {
          "Codigo": "46",
          "Direccion": "Sector Sur, Calle 7, Urb La Urbina, Edificio Grupo Zoom.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.493600,-66.809600",
        "lat": 10.4936,
        "lng": -66.8096
      },
      {
        "id": "zoom-distrito-capital-zoom-las-mercedes",
        "name": "ZOOM LAS MERCEDES",
        "code": "685",
        "address": "Calle Veracruz, Edificio Torreon, P.b, Local 4. Las Mercedes",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02129518275",
          "04123907092"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Las_Mercedes/",
        "details": {
          "Codigo": "685",
          "Direccion": "Calle Veracruz, Edificio Torreon, P.b, Local 4. Las Mercedes",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02129518275 | 04123907092",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.479740,-66.856540",
        "lat": 10.47974,
        "lng": -66.85654
      },
      {
        "id": "zoom-distrito-capital-zoom-las-palmas",
        "name": "ZOOM LAS PALMAS",
        "code": "1625",
        "address": "Av. Las Palmas, Edf. Palma Alta, Torre A, Local 4, Pb.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02120000000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Las_Palmas/",
        "details": {
          "Codigo": "1625",
          "Direccion": "Av. Las Palmas, Edf. Palma Alta, Torre A, Local 4, Pb.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02120000000",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.504300,-66.880400",
        "lat": 10.5043,
        "lng": -66.8804
      },
      {
        "id": "zoom-distrito-capital-zoom-los-chaguaramos",
        "name": "ZOOM LOS CHAGUARAMOS",
        "code": "1127",
        "address": "Calle Razetti, Urb. Los Chaguaramos, Quinta Centro Profesional Los Chaguaramos Pb.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:30 AM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02126623496",
          "04169304378"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Los_Chaguaramos/",
        "details": {
          "Codigo": "1127",
          "Direccion": "Calle Razetti, Urb. Los Chaguaramos, Quinta Centro Profesional Los Chaguaramos Pb.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:30 AM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02126623496 | 04169304378",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.485040,-66.886920",
        "lat": 10.48504,
        "lng": -66.88692
      },
      {
        "id": "zoom-distrito-capital-zoom-los-cortijos",
        "name": "ZOOM LOS CORTIJOS",
        "code": "1193",
        "address": "Av. Francisco De Miranda Edificio Centro Empresarial Don Bosco Piso P.b Local 2. Los Cortijos De Lourdes",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02122393830",
          "04242725228"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Los_Cortijos/",
        "details": {
          "Codigo": "1193",
          "Direccion": "Av. Francisco De Miranda Edificio Centro Empresarial Don Bosco Piso P.b Local 2. Los Cortijos De Lourdes",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02122393830 | 04242725228",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.488800,-66.825500",
        "lat": 10.4888,
        "lng": -66.8255
      },
      {
        "id": "zoom-distrito-capital-zoom-los-dos-caminos",
        "name": "ZOOM LOS DOS CAMINOS",
        "code": "4122",
        "address": "Av Sucre Entre Cuarta Y Quinta Transversal Conjunto Centro Parque Boyaca Local Planta Baja Nro 11,urb Los Dos Caminos",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04123058843"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Los_Dos_Caminos/",
        "details": {
          "Codigo": "4122",
          "Direccion": "Av Sucre Entre Cuarta Y Quinta Transversal Conjunto Centro Parque Boyaca Local Planta Baja Nro 11,urb Los Dos Caminos",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04123058843",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.499978,-66.834230",
        "lat": 10.499978,
        "lng": -66.83423
      },
      {
        "id": "zoom-distrito-capital-zoom-los-naranjos",
        "name": "ZOOM LOS NARANJOS",
        "code": "779",
        "address": "Av. El Pauji, C.c. Galerias Los Naranjos, Piso 2, Local C2-53.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02129853166",
          "02129857738"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Los_Naranjos/",
        "details": {
          "Codigo": "779",
          "Direccion": "Av. El Pauji, C.c. Galerias Los Naranjos, Piso 2, Local C2-53.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02129853166 | 02129857738",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.440400,-66.835400",
        "lat": 10.4404,
        "lng": -66.8354
      },
      {
        "id": "zoom-distrito-capital-zoom-los-palos-grandes",
        "name": "ZOOM LOS PALOS GRANDES",
        "code": "4102",
        "address": "1ra. Transversal De Los Palos Grandes, Entre 2da. Y 3ra. Avenida, Edificio Green Palace Planta Baja, Local 4. Los Palos Grandes",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Los_Palos_Grandes/",
        "details": {
          "Codigo": "4102",
          "Direccion": "1ra. Transversal De Los Palos Grandes, Entre 2da. Y 3ra. Avenida, Edificio Green Palace Planta Baja, Local 4. Los Palos Grandes",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.498700,-66.844150",
        "lat": 10.4987,
        "lng": -66.84415
      },
      {
        "id": "zoom-distrito-capital-zoom-los-ruices",
        "name": "ZOOM LOS RUICES",
        "code": "4134",
        "address": "Av Francisco De Miranda, Entre Calle C Y Calle Guanchez Cc Los Ruices Nivel Pb Local 11 Urb Los Ruices",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 05:30 PMMartes: 08:30 AM - 05:30 PMMiercoles: 08:30 AM - 05:30 PMJueves: 08:30 AM - 05:30 PMViernes: 08:30 AM - 05:30 PMSabado: 09:00 AM - 02:00 PMDomingo: Cerrado",
        "phones": [
          "04241216513"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Los_Ruices/",
        "details": {
          "Codigo": "4134",
          "Direccion": "Av Francisco De Miranda, Entre Calle C Y Calle Guanchez Cc Los Ruices Nivel Pb Local 11 Urb Los Ruices",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 05:30 PMMartes: 08:30 AM - 05:30 PMMiercoles: 08:30 AM - 05:30 PMJueves: 08:30 AM - 05:30 PMViernes: 08:30 AM - 05:30 PMSabado: 09:00 AM - 02:00 PMDomingo: Cerrado",
          "Telefono(s)": "04241216513",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:30 AM - 05:30 PM",
          "Martes": "08:30 AM - 05:30 PM",
          "Miercoles": "08:30 AM - 05:30 PM",
          "Jueves": "08:30 AM - 05:30 PM",
          "Viernes": "08:30 AM - 05:30 PM",
          "Sabado": "09:00 AM - 02:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.492790,-66.828790",
        "lat": 10.49279,
        "lng": -66.82879
      },
      {
        "id": "zoom-distrito-capital-zoom-makro-la-yaguara",
        "name": "ZOOM MAKRO LA YAGUARA",
        "code": "1372",
        "address": "Av. Intercomunal De Antimano Cruce Con Av. Principal De La Yaguara.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Makro_La_Yaguara/",
        "details": {
          "Codigo": "1372",
          "Direccion": "Av. Intercomunal De Antimano Cruce Con Av. Principal De La Yaguara.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.477492,-66.956848",
        "lat": 10.477492,
        "lng": -66.956848
      },
      {
        "id": "zoom-distrito-capital-zoom-manzanares",
        "name": "ZOOM MANZANARES",
        "code": "1313",
        "address": "Av. Principal C.c Manzanares Ii Nivel Mirador Local M104",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02129446663",
          "04141262683"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Manzanares/",
        "details": {
          "Codigo": "1313",
          "Direccion": "Av. Principal C.c Manzanares Ii Nivel Mirador Local M104",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02129446663 | 04141262683",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.433400,-66.883300",
        "lat": 10.4334,
        "lng": -66.8833
      },
      {
        "id": "zoom-distrito-capital-zoom-montalban-i",
        "name": "ZOOM MONTALBAN I",
        "code": "1885",
        "address": "Urb. Montalban I, Av. Nro. 2, Av. Montalban I, C.c. Uslar Nivel Mirador, Local Nro. 03, La Nro. 21.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02124712023"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Montalban_I/",
        "details": {
          "Codigo": "1885",
          "Direccion": "Urb. Montalban I, Av. Nro. 2, Av. Montalban I, C.c. Uslar Nivel Mirador, Local Nro. 03, La Nro. 21.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02124712023",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.475480,-66.949683",
        "lat": 10.47548,
        "lng": -66.949683
      },
      {
        "id": "zoom-distrito-capital-zoom-montalban-iii",
        "name": "ZOOM MONTALBAN III",
        "code": "4139",
        "address": "C.c. Caracas, Piso 1, Local 01 15 GalerÍas Magic Center (minitiendas) Montalban Iii, Av. Transversal 3-e.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 05:00 PMMartes: 09:00 AM - 05:00 PMMiercoles: 09:00 AM - 05:00 PMJueves: 09:00 AM - 05:00 PMViernes: 09:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "02124724111"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Montalban_Iii/",
        "details": {
          "Codigo": "4139",
          "Direccion": "C.c. Caracas, Piso 1, Local 01 15 GalerÍas Magic Center (minitiendas) Montalban Iii, Av. Transversal 3-e.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 05:00 PMMartes: 09:00 AM - 05:00 PMMiercoles: 09:00 AM - 05:00 PMJueves: 09:00 AM - 05:00 PMViernes: 09:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "02124724111",
          "Servicio(s)": "Envío Nacional Casillero Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "09:00 AM - 05:00 PM",
          "Martes": "09:00 AM - 05:00 PM",
          "Miercoles": "09:00 AM - 05:00 PM",
          "Jueves": "09:00 AM - 05:00 PM",
          "Viernes": "09:00 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.472468,-66.962692",
        "lat": 10.472468,
        "lng": -66.962692
      },
      {
        "id": "zoom-distrito-capital-zoom-multicentro-empresarial-del-este",
        "name": "ZOOM MULTICENTRO EMPRESARIAL DEL ESTE",
        "code": "730",
        "address": "Av. Francisco De Miranda Multicentro Empresarial Del Este, Planta Baja Torre Miranda. Local Pb 04, Al Lado Del Meson De Pita.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02122678865"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Multicentro_Empresarial_Del_Este/",
        "details": {
          "Codigo": "730",
          "Direccion": "Av. Francisco De Miranda Multicentro Empresarial Del Este, Planta Baja Torre Miranda. Local Pb 04, Al Lado Del Meson De Pita.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02122678865 | 02122678865",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.491800,-66.853800",
        "lat": 10.4918,
        "lng": -66.8538
      },
      {
        "id": "zoom-distrito-capital-zoom-parque-caracas",
        "name": "ZOOM PARQUE CARACAS",
        "code": "2402",
        "address": "Av. Este Nro. 2, Con Calle Sur Nro. 21, C.c. Parque Caracas, Nivel Pb, Local Nro. 36..",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04248922112",
          "02125775569"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Parque_Caracas/",
        "details": {
          "Codigo": "2402",
          "Direccion": "Av. Este Nro. 2, Con Calle Sur Nro. 21, C.c. Parque Caracas, Nivel Pb, Local Nro. 36..",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04248922112 | 02125775569",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.503528,-66.900458",
        "lat": 10.503528,
        "lng": -66.900458
      },
      {
        "id": "zoom-distrito-capital-zoom-parque-humboldt",
        "name": "ZOOM PARQUE HUMBOLDT",
        "code": "1214",
        "address": "Centro Comercial Parque Humboldt, Local 10, Urb. Prados Del Este",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Parque_Humboldt/",
        "details": {
          "Codigo": "1214",
          "Direccion": "Centro Comercial Parque Humboldt, Local 10, Urb. Prados Del Este",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.450700,-66.872200",
        "lat": 10.4507,
        "lng": -66.8722
      },
      {
        "id": "zoom-distrito-capital-zoom-plaza-las-americas",
        "name": "ZOOM PLAZA LAS AMERICAS",
        "code": "4152",
        "address": "Av Raul Leoni Cc Plaza Las Americas Nivel Pb Local 2 Urb El Cafetal",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 06:00 PMMartes: 09:00 AM - 06:00 PMMiercoles: 09:00 AM - 06:00 PMJueves: 09:00 AM - 06:00 PMViernes: 09:00 AM - 06:00 PMSabado: 09:00 AM - 06:00 PMDomingo: Cerrado",
        "phones": [
          "04241480329",
          "02122259147"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Plaza_Las_Americas/",
        "details": {
          "Codigo": "4152",
          "Direccion": "Av Raul Leoni Cc Plaza Las Americas Nivel Pb Local 2 Urb El Cafetal",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 06:00 PMMartes: 09:00 AM - 06:00 PMMiercoles: 09:00 AM - 06:00 PMJueves: 09:00 AM - 06:00 PMViernes: 09:00 AM - 06:00 PMSabado: 09:00 AM - 06:00 PMDomingo: Cerrado",
          "Telefono(s)": "04241480329 | 02122259147",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "09:00 AM - 06:00 PM",
          "Martes": "09:00 AM - 06:00 PM",
          "Miercoles": "09:00 AM - 06:00 PM",
          "Jueves": "09:00 AM - 06:00 PM",
          "Viernes": "09:00 AM - 06:00 PM",
          "Sabado": "09:00 AM - 06:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.457980,-66.828917",
        "lat": 10.45798,
        "lng": -66.828917
      },
      {
        "id": "zoom-distrito-capital-zoom-prados-del-este",
        "name": "ZOOM PRADOS DEL ESTE",
        "code": "238",
        "address": "Av. Ppal. De Prados Del Este. Ctro. Comercial Galerias Prados Del Este. Nivel Pa. Local 39.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 10:00 AM - 04:00 PM, Domingo: Cerrado",
        "phones": [
          "04241206154",
          "04123103404"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Prados_Del_Este/",
        "details": {
          "Codigo": "238",
          "Direccion": "Av. Ppal. De Prados Del Este. Ctro. Comercial Galerias Prados Del Este. Nivel Pa. Local 39.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 10:00 AM - 04:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04241206154 | 04123103404"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.449909,-66.880577",
        "lat": 10.449909,
        "lng": -66.880577
      },
      {
        "id": "zoom-distrito-capital-zoom-propatria",
        "name": "ZOOM PROPATRIA",
        "code": "3952",
        "address": "Av Simon Bolivar Cc Propatria Nivel 1 Local A9 Urb Propatria",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02128721361"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Propatria/",
        "details": {
          "Codigo": "3952",
          "Direccion": "Av Simon Bolivar Cc Propatria Nivel 1 Local A9 Urb Propatria",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02128721361"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.504146,-66.952899",
        "lat": 10.504146,
        "lng": -66.952899
      },
      {
        "id": "zoom-distrito-capital-zoom-quinta-crespo",
        "name": "ZOOM QUINTA CRESPO",
        "code": "1108",
        "address": "Av. Baralt Esq El Carmen C.c. Doral Baralt Nivel 1 Local 30. Quinta Crespo.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02124824568"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Quinta_Crespo/",
        "details": {
          "Codigo": "1108",
          "Direccion": "Av. Baralt Esq El Carmen C.c. Doral Baralt Nivel 1 Local 30. Quinta Crespo.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 09:00 AM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02124824568",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.497300,-66.917400",
        "lat": 10.4973,
        "lng": -66.9174
      },
      {
        "id": "zoom-distrito-capital-zoom-sambil-la-candelaria",
        "name": "ZOOM SAMBIL LA CANDELARIA",
        "code": "4131",
        "address": "44 Av. Este 0, C.c Sambil La Candelaria, Local No. E-04, Nivel SÓtano 1",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 10:00 AM - 08:00 PMMartes: 10:00 AM - 08:00 PMMiercoles: 10:00 AM - 08:00 PMJueves: 10:00 AM - 08:00 PMViernes: 10:00 AM - 08:00 PMSabado: 10:00 AM - 08:00 PMDomingo: 12:00 PM - 08:00 PM",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Sambil_La_Candelaria/",
        "details": {
          "Codigo": "4131",
          "Direccion": "44 Av. Este 0, C.c Sambil La Candelaria, Local No. E-04, Nivel SÓtano 1",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 10:00 AM - 08:00 PMMartes: 10:00 AM - 08:00 PMMiercoles: 10:00 AM - 08:00 PMJueves: 10:00 AM - 08:00 PMViernes: 10:00 AM - 08:00 PMSabado: 10:00 AM - 08:00 PMDomingo: 12:00 PM - 08:00 PM",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Remesas Casillero Nacional Divisas Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado Domingo",
          "Lunes": "10:00 AM - 08:00 PM",
          "Martes": "10:00 AM - 08:00 PM",
          "Miercoles": "10:00 AM - 08:00 PM",
          "Jueves": "10:00 AM - 08:00 PM",
          "Viernes": "10:00 AM - 08:00 PM",
          "Sabado": "10:00 AM - 08:00 PM",
          "Domingo": "12:00 PM - 08:00 PM"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.504282,-66.901413",
        "lat": 10.504282,
        "lng": -66.901413
      },
      {
        "id": "zoom-distrito-capital-zoom-san-martin",
        "name": "ZOOM SAN MARTIN",
        "code": "50",
        "address": "Av. San Martin, Entre La 2da Y 3era Calle Los Molinos, Urb. Los Molinos, Edificio Komplot, Pb. P.ref. Edificio Komplot, Pb.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_San_Martin/",
        "details": {
          "Codigo": "50",
          "Direccion": "Av. San Martin, Entre La 2da Y 3era Calle Los Molinos, Urb. Los Molinos, Edificio Komplot, Pb. P.ref. Edificio Komplot, Pb.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.492200,-66.938000",
        "lat": 10.4922,
        "lng": -66.938
      },
      {
        "id": "zoom-distrito-capital-zoom-santa-fe",
        "name": "ZOOM SANTA FE",
        "code": "142",
        "address": "Av. Jose Maria Vargas. Ctro Comercial Santa Fe. Nivel C-3. Local 68, Urb Santa Fe Norte.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 10:00 AM - 06:00 PM, Martes: 10:00 AM - 06:00 PM, Miercoles: 10:00 AM - 06:00 PM, Jueves: 10:00 AM - 06:00 PM, Viernes: 10:00 AM - 06:00 PM, Sabado: 11:00 AM - 03:30 PM, Domingo: Cerrado",
        "phones": [
          "02129763064",
          "04140223755"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Santa_Fe/",
        "details": {
          "Codigo": "142",
          "Direccion": "Av. Jose Maria Vargas. Ctro Comercial Santa Fe. Nivel C-3. Local 68, Urb Santa Fe Norte.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 10:00 AM - 06:00 PM, Martes: 10:00 AM - 06:00 PM, Miercoles: 10:00 AM - 06:00 PM, Jueves: 10:00 AM - 06:00 PM, Viernes: 10:00 AM - 06:00 PM, Sabado: 11:00 AM - 03:30 PM, Domingo: Cerrado",
          "Telefono(s)": "02129763064 | 04140223755"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.466564,-66.871340",
        "lat": 10.466564,
        "lng": -66.87134
      },
      {
        "id": "zoom-distrito-capital-zoom-santa-rosalia",
        "name": "ZOOM SANTA ROSALIA",
        "code": "2984",
        "address": "Esq. Muerto A Pelaez, Casa Nro. 116, Zona Parroquia Santa Rosalia.",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 AM, Jueves: 08:30 AM - 04:00 AM, Viernes: 08:30 AM - 04:00 AM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02125416823",
          "02125413324"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Santa_Rosalia/",
        "details": {
          "Codigo": "2984",
          "Direccion": "Esq. Muerto A Pelaez, Casa Nro. 116, Zona Parroquia Santa Rosalia.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 AM, Jueves: 08:30 AM - 04:00 AM, Viernes: 08:30 AM - 04:00 AM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02125416823 | 02125413324"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.498413,-66.914296",
        "lat": 10.498413,
        "lng": -66.914296
      },
      {
        "id": "zoom-distrito-capital-zoom-torre-exa",
        "name": "ZOOM TORRE EXA",
        "code": "4003",
        "address": "Av Libertador Cc Exa Nivel Pb Local 17 Urb El Rosal",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes: 08:00 AM - 06:30 PM, Martes: 08:00 AM - 06:30 PM, Miercoles: 08:00 AM - 06:30 PM, Jueves: 08:00 AM - 06:30 PM, Viernes: 08:00 AM - 06:30 PM, Sabado: 09:00 AM - 04:00 PM, Domingo: Cerrado",
        "phones": [
          "02129520275"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Distrito_Capital/Caracas/Zoom_Torre_Exa/",
        "details": {
          "Codigo": "4003",
          "Direccion": "Av Libertador Cc Exa Nivel Pb Local 17 Urb El Rosal",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes: 08:00 AM - 06:30 PM, Martes: 08:00 AM - 06:30 PM, Miercoles: 08:00 AM - 06:30 PM, Jueves: 08:00 AM - 06:30 PM, Viernes: 08:00 AM - 06:30 PM, Sabado: 09:00 AM - 04:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02129520275"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.490300,-66.859300",
        "lat": 10.4903,
        "lng": -66.8593
      }
    ],
    "Falcon": [
      {
        "id": "zoom-falcon-zoom-av-manaure",
        "name": "ZOOM AV. MANAURE",
        "code": "3953",
        "address": "Av Manaure Con Calle El Sol Cc San Antonio Plaza P.b Local 08",
        "city": "Coro, Falcon",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "05019666000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Coro/Zoom_Av_Manaure/",
        "details": {
          "Codigo": "3953",
          "Direccion": "Av Manaure Con Calle El Sol Cc San Antonio Plaza P.b Local 08",
          "Ciudad": "Coro, Falcon",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "05019666000"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.401569,-69.672142",
        "lat": 11.401569,
        "lng": -69.672142
      },
      {
        "id": "zoom-falcon-zoom-calle-argentina",
        "name": "ZOOM CALLE ARGENTINA",
        "code": "1799",
        "address": "Calle Argentina Esquina Calle Garcés Centro Punto Fijo.",
        "city": "Punto Fijo, Falcon",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "02692467546",
          "04146950242"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Punto_Fijo/Zoom_Calle_Argentina/",
        "details": {
          "Codigo": "1799",
          "Direccion": "Calle Argentina Esquina Calle Garcés Centro Punto Fijo.",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02692467546 | 04146950242",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.691560,-70.204057",
        "lat": 11.69156,
        "lng": -70.204057
      },
      {
        "id": "zoom-falcon-zoom-coro",
        "name": "ZOOM CORO",
        "code": "59",
        "address": "Sector Los Tres Platos, Av. Los Medanos Cruce Con Av. Independencia, Edificio Aref, Pb., Local 1.",
        "city": "Coro, Falcon",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Coro/Zoom_Coro/",
        "details": {
          "Codigo": "59",
          "Direccion": "Sector Los Tres Platos, Av. Los Medanos Cruce Con Av. Independencia, Edificio Aref, Pb., Local 1.",
          "Ciudad": "Coro, Falcon",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.411046,-69.668659",
        "lat": 11.411046,
        "lng": -69.668659
      },
      {
        "id": "zoom-falcon-zoom-dabajuro",
        "name": "ZOOM DABAJURO",
        "code": "3540",
        "address": "Av Bolivar Local Nro S/n, Sector El Cerro Debajuro",
        "city": "Dabajuro, Falcon",
        "schedule": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02798282132"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Dabajuro/Zoom_Dabajuro/",
        "details": {
          "Codigo": "3540",
          "Direccion": "Av Bolivar Local Nro S/n, Sector El Cerro Debajuro",
          "Ciudad": "Dabajuro, Falcon",
          "Horario": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02798282132"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.017864,-70.669506",
        "lat": 11.017864,
        "lng": -70.669506
      },
      {
        "id": "zoom-falcon-zoom-ferial-punto-express",
        "name": "ZOOM FERIAL PUNTO EXPRESS",
        "code": "3995",
        "address": "Calle Falcon Cc Ferial Nivel Pb Local 01, Zona Centro Santa Ana",
        "city": "Coro, Falcon",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04126843501"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Coro/Zoom_Ferial_Punto_Express/",
        "details": {
          "Codigo": "3995",
          "Direccion": "Calle Falcon Cc Ferial Nivel Pb Local 01, Zona Centro Santa Ana",
          "Ciudad": "Coro, Falcon",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04126843501"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.408791,-69.676777",
        "lat": 11.408791,
        "lng": -69.676777
      },
      {
        "id": "zoom-falcon-zoom-la-pumarosa",
        "name": "ZOOM LA PUMAROSA",
        "code": "709",
        "address": "Av. Pumarrosa, Edificio Maria Luisa, Numero 61-16, Local 2, Urbanizacion Santa Fe",
        "city": "Punto Fijo, Falcon",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02692478555",
          "02692473812"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Punto_Fijo/Zoom_La_Pumarosa/",
        "details": {
          "Codigo": "709",
          "Direccion": "Av. Pumarrosa, Edificio Maria Luisa, Numero 61-16, Local 2, Urbanizacion Santa Fe",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02692478555 | 02692473812"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.706200,-70.194400",
        "lat": 11.7062,
        "lng": -70.1944
      },
      {
        "id": "zoom-falcon-zoom-las-margaritas",
        "name": "ZOOM LAS MARGARITAS",
        "code": "4117",
        "address": "Av Coro Con Avenida Dona Emilia Local Comercial Nro 6 Sector DoÑa Emilia",
        "city": "Punto Fijo, Falcon",
        "schedule": "Lunes: 08:00 AM - 08:00 PM, Martes: 08:00 AM - 08:00 PM, Miercoles: 08:00 AM - 08:00 PM, Jueves: 08:00 AM - 08:00 PM, Viernes: 08:00 AM - 08:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04246546611"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Punto_Fijo/Zoom_Las_Margaritas/",
        "details": {
          "Codigo": "4117",
          "Direccion": "Av Coro Con Avenida Dona Emilia Local Comercial Nro 6 Sector DoÑa Emilia",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "Lunes: 08:00 AM - 08:00 PM, Martes: 08:00 AM - 08:00 PM, Miercoles: 08:00 AM - 08:00 PM, Jueves: 08:00 AM - 08:00 PM, Viernes: 08:00 AM - 08:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04246546611",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.680585,-70.179420",
        "lat": 11.680585,
        "lng": -70.17942
      },
      {
        "id": "zoom-falcon-zoom-puerta-maraven",
        "name": "ZOOM PUERTA MARAVEN",
        "code": "1688",
        "address": "Urb. Puerta Maraven, Av. Ollarvides, Local Nro. 264.",
        "city": "Punto Fijo, Falcon",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02692463038"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Punto_Fijo/Zoom_Puerta_Maraven/",
        "details": {
          "Codigo": "1688",
          "Direccion": "Urb. Puerta Maraven, Av. Ollarvides, Local Nro. 264.",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02692463038 | 02692463038",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.663400,-70.193700",
        "lat": 11.6634,
        "lng": -70.1937
      },
      {
        "id": "zoom-falcon-zoom-punto-fijo",
        "name": "ZOOM PUNTO FIJO",
        "code": "110",
        "address": "Sector Centro, Calle Arismendi, Entre Talavera Y Las Palmas, Local 203.",
        "city": "Punto Fijo, Falcon",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Falcon/Punto_Fijo/Zoom_Punto_Fijo/",
        "details": {
          "Codigo": "110",
          "Direccion": "Sector Centro, Calle Arismendi, Entre Talavera Y Las Palmas, Local 203.",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.694218,-70.202472",
        "lat": 11.694218,
        "lng": -70.202472
      }
    ],
    "Guarico": [
      {
        "id": "zoom-guarico-zoom-avenida-romulo-gallegos",
        "name": "ZOOM AVENIDA ROMULO GALLEGOS",
        "code": "4153",
        "address": "Av Romulo Gallegos Edif Adriatico Piso Pb Local Nro 03 Sector Centro",
        "city": "Valle De La Pascua, Guarico",
        "schedule": "Lunes: 08:30 AM - 05:30 PMMartes: 08:30 AM - 05:30 PMMiercoles: 08:30 AM - 05:30 PMJueves: 08:30 AM - 05:30 PMViernes: 08:30 AM - 05:30 PMSabado: 09:00 AM - 01:00 PMDomingo: Cerrado",
        "phones": [
          "04243668848"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Guarico/Valle_De_La_Pascua/Zoom_Avenida_Romulo_Gallegos/",
        "details": {
          "Codigo": "4153",
          "Direccion": "Av Romulo Gallegos Edif Adriatico Piso Pb Local Nro 03 Sector Centro",
          "Ciudad": "Valle De La Pascua, Guarico",
          "Horario": "Lunes: 08:30 AM - 05:30 PMMartes: 08:30 AM - 05:30 PMMiercoles: 08:30 AM - 05:30 PMJueves: 08:30 AM - 05:30 PMViernes: 08:30 AM - 05:30 PMSabado: 09:00 AM - 01:00 PMDomingo: Cerrado",
          "Telefono(s)": "04243668848",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:30 AM - 05:30 PM",
          "Martes": "08:30 AM - 05:30 PM",
          "Miercoles": "08:30 AM - 05:30 PM",
          "Jueves": "08:30 AM - 05:30 PM",
          "Viernes": "08:30 AM - 05:30 PM",
          "Sabado": "09:00 AM - 01:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.216910,-66.010065",
        "lat": 9.21691,
        "lng": -66.010065
      },
      {
        "id": "zoom-guarico-zoom-calabozo",
        "name": "ZOOM CALABOZO",
        "code": "872",
        "address": "Calle 5 Entre Carreras 9 Y 10, Edificio Villavicencio, P.b Locales 5 Y 6. P.ref. A 50 Mts Del Museo De Calabozo.",
        "city": "Calabozo, Guarico",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Guarico/Calabozo/Zoom_Calabozo/",
        "details": {
          "Codigo": "872",
          "Direccion": "Calle 5 Entre Carreras 9 Y 10, Edificio Villavicencio, P.b Locales 5 Y 6. P.ref. A 50 Mts Del Museo De Calabozo.",
          "Ciudad": "Calabozo, Guarico",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.933208,-67.425295",
        "lat": 8.933208,
        "lng": -67.425295
      },
      {
        "id": "zoom-guarico-zoom-el-sombrero",
        "name": "ZOOM EL SOMBRERO",
        "code": "2982",
        "address": "Calle Fraternidad Cruce Con Calle Los Estudiantes Local Nro S/n, Sector Frente A La Plaza Bolivar El Sombrero",
        "city": "El Sombrero, Guarico",
        "schedule": "Lunes: 08:30 AM - 12:30 PM, Martes: 08:30 AM - 12:30 PM, Miercoles: 08:30 AM - 12:30 PM, Jueves: 08:30 AM - 12:30 PM, Viernes: 08:30 AM - 12:30 PM, Sabado: 09:00 AM - 02:00 PM, Domingo: Cerrado",
        "phones": [
          "04124538216"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Guarico/El_Sombrero/Zoom_El_Sombrero/",
        "details": {
          "Codigo": "2982",
          "Direccion": "Calle Fraternidad Cruce Con Calle Los Estudiantes Local Nro S/n, Sector Frente A La Plaza Bolivar El Sombrero",
          "Ciudad": "El Sombrero, Guarico",
          "Horario": "Lunes: 08:30 AM - 12:30 PM, Martes: 08:30 AM - 12:30 PM, Miercoles: 08:30 AM - 12:30 PM, Jueves: 08:30 AM - 12:30 PM, Viernes: 08:30 AM - 12:30 PM, Sabado: 09:00 AM - 02:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04124538216"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.384372,-67.054202",
        "lat": 9.384372,
        "lng": -67.054202
      },
      {
        "id": "zoom-guarico-zoom-pueblo-nuevo",
        "name": "ZOOM PUEBLO NUEVO",
        "code": "2590",
        "address": "Sector Pueblo Nuevo, Av. Bolivar Cruce Con 1ro De Mayo Nro. 41-d,",
        "city": "San Juan De Los Morros, Guarico",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02464325959"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Guarico/San_Juan_De_Los_Morros/Zoom_Pueblo_Nuevo/",
        "details": {
          "Codigo": "2590",
          "Direccion": "Sector Pueblo Nuevo, Av. Bolivar Cruce Con 1ro De Mayo Nro. 41-d,",
          "Ciudad": "San Juan De Los Morros, Guarico",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02464325959",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.911380,-67.353600",
        "lat": 9.91138,
        "lng": -67.3536
      },
      {
        "id": "zoom-guarico-zoom-san-juan-de-los-morros",
        "name": "ZOOM SAN JUAN DE LOS MORROS",
        "code": "945",
        "address": "Avenida BolÍvar, Torre Tauro, Planta Baja",
        "city": "San Juan De Los Morros, Guarico",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Guarico/San_Juan_De_Los_Morros/Zoom_San_Juan_De_Los_Morros/",
        "details": {
          "Codigo": "945",
          "Direccion": "Avenida BolÍvar, Torre Tauro, Planta Baja",
          "Ciudad": "San Juan De Los Morros, Guarico",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.913790,-67.355403",
        "lat": 9.91379,
        "lng": -67.355403
      },
      {
        "id": "zoom-guarico-zoom-valle-de-la-pascua",
        "name": "ZOOM VALLE DE LA PASCUA",
        "code": "889",
        "address": "Avenida Las Industrias Cruce Con Calle Los Paramos Centro Comercial La Pascua Center Local Nro 2",
        "city": "Valle De La Pascua, Guarico",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Guarico/Valle_De_La_Pascua/Zoom_Valle_De_La_Pascua/",
        "details": {
          "Codigo": "889",
          "Direccion": "Avenida Las Industrias Cruce Con Calle Los Paramos Centro Comercial La Pascua Center Local Nro 2",
          "Ciudad": "Valle De La Pascua, Guarico",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.201116,-66.004420",
        "lat": 9.201116,
        "lng": -66.00442
      }
    ],
    "Lara": [
      {
        "id": "zoom-lara-zoom-aeropuerto-jacinto-lara",
        "name": "ZOOM AEROPUERTO JACINTO LARA",
        "code": "612",
        "address": "Av. Vicente Landaeta Gil Con Av. La Salle, Aeropuerto General Jacinto Lara P.b,local A-6",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Aeropuerto_Jacinto_Lara/",
        "details": {
          "Codigo": "612",
          "Direccion": "Av. Vicente Landaeta Gil Con Av. La Salle, Aeropuerto General Jacinto Lara P.b,local A-6",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.046000,-69.359400",
        "lat": 10.046,
        "lng": -69.3594
      },
      {
        "id": "zoom-lara-zoom-barquisimeto",
        "name": "ZOOM BARQUISIMETO",
        "code": "15",
        "address": "Carrera 24, Entre Calles 23 Y 24, Nro. 23-69. P.ref. Frente A La Plaza Mora, Diagonal Al Iutirla.",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Barquisimeto/",
        "details": {
          "Codigo": "15",
          "Direccion": "Carrera 24, Entre Calles 23 Y 24, Nro. 23-69. P.ref. Frente A La Plaza Mora, Diagonal Al Iutirla.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.071035,-69.314928",
        "lat": 10.071035,
        "lng": -69.314928
      },
      {
        "id": "zoom-lara-zoom-c-c-alfa-este",
        "name": "ZOOM C.C ALFA ESTE",
        "code": "1520",
        "address": "Av. Madrid, Urb. El Parque, C.c. Alfa, Nivel P/b, Local 6.",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: - , Domingo: Cerrado",
        "phones": [
          "02514162053",
          "02512549869"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Cc_Alfa_Este/",
        "details": {
          "Codigo": "1520",
          "Direccion": "Av. Madrid, Urb. El Parque, C.c. Alfa, Nivel P/b, Local 6.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: - , Domingo: Cerrado",
          "Telefono(s)": "02514162053 | 02512549869",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.065000,-69.286500",
        "lat": 10.065,
        "lng": -69.2865
      },
      {
        "id": "zoom-lara-zoom-c-c-almarriera",
        "name": "ZOOM C.C ALMARRIERA",
        "code": "2489",
        "address": "Av. La Montanita C.c.almarriera Planta Baja Alta. Local L-29. Urb.almarriera. Los Rastrojos.cabudare.",
        "city": "Cabudare, Lara",
        "schedule": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: 09:00 AM - 03:00 PM, Domingo: Cerrado",
        "phones": [
          "02512403779"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Cabudare/Zoom_Cc_Almarriera/",
        "details": {
          "Codigo": "2489",
          "Direccion": "Av. La Montanita C.c.almarriera Planta Baja Alta. Local L-29. Urb.almarriera. Los Rastrojos.cabudare.",
          "Ciudad": "Cabudare, Lara",
          "Horario": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: 09:00 AM - 03:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02512403779",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.031071,-69.239701",
        "lat": 10.031071,
        "lng": -69.239701
      },
      {
        "id": "zoom-lara-zoom-c-c-la-estancia",
        "name": "ZOOM C.C LA ESTANCIA",
        "code": "4147",
        "address": "C.c La Estancia Local 20 Intercomunal,barquisimeto-cabudare",
        "city": "Cabudare, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04145208583"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Cabudare/Zoom_Cc_La_Estancia/",
        "details": {
          "Codigo": "4147",
          "Direccion": "C.c La Estancia Local 20 Intercomunal,barquisimeto-cabudare",
          "Ciudad": "Cabudare, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04145208583",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.012595,-69.228099",
        "lat": 10.012595,
        "lng": -69.228099
      },
      {
        "id": "zoom-lara-zoom-c-c-madetor-este",
        "name": "ZOOM C.C MADETOR ESTE",
        "code": "703",
        "address": "Av. Venezuela, Entre Av. Bracamonte Y Av. Los Leones, Centro Comercial Imeca, Piso 1, Local 1-h Y 1-g",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02514356423",
          "04245964680"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Cc_Madetor_Este/",
        "details": {
          "Codigo": "703",
          "Direccion": "Av. Venezuela, Entre Av. Bracamonte Y Av. Los Leones, Centro Comercial Imeca, Piso 1, Local 1-h Y 1-g",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02514356423 | 04245964680",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.072853,-69.288877",
        "lat": 10.072853,
        "lng": -69.288877
      },
      {
        "id": "zoom-lara-zoom-c-c-metropolis-brm",
        "name": "ZOOM C.C METROPOLIS BRM",
        "code": "4095",
        "address": "Av. Florencio Jimenez Con Av La Salle Cc Metropoli Nivel Sol Local L-204-205-206",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 09:00 AM - 08:00 PM, Martes: 09:00 AM - 08:00 PM, Miercoles: 09:00 AM - 08:00 PM, Jueves: 09:00 AM - 08:00 PM, Viernes: 09:00 AM - 08:00 PM, Sabado: 09:00 AM - 08:00 PM, Domingo: 12:00 PM - 08:00 PM",
        "phones": [
          "04125203320",
          "02512306336"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Cc_Metropolis_Brm/",
        "details": {
          "Codigo": "4095",
          "Direccion": "Av. Florencio Jimenez Con Av La Salle Cc Metropoli Nivel Sol Local L-204-205-206",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 09:00 AM - 08:00 PM, Martes: 09:00 AM - 08:00 PM, Miercoles: 09:00 AM - 08:00 PM, Jueves: 09:00 AM - 08:00 PM, Viernes: 09:00 AM - 08:00 PM, Sabado: 09:00 AM - 08:00 PM, Domingo: 12:00 PM - 08:00 PM",
          "Telefono(s)": "04125203320 | 02512306336",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.063039,-69.364645",
        "lat": 10.063039,
        "lng": -69.364645
      },
      {
        "id": "zoom-lara-zoom-c-c-parque-real",
        "name": "ZOOM C.C PARQUE REAL",
        "code": "4076",
        "address": "Av Lara Con Cruce Avenida Los Leones Cc Parque Real Nivel P-al Local 10,zona Este",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04245557772"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Cc_Parque_Real/",
        "details": {
          "Codigo": "4076",
          "Direccion": "Av Lara Con Cruce Avenida Los Leones Cc Parque Real Nivel P-al Local 10,zona Este",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04245557772",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.065590,-69.286646",
        "lat": 10.06559,
        "lng": -69.286646
      },
      {
        "id": "zoom-lara-zoom-cabudare",
        "name": "ZOOM CABUDARE",
        "code": "873",
        "address": "Avenida Libertador Entre Calles Miguel Bernal Y Juarez, Centro Comercial Libertador, Locales Pb-02 Y Pb-03.",
        "city": "Cabudare, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Cabudare/Zoom_Cabudare/",
        "details": {
          "Codigo": "873",
          "Direccion": "Avenida Libertador Entre Calles Miguel Bernal Y Juarez, Centro Comercial Libertador, Locales Pb-02 Y Pb-03.",
          "Ciudad": "Cabudare, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.032700,-69.261900",
        "lat": 10.0327,
        "lng": -69.2619
      },
      {
        "id": "zoom-lara-zoom-calle-14-centro-este",
        "name": "ZOOM CALLE 14 CENTRO-ESTE",
        "code": "956",
        "address": "Calle 14 Entre Carreras 18 Y 19 Qta Nelly Local Nro 3",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02514352009",
          "02516118906"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Calle_14_Centroeste/",
        "details": {
          "Codigo": "956",
          "Direccion": "Calle 14 Entre Carreras 18 Y 19 Qta Nelly Local Nro 3",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02514352009 | 02516118906",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.066190,-69.305440",
        "lat": 10.06619,
        "lng": -69.30544
      },
      {
        "id": "zoom-lara-zoom-carora",
        "name": "ZOOM CARORA",
        "code": "4057",
        "address": "Av Fco De Miranda E/calle Lisbos Y Coromoto Local Tiendas Montana, Sector Fco De Miranda",
        "city": "Carora, Lara",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02524213481"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Carora/Zoom_Carora/",
        "details": {
          "Codigo": "4057",
          "Direccion": "Av Fco De Miranda E/calle Lisbos Y Coromoto Local Tiendas Montana, Sector Fco De Miranda",
          "Ciudad": "Carora, Lara",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02524213481"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.168603,-70.078132",
        "lat": 10.168603,
        "lng": -70.078132
      },
      {
        "id": "zoom-lara-zoom-carrera-19-con-34",
        "name": "ZOOM CARRERA 19 CON 34",
        "code": "1695",
        "address": "Carrera 19 Con Calles 33 Y 34 # 33-68, Barquisimeto",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02512338790"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Carrera_19_Con_34/",
        "details": {
          "Codigo": "1695",
          "Direccion": "Carrera 19 Con Calles 33 Y 34 # 33-68, Barquisimeto",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02512338790",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.065370,-69.325740",
        "lat": 10.06537,
        "lng": -69.32574
      },
      {
        "id": "zoom-lara-zoom-carrera-25-calle-41",
        "name": "ZOOM CARRERA 25 CALLE 41",
        "code": "1069",
        "address": "Carrera 25, Entre Calle 40 Y 41 Nro 2.",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02512543597",
          "04168596267"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Carrera_25_Calle_41/",
        "details": {
          "Codigo": "1069",
          "Direccion": "Carrera 25, Entre Calle 40 Y 41 Nro 2.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02512543597 | 04168596267",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.070700,-69.331800",
        "lat": 10.0707,
        "lng": -69.3318
      },
      {
        "id": "zoom-lara-zoom-el-tocuyo",
        "name": "ZOOM EL TOCUYO",
        "code": "1668",
        "address": "Calle 20 Entre 7 Y 8 Cruce Final Avenida Fraternidad Urb Corpahuaico",
        "city": "El Tocuyo, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02536633950"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/El_Tocuyo/Zoom_El_Tocuyo/",
        "details": {
          "Codigo": "1668",
          "Direccion": "Calle 20 Entre 7 Y 8 Cruce Final Avenida Fraternidad Urb Corpahuaico",
          "Ciudad": "El Tocuyo, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02536633950",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.788384,-69.795625",
        "lat": 9.788384,
        "lng": -69.795625
      },
      {
        "id": "zoom-lara-zoom-lara-palace",
        "name": "ZOOM LARA PALACE",
        "code": "1669",
        "address": "Carrera 23, Entre Calles 52 Y 54, Urbanizacion Santa Eduvigis,conjunto Residencial Lara Palace, Nro. 1-06,",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02514437050"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Lara_Palace/",
        "details": {
          "Codigo": "1669",
          "Direccion": "Carrera 23, Entre Calles 52 Y 54, Urbanizacion Santa Eduvigis,conjunto Residencial Lara Palace, Nro. 1-06,",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02514437050",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.067900,-69.344000",
        "lat": 10.0679,
        "lng": -69.344
      },
      {
        "id": "zoom-lara-zoom-las-industrias",
        "name": "ZOOM LAS INDUSTRIAS",
        "code": "964",
        "address": "Av. Las Industrias, Edif. Sede De Industriales Del Estado Lara, Urb. Rafael Caldera",
        "city": "Barquisimeto, Lara",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04265509234",
          "04145073909"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Barquisimeto/Zoom_Las_Industrias/",
        "details": {
          "Codigo": "964",
          "Direccion": "Av. Las Industrias, Edif. Sede De Industriales Del Estado Lara, Urb. Rafael Caldera",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04265509234 | 04145073909",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.072300,-69.375600",
        "lat": 10.0723,
        "lng": -69.3756
      },
      {
        "id": "zoom-lara-zoom-quibor",
        "name": "ZOOM QUIBOR",
        "code": "4118",
        "address": "Av 5 Entre Calles 12 Y 13 Local Nro S/n",
        "city": "Quibor, Lara",
        "schedule": "Lunes: 08:00 AM - 06:00 PMMartes: 08:00 AM - 06:00 PMMiercoles: 08:00 AM - 06:00 PMJueves: 08:00 AM - 06:00 PMViernes: 08:00 AM - 06:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04120376682"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Lara/Quibor/Zoom_Quibor/",
        "details": {
          "Codigo": "4118",
          "Direccion": "Av 5 Entre Calles 12 Y 13 Local Nro S/n",
          "Ciudad": "Quibor, Lara",
          "Horario": "Lunes: 08:00 AM - 06:00 PMMartes: 08:00 AM - 06:00 PMMiercoles: 08:00 AM - 06:00 PMJueves: 08:00 AM - 06:00 PMViernes: 08:00 AM - 06:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04120376682",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:00 AM - 06:00 PM",
          "Martes": "08:00 AM - 06:00 PM",
          "Miercoles": "08:00 AM - 06:00 PM",
          "Jueves": "08:00 AM - 06:00 PM",
          "Viernes": "08:00 AM - 06:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.922420,-69.621500",
        "lat": 9.92242,
        "lng": -69.6215
      }
    ],
    "Merida": [
      {
        "id": "zoom-merida-zoom-av-urdaneta",
        "name": "ZOOM AV URDANETA",
        "code": "3148",
        "address": "Av Urdaneta Cc Las Margaritas Nivel Pb Local Pb-9,sector Urdaneta",
        "city": "Merida, Merida",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02748480398"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_Av_Urdaneta/",
        "details": {
          "Codigo": "3148",
          "Direccion": "Av Urdaneta Cc Las Margaritas Nivel Pb Local Pb-9,sector Urdaneta",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02748480398 | 02748480398",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.344930,-71.100040",
        "lat": 8.34493,
        "lng": -71.10004
      },
      {
        "id": "zoom-merida-zoom-caja-seca",
        "name": "ZOOM CAJA SECA",
        "code": "4054",
        "address": "Av Primera Transversal Del Corredor Vial Al Terminal De Pasajeros, Cc Farmacia Sur Del Lago Nivel Pb Local 2, Sector Casco Central Caja Seca",
        "city": "Caja Seca, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02717721621"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Caja_Seca/Zoom_Caja_Seca/",
        "details": {
          "Codigo": "4054",
          "Direccion": "Av Primera Transversal Del Corredor Vial Al Terminal De Pasajeros, Cc Farmacia Sur Del Lago Nivel Pb Local 2, Sector Casco Central Caja Seca",
          "Ciudad": "Caja Seca, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02717721621"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.140760,-71.079794",
        "lat": 9.14076,
        "lng": -71.079794
      },
      {
        "id": "zoom-merida-zoom-centro-ejido",
        "name": "ZOOM CENTRO EJIDO",
        "code": "3749",
        "address": "Calle Sucre Frente A La Plaza Bolivar De Ejido Con Av Bolivar C.c Ejido Pb Local 1-c",
        "city": "Ejido, Merida",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04122744925"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Ejido/Zoom_Centro_Ejido/",
        "details": {
          "Codigo": "3749",
          "Direccion": "Calle Sucre Frente A La Plaza Bolivar De Ejido Con Av Bolivar C.c Ejido Pb Local 1-c",
          "Ciudad": "Ejido, Merida",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04122744925"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.546923,-71.242437",
        "lat": 8.546923,
        "lng": -71.242437
      },
      {
        "id": "zoom-merida-zoom-centro-merida",
        "name": "ZOOM CENTRO MERIDA",
        "code": "3151",
        "address": "Av 3 Independencia Esquina Calle 21 Laso Cc La Rosalera Nivel 03 Of 01 Sector Centro Merida",
        "city": "Merida, Merida",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04120748915",
          "02742511367"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_Centro_Merida/",
        "details": {
          "Codigo": "3151",
          "Direccion": "Av 3 Independencia Esquina Calle 21 Laso Cc La Rosalera Nivel 03 Of 01 Sector Centro Merida",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04120748915 | 02742511367",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.598182,-71.143317",
        "lat": 8.598182,
        "lng": -71.143317
      },
      {
        "id": "zoom-merida-zoom-centro-vigia",
        "name": "ZOOM CENTRO VIGIA",
        "code": "4083",
        "address": "Calle 3 Al Lado De La PanaderÍa Giordano, Parroquia Presidente Betancourt,sector Centro MÉrida",
        "city": "El Vigia, Merida",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04122901787"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/El_Vigia/Zoom_Centro_Vigia/",
        "details": {
          "Codigo": "4083",
          "Direccion": "Calle 3 Al Lado De La PanaderÍa Giordano, Parroquia Presidente Betancourt,sector Centro MÉrida",
          "Ciudad": "El Vigia, Merida",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04122901787",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.620086,-71.646678",
        "lat": 8.620086,
        "lng": -71.646678
      },
      {
        "id": "zoom-merida-zoom-ejido-mall",
        "name": "ZOOM EJIDO MALL",
        "code": "4105",
        "address": "Calle El Cobre Municipio Campo ElÍas, Parroquia Matriz, Local Pb-b-17/pb-b-18,centro Comercial Ejido Mall, Sector Pozo Hondo.",
        "city": "Ejido, Merida",
        "schedule": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 09:00 AM - 06:00 PM, Domingo: 09:00 AM - 06:00 PM",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Ejido/Zoom_Ejido_Mall/",
        "details": {
          "Codigo": "4105",
          "Direccion": "Calle El Cobre Municipio Campo ElÍas, Parroquia Matriz, Local Pb-b-17/pb-b-18,centro Comercial Ejido Mall, Sector Pozo Hondo.",
          "Ciudad": "Ejido, Merida",
          "Horario": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 09:00 AM - 06:00 PM, Domingo: 09:00 AM - 06:00 PM",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.543086,-71.245588",
        "lat": 8.543086,
        "lng": -71.245588
      },
      {
        "id": "zoom-merida-zoom-el-vigia",
        "name": "ZOOM EL VIGIA",
        "code": "745",
        "address": "Av. 3 Nro 3-88, Barrio Panamericano, Entre Av. Bolivar Y Don Pepe Rojas, P.ref. Diagonal Al Distribuidor Carrero Mendez.",
        "city": "El Vigia, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/El_Vigia/Zoom_El_Vigia/",
        "details": {
          "Codigo": "745",
          "Direccion": "Av. 3 Nro 3-88, Barrio Panamericano, Entre Av. Bolivar Y Don Pepe Rojas, P.ref. Diagonal Al Distribuidor Carrero Mendez.",
          "Ciudad": "El Vigia, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.610266,-71.641332",
        "lat": 8.610266,
        "lng": -71.641332
      },
      {
        "id": "zoom-merida-zoom-glorias-patrias",
        "name": "ZOOM GLORIAS PATRIAS",
        "code": "382",
        "address": "Av. Miranda, Centro Comercial DoÑa Heraclita Local 2.",
        "city": "Merida, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02742620375",
          "02742620225"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_Glorias_Patrias/",
        "details": {
          "Codigo": "382",
          "Direccion": "Av. Miranda, Centro Comercial DoÑa Heraclita Local 2.",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02742620375 | 02742620225",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.588404,-71.155143",
        "lat": 8.588404,
        "lng": -71.155143
      },
      {
        "id": "zoom-merida-zoom-la-parroquia",
        "name": "ZOOM LA PARROQUIA",
        "code": "4100",
        "address": "Calle PÁez Casa Nro 2-35 Local A, Sector La Parroquia",
        "city": "Merida, Merida",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02742712653"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_La_Parroquia/",
        "details": {
          "Codigo": "4100",
          "Direccion": "Calle PÁez Casa Nro 2-35 Local A, Sector La Parroquia",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02742712653",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.559608,-71.199698",
        "lat": 8.559608,
        "lng": -71.199698
      },
      {
        "id": "zoom-merida-zoom-lagunillas",
        "name": "ZOOM LAGUNILLAS",
        "code": "4034",
        "address": "Av 6, Agua De Urao Local Nro S/n Sector Pueblo Viejo",
        "city": "Lagunillas, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04127656704"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Lagunillas/Zoom_Lagunillas/",
        "details": {
          "Codigo": "4034",
          "Direccion": "Av 6, Agua De Urao Local Nro S/n Sector Pueblo Viejo",
          "Ciudad": "Lagunillas, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04127656704"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.502950,-71.393717",
        "lat": 8.50295,
        "lng": -71.393717
      },
      {
        "id": "zoom-merida-zoom-los-proceres",
        "name": "ZOOM LOS PROCERES",
        "code": "4059",
        "address": "Av Los PrÓceres Edif Longimar Piso Pb Local 2 Y 3, Sector Aldea Santa Barbara",
        "city": "Merida, Merida",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02742667720"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_Los_Proceres/",
        "details": {
          "Codigo": "4059",
          "Direccion": "Av Los PrÓceres Edif Longimar Piso Pb Local 2 Y 3, Sector Aldea Santa Barbara",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02742667720"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.584070,-71.177022",
        "lat": 8.58407,
        "lng": -71.177022
      },
      {
        "id": "zoom-merida-zoom-mercado-murachi",
        "name": "ZOOM MERCADO MURACHI",
        "code": "1475",
        "address": "Sector Los Sauzales, Av. Las Americas, Centro Comercial Mercado Murachi, Nivel Unico Local 44.",
        "city": "Merida, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02746573522"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_Mercado_Murachi/",
        "details": {
          "Codigo": "1475",
          "Direccion": "Sector Los Sauzales, Av. Las Americas, Centro Comercial Mercado Murachi, Nivel Unico Local 44.",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02746573522",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.591800,-71.158200",
        "lat": 8.5918,
        "lng": -71.1582
      },
      {
        "id": "zoom-merida-zoom-merida",
        "name": "ZOOM MERIDA",
        "code": "95",
        "address": "Av. Don Tulio Febres Cordero, Edf. Don Miguel, Pb. Local 37-94.",
        "city": "Merida, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Merida/Zoom_Merida/",
        "details": {
          "Codigo": "95",
          "Direccion": "Av. Don Tulio Febres Cordero, Edf. Don Miguel, Pb. Local 37-94.",
          "Ciudad": "Merida, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.588026,-71.153851",
        "lat": 8.588026,
        "lng": -71.153851
      },
      {
        "id": "zoom-merida-zoom-mucuchies",
        "name": "ZOOM MUCUCHIES",
        "code": "4104",
        "address": "Av Independencia Esquina Calle Sucre Nro 69, Centro Mucuchies",
        "city": "Mucuchies, Merida",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04122899238"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Mucuchies/Zoom_Mucuchies/",
        "details": {
          "Codigo": "4104",
          "Direccion": "Av Independencia Esquina Calle Sucre Nro 69, Centro Mucuchies",
          "Ciudad": "Mucuchies, Merida",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04122899238",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.746969,-70.918180",
        "lat": 8.746969,
        "lng": -70.91818
      },
      {
        "id": "zoom-merida-zoom-tovar",
        "name": "ZOOM TOVAR",
        "code": "4017",
        "address": "Av Cristobal Mendoza Edif Echeverria Piso 1 Local 3 Y 4",
        "city": "Tovar, Merida",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02758733489"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Merida/Tovar/Zoom_Tovar/",
        "details": {
          "Codigo": "4017",
          "Direccion": "Av Cristobal Mendoza Edif Echeverria Piso 1 Local 3 Y 4",
          "Ciudad": "Tovar, Merida",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02758733489"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.329005,-71.753288",
        "lat": 8.329005,
        "lng": -71.753288
      }
    ],
    "Miranda": [
      {
        "id": "zoom-miranda-zoom-27-de-febrero",
        "name": "ZOOM 27 DE FEBRERO",
        "code": "2945",
        "address": "Urb. Nro 27 De Febrero,ctra Nacional, Local Estacionamiento Y Multiservicios Souto Nro. S/n.",
        "city": "Guarenas, Miranda",
        "schedule": "Lunes: 08:00 AM - 03:00 PM, Martes: 08:00 AM - 03:00 PM, Miercoles: 08:00 AM - 03:00 PM, Jueves: 08:00 AM - 03:00 PM, Viernes: 08:00 AM - 03:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02123626603"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Guarenas/Zoom_27_De_Febrero/",
        "details": {
          "Codigo": "2945",
          "Direccion": "Urb. Nro 27 De Febrero,ctra Nacional, Local Estacionamiento Y Multiservicios Souto Nro. S/n.",
          "Ciudad": "Guarenas, Miranda",
          "Horario": "Lunes: 08:00 AM - 03:00 PM, Martes: 08:00 AM - 03:00 PM, Miercoles: 08:00 AM - 03:00 PM, Jueves: 08:00 AM - 03:00 PM, Viernes: 08:00 AM - 03:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02123626603 | 02123626603",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.471059,-66.610073",
        "lat": 10.471059,
        "lng": -66.610073
      },
      {
        "id": "zoom-miranda-zoom-c-c-la-hoyada",
        "name": "ZOOM C.C LA HOYADA",
        "code": "4142",
        "address": "Calle Piar, Cc La Hoyada, Nivel Segunda Planta, Local 328, Municipio Guaicaipuro",
        "city": "Los Teques, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:30 PMMartes: 08:00 AM - 05:30 PMMiercoles: 08:00 AM - 05:30 PMJueves: 08:00 AM - 05:30 PMViernes: 08:00 AM - 05:30 PMSabado: 08:00 AM - 01:00 PMDomingo: Cerrado",
        "phones": [
          "04122105771"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Los_Teques/Zoom_Cc_La_Hoyada/",
        "details": {
          "Codigo": "4142",
          "Direccion": "Calle Piar, Cc La Hoyada, Nivel Segunda Planta, Local 328, Municipio Guaicaipuro",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:30 PMMartes: 08:00 AM - 05:30 PMMiercoles: 08:00 AM - 05:30 PMJueves: 08:00 AM - 05:30 PMViernes: 08:00 AM - 05:30 PMSabado: 08:00 AM - 01:00 PMDomingo: Cerrado",
          "Telefono(s)": "04122105771",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 05:30 PM",
          "Martes": "08:00 AM - 05:30 PM",
          "Miercoles": "08:00 AM - 05:30 PM",
          "Jueves": "08:00 AM - 05:30 PM",
          "Viernes": "08:00 AM - 05:30 PM",
          "Sabado": "08:00 AM - 01:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.345145,-67.041749",
        "lat": 10.345145,
        "lng": -67.041749
      },
      {
        "id": "zoom-miranda-zoom-c-c-miranda",
        "name": "ZOOM C.C MIRANDA",
        "code": "163",
        "address": "Av. Intercomunal Menca De Leoni, C.c. Miranda, Local 30-22. P.ref. Area De Minitiendas, Parte Alta De Guarenas.",
        "city": "Guarenas, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Guarenas/Zoom_Cc_Miranda/",
        "details": {
          "Codigo": "163",
          "Direccion": "Av. Intercomunal Menca De Leoni, C.c. Miranda, Local 30-22. P.ref. Area De Minitiendas, Parte Alta De Guarenas.",
          "Ciudad": "Guarenas, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.471800,-66.609000",
        "lat": 10.4718,
        "lng": -66.609
      },
      {
        "id": "zoom-miranda-zoom-c-c-buenaventura-vista-place",
        "name": "ZOOM C.C. BUENAVENTURA VISTA PLACE",
        "code": "1452",
        "address": "Av. Intercomunal Guarenas-guatire, Centro Comercial Buenaventura Vista Place Nivel Plaza Locales Pl-94 Y Pl-95.",
        "city": "Guatire, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Guatire/Zoom_Cc_Buenaventura_Vista_Place/",
        "details": {
          "Codigo": "1452",
          "Direccion": "Av. Intercomunal Guarenas-guatire, Centro Comercial Buenaventura Vista Place Nivel Plaza Locales Pl-94 Y Pl-95.",
          "Ciudad": "Guatire, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.464836,-66.574116",
        "lat": 10.464836,
        "lng": -66.574116
      },
      {
        "id": "zoom-miranda-zoom-calle-miranda",
        "name": "ZOOM CALLE MIRANDA",
        "code": "4053",
        "address": "Calle Miranda Con Guaicaipuro Norte, C.c Oriente, Sector Cuatro Esquinas",
        "city": "Los Teques, Miranda",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04242022415"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Los_Teques/Zoom_Calle_Miranda/",
        "details": {
          "Codigo": "4053",
          "Direccion": "Calle Miranda Con Guaicaipuro Norte, C.c Oriente, Sector Cuatro Esquinas",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04242022415"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.349563,-67.042920",
        "lat": 10.349563,
        "lng": -67.04292
      },
      {
        "id": "zoom-miranda-zoom-calle-rivas",
        "name": "ZOOM CALLE RIVAS",
        "code": "4080",
        "address": "Sector Casco Central Calle Rivas Local Nro 15",
        "city": "Guatire, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "04242017028"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Guatire/Zoom_Calle_Rivas/",
        "details": {
          "Codigo": "4080",
          "Direccion": "Sector Casco Central Calle Rivas Local Nro 15",
          "Ciudad": "Guatire, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04242017028",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.473484,-66.542221",
        "lat": 10.473484,
        "lng": -66.542221
      },
      {
        "id": "zoom-miranda-zoom-castillejo",
        "name": "ZOOM CASTILLEJO",
        "code": "4033",
        "address": "Av Principal Cc Castillejo Nivel 1 Local 02-14 Urb Castillejo",
        "city": "Guatire, Miranda",
        "schedule": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 09:00 AM - 06:00 PM, Domingo: Cerrado",
        "phones": [
          "02123419881",
          "04241503520"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Guatire/Zoom_Castillejo/",
        "details": {
          "Codigo": "4033",
          "Direccion": "Av Principal Cc Castillejo Nivel 1 Local 02-14 Urb Castillejo",
          "Ciudad": "Guatire, Miranda",
          "Horario": "Lunes: 09:00 AM - 06:00 PM, Martes: 09:00 AM - 06:00 PM, Miercoles: 09:00 AM - 06:00 PM, Jueves: 09:00 AM - 06:00 PM, Viernes: 09:00 AM - 06:00 PM, Sabado: 09:00 AM - 06:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02123419881 | 04241503520"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.470157,-66.547226",
        "lat": 10.470157,
        "lng": -66.547226
      },
      {
        "id": "zoom-miranda-zoom-charallave-ciudad-concordia",
        "name": "ZOOM CHARALLAVE CIUDAD CONCORDIA",
        "code": "54",
        "address": "Av. Tosta Garcia, Centro Comercial Ciudad Concordia, Piso Nro. 1, Locales 8, 9 Y 10.",
        "city": "Charallave, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Charallave/Zoom_Charallave_Ciudad_Concordia/",
        "details": {
          "Codigo": "54",
          "Direccion": "Av. Tosta Garcia, Centro Comercial Ciudad Concordia, Piso Nro. 1, Locales 8, 9 Y 10.",
          "Ciudad": "Charallave, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.241088,-66.859778",
        "lat": 10.241088,
        "lng": -66.859778
      },
      {
        "id": "zoom-miranda-zoom-cua",
        "name": "ZOOM CUA",
        "code": "3312",
        "address": "Calle Jose Maria CarreÑo Local Minicozzi Nro Pb Sector Casco Central Cua",
        "city": "Cua, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04123240537",
          "04124007413"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Cua/Zoom_Cua/",
        "details": {
          "Codigo": "3312",
          "Direccion": "Calle Jose Maria CarreÑo Local Minicozzi Nro Pb Sector Casco Central Cua",
          "Ciudad": "Cua, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04123240537 | 04124007413",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.160200,-66.888500",
        "lat": 10.1602,
        "lng": -66.8885
      },
      {
        "id": "zoom-miranda-zoom-galerias-las-americas",
        "name": "ZOOM GALERIAS LAS AMERICAS",
        "code": "1197",
        "address": "Carretera Panamericana, Km 15, Sector Las Minas, Cc GalerÍa Las AmÉricas, Nivel 1, Local N1-40",
        "city": "San Antonio De Los Altos, Miranda",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04242746804"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/San_Antonio_De_Los_Altos/Zoom_Galerias_Las_Americas/",
        "details": {
          "Codigo": "1197",
          "Direccion": "Carretera Panamericana, Km 15, Sector Las Minas, Cc GalerÍa Las AmÉricas, Nivel 1, Local N1-40",
          "Ciudad": "San Antonio De Los Altos, Miranda",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04242746804 | 04242746804",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.370918,-66.978779",
        "lat": 10.370918,
        "lng": -66.978779
      },
      {
        "id": "zoom-miranda-zoom-guarenas",
        "name": "ZOOM GUARENAS",
        "code": "67",
        "address": "Zona Industrial Santa Cruz, Urb. Los Naranjos, P.ref. Pasando Los Bomberos Entrando Por La Levis Al Lado De Pandok.",
        "city": "Guarenas, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Guarenas/Zoom_Guarenas/",
        "details": {
          "Codigo": "67",
          "Direccion": "Zona Industrial Santa Cruz, Urb. Los Naranjos, P.ref. Pasando Los Bomberos Entrando Por La Levis Al Lado De Pandok.",
          "Ciudad": "Guarenas, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.472300,-66.594800",
        "lat": 10.4723,
        "lng": -66.5948
      },
      {
        "id": "zoom-miranda-zoom-higuerote",
        "name": "ZOOM HIGUEROTE",
        "code": "1886",
        "address": "Sector Tocoron Higuerote, Av. Andres Bello Eloy Blanco, C.c. Anjulicar Nivel Pb, Local Nro. 3.",
        "city": "Higuerote, Miranda",
        "schedule": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02343233305"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Higuerote/Zoom_Higuerote/",
        "details": {
          "Codigo": "1886",
          "Direccion": "Sector Tocoron Higuerote, Av. Andres Bello Eloy Blanco, C.c. Anjulicar Nivel Pb, Local Nro. 3.",
          "Ciudad": "Higuerote, Miranda",
          "Horario": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02343233305",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.487557,-66.105125",
        "lat": 10.487557,
        "lng": -66.105125
      },
      {
        "id": "zoom-miranda-zoom-la-cascada",
        "name": "ZOOM LA CASCADA",
        "code": "4106",
        "address": "Carretera Panamericana Km 21, C.c. La Cascada Nivel Planta Baja Local Pb-43,sector Corralito",
        "city": "Carrizal, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: 08:00 PM - 05:00 PM",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Carrizal/Zoom_La_Cascada/",
        "details": {
          "Codigo": "4106",
          "Direccion": "Carretera Panamericana Km 21, C.c. La Cascada Nivel Planta Baja Local Pb-43,sector Corralito",
          "Ciudad": "Carrizal, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: 08:00 PM - 05:00 PM",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.354200,-67.002300",
        "lat": 10.3542,
        "lng": -67.0023
      },
      {
        "id": "zoom-miranda-zoom-los-teques",
        "name": "ZOOM LOS TEQUES",
        "code": "73",
        "address": "Sector El Tambor, Av. Pedro Ruffo Ferrer, C.c. Los Teques Local A5. P.ref. Frente Al Banco De Venezuela.",
        "city": "Los Teques, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Los_Teques/Zoom_Los_Teques/",
        "details": {
          "Codigo": "73",
          "Direccion": "Sector El Tambor, Av. Pedro Ruffo Ferrer, C.c. Los Teques Local A5. P.ref. Frente Al Banco De Venezuela.",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.354645,-67.032282",
        "lat": 10.354645,
        "lng": -67.032282
      },
      {
        "id": "zoom-miranda-zoom-ocumare-del-tuy",
        "name": "ZOOM OCUMARE DEL TUY",
        "code": "4091",
        "address": "Calle Principal La Acequia Cc Residencia La Acequia Nivel Pb Local Nro 7",
        "city": "Ocumare Del Tuy, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 04:00 PM, Domingo: Cerrado",
        "phones": [
          "02392246033"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Ocumare_Del_Tuy/Zoom_Ocumare_Del_Tuy/",
        "details": {
          "Codigo": "4091",
          "Direccion": "Calle Principal La Acequia Cc Residencia La Acequia Nivel Pb Local Nro 7",
          "Ciudad": "Ocumare Del Tuy, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 04:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02392246033",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.127146,-66.777809",
        "lat": 10.127146,
        "lng": -66.777809
      },
      {
        "id": "zoom-miranda-zoom-san-antonio",
        "name": "ZOOM SAN ANTONIO",
        "code": "1020",
        "address": "Carretera Panamericana Km 16 Bajando Por El Distribuidor De La Rosaleda (sentido Caracas) A Mano Derecha 100 Mts Antes Del C.c. La Casona I, Local Zoom.",
        "city": "San Antonio De Los Altos, Miranda",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 02:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02123725877"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/San_Antonio_De_Los_Altos/Zoom_San_Antonio/",
        "details": {
          "Codigo": "1020",
          "Direccion": "Carretera Panamericana Km 16 Bajando Por El Distribuidor De La Rosaleda (sentido Caracas) A Mano Derecha 100 Mts Antes Del C.c. La Casona I, Local Zoom.",
          "Ciudad": "San Antonio De Los Altos, Miranda",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 02:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02123725877 | 02123725877",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.369846,-66.984889",
        "lat": 10.369846,
        "lng": -66.984889
      },
      {
        "id": "zoom-miranda-zoom-santa-teresa-del-tuy",
        "name": "ZOOM SANTA TERESA DEL TUY",
        "code": "1247",
        "address": "Calle Sucre Con Av. Ayacucho, Local C. Nro. 3.",
        "city": "Santa Teresa Del Tuy, Miranda",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02392311394",
          "02392315674"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Miranda/Santa_Teresa_Del_Tuy/Zoom_Santa_Teresa_Del_Tuy/",
        "details": {
          "Codigo": "1247",
          "Direccion": "Calle Sucre Con Av. Ayacucho, Local C. Nro. 3.",
          "Ciudad": "Santa Teresa Del Tuy, Miranda",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02392311394 | 02392315674",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.233800,-66.666700",
        "lat": 10.2338,
        "lng": -66.6667
      }
    ],
    "Monagas": [
      {
        "id": "zoom-monagas-zoom-av-raul-leoni",
        "name": "ZOOM AV RAUL LEONI",
        "code": "1830",
        "address": "Av. Raul Leoni Cruce Con Prolongacion Boyaca, Edf. Nar-oly, Torre A, P. Pb, Local A Sur, Sector Centro.",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02916414638"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Av_Raul_Leoni/",
        "details": {
          "Codigo": "1830",
          "Direccion": "Av. Raul Leoni Cruce Con Prolongacion Boyaca, Edf. Nar-oly, Torre A, P. Pb, Local A Sur, Sector Centro.",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02916414638 | 02916414638",
          "Servicio(s)": "Envíos Casilleros Remesa Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.746656,-63.166783",
        "lat": 9.746656,
        "lng": -63.166783
      },
      {
        "id": "zoom-monagas-zoom-casco-central",
        "name": "ZOOM CASCO CENTRAL",
        "code": "2343",
        "address": "Av. Azcue Con Av Rojas Sector Centro, Local Nro. 114 A Dos Cuadras De La Av.bolivar",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "02916427925",
          "02916410634"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Casco_Central/",
        "details": {
          "Codigo": "2343",
          "Direccion": "Av. Azcue Con Av Rojas Sector Centro, Local Nro. 114 A Dos Cuadras De La Av.bolivar",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 08:30 AM - 04:00 PM, Martes: 08:30 AM - 04:00 PM, Miercoles: 08:30 AM - 04:00 PM, Jueves: 08:30 AM - 04:00 PM, Viernes: 08:30 AM - 04:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02916427925 | 02916410634",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.745438,-63.182029",
        "lat": 9.745438,
        "lng": -63.182029
      },
      {
        "id": "zoom-monagas-zoom-elarba-i",
        "name": "ZOOM ELARBA I",
        "code": "3417",
        "address": "Avenida Bolivar, Edificio Elarba, Piso Pb, Local 133, Sector Centro De Maturin",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02916427302"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Elarba_I/",
        "details": {
          "Codigo": "3417",
          "Direccion": "Avenida Bolivar, Edificio Elarba, Piso Pb, Local 133, Sector Centro De Maturin",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02916427302"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.747080,-63.185664",
        "lat": 9.74708,
        "lng": -63.185664
      },
      {
        "id": "zoom-monagas-zoom-los-samanes",
        "name": "ZOOM LOS SAMANES",
        "code": "1580",
        "address": "Calle Principal, Centro Comercial Los Samanes, Local 1, Planta Baja, Sector Los Samanes.",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 09:00 AM - 12:00 PM, Martes: 09:00 AM - 12:00 PM, Miercoles: 09:00 AM - 12:00 PM, Jueves: 09:00 AM - 12:00 PM, Viernes: 09:00 AM - 12:00 PM, Sabado: 09:00 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02916529709"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Los_Samanes/",
        "details": {
          "Codigo": "1580",
          "Direccion": "Calle Principal, Centro Comercial Los Samanes, Local 1, Planta Baja, Sector Los Samanes.",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 09:00 AM - 12:00 PM, Martes: 09:00 AM - 12:00 PM, Miercoles: 09:00 AM - 12:00 PM, Jueves: 09:00 AM - 12:00 PM, Viernes: 09:00 AM - 12:00 PM, Sabado: 09:00 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02916529709"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.682400,-63.232300",
        "lat": 9.6824,
        "lng": -63.2323
      },
      {
        "id": "zoom-monagas-zoom-maturin",
        "name": "ZOOM MATURIN",
        "code": "89",
        "address": "Av. Bicentenario Edificio Congesa, Local I Y Ii Punto De Referencia: Frente Plaza El Indio",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Maturin/",
        "details": {
          "Codigo": "89",
          "Direccion": "Av. Bicentenario Edificio Congesa, Local I Y Ii Punto De Referencia: Frente Plaza El Indio",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.739641,-63.202025",
        "lat": 9.739641,
        "lng": -63.202025
      },
      {
        "id": "zoom-monagas-zoom-punta-de-mata",
        "name": "ZOOM PUNTA DE MATA",
        "code": "1581",
        "address": "Av Bolivar Cc Jupiter Center Nivel Pb Local 10,sector Centro Punta De Mata",
        "city": "Punta De Mata, Monagas",
        "schedule": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: 08:30 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04249550302"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Punta_De_Mata/Zoom_Punta_De_Mata/",
        "details": {
          "Codigo": "1581",
          "Direccion": "Av Bolivar Cc Jupiter Center Nivel Pb Local 10,sector Centro Punta De Mata",
          "Ciudad": "Punta De Mata, Monagas",
          "Horario": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: 08:30 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04249550302",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.689287,-63.611141",
        "lat": 9.689287,
        "lng": -63.611141
      },
      {
        "id": "zoom-monagas-zoom-temblador",
        "name": "ZOOM TEMBLADOR",
        "code": "4119",
        "address": "Calle Sucre Casa Nro S/n Sector La Plaza Temblador",
        "city": "Temblador, Monagas",
        "schedule": "Lunes: 07:30 AM - 03:30 PM, Martes: 07:30 AM - 03:30 PM, Miercoles: 07:30 AM - 03:00 PM, Jueves: 07:30 AM - 03:30 PM, Viernes: 07:30 AM - 03:30 PM, Sabado: 07:30 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "02877920795"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Temblador/Zoom_Temblador/",
        "details": {
          "Codigo": "4119",
          "Direccion": "Calle Sucre Casa Nro S/n Sector La Plaza Temblador",
          "Ciudad": "Temblador, Monagas",
          "Horario": "Lunes: 07:30 AM - 03:30 PM, Martes: 07:30 AM - 03:30 PM, Miercoles: 07:30 AM - 03:00 PM, Jueves: 07:30 AM - 03:30 PM, Viernes: 07:30 AM - 03:30 PM, Sabado: 07:30 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02877920795",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.004633,-62.638338",
        "lat": 9.004633,
        "lng": -62.638338
      },
      {
        "id": "zoom-monagas-zoom-tipuro",
        "name": "ZOOM TIPURO",
        "code": "2944",
        "address": "Av Principal De Tipuro, Centro Comercial Tipuro Norte (sambilito).local Pasillo Miraflores Nro 53, Urb Tipuro",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 09:00 AM - 12:00 PM, Martes: 09:00 AM - 12:00 PM, Miercoles: 09:00 AM - 12:00 PM, Jueves: 09:00 AM - 12:00 PM, Viernes: 09:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02916437282"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Tipuro/",
        "details": {
          "Codigo": "2944",
          "Direccion": "Av Principal De Tipuro, Centro Comercial Tipuro Norte (sambilito).local Pasillo Miraflores Nro 53, Urb Tipuro",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 09:00 AM - 12:00 PM, Martes: 09:00 AM - 12:00 PM, Miercoles: 09:00 AM - 12:00 PM, Jueves: 09:00 AM - 12:00 PM, Viernes: 09:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02916437282",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.781159,-63.194863",
        "lat": 9.781159,
        "lng": -63.194863
      },
      {
        "id": "zoom-monagas-zoom-ugarte-pelayo",
        "name": "ZOOM UGARTE PELAYO",
        "code": "696",
        "address": "Av. Alirio Ugarte Pelayo, Edificio Vespa, Local 6, Sector Bajo Guarapiche.",
        "city": "Maturin, Monagas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04249065409"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Monagas/Maturin/Zoom_Ugarte_Pelayo/",
        "details": {
          "Codigo": "696",
          "Direccion": "Av. Alirio Ugarte Pelayo, Edificio Vespa, Local 6, Sector Bajo Guarapiche.",
          "Ciudad": "Maturin, Monagas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04249065409",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.758037,-63.186397",
        "lat": 9.758037,
        "lng": -63.186397
      }
    ],
    "Nueva_Esparta": [
      {
        "id": "zoom-nueva-esparta-zoom-av-4-de-mayo",
        "name": "ZOOM AV 4 DE MAYO",
        "code": "1488",
        "address": "Av Paseo Cultural Ramon Vasquez Brito Cc Boulevard Porlamar Edificio S Nivel 1 Local S-3a Sector 4 De Mayo",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02952660447"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Porlamar/Zoom__Av_4_De_Mayo/",
        "details": {
          "Codigo": "1488",
          "Direccion": "Av Paseo Cultural Ramon Vasquez Brito Cc Boulevard Porlamar Edificio S Nivel 1 Local S-3a Sector 4 De Mayo",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02952660447"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.967000,-63.839100",
        "lat": 10.967,
        "lng": -63.8391
      },
      {
        "id": "zoom-nueva-esparta-zoom-c-c-la-redoma",
        "name": "ZOOM C.C LA REDOMA",
        "code": "4136",
        "address": "Calle Libertad Cc La Redoma Nivel 1 Local 42 Sector Los Robles El Pilar",
        "city": "Pampatar, Nueva Esparta",
        "schedule": "Lunes: 08:30 AM - 05:00 PMMartes: 08:30 AM - 05:00 PMMiercoles: 08:30 AM - 05:00 PMJueves: 08:30 AM - 05:00 PMViernes: 08:30 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "02952626006",
          "04147898585"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Pampatar/Zoom_Cc_La_Redoma/",
        "details": {
          "Codigo": "4136",
          "Direccion": "Calle Libertad Cc La Redoma Nivel 1 Local 42 Sector Los Robles El Pilar",
          "Ciudad": "Pampatar, Nueva Esparta",
          "Horario": "Lunes: 08:30 AM - 05:00 PMMartes: 08:30 AM - 05:00 PMMiercoles: 08:30 AM - 05:00 PMJueves: 08:30 AM - 05:00 PMViernes: 08:30 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "02952626006 | 04147898585",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:30 AM - 05:00 PM",
          "Martes": "08:30 AM - 05:00 PM",
          "Miercoles": "08:30 AM - 05:00 PM",
          "Jueves": "08:30 AM - 05:00 PM",
          "Viernes": "08:30 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.989890,-63.839353",
        "lat": 10.98989,
        "lng": -63.839353
      },
      {
        "id": "zoom-nueva-esparta-zoom-calle-campos",
        "name": "ZOOM CALLE CAMPOS",
        "code": "1554",
        "address": "Calle Campos Edificio Juamo Pb",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "Lunes: 08:30 AM - 03:30 PM, Martes: 08:30 AM - 03:30 PM, Miercoles: 08:30 AM - 03:30 PM, Jueves: 08:30 AM - 03:30 PM, Viernes: 08:30 AM - 03:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02952641217"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Porlamar/Zoom_Calle_Campos/",
        "details": {
          "Codigo": "1554",
          "Direccion": "Calle Campos Edificio Juamo Pb",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "Lunes: 08:30 AM - 03:30 PM, Martes: 08:30 AM - 03:30 PM, Miercoles: 08:30 AM - 03:30 PM, Jueves: 08:30 AM - 03:30 PM, Viernes: 08:30 AM - 03:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02952641217",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.962200,-63.840200",
        "lat": 10.9622,
        "lng": -63.8402
      },
      {
        "id": "zoom-nueva-esparta-zoom-juan-griego",
        "name": "ZOOM JUAN GRIEGO",
        "code": "1702",
        "address": "C.c. La Estancia, Local L23, Juan Griego.",
        "city": "Juan Griego, Nueva Esparta",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04248277609"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Juan_Griego/Zoom_Juan_Griego/",
        "details": {
          "Codigo": "1702",
          "Direccion": "C.c. La Estancia, Local L23, Juan Griego.",
          "Ciudad": "Juan Griego, Nueva Esparta",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04248277609",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.082500,-63.966000",
        "lat": 11.0825,
        "lng": -63.966
      },
      {
        "id": "zoom-nueva-esparta-zoom-los-robles",
        "name": "ZOOM LOS ROBLES",
        "code": "1555",
        "address": "Av Jovito Villalba C.c. Centro Artesanal Los Robles Nivel P.b",
        "city": "Pampatar, Nueva Esparta",
        "schedule": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "08007679666"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Pampatar/Zoom_Los_Robles/",
        "details": {
          "Codigo": "1555",
          "Direccion": "Av Jovito Villalba C.c. Centro Artesanal Los Robles Nivel P.b",
          "Ciudad": "Pampatar, Nueva Esparta",
          "Horario": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "08007679666",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.992480,-63.833200",
        "lat": 10.99248,
        "lng": -63.8332
      },
      {
        "id": "zoom-nueva-esparta-zoom-porlamar",
        "name": "ZOOM PORLAMAR",
        "code": "99",
        "address": "Av. 4 De Mayo, Residencias Panerco, Planta Baja, Local 1.",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Porlamar/Zoom_Porlamar/",
        "details": {
          "Codigo": "99",
          "Direccion": "Av. 4 De Mayo, Residencias Panerco, Planta Baja, Local 1.",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.966866,-63.840373",
        "lat": 10.966866,
        "lng": -63.840373
      },
      {
        "id": "zoom-nueva-esparta-zoom-porlamar-centro",
        "name": "ZOOM PORLAMAR CENTRO",
        "code": "235",
        "address": "Calle VelÁsquez Con Calle DÍaz, Centro Comercial Concord, Local #100. Pasillo Central",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Porlamar/Zoom_Porlamar_Centro/",
        "details": {
          "Codigo": "235",
          "Direccion": "Calle VelÁsquez Con Calle DÍaz, Centro Comercial Concord, Local #100. Pasillo Central",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.955550,-63.847740",
        "lat": 10.95555,
        "lng": -63.84774
      },
      {
        "id": "zoom-nueva-esparta-zoom-rattan-plaza",
        "name": "ZOOM RATTAN PLAZA",
        "code": "1527",
        "address": "Av Jovito Villalba Cc Rattan Hyperplaza Nivel Mezzanina Local E-43,sector Playa El Angel",
        "city": "Pampatar, Nueva Esparta",
        "schedule": "Lunes: 09:00 PM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02952626044"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Pampatar/Zoom_Rattan_Plaza/",
        "details": {
          "Codigo": "1527",
          "Direccion": "Av Jovito Villalba Cc Rattan Hyperplaza Nivel Mezzanina Local E-43,sector Playa El Angel",
          "Ciudad": "Pampatar, Nueva Esparta",
          "Horario": "Lunes: 09:00 PM - 04:00 PM, Martes: 09:00 AM - 04:00 PM, Miercoles: 09:00 AM - 04:00 PM, Jueves: 09:00 AM - 04:00 PM, Viernes: 09:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02952626044",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.992313,-63.826555",
        "lat": 10.992313,
        "lng": -63.826555
      },
      {
        "id": "zoom-nueva-esparta-zoom-sambil-margarita",
        "name": "ZOOM SAMBIL MARGARITA",
        "code": "4128",
        "address": "Avenida JÓvito Villalba, Sector San Lorenzo, Sambil Margarita, Locales T01a Y T01b, Al Lado De La Salida Playa Guacuco",
        "city": "Pampatar, Nueva Esparta",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 05:00 PMDomingo: 10:00 AM - 05:00 PM",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Nueva_Esparta/Pampatar/Zoom_Sambil_Margarita/",
        "details": {
          "Codigo": "4128",
          "Direccion": "Avenida JÓvito Villalba, Sector San Lorenzo, Sambil Margarita, Locales T01a Y T01b, Al Lado De La Salida Playa Guacuco",
          "Ciudad": "Pampatar, Nueva Esparta",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 05:00 PMDomingo: 10:00 AM - 05:00 PM",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Remesas Casillero Nacional Divisas Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado Domingo",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "08:00 AM - 05:00 PM",
          "Domingo": "10:00 AM - 05:00 PM"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.996530,-63.811490",
        "lat": 10.99653,
        "lng": -63.81149
      }
    ],
    "Portuguesa": [
      {
        "id": "zoom-portuguesa-zoom-acarigua",
        "name": "ZOOM ACARIGUA",
        "code": "2",
        "address": "Calle 30 Con Av. 35, Centro Comercial PÁez, Planta Baja, Local 02.",
        "city": "Acarigua, Portuguesa",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Portuguesa/Acarigua/Zoom_Acarigua/",
        "details": {
          "Codigo": "2",
          "Direccion": "Calle 30 Con Av. 35, Centro Comercial PÁez, Planta Baja, Local 02.",
          "Ciudad": "Acarigua, Portuguesa",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.554431,-69.206197",
        "lat": 9.554431,
        "lng": -69.206197
      },
      {
        "id": "zoom-portuguesa-zoom-c-c-sol-de-curpa",
        "name": "ZOOM C.C. SOL DE CURPA",
        "code": "2252",
        "address": "Av. Libertador, E/ Calles 32 Y 33 C.c. Sol De Curpa Nivel Pb., Local 7",
        "city": "Acarigua, Portuguesa",
        "schedule": "Lunes: 08:00 AM - 12:30 PM, Martes: 08:00 AM - 12:30 PM, Miercoles: 08:00 AM - 12:30 PM, Jueves: 08:00 AM - 12:30 PM, Viernes: 08:00 AM - 12:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02556223280"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Portuguesa/Acarigua/Zoom_Cc_Sol_De_Curpa/",
        "details": {
          "Codigo": "2252",
          "Direccion": "Av. Libertador, E/ Calles 32 Y 33 C.c. Sol De Curpa Nivel Pb., Local 7",
          "Ciudad": "Acarigua, Portuguesa",
          "Horario": "Lunes: 08:00 AM - 12:30 PM, Martes: 08:00 AM - 12:30 PM, Miercoles: 08:00 AM - 12:30 PM, Jueves: 08:00 AM - 12:30 PM, Viernes: 08:00 AM - 12:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02556223280",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.557163,-69.203552",
        "lat": 9.557163,
        "lng": -69.203552
      },
      {
        "id": "zoom-portuguesa-zoom-corredor-vial-tomas-montilla",
        "name": "ZOOM CORREDOR VIAL TOMAS MONTILLA",
        "code": "4144",
        "address": "Cr 7 Entre Av Unda Y Corredor Vial Tomas Montilla Edif Forum Piso 1 Local 2, Barrio Maturin",
        "city": "Guanare, Portuguesa",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04245612124"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Portuguesa/Guanare/Zoom_Corredor_Vial_Tomas_Montilla/",
        "details": {
          "Codigo": "4144",
          "Direccion": "Cr 7 Entre Av Unda Y Corredor Vial Tomas Montilla Edif Forum Piso 1 Local 2, Barrio Maturin",
          "Ciudad": "Guanare, Portuguesa",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04245612124",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.045720,-69.743880",
        "lat": 9.04572,
        "lng": -69.74388
      },
      {
        "id": "zoom-portuguesa-zoom-guanare",
        "name": "ZOOM GUANARE",
        "code": "875",
        "address": "Av. Simon Bolivar Entre Av. Unda Y Calle 9, Centro Comercial Autocentro, Pb. Local Zoom.",
        "city": "Guanare, Portuguesa",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Portuguesa/Guanare/Zoom_Guanare/",
        "details": {
          "Codigo": "875",
          "Direccion": "Av. Simon Bolivar Entre Av. Unda Y Calle 9, Centro Comercial Autocentro, Pb. Local Zoom.",
          "Ciudad": "Guanare, Portuguesa",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.034422,-69.740997",
        "lat": 9.034422,
        "lng": -69.740997
      },
      {
        "id": "zoom-portuguesa-zoom-turen",
        "name": "ZOOM TUREN",
        "code": "274",
        "address": "Av. Ricardo Perez Zambrano, Edif. Agosi. Local Nro. 1. Villa Bruzual",
        "city": "Turen, Portuguesa",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02563211405"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Portuguesa/Turen/Zoom_Turen/",
        "details": {
          "Codigo": "274",
          "Direccion": "Av. Ricardo Perez Zambrano, Edif. Agosi. Local Nro. 1. Villa Bruzual",
          "Ciudad": "Turen, Portuguesa",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02563211405",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.328700,-69.120400",
        "lat": 9.3287,
        "lng": -69.1204
      }
    ],
    "Sucre": [
      {
        "id": "zoom-sucre-zoom-c-c-marina-plaza",
        "name": "ZOOM C.C MARINA PLAZA",
        "code": "1115",
        "address": "Av.cristobal Colon Perimetal, Sec. El Diqui, C.c. Marina Plaza, Edif. D-3, Local P.b.-4",
        "city": "Cumana, Sucre",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02934315251"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Cumana/Zoom_Cc_Marina_Plaza/",
        "details": {
          "Codigo": "1115",
          "Direccion": "Av.cristobal Colon Perimetal, Sec. El Diqui, C.c. Marina Plaza, Edif. D-3, Local P.b.-4",
          "Ciudad": "Cumana, Sucre",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02934315251",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.476300,-64.185400",
        "lat": 10.4763,
        "lng": -64.1854
      },
      {
        "id": "zoom-sucre-zoom-c-c-san-onofre",
        "name": "ZOOM C.C SAN ONOFRE",
        "code": "4055",
        "address": "Av Humboldt Cc San Onofre Nivel Pb Local Nro 13, Sector Santa Catalina",
        "city": "Cumana, Sucre",
        "schedule": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02934337301"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Cumana/Zoom___Cc_San_Onofre/",
        "details": {
          "Codigo": "4055",
          "Direccion": "Av Humboldt Cc San Onofre Nivel Pb Local Nro 13, Sector Santa Catalina",
          "Ciudad": "Cumana, Sucre",
          "Horario": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02934337301"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.466101,-64.177650",
        "lat": 10.466101,
        "lng": -64.17765
      },
      {
        "id": "zoom-sucre-zoom-carupano",
        "name": "ZOOM CARUPANO",
        "code": "744",
        "address": "Av. Libertador Con Calle Monagas, Edf. Turbo Oriente, P. Pb., Parroquia Santa Catalina, Municipio Bermudez.",
        "city": "Carupano, Sucre",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Carupano/Zoom_Carupano/",
        "details": {
          "Codigo": "744",
          "Direccion": "Av. Libertador Con Calle Monagas, Edf. Turbo Oriente, P. Pb., Parroquia Santa Catalina, Municipio Bermudez.",
          "Ciudad": "Carupano, Sucre",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.663118,-63.253408",
        "lat": 10.663118,
        "lng": -63.253408
      },
      {
        "id": "zoom-sucre-zoom-carupano-centro",
        "name": "ZOOM CARUPANO CENTRO",
        "code": "4082",
        "address": "Calle Juncal, Cruce Con Calle Bolivar, Local Nro 258,sector Centro",
        "city": "Carupano, Sucre",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04248489250"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Carupano/Zoom_Carupano_Centro/",
        "details": {
          "Codigo": "4082",
          "Direccion": "Calle Juncal, Cruce Con Calle Bolivar, Local Nro 258,sector Centro",
          "Ciudad": "Carupano, Sucre",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04248489250",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.661099,-63.151390",
        "lat": 10.661099,
        "lng": -63.15139
      },
      {
        "id": "zoom-sucre-zoom-casco-historico",
        "name": "ZOOM CASCO HISTORICO",
        "code": "4081",
        "address": "Calle Sucre C.c Cumana Nivel Único Oficina 8, Sector Casco Historico.",
        "city": "Cumana, Sucre",
        "schedule": "Lunes: 08:30 AM - 12:30 PM, Martes: 08:30 AM - 12:30 PM, Miercoles: 08:30 AM - 12:30 PM, Jueves: 08:30 AM - 12:30 PM, Viernes: 08:30 AM - 12:30 PM, Sabado: 08:30 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04141891314",
          "04248135003"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Cumana/Zoom_Casco_Historico/",
        "details": {
          "Codigo": "4081",
          "Direccion": "Calle Sucre C.c Cumana Nivel Único Oficina 8, Sector Casco Historico.",
          "Ciudad": "Cumana, Sucre",
          "Horario": "Lunes: 08:30 AM - 12:30 PM, Martes: 08:30 AM - 12:30 PM, Miercoles: 08:30 AM - 12:30 PM, Jueves: 08:30 AM - 12:30 PM, Viernes: 08:30 AM - 12:30 PM, Sabado: 08:30 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04141891314 | 04248135003",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.462413,-64.174250",
        "lat": 10.462413,
        "lng": -64.17425
      },
      {
        "id": "zoom-sucre-zoom-costo-supermercado",
        "name": "ZOOM COSTO SUPERMERCADO",
        "code": "4101",
        "address": "Av Aristides Rojas Con Calle Bermudez Cc Permagas Nivel Planta Baja Local I",
        "city": "Cumana, Sucre",
        "schedule": "Lunes: 08:00 AM - 07:00 PM, Martes: 08:00 AM - 07:00 PM, Miercoles: 08:00 AM - 07:00 PM, Jueves: 08:00 AM - 07:00 PM, Viernes: 08:00 AM - 07:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02120000000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Cumana/Zoom_Costo_Supermercado/",
        "details": {
          "Codigo": "4101",
          "Direccion": "Av Aristides Rojas Con Calle Bermudez Cc Permagas Nivel Planta Baja Local I",
          "Ciudad": "Cumana, Sucre",
          "Horario": "Lunes: 08:00 AM - 07:00 PM, Martes: 08:00 AM - 07:00 PM, Miercoles: 08:00 AM - 07:00 PM, Jueves: 08:00 AM - 07:00 PM, Viernes: 08:00 AM - 07:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02120000000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.462900,-64.185900",
        "lat": 10.4629,
        "lng": -64.1859
      },
      {
        "id": "zoom-sucre-zoom-cumana",
        "name": "ZOOM CUMANA",
        "code": "60",
        "address": "Av Santa Rosa, Edificio Grupo Profesional Santa Rosa Pb Local 2 Cumana Estado Sucre",
        "city": "Cumana, Sucre",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Cumana/Zoom_Cumana/",
        "details": {
          "Codigo": "60",
          "Direccion": "Av Santa Rosa, Edificio Grupo Profesional Santa Rosa Pb Local 2 Cumana Estado Sucre",
          "Ciudad": "Cumana, Sucre",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.472312,-64.165037",
        "lat": 10.472312,
        "lng": -64.165037
      },
      {
        "id": "zoom-sucre-zoom-santa-rosa",
        "name": "ZOOM SANTA ROSA",
        "code": "2177",
        "address": "Sector Santa Rosa, Av. Santa Rosa, C.c. Santa Rosa, Nivel Pb., Local 06,",
        "city": "Cumana, Sucre",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
        "phones": [
          "02934325295"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Sucre/Cumana/Zoom___Santa_Rosa/",
        "details": {
          "Codigo": "2177",
          "Direccion": "Sector Santa Rosa, Av. Santa Rosa, C.c. Santa Rosa, Nivel Pb., Local 06,",
          "Ciudad": "Cumana, Sucre",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 12:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02934325295",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.471650,-64.167060",
        "lat": 10.47165,
        "lng": -64.16706
      }
    ],
    "Tachira": [
      {
        "id": "zoom-tachira-zoom-5ta-avenida",
        "name": "ZOOM 5TA AVENIDA",
        "code": "2399",
        "address": "Av. 5ta. Entre Calles Nro. 3 Y 4,edf. A.c., Piso Pb, Local Nro. 8,sector Centro.",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763437809"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_5ta_Avenida/",
        "details": {
          "Codigo": "2399",
          "Direccion": "Av. 5ta. Entre Calles Nro. 3 Y 4,edf. A.c., Piso Pb, Local Nro. 8,sector Centro.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763437809"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.776449,-72.234103",
        "lat": 7.776449,
        "lng": -72.234103
      },
      {
        "id": "zoom-tachira-zoom-av-ferrero-tamayo",
        "name": "ZOOM AV FERRERO TAMAYO",
        "code": "1163",
        "address": "Av. Ferrero Tamayo, Cruce Av. Las Pilas Centro Comercial Barata, Local P.b-03.",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: 09:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "02763563341"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Av_Ferrero_Tamayo/",
        "details": {
          "Codigo": "1163",
          "Direccion": "Av. Ferrero Tamayo, Cruce Av. Las Pilas Centro Comercial Barata, Local P.b-03.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: 09:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02763563341",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.787200,-72.214300",
        "lat": 7.7872,
        "lng": -72.2143
      },
      {
        "id": "zoom-tachira-zoom-av-rotaria",
        "name": "ZOOM AV ROTARIA",
        "code": "3149",
        "address": "Vda 8 Y 9 Casa Nro 2-24 Sector Prolongacion De La Unidad Vecinal",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763918986"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Av_Rotaria/",
        "details": {
          "Codigo": "3149",
          "Direccion": "Vda 8 Y 9 Casa Nro 2-24 Sector Prolongacion De La Unidad Vecinal",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763918986",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.748600,-72.221249",
        "lat": 7.7486,
        "lng": -72.221249
      },
      {
        "id": "zoom-tachira-zoom-av-venezuela",
        "name": "ZOOM AV VENEZUELA",
        "code": "3562",
        "address": "Av Venezuela Carrera 6 Local Nro 6-02,sector Bolivar",
        "city": "San Antonio Del Tachira, Tachira",
        "schedule": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: 08:00 AM - 06:00 AM, Domingo: Cerrado",
        "phones": [
          "02767714653"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Antonio_Del_Tachira/Zoom_Av_Venezuela/",
        "details": {
          "Codigo": "3562",
          "Direccion": "Av Venezuela Carrera 6 Local Nro 6-02,sector Bolivar",
          "Ciudad": "San Antonio Del Tachira, Tachira",
          "Horario": "Lunes: 08:00 AM - 06:00 PM, Martes: 08:00 AM - 06:00 PM, Miercoles: 08:00 AM - 06:00 PM, Jueves: 08:00 AM - 06:00 PM, Viernes: 08:00 AM - 06:00 PM, Sabado: 08:00 AM - 06:00 AM, Domingo: Cerrado",
          "Telefono(s)": "02767714653"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.816477,-72.442322",
        "lat": 7.816477,
        "lng": -72.442322
      },
      {
        "id": "zoom-tachira-zoom-barrio-el-carmen",
        "name": "ZOOM BARRIO EL CARMEN",
        "code": "1225",
        "address": "Calle 2 Nro 10-45 Barrio El Carmen La Concordia",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763461015"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Barrio_El_Carmen/",
        "details": {
          "Codigo": "1225",
          "Direccion": "Calle 2 Nro 10-45 Barrio El Carmen La Concordia",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 09:00 AM - 05:00 PM, Martes: 09:00 AM - 05:00 PM, Miercoles: 09:00 AM - 05:00 PM, Jueves: 09:00 AM - 05:00 PM, Viernes: 09:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763461015",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.751093,-72.229870",
        "lat": 7.751093,
        "lng": -72.22987
      },
      {
        "id": "zoom-tachira-zoom-calle-12",
        "name": "ZOOM CALLE 12",
        "code": "1121",
        "address": "Calle 12, Entre Carrera 4 Y 5ta Avenida Nro 4-35 La Ermita ( Tapon Lacor) San Cristobal",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04141768868"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Calle_12/",
        "details": {
          "Codigo": "1121",
          "Direccion": "Calle 12, Entre Carrera 4 Y 5ta Avenida Nro 4-35 La Ermita ( Tapon Lacor) San Cristobal",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04141768868",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.771855,-72.233320",
        "lat": 7.771855,
        "lng": -72.23332
      },
      {
        "id": "zoom-tachira-zoom-calle-15",
        "name": "ZOOM CALLE 15",
        "code": "780",
        "address": "Calle 15 Con Carrera 22, Edif. Apolo, Local 3, Barrio Obrero.",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 PM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763568693",
          "02763568933"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Calle_15/",
        "details": {
          "Codigo": "780",
          "Direccion": "Calle 15 Con Carrera 22, Edif. Apolo, Local 3, Barrio Obrero.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 PM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763568693 | 02763568933",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.773200,-72.218200",
        "lat": 7.7732,
        "lng": -72.2182
      },
      {
        "id": "zoom-tachira-zoom-carrera-19",
        "name": "ZOOM CARRERA 19",
        "code": "4060",
        "address": "Cr 19 Entre Calle 15 Y 16 Local Nro 15-15, Barrio Obrero",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763487790"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Carrera_19/",
        "details": {
          "Codigo": "4060",
          "Direccion": "Cr 19 Entre Calle 15 Y 16 Local Nro 15-15, Barrio Obrero",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763487790"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.773908,-72.221284",
        "lat": 7.773908,
        "lng": -72.221284
      },
      {
        "id": "zoom-tachira-zoom-colon",
        "name": "ZOOM COLON",
        "code": "1898",
        "address": "Sector Centro Colon Tachira,ctra Nro. 7, Con Calle Nro. 3, Casa Nro. 6-81.",
        "city": "Colon, Tachira",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763914892",
          "04264338423"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/Colon/Zoom_Colon/",
        "details": {
          "Codigo": "1898",
          "Direccion": "Sector Centro Colon Tachira,ctra Nro. 7, Con Calle Nro. 3, Casa Nro. 6-81.",
          "Ciudad": "Colon, Tachira",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763914892 | 04264338423",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.030200,-72.262400",
        "lat": 8.0302,
        "lng": -72.2624
      },
      {
        "id": "zoom-tachira-zoom-coloncito",
        "name": "ZOOM COLONCITO",
        "code": "2587",
        "address": "Sector Casco Central Coloncito, Cr. Nro. 04, Casa Nro. 3-47.",
        "city": "Coloncito, Tachira",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02775465158"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/Coloncito/Zoom_Coloncito/",
        "details": {
          "Codigo": "2587",
          "Direccion": "Sector Casco Central Coloncito, Cr. Nro. 04, Casa Nro. 3-47.",
          "Ciudad": "Coloncito, Tachira",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02775465158",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.322800,-72.093428",
        "lat": 8.3228,
        "lng": -72.093428
      },
      {
        "id": "zoom-tachira-zoom-el-pinal",
        "name": "ZOOM EL PIÑAL",
        "code": "2703",
        "address": "Sector El PiÑal, Calle N°. 1 Entre Carrera N°. 3 Y 4, Casa N°. 3-19. (san Rafael Del Piñal).",
        "city": "El Pinal, Tachira",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02772340646"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/El_Pinal/Zoom_El_PiNal/",
        "details": {
          "Codigo": "2703",
          "Direccion": "Sector El PiÑal, Calle N°. 1 Entre Carrera N°. 3 Y 4, Casa N°. 3-19. (san Rafael Del Piñal).",
          "Ciudad": "El Pinal, Tachira",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02772340646",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.530955,-71.961587",
        "lat": 7.530955,
        "lng": -71.961587
      },
      {
        "id": "zoom-tachira-zoom-la-concordia",
        "name": "ZOOM LA CONCORDIA",
        "code": "764",
        "address": "Av 19 De Abril Nro 9-29 Entre Carreras 9 Y 10 La Concordia.",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763480822"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_La_Concordia/",
        "details": {
          "Codigo": "764",
          "Direccion": "Av 19 De Abril Nro 9-29 Entre Carreras 9 Y 10 La Concordia.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763480822 | 02763480822",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.760479,-72.229650",
        "lat": 7.760479,
        "lng": -72.22965
      },
      {
        "id": "zoom-tachira-zoom-la-fria",
        "name": "ZOOM LA FRIA",
        "code": "1723",
        "address": "Sector Terminal De Pasajeros La Fria, Calle 2 Entre Carreras 18 Y 19, Local Nro. 25",
        "city": "La Fria, Tachira",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02774144833"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/La_Fria/Zoom_La_Fria/",
        "details": {
          "Codigo": "1723",
          "Direccion": "Sector Terminal De Pasajeros La Fria, Calle 2 Entre Carreras 18 Y 19, Local Nro. 25",
          "Ciudad": "La Fria, Tachira",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02774144833",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.222016,-72.252299",
        "lat": 8.222016,
        "lng": -72.252299
      },
      {
        "id": "zoom-tachira-zoom-la-grita-c-a",
        "name": "ZOOM LA GRITA C.A",
        "code": "3654",
        "address": "Calle 2 Entre Carreras 11 Y 12 Casa 11-86 Sector Casco Central",
        "city": "La Grita, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 05:30 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02778815316"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/La_Grita/Zoom_La_Grita_Ca/",
        "details": {
          "Codigo": "3654",
          "Direccion": "Calle 2 Entre Carreras 11 Y 12 Casa 11-86 Sector Casco Central",
          "Ciudad": "La Grita, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:30 PM, Martes: 08:00 AM - 05:30 PM, Miercoles: 08:00 AM - 05:30 PM, Jueves: 08:00 AM - 05:30 PM, Viernes: 08:00 AM - 05:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02778815316"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.132466,-71.981140",
        "lat": 8.132466,
        "lng": -71.98114
      },
      {
        "id": "zoom-tachira-zoom-multiservicios-barrio-obrero",
        "name": "ZOOM MULTISERVICIOS BARRIO OBRERO",
        "code": "1280",
        "address": "Calle 11 Entre Carreras 18 Y 19 Nro 19-59, Calle 11 Entre Carreras 18 Y 19 Nro 19-59.",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Multiservicios_Barrio_Obrero/",
        "details": {
          "Codigo": "1280",
          "Direccion": "Calle 11 Entre Carreras 18 Y 19 Nro 19-59, Calle 11 Entre Carreras 18 Y 19 Nro 19-59.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.770090,-72.222049",
        "lat": 7.77009,
        "lng": -72.222049
      },
      {
        "id": "zoom-tachira-zoom-palmira",
        "name": "ZOOM PALMIRA",
        "code": "1757",
        "address": "Sector Palmira, Carretera 5, Local Nro. 2.",
        "city": "Palmira, Tachira",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763919727"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/Palmira/Zoom_Palmira/",
        "details": {
          "Codigo": "1757",
          "Direccion": "Sector Palmira, Carretera 5, Local Nro. 2.",
          "Ciudad": "Palmira, Tachira",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763919727",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.839400,-72.227300",
        "lat": 7.8394,
        "lng": -72.2273
      },
      {
        "id": "zoom-tachira-zoom-paramillo",
        "name": "ZOOM PARAMILLO",
        "code": "3464",
        "address": "Av 4 Edif Minicentro Paramillo Piso 3 Local 1 Etapa,zona Industrial Paramillo",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02763552808"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Paramillo/",
        "details": {
          "Codigo": "3464",
          "Direccion": "Av 4 Edif Minicentro Paramillo Piso 3 Local 1 Etapa,zona Industrial Paramillo",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02763552808"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.800434,-72.206541",
        "lat": 7.800434,
        "lng": -72.206541
      },
      {
        "id": "zoom-tachira-zoom-rubio",
        "name": "ZOOM RUBIO",
        "code": "1104",
        "address": "Calle 14 Entre Av. 8 Y 9, Centro Comercial Dona Ivonne, P.b. Local 6 Y 7",
        "city": "Rubio, Tachira",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02767626456"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/Rubio/Zoom_Rubio/",
        "details": {
          "Codigo": "1104",
          "Direccion": "Calle 14 Entre Av. 8 Y 9, Centro Comercial Dona Ivonne, P.b. Local 6 Y 7",
          "Ciudad": "Rubio, Tachira",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02767626456",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.699900,-72.350000",
        "lat": 7.6999,
        "lng": -72.35
      },
      {
        "id": "zoom-tachira-zoom-san-antonio",
        "name": "ZOOM SAN ANTONIO",
        "code": "112",
        "address": "Calle 9 Entre Carreras 10 Y 11 Número 10-44 Barrio La Popa San Antonio Del Táchira.",
        "city": "San Antonio Del Tachira, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Antonio_Del_Tachira/Zoom_San_Antonio/",
        "details": {
          "Codigo": "112",
          "Direccion": "Calle 9 Entre Carreras 10 Y 11 Número 10-44 Barrio La Popa San Antonio Del Táchira.",
          "Ciudad": "San Antonio Del Tachira, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.813831,-72.441073",
        "lat": 7.813831,
        "lng": -72.441073
      },
      {
        "id": "zoom-tachira-zoom-san-cristobal",
        "name": "ZOOM SAN CRISTOBAL",
        "code": "117",
        "address": "Av. Libertador, Edificio El Maracucho Pb. Local A-56. P.ref. Frente Al Hotel Hamburgo.",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_San_Cristobal/",
        "details": {
          "Codigo": "117",
          "Direccion": "Av. Libertador, Edificio El Maracucho Pb. Local A-56. P.ref. Frente Al Hotel Hamburgo.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.780561,-72.233856",
        "lat": 7.780561,
        "lng": -72.233856
      },
      {
        "id": "zoom-tachira-zoom-santa-teresa",
        "name": "ZOOM SANTA TERESA",
        "code": "4069",
        "address": "Calle Principal Cc Casa Grande Nivel Planta Baja Local S/n, Sector Santa Teresa",
        "city": "San Cristobal, Tachira",
        "schedule": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 PM - 04:30 PM, Sabado: 08:30 AM - 02:00 PM, Domingo: Cerrado",
        "phones": [
          "02763416689"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/San_Cristobal/Zoom_Santa_Teresa/",
        "details": {
          "Codigo": "4069",
          "Direccion": "Calle Principal Cc Casa Grande Nivel Planta Baja Local S/n, Sector Santa Teresa",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Lunes: 08:30 AM - 04:30 PM, Martes: 08:30 AM - 04:30 PM, Miercoles: 08:30 AM - 04:30 PM, Jueves: 08:30 AM - 04:30 PM, Viernes: 08:30 PM - 04:30 PM, Sabado: 08:30 AM - 02:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02763416689",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.797110,-72.220690",
        "lat": 7.79711,
        "lng": -72.22069
      },
      {
        "id": "zoom-tachira-zoom-urena",
        "name": "ZOOM UREÑA",
        "code": "914",
        "address": "Calle 5, Barrio La Goajira, Carretera 5, Local 01.",
        "city": "Urena, Tachira",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02767870254",
          "04244039287"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Tachira/Urena/Zoom_UreNa/",
        "details": {
          "Codigo": "914",
          "Direccion": "Calle 5, Barrio La Goajira, Carretera 5, Local 01.",
          "Ciudad": "Urena, Tachira",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02767870254 | 04244039287",
          "Servicio(s)": "Envíos Casilleros Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.814600,-72.440200",
        "lat": 7.8146,
        "lng": -72.4402
      }
    ],
    "Trujillo": [
      {
        "id": "zoom-trujillo-zoom-bocono",
        "name": "ZOOM BOCONO",
        "code": "1755",
        "address": "Sector Centro, Av. Carabobo Entre Calle Monsenor Jauregui Y Andres Bello, Casa Nro. 6-22.",
        "city": "Bocono, Trujillo",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02724154614"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Trujillo/Bocono/Zoom_Bocono/",
        "details": {
          "Codigo": "1755",
          "Direccion": "Sector Centro, Av. Carabobo Entre Calle Monsenor Jauregui Y Andres Bello, Casa Nro. 6-22.",
          "Ciudad": "Bocono, Trujillo",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02724154614"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.243460,-70.270550",
        "lat": 9.24346,
        "lng": -70.27055
      },
      {
        "id": "zoom-trujillo-zoom-trujillo",
        "name": "ZOOM TRUJILLO",
        "code": "4115",
        "address": "Av Bolivar Centro Comercial Solunto, Nivel 1 Local 1, Centro De Trujillo",
        "city": "Trujillo, Trujillo",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04247013305"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Trujillo/Trujillo/Zoom_Trujillo/",
        "details": {
          "Codigo": "4115",
          "Direccion": "Av Bolivar Centro Comercial Solunto, Nivel 1 Local 1, Centro De Trujillo",
          "Ciudad": "Trujillo, Trujillo",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04247013305",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.364750,-70.437888",
        "lat": 9.36475,
        "lng": -70.437888
      },
      {
        "id": "zoom-trujillo-zoom-valera",
        "name": "ZOOM VALERA",
        "code": "139",
        "address": "Avenida BolÍvar Edificio Galotta Ii, Urb Las Acacias Al Lado De La Bera",
        "city": "Valera, Trujillo",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Trujillo/Valera/Zoom_Valera/",
        "details": {
          "Codigo": "139",
          "Direccion": "Avenida BolÍvar Edificio Galotta Ii, Urb Las Acacias Al Lado De La Bera",
          "Ciudad": "Valera, Trujillo",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.303160,-70.612455",
        "lat": 9.30316,
        "lng": -70.612455
      },
      {
        "id": "zoom-trujillo-zoom-valera-centro",
        "name": "ZOOM VALERA CENTRO",
        "code": "4079",
        "address": "Calle 6, Entre Avenidas 10 Y 11 Cc Canaima Nivel P/b Local L-20",
        "city": "Valera, Trujillo",
        "schedule": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02712212756"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Trujillo/Valera/Zoom_Valera_Centro/",
        "details": {
          "Codigo": "4079",
          "Direccion": "Calle 6, Entre Avenidas 10 Y 11 Cc Canaima Nivel P/b Local L-20",
          "Ciudad": "Valera, Trujillo",
          "Horario": "Lunes: 08:30 AM - 05:00 PM, Martes: 08:30 AM - 05:00 PM, Miercoles: 08:30 AM - 05:00 PM, Jueves: 08:30 AM - 05:00 PM, Viernes: 08:30 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02712212756",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.315660,-70.607630",
        "lat": 9.31566,
        "lng": -70.60763
      }
    ],
    "Vargas": [
      {
        "id": "zoom-vargas-zoom-caraballeda",
        "name": "ZOOM CARABALLEDA",
        "code": "1451",
        "address": "Av. La Costanera Con Copacabana, C.c. Margarita, Nivel S/n, Local S/n, Urb. Palmar Este.",
        "city": "Caraballeda, Vargas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "02123414711"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Vargas/Caraballeda/Zoom_Caraballeda/",
        "details": {
          "Codigo": "1451",
          "Direccion": "Av. La Costanera Con Copacabana, C.c. Margarita, Nivel S/n, Local S/n, Urb. Palmar Este.",
          "Ciudad": "Caraballeda, Vargas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02123414711",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.610200,-66.840900",
        "lat": 10.6102,
        "lng": -66.8409
      },
      {
        "id": "zoom-vargas-zoom-caribe",
        "name": "ZOOM CARIBE",
        "code": "3114",
        "address": "Urb. Caribe. Caraballera. Av Boulevard Naiguata, Edf. Residencia, Gran Terraza. Piso Pb. Local Nro. 1-4.",
        "city": "Caraballeda, Vargas",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 08:00 AM - 04:00 PM, Domingo: Cerrado",
        "phones": [
          "02123374532"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Vargas/Caraballeda/Zoom_Caribe/",
        "details": {
          "Codigo": "3114",
          "Direccion": "Urb. Caribe. Caraballera. Av Boulevard Naiguata, Edf. Residencia, Gran Terraza. Piso Pb. Local Nro. 1-4.",
          "Ciudad": "Caraballeda, Vargas",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: 08:00 AM - 04:00 PM, Domingo: Cerrado",
          "Telefono(s)": "02123374532 | 02123374532",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.611200,-66.852100",
        "lat": 10.6112,
        "lng": -66.8521
      },
      {
        "id": "zoom-vargas-zoom-catia-la-mar",
        "name": "ZOOM CATIA LA MAR",
        "code": "74",
        "address": "Av. Atlantida, Calles 5 Y 6, Qta. Hucarimar, Pb. Local 1.",
        "city": "Catia La Mar, Vargas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Vargas/Catia_La_Mar/Zoom_Catia_La_Mar/",
        "details": {
          "Codigo": "74",
          "Direccion": "Av. Atlantida, Calles 5 Y 6, Qta. Hucarimar, Pb. Local 1.",
          "Ciudad": "Catia La Mar, Vargas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.605728,-67.031817",
        "lat": 10.605728,
        "lng": -67.031817
      },
      {
        "id": "zoom-vargas-zoom-el-consul",
        "name": "ZOOM EL CONSUL",
        "code": "3917",
        "address": "Calle Los Pipotes Entre La Esquina Del Brillante Y Los Pipotes Casa Nro 129 Nivel P.b",
        "city": "Maiquetia, Vargas",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 AM, Sabado: 08:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04242020063"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Vargas/Maiquetia/Zoom_El_Consul/",
        "details": {
          "Codigo": "3917",
          "Direccion": "Calle Los Pipotes Entre La Esquina Del Brillante Y Los Pipotes Casa Nro 129 Nivel P.b",
          "Ciudad": "Maiquetia, Vargas",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 AM, Sabado: 08:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04242020063"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.597549,-66.946040",
        "lat": 10.597549,
        "lng": -66.94604
      },
      {
        "id": "zoom-vargas-zoom-maiquetia",
        "name": "ZOOM MAIQUETIA",
        "code": "4137",
        "address": "Av. Soublette, C. C. Litoral, Nivel Comercio 1, Local 12",
        "city": "Maiquetia, Vargas",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 05:00 PMDomingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Vargas/Maiquetia/Zoom_Maiquetia/",
        "details": {
          "Codigo": "4137",
          "Direccion": "Av. Soublette, C. C. Litoral, Nivel Comercio 1, Local 12",
          "Ciudad": "Maiquetia, Vargas",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: 08:00 AM - 05:00 PMDomingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Remesas Casillero Nacional Divisas Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "08:00 AM - 05:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.596803,-66.954909",
        "lat": 10.596803,
        "lng": -66.954909
      }
    ],
    "Yaracuy": [
      {
        "id": "zoom-yaracuy-zoom-av-6-c-c-don-antonio",
        "name": "ZOOM AV 6 C.C DON ANTONIO",
        "code": "4062",
        "address": "Av 6 Entre Calle 16 Y Avenida La Patria C.c Don Antonio Nivel P.b Local 5, Sector Centro",
        "city": "San Felipe, Yaracuy",
        "schedule": "Lunes: 09:00 AM - 05:00 PMMartes: 09:00 AM - 05:00 PMMiercoles: 09:00 AM - 05:00 PMJueves: 09:00 AM - 05:00 PMViernes: 09:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "02548038181",
          "04245208788"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Yaracuy/San_Felipe/Zoom_Av_6_Cc_Don_Antonio/",
        "details": {
          "Codigo": "4062",
          "Direccion": "Av 6 Entre Calle 16 Y Avenida La Patria C.c Don Antonio Nivel P.b Local 5, Sector Centro",
          "Ciudad": "San Felipe, Yaracuy",
          "Horario": "Lunes: 09:00 AM - 05:00 PMMartes: 09:00 AM - 05:00 PMMiercoles: 09:00 AM - 05:00 PMJueves: 09:00 AM - 05:00 PMViernes: 09:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "02548038181 | 04245208788",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "09:00 AM - 05:00 PM",
          "Martes": "09:00 AM - 05:00 PM",
          "Miercoles": "09:00 AM - 05:00 PM",
          "Jueves": "09:00 AM - 05:00 PM",
          "Viernes": "09:00 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.339910,-68.742470",
        "lat": 10.33991,
        "lng": -68.74247
      },
      {
        "id": "zoom-yaracuy-zoom-san-felipe",
        "name": "ZOOM SAN FELIPE",
        "code": "874",
        "address": "Av. La Patria Con Av. 19 De Abril, Centro Comercial Aracoi, Local C-5. P.ref. Fte. A Oficinas De Caley.",
        "city": "San Felipe, Yaracuy",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Yaracuy/San_Felipe/Zoom_San_Felipe/",
        "details": {
          "Codigo": "874",
          "Direccion": "Av. La Patria Con Av. 19 De Abril, Centro Comercial Aracoi, Local C-5. P.ref. Fte. A Oficinas De Caley.",
          "Ciudad": "San Felipe, Yaracuy",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.334117,-68.736976",
        "lat": 10.334117,
        "lng": -68.736976
      },
      {
        "id": "zoom-yaracuy-zoom-yaritagua",
        "name": "ZOOM YARITAGUA",
        "code": "308",
        "address": "Av. Padre Torres. Calle 19 Entre Carretera 11 Y 12.",
        "city": "Yaritagua, Yaracuy",
        "schedule": "Lunes: 08:00 AM - 01:00 PM, Martes: 08:00 AM - 01:00 PM, Miercoles: 08:00 AM - 01:00 PM, Jueves: 08:00 AM - 01:00 PM, Viernes: 08:00 AM - 01:00 AM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02514821770"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Yaracuy/Yaritagua/Zoom_Yaritagua/",
        "details": {
          "Codigo": "308",
          "Direccion": "Av. Padre Torres. Calle 19 Entre Carretera 11 Y 12.",
          "Ciudad": "Yaritagua, Yaracuy",
          "Horario": "Lunes: 08:00 AM - 01:00 PM, Martes: 08:00 AM - 01:00 PM, Miercoles: 08:00 AM - 01:00 PM, Jueves: 08:00 AM - 01:00 PM, Viernes: 08:00 AM - 01:00 AM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02514821770",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.083500,-69.127800",
        "lat": 10.0835,
        "lng": -69.1278
      }
    ],
    "Zulia": [
      {
        "id": "zoom-zulia-zoom-av-alonso-de-ojeda",
        "name": "ZOOM AV. ALONSO DE OJEDA",
        "code": "706",
        "address": "Av. Alonso De Ojeda, Edif. Tibidabo, P.b. Local 2, Sec. Casco Central, Ciudad Ojeda",
        "city": "Ciudad Ojeda, Zulia",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02656317266"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Ciudad_Ojeda/Zoom_Av_Alonso_De_Ojeda/",
        "details": {
          "Codigo": "706",
          "Direccion": "Av. Alonso De Ojeda, Edif. Tibidabo, P.b. Local 2, Sec. Casco Central, Ciudad Ojeda",
          "Ciudad": "Ciudad Ojeda, Zulia",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02656317266 | 02656317266",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.194200,-71.312900",
        "lat": 10.1942,
        "lng": -71.3129
      },
      {
        "id": "zoom-zulia-zoom-bachaquero",
        "name": "ZOOM BACHAQUERO",
        "code": "4141",
        "address": "Av Bolivar Cc Bolivar Center Nivel 2 Local 2, Sector El Muro",
        "city": "Bachaquero, Zulia",
        "schedule": "Lunes: 08:00 AM - 04:00 PMMartes: 08:00 AM - 04:00 PMMiercoles: 08:00 AM - 04:00 PMJueves: 08:00 AM - 04:00 PMViernes: 08:00 AM - 04:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04127893957"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Bachaquero/Zoom_Bachaquero/",
        "details": {
          "Codigo": "4141",
          "Direccion": "Av Bolivar Cc Bolivar Center Nivel 2 Local 2, Sector El Muro",
          "Ciudad": "Bachaquero, Zulia",
          "Horario": "Lunes: 08:00 AM - 04:00 PMMartes: 08:00 AM - 04:00 PMMiercoles: 08:00 AM - 04:00 PMJueves: 08:00 AM - 04:00 PMViernes: 08:00 AM - 04:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04127893957",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:00 AM - 04:00 PM",
          "Martes": "08:00 AM - 04:00 PM",
          "Miercoles": "08:00 AM - 04:00 PM",
          "Jueves": "08:00 AM - 04:00 PM",
          "Viernes": "08:00 AM - 04:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.968729,-71.123274",
        "lat": 9.968729,
        "lng": -71.123274
      },
      {
        "id": "zoom-zulia-zoom-cabimas",
        "name": "ZOOM CABIMAS",
        "code": "4113",
        "address": "Carretera H Centro Comercial Borjas Local 6 Y 7",
        "city": "Cabimas, Zulia",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 09:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Cabimas/Zoom_Cabimas/",
        "details": {
          "Codigo": "4113",
          "Direccion": "Carretera H Centro Comercial Borjas Local 6 Y 7",
          "Ciudad": "Cabimas, Zulia",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: 09:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.398600,-71.458300",
        "lat": 10.3986,
        "lng": -71.4583
      },
      {
        "id": "zoom-zulia-zoom-calle-vargas",
        "name": "ZOOM CALLE VARGAS",
        "code": "3895",
        "address": "Calle Vargas Con Calle Campo Elias Cc Nocciano Nivel Pb Local 2 Sector Casco Central, Ciudad Ojeda",
        "city": "Ciudad Ojeda, Zulia",
        "schedule": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
        "phones": [
          "04246105634",
          "04246105628"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Ciudad_Ojeda/Zoom_Calle_Vargas/",
        "details": {
          "Codigo": "3895",
          "Direccion": "Calle Vargas Con Calle Campo Elias Cc Nocciano Nivel Pb Local 2 Sector Casco Central, Ciudad Ojeda",
          "Ciudad": "Ciudad Ojeda, Zulia",
          "Horario": "Lunes: 08:00 AM - 04:30 PM, Martes: 08:00 AM - 04:30 PM, Miercoles: 08:00 AM - 04:30 PM, Jueves: 08:00 AM - 04:30 PM, Viernes: 08:00 AM - 04:30 PM, Sabado: 09:00 AM - 01:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04246105634 | 04246105628"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.200931,-71.310688",
        "lat": 10.200931,
        "lng": -71.310688
      },
      {
        "id": "zoom-zulia-zoom-ciudad-ojeda",
        "name": "ZOOM CIUDAD OJEDA",
        "code": "57",
        "address": "Sector Las Morochas, Av. Intercomunal Calle Cardon, Edificio Ojeda. Pb., Locales 6 Y 7.",
        "city": "Ciudad Ojeda, Zulia",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "501-966-6000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Ciudad_Ojeda/Zoom_Ciudad_Ojeda/",
        "details": {
          "Codigo": "57",
          "Direccion": "Sector Las Morochas, Av. Intercomunal Calle Cardon, Edificio Ojeda. Pb., Locales 6 Y 7.",
          "Ciudad": "Ciudad Ojeda, Zulia",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "501-966-6000",
          "Servicio(s)": "Envíos Casilleros Remesa Pago de Servicios y Recarga Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.195354,-71.321147",
        "lat": 10.195354,
        "lng": -71.321147
      },
      {
        "id": "zoom-zulia-zoom-edificio-d-maio",
        "name": "ZOOM EDIFICIO D MAIO",
        "code": "4154",
        "address": "Avenida Intercomunal Edificio Hotel D Maio Nivel Planta Baja, Local Nro 1 Sector El Dividive",
        "city": "Cabimas, Zulia",
        "schedule": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
        "phones": [
          "04246687655",
          "04246105634"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Cabimas/Zoom_Edificio_D_Maio/",
        "details": {
          "Codigo": "4154",
          "Direccion": "Avenida Intercomunal Edificio Hotel D Maio Nivel Planta Baja, Local Nro 1 Sector El Dividive",
          "Ciudad": "Cabimas, Zulia",
          "Horario": "Lunes: 08:00 AM - 05:00 PMMartes: 08:00 AM - 05:00 PMMiercoles: 08:00 AM - 05:00 PMJueves: 08:00 AM - 05:00 PMViernes: 08:00 AM - 05:00 PMSabado: CerradoDomingo: Cerrado",
          "Telefono(s)": "04246687655 | 04246105634",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes",
          "Lunes": "08:00 AM - 05:00 PM",
          "Martes": "08:00 AM - 05:00 PM",
          "Miercoles": "08:00 AM - 05:00 PM",
          "Jueves": "08:00 AM - 05:00 PM",
          "Viernes": "08:00 AM - 05:00 PM",
          "Sabado": "Cerrado",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.394267,-71.442757",
        "lat": 10.394267,
        "lng": -71.442757
      },
      {
        "id": "zoom-zulia-zoom-el-venado",
        "name": "ZOOM EL VENADO",
        "code": "4056",
        "address": "Centro Comercial De Dos Plantas Vera Cruz Carretera Lara -zulia Local S/n P.b. Pasillo Principal No. 06,sector Casco Central",
        "city": "El Venado, Zulia",
        "schedule": "Lunes: 07:30 AM - 05:00 PM, Martes: 07:30 AM - 05:00 PM, Miercoles: 07:30 AM - 05:00 PM, Jueves: 07:30 AM - 05:00 PM, Viernes: 07:30 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
        "phones": [
          "04246893212"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/El_Venado/Zoom_El_Venado/",
        "details": {
          "Codigo": "4056",
          "Direccion": "Centro Comercial De Dos Plantas Vera Cruz Carretera Lara -zulia Local S/n P.b. Pasillo Principal No. 06,sector Casco Central",
          "Ciudad": "El Venado, Zulia",
          "Horario": "Lunes: 07:30 AM - 05:00 PM, Martes: 07:30 AM - 05:00 PM, Miercoles: 07:30 AM - 05:00 PM, Jueves: 07:30 AM - 05:00 PM, Viernes: 07:30 AM - 05:00 PM, Sabado: 08:00 AM - 05:00 PM, Domingo: Cerrado",
          "Telefono(s)": "04246893212"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.069117,-70.925929",
        "lat": 10.069117,
        "lng": -70.925929
      },
      {
        "id": "zoom-zulia-zoom-la-concepcion",
        "name": "ZOOM LA CONCEPCION",
        "code": "2350",
        "address": "Sector Los Lirios La Concepcion, (los Teques), Av. Principal, Local Nro. S/n.",
        "city": "La Concepcion, Zulia",
        "schedule": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04246112096"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/La_Concepcion/Zoom_La_Concepcion/",
        "details": {
          "Codigo": "2350",
          "Direccion": "Sector Los Lirios La Concepcion, (los Teques), Av. Principal, Local Nro. S/n.",
          "Ciudad": "La Concepcion, Zulia",
          "Horario": "Lunes: 08:00 AM - 04:00 PM, Martes: 08:00 AM - 04:00 PM, Miercoles: 08:00 AM - 04:00 PM, Jueves: 08:00 AM - 04:00 PM, Viernes: 08:00 AM - 04:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04246112096",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.617194,-71.843060",
        "lat": 10.617194,
        "lng": -71.84306
      },
      {
        "id": "zoom-zulia-zoom-la-villa-del-rosario",
        "name": "ZOOM LA VILLA DEL ROSARIO",
        "code": "2052",
        "address": "Sector Casco Central La Villa Del Rosario, Av. N°. 18 De Octubre, Local N°. 18-13.",
        "city": "Villa Del Rosario, Zulia",
        "schedule": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "02634510856"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Villa_Del_Rosario/Zoom_La_Villa_Del_Rosario/",
        "details": {
          "Codigo": "2052",
          "Direccion": "Sector Casco Central La Villa Del Rosario, Av. N°. 18 De Octubre, Local N°. 18-13.",
          "Ciudad": "Villa Del Rosario, Zulia",
          "Horario": "Lunes: 08:00 AM - 05:00 PM, Martes: 08:00 AM - 05:00 PM, Miercoles: 08:00 AM - 05:00 PM, Jueves: 08:00 AM - 05:00 PM, Viernes: 08:00 AM - 05:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "02634510856",
          "Servicio(s)": "Envíos Casilleros Retirar por Oficina"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.326439,-72.317960",
        "lat": 10.326439,
        "lng": -72.31796
      },
      {
        "id": "zoom-zulia-zoom-machiques",
        "name": "ZOOM MACHIQUES",
        "code": "4025",
        "address": "Av Artes Entre Calle La Marina Y Calle El Carmen Casa Nro S/n, Machiques",
        "city": "Machiques, Zulia",
        "schedule": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04127939071"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Machiques/Zoom_Machiques/",
        "details": {
          "Codigo": "4025",
          "Direccion": "Av Artes Entre Calle La Marina Y Calle El Carmen Casa Nro S/n, Machiques",
          "Ciudad": "Machiques, Zulia",
          "Horario": "Lunes: 08:00 AM - 12:00 PM, Martes: 08:00 AM - 12:00 PM, Miercoles: 08:00 AM - 12:00 PM, Jueves: 08:00 AM - 12:00 PM, Viernes: 08:00 AM - 12:00 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04127939071"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.059495,-72.558333",
        "lat": 10.059495,
        "lng": -72.558333
      },
      {
        "id": "zoom-zulia-zoom-mene-grande",
        "name": "ZOOM MENE GRANDE",
        "code": "4099",
        "address": "Mene Grande - La Linea",
        "city": "Mene Grande, Zulia",
        "schedule": "Lunes: 08:00 AM - 11:30 PM, Martes: 08:00 AM - 11:30 PM, Miercoles: 08:00 AM - 11:30 PM, Jueves: 08:00 AM - 11:30 PM, Viernes: 08:00 AM - 11:30 PM, Sabado: Cerrado, Domingo: Cerrado",
        "phones": [
          "04146798576"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Mene_Grande/Zoom_Mene_Grande/",
        "details": {
          "Codigo": "4099",
          "Direccion": "Mene Grande - La Linea",
          "Ciudad": "Mene Grande, Zulia",
          "Horario": "Lunes: 08:00 AM - 11:30 PM, Martes: 08:00 AM - 11:30 PM, Miercoles: 08:00 AM - 11:30 PM, Jueves: 08:00 AM - 11:30 PM, Viernes: 08:00 AM - 11:30 PM, Sabado: Cerrado, Domingo: Cerrado",
          "Telefono(s)": "04146798576",
          "Servicios en este Agente Autorizado": "Un servicio",
          "Asistencias adicionales": "Rampa para minusvalidos",
          "Social": "@something +58424 555 55 55"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.817108,-70.930588",
        "lat": 9.817108,
        "lng": -70.930588
      },
      {
        "id": "zoom-zulia-zoom-santa-barbara-del-zulia",
        "name": "ZOOM SANTA BARBARA DEL ZULIA",
        "code": "4149",
        "address": "Av Bolivar Cc Dorado Nivel P/b Local 02",
        "city": "Santa Barbara Del Zulia, Zulia",
        "schedule": "Lunes: 08:00 AM - 12:00 PMMartes: 08:00 AM - 12:00 PMMiercoles: 08:00 AM - 12:00 PMJueves: 08:00 AM - 12:00 PMViernes: 08:00 AM - 12:00 PMSabado: 08:00 AM - 12:00 PMDomingo: Cerrado",
        "phones": [
          "04247651784"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/ZOOM/Zulia/Santa_Barbara_Del_Zulia/Zoom_Santa_Barbara_Del_Zulia/",
        "details": {
          "Codigo": "4149",
          "Direccion": "Av Bolivar Cc Dorado Nivel P/b Local 02",
          "Ciudad": "Santa Barbara Del Zulia, Zulia",
          "Horario": "Lunes: 08:00 AM - 12:00 PMMartes: 08:00 AM - 12:00 PMMiercoles: 08:00 AM - 12:00 PMJueves: 08:00 AM - 12:00 PMViernes: 08:00 AM - 12:00 PMSabado: 08:00 AM - 12:00 PMDomingo: Cerrado",
          "Telefono(s)": "04247651784",
          "Servicio(s)": "Envío Nacional Casillero Internacional Envío Internacional Casillero Nacional Envío Nacional COD Retirar por Oficina",
          "Días de Atención": "Lunes Martes Miercoles Jueves Viernes Sabado",
          "Lunes": "08:00 AM - 12:00 PM",
          "Martes": "08:00 AM - 12:00 PM",
          "Miercoles": "08:00 AM - 12:00 PM",
          "Jueves": "08:00 AM - 12:00 PM",
          "Viernes": "08:00 AM - 12:00 PM",
          "Sabado": "08:00 AM - 12:00 PM",
          "Domingo": "Cerrado"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.000042,-71.909905",
        "lat": 9.000042,
        "lng": -71.909905
      }
    ]
  },
  "domesa": {
    "#": [],
    "Anzoategui": [
      {
        "id": "domesa-anzoategui-aa-0646-rid-soluciones-10-0-1-13-c-a",
        "name": "AA 0646 RID SOLUCIONES 10 0 1 13, C.A.",
        "code": "33198",
        "address": "Av. Fernando De PeÑalver, Local S/n, Nivel Pb, Sector Buenos Aires.",
        "city": "Puerto Piritu, Anzoátegui",
        "schedule": "No Disponible",
        "phones": [
          "(0281) 4410885"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Anzoategui/Puerto_Piritu/Aa_0646_Rid_Soluciones_10_0_1_13_Ca/",
        "details": {
          "Codigo": "33198",
          "Direccion": "Av. Fernando De PeÑalver, Local S/n, Nivel Pb, Sector Buenos Aires.",
          "Ciudad": "Puerto Piritu, Anzoátegui",
          "Horario": "No Disponible",
          "Telefono(s)": "(0281) 4410885"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.053876,-65.03865",
        "lat": 10.053876,
        "lng": -65.03865
      },
      {
        "id": "domesa-anzoategui-aa-1058-cotelca-plus-c-a",
        "name": "AA 1058 COTELCA PLUS+ C.A.",
        "code": "37128",
        "address": "Sector Casco Central, Avenida Paseo Colon, Hotel Rasil, Nivel Pb, Oficina 2.",
        "city": "Puerto La Cruz, Anzoátegui",
        "schedule": "No Disponible",
        "phones": [
          "(0281) 2650804",
          "(0424) 8419091"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Anzoategui/Puerto_La_Cruz/Aa_1058_Cotelca_Plus__Ca/",
        "details": {
          "Codigo": "37128",
          "Direccion": "Sector Casco Central, Avenida Paseo Colon, Hotel Rasil, Nivel Pb, Oficina 2.",
          "Ciudad": "Puerto La Cruz, Anzoátegui",
          "Horario": "No Disponible",
          "Telefono(s)": "(0281) 2650804 | (0424) 8419091"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.219011,-64.640745",
        "lat": 10.219011,
        "lng": -64.640745
      },
      {
        "id": "domesa-anzoategui-oc-455-oficina-comercial-puerto-la-cruz",
        "name": "OC 455 OFICINA COMERCIAL PUERTO LA CRUZ",
        "code": "33195",
        "address": "Avenida Intercomunal, Sector Las Garzas, Calle La Gaviota, Galpones 4a Y 4b.",
        "city": "Lecherias, Anzoátegui",
        "schedule": "No Disponible",
        "phones": [
          "(0281) 2861847",
          "(0281) 2865208"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Anzoategui/Lecherias/Oc_455_Oficina_Comercial_Puerto_La_Cruz/",
        "details": {
          "Codigo": "33195",
          "Direccion": "Avenida Intercomunal, Sector Las Garzas, Calle La Gaviota, Galpones 4a Y 4b.",
          "Ciudad": "Lecherias, Anzoátegui",
          "Horario": "No Disponible",
          "Telefono(s)": "(0281) 2861847 | (0281) 2865208"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.181851,-64.667018",
        "lat": 10.181851,
        "lng": -64.667018
      }
    ],
    "Aragua": [
      {
        "id": "domesa-aragua-aa-0070-alai-express-c-a",
        "name": "AA 0070 ALAI EXPRESS, C.A.",
        "code": "37118",
        "address": "Sector San Ignacio, Calle MariÑo Sur, Parroquia AndrÉs Eloy Blanco, Local N°193. Frente A Dhl.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0414) 1476213"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Maracay/Aa_0070__Alai_Express_Ca/",
        "details": {
          "Codigo": "37118",
          "Direccion": "Sector San Ignacio, Calle MariÑo Sur, Parroquia AndrÉs Eloy Blanco, Local N°193. Frente A Dhl.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0414) 1476213"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.239253,-67.605266",
        "lat": 10.239253,
        "lng": -67.605266
      },
      {
        "id": "domesa-aragua-aa-0251-inversiones-fja-express-c-a",
        "name": "AA 0251 INVERSIONES FJA EXPRESS, C.A.",
        "code": "33562",
        "address": "Sector Las Vegas, C.c. EstaciÓn De Servicio Las Vegas, Nivel Pb, N°1.",
        "city": "Cagua, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0244) 3966106",
          "(0414) 2957744"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Cagua/Aa_0251_Inversiones_Fja_Express_Ca/",
        "details": {
          "Codigo": "33562",
          "Direccion": "Sector Las Vegas, C.c. EstaciÓn De Servicio Las Vegas, Nivel Pb, N°1.",
          "Ciudad": "Cagua, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0244) 3966106 | (0414) 2957744"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.182321,-67.468869",
        "lat": 10.182321,
        "lng": -67.468869
      },
      {
        "id": "domesa-aragua-aa-0351-ciudad-de-comunicaciones-c-a",
        "name": "AA 0351 CIUDAD DE COMUNICACIONES, C.A.",
        "code": "33222",
        "address": "La Encrucijada, Carretera Nacional, C.c. Paseo, Los Laureles, Local N°4, Nivel Pb.",
        "city": "Turmero, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0244) 3957879"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Turmero/Aa_0351_Ciudad_De_Comunicaciones_Ca/",
        "details": {
          "Codigo": "33222",
          "Direccion": "La Encrucijada, Carretera Nacional, C.c. Paseo, Los Laureles, Local N°4, Nivel Pb.",
          "Ciudad": "Turmero, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0244) 3957879"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.202455,-67.471838",
        "lat": 10.202455,
        "lng": -67.471838
      },
      {
        "id": "domesa-aragua-aa-0373-inversiones-dragonfly-2017-c-a",
        "name": "AA 0373 INVERSIONES DRAGONFLY 2017, C.A.",
        "code": "33559",
        "address": "Calle Alas Con Independencia, Local N°32-a, Nivel Pb.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0243) 2471106",
          "(0424) 3088434"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Maracay/Aa_0373_Inversiones_Dragonfly_2017_Ca/",
        "details": {
          "Codigo": "33559",
          "Direccion": "Calle Alas Con Independencia, Local N°32-a, Nivel Pb.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0243) 2471106 | (0424) 3088434"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.242775,-67.595197",
        "lat": 10.242775,
        "lng": -67.595197
      },
      {
        "id": "domesa-aragua-aa-0493-inversiones-seven-group-c-a",
        "name": "AA 0493 INVERSIONES SEVEN GROUP, C.A.",
        "code": "37548",
        "address": "Sec. Los Olivos, Av. Casanova Godoy, C.c Unicentro, Piso 1, N° L-1-116.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 3464759"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Maracay/Aa_0493_Inversiones_Seven_Group_Ca/",
        "details": {
          "Codigo": "37548",
          "Direccion": "Sec. Los Olivos, Av. Casanova Godoy, C.c Unicentro, Piso 1, N° L-1-116.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 3464759"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.254018,-67.582296",
        "lat": 10.254018,
        "lng": -67.582296
      },
      {
        "id": "domesa-aragua-aa-0720-inversiones-roalgi-c-a",
        "name": "AA 0720 INVERSIONES ROALGI, C.A.",
        "code": "33224",
        "address": "Barrio Independencia Calle C, Local N°11, Parroquia Madre Maria De San Jose, Al Frente Del C.c. El Global.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0243) 2321636",
          "(0243) 2370045",
          "(0424) 3077590"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Maracay/Aa_0720_Inversiones_Roalgi_Ca/",
        "details": {
          "Codigo": "33224",
          "Direccion": "Barrio Independencia Calle C, Local N°11, Parroquia Madre Maria De San Jose, Al Frente Del C.c. El Global.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0243) 2321636 | (0243) 2370045 | (0424) 3077590"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.247574,-67.579874",
        "lat": 10.247574,
        "lng": -67.579874
      },
      {
        "id": "domesa-aragua-aa-0845-distribuidora-ss-35-c-a",
        "name": "AA 0845 DISTRIBUIDORA SS 35, C.A.",
        "code": "33231",
        "address": "Avenida Victoria, C.c. Cilento, Local N°7, Nivel Pb, Sector Nueva Victoria.",
        "city": "Victoria, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0244) 3230116"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Victoria/Aa_0845_Distribuidora_Ss_35_Ca/",
        "details": {
          "Codigo": "33231",
          "Direccion": "Avenida Victoria, C.c. Cilento, Local N°7, Nivel Pb, Sector Nueva Victoria.",
          "Ciudad": "Victoria, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0244) 3230116"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.22796,-67.322142",
        "lat": 10.22796,
        "lng": -67.322142
      },
      {
        "id": "domesa-aragua-aa-0860-soluciones-mdm-c-a",
        "name": "AA 0860 SOLUCIONES MDM, C.A.",
        "code": "33232",
        "address": "Calle Principal, C.c. Villa Hermosa, Local N°14, Nivel Pb, Sector Centro.",
        "city": "Villa De Cura, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0244) 4006003",
          "(0426) 2331176"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Villa_De_Cura/Aa_0860_Soluciones_Mdm_Ca/",
        "details": {
          "Codigo": "33232",
          "Direccion": "Calle Principal, C.c. Villa Hermosa, Local N°14, Nivel Pb, Sector Centro.",
          "Ciudad": "Villa De Cura, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0244) 4006003 | (0426) 2331176"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.038162,-67.489916",
        "lat": 10.038162,
        "lng": -67.489916
      },
      {
        "id": "domesa-aragua-aa-0909-encomiendas-team-work-c-a",
        "name": "AA 0909 ENCOMIENDAS TEAM WORK, C.A.",
        "code": "37148",
        "address": "C.c. Las Torres, Calle BoyacÁ C/c San Juan, Local 6b, Nivel Pb, Diagonal A La Caja Regional Del Ivss.",
        "city": "Cagua, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0244) 3958536"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Cagua/Aa_0909_Encomiendas_Team_Work_Ca/",
        "details": {
          "Codigo": "37148",
          "Direccion": "C.c. Las Torres, Calle BoyacÁ C/c San Juan, Local 6b, Nivel Pb, Diagonal A La Caja Regional Del Ivss.",
          "Ciudad": "Cagua, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0244) 3958536 | (0244) 3958536"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.185666,-67.459510",
        "lat": 10.185666,
        "lng": -67.45951
      },
      {
        "id": "domesa-aragua-aa-0937-envios-carabobo-c-a",
        "name": "AA 0937 ENVIOS CARABOBO, C.A.",
        "code": "37558",
        "address": "Sector Centro, Calle Carabobo, Norte C/c Rivas, C.c. Lavieri, Local N°1, Nivel Pb.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0243) 2461272"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Maracay/Aa_0937_Envios_Carabobo_Ca/",
        "details": {
          "Codigo": "37558",
          "Direccion": "Sector Centro, Calle Carabobo, Norte C/c Rivas, C.c. Lavieri, Local N°1, Nivel Pb.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0243) 2461272"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.247642,-67.579918",
        "lat": 10.247642,
        "lng": -67.579918
      },
      {
        "id": "domesa-aragua-aa-1086-inversiones-fajang-c-a",
        "name": "AA 1086 INVERSIONES FAJANG, C.A.",
        "code": "37132",
        "address": "Manzana 25, Local N° 28, Fundacion Mendoza, Av Fuerzas AÉreas, Girardot Jose Casanova Godoy.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 4324319"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Aragua/Maracay/Aa_1086_Inversiones_Fajang_Ca/",
        "details": {
          "Codigo": "37132",
          "Direccion": "Manzana 25, Local N° 28, Fundacion Mendoza, Av Fuerzas AÉreas, Girardot Jose Casanova Godoy.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 4324319"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.232224,-67.587482",
        "lat": 10.232224,
        "lng": -67.587482
      }
    ],
    "Barinas": [
      {
        "id": "domesa-barinas-aa-0072-corporacion-industrial-sierra-nevada-c-a",
        "name": "AA 0072 CORPORACION INDUSTRIAL SIERRA NEVADA, C.A.",
        "code": "37114",
        "address": "Calle Principal, Local S/n, Sector Centro, A 100 Metros De La Estacion Policial.",
        "city": "Capitanejo, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "(0416) 7567125"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Barinas/Capitanejo/Aa_0072_Corporacion_Industrial_Sierra_Nevada_Ca/",
        "details": {
          "Codigo": "37114",
          "Direccion": "Calle Principal, Local S/n, Sector Centro, A 100 Metros De La Estacion Policial.",
          "Ciudad": "Capitanejo, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "(0416) 7567125"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.004299,-70.982966",
        "lat": 8.004299,
        "lng": -70.982966
      },
      {
        "id": "domesa-barinas-aa-0852-inversiones-pedraza-master-c-a",
        "name": "AA 0852 INVERSIONES PEDRAZA MASTER, C.A.",
        "code": "33241",
        "address": "Avenida 4 Entre Calles 14 Y 15, Casa S/n, Nivel Pb, Sector Centro.",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "(0414) 5689706"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Barinas/Barinas/Aa_0852_Inversiones_Pedraza_Master_Ca/",
        "details": {
          "Codigo": "33241",
          "Direccion": "Avenida 4 Entre Calles 14 Y 15, Casa S/n, Nivel Pb, Sector Centro.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "(0414) 5689706"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.355402,-70.573704",
        "lat": 8.355402,
        "lng": -70.573704
      },
      {
        "id": "domesa-barinas-aa-1012-global-ja-servicios-c-a",
        "name": "AA 1012 GLOBAL JA SERVICIOS, C.A.",
        "code": "37122",
        "address": "Sector Villa Nueva, Av. Intercomunal Rafael Roche, Hotel Cacao Suites, Local 1.",
        "city": "Barinitas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 1531302"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Barinas/Barinitas/Aa_1012_Global_Ja_Servicios_Ca/",
        "details": {
          "Codigo": "37122",
          "Direccion": "Sector Villa Nueva, Av. Intercomunal Rafael Roche, Hotel Cacao Suites, Local 1.",
          "Ciudad": "Barinitas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 1531302"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.76278,-70.4097",
        "lat": 8.76278,
        "lng": -70.4097
      },
      {
        "id": "domesa-barinas-aa-1029-serviexpress-speed-c-a",
        "name": "AA 1029 SERVIEXPRESS SPEED, C.A.",
        "code": "37126",
        "address": "Avenida 23 De Enero Con Avenida Guiacaipuro, C.c. Forum, Local 1-c, Nivel Pb, Sector La Floresta.",
        "city": "Barinas, Barinas",
        "schedule": "No Disponible",
        "phones": [
          "(0273) 5523533",
          "(0414) 0711259"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Barinas/Barinas/Aa_1029_Serviexpress_Speed_Ca/",
        "details": {
          "Codigo": "37126",
          "Direccion": "Avenida 23 De Enero Con Avenida Guiacaipuro, C.c. Forum, Local 1-c, Nivel Pb, Sector La Floresta.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "No Disponible",
          "Telefono(s)": "(0273) 5523533 | (0414) 0711259"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.621139,-70.231718",
        "lat": 8.621139,
        "lng": -70.231718
      }
    ],
    "Bolivar": [
      {
        "id": "domesa-bolivar-aa-0609-servicios-generales-orinoco-c-a",
        "name": "AA 0609 SERVICIOS GENERALES ORINOCO, C.A.",
        "code": "33246",
        "address": "Av Guayana Con Calle Nekuima, C.c. Ciudad Alta Vista, Nivel 1, Local 42-54.",
        "city": "Puerto Ordaz, Bolívar",
        "schedule": "No Disponible",
        "phones": [
          "(0286) 5143039"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Bolivar/Puerto_Ordaz/Aa_0609_Servicios_Generales_Orinoco_Ca/",
        "details": {
          "Codigo": "33246",
          "Direccion": "Av Guayana Con Calle Nekuima, C.c. Ciudad Alta Vista, Nivel 1, Local 42-54.",
          "Ciudad": "Puerto Ordaz, Bolívar",
          "Horario": "No Disponible",
          "Telefono(s)": "(0286) 5143039"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.294633,-62.7335",
        "lat": 8.294633,
        "lng": -62.7335
      },
      {
        "id": "domesa-bolivar-aa-0732-unienvios-c-a",
        "name": "AA 0732 UNIENVIOS, C.A.",
        "code": "33247",
        "address": "Avenida Siegart C/c Avenida Republica, Edif. R.c Taguapire, Local N° 4, Nivel Pb, Sector Negro Primero.",
        "city": "Ciudad Bolivar, Bolívar",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 9717376",
          "(0285) 6543341"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Bolivar/Ciudad_Bolivar/Aa_0732_Unienvios_Ca/",
        "details": {
          "Codigo": "33247",
          "Direccion": "Avenida Siegart C/c Avenida Republica, Edif. R.c Taguapire, Local N° 4, Nivel Pb, Sector Negro Primero.",
          "Ciudad": "Ciudad Bolivar, Bolívar",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 9717376 | (0285) 6543341"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.125775,-63.551371",
        "lat": 8.125775,
        "lng": -63.551371
      },
      {
        "id": "domesa-bolivar-oc-450-oficina-comercial-puerto-ordaz",
        "name": "OC 450 OFICINA COMERCIAL PUERTO ORDAZ",
        "code": "33245",
        "address": "Calle Caicara, Manzana N° 10, Local N° 1, Sector Castillito, Frente A La Agencia Del Sur.",
        "city": "Puerto Ordaz, Bolívar",
        "schedule": "No Disponible",
        "phones": [
          "(0286) 9222778"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Bolivar/Puerto_Ordaz/Oc_450_Oficina_Comercial_Puerto_Ordaz/",
        "details": {
          "Codigo": "33245",
          "Direccion": "Calle Caicara, Manzana N° 10, Local N° 1, Sector Castillito, Frente A La Agencia Del Sur.",
          "Ciudad": "Puerto Ordaz, Bolívar",
          "Horario": "No Disponible",
          "Telefono(s)": "(0286) 9222778"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.298333,-62.721944",
        "lat": 8.298333,
        "lng": -62.721944
      }
    ],
    "Carabobo": [
      {
        "id": "domesa-carabobo-aa-0076-vsg-express-c-a",
        "name": "AA 0076 VSG EXPRESS, C.A.",
        "code": "33256",
        "address": "Avenida Bolivar De Naguanagua, C/c Calle 23 De Enero, N° Civico 191-219, Local N°3, Nivel Pb, Naguanagua.",
        "city": "Naguanagua, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "(0241) 8675359",
          "(0414) 1485942"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Carabobo/Naguanagua/Aa_0076_Vsg_Express_Ca/",
        "details": {
          "Codigo": "33256",
          "Direccion": "Avenida Bolivar De Naguanagua, C/c Calle 23 De Enero, N° Civico 191-219, Local N°3, Nivel Pb, Naguanagua.",
          "Ciudad": "Naguanagua, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0241) 8675359 | (0414) 1485942"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.264356,-68.015507",
        "lat": 10.264356,
        "lng": -68.015507
      },
      {
        "id": "domesa-carabobo-aa-0201-logistica-de-envio-express-c-a",
        "name": "AA 0201 LOGISTICA DE ENVIO EXPRESS, C.A.",
        "code": "33576",
        "address": "Av. Los Guayos, Edif. El Roble 94-85, Local N°5, Nivel Pb.",
        "city": "Los Guayos, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "(0241) 8774396",
          "(0424) 4087313"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Carabobo/Los_Guayos/Aa_0201_Logistica_De_Envio_Express_Ca/",
        "details": {
          "Codigo": "33576",
          "Direccion": "Av. Los Guayos, Edif. El Roble 94-85, Local N°5, Nivel Pb.",
          "Ciudad": "Los Guayos, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0241) 8774396 | (0424) 4087313"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.189959,-67.937176",
        "lat": 10.189959,
        "lng": -67.937176
      },
      {
        "id": "domesa-carabobo-aa-0940-inversiones-rg-gj-c-a",
        "name": "AA 0940 INVERSIONES RG & GJ, C.A.",
        "code": "33276",
        "address": "Calle Augusto Brandt, C.c. Cumboto, Local N°4, Nivel Pb, Urb Cumboto.",
        "city": "Puerto Cabello, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "(0242) 3650433",
          "(0242) 3640777"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Carabobo/Puerto_Cabello/Aa_0940_Inversiones_Rg__Gj_Ca/",
        "details": {
          "Codigo": "33276",
          "Direccion": "Calle Augusto Brandt, C.c. Cumboto, Local N°4, Nivel Pb, Urb Cumboto.",
          "Ciudad": "Puerto Cabello, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0242) 3650433 | (0242) 3640777"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.47362,-68.035408",
        "lat": 10.47362,
        "lng": -68.035408
      },
      {
        "id": "domesa-carabobo-aa-0998-distribuidora-fyg-c-a",
        "name": "AA 0998 DISTRIBUIDORA FYG, C.A.",
        "code": "37150",
        "address": "Calle 06, Urb. Banco Obrero Nuevo, Parroquia MorÓn, Casa Nro 21, Local 1. Moron.",
        "city": "Morón, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 0555047",
          "(0412) 4760031"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Carabobo/Moron/Aa_0998_Distribuidora_Fyg_Ca/",
        "details": {
          "Codigo": "37150",
          "Direccion": "Calle 06, Urb. Banco Obrero Nuevo, Parroquia MorÓn, Casa Nro 21, Local 1. Moron.",
          "Ciudad": "Morón, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 0555047 | (0412) 4760031"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.480207,-68.205506",
        "lat": 10.480207,
        "lng": -68.205506
      },
      {
        "id": "domesa-carabobo-aa-1011-as-tu-aliado-c-a",
        "name": "AA 1011 AS TU ALIADO, C.A.",
        "code": "37120",
        "address": "C.c. Profesional Plaza, Planta Nivel Galeria Plaza, Nivel P.b, Local 29m-2.",
        "city": "Puerto Cabello, Carabobo",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 4026508",
          "(0412) 0218466"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Carabobo/Puerto_Cabello/Aa_1011_As_Tu_Aliado_Ca/",
        "details": {
          "Codigo": "37120",
          "Direccion": "C.c. Profesional Plaza, Planta Nivel Galeria Plaza, Nivel P.b, Local 29m-2.",
          "Ciudad": "Puerto Cabello, Carabobo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 4026508 | (0412) 0218466"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.469131,-68.008326",
        "lat": 10.469131,
        "lng": -68.008326
      }
    ],
    "Distrito_Capital": [
      {
        "id": "domesa-distrito-capital-aa-0104-inversiones-pdcg-c-a",
        "name": "AA 0104 INVERSIONES PDCG, C.A.",
        "code": "37600",
        "address": "California Norte, Av. Francisco De Miranda, Edif. Sara, Nivel Pb, Local N-04.",
        "city": "La California, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 7656411"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Distrito_Capital/La_California/Aa_0104_Inversiones_Pdcg_Ca/",
        "details": {
          "Codigo": "37600",
          "Direccion": "California Norte, Av. Francisco De Miranda, Edif. Sara, Nivel Pb, Local N-04.",
          "Ciudad": "La California, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 7656411"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483509,-66.819825",
        "lat": 10.483509,
        "lng": -66.819825
      },
      {
        "id": "domesa-distrito-capital-aa-0548-inversiones-payper-c-a",
        "name": "AA 0548 INVERSIONES PAYPER, C.A.",
        "code": "37100",
        "address": "Urb. Parque Humboldt, Av. RÍo Caura, C.c. Centro Empresarial La PirÁmide, Nivel Pb, Local 12.",
        "city": "Baruta, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 9715763",
          "(0414) 3203224"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Distrito_Capital/Baruta/Aa_0548_Inversiones_Payper_Ca/",
        "details": {
          "Codigo": "37100",
          "Direccion": "Urb. Parque Humboldt, Av. RÍo Caura, C.c. Centro Empresarial La PirÁmide, Nivel Pb, Local 12.",
          "Ciudad": "Baruta, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 9715763 | (0414) 3203224"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.453,-66.8712",
        "lat": 10.453,
        "lng": -66.8712
      },
      {
        "id": "domesa-distrito-capital-aa-1121-servicios-ejecutivos-envilog-c-a",
        "name": "AA 1121 SERVICIOS EJECUTIVOS ENVILOG, C.A.",
        "code": "37575",
        "address": "Av. Este 18, Entre Esq. De Regeneracion A Guay, Edif. Torre Puente Hierro, Nivel Pb, Local D.",
        "city": "Puente Hierro, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 5421352",
          "(0424) 2434094"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Distrito_Capital/Puente_Hierro/Aa_1121_Servicios_Ejecutivos_Envilog_Ca/",
        "details": {
          "Codigo": "37575",
          "Direccion": "Av. Este 18, Entre Esq. De Regeneracion A Guay, Edif. Torre Puente Hierro, Nivel Pb, Local D.",
          "Ciudad": "Puente Hierro, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 5421352 | (0424) 2434094"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.495002,-66.913522",
        "lat": 10.495002,
        "lng": -66.913522
      },
      {
        "id": "domesa-distrito-capital-aa-1139-officenet-inversiones-c-a",
        "name": "AA 1139 OFFICENET INVERSIONES, C.A.",
        "code": "37138",
        "address": "Av. Final Lomas De Prados Del Este, C.c Manzanares Plaza, Nivel Avenida, Local C3-07.",
        "city": "Manzanares, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 9450634",
          "(0414) 9169747"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Distrito_Capital/Manzanares/Aa_1139_Officenet_Inversiones_Ca/",
        "details": {
          "Codigo": "37138",
          "Direccion": "Av. Final Lomas De Prados Del Este, C.c Manzanares Plaza, Nivel Avenida, Local C3-07.",
          "Ciudad": "Manzanares, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 9450634 | (0414) 9169747"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.43355,-66.88325",
        "lat": 10.43355,
        "lng": -66.88325
      },
      {
        "id": "domesa-distrito-capital-aa-1204-terminal-privado-centro-oriente-sur-cos-c-a",
        "name": "AA 1204 TERMINAL PRIVADO CENTRO ORIENTE SUR (COS), C.A.",
        "code": "37583",
        "address": "Urb. Los Molinos, Calle Callejon Anauco, Terminal Privado Centro Oriente.",
        "city": "Los Molinos, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 8891494"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Distrito_Capital/Los_Molinos/Aa_1204_Terminal_Privado_Centro_Oriente_Sur_cos_Ca/",
        "details": {
          "Codigo": "37583",
          "Direccion": "Urb. Los Molinos, Calle Callejon Anauco, Terminal Privado Centro Oriente.",
          "Ciudad": "Los Molinos, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 8891494"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.488795,-66.941638",
        "lat": 10.488795,
        "lng": -66.941638
      },
      {
        "id": "domesa-distrito-capital-aa-1208-inversiones-mara-1005-c-a",
        "name": "AA 1208 INVERSIONES MARA 1005, C.A.",
        "code": "37590",
        "address": "Av. San Martin, C.c. Maracaibo, Nivel Pb, Local 13.",
        "city": "San Martín, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 1019485",
          "(0424) 1412082"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Distrito_Capital/San_Martin/Aa_1208_Inversiones_Mara_1005_Ca/",
        "details": {
          "Codigo": "37590",
          "Direccion": "Av. San Martin, C.c. Maracaibo, Nivel Pb, Local 13.",
          "Ciudad": "San Martín, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 1019485 | (0424) 1412082"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.493313,-66.935996",
        "lat": 10.493313,
        "lng": -66.935996
      }
    ],
    "Falcon": [
      {
        "id": "domesa-falcon-aa-0734-inversiones-turaca-c-a",
        "name": "AA 0734 INVERSIONES TURACA, C.A.",
        "code": "33323",
        "address": "Calle Zamora, Esquina Calle Colina, C.c. DoÑa Aixa, Local N°3, Nivel Pb.",
        "city": "Coro, Falcón",
        "schedule": "No Disponible",
        "phones": [
          "(0268) 4603508",
          "(0414) 5442714"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Falcon/Coro/Aa_0734_Inversiones_Turaca_Ca/",
        "details": {
          "Codigo": "33323",
          "Direccion": "Calle Zamora, Esquina Calle Colina, C.c. DoÑa Aixa, Local N°3, Nivel Pb.",
          "Ciudad": "Coro, Falcón",
          "Horario": "No Disponible",
          "Telefono(s)": "(0268) 4603508 | (0414) 5442714"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.410321,-69.67294",
        "lat": 11.410321,
        "lng": -69.67294
      },
      {
        "id": "domesa-falcon-aa-0757-il-poste-c-a",
        "name": "AA 0757 IL POSTE, C.A.",
        "code": "33324",
        "address": "Avenida Prolongacion Girardot C/c Las Flores, C.c. Ciudad Del Viento, Nivel Pb, Local Pb-33, Urb. Santa Irene, Carirubana.",
        "city": "Carirubana, Falcón",
        "schedule": "No Disponible",
        "phones": [
          "(0269) 4205764",
          "(0412) 7804854"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Falcon/Carirubana/Aa_0757_Il_Poste_Ca/",
        "details": {
          "Codigo": "33324",
          "Direccion": "Avenida Prolongacion Girardot C/c Las Flores, C.c. Ciudad Del Viento, Nivel Pb, Local Pb-33, Urb. Santa Irene, Carirubana.",
          "Ciudad": "Carirubana, Falcón",
          "Horario": "No Disponible",
          "Telefono(s)": "(0269) 4205764 | (0412) 7804854"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.690844,-70.186898",
        "lat": 11.690844,
        "lng": -70.186898
      }
    ],
    "Guarico": [
      {
        "id": "domesa-guarico-aa-0162-jym-multiservicios-c-a",
        "name": "AA 0162 JYM MULTISERVICIOS, C.A.",
        "code": "33330",
        "address": "Sector Centro, Calle Guasco, Calles Deleite Y Camaleones, Local N°64.",
        "city": "Valle De La Pascua, Guárico",
        "schedule": "No Disponible",
        "phones": [
          "(0235) 3421947",
          "(0412) 4121269"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Guarico/Valle_De_La_Pascua/Aa_0162_Jym_Multiservicios_Ca/",
        "details": {
          "Codigo": "33330",
          "Direccion": "Sector Centro, Calle Guasco, Calles Deleite Y Camaleones, Local N°64.",
          "Ciudad": "Valle De La Pascua, Guárico",
          "Horario": "No Disponible",
          "Telefono(s)": "(0235) 3421947 | (0412) 4121269"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.20801,-65.999999",
        "lat": 9.20801,
        "lng": -65.999999
      },
      {
        "id": "domesa-guarico-aa-0638-inversiones-llano-express-c-a",
        "name": "AA 0638 INVERSIONES LLANO EXPRESS, C.A.",
        "code": "33332",
        "address": "Calle Concordia Entre Calle 9 Y Calle Los Naranjos, Local N°2, Sector El Medano.",
        "city": "Zaraza, Guárico",
        "schedule": "No Disponible",
        "phones": [
          "(0238) 7624245"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Guarico/Zaraza/Aa_0638_Inversiones_Llano_Express_Ca/",
        "details": {
          "Codigo": "33332",
          "Direccion": "Calle Concordia Entre Calle 9 Y Calle Los Naranjos, Local N°2, Sector El Medano.",
          "Ciudad": "Zaraza, Guárico",
          "Horario": "No Disponible",
          "Telefono(s)": "(0238) 7624245"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.35076,-65.326122",
        "lat": 9.35076,
        "lng": -65.326122
      },
      {
        "id": "domesa-guarico-aa-1009-soluciones-mdm-c-a",
        "name": "AA 1009 SOLUCIONES MDM, C.A.",
        "code": "37560",
        "address": "Sector Centro, Av. BolÍvar, C.c. Via Venetto Boulevard, Local Lc-37, Nivel 2.",
        "city": "San Juan De Los Morros, Guárico",
        "schedule": "No Disponible",
        "phones": [
          "(0244) 3880904"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Guarico/San_Juan_De_Los_Morros/Aa_1009_Soluciones_Mdm_Ca/",
        "details": {
          "Codigo": "37560",
          "Direccion": "Sector Centro, Av. BolÍvar, C.c. Via Venetto Boulevard, Local Lc-37, Nivel 2.",
          "Ciudad": "San Juan De Los Morros, Guárico",
          "Horario": "No Disponible",
          "Telefono(s)": "(0244) 3880904"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.906729,-67.359914",
        "lat": 9.906729,
        "lng": -67.359914
      },
      {
        "id": "domesa-guarico-aa-1026-plataforma-digital-412-c-a",
        "name": "AA 1026 PLATAFORMA DIGITAL 412, C.A.",
        "code": "37563",
        "address": "Sector El Tranquero, Calle Zaraza, Edif. Aveiro, Nivel Pb, Local 09.",
        "city": "Tucupido, Guárico",
        "schedule": "No Disponible",
        "phones": [
          "(0238) 5520202"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Guarico/Tucupido/Aa_1026_Plataforma_Digital_412_Ca/",
        "details": {
          "Codigo": "37563",
          "Direccion": "Sector El Tranquero, Calle Zaraza, Edif. Aveiro, Nivel Pb, Local 09.",
          "Ciudad": "Tucupido, Guárico",
          "Horario": "No Disponible",
          "Telefono(s)": "(0238) 5520202"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.940373,-67.362341",
        "lat": 9.940373,
        "lng": -67.362341
      },
      {
        "id": "domesa-guarico-aa-1060-inficonex-c-a",
        "name": "AA 1060 INFICONEX, C.A.",
        "code": "37130",
        "address": "Sector Casco Central, Calle El Triunfo Cruce Con Calle Alegria, Local 3.",
        "city": "El Sombrero, Guárico",
        "schedule": "No Disponible",
        "phones": [
          "(0246) 6164045"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Guarico/El_Sombrero/Aa_1060_Inficonex_Ca/",
        "details": {
          "Codigo": "37130",
          "Direccion": "Sector Casco Central, Calle El Triunfo Cruce Con Calle Alegria, Local 3.",
          "Ciudad": "El Sombrero, Guárico",
          "Horario": "No Disponible",
          "Telefono(s)": "(0246) 6164045"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.383601,-67.053462",
        "lat": 9.383601,
        "lng": -67.053462
      }
    ],
    "Lara": [
      {
        "id": "domesa-lara-aa-0198-envios-zafiro-c-a",
        "name": "AA 0198 ENVIOS ZAFIRO, C.A.",
        "code": "33338",
        "address": "Calle 20 Con Carrera 21 Y 22, Local 21-103.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0251) 2315914"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_0198_Envios_Zafiro_Ca/",
        "details": {
          "Codigo": "33338",
          "Direccion": "Calle 20 Con Carrera 21 Y 22, Local 21-103.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0251) 2315914"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.069525,-69.311277",
        "lat": 10.069525,
        "lng": -69.311277
      },
      {
        "id": "domesa-lara-aa-0329-inversiones-ordica-c-a",
        "name": "AA 0329 INVERSIONES ORDICA, C.A.",
        "code": "33594",
        "address": "Calle Juan De Dios Ponte, C.c. Plaza La Cruz, Nivel Pb, Local Ml 02.",
        "city": "Cabudare, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 2506719"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Cabudare/Aa_0329_Inversiones_Ordica_Ca/",
        "details": {
          "Codigo": "33594",
          "Direccion": "Calle Juan De Dios Ponte, C.c. Plaza La Cruz, Nivel Pb, Local Ml 02.",
          "Ciudad": "Cabudare, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 2506719"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.034347,-69.238162",
        "lat": 10.034347,
        "lng": -69.238162
      },
      {
        "id": "domesa-lara-aa-0741-orosol-xxiii-c-a",
        "name": "AA 0741 OROSOL XXIII, C.A.",
        "code": "33342",
        "address": "Avenida Los Leones, C.c. Paris, Local N° 1-22, Nivel Pb.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0251) 2531741"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_0741_Orosol_Xxiii_Ca/",
        "details": {
          "Codigo": "33342",
          "Direccion": "Avenida Los Leones, C.c. Paris, Local N° 1-22, Nivel Pb.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0251) 2531741"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.067923,-69.287041",
        "lat": 10.067923,
        "lng": -69.287041
      },
      {
        "id": "domesa-lara-aa-0818-inversiones-mi-futuro-2015-cjmp-c-a",
        "name": "AA 0818 INVERSIONES MI FUTURO 2015 CJMP, C.A.",
        "code": "37146",
        "address": "Calle 9 Con Avenida 4 Y 5, Local S/n, Nivel Pb, Sector Centro De Quibor.",
        "city": "Quibor, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0253) 4910026"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Quibor/Aa_0818_Inversiones_Mi_Futuro_2015_Cjmp_Ca/",
        "details": {
          "Codigo": "37146",
          "Direccion": "Calle 9 Con Avenida 4 Y 5, Local S/n, Nivel Pb, Sector Centro De Quibor.",
          "Ciudad": "Quibor, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0253) 4910026"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.922448,-69.623173",
        "lat": 9.922448,
        "lng": -69.623173
      },
      {
        "id": "domesa-lara-aa-1027-real-courier-c-a",
        "name": "AA 1027 REAL COURIER, C.A.",
        "code": "37565",
        "address": "Zona Este, Av. Lara Con Cruce Av. Los Leones, C.c. Parque Real, Local 10, Nivel P-al.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0251) 2544900"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_1027_Real_Courier_Ca/",
        "details": {
          "Codigo": "37565",
          "Direccion": "Zona Este, Av. Lara Con Cruce Av. Los Leones, C.c. Parque Real, Local 10, Nivel P-al.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0251) 2544900"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.062496,-69.286019",
        "lat": 10.062496,
        "lng": -69.286019
      },
      {
        "id": "domesa-lara-aa-1074-inversiones-mi-futuro-2015-cjmp-c-a",
        "name": "AA 1074 INVERSIONES MI FUTURO 2015 CJMP, C.A.",
        "code": "37571",
        "address": "Sector Centro, Av. Fraternidad, Esq. Carrera N°18, C.c Torcaz, Nivel Pb.",
        "city": "El Tocuyo, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 9006415"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/El_Tocuyo/Aa_1074_Inversiones_Mi_Futuro_2015_Cjmp_Ca/",
        "details": {
          "Codigo": "37571",
          "Direccion": "Sector Centro, Av. Fraternidad, Esq. Carrera N°18, C.c Torcaz, Nivel Pb.",
          "Ciudad": "El Tocuyo, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 9006415"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.782702,-69.795093",
        "lat": 9.782702,
        "lng": -69.795093
      },
      {
        "id": "domesa-lara-aa-1122-distribuidora-jc-2023-c-a",
        "name": "AA 1122 DISTRIBUIDORA JC 2023, C.A.",
        "code": "37577",
        "address": "Sec. Centro, Carrera 17 Con Calle 31, Edif. Curarigua, Piso Pb.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 0587764"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_1122_Distribuidora_Jc_2023_Ca/",
        "details": {
          "Codigo": "37577",
          "Direccion": "Sec. Centro, Carrera 17 Con Calle 31, Edif. Curarigua, Piso Pb.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 0587764"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.063586,-69.322336",
        "lat": 10.063586,
        "lng": -69.322336
      },
      {
        "id": "domesa-lara-aa-1136-pack-box-s-a",
        "name": "AA 1136 PACK & BOX, S.A.",
        "code": "37579",
        "address": "Calle 15 Entre Av. 20 Y Carrera 21, Edif. Pino, Piso Pb, Oficina 2 - N°14-99.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0251) 2521854"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_1136_Pack__Box_Sa/",
        "details": {
          "Codigo": "37579",
          "Direccion": "Calle 15 Entre Av. 20 Y Carrera 21, Edif. Pino, Piso Pb, Oficina 2 - N°14-99.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0251) 2521854"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.06833,-69.306716",
        "lat": 10.06833,
        "lng": -69.306716
      },
      {
        "id": "domesa-lara-aa-1142-envios-2328-c-a",
        "name": "AA 1142 ENVIOS 2328, C.A.",
        "code": "37107",
        "address": "Av. Pedro Leon Torres Entre Calles 49 Y 50, C.c Venrol, Nivel Pb, Local B-11.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 5371437"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_1142_Envios_2328_Ca/",
        "details": {
          "Codigo": "37107",
          "Direccion": "Av. Pedro Leon Torres Entre Calles 49 Y 50, C.c Venrol, Nivel Pb, Local B-11.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 5371437"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.064441,-69.340359",
        "lat": 10.064441,
        "lng": -69.340359
      },
      {
        "id": "domesa-lara-aa-1200-conexiones-integrales-c-a",
        "name": "AA 1200 CONEXIONES INTEGRALES, C.A.",
        "code": "37646",
        "address": "Urb. Del Este, Av. Concordia, Diagonal Al C.c. Sambil.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0414) 5511066"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Aa_1200_Conexiones_Integrales_Ca/",
        "details": {
          "Codigo": "37646",
          "Direccion": "Urb. Del Este, Av. Concordia, Diagonal Al C.c. Sambil.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0414) 5511066"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.070255,-69.294108",
        "lat": 10.070255,
        "lng": -69.294108
      },
      {
        "id": "domesa-lara-oc-468-oficina-comercial-barquisimeto",
        "name": "OC 468 OFICINA COMERCIAL BARQUISIMETO",
        "code": "33340",
        "address": "Calle 29 Entre Carrera 14 Y 15, Ciudad Industrial, Galpon N° 14-57, Nivel Pb.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "(0251) 2329392",
          "(0251) 2325565"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Lara/Barquisimeto/Oc_468_Oficina_Comercial_Barquisimeto/",
        "details": {
          "Codigo": "33340",
          "Direccion": "Calle 29 Entre Carrera 14 Y 15, Ciudad Industrial, Galpon N° 14-57, Nivel Pb.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "(0251) 2329392 | (0251) 2325565"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.061312,-69.31974",
        "lat": 10.061312,
        "lng": -69.31974
      }
    ],
    "Merida": [
      {
        "id": "domesa-merida-aa-0120-inversiones-manroz-c-a",
        "name": "AA 0120 INVERSIONES MANROZ, C.A.",
        "code": "33616",
        "address": "Av. Principal El Campito, Edif. Laura, Local N°8, Nivel Pb.",
        "city": "Merida, Mérida",
        "schedule": "No Disponible",
        "phones": [
          "(0274) 4179999",
          "(0414)3003000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Merida/Merida/Aa_0120_Inversiones_Manroz_Ca/",
        "details": {
          "Codigo": "33616",
          "Direccion": "Av. Principal El Campito, Edif. Laura, Local N°8, Nivel Pb.",
          "Ciudad": "Merida, Mérida",
          "Horario": "No Disponible",
          "Telefono(s)": "(0274) 4179999 | (0414)3003000"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.597485,-71.151898",
        "lat": 8.597485,
        "lng": -71.151898
      },
      {
        "id": "domesa-merida-aa-0126-corporacion-los-duques-888-c-a",
        "name": "AA 0126 CORPORACION LOS DUQUES 888, C.A.",
        "code": "33356",
        "address": "Avenida Las Americas, C.c. MurachÍ, Iii Etapa, Oficina Nº5, Nivel Pb.",
        "city": "Merida, Mérida",
        "schedule": "No Disponible",
        "phones": [
          "(0274) 2632275",
          "(0416) 7730626"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Merida/Merida/Aa_0126_Corporacion_Los_Duques_888_Ca/",
        "details": {
          "Codigo": "33356",
          "Direccion": "Avenida Las Americas, C.c. MurachÍ, Iii Etapa, Oficina Nº5, Nivel Pb.",
          "Ciudad": "Merida, Mérida",
          "Horario": "No Disponible",
          "Telefono(s)": "(0274) 2632275 | (0416) 7730626"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.593971,-71.153033",
        "lat": 8.593971,
        "lng": -71.153033
      },
      {
        "id": "domesa-merida-aa-0613-audios-sonido-discoin-c-a",
        "name": "AA 0613 AUDIOS SONIDO DISCOIN, C.A.",
        "code": "33359",
        "address": "Av. 15 Con Calle 4, Edif. Mantilla, Local 3-47, Nivel P.b, Sector El Tamarindo. El Vigia.",
        "city": "El Vigia, Mérida",
        "schedule": "No Disponible",
        "phones": [
          "(0275) 5144600"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Merida/El_Vigia/Aa_0613_Audios_Sonido_Discoin_Ca/",
        "details": {
          "Codigo": "33359",
          "Direccion": "Av. 15 Con Calle 4, Edif. Mantilla, Local 3-47, Nivel P.b, Sector El Tamarindo. El Vigia.",
          "Ciudad": "El Vigia, Mérida",
          "Horario": "No Disponible",
          "Telefono(s)": "(0275) 5144600"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.619969,-71.647583",
        "lat": 8.619969,
        "lng": -71.647583
      },
      {
        "id": "domesa-merida-aa-1149-satelicel-c-a",
        "name": "AA 1149 SATELICEL C.A.",
        "code": "37104",
        "address": "Casco Central Av. Bolivar, C.c. La Calera, Local 6 Frente A La Plaza Bolivar.",
        "city": "Lagunillas, Mérida",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 0646250"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Merida/Lagunillas/Aa_1149_Satelicel_Ca/",
        "details": {
          "Codigo": "37104",
          "Direccion": "Casco Central Av. Bolivar, C.c. La Calera, Local 6 Frente A La Plaza Bolivar.",
          "Ciudad": "Lagunillas, Mérida",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 0646250"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.504957,-71.388940",
        "lat": 8.504957,
        "lng": -71.38894
      },
      {
        "id": "domesa-merida-oc-426-oficina-comercial-merida",
        "name": "OC 426 OFICINA COMERCIAL MÉRIDA",
        "code": "33358",
        "address": "Avenida Los Proceres, Zona Empresarial La Nonna, Local 3b.",
        "city": "Mérida, Mérida",
        "schedule": "No Disponible",
        "phones": [
          "(0274) 2631028",
          "(0274) 2636022"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Merida/Merida/Oc_426_Oficina_Comercial_MErida/",
        "details": {
          "Codigo": "33358",
          "Direccion": "Avenida Los Proceres, Zona Empresarial La Nonna, Local 3b.",
          "Ciudad": "Mérida, Mérida",
          "Horario": "No Disponible",
          "Telefono(s)": "(0274) 2631028 | (0274) 2636022"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.589716,-71.16008",
        "lat": 8.589716,
        "lng": -71.16008
      }
    ],
    "Miranda": [
      {
        "id": "domesa-miranda-aa-0071-comunicaciones-del-paseo-mirandino-c-a",
        "name": "AA 0071 COMUNICACIONES DEL PASEO MIRANDINO, C.A.",
        "code": "33367",
        "address": "Av. La Hoyada, C.c. Paseo Mirandino, Local N°34, Nivel Pb.",
        "city": "Los Teques, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 3643972"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Miranda/Los_Teques/Aa_0071_Comunicaciones_Del_Paseo_Mirandino_Ca/",
        "details": {
          "Codigo": "33367",
          "Direccion": "Av. La Hoyada, C.c. Paseo Mirandino, Local N°34, Nivel Pb.",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 3643972"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.345825,-67.041557",
        "lat": 10.345825,
        "lng": -67.041557
      },
      {
        "id": "domesa-miranda-aa-0084-tecsend-consulting-c-a",
        "name": "AA 0084 TECSEND CONSULTING, C.A.",
        "code": "33369",
        "address": "Avenida Principal El Ingenio, C.c. Parque Esmeralda, Local Pl-11, Nivel Pb.",
        "city": "Guatire, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "(0414) 9068022"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Miranda/Guatire/Aa_0084_Tecsend_Consulting_Ca/",
        "details": {
          "Codigo": "33369",
          "Direccion": "Avenida Principal El Ingenio, C.c. Parque Esmeralda, Local Pl-11, Nivel Pb.",
          "Ciudad": "Guatire, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "(0414) 9068022"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.475826,-66.559295",
        "lat": 10.475826,
        "lng": -66.559295
      },
      {
        "id": "domesa-miranda-aa-0124-inversiones-ling-thai-c-a",
        "name": "AA 0124 INVERSIONES LING THAI, C.A.",
        "code": "33520",
        "address": "Carretera Panamericana Km 25, Cruce Con Calle 24 De Junio, C.c. La Redoma, Nivel 2, Local N°15, Nivel Pb, Sector La Mata.",
        "city": "Los Teques, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "(0426) 6117298"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Miranda/Los_Teques/Aa_0124_Inversiones_Ling_Thai_Ca/",
        "details": {
          "Codigo": "33520",
          "Direccion": "Carretera Panamericana Km 25, Cruce Con Calle 24 De Junio, C.c. La Redoma, Nivel 2, Local N°15, Nivel Pb, Sector La Mata.",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "(0426) 6117298"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.338881,-67.038626",
        "lat": 10.338881,
        "lng": -67.038626
      },
      {
        "id": "domesa-miranda-aa-0186-sends-world-c-g-c-a",
        "name": "AA 0186 SENDS WORLD C.G, C.A.",
        "code": "33378",
        "address": "Kilometro 14, C.c. Los Castores, Nivel Pb.",
        "city": "San Antonio, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 3733882"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Miranda/San_Antonio/Aa_0186_Sends_World_Cg_Ca/",
        "details": {
          "Codigo": "33378",
          "Direccion": "Kilometro 14, C.c. Los Castores, Nivel Pb.",
          "Ciudad": "San Antonio, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 3733882"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.374074,-66.961175",
        "lat": 10.374074,
        "lng": -66.961175
      },
      {
        "id": "domesa-miranda-aa-0657-comunicaciones-delaluz-c-a",
        "name": "AA 0657 COMUNICACIONES DELALUZ, C.A.",
        "code": "33385",
        "address": "Calle Miquillen, Esq. Calle Carabobo, C.c. Luz Electrica, Nivel 1, Local 1-a.",
        "city": "Los Teques, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 3643088"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Miranda/Los_Teques/Aa_0657_Comunicaciones_Delaluz_Ca/",
        "details": {
          "Codigo": "33385",
          "Direccion": "Calle Miquillen, Esq. Calle Carabobo, C.c. Luz Electrica, Nivel 1, Local 1-a.",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 3643088"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.34282,-67.043089",
        "lat": 10.34282,
        "lng": -67.043089
      },
      {
        "id": "domesa-miranda-aa-1016-mundoferta-c-a",
        "name": "AA 1016 MUNDOFERTA, C.A.",
        "code": "37098",
        "address": "Urb. Club De Campo, Carretera Panamericana Km 16, C.c. Club De Campo, Local N°6, Nivel Pb.",
        "city": "San Antonio De Los Altos, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 3725544"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Miranda/San_Antonio_De_Los_Altos/Aa_1016_Mundoferta_Ca/",
        "details": {
          "Codigo": "37098",
          "Direccion": "Urb. Club De Campo, Carretera Panamericana Km 16, C.c. Club De Campo, Local N°6, Nivel Pb.",
          "Ciudad": "San Antonio De Los Altos, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 3725544"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.3704,-66.9807",
        "lat": 10.3704,
        "lng": -66.9807
      }
    ],
    "Monagas": [
      {
        "id": "domesa-monagas-oc-446-oficina-comercial-maturin",
        "name": "OC 446 OFICINA COMERCIAL MATURÍN",
        "code": "33546",
        "address": "Av. Raul Leoni, Cruce Alirio Ugarte Pelayo, Km. 1, Galpon Gava, Sector Bajo Guarapiche, Parroquia San Simon.",
        "city": "Maturin, Monagas",
        "schedule": "No Disponible",
        "phones": [
          "(0291) 6422535"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Monagas/Maturin/Oc_446_Oficina_Comercial_MaturIn/",
        "details": {
          "Codigo": "33546",
          "Direccion": "Av. Raul Leoni, Cruce Alirio Ugarte Pelayo, Km. 1, Galpon Gava, Sector Bajo Guarapiche, Parroquia San Simon.",
          "Ciudad": "Maturin, Monagas",
          "Horario": "No Disponible",
          "Telefono(s)": "(0291) 6422535"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.754313,-63.182663",
        "lat": 9.754313,
        "lng": -63.182663
      }
    ],
    "Nueva_Esparta": [
      {
        "id": "domesa-nueva-esparta-aa-0893-distribuciones-ramgia-c-a",
        "name": "AA 0893 DISTRIBUCIONES RAMGIA, C.A.",
        "code": "33424",
        "address": "Avenida Francisco Fajardo, C.c. Eco Center, Local E-1, Sector Conejeros Del Valle.",
        "city": "El Valle Del Espiritu Santo, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "(0414) 8212640"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Nueva_Esparta/El_Valle_Del_Espiritu_Santo/Aa_0893_Distribuciones_Ramgia_Ca/",
        "details": {
          "Codigo": "33424",
          "Direccion": "Avenida Francisco Fajardo, C.c. Eco Center, Local E-1, Sector Conejeros Del Valle.",
          "Ciudad": "El Valle Del Espiritu Santo, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "(0414) 8212640"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.97048,-63.865264",
        "lat": 10.97048,
        "lng": -63.865264
      },
      {
        "id": "domesa-nueva-esparta-aa-1207-enviexpress-mgta-c-a",
        "name": "AA 1207 ENVIEXPRESS MGTA, C.A.",
        "code": "37648",
        "address": "Av. 4 De Mayo, Local S/n, Nivel Pb, Sector Genoves.",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "No Disponible",
        "phones": [
          "(0416) 3275994"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Nueva_Esparta/Porlamar/Aa_1207_Enviexpress_Mgta_Ca/",
        "details": {
          "Codigo": "37648",
          "Direccion": "Av. 4 De Mayo, Local S/n, Nivel Pb, Sector Genoves.",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "No Disponible",
          "Telefono(s)": "(0416) 3275994"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.968431,-63.839554",
        "lat": 10.968431,
        "lng": -63.839554
      }
    ],
    "Portuguesa": [
      {
        "id": "domesa-portuguesa-aa-0644-envios-alsott-c-a",
        "name": "AA 0644 ENVIOS ALSOTT, C.A",
        "code": "37552",
        "address": "Barrio Curazao, Carrera 3 Con Esq. Calle 9, Nivel B, Local N°2.",
        "city": "Guanare, Portuguesa",
        "schedule": "No Disponible",
        "phones": [
          "(0416) 7567125"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Portuguesa/Guanare/Aa_0644_Envios_Alsott_Ca/",
        "details": {
          "Codigo": "37552",
          "Direccion": "Barrio Curazao, Carrera 3 Con Esq. Calle 9, Nivel B, Local N°2.",
          "Ciudad": "Guanare, Portuguesa",
          "Horario": "No Disponible",
          "Telefono(s)": "(0416) 7567125"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.047689,-69.746799",
        "lat": 9.047689,
        "lng": -69.746799
      },
      {
        "id": "domesa-portuguesa-aa-0819-m2-encomiendas-c-a",
        "name": "AA 0819 M2 ENCOMIENDAS, C.A.",
        "code": "33428",
        "address": "Sector Barrio America, Calle 26 Entre Av 39 Y 40, Local Nro S/n.",
        "city": "Araure, Portuguesa",
        "schedule": "No Disponible",
        "phones": [
          "(0414) 5556602"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Portuguesa/Araure/Aa_0819_M2_Encomiendas_Ca/",
        "details": {
          "Codigo": "33428",
          "Direccion": "Sector Barrio America, Calle 26 Entre Av 39 Y 40, Local Nro S/n.",
          "Ciudad": "Araure, Portuguesa",
          "Horario": "No Disponible",
          "Telefono(s)": "(0414) 5556602"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.562495,-69.213516",
        "lat": 9.562495,
        "lng": -69.213516
      }
    ],
    "Sucre": [
      {
        "id": "domesa-sucre-aa-0730-reyna-inversiones-c-a",
        "name": "AA 0730 REYNA INVERSIONES C.A.",
        "code": "37556",
        "address": "Parroquia MariÑo, Plaza Bolivar, Calle Colombia, Casa N°2, Nivel Pb.",
        "city": "Casanay, Sucre",
        "schedule": "No Disponible",
        "phones": [
          "(0294) 3411046",
          "(0414) 9945403"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Sucre/Casanay/Aa_0730_Reyna_Inversiones_Ca/",
        "details": {
          "Codigo": "37556",
          "Direccion": "Parroquia MariÑo, Plaza Bolivar, Calle Colombia, Casa N°2, Nivel Pb.",
          "Ciudad": "Casanay, Sucre",
          "Horario": "No Disponible",
          "Telefono(s)": "(0294) 3411046 | (0414) 9945403"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.501626,-63.417766",
        "lat": 10.501626,
        "lng": -63.417766
      },
      {
        "id": "domesa-sucre-oc-444-oficina-comercial-cumana",
        "name": "OC 444 OFICINA COMERCIAL CUMANÁ",
        "code": "37644",
        "address": "Calle Arismendi Con Av. Toledo, Frente Al Elevado, Antigua redoma Del Indio.",
        "city": "Cumaná, Sucre",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 1459061"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Sucre/Cumana/Oc_444_Oficina_Comercial_CumanA/",
        "details": {
          "Codigo": "37644",
          "Direccion": "Calle Arismendi Con Av. Toledo, Frente Al Elevado, Antigua redoma Del Indio.",
          "Ciudad": "Cumaná, Sucre",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 1459061"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.451476,-64.182302",
        "lat": 10.451476,
        "lng": -64.182302
      }
    ],
    "Tachira": [
      {
        "id": "domesa-tachira-aa-0736-casa-digital-servicios-c-a",
        "name": "AA 0736 CASA DIGITAL SERVICIOS, C.A.",
        "code": "33450",
        "address": "Calle 10 Entre Avenidas 9 Y 10, Casa N° 9-51, Nivel Pb, Sector Centro.",
        "city": "Rubio, Táchira",
        "schedule": "No Disponible",
        "phones": [
          "(0276) 7624986",
          "(0416) 6766417"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Tachira/Rubio/Aa_0736_Casa_Digital_Servicios_Ca/",
        "details": {
          "Codigo": "33450",
          "Direccion": "Calle 10 Entre Avenidas 9 Y 10, Casa N° 9-51, Nivel Pb, Sector Centro.",
          "Ciudad": "Rubio, Táchira",
          "Horario": "No Disponible",
          "Telefono(s)": "(0276) 7624986 | (0416) 6766417"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.706781,-72.360257",
        "lat": 7.706781,
        "lng": -72.360257
      },
      {
        "id": "domesa-tachira-aa-0754-representaciones-caryen-c-a",
        "name": "AA 0754 REPRESENTACIONES CARYEN, C.A.",
        "code": "33459",
        "address": "Avenida 19 De Abril, Sector La Bermeja Local N°4, Nivel Pb.",
        "city": "San Cristobal, Táchira",
        "schedule": "No Disponible",
        "phones": [
          "(0276) 3558151",
          "(0412) 4724807"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Tachira/San_Cristobal/Aa_0754_Representaciones_Caryen_Ca/",
        "details": {
          "Codigo": "33459",
          "Direccion": "Avenida 19 De Abril, Sector La Bermeja Local N°4, Nivel Pb.",
          "Ciudad": "San Cristobal, Táchira",
          "Horario": "No Disponible",
          "Telefono(s)": "(0276) 3558151 | (0412) 4724807"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.769368,-72.214289",
        "lat": 7.769368,
        "lng": -72.214289
      },
      {
        "id": "domesa-tachira-aa-0858-representaciones-elisdan-c-a",
        "name": "AA 0858 REPRESENTACIONES ELISDAN, C.A.",
        "code": "33455",
        "address": "Calle 15 Entre Carrera 6 Y 7, Local N° 6-8, Nivel Pb, Sector Centro.",
        "city": "San Cristobal, Táchira",
        "schedule": "No Disponible",
        "phones": [
          "(0276) 3441002",
          "(0414) 7210206"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Tachira/San_Cristobal/Aa_0858_Representaciones_Elisdan_Ca/",
        "details": {
          "Codigo": "33455",
          "Direccion": "Calle 15 Entre Carrera 6 Y 7, Local N° 6-8, Nivel Pb, Sector Centro.",
          "Ciudad": "San Cristobal, Táchira",
          "Horario": "No Disponible",
          "Telefono(s)": "(0276) 3441002 | (0414) 7210206"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.774658,-72.231327",
        "lat": 7.774658,
        "lng": -72.231327
      },
      {
        "id": "domesa-tachira-aa-1046-invercamen-c-a",
        "name": "AA 1046 INVERCAMEN, C.A.",
        "code": "37569",
        "address": "Barrio Ocumare, Calle 6, Esq. Con Carrera 3, Edif. Edieleal, Piso 1, Local 1, N°3-01.",
        "city": "San Antonio Del Táchira, Táchira",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 7004139"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Tachira/San_Antonio_Del_Tachira/Aa_1046_Invercamen_Ca/",
        "details": {
          "Codigo": "37569",
          "Direccion": "Barrio Ocumare, Calle 6, Esq. Con Carrera 3, Edif. Edieleal, Piso 1, Local 1, N°3-01.",
          "Ciudad": "San Antonio Del Táchira, Táchira",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 7004139"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.818483,-72.445176",
        "lat": 7.818483,
        "lng": -72.445176
      },
      {
        "id": "domesa-tachira-oc-495-oficina-comercial-san-cristobal",
        "name": "OC 495 OFICINA COMERCIAL SAN CRISTÓBAL",
        "code": "37530",
        "address": "Calle Navay Con Av. Torbes, Zona Industrial Las Lomas, Galpon Domesa, Nivel Pb.",
        "city": "San Cristóbal, Táchira",
        "schedule": "No Disponible",
        "phones": [
          "(0276) 3441252",
          "(0414) 1012547"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Tachira/San_Cristobal/Oc_495_Oficina_Comercial_San_CristObal/",
        "details": {
          "Codigo": "37530",
          "Direccion": "Calle Navay Con Av. Torbes, Zona Industrial Las Lomas, Galpon Domesa, Nivel Pb.",
          "Ciudad": "San Cristóbal, Táchira",
          "Horario": "No Disponible",
          "Telefono(s)": "(0276) 3441252 | (0414) 1012547"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.798457,-72.233985",
        "lat": 7.798457,
        "lng": -72.233985
      }
    ],
    "Trujillo": [
      {
        "id": "domesa-trujillo-aa-0694-puerta-puertaxpress-c-a",
        "name": "AA 0694 PUERTA PUERTAXPRESS, C.A.",
        "code": "37554",
        "address": "Av. 06 Entre Calles 04 Y 05, Edif. Continental Valera, Local N°05, Nivel Pb, Frente Al Liceo Rafael Rangel.",
        "city": "Valera, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "(0271) 4501024"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Trujillo/Valera/Aa_0694_Puerta_Puertaxpress_Ca/",
        "details": {
          "Codigo": "37554",
          "Direccion": "Av. 06 Entre Calles 04 Y 05, Edif. Continental Valera, Local N°05, Nivel Pb, Frente Al Liceo Rafael Rangel.",
          "Ciudad": "Valera, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0271) 4501024"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.31626,-70.604036",
        "lat": 9.31626,
        "lng": -70.604036
      },
      {
        "id": "domesa-trujillo-aa-0914-date-expreso-c-a",
        "name": "AA 0914 DATE EXPRESO, C.A.",
        "code": "33467",
        "address": "Avenida 6, Edificio Concordia, Local N° 4, Nivel Pb, Los Limoncitos Las Acacias.",
        "city": "Valera, Trujillo",
        "schedule": "No Disponible",
        "phones": [
          "(0271) 2310968",
          "(0416) 6711302"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Trujillo/Valera/Aa_0914_Date_Expreso_Ca/",
        "details": {
          "Codigo": "33467",
          "Direccion": "Avenida 6, Edificio Concordia, Local N° 4, Nivel Pb, Los Limoncitos Las Acacias.",
          "Ciudad": "Valera, Trujillo",
          "Horario": "No Disponible",
          "Telefono(s)": "(0271) 2310968 | (0416) 6711302"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.299256,-70.613957",
        "lat": 9.299256,
        "lng": -70.613957
      }
    ],
    "Vargas": [
      {
        "id": "domesa-vargas-aa-0768-inversiones-king-services-c-a",
        "name": "AA 0768 INVERSIONES KING SERVICES, C.A.",
        "code": "33473",
        "address": "Avenida Soublette, C.c Litoral, Local N°3, Nivel Pb.",
        "city": "Maiquetia, Vargas",
        "schedule": "No Disponible",
        "phones": [
          "(0212) 3313643"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Vargas/Maiquetia/Aa_0768_Inversiones_King_Services_Ca/",
        "details": {
          "Codigo": "33473",
          "Direccion": "Avenida Soublette, C.c Litoral, Local N°3, Nivel Pb.",
          "Ciudad": "Maiquetia, Vargas",
          "Horario": "No Disponible",
          "Telefono(s)": "(0212) 3313643"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.596895,-66.957988",
        "lat": 10.596895,
        "lng": -66.957988
      }
    ],
    "Yaracuy": [
      {
        "id": "domesa-yaracuy-aa-0064-encomiendas-amac-1111-c-a",
        "name": "AA 0064 ENCOMIENDAS AMAC 1111, C.A.",
        "code": "37116",
        "address": "Avenida Jose Joaquin Veroes Con Esquina Calle Doce, Edificio Don Pancho, Local N°1, Nivel Pb.",
        "city": "San Felipe, Yaracuy",
        "schedule": "No Disponible",
        "phones": [
          "(0254) 2311014"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Yaracuy/San_Felipe/Aa_0064_Encomiendas_Amac_1111_Ca/",
        "details": {
          "Codigo": "37116",
          "Direccion": "Avenida Jose Joaquin Veroes Con Esquina Calle Doce, Edificio Don Pancho, Local N°1, Nivel Pb.",
          "Ciudad": "San Felipe, Yaracuy",
          "Horario": "No Disponible",
          "Telefono(s)": "(0254) 2311014"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.342488,-68.740486",
        "lat": 10.342488,
        "lng": -68.740486
      }
    ],
    "Zulia": [
      {
        "id": "domesa-zulia-aa-0527-interconexiones-venezuela-c-a",
        "name": "AA 0527 INTERCONEXIONES VENEZUELA, C.A.",
        "code": "37550",
        "address": "Sector Tanque Nuevo, Av. 05 Con Calle 13, C.c. Crazy Fruits, Nivel Pb, Local S/n.",
        "city": "Los Puertos De Altagracia, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 6561096"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Zulia/Los_Puertos_De_Altagracia/Aa_0527_Interconexiones_Venezuela_Ca/",
        "details": {
          "Codigo": "37550",
          "Direccion": "Sector Tanque Nuevo, Av. 05 Con Calle 13, C.c. Crazy Fruits, Nivel Pb, Local S/n.",
          "Ciudad": "Los Puertos De Altagracia, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 6561096"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.706963,-71.523183",
        "lat": 10.706963,
        "lng": -71.523183
      },
      {
        "id": "domesa-zulia-aa-0645-servicios-integrales-y-telecomunicaciones-c-a",
        "name": "AA 0645 SERVICIOS INTEGRALES Y TELECOMUNICACIONES, C.A.",
        "code": "33488",
        "address": "Avenida Principal Las Cabillas, Edificio Barroco, Local N° 2 Pb, Sector Las Cabillas Cabimas Estado Zulia.",
        "city": "Cabimas, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "0264-3720447",
          "0264-6582675",
          "0414-6667020"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Zulia/Cabimas/Aa_0645_Servicios_Integrales_Y_Telecomunicaciones_Ca/",
        "details": {
          "Codigo": "33488",
          "Direccion": "Avenida Principal Las Cabillas, Edificio Barroco, Local N° 2 Pb, Sector Las Cabillas Cabimas Estado Zulia.",
          "Ciudad": "Cabimas, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "0264-3720447 | 0264-6582675 | 0414-6667020"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.388771,-71.44455",
        "lat": 10.388771,
        "lng": -71.44455
      },
      {
        "id": "domesa-zulia-aa-0778-inversora-las-ruedas-c-a",
        "name": "AA 0778 INVERSORA LAS RUEDAS, C.A.",
        "code": "33495",
        "address": "Avenida Derecha Entre Calles Gerico Y El Marquez, C.c Don Esteban, Local N°9, Nivel Pb, Sector Casco Central.",
        "city": "Villa Del Rosario, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "(0263) 6928229",
          "(0426) 5622439"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Zulia/Villa_Del_Rosario/Aa_0778_Inversora_Las_Ruedas_Ca/",
        "details": {
          "Codigo": "33495",
          "Direccion": "Avenida Derecha Entre Calles Gerico Y El Marquez, C.c Don Esteban, Local N°9, Nivel Pb, Sector Casco Central.",
          "Ciudad": "Villa Del Rosario, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "(0263) 6928229 | (0426) 5622439"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.322209,-72.319345",
        "lat": 10.322209,
        "lng": -72.319345
      },
      {
        "id": "domesa-zulia-aa-1206-entregas-eagle-express-c-a",
        "name": "AA 1206 ENTREGAS EAGLE EXPRESS C.A.",
        "code": "37588",
        "address": "Carretera L, Esq. Callejon 7, C.c. Via Appia, Local 8.",
        "city": "Ciudad Ojeda, Zulia",
        "schedule": "No Disponible",
        "phones": [
          "(0424) 6391639"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/DOMESA/Zulia/Ciudad_Ojeda/Aa_1206_Entregas_Eagle_Express_Ca/",
        "details": {
          "Codigo": "37588",
          "Direccion": "Carretera L, Esq. Callejon 7, C.c. Via Appia, Local 8.",
          "Ciudad": "Ciudad Ojeda, Zulia",
          "Horario": "No Disponible",
          "Telefono(s)": "(0424) 6391639"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.205179,-71.325068",
        "lat": 10.205179,
        "lng": -71.325068
      }
    ]
  },
  "tealca": {
    "#": [],
    "Anzoategui": [
      {
        "id": "tealca-anzoategui-encomiendas-regar-c-a",
        "name": "ENCOMIENDAS REGAR, C.A.",
        "code": "2910",
        "address": "Av. Bolivar Local Nro 67 (frente Al Hotel Muñiz, Sector Centro Municipio Anaco, Parroquia Anaco Zp. 6003 Estado Anzoátegui",
        "city": "Anaco, Anzoategui",
        "schedule": "8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM",
        "phones": [
          "0282-424.76.57"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/Anaco/Encomiendas_Regar_Ca/",
        "details": {
          "Codigo": "2910",
          "Direccion": "Av. Bolivar Local Nro 67 (frente Al Hotel Muñiz, Sector Centro Municipio Anaco, Parroquia Anaco Zp. 6003 Estado Anzoátegui",
          "Ciudad": "Anaco, Anzoategui",
          "Horario": "8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM",
          "Telefono(s)": "0282-424.76.57",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.433965,-64.479331",
        "lat": 9.433965,
        "lng": -64.479331
      },
      {
        "id": "tealca-anzoategui-jag-express-c-a",
        "name": "JAG EXPRESS, C.A",
        "code": "2907",
        "address": "Sector Nueva Barcelona Local C Nro. 18 C.c Los Chaguaramos. Av. Fuerza Armadas Parroquia El Carmen Municipio Simón Bolívar Barcelona Anzoátegui Venezuela Zp. 6001",
        "city": "Barcelona, Anzoategui",
        "schedule": "08:00 am a 12:00 pm y 01:00 pm a 5:00 pm. (Envíos hasta las 4:00 pm)",
        "phones": [
          "0281-275.17.94",
          "(0414) 823.25.20"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/Barcelona/Jag_Express_Ca/",
        "details": {
          "Codigo": "2907",
          "Direccion": "Sector Nueva Barcelona Local C Nro. 18 C.c Los Chaguaramos. Av. Fuerza Armadas Parroquia El Carmen Municipio Simón Bolívar Barcelona Anzoátegui Venezuela Zp. 6001",
          "Ciudad": "Barcelona, Anzoategui",
          "Horario": "08:00 am a 12:00 pm y 01:00 pm a 5:00 pm. (Envíos hasta las 4:00 pm)",
          "Telefono(s)": "0281-275.17.94 | (0414) 823.25.20",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.153446,-64.685886",
        "lat": 10.153446,
        "lng": -64.685886
      },
      {
        "id": "tealca-anzoategui-oficina-comercial-barcelona",
        "name": "OFICINA COMERCIAL BARCELONA",
        "code": "LL",
        "address": "Zona Industrial Barcelona Calle San Antonio Galpón Parcelamiento Concretera Caracas Oriente Municipio Simón Bolivar Parroquia El Carmen Zp 6001",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "No Disponible"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/Puerto_La_Cruz/Oficina_Comercial_Barcelona/",
        "details": {
          "Codigo": "LL",
          "Direccion": "Zona Industrial Barcelona Calle San Antonio Galpón Parcelamiento Concretera Caracas Oriente Municipio Simón Bolivar Parroquia El Carmen Zp 6001",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "No Disponible",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.131492,-64.644148",
        "lat": 10.131492,
        "lng": -64.644148
      },
      {
        "id": "tealca-anzoategui-power-service-100-c-a",
        "name": "POWER SERVICE 100, C.A.",
        "code": "2909",
        "address": "Av. Stadium C.c. Cardón Nivel P.b, Local 16 Y 17 Sector Casco Central Puerto La Cruz Estado Anzoátegui. Zona Postal 6023",
        "city": "Puerto La Cruz, Anzoategui",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0281) 269.54.12",
          "(0424) 802.89.26"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/Puerto_La_Cruz/Power_Service_100_Ca/",
        "details": {
          "Codigo": "2909",
          "Direccion": "Av. Stadium C.c. Cardón Nivel P.b, Local 16 Y 17 Sector Casco Central Puerto La Cruz Estado Anzoátegui. Zona Postal 6023",
          "Ciudad": "Puerto La Cruz, Anzoategui",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0281) 269.54.12 | (0424) 802.89.26",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.208508,-64.631243",
        "lat": 10.208508,
        "lng": -64.631243
      },
      {
        "id": "tealca-anzoategui-puerto-piritu",
        "name": "PUERTO PIRITU",
        "code": "J2911",
        "address": "0",
        "city": "Puerto Piritu, Anzoategui",
        "schedule": "0",
        "phones": [
          "04269835666"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/Puerto_Piritu/Puerto_Piritu/",
        "details": {
          "Codigo": "J2911",
          "Direccion": "0",
          "Ciudad": "Puerto Piritu, Anzoategui",
          "Horario": "0",
          "Telefono(s)": "04269835666",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=0,0",
        "lat": 0,
        "lng": 0
      },
      {
        "id": "tealca-anzoategui-tradiser-c-a",
        "name": "TRADISER, C.A",
        "code": "2901",
        "address": "Centro El Tigre Edif. 3ra Carrera Sur Con 3ra Calle, Pueblo Nuevo Sur Parroquia Edmundo Barrio Municipio Simón Rodríguez El Tigre Anzoátegui Venezuela Zp. 6050",
        "city": "El Tigre, Anzoategui",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM/Sabados: de 9:00 am a 12:00 pm.",
        "phones": [
          "0283-235.24.85"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/El_Tigre/Tradiser_Ca/",
        "details": {
          "Codigo": "2901",
          "Direccion": "Centro El Tigre Edif. 3ra Carrera Sur Con 3ra Calle, Pueblo Nuevo Sur Parroquia Edmundo Barrio Municipio Simón Rodríguez El Tigre Anzoátegui Venezuela Zp. 6050",
          "Ciudad": "El Tigre, Anzoategui",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM/Sabados: de 9:00 am a 12:00 pm.",
          "Telefono(s)": "0283-235.24.85",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.886519,-64.257506",
        "lat": 8.886519,
        "lng": -64.257506
      },
      {
        "id": "tealca-anzoategui-tradiser-c-a",
        "name": "TRADISER, C.A",
        "code": "2901B",
        "address": "Av. Fernández Padilla, Centro Comercial La Orquídea Planta Baja Local 04, Municipio San José De Guanipa (el Tigrito)",
        "city": "El Tigrito, Anzoategui",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [
          "0283-4006320"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/El_Tigrito/Tradiser_Ca/",
        "details": {
          "Codigo": "2901B",
          "Direccion": "Av. Fernández Padilla, Centro Comercial La Orquídea Planta Baja Local 04, Municipio San José De Guanipa (el Tigrito)",
          "Ciudad": "El Tigrito, Anzoategui",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Telefono(s)": "0283-4006320",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-anzoategui-venezolana-pg-g-c-a",
        "name": "VENEZOLANA PG & G, C.A",
        "code": "2906",
        "address": "Av. Intercomunal Jorge Rodriguez, C.c. Intannos Cneter, Pb, Local 05. Lecheria-edo. Anzoategui, Municipio Urbaneja",
        "city": "Lecheria, Anzoategui",
        "schedule": "Atención al clientes de 8:00 am /4:30 pm (Envíos hasta las 3:00 pm)",
        "phones": [
          "(0281) 287.10.62",
          "422.65.50"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Anzoategui/Lecheria/Venezolana_Pg__G_Ca/",
        "details": {
          "Codigo": "2906",
          "Direccion": "Av. Intercomunal Jorge Rodriguez, C.c. Intannos Cneter, Pb, Local 05. Lecheria-edo. Anzoategui, Municipio Urbaneja",
          "Ciudad": "Lecheria, Anzoategui",
          "Horario": "Atención al clientes de 8:00 am /4:30 pm (Envíos hasta las 3:00 pm)",
          "Telefono(s)": "(0281) 287.10.62 | 422.65.50",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.181085,-64.660181",
        "lat": 10.181085,
        "lng": -64.660181
      }
    ],
    "Apure": [
      {
        "id": "tealca-apure-javi-y-zul-c-a",
        "name": "JAVI Y ZUL, C.A.",
        "code": "J5305",
        "address": "Calle 5 Local No. 34 Barrio Los Tamarindos, Coropo - Edo Aragua",
        "city": "San Fernando De A, Apure",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Apure/San_Fernando_De_A/Javi_Y_Zul_Ca/",
        "details": {
          "Codigo": "J5305",
          "Direccion": "Calle 5 Local No. 34 Barrio Los Tamarindos, Coropo - Edo Aragua",
          "Ciudad": "San Fernando De A, Apure",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      }
    ],
    "Aragua": [
      {
        "id": "tealca-aragua-canfer",
        "name": "CANFER",
        "code": "J5111",
        "address": "Cubre Las Zonas San Juan De Los Morros, Villa De Cura Y Cagua.",
        "city": "Maracay, Aragua",
        "schedule": "No Disponible",
        "phones": [
          "0416.745.38.63",
          "0416.843.54.75"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Canfer/",
        "details": {
          "Codigo": "J5111",
          "Direccion": "Cubre Las Zonas San Juan De Los Morros, Villa De Cura Y Cagua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "No Disponible",
          "Telefono(s)": "0416.745.38.63 | 0416.843.54.75",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-aragua-inversiones-estrada-barreto-c-a",
        "name": "INVERSIONES ESTRADA BARRETO, C.A.",
        "code": "5116B",
        "address": "Barrio Santa Rosa, Calle Infantil, Nro 65, Parroquia Los Tacarigua, Municipio Girardot, Maracay, Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "8:00 am a 5:00 pm ( Horario Corrido)",
        "phones": [
          "0243-553.56.67",
          "556.06.74"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Inversiones_Estrada_Barreto_Ca/",
        "details": {
          "Codigo": "5116B",
          "Direccion": "Barrio Santa Rosa, Calle Infantil, Nro 65, Parroquia Los Tacarigua, Municipio Girardot, Maracay, Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "8:00 am a 5:00 pm ( Horario Corrido)",
          "Telefono(s)": "0243-553.56.67 | 556.06.74",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.246785,-67.612192",
        "lat": 10.246785,
        "lng": -67.612192
      },
      {
        "id": "tealca-aragua-inversiones-padi-2823-c-a",
        "name": "INVERSIONES PADI 2823, C.A.",
        "code": "5115",
        "address": "Calle Sucre Cc La Pirámide Local A -30 Cagua Municipio Sucre Parroquia Centro Cagua Zp. 2122",
        "city": "Cagua, Aragua",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0244-935.28.23",
          "477.93.04",
          "447.37.24"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Cagua/Inversiones_Padi_2823_Ca/",
        "details": {
          "Codigo": "5115",
          "Direccion": "Calle Sucre Cc La Pirámide Local A -30 Cagua Municipio Sucre Parroquia Centro Cagua Zp. 2122",
          "Ciudad": "Cagua, Aragua",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0244-935.28.23 | 477.93.04 | 447.37.24",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.185112,-67.465279",
        "lat": 10.185112,
        "lng": -67.465279
      },
      {
        "id": "tealca-aragua-inversiones-panp-69-c-a",
        "name": "INVERSIONES PANP 69, C.A.",
        "code": "5113B",
        "address": "Avenida Bermúdez # 65, Entre Av. Los Cedros Y Vereda Independencia, Urb. Santa Ana, Jose Casanova Godoy, Girardot Edo Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "8:00 am a 12:30 pm y 02:00 pm a 05:00 pm",
        "phones": [
          "(0243) 233.22.11",
          "(0243) 935.01.34"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Inversiones_Panp_69_Ca/",
        "details": {
          "Codigo": "5113B",
          "Direccion": "Avenida Bermúdez # 65, Entre Av. Los Cedros Y Vereda Independencia, Urb. Santa Ana, Jose Casanova Godoy, Girardot Edo Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "8:00 am a 12:30 pm y 02:00 pm a 05:00 pm",
          "Telefono(s)": "(0243) 233.22.11 | (0243) 935.01.34",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.24126,-67.59429",
        "lat": 10.24126,
        "lng": -67.59429
      },
      {
        "id": "tealca-aragua-javi-y-zul-c-a",
        "name": "JAVI Y ZUL, C.A.",
        "code": "J5119",
        "address": "Calle 5 Local No. 34 Barrio Los Tamarindos, Coropo -edo Aragua",
        "city": "Villa De Cura, Aragua",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Villa_De_Cura/Javi_Y_Zul_Ca/",
        "details": {
          "Codigo": "J5119",
          "Direccion": "Calle 5 Local No. 34 Barrio Los Tamarindos, Coropo -edo Aragua",
          "Ciudad": "Villa De Cura, Aragua",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-aragua-maracay",
        "name": "MARACAY",
        "code": "CC02",
        "address": "Zona Industrial San Vicente Av. Antón Philli Galpón Nro. 2 Al Lado De Constructora Master Zp 2102",
        "city": "Maracay, Aragua",
        "schedule": "Lunes a Viernes: 08:00 am a 12:00 pm y 01:00 pm a 5:00 pm",
        "phones": [
          "0212-2807341",
          "0426-6321025"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Maracay/",
        "details": {
          "Codigo": "CC02",
          "Direccion": "Zona Industrial San Vicente Av. Antón Philli Galpón Nro. 2 Al Lado De Constructora Master Zp 2102",
          "Ciudad": "Maracay, Aragua",
          "Horario": "Lunes a Viernes: 08:00 am a 12:00 pm y 01:00 pm a 5:00 pm",
          "Telefono(s)": "0212-2807341 | 0426-6321025",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-aragua-maracay-oeste",
        "name": "MARACAY OESTE",
        "code": "5114B",
        "address": "Calle Ricaurte Oeste Nro 30, Entre Calle Vargas Y Calle Soublette. Maracay, Edo. Aragua",
        "city": "Maracay, Aragua",
        "schedule": "8:00 AM",
        "phones": [
          "04144599483"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Maracay_Oeste/",
        "details": {
          "Codigo": "5114B",
          "Direccion": "Calle Ricaurte Oeste Nro 30, Entre Calle Vargas Y Calle Soublette. Maracay, Edo. Aragua",
          "Ciudad": "Maracay, Aragua",
          "Horario": "8:00 AM",
          "Telefono(s)": "04144599483",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.247529,-67.604990",
        "lat": 10.247529,
        "lng": -67.60499
      },
      {
        "id": "tealca-aragua-multiservicios-expresos-2013-c-a",
        "name": "MULTISERVICIOS EXPRESOS 2013, C.A",
        "code": "5117C",
        "address": "Calle Bolívar, Cruce Con Calle Ramón Bastidas, Nro. 88, Municipio Santiago Mariño, Parroquia Turmero, Turmero, Estado Aragua.",
        "city": "Turmero, Aragua",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
        "phones": [
          "0244-661.06.67",
          "661.45.45"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Turmero/Multiservicios_Expresos_2013_Ca/",
        "details": {
          "Codigo": "5117C",
          "Direccion": "Calle Bolívar, Cruce Con Calle Ramón Bastidas, Nro. 88, Municipio Santiago Mariño, Parroquia Turmero, Turmero, Estado Aragua.",
          "Ciudad": "Turmero, Aragua",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
          "Telefono(s)": "0244-661.06.67 | 661.45.45",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.230104,-67.478293",
        "lat": 10.230104,
        "lng": -67.478293
      },
      {
        "id": "tealca-aragua-oficina-comercial-maracay",
        "name": "OFICINA COMERCIAL MARACAY",
        "code": "CC",
        "address": "Av. Bermúdez Con Av. Aragua, Cc Maracay Plaza, Pb, Local 80f, Parroquia José Casanova Godoy, Municipio Girardot, Maracay, Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0243) 935.29.03",
          "(0243) 935.29.02"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Oficina_Comercial_Maracay/",
        "details": {
          "Codigo": "CC",
          "Direccion": "Av. Bermúdez Con Av. Aragua, Cc Maracay Plaza, Pb, Local 80f, Parroquia José Casanova Godoy, Municipio Girardot, Maracay, Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0243) 935.29.03 | (0243) 935.29.02",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.232694,-67.596819",
        "lat": 10.232694,
        "lng": -67.596819
      },
      {
        "id": "tealca-aragua-rapidezca-c-a",
        "name": "RAPIDEZCA, C.A.",
        "code": "5114",
        "address": "Sector La Coromoto, Av. Ramón Narvaez, Local No. 3, Sector La Coromoto, Maracay, Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "8:00 AM a 5:30 PM (Horario Corrido)",
        "phones": [
          "0243-551.33.53",
          "218.75.92"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Rapidezca_Ca/",
        "details": {
          "Codigo": "5114",
          "Direccion": "Sector La Coromoto, Av. Ramón Narvaez, Local No. 3, Sector La Coromoto, Maracay, Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "8:00 AM a 5:30 PM (Horario Corrido)",
          "Telefono(s)": "0243-551.33.53 | 218.75.92",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.260787,-67.616307",
        "lat": 10.260787,
        "lng": -67.616307
      },
      {
        "id": "tealca-aragua-record-2017-c-a",
        "name": "RECORD 2017, C.A.",
        "code": "5118",
        "address": "Urb. Nueva Victoria, Cc Cilento, Local Pb-09, Parroquia Castor Nieves, Municipio José Felix Ribas, La Victoria, Estado Aragua.",
        "city": "Maracay, Aragua",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
        "phones": [
          "0244-419.25.34"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Aragua/Maracay/Record_2017_Ca/",
        "details": {
          "Codigo": "5118",
          "Direccion": "Urb. Nueva Victoria, Cc Cilento, Local Pb-09, Parroquia Castor Nieves, Municipio José Felix Ribas, La Victoria, Estado Aragua.",
          "Ciudad": "Maracay, Aragua",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
          "Telefono(s)": "0244-419.25.34",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.227410,-67.323654",
        "lat": 10.22741,
        "lng": -67.323654
      }
    ],
    "Barinas": [
      {
        "id": "tealca-barinas-barinas",
        "name": "BARINAS",
        "code": "QQ02",
        "address": "Sector Carretera Nacional Troncal 5 Parque Industrial Troncal 5 Galpones 01 Y 07 Parroquia Alto Barinas",
        "city": "Barinas, Barinas",
        "schedule": "Lunes a Viernes: 6:00 am a 4:00 pm",
        "phones": [
          "0424-5535972",
          "0414-5081527"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Barinas/Barinas/Barinas/",
        "details": {
          "Codigo": "QQ02",
          "Direccion": "Sector Carretera Nacional Troncal 5 Parque Industrial Troncal 5 Galpones 01 Y 07 Parroquia Alto Barinas",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes a Viernes: 6:00 am a 4:00 pm",
          "Telefono(s)": "0424-5535972 | 0414-5081527",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-barinas-continental-delivery-services-c-a",
        "name": "CONTINENTAL DELIVERY SERVICES, C.A.",
        "code": "8005",
        "address": "Sector Alto Barinas, Av. El Progreso Cruce Con Calle 3, Cc Plaza Premium, Pb, Local 04, Parroquia Alto Barinas, Municipio Barinas, Barinas, Estado Barinas.",
        "city": "Barinas, Barinas",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm)",
        "phones": [
          "0273-935.13.92",
          "0416-6360277"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Barinas/Barinas/Continental_Delivery_Services_Ca/",
        "details": {
          "Codigo": "8005",
          "Direccion": "Sector Alto Barinas, Av. El Progreso Cruce Con Calle 3, Cc Plaza Premium, Pb, Local 04, Parroquia Alto Barinas, Municipio Barinas, Barinas, Estado Barinas.",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm)",
          "Telefono(s)": "0273-935.13.92 | 0416-6360277",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.622931,-70.260413",
        "lat": 8.622931,
        "lng": -70.260413
      },
      {
        "id": "tealca-barinas-hub-cadena-logistica",
        "name": "HUB CADENA LOGÍSTICA",
        "code": "J8007",
        "address": "Av. San Carlos Entre Plaza Y 5 De Julio, Local 5-33a, Urb. El Pilar Barinas, Barinas",
        "city": "Barinas, Barinas",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [
          "0273-543-29720",
          "0412-679-7730"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Barinas/Barinas/Hub_Cadena_LogIstica/",
        "details": {
          "Codigo": "J8007",
          "Direccion": "Av. San Carlos Entre Plaza Y 5 De Julio, Local 5-33a, Urb. El Pilar Barinas, Barinas",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Telefono(s)": "0273-543-29720 | 0412-679-7730",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-barinas-pie-de-monte-andino",
        "name": "PIE DE MONTE ANDINO",
        "code": "J8006",
        "address": "Cr 8 Casa, Nro Nro.12, Sector El Bucaral, Barinitas Barinas",
        "city": "Barinas, Barinas",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [
          "0273-611-8522"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Barinas/Barinas/Pie_De_Monte_Andino/",
        "details": {
          "Codigo": "J8006",
          "Direccion": "Cr 8 Casa, Nro Nro.12, Sector El Bucaral, Barinitas Barinas",
          "Ciudad": "Barinas, Barinas",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Telefono(s)": "0273-611-8522",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      }
    ],
    "Bolivar": [
      {
        "id": "tealca-bolivar-inversiones-oriven-c-a",
        "name": "INVERSIONES ORIVEN, C.A.",
        "code": "3207",
        "address": "Urb. Unare Ii, Av. 1, Sector Ii, Edificio Ipeca, Pb, Local No. 2, Parroquia Unare, Municipio Caroní, Puerto Ordaz, Estado Bolívar.",
        "city": "Unare, Bolivar",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0286-714.37.75",
          "(0424) 928.12.65"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Bolivar/Unare/Inversiones_Oriven_Ca/",
        "details": {
          "Codigo": "3207",
          "Direccion": "Urb. Unare Ii, Av. 1, Sector Ii, Edificio Ipeca, Pb, Local No. 2, Parroquia Unare, Municipio Caroní, Puerto Ordaz, Estado Bolívar.",
          "Ciudad": "Unare, Bolivar",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0286-714.37.75 | (0424) 928.12.65",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.279515,-62.760634",
        "lat": 8.279515,
        "lng": -62.760634
      },
      {
        "id": "tealca-bolivar-kamoy-c-a",
        "name": "KAMOY, C.A.",
        "code": "3208",
        "address": "Avenida Moreno De Mendoza, C.c. La Cariñosa Pb Local 01 , Sector El Roble",
        "city": "San Felix, Bolivar",
        "schedule": "8:00 AM a 5:00 PM ( Horario Corrido)",
        "phones": [
          "0286-514.52.38",
          "971.05.45"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Bolivar/San_Felix/Kamoy_Ca/",
        "details": {
          "Codigo": "3208",
          "Direccion": "Avenida Moreno De Mendoza, C.c. La Cariñosa Pb Local 01 , Sector El Roble",
          "Ciudad": "San Felix, Bolivar",
          "Horario": "8:00 AM a 5:00 PM ( Horario Corrido)",
          "Telefono(s)": "0286-514.52.38 | 971.05.45",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.367214,-62.656511",
        "lat": 8.367214,
        "lng": -62.656511
      },
      {
        "id": "tealca-bolivar-oficina-comercial-puerto-ordaz",
        "name": "OFICINA COMERCIAL PUERTO ORDAZ",
        "code": "HH02",
        "address": "Parcela De Terreno Distinguida Con El Nro. 304-23-14, Parcelamiento Industrial Los Pinos, En Matanzas, Unidad De Desarrollo 304 De Ciudad Guayana, Municipio Caroní Del Estado Bolívar, Parroquia Unare Zp 8050",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
        "phones": [
          "(0286) 994.88.30",
          "415.72.50"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Bolivar/Puerto_Ordaz/Oficina_Comercial_Puerto_Ordaz/",
        "details": {
          "Codigo": "HH02",
          "Direccion": "Parcela De Terreno Distinguida Con El Nro. 304-23-14, Parcelamiento Industrial Los Pinos, En Matanzas, Unidad De Desarrollo 304 De Ciudad Guayana, Municipio Caroní Del Estado Bolívar, Parroquia Unare Zp 8050",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
          "Telefono(s)": "(0286) 994.88.30 | 415.72.50",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.266030,-62.797500",
        "lat": 8.26603,
        "lng": -62.7975
      },
      {
        "id": "tealca-bolivar-representaciones-zorco-c-a",
        "name": "REPRESENTACIONES ZORCO, C.A.",
        "code": "3205B",
        "address": "Urb. Alta Vista Norte, Calle Nekuima Con Cuchivero, Cc Ciudad Alta Vista, P1, Local 81. Parroquia Universidad, Municipio Caroní, Puerto Ordaz, Estado Bolívar.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
        "phones": [
          "0286-415.67.22",
          "514.84.57"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Bolivar/Puerto_Ordaz/Representaciones_Zorco_Ca/",
        "details": {
          "Codigo": "3205B",
          "Direccion": "Urb. Alta Vista Norte, Calle Nekuima Con Cuchivero, Cc Ciudad Alta Vista, P1, Local 81. Parroquia Universidad, Municipio Caroní, Puerto Ordaz, Estado Bolívar.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
          "Telefono(s)": "0286-415.67.22 | 514.84.57",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.294914,-62.731939",
        "lat": 8.294914,
        "lng": -62.731939
      },
      {
        "id": "tealca-bolivar-tomas-express-c-a",
        "name": "TOMÁS EXPRESS, C.A",
        "code": "3102",
        "address": "Av. Jesus Soto, Sector Aeropuerto Tomás De Heres, Hangar Distribuidora Tom`s, Parroquia Catedral, Municipio Heres, Ciudad Bolívar, Estado Bolívar.",
        "city": "Ciudad Bolivar, Bolivar",
        "schedule": "8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
        "phones": [
          "(0285) 632.51.02",
          "(0426) 890.02.01"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Bolivar/Ciudad_Bolivar/TomAs_Express_Ca/",
        "details": {
          "Codigo": "3102",
          "Direccion": "Av. Jesus Soto, Sector Aeropuerto Tomás De Heres, Hangar Distribuidora Tom`s, Parroquia Catedral, Municipio Heres, Ciudad Bolívar, Estado Bolívar.",
          "Ciudad": "Ciudad Bolivar, Bolivar",
          "Horario": "8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
          "Telefono(s)": "(0285) 632.51.02 | (0426) 890.02.01",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.127375,-63.532136",
        "lat": 8.127375,
        "lng": -63.532136
      },
      {
        "id": "tealca-bolivar-transportes-y-servicio-ceamso-c-a",
        "name": "TRANSPORTES Y SERVICIO CEAMSO, C.A.",
        "code": "3209",
        "address": "Av. Atlántico Cruce Con Av. Norte Sur 4, Estación De Servicio Ventuari, Urb. Ventuari, Manzana 13, Local 2, Parroquia Unare, Municipio Caroní, Puerto Ordaz, Estado Bolívar.",
        "city": "Puerto Ordaz, Bolivar",
        "schedule": "Lunes a Viernes: 8:00 am a 6:00 pm Corrido Sabados: de 9:00 am a 12:00 pm.",
        "phones": [
          "0286- 717.42.00",
          "415.51.59"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Bolivar/Puerto_Ordaz/Transportes_Y_Servicio_Ceamso_Ca/",
        "details": {
          "Codigo": "3209",
          "Direccion": "Av. Atlántico Cruce Con Av. Norte Sur 4, Estación De Servicio Ventuari, Urb. Ventuari, Manzana 13, Local 2, Parroquia Unare, Municipio Caroní, Puerto Ordaz, Estado Bolívar.",
          "Ciudad": "Puerto Ordaz, Bolivar",
          "Horario": "Lunes a Viernes: 8:00 am a 6:00 pm Corrido Sabados: de 9:00 am a 12:00 pm.",
          "Telefono(s)": "0286- 717.42.00 | 415.51.59",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.264122,-62.770346",
        "lat": 8.264122,
        "lng": -62.770346
      }
    ],
    "Carabobo": [
      {
        "id": "tealca-carabobo-d-l-c-eagle-c-a",
        "name": "D.L.C EAGLE, C.A.",
        "code": "5209",
        "address": "Av. 96b, Sector Las Quintas, Local 175-55, Naguanagua. Municipio Naguanagua, Parroquia Naguanagua Zp.2005",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0241-817.93.98"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Dlc_Eagle_Ca/",
        "details": {
          "Codigo": "5209",
          "Direccion": "Av. 96b, Sector Las Quintas, Local 175-55, Naguanagua. Municipio Naguanagua, Parroquia Naguanagua Zp.2005",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0241-817.93.98",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.245684,-68.009480",
        "lat": 10.245684,
        "lng": -68.00948
      },
      {
        "id": "tealca-carabobo-envios-cardenas-y-asociados-c-a",
        "name": "ENVIOS CÁRDENAS Y ASOCIADOS, C.A.",
        "code": "5210",
        "address": "Av. Intercomunal Don Julio Centeno C.c Metromarket 2da Etapa Local R9 Urbanización Complejo Los Jarales Municipio San Diego Parroquia Urbana San Diego Zp 2006.",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0241-414.19.07",
          "(0412) 033.49.31"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Envios_CArdenas_Y_Asociados_Ca/",
        "details": {
          "Codigo": "5210",
          "Direccion": "Av. Intercomunal Don Julio Centeno C.c Metromarket 2da Etapa Local R9 Urbanización Complejo Los Jarales Municipio San Diego Parroquia Urbana San Diego Zp 2006.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0241-414.19.07 | (0412) 033.49.31",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.172964,-67.978341",
        "lat": 10.172964,
        "lng": -67.978341
      },
      {
        "id": "tealca-carabobo-epg-cargo-services-express-c-a",
        "name": "EPG CARGO SERVICES EXPRESS C.A",
        "code": "5204",
        "address": "Centro Guacara Calle Piar Con Arévalo Gonzalez C.c. Guacara Plaza Pb Local 40 Parroquia Urbana Guacara Municipio Guacara Carabobo Venezuela Zp. 2015",
        "city": "Guacara, Carabobo",
        "schedule": "8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
        "phones": [
          "(0245) 564.55.46",
          "995.13.43"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Guacara/Epg_Cargo_Services_Express_Ca/",
        "details": {
          "Codigo": "5204",
          "Direccion": "Centro Guacara Calle Piar Con Arévalo Gonzalez C.c. Guacara Plaza Pb Local 40 Parroquia Urbana Guacara Municipio Guacara Carabobo Venezuela Zp. 2015",
          "Ciudad": "Guacara, Carabobo",
          "Horario": "8:00 am a 12:00 pm y 01:00 pm a 05:00 pm",
          "Telefono(s)": "(0245) 564.55.46 | 995.13.43",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.232570,-67.880481",
        "lat": 10.23257,
        "lng": -67.880481
      },
      {
        "id": "tealca-carabobo-inversiones-jamyr-5-c-a",
        "name": "INVERSIONES JAMYR 5, C.A.",
        "code": "5206",
        "address": "Av. Henry Ford Zona Industrial Municipal Sur Centro Comercial Paseo Las Industrias Nivel Mezzanina Local M-16 Municipio Valencia Parroquia Rafael Urdaneta Zp 2003",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0241-995.33.53"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Inversiones_Jamyr_5_Ca/",
        "details": {
          "Codigo": "5206",
          "Direccion": "Av. Henry Ford Zona Industrial Municipal Sur Centro Comercial Paseo Las Industrias Nivel Mezzanina Local M-16 Municipio Valencia Parroquia Rafael Urdaneta Zp 2003",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0241-995.33.53",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.164331,-67.960306",
        "lat": 10.164331,
        "lng": -67.960306
      },
      {
        "id": "tealca-carabobo-inversiones-pvs-c-a",
        "name": "INVERSIONES PVS, C.A.",
        "code": "5201",
        "address": "Av. Andrés Eloy Blanco, Con Av. Carlos Sanda Cc Beverly Center Pb, Local L 1-24, Urb El Viñedo",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 4: 00 PM (Horario Corrido)",
        "phones": [
          "(0241) 823.62.33",
          "(0241) 826.90.53"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Inversiones_Pvs_Ca/",
        "details": {
          "Codigo": "5201",
          "Direccion": "Av. Andrés Eloy Blanco, Con Av. Carlos Sanda Cc Beverly Center Pb, Local L 1-24, Urb El Viñedo",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 4: 00 PM (Horario Corrido)",
          "Telefono(s)": "(0241) 823.62.33 | (0241) 826.90.53",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.205398,-68.012136",
        "lat": 10.205398,
        "lng": -68.012136
      },
      {
        "id": "tealca-carabobo-inversiones-veracord-c-a",
        "name": "INVERSIONES VERACORD, C.A.",
        "code": "5208",
        "address": "Av. Michelena, C.c Ara Nave A Local 87-a-421, Valencia, Municipio Valencia, Parroquia Rafael Urdaneta, Zp. 2003.",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0241-832.25.01",
          "832.41.90"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Inversiones_Veracord_Ca/",
        "details": {
          "Codigo": "5208",
          "Direccion": "Av. Michelena, C.c Ara Nave A Local 87-a-421, Valencia, Municipio Valencia, Parroquia Rafael Urdaneta, Zp. 2003.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0241-832.25.01 | 832.41.90",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.173879,-67.978607",
        "lat": 10.173879,
        "lng": -67.978607
      },
      {
        "id": "tealca-carabobo-oficina-comercial-valencia",
        "name": "OFICINA COMERCIAL VALENCIA",
        "code": "DD",
        "address": "Zona Industrial Castillito, Vía Los Guayitos, Cc La Unión, Galpón No. 3, Parroquia San Diego, Municipio San Diego, Valencia, Estado Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "8 AM a 5 PM (Horario Corrido)",
        "phones": [
          "(0424)460.78.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Oficina_Comercial_Valencia/",
        "details": {
          "Codigo": "DD",
          "Direccion": "Zona Industrial Castillito, Vía Los Guayitos, Cc La Unión, Galpón No. 3, Parroquia San Diego, Municipio San Diego, Valencia, Estado Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8 AM a 5 PM (Horario Corrido)",
          "Telefono(s)": "(0424)460.78.73",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.192320,-67.944560",
        "lat": 10.19232,
        "lng": -67.94456
      },
      {
        "id": "tealca-carabobo-puerto-cabello",
        "name": "PUERTO CABELLO",
        "code": "J5212",
        "address": "0",
        "city": "Puerto Cabello, Carabobo",
        "schedule": "0",
        "phones": [
          "04244650552"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Puerto_Cabello/Puerto_Cabello/",
        "details": {
          "Codigo": "J5212",
          "Direccion": "0",
          "Ciudad": "Puerto Cabello, Carabobo",
          "Horario": "0",
          "Telefono(s)": "04244650552",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=0,0",
        "lat": 0,
        "lng": 0
      },
      {
        "id": "tealca-carabobo-universal-ava-c-a",
        "name": "UNIVERSAL AVA, C. A.",
        "code": "5211",
        "address": "Vía De Servicio Valencia-campo De Carabobo, Urb. Pocaterra, Local No. 2, Parroquia Tocuyito, Municipio Libertador, Valencia, Estado Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 5:00 PM ( Horario Corrido)",
        "phones": [
          "0241-416.27.37"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Universal_Ava_C_A/",
        "details": {
          "Codigo": "5211",
          "Direccion": "Vía De Servicio Valencia-campo De Carabobo, Urb. Pocaterra, Local No. 2, Parroquia Tocuyito, Municipio Libertador, Valencia, Estado Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 5:00 PM ( Horario Corrido)",
          "Telefono(s)": "0241-416.27.37",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.245663,-68.009523",
        "lat": 10.245663,
        "lng": -68.009523
      },
      {
        "id": "tealca-carabobo-venencomienda-c-a",
        "name": "VENENCOMIENDA, C.A.",
        "code": "5207B",
        "address": "Calle Cantaura Con Calle Carabobo, Cc Plaza Candelaria, Local No. 5, Parroquia La Candelaria, Municipio Valencia, Valencia, Estado Carabobo.",
        "city": "Valencia, Carabobo",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 AM a 5:00 PM",
        "phones": [
          "0241-835.63.29"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Carabobo/Valencia/Venencomienda_Ca/",
        "details": {
          "Codigo": "5207B",
          "Direccion": "Calle Cantaura Con Calle Carabobo, Cc Plaza Candelaria, Local No. 5, Parroquia La Candelaria, Municipio Valencia, Valencia, Estado Carabobo.",
          "Ciudad": "Valencia, Carabobo",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 AM a 5:00 PM",
          "Telefono(s)": "0241-835.63.29",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.155716,-67.998016",
        "lat": 10.155716,
        "lng": -67.998016
      }
    ],
    "Delta_Amacuro": [
      {
        "id": "tealca-delta-amacuro-tucupita",
        "name": "TUCUPITA",
        "code": "3300",
        "address": "Ta Casa Nro 46 Local Uno Sector Centro Tucupita Delta Amacuro Zona Postal 6401",
        "city": "Tucupita, Delta Amacuro",
        "schedule": "LUNES A VIERNES 8:00 AM A 5:00 PM",
        "phones": [
          "02877211628"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Delta_Amacuro/Tucupita/Tucupita/",
        "details": {
          "Codigo": "3300",
          "Direccion": "Ta Casa Nro 46 Local Uno Sector Centro Tucupita Delta Amacuro Zona Postal 6401",
          "Ciudad": "Tucupita, Delta Amacuro",
          "Horario": "LUNES A VIERNES 8:00 AM A 5:00 PM",
          "Telefono(s)": "02877211628",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.06231,-62.04783",
        "lat": 9.06231,
        "lng": -62.04783
      }
    ],
    "Distrito_Capital": [
      {
        "id": "tealca-distrito-capital-adaia",
        "name": "ADAIA",
        "code": "J1138",
        "address": "Av. Jose Felix Sosa Edif Distiguido Con La Letra D Urb. Bello Campo Municipio Chacao Miranda Zp 1060",
        "city": "Caracas, Distrito Capital",
        "schedule": "09:00 AM HASTA 04:00 PM",
        "phones": [
          "04241259794"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Adaia/",
        "details": {
          "Codigo": "J1138",
          "Direccion": "Av. Jose Felix Sosa Edif Distiguido Con La Letra D Urb. Bello Campo Municipio Chacao Miranda Zp 1060",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "09:00 AM HASTA 04:00 PM",
          "Telefono(s)": "04241259794",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.490278,-66.851389",
        "lat": 10.490278,
        "lng": -66.851389
      },
      {
        "id": "tealca-distrito-capital-albarran-villasana",
        "name": "ALBARRAN VILLASANA",
        "code": "J1135",
        "address": "Cubre Las Zonas De Charallave, Nva Cúa, Santa Lucía, Santa Teresa Y Aeropuerto Caracas",
        "city": "Caracas, Distrito Capital",
        "schedule": "No Disponible",
        "phones": [
          "(0412) 317.97.22"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Albarran_Villasana/",
        "details": {
          "Codigo": "J1135",
          "Direccion": "Cubre Las Zonas De Charallave, Nva Cúa, Santa Lucía, Santa Teresa Y Aeropuerto Caracas",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "No Disponible",
          "Telefono(s)": "(0412) 317.97.22",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-distrito-capital-altamira",
        "name": "ALTAMIRA",
        "code": "1139",
        "address": "Av. San Juan Bosco Edif. Mayflower Altamira- Caracas",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00AM",
        "phones": [
          "02127352070"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Altamira/",
        "details": {
          "Codigo": "1139",
          "Direccion": "Av. San Juan Bosco Edif. Mayflower Altamira- Caracas",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00AM",
          "Telefono(s)": "02127352070",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.4958289,-66.85012459",
        "lat": 10.4958289,
        "lng": -66.85012459
      },
      {
        "id": "tealca-distrito-capital-c-c-express-c-a",
        "name": "C & C EXPRESS, C.A",
        "code": "1112",
        "address": "Zona Industrial La Urbina, Calle 5 Con Calle 10, Centro Empresarial Orinoco, Pb, Local 1, La Urbina, Municipio Sucre, Estado Miranda",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 12:00 PM y de 2:00 PM a 5:00 PM",
        "phones": [
          "0212-241.52.54"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/C__C_Express_Ca/",
        "details": {
          "Codigo": "1112",
          "Direccion": "Zona Industrial La Urbina, Calle 5 Con Calle 10, Centro Empresarial Orinoco, Pb, Local 1, La Urbina, Municipio Sucre, Estado Miranda",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 12:00 PM y de 2:00 PM a 5:00 PM",
          "Telefono(s)": "0212-241.52.54",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.491053,-66.809350",
        "lat": 10.491053,
        "lng": -66.80935
      },
      {
        "id": "tealca-distrito-capital-cadena-express-c-a",
        "name": "CADENA EXPRESS, C.A",
        "code": "1130",
        "address": "Urb. Los Chaguaramos, Edif. Llaeco, Torre A, Pb, Local A-3, Ciudad Universitaria Con Calle Codazzi, Parroquia San Pedro, Municipio Libertador, Caracas, Dc.",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5 :00 PM",
        "phones": [
          "0212-662.14.19",
          "662.60.63",
          "693.67.67"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Cadena_Express_Ca/",
        "details": {
          "Codigo": "1130",
          "Direccion": "Urb. Los Chaguaramos, Edif. Llaeco, Torre A, Pb, Local A-3, Ciudad Universitaria Con Calle Codazzi, Parroquia San Pedro, Municipio Libertador, Caracas, Dc.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5 :00 PM",
          "Telefono(s)": "0212-662.14.19 | 662.60.63 | 693.67.67",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.485682,-66.889863",
        "lat": 10.485682,
        "lng": -66.889863
      },
      {
        "id": "tealca-distrito-capital-comercial-23-el-paraiso-c-a",
        "name": "COMERCIAL 23 EL PARAÍSO, C.A.",
        "code": "1126",
        "address": "Urb. El Paraiso Av. Washington Qta. Nina Local Pb. Parroquia El Paraíso Municipio Libertador Caracas. Dtto. Capital Venezuela Zp. 1020",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0212) 452.20.98",
          "524.33.98",
          "(0414) 310.46.85"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Comercial_23_El_ParaIso_Ca/",
        "details": {
          "Codigo": "1126",
          "Direccion": "Urb. El Paraiso Av. Washington Qta. Nina Local Pb. Parroquia El Paraíso Municipio Libertador Caracas. Dtto. Capital Venezuela Zp. 1020",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0212) 452.20.98 | 524.33.98 | (0414) 310.46.85",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.486711,-66.939801",
        "lat": 10.486711,
        "lng": -66.939801
      },
      {
        "id": "tealca-distrito-capital-corporacion-ccfg-c-a",
        "name": "CORPORACIÓN CCFG, C.A.",
        "code": "1120",
        "address": "Santa Rosa A Santa Inés Sector San José Edif. Arichuna, Local 1 P.b. Parroquia San Jose Municipio Libertador Caracas. Dtto. Capital Venezuela Zp. 1010",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:30 AM am12:00 PM y 1:00 PM a 5:30 PM",
        "phones": [
          "(0212) 564.46.42",
          "564.42.79",
          "(0424)101.11.62"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/CorporaciOn_Ccfg_Ca/",
        "details": {
          "Codigo": "1120",
          "Direccion": "Santa Rosa A Santa Inés Sector San José Edif. Arichuna, Local 1 P.b. Parroquia San Jose Municipio Libertador Caracas. Dtto. Capital Venezuela Zp. 1010",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:30 AM am12:00 PM y 1:00 PM a 5:30 PM",
          "Telefono(s)": "(0212) 564.46.42 | 564.42.79 | (0424)101.11.62",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.508216,-66.908924",
        "lat": 10.508216,
        "lng": -66.908924
      },
      {
        "id": "tealca-distrito-capital-corporacion-elo-one-c-a",
        "name": "CORPORACIÓN ELO-ONE, C.A",
        "code": "1107",
        "address": "Via Los Guayabitos, Urb. Piedra Azul, Edf. Kinky, Pb, Locales 3 Y 4, Baruta, Municipio Baruta, Estado Miranda",
        "city": "Caracas, Distrito Capital",
        "schedule": "08:30 am a 12:30 pm y 01:30 pm a 5:30 pm .",
        "phones": [
          "0212-944.52.52",
          "944.58.80"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/CorporaciOn_Eloone_Ca/",
        "details": {
          "Codigo": "1107",
          "Direccion": "Via Los Guayabitos, Urb. Piedra Azul, Edf. Kinky, Pb, Locales 3 Y 4, Baruta, Municipio Baruta, Estado Miranda",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "08:30 am a 12:30 pm y 01:30 pm a 5:30 pm .",
          "Telefono(s)": "0212-944.52.52 | 944.58.80",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.428109,-66.874184",
        "lat": 10.428109,
        "lng": -66.874184
      },
      {
        "id": "tealca-distrito-capital-corporacion-elo-one-c-a",
        "name": "CORPORACIÓN ELO-ONE, C.A.",
        "code": "1107C",
        "address": "Urb. Los Pinos, Cc La Boyera, Piso 3, Local B-29, El Hatillo, Parroquia El Hatillo, Municipio El Hatillo, Estado Miranda.",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:30 AM A 5:30 PM (Horario Corrido)",
        "phones": [
          "0212-9616586",
          "9616239"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/CorporaciOn__Eloone_Ca/",
        "details": {
          "Codigo": "1107C",
          "Direccion": "Urb. Los Pinos, Cc La Boyera, Piso 3, Local B-29, El Hatillo, Parroquia El Hatillo, Municipio El Hatillo, Estado Miranda.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:30 AM A 5:30 PM (Horario Corrido)",
          "Telefono(s)": "0212-9616586 | 9616239",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483362,-66.823162",
        "lat": 10.483362,
        "lng": -66.823162
      },
      {
        "id": "tealca-distrito-capital-encomiendas-g2n-c-a",
        "name": "ENCOMIENDAS G2N, C.A.",
        "code": "1129",
        "address": "Av. Boulevard Raúl Leoni, Cc Plaza Las Américas, Nivel Oro, Pb, Local 1-08-b, Urb. El Cafetal, Parroquia El Cafetal, Municipio Baruta, Estado Miranda.",
        "city": "Caracas, Distrito Capital",
        "schedule": "08:30 am a 12:30 pm y 01:30 pm a 5:00 pm",
        "phones": [
          "(0212) 985.64. 69",
          "(0212) 415.14.21"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Encomiendas_G2n_Ca/",
        "details": {
          "Codigo": "1129",
          "Direccion": "Av. Boulevard Raúl Leoni, Cc Plaza Las Américas, Nivel Oro, Pb, Local 1-08-b, Urb. El Cafetal, Parroquia El Cafetal, Municipio Baruta, Estado Miranda.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "08:30 am a 12:30 pm y 01:30 pm a 5:00 pm",
          "Telefono(s)": "(0212) 985.64. 69 | (0212) 415.14.21",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.457870,-66.829583",
        "lat": 10.45787,
        "lng": -66.829583
      },
      {
        "id": "tealca-distrito-capital-encomiendas-paula-bell-c-a",
        "name": "ENCOMIENDAS PAULA BELL, C.A",
        "code": "1136",
        "address": "Av. Jose Felix Sosacon, Av Principal De Bello Campo, Edif. Antesol Piso Pb Local Durbanización Bello Campo Caraca (chacao) Miranda",
        "city": "Caracas, Distrito Capital",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [
          "0212-267-9027"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Encomiendas_Paula_Bell_Ca/",
        "details": {
          "Codigo": "1136",
          "Direccion": "Av. Jose Felix Sosacon, Av Principal De Bello Campo, Edif. Antesol Piso Pb Local Durbanización Bello Campo Caraca (chacao) Miranda",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Telefono(s)": "0212-267-9027",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-distrito-capital-envios-saga-express-c-a",
        "name": "ENVÍOS SAGA EXPRESS, C.A",
        "code": "1125",
        "address": "Sector Nueva Caracas Qta Mary P.b Calle México Con Panamericana Parroquia Sucre Municipio Libertador Caracas D Capital Venezuela Zp 1030",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 5:00 PM (horario corrido)",
        "phones": [
          "0212- 660.98.17",
          "870.33.67"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/EnvIos_Saga_Express_Ca/",
        "details": {
          "Codigo": "1125",
          "Direccion": "Sector Nueva Caracas Qta Mary P.b Calle México Con Panamericana Parroquia Sucre Municipio Libertador Caracas D Capital Venezuela Zp 1030",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 5:00 PM (horario corrido)",
          "Telefono(s)": "0212- 660.98.17 | 870.33.67",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.512747,-66.945389",
        "lat": 10.512747,
        "lng": -66.945389
      },
      {
        "id": "tealca-distrito-capital-grupo-yta-c-a",
        "name": "GRUPO YTA, C.A",
        "code": "1137",
        "address": "Av. Libertador, Edif Exa Piso Planta Baja, Local 10, Urbanización El Retirocaracas (chacao) Miranda",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes a Viernes: 8:00 am a 5:00 pm Corrido",
        "phones": [
          "0212-953-3683"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Grupo_Yta_Ca/",
        "details": {
          "Codigo": "1137",
          "Direccion": "Av. Libertador, Edif Exa Piso Planta Baja, Local 10, Urbanización El Retirocaracas (chacao) Miranda",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes a Viernes: 8:00 am a 5:00 pm Corrido",
          "Telefono(s)": "0212-953-3683",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-distrito-capital-inversiones-mildasi-c-a",
        "name": "INVERSIONES MILDASI, C.A.",
        "code": "1128",
        "address": "Avenida Fuerzas Armadas Esq. Socorro Edificio Residencias Dorado P.b. Local 2 Parroquia Altagracia Zona Postal 1010",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00am a 4:00pm Retiros/ Horario Corrido",
        "phones": [
          "0212-5641198",
          "562.08.60"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Inversiones_Mildasi_Ca/",
        "details": {
          "Codigo": "1128",
          "Direccion": "Avenida Fuerzas Armadas Esq. Socorro Edificio Residencias Dorado P.b. Local 2 Parroquia Altagracia Zona Postal 1010",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00am a 4:00pm Retiros/ Horario Corrido",
          "Telefono(s)": "0212-5641198 | 562.08.60",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.508184,-66.908903",
        "lat": 10.508184,
        "lng": -66.908903
      },
      {
        "id": "tealca-distrito-capital-ipg-2000-express-c-a",
        "name": "IPG 2000 EXPRESS, C.A",
        "code": "1133",
        "address": "Sector Prados Del Este Local Av. Rio Paragua. Cc La Pirámide Local 5-c Pb. Prados Del Este Parroquia Baruta Municipio Baruta Gran Caracas Miranda Venezuela Zp. 1080",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes a Viernes: 8:00 am a 5:00 pm Corrido",
        "phones": [
          "(0212) 977.53.98",
          "(0416) 809.56.00"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Ipg_2000_Express_Ca/",
        "details": {
          "Codigo": "1133",
          "Direccion": "Sector Prados Del Este Local Av. Rio Paragua. Cc La Pirámide Local 5-c Pb. Prados Del Este Parroquia Baruta Municipio Baruta Gran Caracas Miranda Venezuela Zp. 1080",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes a Viernes: 8:00 am a 5:00 pm Corrido",
          "Telefono(s)": "(0212) 977.53.98 | (0416) 809.56.00",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.493478,-66.876481",
        "lat": 10.493478,
        "lng": -66.876481
      },
      {
        "id": "tealca-distrito-capital-la-candelaria",
        "name": "LA CANDELARIA",
        "code": "1128B",
        "address": "Autopista Nte - Sur, Caracas",
        "city": "Caracas, Distrito Capital",
        "schedule": "MARTES A SÁBADO 7:00AM A 3:00PM",
        "phones": [
          "04122241748"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/La_Candelaria/",
        "details": {
          "Codigo": "1128B",
          "Direccion": "Autopista Nte - Sur, Caracas",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "MARTES A SÁBADO 7:00AM A 3:00PM",
          "Telefono(s)": "04122241748",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.481739,-66.918452",
        "lat": 10.481739,
        "lng": -66.918452
      },
      {
        "id": "tealca-distrito-capital-master-service-1345-c-a",
        "name": "MASTER SERVICE 1345, C.A",
        "code": "1114C",
        "address": "Urb. California Norte, Av. Paris Con Santiago De León, Edif. Premier Antes De Llegar Al Intt, Frente Al Ven 911 'sima '.",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:30 AM a 5:30 PM (Horario Corrido)",
        "phones": [
          "(0212) 237.02.86",
          "232.56.46"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Master_Service_1345_Ca/",
        "details": {
          "Codigo": "1114C",
          "Direccion": "Urb. California Norte, Av. Paris Con Santiago De León, Edif. Premier Antes De Llegar Al Intt, Frente Al Ven 911 'sima '.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:30 AM a 5:30 PM (Horario Corrido)",
          "Telefono(s)": "(0212) 237.02.86 | 232.56.46",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483299, -66.823227",
        "lat": 10.483299,
        "lng": -66.823227
      },
      {
        "id": "tealca-distrito-capital-mendez-y-fuentes-c-a",
        "name": "MENDEZ Y FUENTES C.A",
        "code": "1102",
        "address": "Av. Los Jabillos, Entre Av. Francisco Solano López Y Calle Las Flores, Galpón Nro. 6, Sabana Grande, Parroquia El Recreo Municipio Libertador Caracas D. Capital Venezuela Zp. 1050",
        "city": "Caracas, Distrito Capital",
        "schedule": "08:00 am a 5:00 pm (horario corrido)",
        "phones": [
          "(0212) 761.19.00",
          "761.70.19",
          "(0414) 322.16.06"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Mendez_Y_Fuentes_Ca/",
        "details": {
          "Codigo": "1102",
          "Direccion": "Av. Los Jabillos, Entre Av. Francisco Solano López Y Calle Las Flores, Galpón Nro. 6, Sabana Grande, Parroquia El Recreo Municipio Libertador Caracas D. Capital Venezuela Zp. 1050",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "08:00 am a 5:00 pm (horario corrido)",
          "Telefono(s)": "(0212) 761.19.00 | 761.70.19 | (0414) 322.16.06",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.496796,-66.878451",
        "lat": 10.496796,
        "lng": -66.878451
      },
      {
        "id": "tealca-distrito-capital-oficina-logistica-la-california",
        "name": "OFICINA LOGÍSTICA LA CALIFORNIA",
        "code": "AA",
        "address": "Urb. California Norte, Av. Madrid Con Callejón Bilbao, Galpón Industrial No. 2, Parroquia Leoncio Martínez, Municipio Sucre, Caracas, Distrito Capital",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0212) 280.73.28",
          "280.73.32"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Oficina_LogIstica_La_California/",
        "details": {
          "Codigo": "AA",
          "Direccion": "Urb. California Norte, Av. Madrid Con Callejón Bilbao, Galpón Industrial No. 2, Parroquia Leoncio Martínez, Municipio Sucre, Caracas, Distrito Capital",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0212) 280.73.28 | 280.73.32",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483299, -66.823227",
        "lat": 10.483299,
        "lng": -66.823227
      },
      {
        "id": "tealca-distrito-capital-plataforma-la-quinta-crespo",
        "name": "PLATAFORMA LA QUINTA CRESPO",
        "code": "NN",
        "address": "Av. Sur 2 Bis Con Av. Sur 2, Frente Al Cicpc: División De Hurto De Vehículos, Parroquia Santa Teresa, Municipio Libertador. Caracas",
        "city": "Caracas, Distrito Capital",
        "schedule": "Lunes a Viernes: 6:00 am a 3:00 pm",
        "phones": [
          "(0212) 626.22.12",
          "(0212) 626.22.10"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Plataforma_La_Quinta_Crespo/",
        "details": {
          "Codigo": "NN",
          "Direccion": "Av. Sur 2 Bis Con Av. Sur 2, Frente Al Cicpc: División De Hurto De Vehículos, Parroquia Santa Teresa, Municipio Libertador. Caracas",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Lunes a Viernes: 6:00 am a 3:00 pm",
          "Telefono(s)": "(0212) 626.22.12 | (0212) 626.22.10",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-distrito-capital-san-bernandino",
        "name": "SAN BERNANDINO",
        "code": "1128C",
        "address": "Centro Comercial Lord Center, Av. Vollmer Con Av. Urdaneta, Local 31, Pb.",
        "city": "Caracas, Distrito Capital",
        "schedule": "LUNES A VIERNES 8:00 AM A 5:00 PM",
        "phones": [
          "02125641198"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/San_Bernandino/",
        "details": {
          "Codigo": "1128C",
          "Direccion": "Centro Comercial Lord Center, Av. Vollmer Con Av. Urdaneta, Local 31, Pb.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "LUNES A VIERNES 8:00 AM A 5:00 PM",
          "Telefono(s)": "02125641198",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.50552,-66.90023",
        "lat": 10.50552,
        "lng": -66.90023
      },
      {
        "id": "tealca-distrito-capital-servicio-de-transporte-adaia",
        "name": "SERVICIO DE TRANSPORTE ADAIA",
        "code": "1138",
        "address": "Av. Jose Felix Sosa, Edificio Antesol, Pb Local 'd', Urb. Bello Campo, Municipio Chacao",
        "city": "Caracas, Distrito Capital",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [
          "0212-2651610",
          "0212-2657322"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Servicio_De_Transporte_Adaia/",
        "details": {
          "Codigo": "1138",
          "Direccion": "Av. Jose Felix Sosa, Edificio Antesol, Pb Local 'd', Urb. Bello Campo, Municipio Chacao",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Telefono(s)": "0212-2651610 | 0212-2657322",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-distrito-capital-speed-cargo-4010-c-a",
        "name": "SPEED CARGO 4010, C.A.",
        "code": "1127",
        "address": "Urb. Los Palos Grandes Av. Andrés Bello Con 1era Transv. Res. Plaza 1 Semisótano Local Nro.. 4 Parroquia Chacao Gran Caracas Miranda Venezuela Zp. 1060",
        "city": "Caracas, Distrito Capital",
        "schedule": "08:00 am a 12:00 pm y 01:00 pm a 5:00 pm",
        "phones": [
          "0212) 285.42.29",
          "285.29.80",
          "0414.338.08.62"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Speed_Cargo_4010_Ca/",
        "details": {
          "Codigo": "1127",
          "Direccion": "Urb. Los Palos Grandes Av. Andrés Bello Con 1era Transv. Res. Plaza 1 Semisótano Local Nro.. 4 Parroquia Chacao Gran Caracas Miranda Venezuela Zp. 1060",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "08:00 am a 12:00 pm y 01:00 pm a 5:00 pm",
          "Telefono(s)": "0212) 285.42.29 | 285.29.80 | 0414.338.08.62",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.495282,-66.845187",
        "lat": 10.495282,
        "lng": -66.845187
      },
      {
        "id": "tealca-distrito-capital-tied-express-c-a",
        "name": "TIED EXPRESS, C.A",
        "code": "1109",
        "address": "Chuao, Av. La Estancia, C.c.c.t, Nivel P.b Norte, Local 10-22 (bajando Por Las Escaleras De Beco), Municipio Chacao, Caracas, Distrito Capital",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 5:00 PM (horario corrido)",
        "phones": [
          "0212-959.28.69",
          "959.15.75",
          "(0414) 160.01.00"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Tied_Express_Ca/",
        "details": {
          "Codigo": "1109",
          "Direccion": "Chuao, Av. La Estancia, C.c.c.t, Nivel P.b Norte, Local 10-22 (bajando Por Las Escaleras De Beco), Municipio Chacao, Caracas, Distrito Capital",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 5:00 PM (horario corrido)",
          "Telefono(s)": "0212-959.28.69 | 959.15.75 | (0414) 160.01.00",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.495561,-66.876009",
        "lat": 10.495561,
        "lng": -66.876009
      },
      {
        "id": "tealca-distrito-capital-tienda-virtual-exportaciones-quinta-crespo",
        "name": "TIENDA VIRTUAL EXPORTACIONES QUINTA CRESPO",
        "code": "EXPNN",
        "address": "Av. Sur 2 Bis, Calle 100, Quinta Crespo, Caracas, D.c. Diagonal Al Cicpc Div. De VehÍculos.",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM - 5:00 PM",
        "phones": [],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Tienda_Virtual_Exportaciones_Quinta_Crespo/",
        "details": {
          "Codigo": "EXPNN",
          "Direccion": "Av. Sur 2 Bis, Calle 100, Quinta Crespo, Caracas, D.c. Diagonal Al Cicpc Div. De VehÍculos.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM - 5:00 PM",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.49257,-66.91823",
        "lat": 10.49257,
        "lng": -66.91823
      },
      {
        "id": "tealca-distrito-capital-ven-latin-c-a",
        "name": "VEN & LATIN , C.A.",
        "code": "1118",
        "address": "Urb. San Martín I Edif. Indaragua Pb. Local B2 Av. José Ángel Lamas, Calle Sevilla Parroquia San Juan Municipio Libertador Caracas. D. Capital Venezuela Zp. 1020",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM 5:00 PM",
        "phones": [
          "0212-451.06.82"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Ven__Latin__Ca/",
        "details": {
          "Codigo": "1118",
          "Direccion": "Urb. San Martín I Edif. Indaragua Pb. Local B2 Av. José Ángel Lamas, Calle Sevilla Parroquia San Juan Municipio Libertador Caracas. D. Capital Venezuela Zp. 1020",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM 5:00 PM",
          "Telefono(s)": "0212-451.06.82",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.483299,-66.823216",
        "lat": 10.483299,
        "lng": -66.823216
      },
      {
        "id": "tealca-distrito-capital-yepmen-transporte-c-a",
        "name": "YEPMEN TRANSPORTE, C.A.",
        "code": "1131",
        "address": "Distrito Capital, Caracas, Municipio Libertador, Parroquia El Recreo, Urbanización Los Caobos, Zona Postal 1050, Transversal Colón Entre Avenida Principal. De Maripérez Y Montevideo Edificio Tirrenia Pub, Local C.",
        "city": "Caracas, Distrito Capital",
        "schedule": "8:00 AM a 5:00 PM ( Horario Corrido)",
        "phones": [
          "(0212) 578.43.45",
          "418.71.94"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Distrito_Capital/Caracas/Yepmen_Transporte_Ca/",
        "details": {
          "Codigo": "1131",
          "Direccion": "Distrito Capital, Caracas, Municipio Libertador, Parroquia El Recreo, Urbanización Los Caobos, Zona Postal 1050, Transversal Colón Entre Avenida Principal. De Maripérez Y Montevideo Edificio Tirrenia Pub, Local C.",
          "Ciudad": "Caracas, Distrito Capital",
          "Horario": "8:00 AM a 5:00 PM ( Horario Corrido)",
          "Telefono(s)": "(0212) 578.43.45 | 418.71.94",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.495387,-66.876191",
        "lat": 10.495387,
        "lng": -66.876191
      }
    ],
    "Falcon": [
      {
        "id": "tealca-falcon-fa-y-jj-c-a",
        "name": "FA Y JJ, C.A",
        "code": "7606",
        "address": "Edif Colina Planta Baja Local S/n Calle Dominó Con Esquina Calle Democracia Sector Centro Parroquia San Antonio Municipio Miranda Coro Falcón Venezuela Zp. 4001",
        "city": "Coro, Falcon",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0268-251.04.87"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Falcon/Coro/Fa_Y_Jj_Ca/",
        "details": {
          "Codigo": "7606",
          "Direccion": "Edif Colina Planta Baja Local S/n Calle Dominó Con Esquina Calle Democracia Sector Centro Parroquia San Antonio Municipio Miranda Coro Falcón Venezuela Zp. 4001",
          "Ciudad": "Coro, Falcon",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0268-251.04.87",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.402653,-69.665887",
        "lat": 11.402653,
        "lng": -69.665887
      },
      {
        "id": "tealca-falcon-fa-y-jj-c-a",
        "name": "FA Y JJ, C.A.",
        "code": "7606B",
        "address": "Av. Luis Beltrán Prieto Figueroa Entre Calle Los Rosales Y Monagas, Edificio Mirimire, Parroquia Carirubana, Municipio Carirubana, Punto Fijo, Estado Falcón.",
        "city": "Punto Fijo, Falcon",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0412) 798.52.19",
          "0412.668.4058"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Falcon/Punto_Fijo/Fa_Y_Jj_Ca/",
        "details": {
          "Codigo": "7606B",
          "Direccion": "Av. Luis Beltrán Prieto Figueroa Entre Calle Los Rosales Y Monagas, Edificio Mirimire, Parroquia Carirubana, Municipio Carirubana, Punto Fijo, Estado Falcón.",
          "Ciudad": "Punto Fijo, Falcon",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0412) 798.52.19 | 0412.668.4058",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.706111,-70.191180",
        "lat": 11.706111,
        "lng": -70.19118
      }
    ],
    "Guarico": [
      {
        "id": "tealca-guarico-inversiones-transporte-world-c-a",
        "name": "INVERSIONES TRANSPORTE WORLD, C.A.",
        "code": "5303",
        "address": "Calle Atarraya Edificio Guirdanella Plata Baja Local No. 1 Sector Centro, Municipio Leonardo Infante Parroquia Valle De La Pascua Zp 2350",
        "city": "Valle De La Pascua, Guarico",
        "schedule": "8:00 am a 12:00 pm/ 2:00 pm a 5:00 pm",
        "phones": [
          "0235-341.62.62"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Guarico/Valle_De_La_Pascua/Inversiones_Transporte_World_Ca/",
        "details": {
          "Codigo": "5303",
          "Direccion": "Calle Atarraya Edificio Guirdanella Plata Baja Local No. 1 Sector Centro, Municipio Leonardo Infante Parroquia Valle De La Pascua Zp 2350",
          "Ciudad": "Valle De La Pascua, Guarico",
          "Horario": "8:00 am a 12:00 pm/ 2:00 pm a 5:00 pm",
          "Telefono(s)": "0235-341.62.62",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.208060,-66.004036",
        "lat": 9.20806,
        "lng": -66.004036
      },
      {
        "id": "tealca-guarico-javi-y-zul-c-a",
        "name": "JAVI Y ZUL, C.A.",
        "code": "J5504",
        "address": "Calle 5 Local No. 34 Barrio Los Tamarindos, Coropo - Edo Aragua",
        "city": "Calabozo, Guarico",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Guarico/Calabozo/Javi_Y_Zul_Ca/",
        "details": {
          "Codigo": "J5504",
          "Direccion": "Calle 5 Local No. 34 Barrio Los Tamarindos, Coropo - Edo Aragua",
          "Ciudad": "Calabozo, Guarico",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      }
    ],
    "Lara": [
      {
        "id": "tealca-lara-barquisimeto",
        "name": "BARQUISIMETO",
        "code": "GG02",
        "address": "Calle 27 Con Carrera 5, Zona Industrial I Barrio Unión Con Galpón 1. Detrás Del Llenadero De Gas Comunal.",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0251-2377072"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Barquisimeto/",
        "details": {
          "Codigo": "GG02",
          "Direccion": "Calle 27 Con Carrera 5, Zona Industrial I Barrio Unión Con Galpón 1. Detrás Del Llenadero De Gas Comunal.",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0251-2377072",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-lara-carora",
        "name": "CARORA",
        "code": "J7801",
        "address": "0",
        "city": "Carora, Lara",
        "schedule": "0",
        "phones": [
          "04126737512"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Carora/Carora/",
        "details": {
          "Codigo": "J7801",
          "Direccion": "0",
          "Ciudad": "Carora, Lara",
          "Horario": "0",
          "Telefono(s)": "04126737512",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=0,0",
        "lat": 0,
        "lng": 0
      },
      {
        "id": "tealca-lara-distribuidora-de-transporte-alvarado",
        "name": "DISTRIBUIDORA DE TRANSPORTE ALVARADO",
        "code": "J7913",
        "address": "Solo Recolecta",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "0424-5662501"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Distribuidora_De_Transporte_Alvarado/",
        "details": {
          "Codigo": "J7913",
          "Direccion": "Solo Recolecta",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "0424-5662501",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-lara-distribuidora-matzu-2010-c-a",
        "name": "DISTRIBUIDORA MATZU 2010, C.A",
        "code": "7910",
        "address": "Carrera 24, Entre Calles 6 Y Av. Morán, Parroquia Catedral, Municipio Iribarren, Barquisimeto, Estado Lara",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00 AM A 4:00 PM (Horario Corrido)",
        "phones": [
          "0251-267.98.16"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Distribuidora_Matzu_2010_Ca/",
        "details": {
          "Codigo": "7910",
          "Direccion": "Carrera 24, Entre Calles 6 Y Av. Morán, Parroquia Catedral, Municipio Iribarren, Barquisimeto, Estado Lara",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00 AM A 4:00 PM (Horario Corrido)",
          "Telefono(s)": "0251-267.98.16",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.071363,-69.298102",
        "lat": 10.071363,
        "lng": -69.298102
      },
      {
        "id": "tealca-lara-grupo-quincas-c-a",
        "name": "GRUPO QUINCAS, C.A",
        "code": "7914",
        "address": "Calle San Rafael, Con Av. 1, La Mata",
        "city": "Cabudare, Lara",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm y de 1:00 pm a 4:00 pm",
        "phones": [
          "(0251) 261.77.84",
          "(0414) 506.07.39"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Cabudare/Grupo_Quincas_Ca/",
        "details": {
          "Codigo": "7914",
          "Direccion": "Calle San Rafael, Con Av. 1, La Mata",
          "Ciudad": "Cabudare, Lara",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm y de 1:00 pm a 4:00 pm",
          "Telefono(s)": "(0251) 261.77.84 | (0414) 506.07.39",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.028918,-69.257327",
        "lat": 10.028918,
        "lng": -69.257327
      },
      {
        "id": "tealca-lara-infinity-cargo-c-a",
        "name": "INFINITY CARGO, C.A",
        "code": "7912",
        "address": "Carrera 21 Entre Calle 14 Y 15, Parroquia Catedral, Municipio Iribarren, Barquisimeto, Estado Lara",
        "city": "Barquisimeto, Lara",
        "schedule": "8:30 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0251-635.29.97",
          "814.52.18"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Infinity_Cargo_Ca/",
        "details": {
          "Codigo": "7912",
          "Direccion": "Carrera 21 Entre Calle 14 Y 15, Parroquia Catedral, Municipio Iribarren, Barquisimeto, Estado Lara",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:30 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0251-635.29.97 | 814.52.18",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.068121,-69.306672",
        "lat": 10.068121,
        "lng": -69.306672
      },
      {
        "id": "tealca-lara-oficina-comercial-barquisimeto",
        "name": "OFICINA COMERCIAL BARQUISIMETO",
        "code": "GG",
        "address": "Sector Enelvar Edif. Profesional Barreto Local 1 Y 2 Calle 22 Esq. Carrera 23 Parroquia Catedral Municipio Barquisimeto Lara Venezuela Zp. 3001",
        "city": "Barquisimeto, Lara",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 pm a 5:00 pm",
        "phones": [
          "0251-231.95.69",
          "231.93.32",
          "233.13.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Oficina_Comercial_Barquisimeto/",
        "details": {
          "Codigo": "GG",
          "Direccion": "Sector Enelvar Edif. Profesional Barreto Local 1 Y 2 Calle 22 Esq. Carrera 23 Parroquia Catedral Municipio Barquisimeto Lara Venezuela Zp. 3001",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 pm a 5:00 pm",
          "Telefono(s)": "0251-231.95.69 | 231.93.32 | 233.13.73",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.069726,-69.312594",
        "lat": 10.069726,
        "lng": -69.312594
      },
      {
        "id": "tealca-lara-r-g-07-c-a",
        "name": "R.G 07, C.A",
        "code": "7909",
        "address": "Barrio Nuevo, Calle 59, Entre Carreras 13 Y 13a, Casa No. 13/69, Parroquia Concepción, Municipio Iribarren, Barquisimeto, Estado Lara",
        "city": "Barquisimeto, Lara",
        "schedule": "8:30 am a 12:00 pm 1:00 pm a 5:30 pm",
        "phones": [
          "0251-441.60.52",
          "416.95.66"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Rg_07_Ca/",
        "details": {
          "Codigo": "7909",
          "Direccion": "Barrio Nuevo, Calle 59, Entre Carreras 13 Y 13a, Casa No. 13/69, Parroquia Concepción, Municipio Iribarren, Barquisimeto, Estado Lara",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "8:30 am a 12:00 pm 1:00 pm a 5:30 pm",
          "Telefono(s)": "0251-441.60.52 | 416.95.66",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.053267,-69.348858",
        "lat": 10.053267,
        "lng": -69.348858
      },
      {
        "id": "tealca-lara-transporte-e-inversiones-j-e-c-a",
        "name": "TRANSPORTE E INVERSIONES J.E., C.A.",
        "code": "J7915",
        "address": "Calle Orinoco Transversal 2 Casa # 147 Urb Fundala",
        "city": "Barquisimeto, Lara",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [
          "04245721573",
          "02512536115"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Transporte_E_Inversiones_Je_Ca/",
        "details": {
          "Codigo": "J7915",
          "Direccion": "Calle Orinoco Transversal 2 Casa # 147 Urb Fundala",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Telefono(s)": "04245721573 | 02512536115",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-lara-wonke-circulaciones",
        "name": "WONKE CIRCULACIONES",
        "code": "J7911",
        "address": "Urb. El Recreo Res. El Parque. Cubre La Ciudad De Quibor, Tocuyo Y Carora",
        "city": "Barquisimeto, Lara",
        "schedule": "No Disponible",
        "phones": [
          "4245721573"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Lara/Barquisimeto/Wonke_Circulaciones/",
        "details": {
          "Codigo": "J7911",
          "Direccion": "Urb. El Recreo Res. El Parque. Cubre La Ciudad De Quibor, Tocuyo Y Carora",
          "Ciudad": "Barquisimeto, Lara",
          "Horario": "No Disponible",
          "Telefono(s)": "4245721573",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      }
    ],
    "Merida": [
      {
        "id": "tealca-merida-coorporacion-bj-c-a",
        "name": "COORPORACIÓN BJ, C.A.",
        "code": "8304",
        "address": "Sector La Inmaculada, Calle No. 9 Entre Av. 11 Y 12, Local 11-22, Parroquia Presidente Páez, Municipio Alberto Adriani, El Vigia, Estado Mérida",
        "city": "El Vigia, Merida",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0275-881.25.09",
          "(0426) 176.74.43"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Merida/El_Vigia/CoorporaciOn_Bj_Ca/",
        "details": {
          "Codigo": "8304",
          "Direccion": "Sector La Inmaculada, Calle No. 9 Entre Av. 11 Y 12, Local 11-22, Parroquia Presidente Páez, Municipio Alberto Adriani, El Vigia, Estado Mérida",
          "Ciudad": "El Vigia, Merida",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0275-881.25.09 | (0426) 176.74.43",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.615414,-71.647944",
        "lat": 8.615414,
        "lng": -71.647944
      },
      {
        "id": "tealca-merida-gleyma-express-c-a",
        "name": "GLEYMA EXPRESS, C.A.",
        "code": "8301C",
        "address": "Av. Fernández Peña, Edificio Tinajero, Pb , Local No. 1, Ejido, Estado Mérida",
        "city": "Ejido, Merida",
        "schedule": "Lunes a Viernes: 8:00 am a 1:00 pm",
        "phones": [
          "0274-245.23.92",
          "0414-756.18.17"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Merida/Ejido/Gleyma_Express_Ca/",
        "details": {
          "Codigo": "8301C",
          "Direccion": "Av. Fernández Peña, Edificio Tinajero, Pb , Local No. 1, Ejido, Estado Mérida",
          "Ciudad": "Ejido, Merida",
          "Horario": "Lunes a Viernes: 8:00 am a 1:00 pm",
          "Telefono(s)": "0274-245.23.92 | 0414-756.18.17",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.551519,-71.231178",
        "lat": 8.551519,
        "lng": -71.231178
      },
      {
        "id": "tealca-merida-gleyma-express-c-a",
        "name": "GLEYMA EXPRESS, C.A.",
        "code": "8301B",
        "address": "Calle 40 Entre La Av. Urdaneta Y Gonzalo Picón Punto De Referencia, Bajando Por El Mercado Periférico, Cruzar A Mano Derecha",
        "city": "Merida, Merida",
        "schedule": "8:00 AM a 12:00 PM y de 2:00 PM A 5:00 PM",
        "phones": [
          "0274-416.35.96",
          "416.36.91"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Merida/Merida/Gleyma_Express_Ca/",
        "details": {
          "Codigo": "8301B",
          "Direccion": "Calle 40 Entre La Av. Urdaneta Y Gonzalo Picón Punto De Referencia, Bajando Por El Mercado Periférico, Cruzar A Mano Derecha",
          "Ciudad": "Merida, Merida",
          "Horario": "8:00 AM a 12:00 PM y de 2:00 PM A 5:00 PM",
          "Telefono(s)": "0274-416.35.96 | 416.36.91",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.587976,-71.153778",
        "lat": 8.587976,
        "lng": -71.153778
      },
      {
        "id": "tealca-merida-oficina-comercial-merida",
        "name": "OFICINA COMERCIAL MÉRIDA",
        "code": "KK",
        "address": "Final De La Av. Don Tulio Febres Cordero (frente A Las Canchas De Tenis), Parroquia Domingo Peña, Municipio Libertador, Mérida, Estado Mérida",
        "city": "Merida, Merida",
        "schedule": "8:00 AM a 01:00 PM y de 2:00 PM a 5:00 PM",
        "phones": [
          "0274-416.35.96",
          "(0414) 750.44.22"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Merida/Merida/Oficina_Comercial_MErida/",
        "details": {
          "Codigo": "KK",
          "Direccion": "Final De La Av. Don Tulio Febres Cordero (frente A Las Canchas De Tenis), Parroquia Domingo Peña, Municipio Libertador, Mérida, Estado Mérida",
          "Ciudad": "Merida, Merida",
          "Horario": "8:00 AM a 01:00 PM y de 2:00 PM a 5:00 PM",
          "Telefono(s)": "0274-416.35.96 | (0414) 750.44.22",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=8.596669,-71.153314",
        "lat": 8.596669,
        "lng": -71.153314
      }
    ],
    "Miranda": [
      {
        "id": "tealca-miranda-encomiendas-ch-express-c-a",
        "name": "ENCOMIENDAS CH EXPRESS, C.A.",
        "code": "1132",
        "address": "Carretera Petare Santa Lucía, Km. 9, Local No. 3, Pb, Sector El Limoncito, Urb. Hacienda La Candelaria, Parroquia Filas De Mariche, Municipio Sucre, Estado Miranda",
        "city": "Filas De Mariche, Miranda",
        "schedule": "Lunes a Viernes: 08:00 am a 4:00 pm . Horario corrido.",
        "phones": [
          "0212-532.03.25",
          "532.21.26"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/Filas_De_Mariche/Encomiendas_Ch_Express_Ca/",
        "details": {
          "Codigo": "1132",
          "Direccion": "Carretera Petare Santa Lucía, Km. 9, Local No. 3, Pb, Sector El Limoncito, Urb. Hacienda La Candelaria, Parroquia Filas De Mariche, Municipio Sucre, Estado Miranda",
          "Ciudad": "Filas De Mariche, Miranda",
          "Horario": "Lunes a Viernes: 08:00 am a 4:00 pm . Horario corrido.",
          "Telefono(s)": "0212-532.03.25 | 532.21.26",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.468627,-66.771350",
        "lat": 10.468627,
        "lng": -66.77135
      },
      {
        "id": "tealca-miranda-encomiendas-julikar-c-a",
        "name": "ENCOMIENDAS JULIKAR, C.A.",
        "code": "1501",
        "address": "Carretera Charallave-cua, Km. 1, Cc Industrial Franfil, Pb, Local 2, Parroquia Charallave, Municipio Cristóbal Rojas, Charallave, Estado Miranda",
        "city": "Charallave, Miranda",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 4:00 PM",
        "phones": [
          "0239-248.27.11"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/Charallave/Encomiendas_Julikar_Ca/",
        "details": {
          "Codigo": "1501",
          "Direccion": "Carretera Charallave-cua, Km. 1, Cc Industrial Franfil, Pb, Local 2, Parroquia Charallave, Municipio Cristóbal Rojas, Charallave, Estado Miranda",
          "Ciudad": "Charallave, Miranda",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 4:00 PM",
          "Telefono(s)": "0239-248.27.11",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.224024,-66.866455",
        "lat": 10.224024,
        "lng": -66.866455
      },
      {
        "id": "tealca-miranda-envios-express-los-salias-c-a",
        "name": "ENVÍOS EXPRESS LOS SALIAS, C.A",
        "code": "1404B",
        "address": "Av. Pedro Russo Ferrer Sector El Tambor Centro Comercial Vasconia Pb Local L 12 Parroquia Los Teques Municipio Guaicaipuro Los Teques Miranda Venezuela Zp. 1201",
        "city": "Los Teques, Miranda",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0212) 364.3370"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/Los_Teques/EnvIos_Express_Los_Salias_Ca/",
        "details": {
          "Codigo": "1404B",
          "Direccion": "Av. Pedro Russo Ferrer Sector El Tambor Centro Comercial Vasconia Pb Local L 12 Parroquia Los Teques Municipio Guaicaipuro Los Teques Miranda Venezuela Zp. 1201",
          "Ciudad": "Los Teques, Miranda",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0212) 364.3370",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.353416,-67.032178",
        "lat": 10.353416,
        "lng": -67.032178
      },
      {
        "id": "tealca-miranda-envios-express-los-salias-c-a",
        "name": "ENVÍOS EXPRESS LOS SALIAS, C.A",
        "code": "1404",
        "address": "Av. Perimetral, Cc Los Castores, Edificio E, Local L-e, San Antonio De Los Altos, Parroquia San Antonio, Municipio Los Salias, Estado Miranda",
        "city": "San Antonio De Los A, Miranda",
        "schedule": "8:30 AM a 12:00 PM y de 1:00 PM a 6:00 PM",
        "phones": [
          "0212-215.25.26",
          "429.39.62"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/San_Antonio_De_Los_A/EnvIos_Express_Los_Salias_Ca/",
        "details": {
          "Codigo": "1404",
          "Direccion": "Av. Perimetral, Cc Los Castores, Edificio E, Local L-e, San Antonio De Los Altos, Parroquia San Antonio, Municipio Los Salias, Estado Miranda",
          "Ciudad": "San Antonio De Los A, Miranda",
          "Horario": "8:30 AM a 12:00 PM y de 1:00 PM a 6:00 PM",
          "Telefono(s)": "0212-215.25.26 | 429.39.62",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.373875,-66.961332",
        "lat": 10.373875,
        "lng": -66.961332
      },
      {
        "id": "tealca-miranda-inversiones-pahies-77-c-a",
        "name": "INVERSIONES PAHIES 77, C.A.",
        "code": "1302",
        "address": "Calle Ramón Alonzo Blanco, 2do. Bolulevard Pueblo De Guatire, Local Nro. A-1. Municipio Zamora Parroquia Guatire. Edo. Miranda Zp 1221.",
        "city": "Guatire, Miranda",
        "schedule": "8:00 am a 4:00 pm ( Horario Corrido)",
        "phones": [
          "0212-342.01.41",
          "341.99.66"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/Guatire/Inversiones_Pahies_77_Ca/",
        "details": {
          "Codigo": "1302",
          "Direccion": "Calle Ramón Alonzo Blanco, 2do. Bolulevard Pueblo De Guatire, Local Nro. A-1. Municipio Zamora Parroquia Guatire. Edo. Miranda Zp 1221.",
          "Ciudad": "Guatire, Miranda",
          "Horario": "8:00 am a 4:00 pm ( Horario Corrido)",
          "Telefono(s)": "0212-342.01.41 | 341.99.66",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.478660,10.478660",
        "lat": 10.47866,
        "lng": 10.47866
      },
      {
        "id": "tealca-miranda-inversiones-virg-bet-c-a",
        "name": "INVERSIONES VIRG BET,C.A",
        "code": "J1304",
        "address": "Cubre La Zona De Higuerote, Río Chico",
        "city": "Higuerote, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "0414- 9000763"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/Higuerote/Inversiones_Virg_Betca/",
        "details": {
          "Codigo": "J1304",
          "Direccion": "Cubre La Zona De Higuerote, Río Chico",
          "Ciudad": "Higuerote, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "0414- 9000763",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-miranda-inversiones-virg-bet-c-a",
        "name": "INVERSIONES VIRG BET,C.A",
        "code": "J1303",
        "address": "Cubre Zona De Guarenas Y Mampote, Edo. Miranda.",
        "city": "Guarenas, Miranda",
        "schedule": "No Disponible",
        "phones": [
          "414-9000763"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Miranda/Guarenas/Inversiones_Virg_Betca/",
        "details": {
          "Codigo": "J1303",
          "Direccion": "Cubre Zona De Guarenas Y Mampote, Edo. Miranda.",
          "Ciudad": "Guarenas, Miranda",
          "Horario": "No Disponible",
          "Telefono(s)": "414-9000763",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      }
    ],
    "Monagas": [
      {
        "id": "tealca-monagas-la-diligencia-express-c-a",
        "name": "LA DILIGENCIA EXPRESS, C.A",
        "code": "3006",
        "address": "Av Alirio Ugarte Pelayo Centro Comercial La Estacion Nivel Pb Local 6 Sector Bajo Guarapiche Maturin Monagas Zona Postal 6201",
        "city": "Maturin, Monagas",
        "schedule": "LUNES A VIERNES 8:00 AM A 5:00 PM",
        "phones": [
          "0291-314.33.07"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Monagas/Maturin/La_Diligencia_Express_Ca/",
        "details": {
          "Codigo": "3006",
          "Direccion": "Av Alirio Ugarte Pelayo Centro Comercial La Estacion Nivel Pb Local 6 Sector Bajo Guarapiche Maturin Monagas Zona Postal 6201",
          "Ciudad": "Maturin, Monagas",
          "Horario": "LUNES A VIERNES 8:00 AM A 5:00 PM",
          "Telefono(s)": "0291-314.33.07",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.76106,-63.18643",
        "lat": 9.76106,
        "lng": -63.18643
      },
      {
        "id": "tealca-monagas-oficina-comercial-maturin",
        "name": "OFICINA COMERCIAL MATURÍN",
        "code": "RR",
        "address": "Av. Raul Leoni, Galpón Nro.1, Adyacente A La Escuela Técnica Industrial, Parroquia Las Cocuizas, Municipio Maturín, Maturín, Estado Monagas",
        "city": "Maturin, Monagas",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0291-643.93.50",
          "(0291) 642.23.10"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Monagas/Maturin/Oficina_Comercial_MaturIn/",
        "details": {
          "Codigo": "RR",
          "Direccion": "Av. Raul Leoni, Galpón Nro.1, Adyacente A La Escuela Técnica Industrial, Parroquia Las Cocuizas, Municipio Maturín, Maturín, Estado Monagas",
          "Ciudad": "Maturin, Monagas",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0291-643.93.50 | (0291) 642.23.10",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.743230,-63.180953",
        "lat": 9.74323,
        "lng": -63.180953
      },
      {
        "id": "tealca-monagas-servicios-de-encomiendas-calexma-c-a",
        "name": "SERVICIOS DE ENCOMIENDAS CALEXMA C.A.",
        "code": "3004",
        "address": "Av. Miranda Calle 12 Con Carrera 11 Edif Tealca Pb. Centro San Simón, Parroquia Bolívar Municipio Maturín Monagas Venezuela Zp. 6201",
        "city": "Maturin, Monagas",
        "schedule": "8:00 am a 5:00 pm (Horario corrido)",
        "phones": [
          "0291-316.29.04",
          "935.01.07"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Monagas/Maturin/Servicios_De_Encomiendas_Calexma_Ca/",
        "details": {
          "Codigo": "3004",
          "Direccion": "Av. Miranda Calle 12 Con Carrera 11 Edif Tealca Pb. Centro San Simón, Parroquia Bolívar Municipio Maturín Monagas Venezuela Zp. 6201",
          "Ciudad": "Maturin, Monagas",
          "Horario": "8:00 am a 5:00 pm (Horario corrido)",
          "Telefono(s)": "0291-316.29.04 | 935.01.07",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.752470,-63.167909",
        "lat": 9.75247,
        "lng": -63.167909
      },
      {
        "id": "tealca-monagas-sterling-express-c-a",
        "name": "STERLING EXPRESS, C.A",
        "code": "3005",
        "address": "Sector Juanico. Centro Comercial Juanico Este. Local N3 Planta Baja, Al Lado Del Farmatodo",
        "city": "Maturin, Monagas",
        "schedule": "8:00 AM 12:00 PM y de 2:00 PM a 5:00 PM",
        "phones": [
          "0291-643.36.91",
          "(0424) 973.95.67"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Monagas/Maturin/Sterling_Express_Ca/",
        "details": {
          "Codigo": "3005",
          "Direccion": "Sector Juanico. Centro Comercial Juanico Este. Local N3 Planta Baja, Al Lado Del Farmatodo",
          "Ciudad": "Maturin, Monagas",
          "Horario": "8:00 AM 12:00 PM y de 2:00 PM a 5:00 PM",
          "Telefono(s)": "0291-643.36.91 | (0424) 973.95.67",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.743354,-63.180896",
        "lat": 9.743354,
        "lng": -63.180896
      }
    ],
    "Nueva_Esparta": [
      {
        "id": "tealca-nueva-esparta-inversiones-aura",
        "name": "INVERSIONES AURA",
        "code": "J2706",
        "address": "Av. 4 De Mayo Cc 4 De Mayo Nivel Pb Local 09 Zona Porlamar Nueva Esparta Zona Postal 6301",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "08:00 AM HASTA 05:00 PM",
        "phones": [
          "02952635789"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Nueva_Esparta/Porlamar/Inversiones_Aura/",
        "details": {
          "Codigo": "J2706",
          "Direccion": "Av. 4 De Mayo Cc 4 De Mayo Nivel Pb Local 09 Zona Porlamar Nueva Esparta Zona Postal 6301",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "08:00 AM HASTA 05:00 PM",
          "Telefono(s)": "02952635789",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10ro.57'28.66,063ro.50'56.62"
      },
      {
        "id": "tealca-nueva-esparta-inversiones-aura-2006-c-a",
        "name": "INVERSIONES AURA 2006, C.A",
        "code": "2706",
        "address": "Av. 4 De Mayo Cc 4 De Mayo Nivel Pb Local 09 Zona Porlamar Porlamar Nueva Esparta Zona Postal 6310",
        "city": "Porlamar, Nueva Esparta",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm",
        "phones": [
          "0295-9350012",
          "0295-2635789"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Nueva_Esparta/Porlamar/Inversiones_Aura_2006_Ca/",
        "details": {
          "Codigo": "2706",
          "Direccion": "Av. 4 De Mayo Cc 4 De Mayo Nivel Pb Local 09 Zona Porlamar Porlamar Nueva Esparta Zona Postal 6310",
          "Ciudad": "Porlamar, Nueva Esparta",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm",
          "Telefono(s)": "0295-9350012 | 0295-2635789",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-nueva-esparta-juan-griego",
        "name": "JUAN GRIEGO",
        "code": "2706B",
        "address": "Local Plaza Central, Centro Comercial La Estancia Av 3 De Mayo Local Pc Poblacion Juan Griego",
        "city": "Juan Griego, Nueva Esparta",
        "schedule": "LUNES A VIERNES 8:00 AM A 5:00 PM",
        "phones": [
          "02959350012"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Nueva_Esparta/Juan_Griego/Juan_Griego/",
        "details": {
          "Codigo": "2706B",
          "Direccion": "Local Plaza Central, Centro Comercial La Estancia Av 3 De Mayo Local Pc Poblacion Juan Griego",
          "Ciudad": "Juan Griego, Nueva Esparta",
          "Horario": "LUNES A VIERNES 8:00 AM A 5:00 PM",
          "Telefono(s)": "02959350012",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=11.08247,-63.96501",
        "lat": 11.08247,
        "lng": -63.96501
      }
    ],
    "Portuguesa": [
      {
        "id": "tealca-portuguesa-san-carlos",
        "name": "SAN CARLOS",
        "code": "5401B",
        "address": "Calle 30 Cruce Con Avenida 35, Cc PÁez Nivel Pb, Local 15, Sector Centro Acarigua Edo. Portuguesa",
        "city": "Acarigua, Portuguesa",
        "schedule": "8:00 AM",
        "phones": [
          "04120566000"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Portuguesa/Acarigua/San_Carlos/",
        "details": {
          "Codigo": "5401B",
          "Direccion": "Calle 30 Cruce Con Avenida 35, Cc PÁez Nivel Pb, Local 15, Sector Centro Acarigua Edo. Portuguesa",
          "Ciudad": "Acarigua, Portuguesa",
          "Horario": "8:00 AM",
          "Telefono(s)": "04120566000",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.550633,-69.190053",
        "lat": 9.550633,
        "lng": -69.190053
      }
    ],
    "Sucre": [
      {
        "id": "tealca-sucre-carupano",
        "name": "CARUPANO",
        "code": "J2804",
        "address": "0",
        "city": "Carupano, Sucre",
        "schedule": "0",
        "phones": [
          "04248116062"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Sucre/Carupano/Carupano/",
        "details": {
          "Codigo": "J2804",
          "Direccion": "0",
          "Ciudad": "Carupano, Sucre",
          "Horario": "0",
          "Telefono(s)": "04248116062",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=0,0",
        "lat": 0,
        "lng": 0
      },
      {
        "id": "tealca-sucre-encomiendas-sucre-c-a",
        "name": "ENCOMIENDAS SUCRE, C.A",
        "code": "2802",
        "address": "Av. Aristides Rojas, (av. Perimetral), C.c. Marigamar, P.b. Local 1, Sector Don Bosco, Parroquia Ayacucho, Municipio Sucre, Cumana, Edo Sucre, Venezuela, Zp. 6101",
        "city": "Cumana, Sucre",
        "schedule": "8:00 AM a 12:00 PM y de 2:00 PM a 5:30 PM",
        "phones": [
          "0293-433.46.49",
          "(0414) 840.01.03"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Sucre/Cumana/Encomiendas_Sucre_Ca/",
        "details": {
          "Codigo": "2802",
          "Direccion": "Av. Aristides Rojas, (av. Perimetral), C.c. Marigamar, P.b. Local 1, Sector Don Bosco, Parroquia Ayacucho, Municipio Sucre, Cumana, Edo Sucre, Venezuela, Zp. 6101",
          "Ciudad": "Cumana, Sucre",
          "Horario": "8:00 AM a 12:00 PM y de 2:00 PM a 5:30 PM",
          "Telefono(s)": "0293-433.46.49 | (0414) 840.01.03",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.454501,-64.185166",
        "lat": 10.454501,
        "lng": -64.185166
      }
    ],
    "Tachira": [
      {
        "id": "tealca-tachira-inversiones-jvs-1117-rohi-c-a",
        "name": "INVERSIONES JVS 1117 ROHI, C.A.",
        "code": "8110",
        "address": "Inal De La Carrera 5 Frente Al Comando De Ingenieros Del Ejército, Local Nro.2 . La Concordia San Cristóbal Estado Táchira Venezuela Zp. 5001",
        "city": "San Cristobal, Tachira",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "0276-348.85.74",
          "(0414)379.93.89"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Cristobal/Inversiones_Jvs_1117_Rohi_Ca/",
        "details": {
          "Codigo": "8110",
          "Direccion": "Inal De La Carrera 5 Frente Al Comando De Ingenieros Del Ejército, Local Nro.2 . La Concordia San Cristóbal Estado Táchira Venezuela Zp. 5001",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "0276-348.85.74 | (0414)379.93.89",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.773291,-72.220795",
        "lat": 7.773291,
        "lng": -72.220795
      },
      {
        "id": "tealca-tachira-inversiones-licealka-c-a",
        "name": "INVERSIONES LICEALKA, C.A.",
        "code": "J8112",
        "address": "Calle Los Olivares Local Nro. 03, Sector Los Magallanes. Catia.",
        "city": "San Cristobal, Tachira",
        "schedule": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
        "phones": [],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Cristobal/Inversiones_Licealka_Ca/",
        "details": {
          "Codigo": "J8112",
          "Direccion": "Calle Los Olivares Local Nro. 03, Sector Los Magallanes. Catia.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "Deprecated: trim(): Passing null to parameter #1 ($string) of type string is deprecated in /srv/disk1/academica2012/www/agencias-master/pag/agencia.php on line 90 No Disponible",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-tachira-inversiones-tiffany-yiret-c-a",
        "name": "INVERSIONES TIFFANY YIRET, C.A.",
        "code": "8103",
        "address": "Calle 11, Vía Aeropuerto, Edif Charly, Local Oa-156-160, Parroquia Bolívar, Municipio San Antonio Del Táchira, San Antonio Del Táchira, Estado Táchira.",
        "city": "San Antonio Del Tach, Tachira",
        "schedule": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0412) 781.78.94",
          "(0276) 771.64.94"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Antonio_Del_Tach/Inversiones_Tiffany_Yiret_Ca/",
        "details": {
          "Codigo": "8103",
          "Direccion": "Calle 11, Vía Aeropuerto, Edif Charly, Local Oa-156-160, Parroquia Bolívar, Municipio San Antonio Del Táchira, San Antonio Del Táchira, Estado Táchira.",
          "Ciudad": "San Antonio Del Tach, Tachira",
          "Horario": "8:00 AM a 12:00 PM y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0412) 781.78.94 | (0276) 771.64.94",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.822501,-72.439836",
        "lat": 7.822501,
        "lng": -72.439836
      },
      {
        "id": "tealca-tachira-la-fria",
        "name": "LA FRIA",
        "code": "J8132",
        "address": "0",
        "city": "La Fria, Tachira",
        "schedule": "0",
        "phones": [
          "04141766871"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/La_Fria/La_Fria/",
        "details": {
          "Codigo": "J8132",
          "Direccion": "0",
          "Ciudad": "La Fria, Tachira",
          "Horario": "0",
          "Telefono(s)": "04141766871",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=0,0",
        "lat": 0,
        "lng": 0
      },
      {
        "id": "tealca-tachira-multienvios-express-c-a",
        "name": "MULTIENVÍOS EXPRESS, C.A.",
        "code": "8111",
        "address": "Carrera 16, Esquina Calle 13 De Barrio Obrero Nro 12-83, San Cristóbal, Edo. Táchira.",
        "city": "San Cristobal, Tachira",
        "schedule": "8:00 AM a 5:00 PM (Horario Corrido)",
        "phones": [
          "0276-353.38.22"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Cristobal/MultienvIos_Express_Ca/",
        "details": {
          "Codigo": "8111",
          "Direccion": "Carrera 16, Esquina Calle 13 De Barrio Obrero Nro 12-83, San Cristóbal, Edo. Táchira.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "8:00 AM a 5:00 PM (Horario Corrido)",
          "Telefono(s)": "0276-353.38.22",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.773269,-72.220838",
        "lat": 7.773269,
        "lng": -72.220838
      },
      {
        "id": "tealca-tachira-oficina-comercial-san-cristobal",
        "name": "OFICINA COMERCIAL SAN CRISTÓBAL",
        "code": "ZZ02",
        "address": "Sector Santa Rosa (sitio Denominado La Castra), GalpÓn S/n. San CristÓbal Estado TÁchira Venezuela Zp. 5001",
        "city": "San Cristobal, Tachira",
        "schedule": "8:00 AM A 5:00 PM",
        "phones": [
          "(0276) 346.05.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Cristobal/Oficina_Comercial_San_CristObal/",
        "details": {
          "Codigo": "ZZ02",
          "Direccion": "Sector Santa Rosa (sitio Denominado La Castra), GalpÓn S/n. San CristÓbal Estado TÁchira Venezuela Zp. 5001",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "8:00 AM A 5:00 PM",
          "Telefono(s)": "(0276) 346.05.73",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7773291,-72220827",
        "lat": 7773291,
        "lng": -72220827
      },
      {
        "id": "tealca-tachira-paramillo",
        "name": "PARAMILLO",
        "code": "8112",
        "address": "Avenida La Ula Casa N# 2 Urbanizacion Villa Hermosa, Sector Santa Cecilia",
        "city": "San Cristobal, Tachira",
        "schedule": "LUNES A VIERNES",
        "phones": [
          "02763564785"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Cristobal/Paramillo/",
        "details": {
          "Codigo": "8112",
          "Direccion": "Avenida La Ula Casa N# 2 Urbanizacion Villa Hermosa, Sector Santa Cecilia",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "LUNES A VIERNES",
          "Telefono(s)": "02763564785",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.79203,-72.20829",
        "lat": 7.79203,
        "lng": -72.20829
      },
      {
        "id": "tealca-tachira-representaciones-nisi-express-c-a",
        "name": "REPRESENTACIONES NISI EXPRESS, C.A.",
        "code": "8107",
        "address": "Barrio La Guajira, Calle 5, Casa Nro. 5-13, Edif. Sofi P.b. Local 103 Ureña, Estado Táchira.",
        "city": "Ureña, Tachira",
        "schedule": "8:30 AM a 12:00 PM y de 1:00 PM a 5:30 PM",
        "phones": [
          "(0276) 787.48.89",
          "(0416) 470.98.75"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/Urena/Representaciones_Nisi_Express_Ca/",
        "details": {
          "Codigo": "8107",
          "Direccion": "Barrio La Guajira, Calle 5, Casa Nro. 5-13, Edif. Sofi P.b. Local 103 Ureña, Estado Táchira.",
          "Ciudad": "Ureña, Tachira",
          "Horario": "8:30 AM a 12:00 PM y de 1:00 PM a 5:30 PM",
          "Telefono(s)": "(0276) 787.48.89 | (0416) 470.98.75",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.773269,-72.220827",
        "lat": 7.773269,
        "lng": -72.220827
      },
      {
        "id": "tealca-tachira-transporte-emmanuel-jireth-c-a",
        "name": "TRANSPORTE EMMANUEL JIRETH, C.A.",
        "code": "8109",
        "address": "Sector San Cristobal Local C. Av. Cuatricentenaria Local Nro. H 40 Frente A La Torre Fiat San Cristóbal Parroquia San Sebastián.",
        "city": "San Cristobal, Tachira",
        "schedule": "8:00 AM a 12:00 PM y de 2:00 PM a 5:30 PM",
        "phones": [
          "0276-422.22.02",
          "341.75.21"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Tachira/San_Cristobal/Transporte_Emmanuel_Jireth_Ca/",
        "details": {
          "Codigo": "8109",
          "Direccion": "Sector San Cristobal Local C. Av. Cuatricentenaria Local Nro. H 40 Frente A La Torre Fiat San Cristóbal Parroquia San Sebastián.",
          "Ciudad": "San Cristobal, Tachira",
          "Horario": "8:00 AM a 12:00 PM y de 2:00 PM a 5:30 PM",
          "Telefono(s)": "0276-422.22.02 | 341.75.21",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=7.773291,-72.220827",
        "lat": 7.773291,
        "lng": -72.220827
      }
    ],
    "Trujillo": [
      {
        "id": "tealca-trujillo-pase-express-c-a",
        "name": "PASE EXPRESS, C.A.",
        "code": "8204",
        "address": "Sector Las Acacias, Av. Bolívar, Entre Calles 17 Y 18, Edif. San Rafael, Pb, Local 1, Parroquia Juan Ignacio Montilla, Municipio Valera, Valera, Estado Trujillo.",
        "city": "Valera, Trujillo",
        "schedule": "8:00 am a 12:00 pm 1:00 pm a 4:00 pm",
        "phones": [
          "(0271) 415.14.06",
          "(0414) 036.77.44"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Trujillo/Valera/Pase_Express_Ca/",
        "details": {
          "Codigo": "8204",
          "Direccion": "Sector Las Acacias, Av. Bolívar, Entre Calles 17 Y 18, Edif. San Rafael, Pb, Local 1, Parroquia Juan Ignacio Montilla, Municipio Valera, Valera, Estado Trujillo.",
          "Ciudad": "Valera, Trujillo",
          "Horario": "8:00 am a 12:00 pm 1:00 pm a 4:00 pm",
          "Telefono(s)": "(0271) 415.14.06 | (0414) 036.77.44",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=9.313675,-70.601009",
        "lat": 9.313675,
        "lng": -70.601009
      }
    ],
    "Vargas": [
      {
        "id": "tealca-vargas-j-j-hermanos-parisca-reyes",
        "name": "J&J HERMANOS PARISCA REYES",
        "code": "1204",
        "address": "Av. Boulevard Naiguata Local Yudimar Noro.01 Urb. Tanguarenas Caraballeda Vargas",
        "city": "Caribe, Vargas",
        "schedule": "Lunes a Viernes: 08:00 am a 12:00 pm y 02:00 pm a 5:00 pm",
        "phones": [
          "0212-3534340",
          "0414-2272995"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Vargas/Caribe/Jj_Hermanos_Parisca_Reyes/",
        "details": {
          "Codigo": "1204",
          "Direccion": "Av. Boulevard Naiguata Local Yudimar Noro.01 Urb. Tanguarenas Caraballeda Vargas",
          "Ciudad": "Caribe, Vargas",
          "Horario": "Lunes a Viernes: 08:00 am a 12:00 pm y 02:00 pm a 5:00 pm",
          "Telefono(s)": "0212-3534340 | 0414-2272995",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.603291,-66.903444",
        "lat": 10.603291,
        "lng": -66.903444
      },
      {
        "id": "tealca-vargas-mm-servicios-integrales-c-a",
        "name": "MM SERVICIOS INTEGRALES, C.A",
        "code": "1203",
        "address": "Urb. José Maria Vargas Calle 4 Local Tealca Sector Pariata Parroquia Maiquetía Municipio Vargas Venezuela Zp. 1161 4",
        "city": "La Guaira, Vargas",
        "schedule": "8:00 AM a 5:00 PM (horario corrido)",
        "phones": [
          "0212-332.06.22",
          "(0414) 108.60.44"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Vargas/La_Guaira/Mm_Servicios_Integrales_Ca/",
        "details": {
          "Codigo": "1203",
          "Direccion": "Urb. José Maria Vargas Calle 4 Local Tealca Sector Pariata Parroquia Maiquetía Municipio Vargas Venezuela Zp. 1161 4",
          "Ciudad": "La Guaira, Vargas",
          "Horario": "8:00 AM a 5:00 PM (horario corrido)",
          "Telefono(s)": "0212-332.06.22 | (0414) 108.60.44",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.603160,-66.903489",
        "lat": 10.60316,
        "lng": -66.903489
      }
    ],
    "Zulia": [
      {
        "id": "tealca-zulia-inversiones-el-jey-express-c-a",
        "name": "INVERSIONES EL JEY EXPRESS, C.A.",
        "code": "8511",
        "address": "Paraiso Calle 78 Dr. Portillo Entre Calles 19 Y 20 Nro. 18-50 Locales 3 Y 4 Al Lado De Sandrita Parroquia Chiquinquirá Municipio Maracaibo Zp 4001",
        "city": "Maracaibo, Zulia",
        "schedule": "Lunes a Viernes: 8:00 am a 5:00 pm Corrido",
        "phones": [
          "0261-7835280"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Inversiones_El_Jey_Express_Ca/",
        "details": {
          "Codigo": "8511",
          "Direccion": "Paraiso Calle 78 Dr. Portillo Entre Calles 19 Y 20 Nro. 18-50 Locales 3 Y 4 Al Lado De Sandrita Parroquia Chiquinquirá Municipio Maracaibo Zp 4001",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "Lunes a Viernes: 8:00 am a 5:00 pm Corrido",
          "Telefono(s)": "0261-7835280",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.662164,-71.623368",
        "lat": 10.662164,
        "lng": -71.623368
      },
      {
        "id": "tealca-zulia-inversiones-irella-c-a",
        "name": "INVERSIONES IRELLA, C.A.",
        "code": "8405",
        "address": "Carretera H, Cc Borjas (centro 99), Local Pb, Parroquia Carmen Herrera, Municipio Cabimas, Cabimas, Estado Zulia",
        "city": "Cabimas, Zulia",
        "schedule": "8:00 am a 12:00 pm 1:00 pm a 5:00 pm",
        "phones": [
          "0264-808.00.73",
          "658.12.73"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Cabimas/Inversiones_Irella_Ca/",
        "details": {
          "Codigo": "8405",
          "Direccion": "Carretera H, Cc Borjas (centro 99), Local Pb, Parroquia Carmen Herrera, Municipio Cabimas, Cabimas, Estado Zulia",
          "Ciudad": "Cabimas, Zulia",
          "Horario": "8:00 am a 12:00 pm 1:00 pm a 5:00 pm",
          "Telefono(s)": "0264-808.00.73 | 658.12.73",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.394494,-71.455507",
        "lat": 10.394494,
        "lng": -71.455507
      },
      {
        "id": "tealca-zulia-inversiones-sur-express-c-a",
        "name": "INVERSIONES SUR EXPRESS, C.A.",
        "code": "8509B",
        "address": "Urb. Coromoto, Av. 40, Cc Vistana, Local No. 5, Parroquia San Francisco, Municipio San Francisco, Maracaibo, Estado Zulia",
        "city": "Maracaibo, Zulia",
        "schedule": "Lunes a Viernes: 8:00 am a 4:30 pm Corrido",
        "phones": [
          "0261-731.88.77"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Inversiones_Sur_Express_Ca/",
        "details": {
          "Codigo": "8509B",
          "Direccion": "Urb. Coromoto, Av. 40, Cc Vistana, Local No. 5, Parroquia San Francisco, Municipio San Francisco, Maracaibo, Estado Zulia",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "Lunes a Viernes: 8:00 am a 4:30 pm Corrido",
          "Telefono(s)": "0261-731.88.77",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.558712,-71.634901",
        "lat": 10.558712,
        "lng": -71.634901
      },
      {
        "id": "tealca-zulia-oficina-comercial-maracaibo",
        "name": "OFICINA COMERCIAL MARACAIBO",
        "code": "BB",
        "address": "Av. 24, Con Calle 68, Sector Santa Maria, Parroquia Chiquinquirá, Municipio Maracaibo, Maracaibo, Estado Zulia",
        "city": "Maracaibo, Zulia",
        "schedule": "8:00 AM a 12:00 y de 1:00 PM a 5:00 PM",
        "phones": [
          "(0414) 674.20.82"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Oficina_Comercial_Maracaibo/",
        "details": {
          "Codigo": "BB",
          "Direccion": "Av. 24, Con Calle 68, Sector Santa Maria, Parroquia Chiquinquirá, Municipio Maracaibo, Maracaibo, Estado Zulia",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "8:00 AM a 12:00 y de 1:00 PM a 5:00 PM",
          "Telefono(s)": "(0414) 674.20.82",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.663952,-71.632953",
        "lat": 10.663952,
        "lng": -71.632953
      },
      {
        "id": "tealca-zulia-oficina-maracaibo",
        "name": "OFICINA MARACAIBO",
        "code": "BB02",
        "address": "Av 86 Con Calle 13a Diagonal A Loco Lindo Municipio Maracaibo Parroquia Chiquinquirá Zp4001",
        "city": "Maracaibo, Zulia",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm",
        "phones": [
          "0261-7233602",
          "7233441"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Oficina_Maracaibo/",
        "details": {
          "Codigo": "BB02",
          "Direccion": "Av 86 Con Calle 13a Diagonal A Loco Lindo Municipio Maracaibo Parroquia Chiquinquirá Zp4001",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm",
          "Telefono(s)": "0261-7233602 | 7233441",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": ""
      },
      {
        "id": "tealca-zulia-p-m-distribuciones-c-a",
        "name": "P&M DISTRIBUCIONES, C.A",
        "code": "8504C",
        "address": "Las Delicias, Av. 15 Entre Calles 66a Y 67, Cc El Tucán, Pb, Local 2, Parroquia Juana De Ávila, Municipio Maracaibo, Maracaibo, Estado Zulia",
        "city": "Maracaibo, Zulia",
        "schedule": "Lunes a Viernes: 8:00 am a 12:00 pm",
        "phones": [
          "0261-752.93.61"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Pm_Distribuciones_Ca/",
        "details": {
          "Codigo": "8504C",
          "Direccion": "Las Delicias, Av. 15 Entre Calles 66a Y 67, Cc El Tucán, Pb, Local 2, Parroquia Juana De Ávila, Municipio Maracaibo, Maracaibo, Estado Zulia",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "Lunes a Viernes: 8:00 am a 12:00 pm",
          "Telefono(s)": "0261-752.93.61",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.681351,-71.622794",
        "lat": 10.681351,
        "lng": -71.622794
      },
      {
        "id": "tealca-zulia-venexexpress-c-a",
        "name": "VENEXEXPRESS, C.A.",
        "code": "8502",
        "address": "Sector Santa Lucia Av. 4 Bella Vista Esq. Calle 79 Local C C.c. Shalon Local 7 Frente A La Iglesia La Consolación Parroquia Santa Lucía Maracaibo Zp. 1214",
        "city": "Maracaibo, Zulia",
        "schedule": "8:00 AM a 4:30 PM ( Horario Corrido)",
        "phones": [
          "(0261) 792.09.67",
          "717.50.18"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Venexexpress_Ca/",
        "details": {
          "Codigo": "8502",
          "Direccion": "Sector Santa Lucia Av. 4 Bella Vista Esq. Calle 79 Local C C.c. Shalon Local 7 Frente A La Iglesia La Consolación Parroquia Santa Lucía Maracaibo Zp. 1214",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "8:00 AM a 4:30 PM ( Horario Corrido)",
          "Telefono(s)": "(0261) 792.09.67 | 717.50.18",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.660599,-71.606041",
        "lat": 10.660599,
        "lng": -71.606041
      },
      {
        "id": "tealca-zulia-venexpress-c-a",
        "name": "VENEXPRESS, C.A.",
        "code": "8502B",
        "address": "Las Delicias, Av. 15 Entre Calles 74 Y 75, Parroquia Olegario Villalobos, Municipio Maracaibo, Maracaibo, Estado Zulia",
        "city": "Maracaibo, Zulia",
        "schedule": "Lunes a Viernes: 8:00 am a 4:30 pm Corrido",
        "phones": [
          "0261-798.87.57",
          "798.74.34",
          "798.85.68"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Venexpress_Ca/",
        "details": {
          "Codigo": "8502B",
          "Direccion": "Las Delicias, Av. 15 Entre Calles 74 Y 75, Parroquia Olegario Villalobos, Municipio Maracaibo, Maracaibo, Estado Zulia",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "Lunes a Viernes: 8:00 am a 4:30 pm Corrido",
          "Telefono(s)": "0261-798.87.57 | 798.74.34 | 798.85.68",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.665229,-71.619661",
        "lat": 10.665229,
        "lng": -71.619661
      },
      {
        "id": "tealca-zulia-villa-del-rosario",
        "name": "VILLA DEL ROSARIO",
        "code": "J8512",
        "address": "0",
        "city": "Villa Del Rosario, Zulia",
        "schedule": "0",
        "phones": [
          "04124266850"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Villa_Del_Rosario/Villa_Del_Rosario/",
        "details": {
          "Codigo": "J8512",
          "Direccion": "0",
          "Ciudad": "Villa Del Rosario, Zulia",
          "Horario": "0",
          "Telefono(s)": "04124266850",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=0,0",
        "lat": 0,
        "lng": 0
      },
      {
        "id": "tealca-zulia-zasa-transporte-c-a",
        "name": "ZASA TRANSPORTE, C.A.",
        "code": "8510",
        "address": "Av. Circunvalación 2, Cc Divivide, Local G-11, Parroquia Luis Hurtado, Municipio Maracaibo, Maracaibo, Estado Zulia",
        "city": "Maracaibo, Zulia",
        "schedule": "8:00 AM a 5:00 PM (Horario Corrido)",
        "phones": [
          "(0261) 614.14.54",
          "614.14.64"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Maracaibo/Zasa_Transporte_Ca/",
        "details": {
          "Codigo": "8510",
          "Direccion": "Av. Circunvalación 2, Cc Divivide, Local G-11, Parroquia Luis Hurtado, Municipio Maracaibo, Maracaibo, Estado Zulia",
          "Ciudad": "Maracaibo, Zulia",
          "Horario": "8:00 AM a 5:00 PM (Horario Corrido)",
          "Telefono(s)": "(0261) 614.14.54 | 614.14.64",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=1.060813,-71.657642",
        "lat": 1.060813,
        "lng": -71.657642
      },
      {
        "id": "tealca-zulia-zu-envio-c-a",
        "name": "ZU ENVIO, C.A.",
        "code": "8406",
        "address": "Sector Las Morochas, Av. Intercomunal, Edificio Comercial Tamare, Local 2, Parroquia Alonso De Ojeda, Municipio Lagunillas, Ciudad Ojeda, Estado Zulia",
        "city": "Ciudad Ojeda, Zulia",
        "schedule": "8:00 AM a 12:00 AM y de 1:30 PM a 5:00 PM",
        "phones": [
          "0265-662.48.89",
          "(0426) 764.21.62"
        ],
        "detailsUrl": "https://www.agencias.com.ve/Sucursales/TEALCA/Zulia/Ciudad_Ojeda/Zu_Envio_Ca/",
        "details": {
          "Codigo": "8406",
          "Direccion": "Sector Las Morochas, Av. Intercomunal, Edificio Comercial Tamare, Local 2, Parroquia Alonso De Ojeda, Municipio Lagunillas, Ciudad Ojeda, Estado Zulia",
          "Ciudad": "Ciudad Ojeda, Zulia",
          "Horario": "8:00 AM a 12:00 AM y de 1:30 PM a 5:00 PM",
          "Telefono(s)": "0265-662.48.89 | (0426) 764.21.62",
          "Servicio(s)": "Hora Maxima Zona de Cobertura"
        },
        "googleMapsUrl": "https://www.google.com/maps?q=10.204665,-71.339167",
        "lat": 10.204665,
        "lng": -71.339167
      }
    ]
  }
};
function normalizeKey(k) { return (k || '').toString().trim().toLowerCase(); }

  function listCarriers() {
    // Si quieres habilitar/ocultar empresas, edita este array.
    return [
      { key: 'mrw',    logo: LOGOS.mrw,    imgClass: '' },
      { key: 'zoom',   logo: LOGOS.zoom,   imgClass: '' },
      { key: 'domesa', logo: LOGOS.domesa, imgClass: '' },
      { key: 'tealca', logo: LOGOS.tealca, imgClass: 'tealca-logo' }
    ];
  }

  function listStates() {
    return STATES.slice();
  }

  function getAgencies(carrierKey, state) {
    carrierKey = normalizeKey(carrierKey);
    state = (state || '').toString().trim();
    if (!agencies[carrierKey]) return [];
    return (agencies[carrierKey][state] || []).slice();
  }

  function getAgencyCount(carrierKey, state) {
    return getAgencies(carrierKey, state).length;
  }

  function getStateCounts(carrierKey) {
    var out = {};
    listStates().forEach(function (st) { out[st] = getAgencyCount(carrierKey, st); });
    return out;
  }

  // Exponer en window para usarlo desde cualquier página
  window.CarrierData = {
    listCarriers: listCarriers,
    listStates: listStates,
    getAgencies: getAgencies,
    getAgencyCount: getAgencyCount,
    getStateCounts: getStateCounts,
    _agencies: agencies
  };
})();
