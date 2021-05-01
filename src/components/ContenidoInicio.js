import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import  Img from 'gatsby-image'
import './ContenidoInicio.css'
 
const ContenidoInicio = () => {

    const information = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{slug:{eq:"inicio"}}){
            nodes{
                titulo
          contenido
          imagen{
                fluid{
                    ...GatsbyDatoCmsFluid    
            }
          }
        }
      }
    }
    `)

    const {titulo,contenido,imagen} = information.allDatoCmsPagina.nodes[0]
    return (
        <>
        <h2>{titulo}</h2>
        <div className='texto-inicio' >
            <p>{contenido}</p>
            <Img fluid={imagen.fluid} />
        </div>
        </>
    )
}

export default ContenidoInicio
