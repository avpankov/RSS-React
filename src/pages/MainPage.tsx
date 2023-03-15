import React from 'react';
import SearchBar from '../components/searchBar';
import Card from '../components/card';
import products from '../data/products.json';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <SearchBar />
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <>
            {products.products.map((product) => {
              return <Card product={product} key={product.id} />;
            })}
          </>
        </div>
      </div>
    );
  }
}

export default MainPage;
