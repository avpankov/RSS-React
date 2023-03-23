import { RefObject } from 'react';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating?: number;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
  delivery?: boolean;
  tracking?: string;
}

export interface IValidationFields {
  title: RefObject<HTMLInputElement>;
  brand: RefObject<HTMLInputElement>;
  category: RefObject<HTMLSelectElement>;
  price: RefObject<HTMLInputElement>;
  discountPercentage: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  thumbnail: RefObject<HTMLInputElement>;
}
