import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import useSWR from 'swr';
import { defaultSite } from '../config';
import { api } from '../services/api';

function HeaderContainer() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const selectSiteRef = useRef<HTMLSelectElement>(null);
  const history = useHistory();
  const cacheKey = '/sites';

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const siteId = selectSiteRef.current?.value;

    if (searchInputRef.current?.value.length) {
      let url = `/items?q=${searchInputRef.current.value}`;

      if (siteId) {
        url += `&siteId=${siteId}`;

        localStorage.setItem('meliSite', siteId);
      }

      history.push(url);
    }
  };

  const { data: result } = useSWR(cacheKey, api.getSites, {
    revalidateOnFocus: false,
  });

  const siteOpts = result?.data
    ?.sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));

  return (
    <>
      <form onSubmit={onSubmit}>
        {result?.data && (
          <select ref={selectSiteRef} defaultValue={defaultSite}>
            {siteOpts}
          </select>
        )}
        <input type="text" required ref={searchInputRef} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default HeaderContainer;
