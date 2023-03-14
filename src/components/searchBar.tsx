import React from 'react';
import searchIcon from '../assets/search.svg';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="w-[685px] flex flex-row relative py-6 mx-auto">
        <img
          src={searchIcon}
          width="20px"
          alt="Search icon"
          className="absolute top-[50%] translate-y-[-50%] ml-4 opacity-60"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="w-[100%] h-[48px] p-4 pl-[45px] rounded-md border border-slate-200 outline-brand"
        />
      </div>
    );
  }
}

export default SearchBar;
