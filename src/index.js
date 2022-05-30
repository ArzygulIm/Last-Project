import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import "./style.css"

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);