import React from 'react';
import { useQuery } from '@apollo/client';

import Breadcrumbs from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import Item from '../../components/item';

import { NotFound, ResultsContent } from './style';

import { searchQuery } from '../../graphql/queries/search-items';
import { ItemsResponse, QuerySearchItemsArgs } from '../../graphql/types';
import ResultsSkeleton from '../../components/results-skeleton';

type ResultsContainerProps = {
  /** query key word */
  q: string;

  /** meli site id */
  siteId: string;
};

type FoundItems = {
  searchItems: ItemsResponse;
};

function ResultsContainer(props: ResultsContainerProps) {
  /** execute gql query */
  const { loading, data } = useQuery<FoundItems, QuerySearchItemsArgs>(
    searchQuery,
    {
      variables: {
        q: props.q,
        siteId: props.siteId,
      },
    },
  );

  // loading skeleton
  if (loading) {
    return <ResultsSkeleton />;
  }

  /**
   * Safe data
   */
  const items = data?.searchItems.items || [];
  const breadcrumbsPath = data?.searchItems.categories[0]?.path_from_root || [];

  if (items.length) {
    const breadcrumbs = breadcrumbsPath.map((item) => ({
      id: item.id,
      displayName: item.name,
      link: `/items?q=${item.name}`,
    }));

    return (
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <ResultsContent>
          <ol>
            {items.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                image={item.picture}
                price={item.price}
                link={`/items/${item.id}`}
                condition={item.condition}
                freeShipping={item.free_shipping}
              />
            ))}
          </ol>
        </ResultsContent>
      </Container>
    );
  }

  return (
    <Container>
      <NotFound>
        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul>
          <li>
            <strong>Revisa la ortografía</strong> de la palabra.
          </li>
          <li>
            Utiliza <strong>palabras más genéricas</strong> o menos palabras.
          </li>
        </ul>
      </NotFound>
    </Container>
  );
}

export default ResultsContainer;
