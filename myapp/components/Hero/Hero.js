'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="hero bg-cover bg-center"
      style={{
        minHeight: "800px",
        backgroundImage: 'url("https://images.pexels.com/photos/17806634/pexels-photo-17806634/free-photo-of-woman-in-dress-standing-near-hotel-brighton.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with your image URL
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>

      <div className="text-center hero-content text-base-100">
        <div className="max-w-prose mx-auto">
          <h1 className="mb-4 text-5xl font-extrabold text-white">
            Welcome to DaMarket
          </h1>
          <p className="mb-8 text-xl text-white">
            Discover the latest trends in fashion and more.
          </p>
          <a href="#shop-now" className="btn btn-primary btn-lg">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
