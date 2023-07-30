import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Form from './components/forms/renewal-membership/Renewal_membershipForm';
import './membership.scss'
import TopSection from '../../../components/top-section/TopSection';
function RenewalMembership() {
    return (
        <div className='membership'>
            <Sidebar activeItem={'Membership'} />
            <Navbar />
            <div className="forFlex">
            </div>
            <div className="Container">
                
                <TopSection title={'Membership Payment'} />

                <Form />
            </div>
        </div>
    )
}

export default RenewalMembership