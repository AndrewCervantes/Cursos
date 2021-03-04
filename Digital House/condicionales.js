//Operadores logicos
// AND - &&, OR - ||, NOT - !
//Condicional if - te permite ejecutar un bloque te código siempre que se cumpla una condición.
let clima = 'Soleado';
let dia = 'Jueves';

if (clima == 'Soleado' && dia == 'domingo'){
    console.log("Excelente día para pasear");
} else if (clima == 'Soleado' && dia == 'Lunes'){
    console.log("Vamos al cine");
} else{
    console.log("Mejor me quedo en casa");
}

//Se puede simplificar el if /else
function esMayorDeEdad(edad) {
    if ( edad >=  18){
        return true;
    } else {
        return false;
    }
 }

 //Equivale 
 function esMayorDeEdad(edad) {
    return edad >=  18;
}

function estaEntre(numero, base, limite) {
    return numero > base  && numero < limite ;
}

function esMayorOEsMenor(numero1, numero2, numero3) {
    return numero2 > numero1 || numero2 < numero3;
}

function esNumeroDeLaSuerte(numero){
    return ((numero > 0)  && (numero %2==0 || numero %3==0) && (numero != 15));
}

console.log(esNumeroDeLaSuerte(6));

/*
En el parque de diversiones de la ciudad instalaron una nueva montaña rusa y nos pidieron ayuda para que le avisemos a las personas, si pueden subirse o no, antes de hacer la fila. Los requisitos para que una persona pueda subir a la atracción son:

Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto)
No tener ninguna afección cardíaca

*/

function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return permiso(alturaPersona, vieneConCompania) && !tieneAfeccionCardiaca;
}

function permiso(alturaPersona, vieneConCompania){
    return alturaPersona >= 1.5 || (alturaPersona >= 1.2 && vieneConCompania)
}
/*
 el jurado de un torneo de programación, nos pidió que desarrollemos la función medallaSegunPuesto, la cual retorne la medalla que le corresponde a los primeros puestos, según la siguiente lógica:

Primer puesto: le corresponde "Oro"
Segundo puesto: le corresponde "Plata"
Tercer puesto: le corresponde "Bronce"
Otros puestos: le corresponde "Seguí participando"
Si ejecutáramos la función con los siguientes puestos, el resultado se
*/

function medallaSegunPuesto(puesto){
    if (puesto == 1){
        return "Oro";
    }
    else if (puesto == 2){
        return "Plata";
    }
    else if (puesto == 3){
        return "Bronce";
    }
    else {
        return "Seguí participando";
    }
}


