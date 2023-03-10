import React from 'react';
import searchIcon from '../assets/search.svg';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <img src={searchIcon} width="20px" alt="Search icon" />
        <input type="text" name="" id="" />
      </div>
    );
  }
}

export default SearchBar;
