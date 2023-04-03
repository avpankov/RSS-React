import React, { ChangeEvent, useEffect, useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';

function SearchBar() {
  const [searchInputValue, setSearchInputValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );

  useEffect(() => {
    localStorage.setItem('searchInputValue', searchInputValue);
  }, [searchInputValue]);

  const handleInputChange = (event: ChangeEvent) => {
    setSearchInputValue((event.target as HTMLInputElement).value);
  };

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
        value={searchInputValue}
        onChange={(event) => handleInputChange(event)}
        name="search"
        id="search"
        placeholder="Search"
        className="w-[100%] h-[48px] p-4 pl-[45px] rounded-md border border-slate-200 outline-brand"
      />
    </div>
  );
}

export default SearchBar;
