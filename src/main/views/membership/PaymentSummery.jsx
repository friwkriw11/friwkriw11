import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import './membership.scss'
import CardSummry from './components/cards/CardSummry';
import TopSection from '../../../components/top-section/TopSection';
function PaymentSummery() {
  return (
    <div className='membership'>
      <Sidebar activeItem={'Membership'} />
      <Navbar />
      <div className="forFlex">
      </div>
      <div className="Container">
        
        <TopSection title={'Membership Payment'} />

        <CardSummry />
      </div>
    </div>
  )
}

export default PaymentSummery