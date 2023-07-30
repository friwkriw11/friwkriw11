import React, { useState, useRef } from 'react'
import Header from '../header/Header'
import '../style.scss';

import { ToastContainer, toast } from 'react-toastify';

const FormGSetting = () => {

    const company_nameFieldRef = useRef(null);
    const company_emailFieldRef = useRef(null);
    const company_phone_numberFieldRef = useRef(null);
    const company_logoFieldRef = useRef(null);
    const inputfileRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    let image_p = {
        selectedFile: null
    };
    const handleImageClick = () => {
        inputfileRef.current.click();

    }

    const handelEditFields = (fieldsRef, elementsToHide, elementsToShow) => {


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

    }

    const validateImage = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function () {
                if (this.width === 1080 && this.height === 1080) {
                    resolve();
                } else {
                    reject('Invalid image dimensions. The image should be 1080x1080 pixels.');
                }
            };
            img.onerror = function () {
                reject('Invalid image file.');
            };
            img.src = URL.createObjectURL(file);
        });
    };
    const inputHandle = (e) => {


        const file = e.target.files[0];

        if (file) {
            validateImage(file)
                .then(() => {
                    image_p.selectedFile = file;

                    company_logoFieldRef.current.value = image_p.selectedFile.name;
                    setImage(image_p.selectedFile);
                    handelEditFields([company_logoFieldRef], ['companylogo_edit'], ['companylogo_save'])


                })
                .catch((error) => {
                    toast.error(error)
                    // Display an error message to the user
                });
        }






    }


    return (
        <div className='flex justify-center items-center mt-[180px]'>
            <div className='form-container w-[859px] h-[599] rounded-[8px] mb-[72px] items-left'>
                <Header title={'General Settings'} />
                <div className=''>

                    <div className='flex mb-[24px]'>
                        <div >
                            <label htmlFor="companyname" className='font-semibold text-sm text-gray-600 pb-1 block'>Name of Company</label>
                            <input ref={company_nameFieldRef} id='companyname_input' defaultValue={"MARAKANA"} disabled={true} className='w-[595px] h-[56px] rounded-[8px] text-sm' type="text" />
                        </div>

                        <div>
                            <button id='companyname_edit' onClick={() => handelEditFields([company_nameFieldRef], ['companyname_edit'], ['companyname_save'])} className='w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]' >
                                <svg width="124" height="56" viewBox="0 0 124 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="124" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M63.6801 16.8006L52.7335 28.3873C52.3201 28.8273 51.9201 29.6939 51.8401 30.2939L51.3468 34.6139C51.1735 36.1739 52.2935 37.2406 53.8401 36.9739L58.1335 36.2406C58.7335 36.1339 59.5735 35.6939 59.9868 35.2406L70.9335 23.6539C72.8268 21.6539 73.6801 19.3739 70.7335 16.5873C67.8001 13.8273 65.5735 14.8006 63.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M61.8533 18.7334C62.1329 20.5212 62.9981 22.1656 64.3134 23.4084C65.6286 24.6512 67.3192 25.4221 69.12 25.6001M50 41.3334H74" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button id='companyname_save' className='btn-save w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]'>
                                <svg width="124" height="56" viewBox="0 0 124 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="124" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                        </div>

                    </div>

                    <div className='flex mb-[24px]'>
                        <div >
                            <label htmlFor="companylogo" className='font-semibold text-sm text-gray-600 pb-1 block '>Logo of Company</label>
                            <input className='w-[595px] h-[56px] rounded-[8px] text-sm' disabled ={true} type="text" ref={company_logoFieldRef} />
                        </div>

                        <div >
                            <button id='companylogo_edit' onClick={handleImageClick} className='w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]' >
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M29.6801 16.8006L18.7335 28.3873C18.3201 28.8273 17.9201 29.6939 17.8401 30.2939L17.3468 34.6139C17.1735 36.1739 18.2935 37.2406 19.8401 36.9739L24.1335 36.2406C24.7335 36.1339 25.5735 35.6939 25.9868 35.2406L36.9335 23.6539C38.8268 21.6539 39.6801 19.3739 36.7335 16.5873C33.8001 13.8273 31.5735 14.8006 29.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.8533 18.7334C28.1329 20.5212 28.9981 22.1656 30.3134 23.4084C31.6286 24.6512 33.3192 25.4221 35.12 25.6001M16 41.3334H40" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button id='companylogo_save' className='btn-save w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]'>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                        </div>
                        <ToastContainer />

                        <input type="file" onChange={inputHandle} name="image" id="image" hidden ref={inputfileRef} />

                        <div className='file-inputs'>
                            <button onClick={toggleDropdown} className='w-[56px] h-[56px] mx-[1px] rounded-[8px] butn mt-[24px] ' >

                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M32.7732 27.9999C32.7732 30.6399 30.6399 32.7732 27.9999 32.7732C25.3599 32.7732 23.2266 30.6399 23.2266 27.9999C23.2266 25.3599 25.3599 23.2266 27.9999 23.2266C30.6399 23.2266 32.7732 25.3599 32.7732 27.9999Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M28 39.0266C32.7067 39.0266 37.0934 36.2533 40.1467 31.4533C41.3467 29.5733 41.3467 26.4133 40.1467 24.5333C37.0934 19.7333 32.7067 16.96 28 16.96C23.2934 16.96 18.9067 19.7333 15.8534 24.5333C14.6534 26.4133 14.6534 29.5733 15.8534 31.4533C18.9067 36.2533 23.2934 39.0266 28 39.0266Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {isOpen && (
                                    <ul className=" dropdown  ml-[-180px]   mt-[4px]  w-[200px]  h-[200px]  shadow-lg">
                                        <li className='flex delete-option'>
                                            
                                            {
                                            
                                            image ? <img src={URL.createObjectURL(image)} className="w-[200px] rounded-[100%] h-[200px]" alt="" />:<img src="./logo512.png" alt="logo" />
                                                    
                                            }

                                        </li>

                                    </ul>
                                )}
                            </button>
                        </div>

                    </div>


                    <div className='flex mb-[24px]'>
                        <div >
                            <label htmlFor="email" className='font-semibold text-sm text-gray-600 pb-1 block'>Email of Company</label>
                            <input ref={company_emailFieldRef} id='email_input' className='w-[595px] h-[56px] rounded-[8px]  text-sm' defaultValue={"marakana@gmail.com"} disabled={true} type="email" />
                        </div>

                        <div >
                            <button id='email_edit' onClick={() => handelEditFields([company_emailFieldRef], ['email_edit'], ['email_save'])} className='w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]' >
                                <svg width="124" height="56" viewBox="0 0 124 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="124" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M63.6801 16.8006L52.7335 28.3873C52.3201 28.8273 51.9201 29.6939 51.8401 30.2939L51.3468 34.6139C51.1735 36.1739 52.2935 37.2406 53.8401 36.9739L58.1335 36.2406C58.7335 36.1339 59.5735 35.6939 59.9868 35.2406L70.9335 23.6539C72.8268 21.6539 73.6801 19.3739 70.7335 16.5873C67.8001 13.8273 65.5735 14.8006 63.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M61.8533 18.7334C62.1329 20.5212 62.9981 22.1656 64.3134 23.4084C65.6286 24.6512 67.3192 25.4221 69.12 25.6001M50 41.3334H74" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button id='email_save' className='btn-save w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]'>
                                <svg width="124" height="56" viewBox="0 0 124 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="124" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>

                        </div>
                    </div>


                    <div className='flex'>
                        <div >
                            <label htmlFor="company_number" className='font-semibold text-sm text-gray-600 pb-1 block'>Number of Company</label>
                            <input ref={company_phone_numberFieldRef} defaultValue={"+112 777 89 567 44"} className='w-[595px] h-[56px] rounded-[8px] text-sm' type="tel" />
                        </div>

                        <div>
                            <button id='phone_number_edit' onClick={() => handelEditFields([company_phone_numberFieldRef], ['phone_number_edit'], ['phone_number_save'])} className='w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px]' >
                                <svg width="124" height="56" viewBox="0 0 124 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="124" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M63.6801 16.8006L52.7335 28.3873C52.3201 28.8273 51.9201 29.6939 51.8401 30.2939L51.3468 34.6139C51.1735 36.1739 52.2935 37.2406 53.8401 36.9739L58.1335 36.2406C58.7335 36.1339 59.5735 35.6939 59.9868 35.2406L70.9335 23.6539C72.8268 21.6539 73.6801 19.3739 70.7335 16.5873C67.8001 13.8273 65.5735 14.8006 63.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M61.8533 18.7334C62.1329 20.5212 62.9981 22.1656 64.3134 23.4084C65.6286 24.6512 67.3192 25.4221 69.12 25.6001M50 41.3334H74" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button id='phone_number_save' className=' btn-save w-[56px] h-[56px]  font-[500] rounded-[8px] mt-[24px] butn'>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                    <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormGSetting