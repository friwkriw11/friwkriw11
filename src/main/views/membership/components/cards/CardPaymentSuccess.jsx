import React from 'react'
import './cardStyle.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function CardPaymentSuccess() {
    return (
        <div className="flex justify-center items-center mt-[64px] mb-[72px]">

            <div className='card-container pl-[64px] w-[630px] h-[818]  flex flex-col items-left'>
                <div className="flex ">
                    <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px] mt-[4px]' width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                    <h1 className='text-[20px] font-[500] leading-[24px]'>Jamal Hertok</h1>
                    <p className=' text-[12px] font-[500] '  >AB 517751474</p>
                    </div>
                </div>

                <hr className='h-4 w-[694] ml-[-64px] mt-[24px] mb-[32px] ' />
                
                <div className="success-payment ">
                    <svg className='ml-[188px]' width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.0007 102.667C81.6673 102.667 102.667 81.6667 102.667 56C102.667 30.3333 81.6673 9.33334 56.0007 9.33334C30.334 9.33334 9.33398 30.3333 9.33398 56C9.33398 81.6667 30.334 102.667 56.0007 102.667Z" stroke="#3741D7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M36.166 55.9999L49.3727 69.2066L75.8327 42.7932" stroke="#3741D7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div >
                        <h1 className='text-[32px] mr-[80px] font-semibold mb-[8px] text-center'>Payment success!</h1>
                    </div>
                    <div className="flex  ">
      
                        <p className='text-[16px] font-[400] ml-[88px] text-center w-[306px] leading-[20px] '>
                              
                              The membership’s payment of Mr. <span className='font-semibold'>Jamal Brado</span> done successfully. </p>
                    </div>
                    <div className='flex '>
                        <hr className='bg-[#000000] h-[2px] w-[504px] mt-[32px] mb-[16px] ' />
                    </div>
                 
                </div>

                <div className="total-paid  tetx-[20px] font-[500]  w-[378px] h-[24] flex justify-left">
                    <p className='text-[20px]  font-normal'>Paid amount:</p>
                </div>
                <div className="total w-[378px] h-[24] flex justify-left ">
                    <h1 className='font-[700] text-[48px]  '>550.00 </h1><sub className='mt-[36px] text-[28px] ml-[4px] font-semibold'>Dirhams.</sub>
                </div>



                <div className='mt-[48px]  flex justify-center mr-[60px]'>
                    <button className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[32px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#FFFFFF]'> <CancelOutlinedIcon className='mt-[-6px] ' />Cancel</button>
                    <button className='w-[224px] h-[64px] text-[24px] rounded-[8px]  ml-[32px] text-[#ffff] bg-[#3741D7]'>Done </button>
                </div>

            </div>
        </div>
    )
}

export default CardPaymentSuccess