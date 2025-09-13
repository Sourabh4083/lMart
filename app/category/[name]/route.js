'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../utils/api';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function CategoryPage() {
    const router = useRouter();
    const { name } = router.query;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (name) fetchProductsByCategory(name).then(res =>
            setProducts(res.data));
    }, [name]);
    return (
        <div className="bg-black min-h-screen text-white">
            <Header />
            <main className="p-6">
                <h2 className="text-2xl mb-4">Category: {name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map(prod => <ProductCard key={prod.id} product={prod} />)}
                </div>
            </main>
            <Footer />
        </div>
    );
}
