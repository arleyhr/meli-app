import React from 'react';

import { Container } from '../container';

import {
  Bread,
  DescriptionContent,
  DetailContent,
  InfoContent,
  ItemData,
  ItemImageContainer,
} from './style';
import Skeleton from 'react-loading-skeleton';

function DetailSkeleton() {
  return (
    <Container>
      <Bread>
        <Skeleton />
      </Bread>
      <DetailContent>
        <InfoContent>
          <ItemImageContainer>
            <Skeleton />
          </ItemImageContainer>
          <ItemData>
            <span className="info">
              <Skeleton width={120} />
            </span>
            <h1>
              <Skeleton width={250} />
            </h1>
            <span className="price">
              <Skeleton height={40} />
            </span>
            <Skeleton width={300} height={48} />
          </ItemData>
        </InfoContent>
        <DescriptionContent>
          <h2>
            <Skeleton />
          </h2>
          <p>
            <Skeleton height={150} />
          </p>
        </DescriptionContent>
      </DetailContent>
    </Container>
  );
}

export default DetailSkeleton;
