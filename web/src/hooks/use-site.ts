import { useCallback, useState } from 'react';
import { defaultSite } from '../config';
import { SiteContext } from '../context/site-context';

/**
 * Hook to handle site with react context
 *
 * @return {*}  {SiteContext}
 */
function useSite(): SiteContext {
  const [currentSiteId, setSiteId] = useState(defaultSite);

  const setSite = useCallback((site: string) => {
    localStorage.setItem('meliSite', site);

    setSiteId(site);
  }, []);

  return {
    currentSiteId,
    setSite,
  };
}

export { useSite };
