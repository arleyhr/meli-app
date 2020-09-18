import React from 'react';

type ItemDetailPageProps = {
  id: string;
};

function ItemDetailPage(props: ItemDetailPageProps) {
  return <h1>Detail {props.id}</h1>;
}

export default ItemDetailPage;
