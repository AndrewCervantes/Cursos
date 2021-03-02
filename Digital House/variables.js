// Variable .- Es un espacio de memoria donde se almacena un dato que podemos reutilizar a futuro.
// Estandar de lenguaje - Es la manera adecuada de escribir código.

//Camel Case
var telefonoMadre;

//Snake Case
var telefono_madre;


/* let vs var
Let es una variable que pertenece a un bloque de ejecución {} 
Una variable let no puede ser redefinida en el mismo bloque de ejecuci{on pero si puede vambiar su valor.
*/

//Bloque de ejecución
if(true){
    let saludo = 'hola';
    console.log(saludo)
}

//Tipos de Datos

//Number (entero o decimal)
let edad = 32;
let peso = 23.43;

//String (textos alfanumericos de caulquier longitud)
let nombre = "christian";

//Boolean (true o false)
let nacioEnMexico = true;


//Operadores 

// Asignación =
let paisDeNacimiento = 'México';

//Aritmeticos +,-,*,/,%

//Incremento ++ o Decremento --

//Comparación simple ==
//Comapración estricta === devuelve un booleano y hace la comparacion entre el valor y el tipo de dato es el mismo.
//Desigualdad !=
//Desigualdad estricta !==
//Mayor que >
//Mayor o igual >=
//Menor que <
//Menor o igual que <=