import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';

it('Shows text message', () => {
  render(<AboutUsPage />);
  const heading = screen.getByRole('heading', {
    level: 2,
  });
  expect(heading).toHaveTextContent(/Artyom/i);
});
