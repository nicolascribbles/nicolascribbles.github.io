import React, {useState, setState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const logged = this.props.loggedIn;
    console.log("logged ", logged)
    const Component = this.props.component;
    
    return logged ? ( <Component /> ) : ( <Redirect to={{ pathname: '/login' }} /> );
  }
}

ProtectedRoute.defaultProps = {
  loggedIn: false
}
export default ProtectedRoute;