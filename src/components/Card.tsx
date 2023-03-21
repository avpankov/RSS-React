import React from 'react';
import starIcon from '../assets/icons/star.png';
import { ReactComponent as IconHeart } from '../assets/icons/heart.svg';
import { IProduct } from 'interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from '../assets/images/no_photo.png';

class Card extends React.Component<{ product: IProduct }> {
  render() {
    return (
      <div className="w-[260px] rounded-md bg-white border border-slate-200 hover:drop-shadow-lg duration-200 cursor-pointer">
        <div className="p-4 pb-0">
          <div className="w-full h-[195px]">
            <div className={`w-full h-full rounded flex flex-row justify-center items-center`}>
              <LazyLoadImage
                src={this.props.product.thumbnail ? this.props.product.thumbnail : placeholder}
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
              <img src={starIcon} width="14px" alt="" />
              <span className="text-sm font-bold text-amber-400">{this.props.product.rating}</span>
            </div>
            <div>ID: {this.props.product.id}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-200 py-1 whitespace-nowrap text-ellipsis overflow-hidden">
              {this.props.product.category} • {this.props.product.brand.toLowerCase()}
            </div>
          </div>
          <h3 className="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">
            {this.props.product.title}
          </h3>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-2xl font-bold">{this.props.product.price}$</div>
            <div className="p-1 bg-brand text-xs text-white rounded-md">
              -{this.props.product.discountPercentage}%
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
