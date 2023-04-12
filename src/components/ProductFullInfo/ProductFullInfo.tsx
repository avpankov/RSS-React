import React from 'react';
import { IProduct } from 'interfaces';
import { ReactComponent as IconStock } from '../../assets/icons/stock.svg';

type ProductProps = { product: IProduct };

function ProductFullInfo({ product }: ProductProps) {
  return (
    <>
      <div className="max-w-2xl">
        <div>
          <div className="rounded flex flex-row justify-center items-center">
            <img src={product.thumbnail} className="max-h-[50vh]" alt="" />
          </div>
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-row items-center space-x-1">
              <IconStock className="w-[16px] h-[16px] fill-amber-500" />
              <span className="text-sm">{product.stock}</span>
            </div>
            <div>ID: {product.id}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-300 py-2 whitespace-nowrap text-ellipsis overflow-hidden">
              {product.category} • {product.brand.toLowerCase()}
            </div>
          </div>
          <h3 className="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">
            {product.title}
          </h3>
          <div className="flex flex-row items-center space-x-2 py-2">
            <div className="text-2xl font-bold">{product.price}$</div>
            <div className="p-1 bg-brand text-xs text-white rounded-md">
              -{product.discountPercentage}%
            </div>
          </div>
          <p className="font-semibold">{product.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductFullInfo;
