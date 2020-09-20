import React from 'react';
import { useQuery } from '@apollo/client';

import Breadcrumbs from '../../components/breadcrumbs';
import Button from '../../components/button';
import { Container } from '../../components/container';

import { formatPrice } from '../../utils/format-price';

import warningImage from '../../assets/advertencia.png';

import {
  DescriptionContent,
  DetailContent,
  InfoContent,
  ItemData,
  ItemImageContainer,
  NotFound,
} from './style';
import { ItemDetailResponse, QueryItemDetailArgs } from '../../graphql/types';
import { getItem } from '../../graphql/queries/item-detail';
import DetailSkeleton from '../../components/detail-skeleton';

type DetailContainerProps = {
  /** item id */
  itemId: string;
};

type FoundDetail = {
  itemDetail: ItemDetailResponse;
};

/**
 *
 * Detail item container
 * @param {DetailContainerProps} props
 */
function DetailContainer(props: DetailContainerProps) {
  /** execute gql query */
  const { loading, data } = useQuery<FoundDetail, QueryItemDetailArgs>(
    getItem,
    {
      variables: {
        itemId: props.itemId,
      },
    },
  );

  // loading skeleton
  if (loading) {
    return <DetailSkeleton />;
  }

  /**
   * Safe data
   */
  const item = data?.itemDetail.item;
  const breadcrumbsPath = data?.itemDetail.category.path_from_root || [];

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

  return (
    <Container>
      <NotFound>
        <img src={warningImage} alt="" />
        <p>Parece que la página no existe</p>
      </NotFound>
    </Container>
  );
}

export default DetailContainer;
