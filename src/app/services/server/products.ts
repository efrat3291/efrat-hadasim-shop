import { Collection } from 'mongodb';
import { client } from '../server/mongo';
import { Product } from '@/types/products';

export async function fetchProducts(): Promise<Product[]> {
  if (!client.isConnected?.()) {
    await client.connect();
  }

  const db = client.db("hadasim-shop");
  const collection = db.collection("products") as Collection<Product>;
  return collection.find({}).toArray();
}
