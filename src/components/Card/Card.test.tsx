import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { IMyProduct } from 'interfaces';

const product: IMyProduct = {
  id: 27,
  title: 'Flying Wooden Bird',
  description:
    'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
  price: 51,
  discountPercentage: 15.58,
  stock: 17,
  brand: 'Flying Wooden',
  category: 'home-decoration',
  thumbnail: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
  delivery: false,
  tracking: 'off',
  new: false,
};

describe('Renders product card', () => {
  it('Renders product card title', () => {
    render(<Card product={product} />);
    const title = screen.getByRole('heading', {
      level: 3,
    });
    expect(title).toHaveTextContent(/Flying Wooden Bird/i);
  });
});
