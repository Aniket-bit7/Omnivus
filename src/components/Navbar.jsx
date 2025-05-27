import { Mail, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-white py-2 px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 mt-3">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center sm:justify-start text-sm text-blue-800">
          <span className="flex gap-2 items-center whitespace-nowrap">
            <Mail className="w-5 h-5" />
            info@webmail.com
          </span>
          <span className="flex gap-2 items-center whitespace-nowrap">
            <Phone className="w-5 h-5" />
            786 875 864 75 7
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-3 items-center mt-2 sm:mt-0 text-blue-700">
          <Link to="#" className="hover:text-blue-500 transition-colors">
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link to="#" className="hover:text-blue-500 transition-colors">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link to="#" className="hover:text-pink-500 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link to="#" className="hover:text-red-600 transition-colors">
            <FaYoutube className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <hr className="border-t mt-10 border-blue-700 w-screen -mx-4 sm:-mx-6 lg:-mx-12" />
      <div className="flex mt-3 justify-between items-center">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-2xl sm:text-3xl font-bold text-black-700">
            OmniVus.
          </span>
          <span className="text-xs sm:text-sm text-gray-500">
            IT Services & Technology
          </span>
        </Link>
        <div className="hidden xl:flex space-x-6 justify-center items-center text-lg">
          <div className="flex space-x-8 justify-center items-center font-medium text-stone-700">
            <Link to="/" className="hover:text-blue-900 transition-colors">
              Home +
            </Link>
            <Link to="/" className="hover:text-blue-900 transition-colors">
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-900 transition-colors"
            >
              Services +
            </Link>
            <Link to="/" className="hover:text-blue-900 transition-colors">
              Pages +
            </Link>
            <Link to="/blog" className="hover:text-blue-900 transition-colors">
              Blog +
            </Link>
            <Link to="/" className="hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <button className="flex justify-center items-center bg-blue-700 text-sm text-white font-serif font-semibold px-4 py-3 rounded hover:bg-white hover:text-blue-700 border border-blue-700 transition duration-300">
          Get A Quote
        </button>
      </div>
    </section>
  );
};

export default Navbar;
