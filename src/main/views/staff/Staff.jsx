import React, { useState } from 'react'
import Card from './components/profile_cards/CardProfile'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import './staff.scss'
import Title from './components/title/Title'
import Add_staff_form from './components/modals/add_staff/Add_staff_form'

function Staff({ Data }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectQuery, setSelectQuery] = useState('');



    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterSelect = (event) => {
        setSelectQuery(event.target.value);
    };

    function getRoleNameById(roleId) {
        const role = Data.roles.find(role => role.id === roleId);
        return role ? role.role_name : '';
    }
    const filteredStaff = Data.staffs.filter((staff) => {
        const full_name = staff.first_name + " " + staff.last_name;

        const nameMatch = full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            searchQuery === '';

        const roleMatch =
            getRoleNameById(staff.role_id).toLowerCase().includes(selectQuery.toLowerCase()) ||
            selectQuery === '';

        return nameMatch && roleMatch;
    });

    return (

        <div className={`staff`} >
            <Sidebar activeItem={'Staff Members'} />
            <Navbar />

            <div className="forFlex">
            </div>
            <div className="Container">
                <div className="wrapper">
                    <Title />

                    <Add_staff_form data={Data} />

                </div>

                <div className='flex justify-center mt-[76px]  p-[24px]'>
                    <div className="search_section grid  grid-cols-1 sm:grid-cols-2   items-center  w-[100%] h-[140px]">
                        <input onChange={handleSearch} className='w-[476px] p-[16px] h-[56px] form-control rounded-[4px]' type="text " placeholder='search' />

                        <select onChange={handleFilterSelect} className="select_input " >
                            <option value="">All</option>
                            {Data.roles.map((role) => (
                                <option value={role.role_name}>{role.role_name}</option>
                            ))}
                        </select>
                    </div>

                </div>

                <div className='flex justify-center p-[24px]'>


                    <div className="content_section  sm:grid-cols-3 lg:grid-cols-3 grid grid-cols-1 gap-[48px] w-[100%]">
                        {filteredStaff.map((staff) => (
                            <Card key={staff.id} staff={staff} Data={Data} />
                        ))}
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Staff