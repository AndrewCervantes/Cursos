// Funciones .- Listado de procedimientos que se van a ejecutar cuando sea encesarios.
// Funcion expresada.- Es aquella que se asgina como valor a una variable
//Se carga únicamente cuando el   lcanza la línea de código donde se encuentra la función.
let sumar = function (numeroA, numeroB){
    return numeroA + numeroB;
}
//Ejecutar la función.
console.log(sumar(10,5));




//Funcón declarada .- Es aquella que recibe un nombre formal y no se asigna como valor a una variable.
// Se carga ante de cualquier código sea ejecutado.

function restar(numeroC, numeroD){
    return numeroC - numeroD;
}

console.log(restar(23,30))



//Ejemplos de funciones
function perimetro(radio){
    return (3.14*2*radio);
}

function area(radio){
    return (3.14*radio*radio);
}
