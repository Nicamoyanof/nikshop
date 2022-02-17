import ReactDOM from 'react-dom';
import App from './App';
import '../styles/index.css'
import { HashRouter} from "react-router-dom";
import React from 'react';
import './assets/img/remera.jpg';

ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
    document.getElementById('root')
)