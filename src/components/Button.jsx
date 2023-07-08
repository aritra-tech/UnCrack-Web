import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ styles }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about'); // Assuming the ID of the about section is "about"
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Link to="about" smooth={true} duration={300}>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient rounded-[10px] hover:rounded-lg font-poppins font-medium transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 text-[18px] text-white ${styles}`}
        onClick={scrollToAbout}
      >
        Get Started
      </button>
    </Link>
  );
};

export default Button;