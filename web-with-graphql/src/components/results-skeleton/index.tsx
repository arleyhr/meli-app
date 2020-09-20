import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from '../container';
import ItemSkeleton from '../item-skeleton';

import { ResultsContent, Bread } from './style';

const items = Array(4)
  .fill(null)
  .map((_, index) => <ItemSkeleton key={index} />);

function ResultsSkeleton() {
  return (
    <Container>
      <Bread>
        <Skeleton width={300} />
      </Bread>
      <ResultsContent>{items}</ResultsContent>
    </Container>
  );
}

export default ResultsSkeleton;
