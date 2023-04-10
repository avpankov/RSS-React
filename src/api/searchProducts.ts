import axios from 'axios';
import { baseUrl } from './getProducts';

export async function searchProducts(value: string) {
  const { data } = await axios.get(`${baseUrl}/search?q=${value}`);
  return data.products;
}
