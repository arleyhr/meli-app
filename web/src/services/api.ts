import { genericErrorMsg } from '../config';
import request from '../utils/request';
import { GenericResponse } from './dto/common';
import { ItemDetailDto, SearchItemsDto } from './dto/items';
import { SiteDto } from './dto/sites';

/**
 * Get sites
 *
 * @param {string} cacheKey
 * @return {*}  {Promise<GenericResponse<SiteDto[]>>}
 */
async function getSites(cacheKey: string): Promise<GenericResponse<SiteDto[]>> {
  try {
    const result = await request.get<GenericResponse<SiteDto[]>>(cacheKey);

    if (result.status === 200 && result.data?.ok) {
      return result.data;
    }

    return handleError();
  } catch (error) {
    return handleError(error.message);
  }
}

/**
 * Find items by keyword and site
 *
 * @param {string} cacheKey
 * @param {string} query
 * @param {string} [siteId]
 * @return {*}  {Promise<GenericResponse<SearchItemsDto>>}
 */
async function searchItems(
  cacheKey: string,
  query: string,
  siteId?: string,
): Promise<GenericResponse<SearchItemsDto>> {
  try {
    let url = `${cacheKey}?q=${query}`;

    if (siteId) {
      url += `&siteId=${siteId}`;
    }

    const result = await request.get<GenericResponse<SearchItemsDto>>(url);

    if (result.status === 200 && result.data?.ok) {
      return result.data;
    }

    return handleError();
  } catch (error) {
    return handleError(error.message);
  }
}

/**
 * get item detail
 *
 * cacheKey: string,
 * @param {string} id
 * @return {*}  {Promise<GenericResponse<ItemDetailDto>>}
 */
async function getItemDetail(
  cacheKey: string,
  id: string,
): Promise<GenericResponse<ItemDetailDto>> {
  try {
    const result = await request.get<GenericResponse<ItemDetailDto>>(
      `${cacheKey}/${id}`,
    );

    if (result.status === 200 && result.data?.ok) {
      return result.data;
    }

    return handleError();
  } catch (error) {
    return handleError(error.message);
  }
}

/**
 * Handle error
 *
 * @param {string} msg
 * @return {*}
 */
function handleError(msg?: string) {
  throw new Error(msg || genericErrorMsg);
  // eslint-disable-next-line no-unreachable
  return {
    ok: false,
    message: msg || genericErrorMsg,
  };
}

export const api = {
  getSites,
  searchItems,
  getItemDetail,
};
