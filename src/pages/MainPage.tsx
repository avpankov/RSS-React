import React from 'react';
import SearchBar from '../components/searchBar';
import ListOfCards from '../components/listOfCards';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <SearchBar />
        <ListOfCards />
      </div>
    );
  }
}

export default MainPage;
