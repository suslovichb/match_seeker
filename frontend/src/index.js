import React from 'react'
import {render} from 'react-dom'
import "regenerator-runtime/runtime.js";
import {BrowserRouter} from 'react-router-dom'
import App from "./components/App";
import css from "./index.css";
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './store/reducers';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
