import React from 'react';
import Card from '../Card/Card';
import { IMyProduct, IProduct } from 'interfaces';
import ShortCard from '../../components/ShortCard/ShortCard';

type ListOfCardsProps = { cardType: type; products: IProduct[] | IMyProduct[] };

export enum type {
  short,
  full,
}

function ListOfCards({ cardType, products }: ListOfCardsProps) {
  return (
    <>
      {products.map((product: IProduct | IMyProduct) => {
        switch (cardType) {
          case type.short:
            return <ShortCard product={product} key={product.id} />;
          case type.full:
            return <Card product={product} key={product.id} />;
          default:
            return <Card product={product} key={product.id} />;
        }
      })}
    </>
  );
}

export default ListOfCards;
