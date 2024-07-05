import React from 'react'
import IMAGES from '@/assets/Images'

export default function Header() {
  return (
    <div className='headerMain grid'>
      <div className='bg-white rounded-br-3xl logoImg'>
        {/* <img src={IMAGES.logoImg} alt='logo' className='logo' /> */}
        <IMAGES.logoSvg />
      </div>
      <ul className='headerList flex justify-center items-center grow'>
        <li className='headerListItem'><a href='#' className='headerListItemLink'>Home</a></li>
        <li className='headerListItem'><a href='#' className='headerListItemLink'>Men</a></li>
        <li className='headerListItem'><a href='#' className='headerListItemLink'>Women</a></li>
        <li className='headerListItem'><a href='#' className='headerListItemLink'>T-shirts</a></li>
        <li className='headerListItem'><a href='#' className='headerListItemLink'>Shirts</a></li>
        <li className='headerListItem'><a href='#' className='headerListItemLink'>Accessories</a></li>
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
  )
}