import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Simulated auto-suggest functionality
    if (query.length > 0) {
      setSuggestions(["Product 1", "Product 2", "Product 3"]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log("Search submitted:", searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-gray-900 text-white ${
        isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="E-commerce Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">E-Shop</span>
          </a>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <span>Categories</span>
                <IoMdArrowDropdown />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Electronics
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Clothing
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Books
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-gray-300">
              Deals
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </nav>

          {/* Search Bar */}
          <SearchBar />

          {/* User Account and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <FaUser />
                <span>Account</span>
                <IoMdArrowDropdown />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Register
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Profile
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <FaShoppingCart />
              <span>Cart</span>
              {cartItems > 0 && (
                <span className="bg-yellow-400 text-gray-900 rounded-full px-2 py-1 text-xs">
                  {cartItems}
                </span>
              )}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSubmitSearch} className="mb-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-grow py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-900 px-4 rounded-r-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-300">
                Categories
              </a>
              <a href="#" className="hover:text-gray-300">
                Deals
              </a>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
              <a href="#" className="hover:text-gray-300">
                Account
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-gray-300"
              >
                <FaShoppingCart />
                <span>Cart</span>
                {cartItems > 0 && (
                  <span className="bg-yellow-400 text-gray-900 rounded-full px-2 py-1 text-xs">
                    {cartItems}
                  </span>
                )}
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-2 px-4 text-center">
        <a href="#" className="text-white font-bold hover:underline">
          🎉 Special Offer: Free Shipping on Orders Over $50! Shop Now 🛍️
        </a>
      </div>
    </header>
  );
};

export default Header;
