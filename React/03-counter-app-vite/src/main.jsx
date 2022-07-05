/* JSX - Código de JS y HTML combinado */

import React from "react";
import ReactDOM from 'react-dom/client';
import { FirtsApp } from "./FirtsApp";
import { HelloWorldApp } from "./HelloWorldApp";
//import { App } from './HelloWorldApp'
import { FirtsApp2 } from "./FirstApp_Props";
import './styles.css';




 /* Renderizar */
 ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirtsApp2 title ="Hola Mundo" subTitle ={1010} />

    </React.StrictMode>
 )

 
 