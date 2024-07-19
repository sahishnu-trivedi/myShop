import React from 'react'

export default function Title({ titleText }) {
  return (
    <div className='titleBlock'>
        <h2 className='title text-5xl font-bold text-center mt-16 mb-10'>
            {titleText}
        </h2>
    </div>
  )
}
