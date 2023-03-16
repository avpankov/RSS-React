import React from 'react';
import SearchBar from '../components/SearchBar';
import ListOfCards from '../components/ListOfCards';

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
