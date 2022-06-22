/* JSX - Código de JS y HTML combinado */

import React from "react";
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from "./HelloWorldApp";
//import { App } from './HelloWorldApp'




 /* Renderizar */
 ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>
 )
 
 