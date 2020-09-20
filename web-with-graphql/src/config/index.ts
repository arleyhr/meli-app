/**
 * API url
 */
const apiUrl = 'https://meli-api-ahr.herokuapp.com/graphql';

/**
 * Default error message
 */
const genericErrorMsg = 'UPS! Try again';

/**
 * Default site
 */
const defaultSite = localStorage.getItem('meliSite') || 'MCO';

export { apiUrl, genericErrorMsg, defaultSite };
