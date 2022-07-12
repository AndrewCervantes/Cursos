/* JSX - Código de JS y HTML combinado */

import React from "react";
import ReactDOM from 'react-dom/client';
//import { FirtsApp } from "./FirtsApp";
//import { HelloWorldApp } from "./HelloWorldApp";
//import { App } from './HelloWorldApp'
//import { FirtsApp2 } from "./FirstApp_Props";
import { CounterApp } from "./CounterApp";
import './styles.css';




 /* Renderizar */
 ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value ={10}/>
    </React.StrictMode>
 )

 
 