import React from 'react'
import {Link} from 'gatsby'
import  Nav from './Nav'
import './Footer.css'

const Footer = ({title}) => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer className='footer' >
            <div className='footer-box'>
                <Link
                    className='enlaceHome'
                    to='/'
                ><h1>Hotel Gatsby</h1> </Link>
                <Nav/>
            </div>
        </footer>
        <p className='p-footer' > 
            {title}. Todos los derechos Reservados {year} &copy;
        </p>
        </>
    )
}

export default Footer
