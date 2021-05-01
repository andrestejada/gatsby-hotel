import {useStaticQuery,graphql} from 'gatsby'

const useHabitaciones = () => {

    const datos = useStaticQuery(graphql`
    query{
		allDatoCmsHabitacion{
			nodes{
			titulo
        	id
        	contenido
        	slug
        	imagen{
				fluid(maxWidth:1200){
					...GatsbyDatoCmsFluid
            }
          }
      }
    }
}
    `)
    return datos.allDatoCmsHabitacion.nodes.map( habitacion=>({
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        id: habitacion.id,
        imagen: habitacion.imagen,
        slug: habitacion.slug
    }))

}

export default useHabitaciones
