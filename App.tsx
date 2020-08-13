import React, { Component } from "react";
import {
  Route,
  Switch,
  NavLink,
  Redirect,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
/*import Register from "./containers/register";*/
import Home from "./containers/home";
import dchannel from "./img/dchannel.png";
import { Login } from "./components/Login/login";
import Dashboard from "./containers/dashboard";
import Active from "./containers/order/deliver";
import "./App.css";
import Index1 from "./components/Login/index";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">Category</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li>
              <a href="Cart">CART</a>
            </li>
            <li style={{ float: "right" }}>
              <div className="dropdown">
                <button className="dropbtn1">Account</button>
                <div className="dropdown-content">
                  <a href="/index">Login/Register</a>
                  <a href="/Register">Order</a>
                  <a href="/login">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/index" component={Index1} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/active" component={Active} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
