import React from 'react'
import '../components/style/navbar.css'
import Logo from '../assets/ethioLogo2.jpg'
import {Link} from 'react-router-dom'
const NavBar = ({handleEarth,handleMoon,handleSun}) => {
  return (
  <>
    <nav className='navbar-container'>
        <div className="logo">
            <img src={Logo} alt="" className='logo-image' />
        </div>
        <div className='right-container'>
            <ul>
                <li onClick={handleEarth}><Link to={'/'} className='link'>Earth</Link></li>
                <li onClick={handleMoon}><Link to={'/moon'} className='link'>Moon</Link></li>
                <li onClick={handleSun}><Link to={'/sun'} className='link'>Sun</Link></li>
            </ul>
        </div>
    </nav>
  </>
  )
}

export default NavBar