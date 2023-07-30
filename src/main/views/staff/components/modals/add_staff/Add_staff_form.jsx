import React, { useState, useRef } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ToastContainer, toast } from 'react-toastify';

import './add_staff_form.scss'

const Add_staff_form = ({ data }) => {

    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^0\d{9}$/;
    const initialErrors = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',

        cin: '',
        homeAddress: '',
        phoneNumber: '',
        email: '',

        role: '',
        date_joined: '',
       
        password: '',
        statuse: '',
    };
    const [errors, setErrors] = useState(initialErrors);

    let image_p = {
        selectedFile: null
    };
    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const generatePassword = () => {


        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=0123456789';


        let generatedPassword = '';
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters.charAt(randomIndex);
        }

        setPassword(generatedPassword);
        setShowPassword(true);
    };
    const openModal = () => {
        setShowModal(true);
        document.body.style.position = 'fixed';
        document.body.style.width = '99%';


    }

    const closeModal = () => {
        setShowModal(false);
        document.body.style.position = 'static';
        document.body.style.width = '100%';
        setFormNo(1);

    }
    const formArray = [1, 2, 3, 4, 5];
    const [formNo, setFormNo] = useState(formArray[1]);

 
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',

        cin: '',
        homeAddress: '',
        phoneNumber: '',
        email: '',

        serial_number: '',
        role: '',
        date_joined: '',
        nssf_id_number: '',
        password: '',
        statuse: '',

        image: null,

    })



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

    const handleDeleteImage = () => {
        let copy = { ...state }


        copy.image = null;
        setState(copy);

        if (inputRef.current) {
            inputRef.current.value = null;
        }

    };

    const inputHandle = (e) => {


        if (e.target.name === "statuse") {

            let copy = { ...state }

            copy.statuse = e.target.value;
            setState(copy);

            alert(state.statuse);


        }
        else if (e.target.name === "image") {

            const file = e.target.files[0];

            if (file) {
                validateImage(file)
                    .then(() => {
                        image_p.selectedFile = file;
                        let copy = { ...state };
                        copy.image = image_p.selectedFile;
                        setState(copy);
                        console.log(state);
                    })
                    .catch((error) => {
                        toast.error(error)
                        // Display an error message to the user
                    });
            }




        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value


            })


        }







    }
    const modalRef = useRef(null);

    const next = () => {
       setErrors(initialErrors);
        const currentFormNo = formNo;
        let isValid = true;

        // Perform validation for each form step
        switch (currentFormNo) {
            case 1:
               
                if (!state.firstName) {
                    setErrors((prevErrors) => ({ ...prevErrors, firstName: 'First Name is required' }));
                    isValid = false;
                }
                if (!state.lastName) {
                    setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last Name is required' }));
                    isValid = false;
                }
                if (!state.dateOfBirth) {
                    setErrors((prevErrors) => ({ ...prevErrors, dateOfBirth: 'date of Birth is required' }));
                    isValid = false;
                }
                if (!state.gender) {
                    setErrors((prevErrors) => ({ ...prevErrors, gender: 'Gender is required' }));
                    isValid = false;
                }

                break;
            case 2:
                

                if (!state.cin) {
                    setErrors((prevErrors) => ({ ...prevErrors, cin: 'ID Card Number is required' }));
                    isValid = false;
                }
                if (!state.homeAddress) {
                    setErrors((prevErrors) => ({ ...prevErrors, homeAddress: 'Home Address is required' }));
                    isValid = false;
                }
                if (!phoneNumberRegex.test(state.phoneNumber)) {
                    setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Invalid phone number' }));
                    isValid = false;

                }
                
                if (!emailRegex.test(state.email)) {
                    setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
                    isValid = false;
                }
               
                break;
            case 3:
                

                if (!state.role) {
                    setErrors((prevErrors) => ({ ...prevErrors, role: 'Role is required' }));
                    isValid = false;
                }
                if (!state.date_joined) {
                    setErrors((prevErrors) => ({ ...prevErrors, date_joined: 'joining date is required' }));
                    isValid = false;
                }
                if (!state.password) {
                    setErrors((prevErrors) => ({ ...prevErrors, password: 'password is required' }));
                    isValid = false;
                }
                if (!state.statuse) {
                    setErrors((prevErrors) => ({ ...prevErrors, statuse: 'you must choose admin or crew member' }));
                    isValid = false;
                }

                break;
            case 4:
               
                isValid = true;
                break;
          
            default:
                break;
        }

        // Move to the next form step if validation passes
        if (isValid) {
            setFormNo(currentFormNo + 1);
            setErrors((prevErrors) => ({ ...prevErrors }));

        }
    

        if (modalRef.current) {
            modalRef.current.scrollTop = 0;
        }
    }
    const pre = () => {
        setFormNo(formNo - 1)
    }




    return (
        <>
            {showModal ? (
                <div className="modal_overlay">
                    <div ref={modalRef} className="justify-center flex overflow-x-hidden overflow-y-auto  fixed inset-0  outline-none focus:outline-none" >

                        <div className="relative mt-[140px] ml-[168px] ">
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
                                    <div className="modal-header ">


                                        <div className="flex  justify-center">
                                            <h1 className='text-[32px] font-[700] mt-[16px] leading-[28px]'>Add New Staff Member</h1>
                                        </div>
                                        <div className="flex justify-center">
                                            {
                                                formNo === 1 &&
                                                <p className='text-[20px] font-[500] mt-[8px] '>General information</p>
                                            }
                                            {
                                                formNo === 2 &&
                                                <p className='text-[20px] font-[500] mt-[8px] '>Personal Information</p>
                                            }
                                            {
                                                formNo === 3 &&
                                                <p className='text-[20px] font-[500] mt-[8px] '>Work Information</p>
                                            }
                                            {
                                                formNo === 4 &&
                                                <p className='text-[20px] font-[500] mt-[8px] '>Add Profile Picture</p>
                                            }
                                            {
                                                formNo === 5 &&
                                                <p className='text-[20px] font-[500] mt-[8px] '>Final Step</p>
                                            }
                                        </div>
                                        <hr className="h-[4px] mt-[24px] " />


                                    </div>

                                    <div className="modal-body">

                                        {
                                            formNo === 1 && <div className='flex flex-col items-center'>
                                                <div className='flex flex-col items-left  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="firtName">First Name</label>
                                                    <input value={state.firstName} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.firstName ? 'border-2 border-[#E82727]' : ''}`} type="text" name='firstName' placeholder='First Name' id='firstName' />
                                                    {errors.firstName && <p className="text-[#E82727] text-sm">{errors.firstName}</p>}

                                                </div>
                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="lastName">Last Name</label>
                                                    <input value={state.lastName} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.lastName ? 'border-2 border-[#E82727]' : ''}`} type="text" name='lastName' placeholder='Last Name' id='lastName' />
                                                    {errors.lastName && <p className="text-[#E82727] text-sm">{errors.lastName}</p>}

                                                </div>
                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="dateOfBirth">Date Of Birth</label>
                                                    <input value={state.dateOfBirth} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.dateOfBirth ? 'border-2 border-[#E82727]' : ''}`} type="date" name='dateOfBirth' placeholder='Date Of Birth' id='dateOfBirth' />
                                                    {errors.dateOfBirth && <p className="text-[#E82727] text-sm">{errors.dateOfBirth}</p>}

                                                </div>

                                                <div className='flex flex-col items-left mt-8  mb-2'>

                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="Gender">Gender</label>
                                                    <div className="select">
                                                        <select onChange={inputHandle} value={state.gender} className={`w-[368px] h-[56px] ${errors.gender ? 'border-2 border-[#E82727]' : ''}`} placeholder='select gender' name="gender" id="gender">
                                                            <option className='place_holder' value="" disabled>Choose Gender</option>
                                                            <option value="1" >Famel</option>
                                                            <option value="2" >Male</option>
                                                        </select>
                                                    </div>
                                                    {errors.gender && <p className="text-[#E82727] text-sm">{errors.gender}</p>}

                                                </div>



                                                <div className='mt-4 mb-[56px] gap-3 flex justify-center items-center'>
                                                    <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  btn-prev bg-[$white]'> <CancelOutlinedIcon className='mt-[-6px] mr-[2px] ' />Cancel</button>
                                                    <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>

                                                </div>
                                            </div>
                                        }

                                        {
                                            formNo === 2 && <div className='flex flex-col items-center'>
                                                <div className='flex flex-col items-left  mb-2 '>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="cin">ID Crad Number</label>
                                                    <input value={state.cin} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.cin ? 'border-2 border-[#E82727]' : ''}`} type="text" name='cin' placeholder='ID Card Number' id='cin' />
                                                    {errors.cin && <p className="text-[#E82727] text-sm">{errors.cin}</p>}

                                                </div>

                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="address">Home Address</label>
                                                    <textarea value={state.homeAddress} onChange={inputHandle} row='10' className={`w-[368px] h-[56px] ${errors.homeAddress ? 'border-2 border-[#E82727]' : ''}`} name='homeAddress' placeholder='Home Address' ></textarea>
                                                    {errors.homeAddress && <p className="text-[#E82727] text-sm">{errors.homeAddress}</p>}

                                                </div>
                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="PhoneNumber">Phone Number</label>
                                                    <input value={state.phoneNumber} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.phoneNumber ? 'border-2 border-[#E82727]' : ''}`} type="tel" name='phoneNumber' placeholder='Phone Number' id='phoneNumber' />
                                                    {errors.phoneNumber && <p className="text-[#E82727] text-sm">{errors.phoneNumber}</p>}

                                                </div>

                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="email">Email</label>
                                                    <input value={state.email} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.email ? 'border-2 border-[#E82727]' : ''}`} type="email" name='email' placeholder='Email' id='email' />
                                                    {errors.email && <p className="text-[#E82727] text-sm">{errors.email}</p>}

                                                </div>



                                                <div className='mt-4 mb-[56px] gap-3 flex justify-center items-center'>
                                                    <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  btn-prev bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                                    <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>


                                                </div>
                                            </div>
                                        }

                                        {
                                            formNo === 3 && <div className='flex flex-col items-center'>
                                                <div className='flex flex-col items-left  mb-2 '>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="serial_number">Serial Number</label>
                                                    <input value={state.serial_number} onChange={inputHandle} className=' w-[368px] h-[56px]' type="text" name='serial_number' placeholder='' id='serial_number' />
                                                </div>

                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <div>
                                                        <label className="block text-[20px] font-[500] text-[#606060] " htmlFor="countries_disabled">Role/Title</label>
                                                        <div className="select">
                                                            <select onChange={inputHandle} value={state.role} className={`w-[368px] h-[56px] ${errors.role ? 'border-2 border-[#E82727]' : ''}`} name="role" id="role">
                                                                <option className='place_holder' value="" disabled>Choose Role/Title</option>
                                                                {data.roles.map((role) => (
                                                                    <option key={role.id} value={role.id} >{role.role_name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        {errors.role && <p className="text-[#E82727] text-sm">{errors.role}</p>}

                                                    </div>
                                                </div>
                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="dateOfBirth">Joining Date</label>
                                                    <input value={state.date_joined} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.date_joined ? 'border-2 border-[#E82727]' : ''}`} type="date" name='date_joined' id='date_joined' />
                                                    {errors.date_joined && <p className="text-[#E82727] text-sm">{errors.date_joined}</p>}

                                                </div>

                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="nssf_id_number">NSSF ID Number</label>
                                                    <input value={state.nssf_id_number} onChange={inputHandle} className=' w-[368px] h-[56px] ' type="text" name='nssf_id_number' placeholder='Last Name' id='nssf_id_number' />
                                                
                                                </div>

                                                <div className='flex flex-col items-left mt-8  mb-2'>
                                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="password">Password</label>
                                                    <input value={password} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.password ? 'border-2 border-[#E82727]' : ''}`} type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' id='password' />
                                                    <div className="adons flex space-x-[8px]">
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
                                                    {errors.password && <p className="text-[#E82727] text-sm">{errors.password}</p>}

                                                    <div className='flex flex-col items-left mt-8  mb-2'>
                                                        <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="nssf_id_number">This New Member Is: </label>
                                                        <div className="input-group">
                                                            <div className="flex mt-[8px] space-x-[8px]">
                                                                <input onChange={inputHandle} className={`w-[24px] h-[24px] ${errors.statuse ? 'text-[#E82727] border-[#E82727]' : ''}`} type="radio" name="statuse" value="admin" checked={state.statuse === 'admin'} id="statuse" /><span className={`text-[16px] font-[500] ${errors.statuse ? 'text-[#E82727]' : ''}`}>Admin</span>

                                                            </div>
                                                            <div className="flex mt-[8px] space-x-[8px]">
                                                                <input onChange={inputHandle} className={`w-[24px] h-[24px] ${errors.statuse ? 'text-[#E82727] border-[#E82727]' : ''}`} type="radio" name="statuse" value="crew member" checked={state.statuse === 'crew member'} id="statuse" /><span className={`text-[16px] font-[500] ${errors.statuse ? 'text-[#E82727]' : ''}`}>Crew member</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {errors.statuse && <p className="text-[#E82727] text-sm">{errors.statuse}</p>}


                                                </div>



                                                <div className='mt-4 mb-[56px] gap-3 flex justify-center items-center'>
                                                    <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  btn-prev bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                                    <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>


                                                </div>
                                            </div>
                                        }

                                        {

                                            formNo === 4 && <div className='flex flex-col items-center'>
                                                <ToastContainer />
                                                <div className='flex flex-col justify-center w-[260px] h-[60px] mb-[32px] '>
                                                    <p className="text-[16px] text-center">
                                                        Make sure that the profile picture
                                                        that you want to upload is <span className="font-[500]">squared </span>
                                                        and at least <span className="font-[600]">1080x1080</span> in size
                                                    </p>
                                                </div>
                                                <div className='p-image flex items-center justify-center w-[200px] h-[200px] mb-[16px] rounded-[100%] '>

                                                    {state.image ? <img src={URL.createObjectURL(state.image)} className="w-[200px] rounded-[100%] h-[200px]" alt="" /> :


                                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M64.8515 57.9717C64.3182 57.9183 63.6782 57.9183 63.0915 57.9717C56.97 57.7638 51.1696 55.1814 46.9189 50.7714C42.6682 46.3614 40.3008 40.4701 40.3182 34.345C40.3182 21.2783 50.8782 10.665 63.9982 10.665C67.1044 10.609 70.1912 11.1653 73.0824 12.3022C75.9736 13.4391 78.6126 15.1344 80.8486 17.2912C83.0846 19.448 84.874 22.0241 86.1144 24.8724C87.3549 27.7207 88.0222 30.7854 88.0782 33.8916C88.1342 36.9978 87.5779 40.0847 86.441 42.9759C85.3041 45.8671 83.6088 48.506 81.452 50.742C79.2952 52.9781 76.7191 54.7674 73.8708 56.0079C71.0225 57.2483 67.9577 57.9156 64.8515 57.9717ZM38.1849 77.6517C25.2782 86.2917 25.2782 100.372 38.1849 108.958C52.8515 118.772 76.9049 118.772 91.5715 108.958C104.478 100.318 104.478 86.2383 91.5715 77.6517C76.9582 67.8917 52.9049 67.8917 38.1849 77.6517Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    }
                                                </div>


                                                <div className='upload-button  justify-center w-[324px]  mb-[64px] '>
                                                    <input type="file" onChange={inputHandle} name="image" id="image" hidden ref={inputRef} />


                                                    {state.image ? (<div className="flex  space-x-[8px] justify-center">
                                                        <div onClick={handleDeleteImage} className="delete-img ">

                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.4 6.3998L17.6 17.5998L6.4 6.3998ZM6.4 17.5998L17.6 6.3998L6.4 17.5998Z" fill="#D9D9D9" />
                                                                <path d="M6.4 6.3998L17.6 17.5998M6.4 17.5998L17.6 6.3998" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                            <span className="text-[12px] font-[500]">Delete Photo</span>

                                                        </div>

                                                        <button onClick={handleImageClick} className="change-uploaded-img ">

                                                            <span className="text-[12px] font-[500]">Change Photo</span>

                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.11 14.44 7.11 14.44M7.11 14.44H9.59M7.11 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>

                                                        </button>
                                                    </div>) : (<div onClick={handleImageClick} className="flex justify-center">
                                                        <button className=" upload-img w-[188px] h-[48px] items-center justify-center space-x-[8px] ">
                                                            <span>Upload the photo  </span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M18.4354 3.05957H5.56543C4.90239 3.05957 4.2665 3.32296 3.79766 3.7918C3.32882 4.26064 3.06543 4.89653 3.06543 5.55957V18.4396C3.06728 19.102 3.33126 19.7369 3.7997 20.2053C4.26814 20.6737 4.90296 20.9377 5.56543 20.9396H18.4354C19.0979 20.9377 19.7327 20.6737 20.2012 20.2053C20.6696 19.7369 20.9336 19.102 20.9354 18.4396V5.55957C20.9354 5.23127 20.8708 4.90618 20.7451 4.60286C20.6195 4.29955 20.4353 4.02395 20.2032 3.7918C19.971 3.55966 19.6955 3.37551 19.3921 3.24987C19.0888 3.12423 18.7637 3.05957 18.4354 3.05957ZM4.06543 5.55957C4.06543 5.16175 4.22346 4.78022 4.50477 4.49891C4.78607 4.21761 5.1676 4.05957 5.56543 4.05957H18.4354C18.8333 4.05957 19.2148 4.21761 19.4961 4.49891C19.7774 4.78022 19.9354 5.16175 19.9354 5.55957V14.2196L16.0554 10.3396C15.773 10.0609 15.3922 9.90457 14.9954 9.90457C14.5986 9.90457 14.2178 10.0609 13.9354 10.3396L9.37543 14.9096C9.27992 15.0011 9.15273 15.0522 9.02043 15.0522C8.88813 15.0522 8.76094 15.0011 8.66543 14.9096L8.10543 14.3496C7.82142 14.0739 7.44121 13.9198 7.04543 13.9198C6.64965 13.9198 6.26944 14.0739 5.98543 14.3496L4.06543 16.2696V5.55957ZM19.9354 18.4396C19.9354 18.8374 19.7774 19.2189 19.4961 19.5002C19.2148 19.7815 18.8333 19.9396 18.4354 19.9396H5.56543C5.1676 19.9396 4.78607 19.7815 4.50477 19.5002C4.22346 19.2189 4.06543 18.8374 4.06543 18.4396V17.6896L6.70043 15.0596C6.79436 14.969 6.91997 14.9188 7.05043 14.9196C7.18388 14.9187 7.31264 14.9688 7.41043 15.0596L7.96043 15.6196C8.24283 15.8983 8.62365 16.0546 9.02043 16.0546C9.41721 16.0546 9.79803 15.8983 10.0804 15.6196L14.6504 11.0496C14.6969 11.0027 14.7522 10.9655 14.8131 10.9401C14.8741 10.9147 14.9394 10.9017 15.0054 10.9017C15.0714 10.9017 15.1368 10.9147 15.1977 10.9401C15.2586 10.9655 15.3139 11.0027 15.3604 11.0496L19.9404 15.6296L19.9354 18.4396Z" fill="black" />
                                                                <path d="M8.06152 10.5654C7.56707 10.5654 7.08372 10.4188 6.6726 10.1441C6.26148 9.8694 5.94104 9.47895 5.75183 9.02214C5.56261 8.56532 5.5131 8.06266 5.60956 7.57771C5.70602 7.09275 5.94413 6.6473 6.29376 6.29766C6.64339 5.94803 7.08885 5.70993 7.5738 5.61347C8.05875 5.517 8.56142 5.56651 9.01823 5.75573C9.47505 5.94495 9.86549 6.26538 10.1402 6.67651C10.4149 7.08763 10.5615 7.57098 10.5615 8.06543C10.5615 8.72847 10.2981 9.36436 9.82929 9.8332C9.36045 10.302 8.72457 10.5654 8.06152 10.5654ZM8.06152 6.56543C7.76485 6.56543 7.47484 6.6534 7.22817 6.81823C6.9815 6.98305 6.78924 7.21732 6.67571 7.49141C6.56217 7.7655 6.53247 8.0671 6.59035 8.35807C6.64822 8.64904 6.79109 8.91631 7.00086 9.12609C7.21064 9.33587 7.47792 9.47873 7.76889 9.53661C8.05986 9.59449 8.36146 9.56478 8.63555 9.45125C8.90964 9.33772 9.14391 9.14546 9.30873 8.89879C9.47355 8.65211 9.56152 8.3621 9.56152 8.06543C9.56152 7.66761 9.40349 7.28608 9.12219 7.00477C8.84088 6.72347 8.45935 6.56543 8.06152 6.56543Z" fill="black" />
                                                            </svg>

                                                        </button>

                                                    </div>)}


                                                </div>


                                                <div className='mt-4 mb-[56px] gap-3 flex justify-center items-center'>
                                                    <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  btn-prev bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                                    <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>{state.image ? 'Next' : 'Skip'} <ArrowForwardIosIcon className='mt-[-4px]' /> </button>


                                                </div>

                                            </div>

                                        }

                                        {

                                            formNo === 5 && <div className='flex flex-col items-center'>

                                                <div className=' flex mb-[8px]  justify-center  '>

                                                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M55.9997 102.666C81.6663 102.666 102.666 81.6663 102.666 55.9997C102.666 30.333 81.6663 9.33301 55.9997 9.33301C30.333 9.33301 9.33301 30.333 9.33301 55.9997C9.33301 81.6663 30.333 102.666 55.9997 102.666Z" stroke="#3741D7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M36.167 55.9996L49.3737 69.2063L75.8337 42.793" stroke="#3741D7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </div>

                                                <div className="text-h1  flex justify-center">
                                                    <h1 className="font-[600] mb-[8px] text-[32px] ">Staff Member Added</h1>
                                                </div>

                                                <div className="text-p w-[380px] h-[44px] flex justify-center">

                                                    <p className="font-[500] text-center text-[16px] ">
                                                    {state.gender == 2 ? 'Mr.' : 'Miss.'} <span className="font-[700]"> {state.firstName + ' ' + state.lastName} </span> , has been added successfully
                                                        to the staff crew as a Professional Coach!
                                                    </p>
                                                </div>



                                                <div className='mt-[64px] mb-[56px] gap-3 flex justify-center items-center'>
                                                    <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  btn-prev bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                                    <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Confirm <ArrowForwardIosIcon className='mt-[-4px]' /> </button>


                                                </div>

                                            </div>

                                        }
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div >
            ) : null}
            <button onClick={openModal} className="btn-add-staff">
                Add Staff Member +
            </button>
        </>

    )
}

export default Add_staff_form