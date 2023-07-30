import React, { useState } from "react";

import './profile.scss'
import '../../../assets/constants/helpers/helper';
import { helper } from '../../../assets/constants/helpers/helper.jsx';


const Profile = ({ row, champions }) => {

    const [showModal, setShowModal] = useState(false);
    const { toggleElementVisibility } = helper();

    const openModal = () => {
        setShowModal(true);
        document.body.style.position = 'fixed';
        document.body.style.width = '99%';


    }

    const closeModal = () => {
        setShowModal(false);
        document.body.style.position = 'static';
        document.body.style.width = '100%';


    }
    let [activeTab, setActiveTab] = useState('general');


    function getMemberInfo(id) {
        return champions.find(champion => champion.id === id);
    }

    const [champion, setChampion] = useState(getMemberInfo(row.id));



    return (
        <>
            {showModal ? (
                <div className="modal_overlay">

                    <div
                        className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-[88px]"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                            <div>
                                <button
                                    className="mb-[12px]  float-right text-3xl w-[32px] h-[32px] leading-none font-semibold outline-none focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 2.5L25.5 25.5M2.5 25.5L25.5 2.5" stroke="white" strokeWidth="3.28572" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            </div>
                            <div className="modal_container w-[632px]  border-0 rounded-[8px]  relative flex flex-col  outline-none focus:outline-none">
                                <div className=" body rounded-[8px]">
                                    <div className="modal-header flex ">
                                        <div className="flex-1 flex ">
                                            <svg className='mr-4 bg-[#D9D9D9] rounded-[50px] p-[4px]' width="80px" height="80px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1603 17.04C16.0541 17.0266 15.9466 17.0266 15.8403 17.04C14.7096 17.0019 13.6379 16.5258 12.8517 15.7122C12.0655 14.8987 11.6264 13.8114 11.627 12.68C11.627 10.2666 13.5737 8.30665 16.0003 8.30665C17.1463 8.30466 18.2471 8.75306 19.0654 9.55518C19.8838 10.3573 20.3542 11.4489 20.3752 12.5946C20.3962 13.7404 19.9661 14.8484 19.1776 15.68C18.3892 16.5116 17.3056 17 16.1603 17.04ZM24.987 25.84C22.5367 28.0921 19.3284 29.3392 16.0003 29.3333C12.5337 29.3333 9.38701 28.0133 7.01367 25.84C7.14701 24.5866 7.94701 23.36 9.37367 22.4C13.027 19.9733 19.0003 19.9733 22.627 22.4C24.0537 23.36 24.8537 24.5866 24.987 25.84Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.0003 29.3333C23.3643 29.3333 29.3337 23.364 29.3337 16C29.3337 8.63601 23.3643 2.66667 16.0003 2.66667C8.63633 2.66667 2.66699 8.63601 2.66699 16C2.66699 23.364 8.63633 29.3333 16.0003 29.3333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div>
                                                <h1 className='text-[24px] font-[700] mt-[16px] leading-[28px]'>{champion.first_name + " " + champion.last_name}</h1>
                                                <p className='text-[16px] font-[500] '>{champion.serial_number}</p>
                                            </div>
                                        </div>
                                        <div className="delete flex-6 flex mt-[12px]">
                                            <button className='w-[103px] h-[44px] text-[16px] rounded-[8px]  border-[4px] border-[#E82727]  font-[600] '>Delete</button>
                                        </div>
                                    </div>
                                    <div className="modal_body">

                                        <div className=" status w-[272px] mt-[-70px] rounded-[8px] ml-[148px] p-[12px]">


                                            <button className={` ${champion.status === "PAID" ? 'btn_status-paid' : 'btn_status-non-paid'} w-[248px] h-[72px] text-[32px]  font-[600]`}>{champion.status}</button>

                                        </div>

                                        <div className="tabs w-[568px] h-[56px] flex  justify-center mt-[20px] rounded-[12px]">
                                            <ul className="flex space-x-[72px] mt-[16px]  text-[20px] ">
                                                <li onClick={() => setActiveTab('general')} className={`${activeTab === 'general' ? 'active' : ''} cursor-pointer`}> General <span><hr className="w-[56px] ml-[8px] mt-[4px] " /></span></li>
                                                <li onClick={() => setActiveTab('personal')} className={`${activeTab === 'personal' ? 'active' : ''} cursor-pointer `} >Personal <span><hr className="w-[56px] ml-[12px] mt-[4px] " /></span></li>
                                                <li onClick={() => setActiveTab('contact')} className={`${activeTab === 'contact' ? 'active' : ''} cursor-pointer`}  >Contact <span> <hr className="w-[56px] ml-[8px] mt-[4px] " /></span> </li>

                                            </ul>
                                        </div>
                                        {
                                            activeTab === 'general' &&
                                            <div className="flex space-x-[12px] ">
                                                <div className="infos w-[568px] rounded-[12px]  mt-[16px]">

                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">Joining Date</h2>
                                                        <h1 id="joining_date" className="flex-2">{champion.date_joined}</h1>
                                                        <input id='joining_date_input' className='w-[300px] h-[56px] rounded-[8px] text-sm' type="date" name='date_joined' defaultValue={champion.date_joined} />

                                                    </div>

                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">Plan choosen</h2>
                                                        <h1 id="plan_choosen" className="flex-2">{champion.plan_id}</h1>
                                                        <input id='plan_choosen_input' defaultValue={champion.plan_id} className='w-[300px] h-[56px] rounded-[8px] text-sm' type="text" />

                                                    </div>

                                                    <div className="last flex items-center">
                                                        <h2 className="flex-1 ">Gender</h2>
                                                        <h1 id="gender" className="flex-2">{champion.gender}</h1>

                                                        <div id="gender_input" className='select_input'>
                                                            <div className="select">
                                                                <select defaultValue={champion.gender} className=' w-[300px] h-[56px] ' placeholder='select gender' name="gender" >
                                                                    <option className='place_holder' value="" disabled>Choose Gender</option>
                                                                    <option value="Famel" >Famel</option>
                                                                    <option value="Male" >Male</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="buttons h-[212px] space-y-[8px] mt-[24px]">


                                                    <div className="actions flex">
                                                        <button id='joining_date_edit' onClick={() => toggleElementVisibility(["joining_date", "joining_date_edit"], ["joining_date_input", "joining_date_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button id="joining_date_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>

                                                    <div className="actions flex">

                                                        <button id='plan_choosen_edit' onClick={() => toggleElementVisibility(["plan_choosen", "plan_choosen_edit"], ["plan_choosen_input", "plan_choosen_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button id="plan_choosen_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>



                                                    <div className="actions last flex">

                                                        <button id='gender_edit' onClick={() => toggleElementVisibility(["gender", "gender_edit"], ["gender_input", "gender_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>

                                                        <button id="gender_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            activeTab === 'personal' &&
                                            <div className="flex space-x-[12px] ">
                                                <div className="infos w-[568px] h-[276px] rounded-[12px] mb-[] mt-[16px]">
                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">ID Card Number</h2>
                                                        <h1 id="id_card_number" className="flex-2"> {champion.id_card_number} </h1>
                                                        <input id='id_card_number_input' defaultValue={champion.id_card_number} className='w-[300px] h-[56px] rounded-[8px] text-sm' type="text" />


                                                    </div>

                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">Personal Address</h2>
                                                        <h1 id="home_address" className="flex-2"> {champion.home_address} </h1>
                                                        <textarea defaultValue={champion.home_address} className='w-[300px] h-[56px] rounded-[8px] text-sm' name='home_address' placeholder='Medical History' id='home_address_input' />

                                                    </div>

                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">Medical History</h2>
                                                        <h1 id="medical_history" className="flex-2">{champion.medical_history !== "" ? champion.medical_history : "None"}</h1>
                                                        <textarea defaultValue={champion.medical_history} className='w-[300px] h-[56px] rounded-[8px] text-sm' name='medical_history' placeholder='Medical History' id='medical_history_input' />

                                                    </div>

                                                    <div className="detail last flex">
                                                        <h2 className="flex-1 ">Date of Birth</h2>
                                                        <h1 id="date_of_birth" className="flex-2">{champion.date_of_birth}</h1>
                                                        <input id='date_of_birth_input' className='w-[300px] h-[56px] rounded-[8px] text-sm' type="date" name='date_of_birth' defaultValue={champion.date_of_birth} />

                                                    </div>
                                                </div>

                                                <div className="buttons h-[212px] space-y-[8px] mt-[24px]">


                                                    <div className="actions flex">
                                                        <button id='id_card_number_edit' onClick={() => toggleElementVisibility(["id_card_number", "id_card_number_edit"], ["id_card_number_input", "id_card_number_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button id="id_card_number_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>

                                                    <div className="actions flex">

                                                        <button id='home_address_edit' onClick={() => toggleElementVisibility(["home_address", "home_address_edit"], ["home_address_input", "home_address_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button id="home_address_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>



                                                    <div className="actions last flex">

                                                        <button id='medical_history_edit' onClick={() => toggleElementVisibility(["medical_history", "medical_history_edit"], ["medical_history_input", "medical_history_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>

                                                        <button id="medical_history_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>
                                                    <div className="actions last flex">

                                                        <button id='date_of_birth_edit' onClick={() => toggleElementVisibility(["date_of_birth", "date_of_birth_edit"], ["date_of_birth_input", "date_of_birth_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>

                                                        <button id="date_of_birth_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {
                                            activeTab === 'contact' &&
                                            <div className="flex space-x-[12px] ">

                                                <div className="infos w-[568px] h-[212px] rounded-[12px] mb-[] mt-[16px]">
                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">Phone Number</h2>
                                                        <h1 id="phone_number" className="flex-2">{champion.phone_number}</h1>
                                                        <input id='phone_number_input' defaultValue={champion.phone_number} className='w-[300px] h-[56px] rounded-[8px] text-sm' type="tel" />

                                                    </div>

                                                    <div className="detail flex">
                                                        <h2 className="flex-1 ">Emegency Phone. Num</h2>
                                                        <h1 id="emergency_phone_number" className="flex-2">{champion.emergency_phone_number}</h1>
                                                        <input id='emergency_phone_number_input' defaultValue={champion.emergency_phone_number} className='w-[300px] h-[56px] rounded-[8px] text-sm' type="tel" />

                                                    </div>

                                                    <div className="detail last flex">
                                                        <h2 className="flex-1 ">Email Address</h2>
                                                        <h1 id="email" className="flex-2">{champion.email}</h1>
                                                        <input id='email_input' defaultValue={champion.email} className='w-[300px] h-[56px] rounded-[8px] text-sm' type="email" />

                                                    </div>

                                                </div>
                                                <div className="buttons h-[212px] space-y-[8px] mt-[24px]">


                                                    <div className="actions flex">
                                                        <button id='phone_number_edit' onClick={() => toggleElementVisibility(["phone_number", "phone_number_edit"], ["phone_number_input", "phone_number_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button id="phone_number_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>

                                                    <div className="actions flex">

                                                        <button id='emergency_phone_number_edit' onClick={() => toggleElementVisibility(["emergency_phone_number", "emergency_phone_number_edit"], ["emergency_phone_number_input", "emergency_phone_number_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button id="emergency_phone_number_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>

                                                    <div className="actions last flex">

                                                        <button id='email_edit' onClick={() => toggleElementVisibility(["email", "email_edit"], ["email_input", "email_save"])}>
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M29.6801 16.8002L18.7335 28.3869C18.3201 28.8269 17.9201 29.6936 17.8401 30.2936L17.3468 34.6136C17.1735 36.1736 18.2935 37.2402 19.8401 36.9736L24.1335 36.2403C24.7335 36.1336 25.5735 35.6936 25.9868 35.2402L36.9335 23.6536C38.8268 21.6536 39.6801 19.3736 36.7335 16.5869C33.8001 13.8269 31.5735 14.8002 29.6801 16.8002Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M27.8533 18.733C28.1329 20.5208 28.9981 22.1652 30.3134 23.408C31.6286 24.6508 33.3192 25.4217 35.12 25.5997M16 41.333H40" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>

                                                        <button id="email_save" className="btn-save">
                                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="60" height="60" rx="8" fill="#DCDCDC" />
                                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div >
            ) : null}
            <button onClick={openModal} className="view-button">
            View Profile
            </button>
        </>

    )
}

export default Profile