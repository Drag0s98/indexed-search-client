import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-300">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gray-300">Sale</a></li>
              <li><a href="#" className="hover:text-gray-300">All Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Press</a></li>
              <li><a href="#" className="hover:text-gray-300">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
            </div>
            <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookie Settings</a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-2 px-4 text-center">
        <a href="#" className="text-white font-bold hover:underline">
          🎉 Free Shipping on Orders Over $50! Limited Time Offer 🛍️
        </a>
      </div>
    </footer>
  );
};

export default Footer;