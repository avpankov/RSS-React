import { it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyForm from './MyForm';
import NotFoundPage from '../pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyForm />,
    errorElement: <NotFoundPage />,
  },
]);

describe('MyForm tests', () => {
  it('Renders from', () => {
    render(<RouterProvider router={router} />);
    const form = screen.getByRole('form');
    expect(form).toBeDefined();
  });
  it('Handles inputs correctly', () => {
    render(<RouterProvider router={router} />);
    const title = screen.getByLabelText(/product title/i) as HTMLInputElement;
    expect(title).toBeInTheDocument();
    fireEvent.change(title, { target: { value: 'Note 10' } });
    expect(title.value).toBe('Note 10');
    const brand = screen.getByLabelText(/brand/i) as HTMLInputElement;
    expect(brand).toBeInTheDocument();
    const category = screen.getByLabelText(/category/i) as HTMLSelectElement;
    expect(category).toBeInTheDocument();
    fireEvent.change(category, { target: { value: 'smartphones' } });
    expect(category.value).toBe('smartphones');
    const price = screen.getByLabelText(/price/i) as HTMLSelectElement;
    expect(price).toBeInTheDocument();
    const discountPercentage = screen.getByLabelText(/discount/i) as HTMLInputElement;
    expect(discountPercentage).toBeInTheDocument();
    fireEvent.change(discountPercentage, { target: { value: '15' } });
    expect(discountPercentage.value).toBe('15');
    const stock = screen.getByLabelText(/stock/i) as HTMLInputElement;
    expect(stock).toBeInTheDocument();
    fireEvent.change(stock, { target: { value: '5' } });
    expect(stock.value).toBe('5');
    const date = screen.getByLabelText(/Delivery availability from/i) as HTMLInputElement;
    expect(date).toBeInTheDocument();
    fireEvent.change(stock, { target: { value: '5' } });
    expect(stock.value).toBe('5');
    const delivery = screen.getByLabelText(/Free delivery/i) as HTMLInputElement;
    expect(delivery).toBeInTheDocument();
    fireEvent.change(delivery, { target: { value: '24.03.2023' } });
    expect(delivery.value).toBe('24.03.2023');
    const trackingOn = screen.getByLabelText(/^on$/i) as HTMLInputElement;
    expect(trackingOn).toBeInTheDocument();
    const trackingOff = screen.getByLabelText(/^off$/i) as HTMLInputElement;
    expect(trackingOff).toBeInTheDocument();

    const submit = screen.getByText('Save');
    submit.click();
    expect(Array.from(title.classList)).not.toContain('border-red-500');
    expect(Array.from(brand.classList)).toContain('border-red-500');
    expect(Array.from(category.classList)).not.toContain('border-red-500');
    expect(Array.from(price.classList)).toContain('border-red-500');
  });
  it('Imports files properly', () => {
    render(<RouterProvider router={router} />);
    const file = screen.getByLabelText(/Upload image/i) as HTMLInputElement;
    expect(file).toBeTruthy();
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['world'], 'world.png', { type: 'image/png' }),
    ];

    userEvent.upload(file, files);
    expect(file.files).toHaveLength(0);
  });
});
