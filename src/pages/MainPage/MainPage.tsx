import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListOfCards, { type } from '../../components/ListOfCards/ListOfCards';
import { getProducts } from '../../api/getProducts';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { searchProducts } from '../../api/searchProducts';

function MainPage() {
  const [searchedValue, setSearchedValue] = useState('');
  const [products, setProducts] = useState([]);
  const [modalWindow, setModalWindow] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchedValue(value);
  };

  useEffect(() => {
    async function foo() {
      setProducts(await getProducts());
    }
    foo();
  }, []);

  useEffect(() => {
    async function foo() {
      setProducts(await searchProducts(searchedValue));
      console.log('Сработал вызов функции');
    }
    foo();
  }, [searchedValue]);

  return (
    <div className="container mx-auto">
      <SearchBar onChange={handleSearchChange} />
      <div
        className="flex flex-row flex-wrap justify-between gap-6"
        onClick={() => setModalWindow(true)}
      >
        <ListOfCards cardType={type.short} products={products} />
      </div>
      <ModalWindow visible={modalWindow} setVisible={setModalWindow}>
        Modal window
      </ModalWindow>
    </div>
  );
}

export default MainPage;
