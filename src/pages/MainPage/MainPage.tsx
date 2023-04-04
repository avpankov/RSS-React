import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListOfCards, { type } from '../../components/ListOfCards/ListOfCards';
import { getProducts } from '../../api/getProducts';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { searchProducts } from '../../api/searchProducts';

function MainPage() {
  const [searchedValue, setSearchedValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );
  const [products, setProducts] = useState([]);
  const [modalWindow, setModalWindow] = useState(false);

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
  }, []);

  useEffect(() => {
    async function foo() {
      setProducts(await searchProducts(searchedValue));
    }
    foo();
  }, [searchedValue]);

  return (
    <div className="container mx-auto">
      <SearchBar onEnterPressed={handleSearch} />
      {products.length > 0 ? (
        <div
          className="flex flex-row flex-wrap justify-between gap-6"
          onClick={() => setModalWindow(true)}
        >
          <ListOfCards cardType={type.short} products={products} />
        </div>
      ) : (
        <div>
          <h2 className="mx-auto w-fit font-semibold text-2xl">Nothing Found</h2>
          <p className="mx-auto w-fit">You searched for '{searchedValue}'</p>
        </div>
      )}
      <ModalWindow visible={modalWindow} setVisible={setModalWindow}>
        Modal window
      </ModalWindow>
    </div>
  );
}

export default MainPage;
