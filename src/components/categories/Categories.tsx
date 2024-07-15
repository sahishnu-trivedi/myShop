import IMAGES from '@/assets/Images'
import React from 'react'
import Title from '../title/Title'

export default function Categories({ title }) {
  return (
      <div className='container mx-auto'>
        <Title titleText={title} />
        <div className='grid grid-cols-4'>
            <a href='#'>
                <img src={IMAGES.categoryImg1} alt='Category1' />
            </a>
            <a href='#'>
                <img src={IMAGES.categoryImg2} alt='Category1' />
            </a>

            <a href='#'>
                <img src={IMAGES.categoryImg3} alt='Category1' />
            </a>
            <a href='#'>
                <img src={IMAGES.categoryImg4} alt='Category1' />
            </a>
        </div>
    </div>
  )
}
