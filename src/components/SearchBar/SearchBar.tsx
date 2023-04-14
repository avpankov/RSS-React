import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg';
import searchIcon from '../../assets/icons/search.svg';
import { RootState } from '../../store';
import { useLazySearchProductsQuery } from '../../store/api/dummyJSOM.api';
import {
  setIsError,
  setIsLoading,
  setProductList,
  setSearch,
} from '../../store/slices/searchSlice';

function SearchBar() {
  const { search } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const [searchProducts, { isError, data }] = useLazySearchProductsQuery();

  const handleInputChange = (event: ChangeEvent) => {
    dispatch(setSearch((event.target as HTMLInputElement).value));
  };

  const handleSearch = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(setIsLoading(true));
      dispatch(setSearch((event.target as HTMLInputElement).value));
      searchProducts(search);
    }
  };

  const clearInput = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(setSearch(''));
  };

  useEffect(() => {
    if (data) {
      dispatch(setProductList(data));
      dispatch(setIsLoading(false));
    }
    if (isError) {
      dispatch(setIsLoading(false));
      dispatch(setIsError(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError]);

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
        value={search}
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
