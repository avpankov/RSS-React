import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../../api/getSingleProduct';
import { IProduct } from 'interfaces';
import { ReactComponent as IconStock } from '../../assets/icons/stock.svg';

function ProductFullInfo(prop: { id: number }) {
  const id = prop.id;
  const [productInfo, setProductInfo] = useState<IProduct>();
  useEffect(() => {
    async function foo() {
      setProductInfo(await getSingleProduct(id.toString()));
    }
    foo();
  }, [id]);

  return (
    <div className="max-w-2xl">
      <div>
        <div className="rounded flex flex-row justify-center items-center">
          <img src={productInfo?.thumbnail} className="max-h-[50vh]" alt="" />
        </div>
        <div className="flex flex-row justify-between pt-2">
          <div className="flex flex-row items-center space-x-1">
            <IconStock className="w-[16px] h-[16px] fill-amber-500" />
            <span className="text-sm">{productInfo?.stock}</span>
          </div>
          <div>ID: {productInfo?.id}</div>
        </div>
        <div>
          <div className="text-sm font-bold text-slate-300 py-2 whitespace-nowrap text-ellipsis overflow-hidden">
            {productInfo?.category} • {productInfo?.brand.toLowerCase()}
          </div>
        </div>
        <h3 className="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">
          {productInfo?.title}
        </h3>
        <div className="flex flex-row items-center space-x-2 py-2">
          <div className="text-2xl font-bold">{productInfo?.price}$</div>
          <div className="p-1 bg-brand text-xs text-white rounded-md">
            -{productInfo?.discountPercentage}%
          </div>
        </div>
        <p className="font-semibold">{productInfo?.description}</p>
      </div>
    </div>
  );
}

export default ProductFullInfo;
