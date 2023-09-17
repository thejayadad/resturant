'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FeaturedItem = () => {
    const [isOverflowVisible, setIsOverflowVisible] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsOverflowVisible(true);
        } else {
          setIsOverflowVisible(false);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <section className='flex flex-col w-full bg-purple-100 p-8'>
    <h2 className='text-center'>Featured Items</h2>
    <div
      className={`flex flex-wrap gap-6 w-screen md:flex-row  ${
        isOverflowVisible ? 'md:flex' : 'md:flex-row overflow-scroll'
      } mt-8`}
    >
      <Link href={'/'} className='h-80 w-64 p-1 flex-wrap'>
        <img
        className='h-64 object-cover'
        src='https://images.pexels.com/photos/17641645/pexels-photo-17641645/free-photo-of-young-woman-on-the-street-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='pic'
        />
        <h2 className='text-center'>Description Here</h2>
        <p className='text-center'>$9.99</p>
      </Link>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
      <div className='h-80 w-64 bg-red-800 p-4 flex-wrap'>1</div>
    </div>
  </section>
  )
}

export default FeaturedItem