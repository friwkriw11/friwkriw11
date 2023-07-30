import React from 'react';
//import Model from '../models/HomeModel';
import Membership from '../../views/membership/Membership';
//import View from './View';

class FilerMemberShipController extends React.Component {
  constructor(props) {
    super(props);
    //this.model = new Model();
  }


  render() {
    return <Membership />;
  }
}

export default FilerMemberShipController;