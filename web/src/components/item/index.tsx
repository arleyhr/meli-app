import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import freeShippingImage from '../../assets/shipping.png';
import { formatPrice } from '../../utils/format-price';

import { ItemContainer, PhotoContainer, RightSideContent } from './style';

type ItemProps = {
  image: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  link: string;
  freeShipping: boolean;
  condition: string;
};

function Item(props: ItemProps) {
  const price = useMemo(
    () => formatPrice(props.price.amount, props.price.currency),
    [props.price],
  );
  return (
    <ItemContainer>
      <PhotoContainer>
        <img src={props.image} alt={props.title} />
      </PhotoContainer>
      <RightSideContent>
        <div className="info">
          <div className="info-price">
            <span>{price} </span>
            {props.freeShipping && (
              <img src={freeShippingImage} alt="Envio gratis" />
            )}
          </div>
          <span className="info-condition">
            {props.condition === 'new' ? 'Nuevo' : 'Usado'}
          </span>
        </div>
        <Link to={props.link}>
          <h2>{props.title}</h2>
        </Link>
      </RightSideContent>
    </ItemContainer>
  );
}

export default Item;
