import axios from 'axios';

export const baseUrl = 'https://dummyjson.com/products';

export async function getProducts() {
  const { data } = await axios.get(baseUrl);
  return data.products;
}
