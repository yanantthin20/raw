import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {isValidJWT} from "../helper/helper";

/**
 *  hoc, check whether use has enough permission to view the component
 * @param Component   @type{React Component}    container component, you would like to render auth check was passed
 * @param redirectTo  @type{string}             redirect user to your specific location if auth check was failed
 * @returns container component
 */

function withRestrict(Component, redirectTo = "/login") {
  // Restrict Access component should be react class component
  // if you've used functional components, the life cycle hook from functional components are thrown error
  class RestrictAccess extends PureComponent {
    // check auth every time, each container component was mounted
    constructor(props) {
      super(props)
      // if user is not authenticated or jwt token is expired, redirect him back to login page.
      this.checkAuth();
    }

    checkAuth() {
      if (!localStorage.getItem('token') || !isValidJWT(localStorage.getItem('token'))) {
        console.log('hay')
        localStorage.removeItem('token');
        this.props.history.push("/login");
      }
    }

    render() {
      // restrict rendering if user is not authenticated
      if(!isValidJWT(localStorage.getItem('token'))) return null;
      // if user has authentication, render the component
      return <Component {...this.props}/>
    }

  }

  const mapStateToProps = (store) => ({
    isAuthenticated: store.auth.isAuthenticated
  });

  return withRouter(
    connect(
      mapStateToProps, {}
    )(RestrictAccess)
  );
}


export default withRestrict
