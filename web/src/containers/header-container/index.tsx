import React from 'react';
import { useHistory } from 'react-router';
import useSWR from 'swr';

import SearchInput from '../../components/search-input';

import { useSite } from '../../hooks/use-site';
import { api } from '../../services/api';

import { Header, HeaderContent, LogoContainer } from './style';

import logo from '../../assets/logo.png';

/**
 * App Header
 */
function HeaderContainer() {
  const history = useHistory();
  const site = useSite();
  const cacheKey = '/sites';

  /** On search submit */
  const onSubmit = (query: string, siteId: string) => {
    if (query && query.length) {
      const url = `/items?q=${query}&siteId=${siteId}`;

      /**  navigate */
      history.push(url);
    }
  };

  /** get and cache sites */
  const { data: result } = useSWR(cacheKey, api.getSites, {
    revalidateOnFocus: false,
  });
  return (
    <Header>
      <HeaderContent>
        <LogoContainer to="/">
          <img src={logo} alt="Mercado Libre" />
        </LogoContainer>
        <SearchInput
          onSubmit={onSubmit}
          currentSite={site.currentSiteId}
          sites={result?.data || []}
          onSelectSite={site.setSite}
          placeholder="Nunca pares de buscar"
        />
      </HeaderContent>
    </Header>
  );
}

export default HeaderContainer;
