import React from 'react';

import Breadcrumbs from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import Item from '../../components/item';

import { useSearchItems } from '../../hooks/use-search-items';
import { ResultsContent } from './style';

type ResultsContainerProps = {
  /** query key word */
  q: string;

  /** meli site id */
  siteId: string;
};

function ResultsContainer(props: ResultsContainerProps) {
  /** simplifying complex logic with custom hook */
  const { items, breadcrumbsPath } = useSearchItems(props.q, props.siteId);

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
  return null;
}

export default ResultsContainer;
