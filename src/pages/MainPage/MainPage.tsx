import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListOfCards, { type } from '../../components/ListOfCards/ListOfCards';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { getProducts } from '../../api/getProducts';
import { searchProducts } from '../../api/searchProducts';
import { AxiosError } from 'axios';
import {
  useGetProductsQuery,
  useLazySearchProductsQuery,
} from '../../store/dummyJSON/dummyJSOM.api';
import { IProduct } from 'interfaces';

function MainPage() {
  const {
    isFetching: areAllProductsFetching,
    isError: isAllProductsError,
    data: allProducts,
  } = useGetProductsQuery('');
  const [
    searchProducts,
    { isFetching: areSearchedProductsFetching, isError: isSearchError, data: searchedProducts },
  ] = useLazySearchProductsQuery();
  const [searchedValue, setSearchedValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );

  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>();

  useEffect(() => {
    if (searchedValue === '') {
      setDisplayedProducts(allProducts);
    } else {
      setDisplayedProducts(searchedProducts);
    }
  }, [searchedValue, allProducts, searchedProducts]);

  const handleSearch = (value: string) => {
    setSearchedValue(value);
    searchProducts(value);
  };

  return (
    <div className="container mx-auto">
      <SearchBar onEnterPressed={handleSearch} />
      {isAllProductsError || isSearchError ? (
        <h2 className="text-center font-semibold text-2xl">Something went wrong</h2>
      ) : areAllProductsFetching || areSearchedProductsFetching ? (
        <LoadingSpinner />
      ) : displayedProducts && displayedProducts.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <ListOfCards cardType={type.short} products={displayedProducts} />
        </div>
      ) : (
        <div className="text-center">
          <h2 className="font-semibold text-2xl">Nothing Found</h2>
          <p>You searched for &apos;{searchedValue}&apos;</p>
        </div>
      )}
    </div>
  );
}

export default MainPage;
