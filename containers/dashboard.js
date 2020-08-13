import React, { Component } from "react";
import Menu from "./../containers/menu";
import { Route } from "react-router-dom";
//import Order from "./../containers/order";
//import Product from "./../containers/product";
//import Customers from "./../containers/customer";
//import Rule from "./../containers/rule";
//import withRestrict from "../hoc/withRestrict";
class Dashboard extends Component {
  render() {
    return (
      <div className="d-flex " id="wrapper">
        <Menu />
        <div id="page-content-wrapper">
          {/*<Route path="/dashboard/customers" component={Customers}/>*/}
          {/*<Route path="/dashboard/rule" component={Rule}/>*/}
        </div>
      </div>
    );
  }
}
export default Dashboard;
