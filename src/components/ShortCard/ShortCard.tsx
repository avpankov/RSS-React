import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from '../../assets/images/no_photo.png';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import ProductFullInfo from '../../components/ProductFullInfo/ProductFullInfo';
import { ProductProps } from '../../components/Card/Card';
import { useLazyGetSingleProductQuery } from '../../store/dummyJSON/dummyJSOM.api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function ShortCard({ product }: ProductProps) {
  const [modalWindow, setModalWindow] = useState(false);
  const [fetchProduct, { isLoading, data }] = useLazyGetSingleProductQuery();

  return (
    <>
      <div
        onClick={() => {
          setModalWindow(true);
          fetchProduct(product.id.toString());
        }}
        className="w-[260px] rounded-md bg-white border border-slate-200 hover:drop-shadow-lg duration-200 cursor-pointer"
      >
        <div className="p-4">
          <div className="w-full h-[195px]">
            <div className={`w-full h-full rounded flex flex-row justify-center items-center`}>
              <LazyLoadImage
                src={product.thumbnail ? product.thumbnail : placeholder}
                alt=""
                width="100%"
                height="100%"
                className="max-h-full max-w-fit hover:scale-110 duration-200"
                placeholderSrc={placeholder}
              />
            </div>
          </div>
          <h3 className="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">
            {product.title}
          </h3>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-2xl font-bold">{product.price}$</div>
            <div className="p-1 bg-brand text-xs text-white rounded-md">
              -{product.discountPercentage}%
            </div>
          </div>
        </div>
      </div>
      <ModalWindow visible={modalWindow} setVisible={setModalWindow}>
        {isLoading && <LoadingSpinner />}
        {data && <ProductFullInfo product={data} />}
      </ModalWindow>
    </>
  );
}

export default ShortCard;
