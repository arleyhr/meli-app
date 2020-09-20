import { Query, Resolver } from 'type-graphql';

import { meliRepository } from '../../repository/meli-api';

import { Site } from '../types/site-type';

@Resolver(() => Site)
export class SiteResolver {
  @Query(() => [Site], {
    description: 'Get all sites ',
  })
  async sites(): Promise<Site[]> {
    const result = await meliRepository.getSites();

    if (result.data && result.data.length) {
      return result.data as Site[];
    }

    return [];
  }
}
