import React from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';

import SearchInput from '../../components/search-input';

import { useSite } from '../../hooks/use-site';

import { Header, HeaderContent, LogoContainer } from './style';

import logo from '../../assets/logo.png';
import { sitesQuery } from '../../graphql/queries/sites';
import { Site } from '../../graphql/types';

type FoundSites = {
  sites: Site[];
};

/**
 * App Header
 */
function HeaderContainer() {
  const history = useHistory();
  const site = useSite();

  /** On search submit */
  const onSubmit = (query: string, siteId: string) => {
    if (query && query.length) {
      const url = `/items?q=${query}&siteId=${siteId}`;

      /**  navigate */
      history.push(url);
    }
  };

  /** get and cache sites */
  const { data } = useQuery<FoundSites>(sitesQuery);

  const sites = data?.sites || [];

  return (
    <Header>
      <HeaderContent>
        <LogoContainer to="/">
          <img src={logo} alt="Mercado Libre" />
        </LogoContainer>
        <SearchInput
          onSubmit={onSubmit}
          currentSite={site.currentSiteId}
          sites={sites}
          onSelectSite={site.setSite}
          placeholder="Nunca pares de buscar"
        />
      </HeaderContent>
    </Header>
  );
}

export default HeaderContainer;
