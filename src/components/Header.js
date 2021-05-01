import { Link } from 'gatsby'
import React from 'react'
import Nav from './Nav'
import './Header.css'



const Header = () => {
    return (
    <header className='header' >
        <div className='header-container' >
          <Link to='/' className='enlace-home' >
              <h1 className='header-title' >Hotel Gatsby</h1>
          </Link>
          <Nav/>
        </div>
    </header>
    )
}

export default Header
