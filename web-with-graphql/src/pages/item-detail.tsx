import React from 'react';
import { useParams } from 'react-router';

import DetailContainer from '../containers/detail-container';

function ItemDetailPage() {
  const params = useParams<{ id: string }>();
  return <DetailContainer itemId={params.id} />;
}

export default ItemDetailPage;
