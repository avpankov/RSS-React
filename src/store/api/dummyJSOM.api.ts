import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, ServerResponse } from 'interfaces';

export const dummyJSONApi = createApi({
  reducerPath: 'dummyJSON/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: () => ({
        url: 'products',
      }),
      transformResponse: (response: ServerResponse) => response.products,
    }),
    getSingleProduct: builder.query<IProduct, string>({
      query: (id: string) => ({
        url: `products/${id}`,
      }),
    }),
    searchProducts: builder.query<IProduct[], string>({
      query: (value: string) => ({
        url: `products/search?q=${value}`,
      }),
      transformResponse: (response: ServerResponse) => response.products,
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetSingleProductQuery, useLazySearchProductsQuery } =
  dummyJSONApi;
