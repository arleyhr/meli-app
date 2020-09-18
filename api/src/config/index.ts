/**
 * Is Production Environment
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * Server port
 */
const port: number = isProd ? +(process.env.PORT || 3000) : 9999;

/**
 * Meli Base URL
 */
const apiBase = 'https://api.mercadolibre.com';

/**
 * Meli static base url
 */
const staticApiBase = 'https://http2.mlstatic.com';

/**
 * Default error message
 */
const genericErrorMsg = 'UPS! Try again';

/**
 * Default site Id
 */
const defaultSiteId = 'MCO';

export { apiBase, staticApiBase, defaultSiteId, isProd, port, genericErrorMsg };
