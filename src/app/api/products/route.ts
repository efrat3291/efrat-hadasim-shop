import { NextResponse } from "next/server";
import { fetchProducts} from "@/app/services/server/products";
import { Product } from "@/types/products";

export async function GET(): Promise<NextResponse<Product[] | { error: string }>> {
  try {
    const products: Product[] = await fetchProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error: unknown) {
    console.error("Error in GET /api/products:", error);

    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { error: `Failed to fetch products from server: ${message}` },
      { status: 500 }
    );
  }
}