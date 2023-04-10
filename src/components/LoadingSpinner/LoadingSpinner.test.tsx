import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

it('Renders spinner', () => {
  render(<LoadingSpinner />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
