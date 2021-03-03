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

