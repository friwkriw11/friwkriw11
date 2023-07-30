import React from 'react';
//import Model from '../models/HomeModel';
import RenewalMembership from '../../views/membership/RenewalMembership';
//import View from './View';

class Renewal_membershipController extends React.Component {
  constructor(props) {
    super(props);
    //this.model = new Model();
  }


  render() {
    return <RenewalMembership />;
  }
}

export default Renewal_membershipController;