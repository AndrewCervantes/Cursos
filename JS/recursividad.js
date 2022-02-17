/*
Ejercicio 1
Escribe una función recursiva para un timer que cada 5 minutos se agregue 10 minutos más a su cuenta total.

Ejercicio 2
Escribe una función recursiva para encontrar el número mayor de un array.

Ejercicio 3
Escribe una función recursiva para convertir de minúscula a mayúscula el primer y último carácter de un string.

Ejercicio 4
Escribe una función recursiva para escribir la serie Fibonacci hasta su décima iteración.

Ejercicio 5
Escribe una función recursiva para generar un password aleatorio con 20 caracteres combinando letras-números-símbolos-números-letras-día-new-año.
*/
// Escribe una función recursiva para encontrar el número mayor de un array.
function numeroMayor(i=0){
    if(miArray==""){
        llenar();
        let max=0;
        min = miArray[0];
    }
    
    if(max < miArray[i]){
        max = miArray[i];
    }
    if(min > miArray[i]){
        min = miArray[i];
    }
    if(i === miArray.length){
        console.log(`El numero mayor de este array es: ${max}`)
        console.log(`El numero menor de este array es: ${min}`)
        return;
    }else{
        i++;
        numeroMayor(i);
    }
}


function secondLargestNumber(numbers){
    let first = numbers[0];
    let second = 0;
    for( let i = 0; i < numbers.length; i++){
      if (numbers[i] > first){
        second = first;
        first = numbers[i];
      }
      if(numbers[i]> second && numbers[i] < first){
        second = numbers[i];
      }
    }
    return second;
  }
  
  let num = [10,10,12,11,12,13,6];
  console.log(secondLargestNumber(num))




