import './navbar.scss'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen_option, setIsOpen_option] = useState(false);

  const toggleDropdown_option = () => {
    setIsOpen_option(!isOpen_option);
  };
  return (

    <div className="navbar" >
      <div className="wrapper">

        <span></span>
        <div className="items">
          <div onClick={toggleDropdown} className="item">
            <NotificationsIcon className='icon' />
            <div className="counter">1</div>
          </div>
          {isOpen && (
            <div className="notifications dropdown fexed pb-[16px] ml-[-444px] w-[480px]  mt-[450px]">
              <div className="header flex items-center">
                <h1 className='flex-1 text-[24px] font-[600] p-[16px]'>Notifications</h1>
                <div className="">
                  <svg onClick={toggleDropdown_option} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="20" r="3" transform="rotate(-90 10 20)" fill="black" />
                    <circle cx="20" cy="20" r="3" transform="rotate(-90 20 20)" fill="black" />
                    <circle cx="30" cy="20" r="3" transform="rotate(-90 30 20)" fill="black" />
                  </svg>
                  {isOpen_option && (
                    <ul className="dropdown_option ml-[-200px]  space-y-[14px] ">
                      <li className='flex delete-option cursor-pointer'>
                        <span className='MarkAllAsRead-text text-[12px] font-[400] flex-1'>Mark All as Read</span>
                        <span className='icon'>
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_943_3313)">
                              <path d="M11.1133 14.1673L19.4466 5.83398" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11.1133 14.167L9.86328 12.917" stroke="black" strokeLinecap="round" />
                              <path d="M7.36328 10.417L6.11328 9.16699" stroke="black" strokeLinecap="round" />
                              <path d="M1.11328 9.63391L5.81995 14.1673L14.4466 5.83409" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_943_3313">
                                <rect width="20" height="20" fill="white" transform="translate(0.280273)" />
                              </clipPath>
                            </defs>
                          </svg>

                        </span>
                      </li>
                      <li className='flex delete-option cursor-pointer'>
                        <span className='delete-text text-[12px] font-[400] flex-1'>Delete All</span>
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
              <ul className="space-y-[12px]  ">

                <li className='ml-[8px] '>
                  <div className="flex-1 p-[16px] flex items-center w-[464px] h-[72px] not-showed   ">
                    <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px]' width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h1 className='text-[16px] font-[600] mt-[16px] leading-[28px]'><span className='font-[700]'>Kawtar Hariri </span> added a new member</h1>
                      <p className='text-[12px] font-[500] '>1 hour ago</p>
                    </div>
                  </div>
                </li>
                <li className='ml-[8px] '>
                  <div className="flex-1 p-[16px] flex items-center w-[464px] h-[72px] not-showed   ">
                    <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px]' width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h1 className='text-[16px] font-[600] mt-[16px] leading-[28px]'><span className='font-[700]'>Kawtar Hariri </span> added a new member</h1>
                      <p className='text-[12px] font-[500] '>1 hour ago</p>
                    </div>
                  </div>
                </li>
                <li className='ml-[8px] '>
                  <div className="flex-1 p-[16px] flex items-center w-[464px] h-[72px] not-showed   ">
                    <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px]' width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h1 className='text-[16px] font-[600] mt-[16px] leading-[28px]'><span className='font-[700]'>Kawtar Hariri </span> added a new member</h1>
                      <p className='text-[12px] font-[500] '>1 hour ago</p>
                    </div>
                  </div>
                </li>
                <li className='ml-[8px] '>
                  <div className="flex-1 p-[16px] flex items-center w-[464px] h-[72px] not-showed   ">
                    <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px]' width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h1 className='text-[16px] font-[600] mt-[16px] leading-[28px]'><span className='font-[700]'>Kawtar Hariri </span> added a new member</h1>
                      <p className='text-[12px] font-[500] '>1 hour ago</p>
                    </div>
                  </div>
                </li>


              </ul>
            </div>
          )}
          <div className="item">
            <AccountIcon className='icon' /> Hmad bouda  <ArrowDropDownOutlinedIcon className='dropdown-icon' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar