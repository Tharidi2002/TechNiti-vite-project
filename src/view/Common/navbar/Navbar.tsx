// Navbar.tsx
// import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../../assets/logo.png';

export const Navbar = () => {
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
                    <Link
                            to="/"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/shopping-cart"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300"
                        >
                            My-Cart
                        </Link>
                        <Link
                            to="/contact"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-md"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
};