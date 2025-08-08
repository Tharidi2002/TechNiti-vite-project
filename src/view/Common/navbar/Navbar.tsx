// Navbar.tsx
// import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/logo.png';
import {useEffect, useState} from "react";


export function Navbar() {

    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('username');
        const storedRole = localStorage.getItem('role');
        setUsername(storedUserName);
        setRole(storedRole);
    }, []);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and company name */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-8 w-8 rounded-full object-cover border border-purple-200"
                        />
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                            Tharidi
                        </h3>
                    </div>

                    {/* Primary Nav */}
                    <div className="hidden md:flex items-center space-x-1">

                        {role == 'customer' && (
                                <>
                                    <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300">
                                        Home </Link>
                                    <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300">
                                        About </Link>
                                    <Link to="/shopping-cart" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300">
                                        My-Cart </Link>
                                    <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300">
                                        Contact </Link>
                                </>
                            )}

                        {/* Admin-only links */}
                        {role === 'admin' && (
                            <>
                                <li className="text-[1.9rem] text-[#e6f0e6] hover:text-green-400">
                                    <Link to="/admin-panel">Admin Panel</Link>
                                </li>
                                <li className="text-[1.9rem] text-[#e6f0e6] hover:text-green-400">
                                    <Link to="/manage-products">Manage Products</Link>
                                </li>
                            </>
                        )}
                    </div>

                     Sign In Button
                    <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-md">
                        Sign In </Link>
                    {username ? (
                        <p className="text-2xl text-white">{username}</p>
                    ) : (
                        <Link to="/login" className="text-[1.5rem] text-[#e6f0e6] bg-[#1f9e4b] py-3 px-6
                               rounded-lg border-white border-2 hover:bg-green-400">
                            Sign In </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}