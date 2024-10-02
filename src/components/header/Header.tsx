import React, { useEffect, useState } from 'react'
import IMAGES from '@/assets/Images'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  },[]);

  return (
    <header className={`fixed w-full z-10 left-0 ${scroll ? 'scrolled' : ''}`}>
      <div className='container mx-auto'>
        <div className='headerMain grid'>
          <div className='bg-white rounded-br-3xl logoImg'>
            {/* <img src={IMAGES.logoImg} alt='logo' className='logo' /> */}
            <IMAGES.logoSvg />
          </div>
          <ul className='headerList flex justify-center items-center grow relative'>
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
          <ul className='headerRightMain flex justify-evenly items-center bg-white rounded-bl-3xl'>
            <li className='headerUser'>
              <a href='#' className='headerIcon'>
                <IMAGES.userSvg />
              </a>
            </li>
            <li className='headerfavourite relative'>
              <a href='#' className='headerIcon'>
                <IMAGES.wishListSvg /><span className='numberOfItems bg-secondary rounded-full w-6 h-6 flex justify-center items-center text-white absolute -top-2.5 -right-2.5 text-sm'>5</span>
              </a>
            </li>
            <li className='headerCart relative'>
              <a href='#' className='headerIcon'>
                <IMAGES.cartSvg /><span className='numberOfItems bg-secondary rounded-full w-6 h-6 flex justify-center items-center text-white absolute -top-2.5 -right-2.5 text-sm'>4</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}