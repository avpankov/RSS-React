import { it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search bar tests', () => {
  render(<SearchBar />);
  const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;

  it('Renders search input', () => {
    expect(input).toBeInTheDocument();
  });

  it('Handles input', () => {
    fireEvent.change(input, { target: { value: 'iphone' } });
    expect(input.value).toBe('iphone');
  });
});
