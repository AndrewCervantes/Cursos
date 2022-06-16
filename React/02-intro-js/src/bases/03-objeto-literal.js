/* Objetos literales */
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip: 2342342343,
        lat: 14.34234,
        lng: 34.43243
    }
};


/* Se crea un objeto persona que apunta a otro objeto. */
//console.table({persona:persona});
console.log(persona);

/* Copiar un objeto utilizando un espacio de memoria diferente */
//const persona2 = persona
const persona2 = {...persona};
persona2.nombre = 'Thor';

console.log(persona);
console.log(persona2);