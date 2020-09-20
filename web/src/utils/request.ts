import { create } from 'apisauce';

import { apiUrl } from '../config';

/**
 * create request instance with base url
 */
const request = create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
