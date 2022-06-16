
import {getHeroeById, getHeroesByOwner} from './bases/08-imp-exp'
/* Promesas
El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
*/ 

/* Las promesas son asincronas  y primero se ejecuta todo lo secuencial y las promesas quedan en una pila */
/*
La promesas tienen de argumento un callback y recive 2 argumentos unos "resolve" y otto reject
Resolve -El nombre para el resolve no importa y es otra callback cuando la primesa es exitosa.
Reject - El se ejecuta cuando la promesa falla y se requiere notificar.

then - la promesa se hizo correctamente
catch - se dio un error
finally - es algo que se ejecutara despues del "then" y "catch"


setTimeOut permite ejecutar una tarea en cierto tiempo y recibe un callback.
*/

/*
const promesa = new Promise( (resolve, reject) =>{
    setTimeout( () => {
        const heroe = getHeroeById(2);
        //console.log(heroe)
        resolve(heroe);
        //reject( 'No se pudo encontrar el heroe');
    }, 2000 )
});

promesa.then((heroe) => {
    console.log(heroe)
}).catch( err =>  console.warn(err));

*/

const gerHeroeByIdAsync = ( id ) => {
    return  new Promise( (resolve, reject) =>{
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject(' No se puedo encontrar el héroe')
            }
        }, 2000 )
    });
}

gerHeroeByIdAsync(10)
   // .then( heroe => console.log('Heroe', heroe))
   // .catch( err =>  console.warn(err));
   /* Forma simplificada */ 
   .then(console.log)
   .catch(console.warn);