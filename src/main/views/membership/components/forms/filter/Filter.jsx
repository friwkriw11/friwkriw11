import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import './filter.scss';
function Filter() {
    return (
        <div className="flex justify-center items-center mt-[72px]">

        <div className='filter-container w-[630px] h-[447]  flex flex-col items-center'>

            <div className="flex flex-col items-left   mb-2">
                <h1 className='font-[400] text-[32px] font-[#00000]'>Please enter the member’s ID</h1>
            </div>
            <div className='flex flex-col items-left mt-8  mb-2'>
                <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="address">Member’s ID</label>
                <input className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md' type="text" name='member_id' id='member_id' />

            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
                <button className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#ffff]'> <CancelOutlinedIcon className='mt-[-6px] mr-[2px] ' />Cancel</button>
                <button className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>
            </div>

        </div>

        </div>
    )
}

export default Filter