import React from 'react';
//import Model from '../models/HomeModel';
import Authentication from '../views/authentication/Authentication';
//import View from './View';

class AuthenticationController extends React.Component {
  constructor(props) {
    super(props);
   // this.model = new Model();
  }


  render() {
    return <Authentication />;
  }
}

export default AuthenticationController;