'use client';
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '@/app/services/client/products';
import Card from '../Card/Card';
import { Product } from '@/types/products';


const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data: Product[] = await fetchProducts();
                console.log(data);
                setProducts(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <div >Loading...</div>;
    if (error) return <div >Error: {error}</div>;

    return (
        <>      {products.map((p) => (
            <Card
                key={p._id}
                image={p.image}
                title={p.title}
                description={p.description}
                price={p.price}
            />
        ))}
        </>

    );
};

export default ProductsList;