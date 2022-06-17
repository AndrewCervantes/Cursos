/* Operador condicional terniario */
const activo = true;
/*
let mensaje = '';
if (activo){
    mensaje = 'Activo';
}
else{
    mensaje = 'Inactivo';
}

(condicion) ? bloque del if : bloque del else
*/

const mensaje = ( activo ) ? 'Activo':'Inactivo';
//Mostrar solo el valor true
const msn = activo && 'Activo Positivo';

console.log(mensaje);
console.log(msn);