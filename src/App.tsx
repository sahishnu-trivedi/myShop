import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';

function App() {
  return (
    <>
      <header className='fixed w-full z-10 left-0'>
        <div className='container mx-auto'>
          <Header />
        </div>
      </header>
      <div className='container mx-auto'>
        <Banner />
      </div>
    </>
  )
}

export default App
