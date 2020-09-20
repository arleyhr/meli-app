import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { ItemContainer, PhotoContainer, RightSideContent } from './style';

function ItemSkeleton() {
  return (
    <ItemContainer>
      <PhotoContainer>
        <Skeleton height={180} />
      </PhotoContainer>
      <RightSideContent>
        <div className="info">
          <div className="info-price">
            <span>
              <Skeleton width={140} />
            </span>
          </div>
          <span className="info-condition">
            <Skeleton width={80} />
          </span>
        </div>
        <h2>
          <Skeleton width={440} height={40} />
        </h2>
      </RightSideContent>
    </ItemContainer>
  );
}

export default ItemSkeleton;
