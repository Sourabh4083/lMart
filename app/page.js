'use client'
import { useEffect, useState } from "react";
import { fetchCategories, fetchLowStockProducts } from "./utils/api";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  useEffect(() => {
    fetchCategories().then(res => setCategories(res.data));
    fetchLowStockProducts().then(res => setLowStock(res.data));
  }, []);
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          {categories.map(cat => <CategoryCard key={cat.id} category={cat} />)}
        </div>
        <h2 className="text-2xl mb-4">Low Stock Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {lowStock.map(prod => <ProductCard key={prod.id} product={prod} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

