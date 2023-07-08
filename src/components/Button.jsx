import React from 'react'

const Button = ( {styles} ) => {
  return (
    <button type='buton' className={`py-4 px-6 bg-blue-gradient rounded-[10px] hover:rounded-lg font-poppins font-medium
    transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 text-[18px] text-white ${styles}`}>
      Get Started
    </button>
  )
}

export default Button