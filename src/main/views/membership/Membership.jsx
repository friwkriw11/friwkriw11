import React from 'react';
import Filter from './components/forms/filter/Filter';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import './membership.scss'
import TopSection from '../../../components/top-section/TopSection';
function Membership() {
  return (
    <div className='membership'>
      <Sidebar activeItem={'Membership'} />
      <Navbar />
      <div className="forFlex">
      </div>
      <div className="Container">

        <TopSection tetle={''} />
        <Filter />
      </div>

     
      
    </div>
  )
}

export default Membership