import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListOfCards, { type } from '../../components/ListOfCards/ListOfCards';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useGetProductsQuery } from '../../store/api/dummyJSOM.api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsError, setIsLoading, setProductList } from '../../store/slices/searchSlice';

function MainPage() {
  const { isFetching, isError: isFetchError, data } = useGetProductsQuery('');
  const dispatch = useDispatch();
  const { search, productList, isLoading, isError } = useSelector(
    (state: RootState) => state.search
  );
  const [incorrectSearch, setIncorrectSearch] = useState('');

  useEffect(() => {
    if (isFetchError) {
      dispatch(setIsError(true));
    }
    if (isFetching) {
      dispatch(setIsLoading(true));
    }
    if (data && search === '') {
      dispatch(setProductList(data));
      dispatch(setIsLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!productList.length) {
      setIncorrectSearch(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  return (
    <div className="container mx-auto">
      <SearchBar />
      {isLoading && <LoadingSpinner />}
      {!isLoading && isError && (
        <h2 className="text-center font-semibold text-2xl">Something went wrong</h2>
      )}
      {!isLoading && !isError && productList.length > 0 && (
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <ListOfCards cardType={type.short} products={productList} />
        </div>
      )}
      {!isLoading && !isError && !productList.length && (
        <div className="text-center">
          <h2 className="font-semibold text-2xl">Nothing Found</h2>
          <p>You searched for &apos;{incorrectSearch}&apos;</p>
        </div>
      )}
    </div>
  );
}

export default MainPage;
