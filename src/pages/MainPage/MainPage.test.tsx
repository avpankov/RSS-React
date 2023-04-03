import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';

it('MainPage renders correctly', () => {
  const RoutesTest = [
    {
      path: '/',
      element: <MainPage />,
    },
  ];
  const router = createMemoryRouter(RoutesTest);
  render(<RouterProvider router={router} />);
  const mainPage = screen.getByPlaceholderText(/Search/i);
  expect(mainPage).toBeTruthy;
});
