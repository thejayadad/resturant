'use client'
import NewProduct from '@/component/NewProduct'
import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <section>
        <h3>New Product</h3>
        <NewProduct />
    </section>
  )
}

export default Products