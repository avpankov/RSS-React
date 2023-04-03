import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';

function SearchBar() {
  const [searchInputValue, setSearchInputValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );
  const searchInputValueRef = useRef(searchInputValue);

  useEffect(() => {
    const currentSearch = localStorage.getItem('searchInputValue');
    if (currentSearch) {
      setSearchInputValue(currentSearch);
      searchInputValueRef.current = currentSearch;
    }
    return () => {
      localStorage.setItem('searchInputValue', searchInputValueRef.current);
    };
  }, []);

  const handleInputChange = (event: ChangeEvent) => {
    setSearchInputValue((event.target as HTMLInputElement).value);
    searchInputValueRef.current = (event.target as HTMLInputElement).value;
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
