import React from 'react';
import Card from './Card';
import { IProduct } from 'interfaces';

class ListOfCards extends React.Component<{ products: IProduct[] }> {
  render() {
    return (
      <div className="flex flex-row flex-wrap justify-between gap-6">
        <>
          {this.props.products.map((product) => {
            return <Card product={product} key={product.category + product.id} />;
          })}
        </>
      </div>
    );
  }
}

export default ListOfCards;
