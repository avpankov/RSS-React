import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductFullInfo from './ProductFullInfo';

it('Renders product info', () => {
  render(<ProductFullInfo id={4} />);
  expect(
    screen.findByRole('heading', {
      level: 3,
    })
  ).toBeTruthy();
});
