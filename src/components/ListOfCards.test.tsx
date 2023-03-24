import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import products from '../data/products.json';
import ListOfCards from './ListOfCards';

it('Renders product card title', () => {
  render(<ListOfCards products={products.products} />);
  const randomProductIndex = Math.floor(Math.random() * 100);
  const randomProduct = screen.getByText(products.products[randomProductIndex].title);
  expect(randomProduct).toBeInTheDocument;
});
