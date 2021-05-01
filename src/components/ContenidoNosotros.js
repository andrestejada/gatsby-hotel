import { useStaticQuery , graphql} from 'gatsby'
import React from 'react'
import  Img from 'gatsby-image'
import './ContenidoNosotros.css'

const ContenidoNosotros = () => {

    const respuesta = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{slug:{eq:"nosotros"}}){
            nodes{
                titulo
                contenido
                imagen{
                    fluid(maxWidth:1200){
                        ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    `)

    const {titulo,contenido,imagen} = respuesta.allDatoCmsPagina.nodes[0];


    return (
      <>
        <h2>{titulo}</h2>
        <div className='nosotros-contenido' >
            <p>{contenido}</p>
            <Img fluid={imagen.fluid} />
        </div>
      </>
    )
}

export default ContenidoNosotros
