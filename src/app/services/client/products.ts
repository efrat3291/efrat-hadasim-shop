import { Product } from "@/types/products";


export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products from SERVICE");
  }

  const data: Product[] = await response.json();
  return data;
};