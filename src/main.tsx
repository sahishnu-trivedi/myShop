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
import Login from './providers/auth/Login.tsx';
import Signup from './providers/auth/Signup.tsx';
import Cart from './pages/Cart.tsx';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.tsx';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='listingMen' element={<ListingPageMen />} />
      <Route path='listingWomen' element={<ListingPageWomen />} />
      <Route path='listingShirts' element={<ListingPageShirts />} />
      <Route path='listingTshirts' element={<ListingPageTshirts />} />
      <Route path='accessories' element={<Accessories />} />
      <Route path='productDetail/:slug' element={<ProductDetailPage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
