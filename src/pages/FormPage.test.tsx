import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import FormPage from './FormPage';

it('FormPage renders correctly', () => {
  const RoutesTest = [
    {
      path: '/',
      element: <FormPage />,
    },
  ];
  const router = createMemoryRouter(RoutesTest);
  render(<RouterProvider router={router} />);
  const formsPage = screen.getByText(/New product form/i);
  expect(formsPage).toBeTruthy;
});
