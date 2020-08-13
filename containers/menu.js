import React, { Component } from "react";
import "./../index.css";
import { NavLink, withRouter } from "react-router-dom";
import dchannel from "../img/dchannel.png";
function Menu(props) {
  function handleLogout() {
    props.history.push("/login");
    localStorage.removeItem("token");
  }
  return (
    <div
      className="border-right bg-black dchannel-sidebar"
      id="sidebar-wrapper"
    >
      <div className="menu-logo">
        <img src={dchannel} alt="dchannel" />
      </div>
      <div className="list-group">
        <NavLink to="/dashboard/order" activeClassName="activeme">
          Orders
        </NavLink>
        <NavLink to="/dashboard/product/list/A" activeClassName="activeme">
          Products
        </NavLink>
        {/*<NavLink to="/dashboard/customers" activeClassName="activeme">Customers</NavLink>*/}
        {/*<NavLink to="/dashboard/rule" activeClassName="activeme">Rules</NavLink>*/}
        <a href="javascript:void(0);" onClick={() => handleLogout()}>
          Logout
        </a>
      </div>
    </div>
  );
}
export default withRouter(Menu);
