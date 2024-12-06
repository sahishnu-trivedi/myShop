import './App.css'
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import Footer from './components/footer/Footer';
// import { env } from 'process';
// import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      logoutUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
      redirectUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
    >
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </KindeProvider>
  )
}

export default App
