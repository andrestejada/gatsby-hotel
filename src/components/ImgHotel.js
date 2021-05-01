import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql , useStaticQuery } from 'gatsby'
import './ImgHotel.css'


const ImgHotel = () => {

    const {image}= useStaticQuery(graphql`
    query{
        image:file(relativePath:{eq:"8.jpg"}){
            sharp:childImageSharp{
                fluid(quality: 90, maxWidth: 1920){
                  ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`)

    return (
      <BackgroundImage
        Tag='section'
        fluid={image.sharp.fluid}
        className={`background-image`}
      >
        <div className='texto-img' >
          <h1>Hotel Gatsby</h1>
          <p>El Mejor Hotel para tu vacaciones</p>
        </div>
      </BackgroundImage>
    )
}

export default ImgHotel
