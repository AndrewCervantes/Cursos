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

const newMessage = 'Christian Cervantes !!!';
const newArray = [1,2,3,4,5,6,7,8,9];
const newBooleano = true;
const newObject = {
  message:'Hola Mundo',
  tittle: 'Christian'
};

const getResult = (a,b) => {
  return a + b;
}

/* Forma 2   <> - nodo padre*/
export const FirtsApp = () => {
  return (
    <>
      <h1>String</h1>
      <h2>{newMessage}</h2>
      <h1>Array</h1>
      <h2>{newArray}</h2>
      <h1>Booleano</h1>
      <h2>{newBooleano}</h2>
      <h1>Objeto</h1>
      <code> { JSON.stringify(newObject)}</code>
      <h1>Función</h1>
      <h2>{getResult(5,15)}</h2>
    </>
  )
}



