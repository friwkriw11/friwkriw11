import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import './form.scss';

function Renewal_membershipForm() {
    const [additionalFaetures, setAdditionalFaetures] = useState([{
        id: "1",
        slug: "swimming pool",
        name: "swimmingPool"
    },
    {
        id: "2",
        slug: "spa & suana",
        name: "spaAndSuana"
    }
    ]);

    const [state, setState] = useState({

        choosenPlan: "plan1",
        numberOfMonths: 1,
        AdditionalFeatures: [],
        payInsurance: '',
        post: ''
    })


    const inputHandle = (e) => {
        let copy = { ...state }

        if (e.target.name === "additionalFaetures") {
            if (e.target.checked) {
                copy.AdditionalFeatures.push(e.target.value)
            } else {
                copy.AdditionalFeatures = copy.AdditionalFeatures.filter(el => el !== e.target.value)
            }
            setState(copy)
        } else if (e.target.name === "up_btn") {

            copy.numberOfMonths = copy.numberOfMonths + 1;
            setState(copy);
        } else if (e.target.name === "up_down") {

            copy.numberOfMonths = copy.numberOfMonths - 1;
            setState(copy);
        }
        else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }

    }
    return (
        <div className="flex justify-center items-center mt-[64px] mb-[72px]">

            <div className='form-container w-[630px] h-[558]  flex flex-col '>
                <div className="flex header item-left justify-left">
                    <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px] mt-[4px]' width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                    <h1 className='text-[20px] font-[500] leading-[24px]'>Jamal Hertok</h1>
                    <p className=' text-[12px] font-[500] '  >AB 517751474</p>
                    </div>
                </div>

                <hr className='h-4 w-[630px] ml-[-64px] mt-[24px] mb-[32px] ' />

                <div className='flex flex-col items-center'>
                    <div className='gap-4 flex justify-center items-center '>
                        <div>
                            <label className="block text-[20px] font-[500] text-[#606060] " htmlFor="countries_disabled">Chosen Plan</label>
                            <div className="select">
                                <select onChange={inputHandle} value={state.choosenPlan} className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md' placeholder='select plan' name="choosenPlan" id="choosenPlan">
                                    <option className='place_holder' value="" disabled>Choose plan</option>
                                    <option value="1" >plan1</option>
                                    <option value="2" >plan 2</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col  '>

                            <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="months">Months</label>
                            <input value={state.numberOfMonths} onChange={inputHandle} min={1} className='p-2 border p-2 w-[111px] h-[56px] months border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='numberOfMonths' placeholder='Months' id='numberOfMonths' />
                            <div className="spinner">
                                <button type="button" onClick={inputHandle} name="up_btn" className="up button">&rsaquo;</button>
                                <button type="button" onClick={inputHandle} name="down_btn" className="down  button">&lsaquo;</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-[16px] '>

                        <label className='block text-[20px] mr-[324px] font-[500] text-[#606060] ' htmlFor="additionalFaeture">Addtional Faeturs :</label>
                        {
                            additionalFaetures.map((additionalFaeture, i) =>
                                <div key={i} className="flex items-left lh-[20px] ">
                                    <input className='w-[24px] h-[24px]' onChange={inputHandle} name="additionalFaetures" type="checkbox" value={additionalFaeture.id} checked={state.AdditionalFeatures.indexOf(additionalFaeture.id) !== -1} />
                                    <label className="text-[16px] font-[400] mb-[8px] ml-[8px] text-[#000000] " htmlFor="additionalFaetures">{additionalFaeture.slug}</label>
                                </div>
                            )
                        }


                    </div>


                    <div className='mt-[48px] gap-3 flex justify-center items-center'>
                        <button  className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[32px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#FFFFFF]'> <CancelOutlinedIcon className='mt-[-6px] ' />Cancel</button>
                        <button  className='w-[224px] h-[64px] text-[24px] rounded-[8px]  ml-[32px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Renewal_membershipForm