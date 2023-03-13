import React from 'react';
import products from '../data/products.json';
import starIcon from '../assets/star.png';
import { ReactComponent as IconHeart } from '../assets/heart.svg';

class Card extends React.Component {
  render() {
    return (
      <div className="w-[260px] rounded-md bg-white border border-slate-200 hover:drop-shadow-lg duration-200">
        <div className="p-4 pb-0">
          <div className="w-full h-[195px]">
            <div
              className={`w-full h-full rounded flex flex-row content-center items-center bg-[url('${products.products[0].images[0]}')] bg-center bg-contain bg-no-repeat`}
            ></div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-1">
              <img src={starIcon} width="14px" alt="" />
              <span className="text-sm font-bold text-amber-400">
                {products.products[0].rating}
              </span>
            </div>
            <div>ID: {products.products[0].id}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-200 py-2">
              {products.products[0].category} • {products.products[0].brand.toLowerCase()}
            </div>
          </div>
          <div className="text-lg font-bold">{products.products[0].title}</div>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-2xl font-bold">{products.products[0].price}$</div>
            <div className="p-1 bg-brand text-xs text-white rounded-md">
              -{products.products[0].discountPercentage}%
            </div>
          </div>
          <div className="w-1/2  mx-auto h-[56px] border border-b-0 rounded-tl-full rounded-tr-full flex flex-row items-center content-center mt-4">
            <div className="mx-auto">
              <IconHeart className="w-[22px] h-[22px] fill-slate-200 hover:fill-brand duration-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
