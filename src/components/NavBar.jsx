import {useState} from 'react';
// import { logo } from '../assets';
import logo from '../assets/logo.svg'
import { navLinks } from '../const';


const NavBar = () => {
  return (
    <nav className="w-full flex py-7 justify-between items-center navbar">
      <img src={ logo } alt="Uncrack" className='w-[100px] h-[50px]'/>

      <ul className='list-none sm:flex hidden 
      justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li 
          key={nav.id} 
          className={`font-poppins 
          font-normal cursor-pointer 
          text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar