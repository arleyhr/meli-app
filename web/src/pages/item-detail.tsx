import React from 'react';
import { useParams } from 'react-router';

import DetailSkeleton from '../components/detail-skeleton';
import DetailContainer from '../containers/detail-container';

function ItemDetailPage() {
  const params = useParams<{ id: string }>();
  return (
    <React.Suspense fallback={<DetailSkeleton />}>
      <DetailContainer itemId={params.id} />
    </React.Suspense>
  );
}

export default ItemDetailPage;
