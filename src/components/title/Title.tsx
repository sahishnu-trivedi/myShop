import React from 'react'

export default function Title({ titleText }) {
  return (
    <div className='titleBlock'>
        <h2 className='title text-6xl font-bold text-center mt-6 mb-12 mt-14'>
            {titleText}
        </h2>
    </div>
  )
}
