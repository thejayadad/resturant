'use client'
import Link from 'next/link'
import React from 'react'

const Aside = () => {
  return (
    <aside className='flex flex-col'>
        <a>
          <span className=''>
            SiteAdmin
          </span>
        </a>
        <nav className='flex flex-col'>
            <Link href={'/'}>
                Dashboard
            </Link>
            <Link href={'/products'}>
                Products
            </Link>
            <Link href={'/'}>
                Categories
            </Link>
            <Link href={'/'}>
                Orders
            </Link>
            <Link href={'/'}>
                Settings
            </Link>
        </nav>
    </aside>
  )
}

export default Aside