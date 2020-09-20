import useSWR from 'swr';
import { api } from '../services/api';

/**
 * Hook get items by keywords
 *
 * @param {string} query
 * @param {string} [site]
 */
function useSearchItems(query: string, site?: string) {
  const cacheKey = '/items';

  /**
   * get items by keywords
   * - save result in cache
   * - if it finds a cache key then it gets cached data. later bring updated information
   * */
  const { data: result } = useSWR(
    query ? [cacheKey, query, site] : null,
    api.searchItems,
    {
      suspense: true, // in suspense mode :v
      revalidateOnFocus: false, // set false default revalidate on app focus (in some cases it may be interesting to leave it true)
    },
  );

  /**
   * return items if exists
   * return breadcrumbs
   */
  return {
    items: result?.data?.items || [],
    breadcrumbsPath: result?.data?.categories[0]?.path_from_root || [],
  };
}

export { useSearchItems };
