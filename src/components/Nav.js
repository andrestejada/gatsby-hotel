import React from 'react'
import { Link } from 'gatsby'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav' >
            <Link className='nav-link' activeClassName='pagina-actual' to='/nosotros'>Nosotros</Link>
            <Link className='nav-link' activeClassName='pagina-actual' to='/'>Inicio</Link>

        </nav>
    )
}

export default Nav
