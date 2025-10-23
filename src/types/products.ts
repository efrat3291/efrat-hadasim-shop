export interface Product {
  _id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  inv: {
    [key: string]: number; 
  };
}