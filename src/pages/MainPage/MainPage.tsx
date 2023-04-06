import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListOfCards, { type } from '../../components/ListOfCards/ListOfCards';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { getProducts } from '../../api/getProducts';
import { searchProducts } from '../../api/searchProducts';
import { AxiosError } from 'axios';

function MainPage() {
  const [searchedValue, setSearchedValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSearch = (value: string) => {
    setSearchedValue(value);
  };

  useEffect(() => {
    if (searchedValue === '') {
      async function foo() {
        try {
          setProducts(await getProducts());
          setError(null);
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
            setError(error);
          }
        }
      }
      foo();
    }
  }, [searchedValue]);

  useEffect(() => {
    async function foo() {
      try {
        setIsLoaded(true);
        setProducts(await searchProducts(searchedValue));
        setError(null);
        setIsLoaded(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        }
      }
    }
    foo();
  }, [searchedValue]);

  return (
    <div className="container mx-auto">
      <SearchBar onEnterPressed={handleSearch} />
      {error ? (
        <div className="text-center">
          <h2 className="font-semibold text-2xl">{error.message}</h2>
          {(error.response?.data as AxiosError).message && (
            <p>{(error.response?.data as AxiosError).message}</p>
          )}
        </div>
      ) : isLoaded ? (
        <LoadingSpinner />
      ) : products.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <ListOfCards cardType={type.short} products={products} />
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
