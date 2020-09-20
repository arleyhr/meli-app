import { defaultSiteId, genericErrorMsg } from '../config';
import { removeDuplicatedItems } from '../utils/remove-duplicated-elements';
import request, { requestStatic } from '../utils/request';

import { AutosuggestDto } from './dto/autosuggest';
import { CategoryResponse } from './dto/categories';

import { GenericResponse } from './dto/common';
import {
  SearchItemsResponse,
  SearchItemsDto,
  ItemDetailDto,
  Result,
  ItemDescriptionDto,
} from './dto/items';

import { SiteDto } from './dto/sites';

/** items limit */
const itemsLimit = 4;

/** Meli endpoints */
const endpoints = {
  sites: '/sites',

  category: (id: string): string => `/categories/${id}`,

  searchProducts: (siteId: string, query: string): string =>
    `/sites/${siteId}/search?q=${query}&limit=${itemsLimit}`,

  autosuggest: (siteId: string, query: string, limit: number): string =>
    `/resources/sites/${siteId}/autosuggest?showFilters=true&limit=${limit}&api_version=2&q=${query}`,

  item: (itemId: string): string => `/items/${itemId}`,

  itemDescription: (itemId: string): string => `/items/${itemId}/description`,
};

/**
 * Meli Sites
 * @return {*}  {Promise<GenericResponse<SiteDto[]>>}
 */
async function getSites(): Promise<GenericResponse<SiteDto[]>> {
  try {
    /**
     * Request sites
     */
    const result = await request.get<SiteDto[]>(endpoints.sites);

    /**
     * If response OK then return data
     */
    if (result.status === 200) {
      return {
        ok: true,
        data: result.data,
      };
    }

    /**
     * Handle error
     */
    return handleError(genericErrorMsg);
  } catch (error) {
    /**
     * Handle error
     */
    return handleError(error.message);
  }
}

/**
 * Auto suggestions
 *
 * @param {string} query
 * @param {number} limit
 * @param {string} [siteId]
 * @return {*}  {Promise<GenericResponse<AutosuggestDto>>}
 */
async function getAutosuggest(
  query: string,
  limit: number,
  siteId?: string,
): Promise<GenericResponse<AutosuggestDto>> {
  try {
    /**
     * Request suggestions
     */
    const result = await requestStatic.get<AutosuggestDto>(
      endpoints.autosuggest(siteId || defaultSiteId, query, limit),
    );

    /**
     * If response OK then return data
     */
    if (result.status === 200) {
      return {
        ok: true,
        data: result.data,
      };
    }

    /**
     * Handle error
     */
    return handleError(genericErrorMsg);
  } catch (error) {
    /**
     * Handle error
     */
    return handleError(error.message);
  }
}

/**
 * category data
 *
 * @param {string} categoryId
 * @return {*}  {Promise<GenericResponse<CategoryResponse>>}
 */
async function getCategory(
  categoryId: string,
): Promise<GenericResponse<CategoryResponse>> {
  try {
    /**
     * Request category by ID
     */
    const result = await request.get<CategoryResponse>(
      endpoints.category(categoryId),
    );

    /**
     * If response OK then return data
     */
    if (result.status === 200) {
      return {
        ok: true,
        data: result.data,
      };
    }

    /**
     * Handle error
     */
    return handleError(genericErrorMsg);
  } catch (error) {
    /**
     * Handle error
     */
    return handleError(error.message);
  }
}

/**
 * Search products
 *
 * @param {string} query
 * @param {string} [siteId]
 * @return {*}  {Promise<GenericResponse<SearchItemsDto>>}
 */
async function searchProducts(
  query: string,
  siteId?: string,
): Promise<GenericResponse<SearchItemsDto>> {
  try {
    /**
     * Request search items
     */
    const result = await request.get<SearchItemsResponse>(
      endpoints.searchProducts(siteId || defaultSiteId, query),
    );

    /**
     * If response OK
     */
    if (result.status === 200) {
      /**
       * if found result
       */
      if (result.data?.results.length) {
        // Map category ids
        const categoryIds = result.data.results.map(
          (item: Result) => item.category_id,
        );

        // get category data from each categoryId
        const categoriesResult = await Promise.all(
          removeDuplicatedItems(categoryIds) // remove duplicated category ids
            .map((categoryId) => getCategory(categoryId)),
        );

        // filter and map each category
        const categories: CategoryResponse[] = categoriesResult
          .filter((category) => category.ok && category.data)
          .map((category) => category.data as CategoryResponse);

        // return format data
        return {
          ok: true,
          data: {
            author: { name: 'Arley', lastname: 'HR' },
            items: result.data.results.map((item: Result) => ({
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: +(item.price % 1).toFixed(2).substring(2),
              },
              picture: item.thumbnail,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
            })),
            categories,
          },
        };
      }

      // if not found items then return empty data
      return {
        ok: true,
        data: {
          author: { name: 'Arley', lastname: 'HR' },
          categories: [],
          items: [],
        },
      };
    }

    if (result.status === 404) {
      return {
        ok: true,
        message: 'Not found',
      };
    }

    /**
     * Handle error
     */
    return handleError(genericErrorMsg);
  } catch (error) {
    /**
     * Handle error
     */
    return handleError(error.message);
  }
}

async function getItem(
  itemId: string,
): Promise<GenericResponse<ItemDetailDto>> {
  try {
    /**
     * Request item and description By Id
     */
    const [resultItem, resultDescription] = await Promise.all([
      request.get<Result>(endpoints.item(itemId)),
      request.get<ItemDescriptionDto>(endpoints.itemDescription(itemId)),
    ]);

    /**
     * If response OK then return data
     */
    if (resultItem.status === 200 && resultItem.data) {
      const item = resultItem.data;

      // Get category of item
      const categoryResult = await request.get<CategoryResponse>(
        endpoints.category(item.category_id),
      );

      return {
        ok: true,
        data: {
          author: {
            name: 'Arley',
            lastname: 'HR',
          },
          item: {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: +(item.price % 1).toFixed(2).substring(2),
            },
            picture: item?.pictures?.length
              ? item.pictures[0].secure_url
              : item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: resultDescription.data?.plain_text || '',
          },
          category: categoryResult.data as CategoryResponse,
        },
      };
    }

    if (resultItem.status === 404) {
      return {
        ok: true,
        message: 'Not found',
      };
    }

    /**
     * Handle error
     */
    return handleError(genericErrorMsg);
  } catch (error) {
    /**
     * Handle error
     */
    return handleError(error.message);
  }
}

/**
 * Handle error
 *
 * @param {string} msg
 * @return {*}
 */
function handleError(msg: string) {
  return {
    ok: false,
    message: msg,
  };
}

export const meliRepository = {
  getSites,
  getCategory,
  searchProducts,
  getItem,
  getAutosuggest,
};
