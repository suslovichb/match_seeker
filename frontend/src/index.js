import React from 'react'
import {render} from 'react-dom'
import "regenerator-runtime/runtime.js";
import {BrowserRouter} from 'react-router-dom'
import App from "./components/App";
import css from "./index.css";

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
