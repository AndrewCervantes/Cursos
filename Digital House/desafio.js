//Productora
function productoria(numeros){
    let cantidad = 1;
    for ( let i = 0; i < numeros.length; i++){
        cantidad = cantidad * numeros[i];
    }
    //console.log(cantidad);
    return cantidad;
}
productoria([1, 4, 7]);


//Factorial
function factorial(numero){
    let cantidad = 1;
    for ( let i = 1; i <= numero; i++){
        cantidad = cantidad * i;
    }
    //console.log(cantidad);
    return cantidad;
}
factorial(3);


//Sumatoria de bajo importe
function sumatoriaBajoImporte(importes){
    let cantidad = 0;
    for ( let i = 0; i < importes.length; i++){
        if (importes[i]>= 0 && importes[i] <= 1000){
            cantidad = cantidad + importes[i];
        }
    }
    console.log(cantidad);
    return cantidad;
}

sumatoriaBajoImporte( [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]);



//Entradas para el cine
function asientosDisponibles(asientos, asientoPersona){
    if (asientos.indexOf(asientoPersona) >= 0){
        console.log("Felicitadiones, el asiento número "+ asientoPersona + " está disponible");
        return "Felicitadiones, el asiento número "+ asientoPersona + " está disponible";
    }
    else {
        console.log("Lo sentimos, el asiento número "+ asientoPersona+ " está ocupado, pero aún quedan "+asientos.length+ " asientos disponibles");
        return "Lo sentimos, el asiento número "+ asientoPersona+ " está ocupado, pero aún quedan "+asientos.length+ " asientos disponibles";
    }
}


asientosDisponibles([15, 28, 44, 45, 70], 15);  
asientosDisponibles([15, 28, 44, 45, 70], 50);  
asientosDisponibles([3, 15, 18, 25], 25);



// ¿Ganamos la loteria?

function esPremioMayor(numerosSorteados, numerosJugados){
    let cantidad = 0;
    for (let i = 0; i < numerosJugados.length; i++){
        if (  numerosSorteados.indexOf(numerosJugados[i]) >= 0){
            cantidad ++;
        }
    }
    if (cantidad == 6){
        return "Ganaste";
    }
    else{
        return "Seguí participando";
    }
}
let numerosSorteados = [ 12 , 4 , 4 , 33 , 13 , 17 ];
let numerosJugados = [ 4 , 12 ,13 , 17 , 33 , 40 ];


esPremioMayor(numerosSorteados, numerosJugados);


//La clave secreta

function laClaveSecreta(caracteres){
    let clave = "";
    for( let i = caracteres.length - 1; i <= caracteres.length && i >= 0; i--){
        if (caracteres[i] != "*"){
            clave = clave + caracteres[i];
        }
    }
    return clave;
}

laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  
laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  