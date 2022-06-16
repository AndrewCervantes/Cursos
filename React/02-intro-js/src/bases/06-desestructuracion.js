/* Desestructración o Asignación desesctruturante */

const persona ={
    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45,
    clave: 'Iron Man'
};
/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.clave);
*/

//const {nombre} = persona;
//console.log('Desestrucutración en JS nombre: ' + nombre);
/* Si ya existe una variable con el mismo nombre se realiza lo siguiente 
const {nombre:nombre2, edad, apellido,clave} = persona;
console.log(nombre2);
console.log(edad);
console.log(apellido);
console.log(clave);

*/
/* Arrow Function Desestrucutración 
const retornaPersona = (usuario) =>{
    const {nombre, edad, apellido,clave} = usuario;
    console.log(edad, clave, nombre, apellido);
}
*/

/* Más simplificado */
const useContext = ({ nombre, edad, rango = 'Capitan' , clave}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave : clave,
        anios:  edad,
        latlng :{
            lat: 14.1232,
            lng:-12.3434
        }
    }
}

//retornaPersona( persona ) ;
//retornaPersona2( persona );
/* Desestructurar un objeto */
// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios, latlng: {lat,lng}} = useContext( persona );
console.log(nombreClave, anios);
console.log(lat, lng);


