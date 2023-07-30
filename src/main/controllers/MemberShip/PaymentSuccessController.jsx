import React from 'react';
//import Model from '../models/HomeModel';
import PaymentSuccess from '../../views/membership/PaymentSuccess';
//import View from './View';

class PaymentSuccessController extends React.Component {
  constructor(props) {
    super(props);
    //this.model = new Model();
  }


  render() {
    return <PaymentSuccess />;
  }
}

export default PaymentSuccessController;