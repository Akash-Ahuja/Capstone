import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import pic from './Logo1.png';
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="nav-logo">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={pic} className="logo-pic" width="50" height="50"/>Outreach3D
          </Link>
        </div>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i class="fa fa-fw fa-home"></i>
                Home
              </Link>
            </li>
            <li className='nav-item'>
                <Link
                  to='/public-forum'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                <i class="fa fa-list-alt"></i>
                  Public Forum
                </Link> 
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fa fa-users"> </i>
                About us
              </Link>
            </li>
            <div className='nav-button'>
              <Link
                to='/login'
                className='nav-button-link'
                onClick={closeMobileMenu}>
                  <i class="fa fa-user-circle"> </i>
                  Sign Up/ Login
                </Link>
            </div>
          
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;