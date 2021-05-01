import React from 'react'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import './HabitacionPreview.css'

const HabitacionPreview = ({habitacion}) => {

    const {imagen,titulo,contenido,slug}=habitacion;

    return (
        <div className='container-preview' >
        <Image
            fluid={imagen.fluid}
        />
        <div className='contenido-preview' >
            <h3>{titulo}</h3>
            <p>{contenido}</p>

            <Link className='boton' to={slug}>Ver Habitación</Link>
        </div>
    </div>
    )
}

export default HabitacionPreview
