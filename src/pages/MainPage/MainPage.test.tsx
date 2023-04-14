import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import { store } from '../../store';

it('MainPage renders correctly', () => {
  const RoutesTest = [
    {
      path: '/',
      element: <MainPage />,
    },
  ];
  const router = createMemoryRouter(RoutesTest);
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
  const mainPage = screen.getByPlaceholderText(/Search/i);
  expect(mainPage).toBeTruthy;
});
