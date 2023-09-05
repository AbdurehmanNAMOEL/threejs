import React from 'react'
import spaceLogo from '../assets/space_exploration.jpg'
const LoadingPageAnimation = () => {
  return (
    <div className='bg-[#121212] w-full h-[100vh] fixed z-[10000] flex justify-center items-center'>
      <img
       className='w-[80px] h-[80px] rounded-full shadow-md' 
       src={spaceLogo} 
       alt='logo'/>
    </div>
  )
}

export default LoadingPageAnimation