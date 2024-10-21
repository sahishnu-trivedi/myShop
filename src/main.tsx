import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ListingPageMen from './pages/ListingPageMen.tsx';
import ListingPageWomen from './pages/ListingPageWomen.tsx';
import ListingPageShirts from './pages/ListingPageShirts.tsx';
import ListingPageTshirts from './pages/ListingPageTshirts.tsx';
import Accessories from './pages/Accessories.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='listingMen' element={<ListingPageMen />} />
      <Route path='listingWomen' element={<ListingPageWomen />} />
      <Route path='listingShirts' element={<ListingPageShirts />} />
      <Route path='listingTshirts' element={<ListingPageTshirts />} />
      <Route path='accessories' element={<Accessories />} />
      <Route path='productDetail' element={<ProductDetailPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
