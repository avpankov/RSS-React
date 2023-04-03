import React from 'react';
import Card from '../Card/Card';
import { IProduct } from 'interfaces';

interface IListOfCardsProps {
  products: IProduct[];
}

function ListOfCards(props: IListOfCardsProps) {
  return (
    <>
      {props.products.map((product) => {
        return <Card product={product} key={product.category + product.id} />;
      })}
    </>
  );
}

export default ListOfCards;
