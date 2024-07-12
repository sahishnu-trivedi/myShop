import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Categories from './components/categories/Categories';
import Product from './components/product/Product';

function App() {
  return (
    <>
      <header className='relative w-full z-10 left-0'>
        <Header />
      </header>
      <Banner />
      <Categories />
      <Product />
    </>
  )
}

export default App
