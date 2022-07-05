/* Comunicación entre compomponentes - Props
  Propiedades que se mandan en un functional component.
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
export const FirtsApp2 = ({title, subTitle}) =>{
  return(
    <>
      <h1> Christian</h1>
      <h2>{title}</h2>
      <p>{subTitle + 10}</p>
      <p>soy un subtitulo</p>
    </>
  )
}