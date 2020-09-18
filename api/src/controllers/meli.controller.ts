import { JsonController, Param, Get, QueryParam } from 'routing-controllers';

import { AutosuggestDto } from '../repository/dto/autosuggest';

import { GenericResponse } from '../repository/dto/common';
import { ItemDetailDto, SearchItemsDto } from '../repository/dto/items';
import { SiteDto } from '../repository/dto/sites';

import { meliRepository } from '../repository/meli-api';

@JsonController()
export class MeliController {
  /**
   * GET /api/sites
   * @tags App
   * @summary get MeLi sites
   * @return {GenericResponse<array<SiteDto>} 200 - success response
   */
  @Get('/api/sites')
  getSites(): Promise<GenericResponse<SiteDto[]>> {
    return meliRepository.getSites();
  }

  /**
   * GET /api/items
   * @tags App
   * @summary search items
   * @param {string} q.query.required - Query search
   * @param {string} siteId.query - Site Id (optional)
   * @return {GenericResponse<array<SearchItemsDto>} 200 - success response
   */
  @Get('/api/items')
  getItems(
    @QueryParam('q') query: string,
    @QueryParam('siteId') siteId: string,
  ): Promise<GenericResponse<SearchItemsDto>> {
    /**
     * Validate params
     */
    if (!query) {
      return Promise.resolve({
        ok: false,
        message: 'Invalid query',
      });
    }

    return meliRepository.searchProducts(query, siteId);
  }

  /**
   * GET /api/items/{id}
   * @tags App
   * @summary get item detail
   * @param {string} id.path.required - Item id
   * @return {GenericResponse<array<ItemDetailDto>} 200 - success response
   */
  @Get('/api/items/:id')
  getItem(@Param('id') id: string): Promise<GenericResponse<ItemDetailDto>> {
    /**
     * Validate params
     */
    if (!id) {
      return Promise.resolve({
        ok: false,
        message: 'Invalid query',
      });
    }

    return meliRepository.getItem(id);
  }

  @Get('/api/autosuggest')
  getAutosuggest(
    @QueryParam('q') query: string,
    @QueryParam('limit') limit: number,
    @QueryParam('siteId') siteId: string,
  ): Promise<GenericResponse<AutosuggestDto>> {
    /**
     * Validate params
     */
    if (!query || !limit) {
      return Promise.resolve({
        ok: false,
        message: 'Invalid query',
      });
    }

    return meliRepository.getAutosuggest(query, limit, siteId);
  }
}
