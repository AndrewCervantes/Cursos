/* Cuando se desea regresar un grupo de elementos en functional componente debemos de enviar la etiqueta fragmente */

/* Forma 1
import { Fragment } from "react"
export const FirtsApp = () => {
  return (
    <Fragment>
      <h1>FirtsApp - Christian Cervantes</h1>
      <h2>Hola Mundo soy un subtitulo</h2>
    </Fragment>
  )
}

*/

/* Forma 2   <> - nodo padre*/
export const FirtsApp = () => {
  return (
    <>
      <h1>FirtsApp - Christian Cervantes</h1>
      <h2>Hola Mundo soy un subtitulo</h2>
    </>
  )
}



