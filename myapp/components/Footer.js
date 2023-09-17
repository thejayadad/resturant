import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import the desired icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-xl">
          <h3 className="text-2xl font-bold mb-4">Company</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Terms of Service</li>
            <li className="mb-2">Privacy Policy</li>
          </ul>
        </div>

        <div className="text-xl">
          <h3 className="text-2xl font-bold mb-4">Products</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">Featured Items</li>
            <li className="mb-2">New Arrivals</li>
            <li className="mb-2">Best Sellers</li>
            <li className="mb-2">Sale</li>
          </ul>
        </div>

        <div className="text-xl">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-gray-500 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-500 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-500 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg">
          &copy; 2023 DaMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
