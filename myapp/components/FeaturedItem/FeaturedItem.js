'use client'
import React from 'react'

const FeaturedItem = () => {
  return (
    <section className='flex flex-col w-full bg-purple-100 h-screen p-10'>
        <h2 className='text-center'>Featured Items</h2>
        <div  className='flex gap-6 w-screen'>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
            <div className='h-80 bg-red-800 p-4 flex-wrap'>1</div>
        </div>
    </section>
  )
}

export default FeaturedItem