import React from 'react'
import RoundArrow from '../roundArrow/RoundArrow'
import { Outlet, Link } from 'react-router-dom'
import ListingPage from '@/pages/ListingPage'

export default function ViewMore() {
  return (
    <Link to={ListingPage} className='viewMoreMain rounded-xl p-3'>
        <h4 className='viewMoreTitle text-7xl text-white font-black text-center opacity-10'>T-shirts for Men</h4>
        <div className='flex flex-wrap items-center justify-center'>
            <h5 className='text-4xl text-center text-white font-bold mt-4 mb-7'>View More T-Shirts for Men</h5>
            <RoundArrow />
        </div>
    </Link>
  )
}
