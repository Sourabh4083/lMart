'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../../utils/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if (id) fetchProductById(id).then(res => setProduct(res.data));
    }, [id]);
    if (!product) return <div className="text-white p-6">Loading...</div>;
    return (
        <div className="bg-black min-h-screen text-white">
            <Header />
            <main className="p-6">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-yellow-400 mb-2">Price: ₹{product.price}</p>
                <p className="text-gray-400 mb-2">Stock: {product.quantity}</p>
                <p className="text-gray-400">Category: {product.category.name}</p>
            </main>
            <Footer />
        </div>
    );
}