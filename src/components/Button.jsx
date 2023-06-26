import React from 'react'

const Button = ( {styles} ) => {
  return (
    <button type='buton' className={`py-4 px-6 bg-blue-gradient rounded-[10px] hover:rounded-lg font-poppins font-medium
    text-[18px] text-white outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button