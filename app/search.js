'use client'
import { useState } from 'react';
import { searchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = () => {
        if (query) searchProducts(query).then(res => setResults(res.data));
    };
    return (
        <div className="bg-black min-h-screen text-white">
            <Header />
            <main className="p-6">
                <div className="mb-4">
                    <input value={query} onChange={e => setQuery(e.target.value)}
                        placeholder="Search products..." className="p-2 rounded bg-gray-700 textwhite mr-2" />
                    <button onClick={handleSearch} className="bg-yellow-400 text-black px-4 py-2 rounded">Search</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {results.map(prod => <ProductCard key={prod.id} product={prod} />)}
                </div>
            </main>
            <Footer />
        </div>
    );
}
