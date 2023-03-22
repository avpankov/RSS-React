import React from 'react';
import SearchBar from '../components/SearchBar';
import ListOfCards from '../components/ListOfCards';
import products from '../data/products.json';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <SearchBar />
        <ListOfCards products={products.products} />
      </div>
    );
  }
}

export default MainPage;
