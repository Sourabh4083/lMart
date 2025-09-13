const ProductCard = ({ product }) => (
    <div className="bg-secondary text-white p-4 rounded shadow hover:scale-105
transition">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-yellow-400 font-semibold mb-1">₹{product.price}</p>
        <p className="text-gray-400">Stock: {product.quantity}</p>
        {product.quantity < 5 && <span
            className="bg-red-600 text-white px-2 py-1 rounded-full text-xs fontbold">Low Stock!</span>}
    </div>
);
export default ProductCard;
