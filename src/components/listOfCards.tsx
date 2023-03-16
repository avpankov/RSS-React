import React from 'react';
import Card from './Card';
import products from '../data/products.json';

class ListOfCards extends React.Component {
  render() {
    return (
      <div className="flex flex-row flex-wrap justify-between gap-6">
        <>
          {products.products.map((product) => {
            return <Card product={product} key={product.id} />;
          })}
        </>
      </div>
    );
  }
}

export default ListOfCards;
