import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { ArrowRight } from "lucide-react";


const Header = () => {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex flex-col leading-tight">
        <span className="text-3xl font-bold text-blue-700">OmniVus.</span>
        <span className="text-sm text-gray-500">IT Services & Technology</span>
      </Link>
      <div className="flex space-x-6 justify-center items-center text-lg">
        <div className="flex space-x-8 justify-center items-center font-medium text-stone-700">
        <Link to="/" className="hover:text-blue-900">Home +</Link>
        <Link to="/" className="hover:text-blue-900">About</Link>
        <Link to="/services" className="hover:text-blue-900">Services +</Link>
        <Link to="/" className="hover:text-blue-900">Pages +</Link>
        <Link to="/blog" className="hover:text-blue-900">Blog +</Link>
        <Link to="/" className="hover:text-blue-900">Contact</Link>
        </div>
        <div className="flex space-x-6 justify-center items-center">
        <Link to="/">
          <FaShoppingCart className="mr-8" color="grey" size={20}/>
        </Link>
        <Link to="/">
        <FaSearch className="mr-8" color="grey" size={20}/>
        </Link>
        <Link to="/">
          <FaBars className="mr-8" color="blue" size={20}/>
        </Link>
        <button className="flex justify-center items-center bg-blue-700 text-sm text-white font-serif font-semibold p-4 rounded hover:bg-white hover:text-blue-700 border border-blue-700 transition duration-300 ">
          Free Consulting
          <ArrowRight className="text-white-500 opacity-75 text-xl" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
