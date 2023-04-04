import React from 'react';
import Card from '../Card/Card';
import { IProduct } from 'interfaces';
import ShortCard from '../../components/ShortCard/ShortCard';

interface IListOfCardsProps {
  cardType: type;
  products: IProduct[];
}

export enum type {
  short,
  full,
}

function ListOfCards({ cardType, products }: IListOfCardsProps) {
  return (
    <>
      {products.map((product) => {
        switch (cardType) {
          case type.short:
            return <ShortCard product={product} key={product.category + product.id} />;
          case type.full:
            return <Card product={product} key={product.category + product.id} />;
          default:
            return <Card product={product} key={product.category + product.id} />;
        }
      })}
    </>
  );
}

export default ListOfCards;
