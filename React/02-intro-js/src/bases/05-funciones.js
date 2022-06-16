/* Funciones */

/* Función tradicional no recomendable */ 
function saludar(nombre){
    return `Hola,${ nombre }`;
}

/* Funcion tradicional recomendable */
const saludar2 = function( nombre ){
    return `Hola, ${ nombre}`;
}

/* Arrow function */
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre}`;
}

/* Arrow function - Oneline */
const saludar4 = ( nombre ) => `Hola, ${ nombre}`;
const saludar5 = () => `Hola Mundo`;



console.log(saludar('No recomendable'));
console.log(saludar2('Recomendable'));
console.log(saludar3('Arrow Function'));
console.log(saludar4('Arrow Function One Line'));
console.log(saludar5());


/* One Line cuando se retorna un objeto agregar () */
const getUser = () => ({ uid: 'ABC123',username:'AndrewCervantes'});
console.log(getUser());

/* 
Tarea 
1. Transformar a una función flecha.
2 Tiene que retornar un objeto implicito.
3. Pruebas

function getUsuarioActivo ( nombre ){
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Christian');
console.log(usuarioActivo);
*/

const getUsuarioActivo2 = (nombre) =>
    ({
        uid: 'ABC567',
        username: nombre
    })

console.log(getUsuarioActivo2('Andrew'));
