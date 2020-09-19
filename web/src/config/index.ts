/**
 * API url
 */
const apiUrl = 'https://meli-api-ahr.herokuapp.com/api';

/**
 * Default error message
 */
const genericErrorMsg = 'UPS! Try again';

/**
 * Default site
 */
const defaultSite = localStorage.getItem('meliSite') || 'MCO';

export { apiUrl, genericErrorMsg, defaultSite };
