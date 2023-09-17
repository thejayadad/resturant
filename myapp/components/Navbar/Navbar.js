'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react'
import { FiShoppingCart } from 'react-icons/fi'; // Import the FiShoppingCart icon

const Navbar = () => {
  const { data: session } = useSession()
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    className={`navbar bg-base-100 ${isSticky ? 'sticky top-0 z-10' : ''}`}
    >
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">
          DaMarket
        </Link>
      </div>
      <div className="flex-none">
        {session ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FiShoppingCart className="h-5 w-5" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link href="/register" className="btn btn-ghost">
              Register
            </Link>
            <Link href="/login" className="btn btn-ghost">
              Login
            </Link>
          </>
        )}
        {session && (
          <button onClick={() => signOut()} className="btn btn-ghost">
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
