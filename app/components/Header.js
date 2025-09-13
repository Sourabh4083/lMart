import Link from 'next/link';
const Header = () => (

    < header className="bg-black text-white p-4 flex justify-between itemscenter" >
        <h1 className="text-2xl font-bold">Pan Shop</h1>
        <input type="text" placeholder="Search products..." className="p-2
rounded bg-gray-700 text-white" />
    </header >
);
export default Header;