import React, { useState } from 'react';
import "./home.scss"
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/navbar/Navbar'
import Widget from './components/widget/Widget'
import BtnAdd from './components/button/Button'
import Welcom_staff from './components/welcom-staff/Welcom_staff'
import TableData from './components/dataTable/TableData';
const Home = ({ data, handleEvent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className='home'>
            <Sidebar activeItem={'Dashboard'} />
            <Navbar />

            <div className="homeContainer">
                <div className="wrapper">

                    <Welcom_staff />

                    <BtnAdd className='btn' />

                </div>
                <div className="widgets">

                    <Widget type="members" />
                    <Widget type="membership-non-paid" />
                    <Widget type="insurance-non-paid" />
                    <Widget type="boys" />
                    <Widget type="girls" />
                </div>


                <div className="table_champ">
                    <TableData data={data} />
                </div>


            </div>


        </div>
    )
}

export default Home