import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';

const RoutesTest = [
  {
    path: '/',
    element: <Root />,
  },
];
const router = createMemoryRouter(RoutesTest);

describe('Root tests', () => {
  it('Renders navigation correctly', () => {
    render(<RouterProvider router={router} />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeTruthy;
  });

  it('Hover works correctly', () => {
    render(<RouterProvider router={router} />);
    const link = screen.getByText('About');
    fireEvent(link, new MouseEvent('hover'));
    expect(Array.from(link.classList)).toContain('hover:text-brand');
  });
});
