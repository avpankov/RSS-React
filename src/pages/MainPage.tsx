import React from 'react';
import SearchBar from '../components/searchBar';
import Card from '../components/card';

class MainPage extends React.Component {
  render() {
    return (
      <main>
        <div className="container mx-auto">
          <SearchBar />
          <Card />
        </div>
      </main>
    );
  }
}

export default MainPage;
