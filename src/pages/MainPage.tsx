import React from 'react';
import SearchBar from '../components/SearchBar';
import ListOfCards from '../components/ListOfCards';
import products from '../data/products.json';

function MainPage() {
  return (
    <div className="container mx-auto">
      <SearchBar />
      <div className="flex flex-row flex-wrap justify-between gap-6">
        <ListOfCards products={products.products} />
      </div>
    </div>
  );
}

export default MainPage;
