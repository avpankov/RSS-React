import { RefObject } from 'react';

export interface ServerResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IMyProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  delivery: boolean;
  tracking: string;
  new: boolean;
}

export interface IValidationFields {
  title: RefObject<HTMLInputElement>;
  brand: RefObject<HTMLInputElement>;
  category: RefObject<HTMLSelectElement>;
  price: RefObject<HTMLInputElement>;
  discountPercentage: RefObject<HTMLInputElement>;
  stock: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  thumbnail: RefObject<HTMLInputElement>;
}
