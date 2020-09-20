import { useLocation } from 'react-router-dom';

/**
 * Hook to get query params
 *
 * @export
 * @return {*}
 */
function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

export { useQuery };
