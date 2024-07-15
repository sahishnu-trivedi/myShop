import IMAGES from '@/assets/Images'
import React from 'react'

export default function ProductList() {
  return (
    <div className='productBlock'>
        <div className='relative'>
            <div className='productImg'><img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/></div>
            <a href='#' className='heartIcon w-10 h-10 rounded-xl border border-secondary inline-block flex justify-center items-center bg-white absolute top-4 right-4 hover:bg-secondary hover:border-white'>
                {/* <IMAGES.heartSvg /> */}
                <i className="icofont-heart"></i>
            </a>
            <div className='grid grid-cols-2 justify-between my-2'>
                <p className='text-grey'>T-shirt</p>
                <ul className='ratingStarList flex items-center justify-self-end'>
                  <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                  <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                  <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                  <li className='ratingStarListItem text-primary'><i className="icofont-star"></i></li>
                  <li className='ratingStarListItem text-grey'><i className="icofont-star"></i></li>
                  <li className='ratingStarListItem text-grey ml-1'>(369)</li>
                </ul>
            </div>
            <h2 className='mb-2 text-black font-bold text-lg'>Striped round neck T-shirt</h2>
            <div className='flex items-center font-bold'>
              <h3 className='text-black text-lg mr-2'>&#8377; 699</h3>
              <p className='text-secondary text-base'><span className='line-through'>&#8377; 1299</span> (59 &percnt; off)</p>
            </div>
        </div>
    </div>
  )
}
