import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import NotFoundPage from './pages/NotFoundPage';
import AboutUsPage from './pages/AboutUsPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/about',
        element: <AboutUsPage />,
      },
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
