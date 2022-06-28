/* Comunicación entre compomponentes - Props
  Propiedades que se mandan en un functional component.
*/
export const FirtsApp2 = (props) => {
  console.log(props)
  return (
    <>
      <h1> Chrisitian </h1>
      <h2> {props.title} </h2>
      <p>Soy un subtitulo</p>
    </>
  )
}