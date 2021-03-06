import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import './all.css';
import "./reset.css";
import "./index.css";

// import 'font-awesome/css/font-awesome.min.css';
import App from "./App";
// import Login from './containers/login';
// import Dashboard  from './containers/dashboard';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
