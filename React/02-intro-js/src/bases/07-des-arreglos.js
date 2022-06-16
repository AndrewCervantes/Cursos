/* Desestrucutración de Arreglos */
const personajes = ['Goku', 'Vegeta', 'Trunks'];

/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

/*Desestructurar el primer elmemento */
const [p1] = personajes;
/* Desustructurar l segundo elemento */
const [,p2] = personajes;
/* Desustructurar l segundo elemento */
const [,,p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

/* Función */
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


/* Tarea
1. El primer valor del arr se llamará nombre
2. Se llamará setNombre
*/

/* Arrow function con un parametro que retorna un arreglo con un valor y una función*/
const useState = ( valor) => {
    return [ valor , () => {console.log('Hola Mundo')} ]
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Andrew');
console.log(nombre);
setNombre();
