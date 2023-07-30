import React from 'react'
import './cardStyle.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function CardSummry() {
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

                <div className="total  tetx-[20px] font-[500]  w-[378px] h-[24] flex justify-left">
                    <p className='text-[20px]  font-normal'>Total amount:</p>
                </div>
                <div className="total w-[378px] h-[24] flex justify-left ">
                    <h1 className='font-[700] text-[32px]  '>550.00 </h1><sub className='mt-[24px] text-[20px] ml-[4px] font-semibold'>Dirhams.</sub>
                </div>
                <div className="summery w-[504px] h-[440px] rounded-[8px] justify-right">
                    <h1 className='label text-[20px] font-[600] '>Payment summary</h1>
                    <hr className='h-4 mt-[12px] mb-[34px]' />

                    <div className="flex mb-[12px]">
                        <h3  className='flex-1'>Plan chosen</h3>
                        <h2 className=''>Golden plan</h2>
                    </div>
                    <div className="flex mb-[12px]">
                        <h3  className='flex-1'>Months</h3>
                        <h2 className=''>20 Months</h2>
                    </div>
                    <div className="flex mb-[12px]">
                        <h3  className='flex-1'>Amount</h3>
                        <sub className='mt-[14px] text-[14px] mr-[2px] font-[500]' > MAD </sub> <h2>   <span>350,00</span></h2>
                    </div>
                    <div className="flex mb-[12px]">
                        <h4 >Add. features</h4>
                        <hr className='dashed h-4 w-[349px]' />
                    </div>
                    <div className="flex mb-[12px]">
                        <h3  className='flex-1'>Spa & Sauna</h3>
                        <sub className='mt-[14px] text-[14px] mr-[2px] font-[500]' > MAD </sub> <h2>   <span>200,00</span></h2>
                    </div>
                    <div className="flex mb-[12px]">
                        <h3 className='flex-1'>Swiming pool</h3>
                        <sub className='mt-[14px] text-[14px] mr-[2px] font-[500]' > MAD </sub> <h2>   <span>100,00</span></h2>
                    </div>

                    <hr className='h-4 w-[694]  mt-[8px]  ' />

                    <div className="flex mb-[12px]">
                        <h5 className=' flex-1 font-[600] text-[24px] '>Total amount</h5>
                        <h1 className='font-[600] text-[24px]   '>550.00 </h1><sub className='mt-[18px] text-[16px] ml-[4px] font-[600]'>Dirhams.</sub>

                    </div>


                </div>


                <div className='mt-[48px]  flex justify-center mr-[60px]'>
                    <button className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[32px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#FFFFFF]'> <CancelOutlinedIcon className='mt-[-6px] ' />Cancel</button>
                    <button className='w-[224px] h-[64px] text-[24px] rounded-[8px]  ml-[32px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>
                </div>

            </div>
        </div>
    )
}

export default CardSummry