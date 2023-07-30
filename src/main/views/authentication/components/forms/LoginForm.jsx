import React from 'react'
import Avatar from '@mui/material/Avatar';
import './style.scss';

function LoginForms() {
  return (
    <div className=" bg-gray-100 flex flex-col justify-center sm:py-12">
      
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex justify-center">
          <Avatar sx={{ bgcolor: '#D9D9D9',color:'black',width:'120px',height:'120px' }}> <span>L</span> </Avatar>
        </div>
           
        <div className="bg-white shadow pt-[12px] w-[473px]	 ml-[-48px] rounded-lg mt-[63px]">
    
          <h1 className="text-gray-800 font-bold text-[48px] mb-1  mx-5">Log in</h1>
    
          <div className="px-8 py-12 ">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
            <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[409px] h-[48px]" />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-[409px] h-[48px]" />
            <button type="button" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-[409px] h-[56px] py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
          </div>
        </div>
       
      </div>
    </div>
      )
}

export default LoginForms