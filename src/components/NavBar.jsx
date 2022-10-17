import React from 'react'
import '../components/style/navbar.css'
import Logo from '../assets/ethioLogo2.jpg'
import {Link} from 'react-router-dom'
const NavBar = ({handleEarth,handleMoon,handleSun}) => {
  return (
  <>
    <nav className='navbar-container'>
        <div className="logo">
            {/* <img src={Logo} alt="" className='logo-image' /> */}
            <h1>Logo</h1>
        </div>
        <div className='right-container'>
            <ul>
                <li onClick={handleEarth}><Link to={'/'} className='link'>Home</Link></li>
                <li onClick={handleMoon}><Link to={'/'} className='link'>About</Link></li>
                <li onClick={handleSun}><Link to={'/'} className='link'>Contact</Link></li>
            </ul>
        </div>
    </nav>
  </>
  )
}

export default NavBar