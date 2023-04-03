import axios from "axios";
import { baseUrl } from "./getProducts";

export async function getSingleProduct(id: string) {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
}
