import React from 'react';

const ShowCase = () => {
  return (
    <section className='flex flex-col h-screen w-full p-8 overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='bg-orange-400 md:flex-1'>
          <img
            className='h-screen object-cover'
            src='https://images.pexels.com/photos/18000725/pexels-photo-18000725.jpeg'
            alt='pic'
          />
        </div>
        <div className='bg-red-400 md:flex-1'>
          <img
            className='h-screen object-cover'
            src='https://images.pexels.com/photos/17938996/pexels-photo-17938996/free-photo-of-woman-in-camisole-standing-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='pic'
          />
        </div>
        <div className='bg-green-400 md:flex-1'>
          <img
            className='h-screen object-cover'
            src='https://images.pexels.com/photos/17876841/pexels-photo-17876841/free-photo-of-woman-hugging-man-on-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='pic'
          />
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
