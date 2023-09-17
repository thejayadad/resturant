'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section className='flex h-screen p-10 gap-4 flex-col md:flex-row'>
      <div className='bg-red-200 flex-1 relative'>
      <img
        className='object-cover h-full'
        src='https://images.pexels.com/photos/17641645/pexels-photo-17641645/free-photo-of-young-woman-on-the-street-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='pic'/>
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
          <h1 className='text-xl md:text-6xl text-white font-bold'>
            The Place for All the Latest Trends
          </h1>
          <button className='mt-4 py-2 px-4 text-blue-400 text-lg md:text-xl border border-blue-400 bg-transparent hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out'>
            Shop Now
          </button>
        </div>
      <div className='bg-orange-100 flex-1'>
        <img
        className='object-cover h-full'
        src='https://images.pexels.com/photos/17641645/pexels-photo-17641645/free-photo-of-young-woman-on-the-street-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='pic'/>
      </div>
    </section>
  );
};

export default HeroSection;
