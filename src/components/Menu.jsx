import React from 'react'
import './style/menu.css'
import { FaTelegram,FaLinkedin,FaGithub } from 'react-icons/fa'
const Menu = () => {
  return (
    <div className='menu-container'>
      <h1 className='text-white w-[50%] ml-4 font-bold'>Ezana Exploration</h1>  
      <div className='flex items-center gap-3 text-white w-[50%] justify-end cursor-pointer'>
        <FaTelegram 
          onClick={()=>window.open('https://t.me/Namoel')} 
          className='w-[20px] h-[20px]'
        />
        <FaLinkedin
          onClick={()=>window.open('https://www.linkedin.com/in/abdurehman-saeed-4b2a3258/')} 
          className='w-[20px] h-[20px]'
        />
        <FaGithub 
          onClick={()=>window.open('https://github.com/AbdurehmanNAMOEL')}
          className='w-[20px] h-[20px] mr-[20px]'/>
      </div>
    </div>
  )
}

export default Menu