import { Arg, Query, Resolver } from 'type-graphql';

import { meliRepository } from '../../repository/meli-api';
import { ItemDetailResponse, ItemsResponse } from '../types/item-type';

@Resolver(() => ItemsResponse)
export class ItemsResolver {
  @Query(() => ItemsResponse, {
    description: 'Search item ',
  })
  async searchItems(
    @Arg('q', { nullable: false }) q: string,
    @Arg('siteId', { nullable: true }) siteId?: string,
  ): Promise<ItemsResponse | undefined> {
    const result = await meliRepository.searchProducts(q, siteId);

    if (result.data) {
      return result.data;
    }
  }
}

@Resolver(() => ItemDetailResponse)
export class ItemDetailResolver {
  @Query(() => ItemDetailResponse, {
    description: 'Get item by id',
  })
  async itemDetail(
    @Arg('itemId', { nullable: false }) itemId: string,
  ): Promise<ItemDetailResponse | undefined> {
    const result = await meliRepository.getItem(itemId);

    console.log(result);

    if (result.data) {
      return result.data;
    }

    throw new Error('Not found');
  }
}
