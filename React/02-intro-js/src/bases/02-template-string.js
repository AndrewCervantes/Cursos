/* Templates String */
const nombre = 'Christian';
const apellido = 'Cervantes Moreno';

const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

/* Forma con template string */

const nombreCompletoTemplateSting = `Hola ${nombre} ${apellido}`;
console.log(nombreCompletoTemplateSting);


function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);