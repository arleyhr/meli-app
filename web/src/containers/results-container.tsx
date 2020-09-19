import React from 'react';
import useSWR from 'swr';
import { defaultSite } from '../config';
import { api } from '../services/api';

type ResultsContainerProps = {
  /** query key word */
  q: string;

  /** meli site id */
  siteId?: string;
};

function ResultsContainer(props: ResultsContainerProps) {
  const cacheKey = '/items';

  const { data: result } = useSWR(
    props.q ? [cacheKey, props.q, props.siteId] : null,
    api.searchItems,
    {
      suspense: true,
      revalidateOnFocus: false,
    },
  );

  if (result?.data?.items.length) {
    const { categories, items } = result.data;
    const parentFromRoot = categories.length
      ? categories[0].path_from_root
      : [];

    const breadcrumbs = parentFromRoot.map((item) => (
      <a href="/" key={item.id}>
        {item.name} -{' '}
      </a>
    ));
    return (
      <div>
        {breadcrumbs}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title} = {item.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

ResultsContainer.defaultProps = {
  siteId: defaultSite,
};

export default ResultsContainer;
