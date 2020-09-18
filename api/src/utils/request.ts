import { create } from 'apisauce';

import { apiBase, staticApiBase } from '../config';

/**
 * create request instance with base url
 */
const request = create({
  baseURL: apiBase,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * create request instance for static requests
 */
export const requestStatic = create({
  baseURL: staticApiBase,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
