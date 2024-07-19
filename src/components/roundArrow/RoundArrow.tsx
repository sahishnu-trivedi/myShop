import IMAGES from '@/assets/Images'
import React from 'react'

export default function RoundArrow() {
  return (
    <div className='bannerRightArrowBtnCircle w-32 h-32 p-2.5 -rotate-45 transition-all duration-500 ease-in-out'>
        <div className='bannerRightArrowBtn bg-white rounded-full w-full h-full flex justify-center items-center'>
            <IMAGES.arrowSvg/>
        </div>
    </div>
  )
}
