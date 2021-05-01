import * as React from "react"
import Layout from "../components/Layout"
import ImgHotel from '../components/ImgHotel'
import ContenidoInicio from '../components/ContenidoInicio'
import useHabitaciones from "../hooks/useHabitaciones"

import './index.css'
import HabitacionPreview from "../components/HabitacionPreview"

const IndexPage = () => {
  const habitaciones = useHabitaciones()
  return(
  <Layout>
    <ImgHotel/>
    <ContenidoInicio/>
  <h2>Nuestras Habitaciones</h2>
    <ul className='habitaciones' >
      {
        habitaciones.map( habitacion=>(
          <HabitacionPreview 
            habitacion={habitacion}
            key={habitacion.id} 
          />
        ))
      }
    </ul>
  </Layout>
  )

}

export default IndexPage
