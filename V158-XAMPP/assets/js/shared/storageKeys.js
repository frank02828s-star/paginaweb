// storageKeys.js - Constantes compartidas para localStorage (PCBuilder)
//
// Centraliza todas las keys usadas en localStorage para evitar strings repetidos
// y facilitar cambios/migraciones futuras.

const STORAGE_KEYS = Object.freeze({
  CART: 'pcbuilder_cart',
  BUILD: 'pcbuilder_build',
  PRODUCT_TO_ADD: 'pcbuilder_product_to_add',
  BUILD_LINK_MAP: 'pcpp_build_link_map_v1',
});
