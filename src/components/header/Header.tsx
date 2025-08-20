import React, { useEffect, useState } from 'react';
import IMAGES from '@/assets/Images';
import { Link, NavLink, useLocation, useMatch } from 'react-router-dom';
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';
import { calculateTotalQty } from '@/features/CartProductSlice';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelector } from 'react-redux';

export default function Header() {
  
  const productTotalQuantity = useSelector((state) => state.allCart.totalQuantity)
  console.log('productTotalQuantity : ', productTotalQuantity);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  },[]);

  const isHomePage = useMatch('/');
  const isLoginPage = useMatch('login')
  const isSignupPage = useMatch('signup')
  const { login, register, user, isAuthenticated, logout } = useKindeAuth();

  const headerClass = isHomePage ? 'headerBkgWhite homeHeader' : isLoginPage ? 'hidden' : isSignupPage ? 'hidden' : 'headerBkgBlue';

  const handleLogin = () => {
    login();
  };

  const handleRegister = () => {
    register();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={`fixed w-full z-10 left-0 ${scroll ? 'scrolled' : ''} ${headerClass}`}>
      <div className='container mx-auto'>
        <div className='headerMain grid'>
          <div className={`logoBkg rounded-br-3xl logoImg`}>
            {/* <img src={IMAGES.logoImg} alt='logo' className='logo' /> */}
            <IMAGES.logoSvg />
          </div>
          <ul className={`headerList flex justify-center items-center grow relative`}>
            <li className='headerListItem'>
              <NavLink to="/" className={`headerListItemLink ${({ isActive }) => isActive ? "active" : ""}`}>Home</NavLink>
            </li>
            <li className='headerListItem'>
              <NavLink to="listingMen" className={`headerListItemLink ${({ isActive }) => isActive ? "active" : ""}`}>Men</NavLink>
            </li>
            <li className='headerListItem'>
              <NavLink to="listingWomen" className={`headerListItemLink ${({ isActive }) => isActive ? "active" : ""}`}>Women</NavLink>
            </li>
            <li className='headerListItem'>
              <NavLink to="listingTshirts" className={`headerListItemLink ${({ isActive }) => isActive ? "active" : ""}`}>T-shirts</NavLink>
            </li>
            <li className='headerListItem'>
              <NavLink to="listingShirts" className={`headerListItemLink ${({ isActive }) => isActive ? "active" : ""}`}>Shirts</NavLink>
            </li>
            <li className='headerListItem'>
              <NavLink to="accessories" className={`headerListItemLink ${({ isActive }) => isActive ? "active" : ""}`}>Accessories</NavLink>
            </li>
            <li className='headerListItem'>
              <a href='#' className='searchImg inline-block w-12 h-12 rounded-full bg-white flex justify-center items-center p-3.5 hover:bg-primary border-2 border-white'>
                <IMAGES.searchSvg />
              </a>
            </li>
          </ul>
          <ul className={`headerRightMain flex justify-evenly items-center rounded-bl-3xl`}>
            {isAuthenticated 
              ? <li className='headerUser'>
              <DropdownMenu>
                <DropdownMenuTrigger className='headerIcon bg-white'>
                  <IMAGES.userSvg />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-white'>
                  {/* <DropdownMenuLabel></DropdownMenuLabel> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to='' onClick={handleLogout}>Log out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            : <li className='headerUser'>
            <DropdownMenu>
              <DropdownMenuTrigger className='headerIcon bg-white'>
                <IMAGES.userSvg />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white'>
                {/* <DropdownMenuLabel></DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to='' onClick={handleLogin}>Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to='' onClick={handleRegister}>Sign up</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
            }
            <li className='headerfavourite relative'>
              <a href='#' className='headerIcon bg-white'>
                <IMAGES.wishListSvg /><span className='numberOfItems bg-secondary rounded-full w-6 h-6 flex justify-center items-center text-white absolute -top-2.5 -right-2.5 text-sm'>5</span>
              </a>
            </li>
            <li className='headerCart relative'>
              <Link to='cart' className='headerIcon bg-white'>
                <IMAGES.cartSvg /><span className='numberOfItems bg-secondary rounded-full w-6 h-6 flex justify-center items-center text-white absolute -top-2.5 -right-2.5 text-sm'>{productTotalQuantity}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}