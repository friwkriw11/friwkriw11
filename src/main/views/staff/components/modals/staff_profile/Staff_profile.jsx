import React, { useState, useRef } from 'react';
import "./staff_profile.scss";
import { helper } from '../../../../../../assets/constants/helpers/helper.jsx';
import Tooltip from '@mui/material/Tooltip';
const Staff_profile = ({ single_staff, Data }) => {
    const passwordRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);
    const generatePassword = () => {


        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=0123456789';


        let generatedPassword = '';
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters.charAt(randomIndex);
        }


        const passwordInput = passwordRef.current;
        passwordInput.value = generatedPassword;
        setShowPassword(true);
    };

  
    const [image_p, setImage_p] = useState(single_staff.image);
    const inputfileRef = useRef(null);

    const handleImageClick = () => {
        inputfileRef.current.click();
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

   

    const [showModal, setShowModal] = React.useState(false);
    const [copyStatus, setCopyStatus] = useState('');
    const { toggleElementVisibility } = helper();

    function getRoleNameById(roleId) {
        const role = Data.roles.find(role => role.id === roleId);
        return role ? role.role_name : '';
    }


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


    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyStatus('Copied!');
        });
    };


    return (


        <>
            <button onClick={openModal} className='sh_button w-[126px] h-[39px]'>Show Profile</button>

            {showModal ? (

                <div className="modal_overlay">
                    <div className="justify-center flex overflow-x-hidden items-center  fixed inset-0  outline-none focus:outline-none" >

                        <div className=" mt-[1160px] mb-[10px] ml-[194px] ">
                            {/*content*/}
                            <div className="border-0 modal_container rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="header ">
                                    <div className=" header flex items-start justify-between ">
                                        <h3 className="cursor-pointer  ">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="20" r="3" transform="rotate(-90 10 20)" fill="black" />
                                                <circle cx="20" cy="20" r="3" transform="rotate(-90 20 20)" fill="black" />
                                                <circle cx="30" cy="20" r="3" transform="rotate(-90 30 20)" fill="black" />
                                            </svg>
                                        </h3>

                                        <svg className='cursor-pointer' onClick={closeModal} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28 12L12 28M12 12L28 28" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>

                                    </div>

                                    <div className='  flex items-center justify-center mt-[24px]'>
                                        <input type="file" name="image" id="image" hidden ref={inputfileRef} />


                                        {
                                            <div className='p-image'>
                                                <button onClick={handleImageClick} className="change-uploaded-img  ">

                                                    <span className="text-[12px] font-[500]">Change Photo</span>

                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.11 14.44 7.11 14.44M7.11 14.44H9.59M7.11 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </button>

                                                {image_p !== '' ? <img src={URL.createObjectURL(single_staff.image)} className="w-[200px] rounded-[100%] h-[200px]" alt="" /> :
                                                    <svg className='default-image' width="160px" height="160px" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M64.8515 57.9717C64.3182 57.9183 63.6782 57.9183 63.0915 57.9717C56.97 57.7638 51.1696 55.1814 46.9189 50.7714C42.6682 46.3614 40.3008 40.4701 40.3182 34.345C40.3182 21.2783 50.8782 10.665 63.9982 10.665C67.1044 10.609 70.1912 11.1653 73.0824 12.3022C75.9736 13.4391 78.6126 15.1344 80.8486 17.2912C83.0846 19.448 84.874 22.0241 86.1144 24.8724C87.3549 27.7207 88.0222 30.7854 88.0782 33.8916C88.1342 36.9978 87.5779 40.0847 86.441 42.9759C85.3041 45.8671 83.6088 48.506 81.452 50.742C79.2952 52.9781 76.7191 54.7674 73.8708 56.0079C71.0225 57.2483 67.9577 57.9156 64.8515 57.9717ZM38.1849 77.6517C25.2782 86.2917 25.2782 100.372 38.1849 108.958C52.8515 118.772 76.9049 118.772 91.5715 108.958C104.478 100.318 104.478 86.2383 91.5715 77.6517C76.9582 67.8917 52.9049 67.8917 38.1849 77.6517Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                }

                                            </div>

                                        }
                                    </div>
                                    <div className='flex items-center justify-center mt-[-16px]  '>
                                        <div className='staff-status flex justify-center '>
                                            <h1 className='text-[16px] font-[600]'>Admin</h1>
                                        </div>
                                    </div>

                                    <div className="full_name flex justify-center mt-[12px]">
                                        <h1 className='font-[700] text-[32px]'>Yassin Folan</h1>
                                    </div>

                                    <div className="role flex justify-center">
                                        <h1 className='font-[500] text-[20px]'>General Director</h1>
                                    </div>

                                    <hr className='h-[4px] mt-[48px] mb-[48px]' />
                                </div>



                                {/*body*/}
                                <div className="staff_modal_body ">

                                    <div className="step">
                                        <div className="step-1 mb-[48px]">
                                            <h1 className='step-titel '>General Informations</h1>

                                            <div className='staff-infos'>
                                                <table className="staff-table ">

                                                    <tbody>
                                                        <tr>
                                                            <td className='lable start'><div className="flex space-x-[8px] items-center"> <h1 >First Name</h1>


                                                                <div className='flex space-x-[4px] ' id='fname'>
                                                                    <h2>{single_staff.first_name}</h2>
                                                                    <Tooltip title="copy" >

                                                                        <svg onClick={() => handleCopy(single_staff.first_name)} data-tooltip-target="tooltip-default" className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </Tooltip>
                                                                </div>

                                                                <div id="fname_input" className='edit-input'>
                                                                    <input type="text" className='w-[368px]' name="fname" id="fname" defaultValue={single_staff.first_name} />
                                                                </div>

                                                            </div></td>

                                                            <td className='edit-btn'>
                                                                <div id='fname_editBtn' onClick={() => toggleElementVisibility(["fname", "fname_editBtn"], ["fname_input", "fname-icon-save"])} className='icon-edit fname_editBtn'> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                </div>
                                                                <div id='fname-icon-save' className="icon-save">
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td className='lable'> <div className="flex space-x-[8px] items-center"> <h1 >Last Name</h1>
                                                                <div className='flex space-x-[4px] ' id="lname">


                                                                    <h2>{single_staff.last_name}</h2>
                                                                    <Tooltip title="copy" >
                                                                        <svg onClick={() => handleCopy(single_staff.lasname)} className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


                                                                        </svg>
                                                                    </Tooltip>
                                                                </div>
                                                                <div id="lname_input" className='edit-input'>
                                                                    <input type="text" className='w-[368px]' name="lname" id="lname" defaultValue={single_staff.last_name} />
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["lname", "lname_editBtn"], ["lname_input", "lname-icon-save"])} className='icon-edit' id="lname_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div id='lname-icon-save' className="icon-save">
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td className='lable'><div className="flex space-x-[8px] items-center"> <h1 >Date of Birth</h1>
                                                                <div id='dateOfBirth'>
                                                                    <h2>{single_staff.date_of_birth}</h2>

                                                                </div>

                                                                <div id="dateOfBirth_input" className='edit-input'>

                                                                    <input className=' w-[368px] h-[56px] ' type="date" name='dateOfBirth' id='dateOfBirth' defaultValue={single_staff.date_of_birth} />

                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["dateOfBirth", "dateOfBirth_editBtn"], ["dateOfBirth_input", "dateOfBirth-icon-save"])} className='icon-edit' id="dateOfBirth_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='dateOfBirth-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td className='lable end'>
                                                                <div className="flex space-x-[8px] items-center"> <h1 >Gender</h1>
                                                                    <div id="gender">
                                                                        <h2>{single_staff.gender}</h2>
                                                                    </div>
                                                                    <div id="gender_input" className='edit-input'>
                                                                        <div className="select">
                                                                            <select defaultValue={single_staff.gender} className=' w-[368px] h-[56px] ' placeholder='select gender' name="gender" id="gender">
                                                                                <option className='place_holder' value="" disabled>Choose Gender</option>
                                                                                <option value="Famel" >Famel</option>
                                                                                <option value="Male" >Male</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["gender", "gender_editBtn"], ["gender_input", "gender-icon-save"])} className='icon-edit' id="gender_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='gender-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="step-2 mb-[48px]">
                                            <h1 className='step-titel '>Personal Informations</h1>

                                            <div className='staff-infos'>
                                                <table className="staff-table ">

                                                    <tbody>
                                                        <tr>
                                                            <td className='lable start'><div className="flex space-x-[8px] items-center"> <h1 >ID Number</h1>


                                                                <div className='flex space-x-[4px] ' id='id_number'>
                                                                    <h2>{single_staff.id_card_number}</h2>
                                                                    <Tooltip title="copy" >

                                                                        <svg onClick={() => handleCopy(single_staff.id_card_number)} data-tooltip-target="tooltip-default" className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </Tooltip>
                                                                </div>

                                                                <div id="id_number_input" className='edit-input'>
                                                                    <input type="text" className='w-[368px]' name="id_number" id="id_number" defaultValue={single_staff.id_card_number} />
                                                                </div>

                                                            </div></td>

                                                            <td className='edit-btn'>
                                                                <div id='id_number_editBtn' onClick={() => toggleElementVisibility(["id_number", "id_number_editBtn"], ["id_number_input", "id_number-icon-save"])} className='icon-edit id_number_editBtn'> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                </div>
                                                                <div id='id_number-icon-save' className="icon-save">
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td className='lable'> <div className="flex space-x-[8px] items-center"> <h1 >Phone Number</h1>
                                                                <div className='flex space-x-[4px] ' id="phone_number">


                                                                    <h2>{single_staff.phone_number}</h2>
                                                                    <Tooltip title="copy" >
                                                                        <svg onClick={() => handleCopy(single_staff.phone_number)} className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


                                                                        </svg>
                                                                    </Tooltip>
                                                                </div>
                                                                <div id="phone_number_input" className='edit-input'>
                                                                    <input type="text" className='w-[368px]' name="phone_number" id="phone_number" defaultValue={single_staff.phone_number} />
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["phone_number", "phone_number_editBtn"], ["phone_number_input", "phone_number-icon-save"])} className='icon-edit' id="phone_number_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div id='phone_number-icon-save' className="icon-save">
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td className='lable'><div className="flex space-x-[8px] items-center"> <h1 >Email Address</h1>
                                                                <div className='flex space-x-[4px] ' id='email_address'>
                                                                    <h2> {single_staff.email} </h2>

                                                                    <Tooltip title="copy" >
                                                                        <svg onClick={() => handleCopy(single_staff.email)} className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


                                                                        </svg>
                                                                    </Tooltip>
                                                                </div>

                                                                <div id="email_address_input" className='edit-input'>

                                                                    <input className=' w-[368px] h-[56px] ' type="email" name='email_address' id='email_address' defaultValue={single_staff.email} />

                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["email_address", "email_address_editBtn"], ["email_address_input", "email_address-icon-save"])} className='icon-edit' id="email_address_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='email_address-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td className='lable end'>
                                                                <div className="flex space-x-[8px] items-center"> <h1 >Home Address</h1>
                                                                    <div className='flex space-x-[4px] ' id="home_address">
                                                                        <h2> {single_staff.home_address} </h2>
                                                                        <Tooltip title="copy" >
                                                                            <svg onClick={() => handleCopy(single_staff.home_address)} className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


                                                                            </svg>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <div id="home_address_input" className='edit-input'>
                                                                        <input type="text" className='w-[368px]' name="home_address" id="home_address" defaultValue={single_staff.home_address} />

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["home_address", "home_address_editBtn"], ["home_address_input", "home_address-icon-save"])} className='icon-edit' id="home_address_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='home_address-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="step-3 mb-[48px]">
                                            <h1 className='step-titel '>Job Informations</h1>

                                            <div className='staff-infos'>
                                                <table className="staff-table ">

                                                    <tbody>
                                                        <tr>
                                                            <td className='lable start'><div className="flex space-x-[8px] items-center"> <h1 >Role/Title</h1>


                                                                <div id='role'>
                                                                    <h2>{getRoleNameById(single_staff.role_id)}</h2>

                                                                </div>

                                                                <div id="role_input" className='edit-input'>
                                                                    <div className="select">
                                                                        <select defaultValue={single_staff.role_id} className=' w-[368px] h-[56px] ' name="role" id="role">
                                                                            <option className='place_holder' value="" disabled>Choose Role/Title</option>
                                                                            {Data.roles.map((role) => (
                                                                                <option key={role.id} value={role.id}  >{role.role_name}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>                                                                </div>

                                                            </div></td>

                                                            <td className='edit-btn'>
                                                                <div id='role_editBtn' onClick={() => toggleElementVisibility(["role", "role_editBtn"], ["role_input", "role-icon-save"])} className='icon-edit role_editBtn'> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                </div>
                                                                <div id='role-icon-save' className="icon-save">
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td className='lable'> <div className="flex space-x-[8px] items-center"> <h1 >Serial Number</h1>
                                                                <div className='flex space-x-[4px] ' id="serial_number">


                                                                    <h2> {single_staff.serial_number} </h2>
                                                                    <Tooltip title="copy" >
                                                                        <svg onClick={() => handleCopy(single_staff.serial_number)} className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


                                                                        </svg>
                                                                    </Tooltip>
                                                                </div>
                                                                <div id="serial_number_input" className='edit-input'>
                                                                    <input type="text" className='w-[368px]' name="serial_number" id="serial_number" defaultValue={single_staff.serial_number} />
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["serial_number", "serial_number_editBtn"], ["serial_number_input", "serial_number-icon-save"])} className='icon-edit' id="serial_number_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div id='serial_number-icon-save' className="icon-save">
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td className='lable'><div className="flex space-x-[8px] items-center"> <h1 >Status</h1>
                                                                <div id='status'>
                                                                    <h2> {single_staff.status} </h2>
                                                                </div>

                                                                <div id="status_input" className='edit-input'>

                                                                    <div className="select">
                                                                        <select value={single_staff.status} className=' w-[368px] h-[56px] ' placeholder='select gender' name="gender" id="gender">
                                                                            <option className='place_holder' value="" disabled>Choose status</option>
                                                                            <option value="admin" >Admin</option>
                                                                            <option value="crew member" >Crew member</option>
                                                                        </select>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["status", "status_editBtn"], ["status_input", "status-icon-save"])} className='icon-edit' id="status_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='status-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td className='lable'>
                                                                <div className="flex space-x-[8px] items-center"> <h1 >Nssf Number</h1>
                                                                    <div className="flex space-x-[4px]" id="nssf_id_number">
                                                                        <h2> {single_staff.nssf_id_number} </h2>
                                                                        <Tooltip title="copy" >
                                                                            <svg onClick={() => handleCopy(single_staff.nssf_id_number)} className='copy-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />


                                                                            </svg>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <div id="nssf_id_number_input" className='edit-input'>
                                                                        <input className=' w-[368px] h-[56px] ' type="text" name='nssf_id_number' id='nssf_id_number' defaultValue={single_staff.nssf_id_number} />

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["nssf_id_number", "nssf_id_number_editBtn"], ["nssf_id_number_input", "nssf_id_number-icon-save"])} className='icon-edit' id="nssf_id_number_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='nssf_id_number-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td className='lable'>
                                                                <div className="flex space-x-[8px] items-center"> <h1 >Joining Date</h1>
                                                                    <div id="date_joined">
                                                                        <h2> {single_staff.date_joined} </h2>
                                                                    </div>
                                                                    <div id="date_joined_input" className='edit-input'>
                                                                        <input className=' w-[368px] h-[56px] ' type="date" name='date_joined' id='date_joined' defaultValue={single_staff.date_joined} />

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["date_joined", "date_joined_editBtn"], ["date_joined_input", "date_joined-icon-save"])} className='icon-edit' id="date_joined_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='date_joined-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td className='lable'>
                                                                <div className="flex space-x-[8px] items-center"> <h1 >Password</h1>
                                                                    <div id="password">
                                                                        <h2> {"********************"} </h2>
                                                                    </div>
                                                                    <div id="password_input" className='edit-input'>
                                                                        <input defaultValue={single_staff.password} className=' w-[368px] h-[56px]' type={showPassword ? 'text' : 'password'} name='password' ref={passwordRef} id='password' />
                                                                        <div className="adons_ flex space-x-[8px]">
                                                                            <button onClick={() => setShowPassword(!showPassword)}>
                                                                                {
                                                                                    showPassword === true ?
                                                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <g clipPath="url(#clip0_678_864)">
                                                                                                <path d="M20.7732 15.9999C20.7732 18.6399 18.6399 20.7732 15.9999 20.7732C13.3599 20.7732 11.2266 18.6399 11.2266 15.9999C11.2266 13.3599 13.3599 11.2266 15.9999 11.2266C18.6399 11.2266 20.7732 13.3599 20.7732 15.9999Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                                <path d="M15.9998 27.0266C20.7065 27.0266 25.0931 24.2533 28.1465 19.4533C29.3465 17.5733 29.3465 14.4133 28.1465 12.5333C25.0931 7.73329 20.7065 4.95996 15.9998 4.95996C11.2931 4.95996 6.90646 7.73329 3.85312 12.5333C2.65312 14.4133 2.65312 17.5733 3.85312 19.4533C6.90646 24.2533 11.2931 27.0266 15.9998 27.0266Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath id="clip0_678_864">
                                                                                                    <rect width="32" height="32" fill="white" />
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                        :
                                                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M19.3734 12.6268L12.6268 19.3734C11.7321 18.4788 11.2295 17.2654 11.2295 16.0001C11.2295 15.3736 11.3529 14.7533 11.5926 14.1745C11.8324 13.5957 12.1838 13.0698 12.6268 12.6268C13.0698 12.1838 13.5957 11.8324 14.1745 11.5926C14.7533 11.3529 15.3736 11.2295 16.0001 11.2295C17.2654 11.2295 18.4788 11.7321 19.3734 12.6268Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                            <path d="M23.7598 7.69363C21.4265 5.93363 18.7598 4.97363 15.9998 4.97363C11.2931 4.97363 6.90646 7.74697 3.85312 12.547C2.65312 14.427 2.65312 17.587 3.85312 19.467C4.90646 21.1203 6.13312 22.547 7.46646 23.6936M11.2265 26.0403C12.7465 26.6803 14.3598 27.027 15.9998 27.027C20.7065 27.027 25.0931 24.2536 28.1465 19.4536C29.3465 17.5736 29.3465 14.4136 28.1465 12.5336C27.7065 11.8403 27.2265 11.187 26.7331 10.5736" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                            <path d="M20.6803 16.9337C20.4997 17.8638 20.0452 18.7186 19.3753 19.3886C18.7053 20.0586 17.8504 20.513 16.9203 20.6937M12.627 19.3737L2.66699 29.3337M29.3337 2.66699L19.3737 12.627" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                        </svg>

                                                                                }

                                                                            </button>
                                                                            <span>
                                                                                <svg width="1" height="36" viewBox="0 0 1 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="36" stroke="#808080" />
                                                                                </svg>

                                                                            </span>

                                                                            <button onClick={generatePassword} >
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M22.9997 12.0003C22.9997 18.072 18.072 22.9997 12.0003 22.9997C5.92868 22.9997 2.2219 16.884 2.2219 16.884M2.2219 16.884H7.19361M2.2219 16.884V22.3837M1.00098 12.0003C1.00098 5.92868 5.88469 1.00098 12.0003 1.00098C19.3369 1.00098 22.9997 7.11661 22.9997 7.11661M22.9997 7.11661V1.61694M22.9997 7.11661H18.116" stroke="black" strokeWidth="1.23743" strokeLinecap="round" strokeLinejoin="round" />
                                                                                </svg>

                                                                            </button>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='edit-btn'><div onClick={() => toggleElementVisibility(["password", "password_editBtn"], ["password_input", "password-icon-save"])} className='icon-edit' id="password_editBtn"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.6792 4.80061L6.73248 16.3873C6.31915 16.8273 5.91915 17.6939 5.83915 18.2939L5.34582 22.6139C5.17248 24.1739 6.29248 25.2406 7.83915 24.9739L12.1325 24.2406C12.7325 24.1339 13.5725 23.6939 13.9858 23.2406L24.9325 11.6539C26.8258 9.65395 27.6792 7.37395 24.7325 4.58728C21.7992 1.82728 19.5725 2.80061 17.6792 4.80061Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M15.8533 6.7334C16.1329 8.5212 16.9981 10.1656 18.3134 11.4084C19.6286 12.6512 21.3192 13.4221 23.12 13.6001M4 29.3334H28" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg></div>
                                                                <div className="icon-save" id='password-icon-save'>
                                                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                                        <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>

                                                                </div>
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            ) : null}
        </>




    )
}

export default Staff_profile