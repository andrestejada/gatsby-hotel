exports.createPages = async({graphql, actions, reporter})=>{

const resultado = await graphql(`
    query{
		allDatoCmsHabitacion{
			nodes{
				slug
           }
        }
      }
`)

console.log(resultado)


if(resultado.errors){
    reporter.panic('No Hubo resultados', resultado.errors)
}

const habitaciones = resultado.data.allDatoCmsHabitacion.nodes


console.log(habitaciones)

habitaciones.forEach( habitacion => {
    actions.createPage({
        path: habitacion.slug,
        component: require.resolve('./src/components/Habitaciones.js'),
        context:{
            slug:habitacion.slug
        }

        
    })
});
}

