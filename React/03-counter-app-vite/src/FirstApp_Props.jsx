/* Comunicación entre compomponentes - Props
  Propiedades que se mandan en un functional component padre al hijo.
*/

/* Forma 1 - no recomendable 
export const FirtsApp2 = (props) => {
  //console.log(props)
  return (
    <>
      <h1> Chrisitian </h1>
      <h2> {props.title} </h2>
      {}
      <p>Soy un subtitulo</p>
    </>
  )
}
*/

/* Libreria para los PropTypes */
import PropTypes from 'prop-types';

export const FirtsApp2 = ({title, subTitle}) =>{
  /* Validación de props  forma no cool
  if (!title ){
    throw new Error('El title no existe');
  }
  */
  return(
    <>
      <h1> Christian</h1>
      <h2>{title}</h2>
      <p>{subTitle + 10}</p>
      <p>soy un subtitulo</p>
    </>
  )
}

/* Validación de props */
FirtsApp2.PropTypes ={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}
