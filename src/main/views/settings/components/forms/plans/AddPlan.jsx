import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import IncludedWorkouts from './PlansWorkouts';


const AddPlan = ({ isShowing, hide,data, plan }) => {

  const plan_nameFieldRef = useRef(null);
  const plan_priceFieldRef = useRef(null);
  const plan_descFieldRef = useRef(null);

  
  const [state, setState] = useState({
    name: '',
    price: '',
    includedWorkouts: []
  })

  const inputHandle = (e) => {


    if (e.target.name === "") {

        let copy = { ...state }

        copy.statuse = e.target.value;
        setState(copy);
    } else {
        setState({
            ...state,
            [e.target.name]: e.target.value


        })


    }







}

  const handleCancel = () => {
    // Call the hide function passed as a prop to close the modal
    hide();
    document.body.style.position = 'static';


  }


  const handelEnableFields = (fieldsRef, elementsToHide, elementsToShow, fieldsRefToenable) => {
    elementsToHide.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = "none";
      }
    });

    elementsToShow.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = "block";
      }
    });

    fieldsRef.forEach((fieldRef) => {
      fieldRef.current.disabled = false;
    });
    fieldsRefToenable.forEach((fieldRef) => {
      fieldRef.current.disabled = true;
    });
  };



  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>




      <div className="modal_overlay">
        <div className="justify-center flex overflow-x-hidden overflow-y-auto  fixed inset-0  outline-none focus:outline-none" >
          <div className="relative mt-[64px] ml-[300px] ">

            <div className="plans border-0 rounded-[8px]   outline-none focus:outline-none">
              <div className="modal-header">
                <div className="title">Add New Plan</div>
                <hr className='h-[4px] mt-[20px] mb-[58px]' />
              </div>

              <div className="">
                <div className='flex mb-[24px]'>

                  <div >
                    <label htmlFor="name" className='font-semibold text-sm text-gray-600 pb-1 block '>Name of Plan</label>
                    <input ref={plan_nameFieldRef} name='name' className='w-[460px] h-[56px] rounded-[8px] text-sm ' type="text" />
                  </div>

                  <div className='mx-[12px]' >
                    <label htmlFor="price" className='font-semibold text-sm text-gray-600 pb-1 block '>Price</label>
                    <input ref={plan_priceFieldRef} name='price' className='w-[180px] h-[56px] rounded-[8px] text-sm' min={0} type="number" />
                  </div>
                  {plan &&
                    <div>

                      <button id='plan_edit' onClick={() => handelEnableFields([plan_nameFieldRef, plan_priceFieldRef], ['plan_edit'], ['plan_save'])} className='w-[56px] h-[56px]  rounded-[8px] butn mt-[24px]' >
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                          <path d="M29.6801 16.8006L18.7335 28.3873C18.3201 28.8273 17.9201 29.6939 17.8401 30.2939L17.3468 34.6139C17.1735 36.1739 18.2935 37.2406 19.8401 36.9739L24.1335 36.2406C24.7335 36.1339 25.5735 35.6939 25.9868 35.2406L36.9335 23.6539C38.8268 21.6539 39.6801 19.3739 36.7335 16.5873C33.8001 13.8273 31.5735 14.8006 29.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M27.8533 18.7334C28.1329 20.5212 28.9981 22.1656 30.3134 23.4084C31.6286 24.6512 33.3192 25.4221 35.12 25.6001M16 41.3334H40" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                      </button>
                      <button id='plan_save' onClick={() => handelEnableFields([], ['plan_save'], ['plan_edit'], [plan_nameFieldRef, plan_priceFieldRef])} className='btn-save w-[56px] h-[56px]  font-[500] rounded-[8px] mt-[24px] butn'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                          <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                    </div>

                  }
                </div>
                <label htmlFor="included_workouts" className='font-semibold text-sm text-gray-600 pb-1 block '>Workouts Included</label>

                <div className="workouts mb-[24px]">

                  <IncludedWorkouts  data={data} plan={plan} setPlan={setState} />


                </div>
                <div className="flex">
                  <div >
                    <label htmlFor="name" className='font-semibold text-sm text-gray-600 pb-1 block '>Description</label>

                    <textarea ref={plan_descFieldRef} name="description" id="description" className='w-[652px] mr-[12px] h-[92px] rounded-[8px] ' cols="30" rows="10"></textarea>
                  </div>

                  {plan &&
                    <div>

                      <button id='plan_desc_edit' onClick={() => handelEnableFields([plan_descFieldRef], ['plan_desc_edit'], ['plan_desc_save'], [])} className='w-[56px] h-[56px]  rounded-[8px] butn mt-[24px]' >
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                          <path d="M29.6801 16.8006L18.7335 28.3873C18.3201 28.8273 17.9201 29.6939 17.8401 30.2939L17.3468 34.6139C17.1735 36.1739 18.2935 37.2406 19.8401 36.9739L24.1335 36.2406C24.7335 36.1339 25.5735 35.6939 25.9868 35.2406L36.9335 23.6539C38.8268 21.6539 39.6801 19.3739 36.7335 16.5873C33.8001 13.8273 31.5735 14.8006 29.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M27.8533 18.7334C28.1329 20.5212 28.9981 22.1656 30.3134 23.4084C31.6286 24.6512 33.3192 25.4221 35.12 25.6001M16 41.3334H40" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                      </button>
                      <button id='plan_desc_save' onClick={() => handelEnableFields([], ['plan_desc_save'], ['plan_desc_edit'], [plan_descFieldRef])} className='btn-save w-[56px] h-[56px]  font-[500] rounded-[8px] mt-[24px] butn'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                          <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                    </div>

                  }
                </div>


                <div className='mt-4 mt-[76px] gap-3 flex justify-left items-center'>
                  <button onClick={handleCancel} className='w-[131px] h-[53px] text-[24px] rounded-[8px]  border-[4px] border-[#3741D7]  btn-prev bg-[$white]'>Cancel</button>
                  <button className='w-[131px] h-[53px] text-[24px] rounded-[8px] text-[#ffff] bg-[#3741D7]'>Save  </button>

                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;
};

export default AddPlan;