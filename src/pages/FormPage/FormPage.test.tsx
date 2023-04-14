import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import FormPage from './FormPage';
import { Provider } from 'react-redux';
import { store } from '../../store';

it('FormPage renders correctly', () => {
  const RoutesTest = [
    {
      path: '/',
      element: <FormPage />,
    },
  ];
  const router = createMemoryRouter(RoutesTest);
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
  const formsPage = screen.getByText(/New product form/i);
  expect(formsPage).toBeTruthy;
});
