import React, { useState } from 'react';
import myImage from '../../../../../assets/image/staff_profiles/img_profile01.png';
import './card.scss'
import Staff_profile from '../modals/staff_profile/Staff_profile';


function Card({ staff , Data  }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    function getRoleNameById(roleId) {
        const role = Data.roles.find(role => role.id === roleId);
        return role ? role.role_name : '';
      }
    return (
        <div className='cardContainer w-[144px]  sm:w-[288px]  sm:h-[288px] h-[144px] '>

            <div className="img flex   ">
                <div className="flex-none w-20 "></div>
                <div className='grow  '>
                    <img src={myImage} alt="" /></div>
                <div onClick={toggleDropdown} className="flex-none w-12 options">

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="20" r="3" transform="rotate(-90 10 20)" fill="black" />
                        <circle cx="20" cy="20" r="3" transform="rotate(-90 20 20)" fill="black" />
                        <circle cx="30" cy="20" r="3" transform="rotate(-90 30 20)" fill="black" />
                    </svg>
                    {isOpen && (
                        <ul className=" dropdown  ml-[-160px]  space-y-[14px] mt-[4px]  w-[200px]   shadow-lg">
                            <li className='flex delete-option'>
                                <span className='delete-text flex-1'>Delete Member</span>
                                <span className='icon'>
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 3.98366C12.725 3.70866 9.93333 3.56699 7.15 3.56699C5.5 3.56699 3.85 3.65033 2.2 3.81699L0.5 3.98366M5.08333 3.14199L5.26667 2.05033C5.4 1.25866 5.5 0.666992 6.90833 0.666992H9.09167C10.5 0.666992 10.6083 1.29199 10.7333 2.05866L10.9167 3.14199M13.7083 6.61699L13.1667 15.0087C13.075 16.317 13 17.3337 10.675 17.3337H5.325C3 17.3337 2.925 16.317 2.83333 15.0087L2.29167 6.61699M6.60833 12.7503H9.38333M5.91667 9.41699H10.0833" stroke="#E82727" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </li>

                        </ul>
                    )}
                </div>
            </div>
            <div className="full_name flex justify-center">
                <h1 className='font-[700] text-[24px]'>{ staff.last_name + " " + staff.first_name}</h1>
            </div>

            <div className="role_possition flex justify-center">
                <h1 className='font-[500] text-[16px]'>{getRoleNameById(staff.role_id)}</h1>
            </div>

            <div className="button_show flex flex justify-center mt-[32px]">
                
                <Staff_profile single_staff = {staff} Data={Data} />
            </div>
        </div>
    )
}

export default Card