import React, { useState } from 'react';
import Header from '../header/Header'
import '../style.scss';
import PlusIcon from '@mui/icons-material/Add';
import AddPlan from "./AddPlan";

function FormAWorkouts({ data }) {


    const [showPlans, setShowPlans] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
        document.body.style.width = '100%';
        document.body.style.position = 'fixed';
        
    }
    function toggleEdit() {
        setIsShowing(!isShowing);
        setIsEditing(!isEditing);
        document.body.style.width = '100%';
        document.body.style.position = 'fixed';
    }
    const handleButtonClick = () => {
        setShowPlans(true);
    };

    const closePlans = () => {
        setShowPlans(false);
    };



    return (
        <>


            <div className='flex justify-center items-center mt-[72px]'>

                <div className='form-container w-[859px] h-[599] rounded-[8px] mb-[72px] items-left'>
                    <Header title={'Plans'} />
                    <div className=''>

                        {

                            data.plans.map((plan) => (
                                <div key={plan.id} className='flex mb-[24px] space-x-[12px]'>
                                    {isEditing ? (
                                        <AddPlan
                                            isShowing={isShowing}
                                            hide={toggleEdit}
                                            data={data}
                                            plan={plan}
                                        />) : (
                                        <AddPlan
                                            isShowing={isShowing}
                                            hide={toggle}
                                            data={data}
                                            plan={null}
                                        />
                                    )
                                    }

                                    <div >
                                        <label htmlFor="name" className='font-semibold text-sm text-gray-600 pb-1 block '>Name of Plan</label>
                                        <input className='w-[432px] h-[56px] rounded-[8px] text-sm' disabled={true} defaultValue={plan.name} type="text" />
                                    </div>

                                    <div className='' >
                                        <label htmlFor="price" className='font-semibold text-sm text-gray-600 pb-1 block '>Price</label>
                                        <input className='w-[147px] h-[56px] rounded-[8px] text-sm' disabled={true} defaultValue={plan.price} type="text" />
                                    </div>

                                    <div className='file-inputs'>
                                        <button onClick={toggleEdit} type='file' className='w-[56px] h-[56px] rounded-[8px] butn mt-[24px] ' >

                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                <path d="M32.7732 27.9999C32.7732 30.6399 30.6399 32.7732 27.9999 32.7732C25.3599 32.7732 23.2266 30.6399 23.2266 27.9999C23.2266 25.3599 25.3599 23.2266 27.9999 23.2266C30.6399 23.2266 32.7732 25.3599 32.7732 27.9999Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M28 39.0266C32.7067 39.0266 37.0934 36.2533 40.1467 31.4533C41.3467 29.5733 41.3467 26.4133 40.1467 24.5333C37.0934 19.7333 32.7067 16.96 28 16.96C23.2934 16.96 18.9067 19.7333 15.8534 24.5333C14.6534 26.4133 14.6534 29.5733 15.8534 31.4533C18.9067 36.2533 23.2934 39.0266 28 39.0266Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </button>
                                    </div>

                                   
                                    <div className='file-inputs'>
                                        <button className='w-[56px] h-[56px] rounded-[8px] butn mt-[24px] ' >

                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                <path d="M40 19.9737C35.56 19.5337 31.0933 19.307 26.64 19.307C24 19.307 21.36 19.4403 18.72 19.707L16 19.9737M23.3333 18.627L23.6267 16.8803C23.84 15.6137 24 14.667 26.2533 14.667H29.7467C32 14.667 32.1733 15.667 32.3733 16.8937L32.6667 18.627M37.1333 24.187L36.2667 37.6137C36.12 39.707 36 41.3337 32.28 41.3337H23.72C20 41.3337 19.88 39.707 19.7333 37.6137L18.8667 24.187M25.7733 34.0003H30.2133M24.6667 28.667H31.3333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>


                                        </button>
                                    </div>

                                </div>
                            ))

                        }
                        <div className='flex justify-center mb-[36px]'>
                            <button type="button" onClick={toggle} className='font-[600] text-[24px] Add_New_Workout border-dashed border-2 '>
                                Add New Plan <PlusIcon />
                            </button>
                        </div>





                    </div>
                </div>

            </div>
        </>
    )
}

export default FormAWorkouts