import React from 'react';
import useSWR from 'swr';
import { api } from '../services/api';

type DetailContainerProps = {
  /** item id */
  itemId: string;
};

function DetailContainer(props: DetailContainerProps) {
  const cacheKey = '/items';

  const { data: result } = useSWR(
    props.itemId ? [cacheKey, props.itemId] : null,
    api.getItemDetail,
    {
      suspense: true,
      revalidateOnFocus: false,
    },
  );

  if (result?.data?.item) {
    const { category, item } = result.data;
    const parentFromRoot = category.path_from_root || [];

    const breadcrumbs = parentFromRoot.map((item) => (
      <a href="/" key={item.id}>
        {item.name} -{' '}
      </a>
    ));
    return (
      <div>
        {breadcrumbs}
        <h1>{item.title}</h1>
      </div>
    );
  }
  return null;
}

DetailContainer.defaultProps = {
  siteId: 'MCO',
};

export default DetailContainer;
