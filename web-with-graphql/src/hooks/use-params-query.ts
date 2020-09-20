import { useLocation } from 'react-router-dom';

/**
 * Hook to get query params
 *
 * @export
 * @return {*}
 */
function useParamsQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

export { useParamsQuery };
