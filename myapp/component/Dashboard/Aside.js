'use client'
// Aside.js
import Link from 'next/link';
import { FaChartBar, FaBox, FaTags, FaShoppingCart, FaCog } from 'react-icons/fa'; // Import icons from React Icons
import React from 'react';

const Aside = () => {
  return (
    <aside className='bg-gray-800 text-white justify-between h-screen w-1/4 p-6'>
      <span className='text-2xl font-bold mb-6'>
        SiteAdmin
      </span>
      <nav className='space-y-2'>
        <Link href={'/'}>
          <span className='flex items-center'>
            <FaChartBar className='mr-2' /> Dashboard
          </span>
        </Link>
        <Link href={'/dashboard/products'}>
          <span className='flex items-center'>
            <FaBox className='mr-2' /> Products
          </span>
        </Link>
        <Link href={'/'}>
          <span className='flex items-center'>
            <FaTags className='mr-2' /> Categories
          </span>
        </Link>
        <Link href={'/'}>
          <span className='flex items-center'>
            <FaShoppingCart className='mr-2' /> Orders
          </span>
        </Link>
        <Link href={'/'}>
          <span className='flex items-center'>
            <FaCog className='mr-2' /> Settings
          </span>
        </Link>
      </nav>
    </aside>
  );
};

export default Aside;
