import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow px-4 sm:px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-2xl sm:text-3xl font-bold text-blue-700">OmniVus.</span>
          <span className="text-xs sm:text-sm text-gray-500">IT Services & Technology</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-6 justify-center items-center text-lg">
          <div className="flex space-x-8 justify-center items-center font-medium text-stone-700">
            <Link to="/" className="hover:text-blue-900 transition-colors">Home +</Link>
            <Link className="hover:text-blue-900 transition-colors">About</Link>
            <Link to="/services" className="hover:text-blue-900 transition-colors">Services +</Link>
            <Link className="hover:text-blue-900 transition-colors">Pages +</Link>
            <Link to="/blog" className="hover:text-blue-900 transition-colors">Blog +</Link>
            <Link className="hover:text-blue-900 transition-colors">Contact</Link>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            <Link to="/">
              <FaShoppingCart className="text-gray-500 hover:text-blue-700 transition-colors" size={18}/>
            </Link>
            <Link to="/">
              <FaSearch className="text-gray-500 hover:text-blue-700 transition-colors" size={18}/>
            </Link>
            <button className="flex justify-center items-center bg-blue-700 text-sm text-white font-serif font-semibold px-4 py-3 rounded hover:bg-white hover:text-blue-700 border border-blue-700 transition duration-300">
              Free Consulting
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button & Icons */}
        <div className="flex items-center space-x-4 xl:hidden">
          <Link to="/" className="sm:block hidden">
            <FaShoppingCart className="text-gray-500" size={18}/>
          </Link>
          <Link to="/" className="sm:block hidden">
            <FaSearch className="text-gray-500" size={18}/>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-blue-700 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            <Link to="/" className="text-stone-700 hover:text-blue-900 transition-colors py-2">Home +</Link>
            <Link to="/" className="text-stone-700 hover:text-blue-900 transition-colors py-2">About</Link>
            <Link to="/services" className="text-stone-700 hover:text-blue-900 transition-colors py-2">Services +</Link>
            <Link to="/" className="text-stone-700 hover:text-blue-900 transition-colors py-2">Pages +</Link>
            <Link to="/blog" className="text-stone-700 hover:text-blue-900 transition-colors py-2">Blog +</Link>
            <Link to="/" className="text-stone-700 hover:text-blue-900 transition-colors py-2">Contact</Link>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <div className="flex space-x-4 sm:hidden">
                <Link to="/">
                  <FaShoppingCart className="text-gray-500" size={18}/>
                </Link>
                <Link to="/">
                  <FaSearch className="text-gray-500" size={18}/>
                </Link>
              </div>
              <button className="flex justify-center items-center bg-blue-700 text-sm text-white font-serif font-semibold px-4 py-3 rounded hover:bg-white hover:text-blue-700 border border-blue-700 transition duration-300 w-full sm:w-auto">
                Free Consulting
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;