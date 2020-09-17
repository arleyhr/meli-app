/**
 * Is Production Environment
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * Server port
 */
const port: number = isProd ? 3000 : 9999;

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

export { apiBase, staticApiBase, isProd, port, genericErrorMsg };
