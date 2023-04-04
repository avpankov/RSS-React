import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg';
import searchIcon from '../../assets/icons/search.svg';

function SearchBar({ onEnterPressed }: { onEnterPressed: (value: string) => void }) {
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

  const handleSearch = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onEnterPressed((event.target as HTMLInputElement).value);
    }
  };

  const clearInput = (event: React.MouseEvent) => {
    event.preventDefault();
    setSearchInputValue('');
    searchInputValueRef.current = '';
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
        name="search"
        id="search"
        placeholder="Search"
        className="peer w-[100%] h-[48px] p-4 pl-[45px] rounded-md border border-slate-200 outline-brand"
        onChange={(event) => handleInputChange(event)}
        onKeyDown={(event) => handleSearch(event)}
      />
      <button
        onMouseDown={(event) => clearInput(event)}
        className="peer-focus:visible invisible absolute p-2 hover:bg-slate-200 rounded-md top-[50%] translate-y-[-50%] right-2"
      >
        <IconCross className="w-[14px] h-[14px] opacity-60" />
      </button>
    </div>
  );
}

export default SearchBar;
