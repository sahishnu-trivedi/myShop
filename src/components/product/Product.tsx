import React from 'react'
import ProductList from './ProductList'
import Title from '../title/Title'
import ViewMore from '../viewMore/ViewMore'

export default function Product({ title }) {
  return (
    <div className='container mx-auto'>
        <Title titleText= {title} />
        <div className='grid grid-cols-5 gap-10'>
          <ProductList />
          <ViewMore />
        </div>
    </div>    
  )
}
