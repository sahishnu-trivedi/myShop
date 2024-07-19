import Banner from '@/components/banner/Banner'
import Categories from '@/components/categories/Categories'
import Header from '@/components/header/Header'
import Product from '@/components/product/Product'
import React from 'react'

export default function Home() {
  return (
    <>
    <header className='fixed w-full z-10 left-0'>
        <Header />
    </header>
    <Banner />
    <Categories title='Hot Categories' />
    <Product title='Best Selling T-Shirts for Men' />
    <Product title='Best Selling Shirts for Men' />
    </>
  )
}
