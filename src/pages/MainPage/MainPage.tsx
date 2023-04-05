import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListOfCards, { type } from '../../components/ListOfCards/ListOfCards';
import { getProducts } from '../../api/getProducts';
import { searchProducts } from '../../api/searchProducts';

function MainPage() {
  const [searchedValue, setSearchedValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSearch = (value: string) => {
    setSearchedValue(value);
  };

  useEffect(() => {
    if (searchedValue === '') {
      async function foo() {
        setProducts(await getProducts());
      }
      foo();
    }
  });

  useEffect(() => {
    async function foo() {
      setIsLoaded(true);
      setProducts(await searchProducts(searchedValue));
      setIsLoaded(false);
    }
    foo();
  }, [searchedValue]);

  return (
    <div className="container mx-auto">
      <SearchBar onEnterPressed={handleSearch} />
      {isLoaded ? (
        <div className="flex items-center justify-center space-x-2">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-brand motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : products.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <ListOfCards cardType={type.short} products={products} />
        </div>
      ) : (
        <div>
          <h2 className="mx-auto w-fit font-semibold text-2xl">Nothing Found</h2>
          <p className="mx-auto w-fit">You searched for &apos;{searchedValue}&apos;</p>
        </div>
      )}
    </div>
  );
}

export default MainPage;
