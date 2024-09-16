import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
//import Composant from './helloworld';
//import Bouton from './bouton';
//import Counter from './compteur';
//import Todolist from './liste';
import Chemin from "./router";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Chemin />
  </React.StrictMode>
);
//<Composant text="Hello World" />
//<Bouton text="click" size="50px" link="https://www.google.com" />
//<Counter />
//<Todolist />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
