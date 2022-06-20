/* Código de JS y HTML cominado */

import React from "react";
import ReactDOM from 'react-dom/client';

/* Funcional component  - componentes basados en funciones*/
 function App(){
    return (<h1> Hola Mundo !!!</h1>);

 }

 /* Renderizar */
 ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
 )
 