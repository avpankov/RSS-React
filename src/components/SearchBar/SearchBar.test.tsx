import { it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Search bar tests', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;

  it('Renders search input', () => {
    expect(input).toBeInTheDocument();
  });

  it('Handles input', () => {
    fireEvent.change(input, { target: { value: 'iphone' } });
    expect(input.value).toBe('iphone');
  });
});
