import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductFullInfo from './ProductFullInfo';

const product = {
  id: 27,
  title: 'Flying Wooden Bird',
  description:
    'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
  price: 51,
  discountPercentage: 15.58,
  rating: 4.41,
  stock: 17,
  brand: 'Flying Wooden',
  category: 'home-decoration',
  thumbnail: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
  images: [
    'https://i.dummyjson.com/data/products/27/1.jpg',
    'https://i.dummyjson.com/data/products/27/2.jpg',
    'https://i.dummyjson.com/data/products/27/3.jpg',
    'https://i.dummyjson.com/data/products/27/4.jpg',
    'https://i.dummyjson.com/data/products/27/thumbnail.webp',
  ],
};

it('Renders product info', () => {
  render(<ProductFullInfo product={product} />);
  expect(
    screen.findByRole('heading', {
      level: 3,
    })
  ).toBeTruthy();
});
