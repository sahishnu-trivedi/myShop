import React from 'react'
import IMAGES from '@/assets/Images'
import RoundArrow from '../roundArrow/RoundArrow'

export default function Banner() {
  return (
    <div className='container mx-auto'>
        <div className='bannerBkg relative mt-5'>
            <div className='bannerCenterText absolute top-1/2 left-2/4 text-center border-2 border-white rounded-xl text-white py-2 px-2'>
                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in commodo ex, eget porttitor nisl. Nulla vel placerat velit, id scelerisque lectus.</p>
            </div>
            <div className='bannerOfferText text-white text-6xl font-medium absolute top-1/2 -right-24 -translate-y-1/2 -rotate-90'>
                <p className='mb-0'><span className='percentAmt font-extrabold'>20&#x25; off</span><br />on all Women <br />T-shirts</p>
            </div>
            <div className='bannerBottomMain'>
                <div className='bannerButtonBox absolute bottom-12 left-5'>
                    <a href='#' className='bannerButton text-white py-6 px-7 border-2 border-white rounded-3xl mr-5 hover:text-white'>
                        Newly Trending
                        <span className='redirectIcon ml-3'>
                            <IMAGES.redirectSvg />
                        </span>
                    </a>
                    <a href='#' className='bannerButton text-white py-6 px-7 border-2 border-white rounded-3xl hover:text-white'>
                        Men’s Fashion
                        <span className='redirectIcon ml-3'>
                            <IMAGES.redirectSvg />
                        </span>
                    </a>
                </div>
                <div className='absolute bottom-8 right-5'>
                    <RoundArrow />
                </div>
            </div>
        </div>
    </div>
  )
}
