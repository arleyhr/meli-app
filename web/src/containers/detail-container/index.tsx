import React from 'react';

import Breadcrumbs from '../../components/breadcrumbs';
import Button from '../../components/button';
import { Container } from '../../components/container';

import { useGetDetail } from '../../hooks/use-get-detail';
import { formatPrice } from '../../utils/format-price';

import {
  DescriptionContent,
  DetailContent,
  InfoContent,
  ItemData,
  ItemImageContainer,
} from './style';

type DetailContainerProps = {
  /** item id */
  itemId: string;
};

/**
 *
 * Detail item container
 * @param {DetailContainerProps} props
 */
function DetailContainer(props: DetailContainerProps) {
  /** simplifying complex logic with custom hook */
  const { item, breadcrumbsPath } = useGetDetail(props.itemId);

  // validate if exists item
  if (item) {
    /** Map breadcrumbs */
    const breadcrumbs = breadcrumbsPath.map((item) => ({
      id: item.id,
      displayName: item.name,
      link: `/items?q=${item.name}`,
    }));

    return (
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <DetailContent>
          <InfoContent>
            <ItemImageContainer>
              <img src={item.picture} alt={item.picture} />
            </ItemImageContainer>
            <ItemData>
              <span className="info">
                {item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
                {item.sold_quantity || 0} vendidos
              </span>
              <h1>{item.title}</h1>
              <span className="price">
                {formatPrice(item.price.amount, item.price.currency)}
              </span>
              <Button>Comprar</Button>
            </ItemData>
          </InfoContent>
          <DescriptionContent>
            <h2>Descripción del producto</h2>
            <p>{item.description}</p>
          </DescriptionContent>
        </DetailContent>
      </Container>
    );
  }
  return null;
}

export default DetailContainer;
