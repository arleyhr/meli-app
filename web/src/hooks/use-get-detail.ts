import useSWR from 'swr';
import { api } from '../services/api';

function useGetDetail(itemId: string) {
  /** cache key to cache request  */
  const cacheKey = '/items';

  /**
   * get detailt item data
   * - save result in cache
   * - if it finds a cache key then it gets cached data. later bring updated information
   * */
  const { data: result } = useSWR(
    itemId ? [cacheKey, itemId] : null, // if not exist item id then cancel request
    api.getItemDetail, // Fetcher
    {
      suspense: true, // in suspense mode :v
      revalidateOnFocus: false, // set false default revalidate on app focus (in some cases it may be interesting to leave it true)
    },
  );

  /**
   * return item if exists
   * return breadcrumbs
   */
  return {
    item: result?.data?.item || undefined,
    breadcrumbsPath: result?.data?.category?.path_from_root || [],
  };
}

export { useGetDetail };
