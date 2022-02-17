var numeros = 100;
var divisble = false;


 // Opción 1
for (var i= 1; i <= numeros; i++) {
    divisble = false;
    if ( i % 3 == 0){
        document.write("Fizz");
        divisble = true;
    }
    if ( i % 5 == 0){
        document.write("Buzz");
        divisble = true;
    }
    if(!divisble){
        document.write(i);
    }
    document.write("<br />");
    
}


// Opción 2
for (var i= 1; i <= numeros; i++) {
    if (esDivisible(i,3)){
        document.write("Fizz");
    }
    if ( esDivisible(i,5)){
        document.write("Buzz");
    }
    if(!esDivisible(i,3) && !esDivisible(i,5)){
        document.write(i);
    }
    document.write("<br />");
}

function esDivisible (num, divisor){
    if( num % divisor == 0){
        return true;
    }
    else{
        return false;
    }
}