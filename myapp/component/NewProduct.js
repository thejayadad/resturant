'use client'
import React from 'react'

const NewProduct = () => {
  return (
    <section>
        <form className='flex flex-col'>
            <input type='text' placeholder='product name' />
            <textarea placeholder='description'></textarea>
            <input type='text' placeholder='price' />
        </form>
    </section>
  )
}

export default NewProduct