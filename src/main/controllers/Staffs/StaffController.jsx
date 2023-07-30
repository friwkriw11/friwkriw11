import React from 'react';
import Model from '../../models/StaffModel';

import StaffView from '../../views/staff/Staff';
//import View from './View';

class StaffController extends React.Component {
  constructor(props) {
    super(props);
     this.model = new Model(); 
  }


  render() {
    return <StaffView  Data={this.model.Data} />;
  }
}

export default StaffController;