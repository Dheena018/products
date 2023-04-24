import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Context } from "./components/context/context";
import { app } from "./utils/firebase";

// import Button from 'react-bootstrap/Button';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
    <React.StrictMode>
        <BrowserRouter app={app}>
        <App />
        </BrowserRouter>
    </React.StrictMode>
)