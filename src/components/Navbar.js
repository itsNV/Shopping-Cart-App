import React, { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="./logo.png" 
              alt="Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-lg brightness-110"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === '/' 
                  ? 'text-violet-400' 
                  : 'text-gray-400 hover:text-violet-400'
              }`}
            >
              Home
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative group">
              <div className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 group-hover:ring-2 group-hover:ring-violet-500/50">
                <IoCart className="text-2xl text-gray-300 group-hover:text-violet-400 transition-colors duration-300" />
                
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-lg shadow-violet-500/50">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
