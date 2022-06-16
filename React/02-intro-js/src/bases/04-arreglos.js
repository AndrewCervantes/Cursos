/* Arreglos - Es una colección de información que se encuentra dentro de una variable */
/* Forma informal de definir un arreglo*/
//const arreglo = new Array();

const arreglo =[1,2,3,4];
/* El push modifica el objeto principal 
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
*/
/* En este caso el ush aplicaria para ambos arreglos */
let arrreglo2 = arreglo;
arrreglo2.push(10)

/* Replicar un arreglo de forma correcta y añadir un valor solo al nuevo arreglo */
let arreglo3 = [...arreglo,11];

/* map()
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
*/

const arreglo4 = arrreglo2.map(
    function(numero){
        return numero *2;
    }
);


console.log(arreglo);
console.log(arrreglo2);
console.log(arreglo3);
console.log(arreglo4);