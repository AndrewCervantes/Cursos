/* Fetch API
https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Retorna una promesa.
*/

const apiKey = '7NsSOdhbIZzlW21VgUpCGbHfjUmhzqNM';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

/*
peticion.then( resp => {
    //console.log(resp)
    /* Obtener información de la petición 
    resp.json().then( data => {
        console.log(data)
    })
}).catch(console.warn);

*/

/* Promesas en cadena */
peticion
    .then( resp => resp.json() )
    /*Aplicando desestructuracion */
    .then( ({data}) => {
        const url = data.images.original.url;
        //console.log(url)
        /* Crear elemento img */
        const img = document.createElement('img');
        /* Asinarle a src la url que obtuvimos de la petición */
        img.src = url;
        /* Agregamos el elemnto al body */
        document.body.append(img);
    })
    .catch( console.warn);