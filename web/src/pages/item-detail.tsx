import React from 'react';
import { useParams } from 'react-router';
import DetailContainer from '../containers/detail-container';

function ItemDetailPage() {
  const params = useParams<{ id: string }>();
  return (
    <React.Suspense fallback={<h5>loading...</h5>}>
      <DetailContainer itemId={params.id} />
    </React.Suspense>
  );
}

export default ItemDetailPage;
