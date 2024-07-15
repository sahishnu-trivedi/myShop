import React from 'react'
import ProductList from './ProductList'
import Title from '../title/Title'

export default function Product() {
  return (
    <div className='container mx-auto'>
        <Title titleText= 'Hot Categories' />
        <div className='grid grid-cols-5 gap-10'>
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
        </div>
    </div>    
  )
}
