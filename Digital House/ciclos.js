/* 
Automatizar es bueno con los ciclos.
For:
    inicializacion, condición, modificador de la variable.
*/

for (let i = 1; i <=10; i++){
    console.log(i * 7);

}



function pasandoPorI(){
    for (let i = 0; i < 5; i++){
        console.log("acá i tiene el valor de "+i);
    }
}
/*Realizar una función llamada pasandoPorLosPares() que muestre por consola acá i tiene el valor de x por cada valor PAR que va tomando i desde 0 hasta 6 (inclusive). Te recordamos que debes prestar especial atención con los espacios. En el ejercicio debe haber un solo espacio entre cada palabra.*/
function pasandoPorLosPares(){
    for (let i = 0; i < 7; i++){
        if (i %2 == 0){
            console.log("acá i tiene el valor de "+i);
        }
    }
}

function imprimirAzul(numeroX){
    for ( let i = 0; i< numeroX; i++){
        console.log("Azul");
    }
}

function sumar5MonedasDe25Centavos(){
    for ( let i = 0; i < 5; i++){
         valor = valor + 0.25;
    }
    return valor;
}

function sumarMonedasDe25(cantidadDeMonedas){
    let valor = 0;
    for ( i = 0; i < cantidadDeMonedas; i ++){
        valor = valor +0.25;
    }
    return valor;
}



/*Definí ahora la función sumaDeLosParesDel0Al(x) que tome como parámetro un número X y que devuelva el total de la suma de todos los números que son pares del 0 al X (incluyendo a X). 
Suponiendo que X es par ésta función hará la siguiente operación: 0 + 2 + 4 + 6 + 8 + 10 + ... x */
function sumaDeLosParesDel0Al(x){
    let valor = 0  ;
    for(let i = 0; i <= x ; i++){
        if ( i%2 == 0){
            valor =  valor + i;
        }
    }
    return valor; 
}
