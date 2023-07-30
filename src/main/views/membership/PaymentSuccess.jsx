import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import './membership.scss'
import Payment from './components/cards/CardPaymentSuccess';
import TopSection from '../../../components/top-section/TopSection';

function PaymentSuccess() {
  return (
    <div className='membership'>
      <Sidebar activeItem={'Membership'} />
      <Navbar />
      <div className="forFlex">
      </div>
      <div className="Container">

        <TopSection title={'Membership Payment'} />

        <Payment />
      </div>
    </div>
  )
}

export default PaymentSuccess