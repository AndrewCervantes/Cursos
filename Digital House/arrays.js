/* Arrays .- colecciones de datos ordenados. */
let seriesFavoritas = ["HIMYM", "Wanda Vision", "breaking Bad"];
console.log(seriesFavoritas);





let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]

console.log(seriesFavoritasDeAna);
console.log(seriesFavoritasDeHector);

let holaMundo = ["hola", "mundo!"];
let hola = ["hola","hola!"];

console.log(holaMundo);
console.log(hola);

/*Averigualo vos mismo, vas a tener que realizar lo siguiente:

1) Imprimí por consola que elementos contiene pertenencias

2) Agregale una "ballesta" 

3) Volvé a imprimir por consola pertenencias.*/
let pertenencias = [ "espada" , "escudo" , "antorcha" ];

console.log(pertenencias);
pertenencias.push("ballesta");
console.log(pertenencias);


//Contiene
function contiene(array, numero){
    return array = [1, 6, 7, 6] && numero;
}



//Contiene
function contiene(array, numero){
    return array.indexOf(numero) >= 0;
}

console.log(contiene([1,2,3,4],5));

function medallaSegunPuesto(numero){
    let medalla = ["Oro","Plata","Bronce"];

    if( numero < medalla.length){
        return medalla[numero];
    } else{
        return "Segí participando";
    }
}

console.log(medallaSegunPuesto(1));