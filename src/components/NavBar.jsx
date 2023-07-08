import { useState } from 'react';
import logo from '../assets/logo.svg';
import { navLinks } from '../const';

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Set the active index to 0 initially
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="w-full flex py-7 justify-between items-center navbar">
      <img src={logo} alt="Uncrack" className="w-[100px] h-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[17px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } ${activeIndex === index ? 'text-gradient' : 'text-white'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={`#${nav.id}`}
              onClick={() => setActiveIndex(index)} // Set the active index on click
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;