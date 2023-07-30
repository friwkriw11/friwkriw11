import React from 'react';
//import Model from '../models/HomeModel';
import PaymentSummery from '../../views/membership/PaymentSummery';
//import View from './View';

class PaymentSummeryController extends React.Component {
  constructor(props) {
    super(props);
    //this.model = new Model();
  }


  render() {
    return <PaymentSummery />;
  }
}

export default PaymentSummeryController;