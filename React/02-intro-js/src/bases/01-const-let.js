/* Variablesy constantes */
/* Const - Variable que no cambiara su valor, Mientras no haya 2 variables con el mismo nombre en el scope es permitido. */
const nombre ='Christian';
const apellido = 'Cervantes';

/* Let -  Cambiar el valor, su alcance es por bloque (Scope)*/
let valorDado = 5;
valorDado = 10;

console.log(nombre, apellido, valorDado);

if(true){
    const nombre = 'Gaby';
    console.log(nombre);
}