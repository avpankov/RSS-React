import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutUsPage from './pages/AboutUsPage';
import FormPage from './components/MyForm';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
      {
        path: '/about',
        element: <AboutUsPage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
