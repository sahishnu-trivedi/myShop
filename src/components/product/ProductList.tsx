import IMAGES from '@/assets/Images'
import React from 'react'

export default function ProductList() {
  return (
    <div className='productBlock'>
        <div className='relative'>
            <div className='productImg'><img src={IMAGES.productImg1} alt='Product Image' className='w-full rounded-xl h-full object-cover'/></div>
            <a href='#' className='heartIcon w-10 h-10 rounded-xl border border-secondary inline-block flex justify-center items-center bg-white absolute top-4 right-4 hover:bg-secondary hover:border-white'>
                <IMAGES.heartSvg />
            </a>
            <div>
                <p>T-shirt</p>
                <p><i className="icofont icofont-heart"></i></p>
            </div>
        </div>
    </div>
  )
}
