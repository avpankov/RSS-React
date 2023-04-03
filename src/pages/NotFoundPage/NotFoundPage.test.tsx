import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

it('Shows text message', () => {
  render(<NotFoundPage />);
  const heading = screen.getByRole('heading', {
    level: 2,
  });
  expect(heading).toHaveTextContent(/No found page/i);
});
