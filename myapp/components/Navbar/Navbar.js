'use client'
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { FaShoppingBag } from 'react-icons/fa';


const Navbar = () => {
    const { data: session } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuLinks = [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'Gallery', link: '/gallery' },
    ];

    const handleSignOut = () => {
      signOut();
    };

  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
         <span className="text-white font-bold text-lg">Ecommerce</span>
      </div>

      {/* Responsive menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-2xl">&#215;</span>
          ) : (
            <span className="text-2xl">&#8801;</span>
          )}
        </button>
      </div>

      {/* Menu links */}
      <ul
        className={`md:flex space-x-4 ${
          menuOpen ? 'block' : 'hidden'
        } md:space-x-6 md:space-y-0 space-y-4 text-white mt-4 md:mt-0`}
      >
        {menuLinks.map((link) => (
          <li key={link.name}>
            <a href={link.link} className="hover:text-yellow-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Shopping bag and authentication */}
      <div className="flex items-center">
        {session ? (
          <>
            <div className="mr-4 relative">
              <FaShoppingBag className="text-white text-2xl cursor-pointer" />
              {/* Display the number of wishlist items */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-center">
                3
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="text-white hover:underline cursor-pointer"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <a
              href="/register"
              className="text-white hover:underline mr-4 hidden md:block"
            >
              Register
            </a>
            <a
              href="/login"
              className="text-white hover:underline md:block"
            >
              Login
            </a>
          </>
        )}
      </div>
    </div>
  </nav>
  )
}

export default Navbar