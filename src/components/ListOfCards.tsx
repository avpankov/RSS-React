import React from 'react';
import Card from './Card';
import { IProduct } from 'interfaces';

class ListOfCards extends React.Component<{ products: IProduct[] }> {
  render() {
    return (
      <>
        {this.props.products.map((product) => {
          return <Card product={product} key={product.category + product.id} />;
        })}
      </>
    );
  }
}

export default ListOfCards;
