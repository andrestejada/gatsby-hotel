import React from 'react'
import {graphql} from 'gatsby'
import Layout from './Layout'
import Image  from 'gatsby-image'
import './Habitaciones.css'

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
            nodes {
                    titulo
                    contenido
                    imagen {
                    fluid(maxWidth:1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const Habitaciones = ({data: { allDatoCmsHabitacion: { nodes } }}) => {

    const { titulo, contenido, imagen } = nodes[0]

    return (
        <Layout>
             <main>
                <h1
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image 
                    fluid={imagen.fluid}
                />
            </main>
        </Layout>
    )
}

export default Habitaciones
