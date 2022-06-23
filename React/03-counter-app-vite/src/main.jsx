/* JSX - Código de JS y HTML combinado */

import React from "react";
import ReactDOM from 'react-dom/client';
import { FirtsApp } from "./FirtsApp";
import { HelloWorldApp } from "./HelloWorldApp";
//import { App } from './HelloWorldApp'




 /* Renderizar */
 ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirtsApp />
    </React.StrictMode>
 )

 
 