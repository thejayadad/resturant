'use client'

import React from 'react'
import Aside from './Aside'

const Dashboard = () => {
  return (
    <section className='bg-red-600 flex'>
        <div className=' flex-1'>
        <Aside />
        </div>
        <div className='shrink-0 w-80 bg-red-900'>
            dash
        </div>
    </section>
  )
}

export default Dashboard