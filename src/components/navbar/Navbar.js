import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="n-wrapper">
          <div className="logo">
            <Link spy={true} smooth={true} to='home'>
            <img src="./images/logo.png" alt="" />
            </Link>
          </div>
          <div className="n-list"> 
            <ul>
              <Link spy={true} smooth={true} activeClass='activeClass' to='home'> 
                <li>HOME</li>
              </Link>
              <Link spy={true} smooth={true} activeClass='activeClass' to='features'>
                <li>FEATURES</li>
              </Link>
              <Link spy={true} smooth={true} activeClass='activeClass' to='pages'>
                <li>PAGES</li>
              </Link>
              <Link spy={true} smooth={true} activeClass='activeClass' to='blog'> 
                <li>BLOG</li>
              </Link>
              <Link spy={true} smooth={true} activeClass='activeClass' to='contact'>
                <li>CONTACT</li>
              </Link>
            </ul>

          </div>
          <div className="n-button">
            <button className='n-btn'>Try Free</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar