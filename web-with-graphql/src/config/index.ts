/**
 * API url
 */
// const apiUrl = 'https://meli-api-ahr.herokuapp.com/graphql';
const apiUrl = 'http://localhost:9999/graphql';

/**
 * Default error message
 */
const genericErrorMsg = 'UPS! Try again';

/**
 * Default site
 */
const defaultSite = localStorage.getItem('meliSite') || 'MCO';

export { apiUrl, genericErrorMsg, defaultSite };
