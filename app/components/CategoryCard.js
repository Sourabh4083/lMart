const CategoryCard = ({ category }) => (
    <div className="bg-secondary text-white p-4 rounded shadow hover:scale-105 transition">
        <h3 className="text-lg font-bold mb-2">{category.name}</h3>
        <p className="text-gray-400">{category.description}</p>
    </div>
);
export default CategoryCard;