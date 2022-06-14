const divRoot = document.querySelector('#root');
const nombre = 'Christian Cervantes Moreno';
/* Esto es JSX */
const h1Tag = <h1>Hola Mundo, soy {nombre}</h1>;
ReactDOM.render( h1Tag,divRoot);