import React from 'react'
import '../components/style/navbar.css'
import {Link} from 'react-router-dom'
import { FaTelegram,FaLinkedin,FaGithub } from 'react-icons/fa'
const NavBar = ({handleEarth,handleMoon,handleSun}) => {
  return (
  <>
    <nav className='navbar-container hidden md:flex'>
        <div className="logo">
            {/* <img src={Logo} alt="" className='logo-image' /> */}
            <h1><Link to={'/'} className='link'>Ezana Exploration</Link></h1>
        </div>
        <div className='right-container'>
            <ul>
                <li onClick={handleEarth}><Link to={'/'} className='link'>Home</Link></li>
                {/* <li onClick={handleMoon}><Link to={'/'} className='link'>About</Link></li> */}
                <li className='flex gap-4' onClick={handleSun}>Contact |
                 <div className='flex items-center gap-3'>
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
                   className='w-[20px] h-[20px]'/>
                 </div>
                </li>
            </ul>
        </div>
    </nav>
  </>
  )
}

export default NavBar