import React from 'react';
import SearchBar from '../components/searchBar';
import Card from '../components/card';
import products from '../data/products.json';

class MainPage extends React.Component {
  render() {
    return (
      <main>
        <div className="container mx-auto">
          <SearchBar />
          <div className="flex flex-row flex-wrap justify-between gap-6">
            <>
              {products.products.map((product) => {
                return <Card product={product} />;
              })}
            </>
          </div>
        </div>
      </main>
    );
  }
}

export default MainPage;
