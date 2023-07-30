import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./sidebar.scss"


import Avatar from '@mui/material/Avatar';

const Sidebar = ({ activeItem }) => {


    return (
        <div className='sidebar' >

            <div className="top">

                <span className="logo">

                    <Avatar sx={{ bgcolor: '#D9D9D9', color: 'black', width: '120px', height: '120px' }}> <span>L</span> </Avatar>

                </span>
            </div>
            <div className="center mt-[24px]">
                <ul className="menu-content  leading-[20px] ">
                    <Link to="/">
                        <li className={`menu-item ${activeItem === 'Dashboard' ? 'active' : ''}`}>

                            <svg width="22" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.54 6.30965C15.1924 6.30965 15.8181 6.05047 16.2795 5.58913C16.7408 5.12779 17 4.50208 17 3.84965C17 3.19722 16.7408 2.57151 16.2795 2.11017C15.8181 1.64883 15.1924 1.38965 14.54 1.38965C13.8876 1.38965 13.2619 1.64883 12.8005 2.11017C12.3392 2.57151 12.08 3.19722 12.08 3.84965C12.08 4.50208 12.3392 5.12779 12.8005 5.58913C13.2619 6.05047 13.8876 6.30965 14.54 6.30965ZM3.46 6.30965C4.11243 6.30965 4.73814 6.05047 5.19948 5.58913C5.66082 5.12779 5.92 4.50208 5.92 3.84965C5.92 3.19722 5.66082 2.57151 5.19948 2.11017C4.73814 1.64883 4.11243 1.38965 3.46 1.38965C2.80757 1.38965 2.18186 1.64883 1.72052 2.11017C1.25918 2.57151 1 3.19722 1 3.84965C1 4.50208 1.25918 5.12779 1.72052 5.58913C2.18186 6.05047 2.80757 6.30965 3.46 6.30965ZM14.54 18.6096C14.8631 18.6096 15.1829 18.546 15.4814 18.4224C15.7799 18.2988 16.051 18.1176 16.2795 17.8891C16.5079 17.6607 16.6891 17.3895 16.8127 17.0911C16.9364 16.7926 17 16.4727 17 16.1496C17 15.8266 16.9364 15.5067 16.8127 15.2082C16.6891 14.9098 16.5079 14.6386 16.2795 14.4102C16.051 14.1817 15.7799 14.0005 15.4814 13.8769C15.1829 13.7533 14.8631 13.6896 14.54 13.6896C13.8876 13.6896 13.2619 13.9488 12.8005 14.4102C12.3392 14.8715 12.08 15.4972 12.08 16.1496C12.08 16.8021 12.3392 17.4278 12.8005 17.8891C13.2619 18.3505 13.8876 18.6096 14.54 18.6096ZM3.46 18.6096C3.78305 18.6096 4.10294 18.546 4.4014 18.4224C4.69986 18.2988 4.97105 18.1176 5.19948 17.8891C5.42792 17.6607 5.60912 17.3895 5.73274 17.0911C5.85637 16.7926 5.92 16.4727 5.92 16.1496C5.92 15.8266 5.85637 15.5067 5.73274 15.2082C5.60912 14.9098 5.42792 14.6386 5.19948 14.4102C4.97105 14.1817 4.69986 14.0005 4.4014 13.8769C4.10294 13.7533 3.78305 13.6896 3.46 13.6896C2.80757 13.6896 2.18186 13.9488 1.72052 14.4102C1.25918 14.8715 1 15.4972 1 16.1496C1 16.8021 1.25918 17.4278 1.72052 17.8891C2.18186 18.3505 2.80757 18.6096 3.46 18.6096Z" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <Link to="/add-member">
                        <li className={`menu-item ${activeItem === 'Add Memmbers' ? 'active' : ''}`}>

                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 11H15M11 15V7M11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 1 11 1C5.5 1 1 5.5 1 11C1 16.5 5.5 21 11 21Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span>Add Memmbers</span>
                        </li>
                    </Link>
                    <Link to="/membership">
                        <li className={`menu-item ${activeItem === 'Membership' ? 'active' : ''}`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H19M15 12H19M17 16H19M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 16.3299C11.9327 15.628 11.6219 14.9717 11.1214 14.4749C10.621 13.9781 9.96243 13.6721 9.26 13.6099C8.75457 13.5599 8.24543 13.5599 7.74 13.6099C7.03826 13.674 6.38078 13.9806 5.88069 14.477C5.3806 14.9735 5.06918 15.6287 5 16.3299M8.5 11.2899C8.98004 11.2899 9.44042 11.0992 9.77986 10.7598C10.1193 10.4203 10.31 9.95996 10.31 9.47992C10.31 8.99988 10.1193 8.5395 9.77986 8.20006C9.44042 7.86062 8.98004 7.66992 8.5 7.66992C8.01996 7.66992 7.55958 7.86062 7.22014 8.20006C6.8807 8.5395 6.69 8.99988 6.69 9.47992C6.69 9.95996 6.8807 10.4203 7.22014 10.7598C7.55958 11.0992 8.01996 11.2899 8.5 11.2899Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Membership</span>
                        </li>
                    </Link>

                    <Link to="/staff">
                        <li className={`menu-item ${activeItem === 'Staff Members' ? 'active' : ''}`}>

                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.41 2.99975C17.35 2.99975 18.91 4.56975 18.91 6.49975C18.91 8.38975 17.41 9.92975 15.54 9.99975C15.4536 9.98974 15.3664 9.98974 15.28 9.99975M17.34 18.9997C18.06 18.8497 18.74 18.5597 19.3 18.1297C20.86 16.9597 20.86 15.0297 19.3 13.8597C18.75 13.4397 18.08 13.1597 17.37 12.9997M8.15997 9.86975C8.05997 9.85975 7.93997 9.85975 7.82997 9.86975C6.68217 9.83078 5.59461 9.34658 4.7976 8.51971C4.00059 7.69283 3.55671 6.5882 3.55997 5.43975C3.55997 2.98975 5.53997 0.999746 7.99997 0.999746C9.17621 0.978529 10.3127 1.42544 11.1594 2.24216C12.0061 3.05888 12.4938 4.17851 12.515 5.35475C12.5362 6.53098 12.0893 7.66747 11.2726 8.5142C10.4558 9.36092 9.33621 9.84853 8.15997 9.86975ZM3.15997 13.5597C0.739971 15.1797 0.739971 17.8197 3.15997 19.4297C5.90997 21.2697 10.42 21.2697 13.17 19.4297C15.59 17.8097 15.59 15.1697 13.17 13.5597C10.43 11.7297 5.91997 11.7297 3.15997 13.5597Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span>Staff Members</span>
                        </li>
                    </Link>


                    <Link to="/settings">
                        <div className="mt-[84px]">
                        <li className={`menu-item ${activeItem === 'Settings' ? 'active' : ''}`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.8041 19.9694 5.48558 19.5558 5.35435 19.0702C5.22311 18.5846 5.28988 18.0668 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            <span>Settings</span>
                        </li>
                        </div>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar