//import { heroes} from './data/heroes'
import { heroes } from "../data/heroes";
console.log(heroes);


const getHeroeById = (id) => {
    /* Find recibe una función como argumento (Callback).
    El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
    */
    return  heroes.find( heroe => heroe.id === id );
}
console.log( getHeroeById(2));



/* Función identica a la anteiror pero reducidad */
/* El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. */
const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner );
console.log( getHeroesByOwner('Marvel'));