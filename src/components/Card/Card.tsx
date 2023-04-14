import React from 'react';
import { ReactComponent as IconHeart } from '../../assets/icons/heart.svg';
import { ReactComponent as IconStock } from '../../assets/icons/stock.svg';
import { ReactComponent as IconTracking } from '../../assets/icons/tracking.svg';
import { ReactComponent as IconDelivery } from '../../assets/icons/delivery.svg';
import { IMyProduct } from 'interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from '../../assets/images/no_photo.png';

type ProductProps = { product: IMyProduct };

function Card({ product }: ProductProps) {
  return (
    <div className="w-[260px] rounded-md bg-white border border-slate-200 hover:drop-shadow-lg duration-200 cursor-pointer">
      <div className="p-4 pb-0">
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
        <div className="flex flex-row justify-between pt-2">
          <div className="flex flex-row items-center space-x-1">
            <IconStock className="w-[16px] h-[16px] fill-amber-500" />
            <span className="text-sm">{product.stock}</span>
          </div>
          <div>ID: {product.id}</div>
        </div>
        <div>
          <div className="text-sm font-bold text-slate-300 py-1 whitespace-nowrap text-ellipsis overflow-hidden">
            {product.category} • {product.brand.toLowerCase()}
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
        <div className="w-[90%]  mx-auto h-[56px] border border-b-0 rounded-tl-full rounded-tr-full flex flex-row items-center content-center mt-4">
          <div className="mx-auto flex space-x-7">
            <span title={`${product.delivery ? 'Free delivery' : 'Paid delivery'}`}>
              <IconDelivery
                className={`w-[24px] h-[24px]  ${
                  product.delivery ? 'fill-amber-400' : 'fill-slate-200'
                }`}
              />
            </span>
            <span>
              <IconHeart className="w-[26px] h-[24px] hover:fill-brand duration-200 stroke-brand stroke-2 fill-transparent" />
            </span>
            <span
              title={`${
                product.delivery ? 'Tracking delivery status: on' : 'Tracking delivery status: off'
              }`}
            >
              <IconTracking
                className={`w-[24px] h-[24px]  ${
                  product.tracking ? 'fill-orange-600' : 'fill-slate-200'
                }`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
