import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';
import Chip from '@mui/material/Chip';
const FormMember = ({ data }) => {

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
        emergencyPhoneNumber: '',
        email: '',

        diseas: "",

        choosenPlan: "",
        customPlan: "",
    };
    const [errors, setErrors] = useState(initialErrors);

    const handleChipClick = (workoutId, checkedId, notCheckedId, checkedClassName, chipId) => {
        const checkedElement = document.getElementById(checkedId);
        const notCheckedElement = document.getElementById(notCheckedId);
        const checkedChip = document.getElementById(chipId);
        const checkedSvg = document.getElementById(checkedClassName);
        const notCheckedSvg = document.getElementById(notCheckedId);

        if (checkedElement && notCheckedElement && checkedChip && checkedSvg && notCheckedSvg) {
            checkedElement.classList.toggle('hide');
            notCheckedElement.classList.toggle('hide');
            checkedChip.classList.toggle('checkedChip');
        }
        const selectedWorkout = data.aviableWorkouts.find((workout) => workout.id == workoutId);
        console.log(selectedWorkout)
      

        const copy = { ...state };

        if (notCheckedElement.classList.contains('hide')) {
            // Workout is checked, add it to customPlan array if not already present
            if (!copy.customPlan.includes(workoutId)) {

                copy.customPlan.push(workoutId);

                     // Filter the available workouts based on customPlan
                     const selectedWorkouts = data.aviableWorkouts.filter(
                        (workout) => copy.customPlan.includes(workout.id)
                    );
                    // Calculate the total amount
                    const totalAmount = selectedWorkouts.reduce((sum, workout) => sum + workout.price, 0);
    
                    //set the total in total_amount 
                    copy.total_amount = totalAmount * copy.numberOfMonths;


            }
        } else {
            // Workout is unchecked, remove it from customPlan array if present
            const index = copy.customPlan.indexOf(workoutId);
            if (index !== -1) {
                copy.customPlan.splice(index, 1);
                  // Filter the available workouts based on customPlan
                     const selectedWorkouts = data.aviableWorkouts.filter(
                        (workout) => copy.customPlan.includes(workout.id)
                    );
                    // Calculate the total amount
                    const totalAmount = selectedWorkouts.reduce((sum, workout) => sum + workout.price, 0);
    
                    //set the total in total_amount 
                    copy.total_amount = totalAmount * copy.numberOfMonths;


            }
        }

        setState(copy);

        console.log(copy);
    };





    const formArray = [1, 2, 3, 4, 5];
    const [formNo, setFormNo] = useState(formArray[0]);
    const [formLabel, setFormLabel] = useState('Profile Information');

    const [toggle, setToggle] = useState(false);

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
    ])

    let image_p = {
        selectedFile: null
    };
    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',

        cin: '',
        homeAddress: '',
        phoneNumber: '',
        emergencyPhoneNumber: '',
        email: '',
        HasMedicalsHistory: false,
        diseas: "",

        choosenPlan: "",
        numberOfMonths: 1,
        AdditionalFeatures: [],
        customPlan: [],
        total_amount: 0

    })

    // Function to calculate the total amount
    const calculateTotalAmount = (planId, numberOfMonths) => {
        // Find the plan based on the given planId
        const selectedPlan = data.plans.find((plan) => plan.id == planId);
        if (!selectedPlan || !selectedPlan.price) {
            console.error(`Invalid planId ${planId} or missing price property.`);
            return 0; // Return 0 if the plan with the given planId is not found or missing price property
        }
        // Calculate the total amount by multiplying the plan's price with the number of months
        const totalAmount = selectedPlan.price * numberOfMonths;

        return totalAmount;
    };

    const inputHandle = (e) => {
        let copy = { ...state }

        if (e.target.name === "additionalFaetures") {
            if (e.target.checked) {
                copy.AdditionalFeatures.push(e.target.value)
            } else {
                copy.AdditionalFeatures = copy.AdditionalFeatures.filter(el => el !== e.target.value)
            }
            setState(copy)
        } else if (e.target.name === "HasMedicalsHistory") {

            setToggle(!toggle);
            copy.HasMedicalsHistory = !toggle;
            setState(copy);
        } else if (e.target.name === "image") {

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




        } else if (e.target.name === "choosenPlan") {

            copy.choosenPlan = e.target.value;
            if (e.target.value !== 'custom') {
                copy.total_amount = calculateTotalAmount(e.target.value, state.numberOfMonths);


            }
            else {
                copy.total_amount = 0;
            }

            setState(copy);

        } else if (e.target.name === "up_btn") {

            copy.numberOfMonths = parseInt(copy.numberOfMonths) + 1;
            if (state.choosenPlan !== "" && state.choosenPlan !== 'custom') {
                copy.total_amount = calculateTotalAmount(state.choosenPlan, copy.numberOfMonths);

            }
            if (state.choosenPlan == 'custom' && state.customPlan.length !== 0) {

                // Filter the available workouts based on customPlan
                const selectedWorkouts = data.aviableWorkouts.filter(
                    (workout) => state.customPlan.includes(workout.id)
                );
                // Calculate the total amount
                const totalAmount = selectedWorkouts.reduce((sum, workout) => sum + workout.price, 0);

                //set the total in total_amount 
                copy.total_amount = totalAmount * copy.numberOfMonths;
            }
            setState(copy);
            console.log(state.total_amount);
        } else if (e.target.name === "down_btn") {

            let months = copy.numberOfMonths - 1;
            if (months < 1) {
                months = 1;
            }
            copy.numberOfMonths = months;
            if (state.choosenPlan !== "" && state.choosenPlan !== 'custom') {
                copy.total_amount = calculateTotalAmount(state.choosenPlan, months);

            }
            if (state.choosenPlan == 'custom' && state.customPlan.length !== 0) {

                // Filter the available workouts based on customPlan
                const selectedWorkouts = data.aviableWorkouts.filter(
                    (workout) => state.customPlan.includes(workout.id)
                );
                // Calculate the total amount
                const totalAmount = selectedWorkouts.reduce((sum, workout) => sum + workout.price, 0);

                //set the total in total_amount 
                copy.total_amount = totalAmount * copy.numberOfMonths;
            }
            setState(copy);
            console.log(state.total_amount);


        }
        else if (e.target.name === "numberOfMonths") {

            if (e.target.value < 1) {
                e.target.value = "";
            }
            copy.numberOfMonths = e.target.value;

            if (state.choosenPlan !== "" && state.choosenPlan !== 'custom') {
                copy.total_amount = calculateTotalAmount(state.choosenPlan, e.target.value);

            }
            if (state.choosenPlan == 'custom' && state.customPlan.length !== 0) {

                // Filter the available workouts based on customPlan
                const selectedWorkouts = data.aviableWorkouts.filter(
                    (workout) => state.customPlan.includes(workout.id)
                );
                // Calculate the total amount
                const totalAmount = selectedWorkouts.reduce((sum, workout) => sum + workout.price, 0);

                //set the total in total_amount 
                copy.total_amount = totalAmount * e.target.value;
            }
            setState(copy);


        }
        else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        }

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
    const handleDeleteImage = () => {
        let copy = { ...state }


        copy.image = null;
        setState(copy);

        if (inputRef.current) {
            inputRef.current.value = null;
        }

    };


    const next = () => {

        
        setErrors(initialErrors);
        const currentFormNo = formNo;
        let isValid = true;

        // Perform validation for each form step
        switch (currentFormNo) {
            case 1:
                setFormLabel('Personal Informations');
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
                setFormLabel('Plan choosing');

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
                if (!phoneNumberRegex.test(state.emergencyPhoneNumber)) {
                    setErrors((prevErrors) => ({ ...prevErrors, emergencyPhoneNumber: 'Invalid emergency phone number' }));
                    isValid = false;
                }


                if (!emailRegex.test(state.email)) {
                    setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
                    isValid = false;
                }
                if (state.HasMedicalsHistory === true && !state.diseas) {
                    setErrors((prevErrors) => ({ ...prevErrors, diseas: 'Diseas is required' }));
                    isValid = false;
                }
                break;
            case 3:
                setFormLabel('Profile Photo');

                if (!state.choosenPlan) {
                    setErrors((prevErrors) => ({ ...prevErrors, choosenPlan: 'choose Plan is required' }));
                    isValid = false;
                }
                if (state.choosenPlan === "custom" && state.customPlan.length === 0) {
                    setErrors((prevErrors) => ({ ...prevErrors, customPlan: 'custom Plan is required' }));
                    isValid = false;
                }
                break;
            case 4:
                setFormLabel('Checkout');
                isValid = true;
                break;
            case 5:
                
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
    };

    const pre = () => {
        setFormNo(formNo - 1);

        switch (formNo - 2) {
            case 0:
                setFormLabel('Profile Informations');

                break;
            case 1:
                setFormLabel('Personal Informations');

                break;
            case 2:
                setFormLabel('Plan choosing');
                break;
            case 3:
                setFormLabel('Profile Photo');
                break;
            case 4:
                setFormLabel('Checkout');
                break;
            default:
                setFormLabel('Profile Informations');
        }

    }
    const finalSubmit = () => {
        if (state.post) {
            toast.success('form submit success')
        } else {
            toast.error('Please fillup all input field')
        }
    }


    return (

        <div>

            <div className="md-stepper-horizontal">
                {
                    formArray.map((v, i) =>
                        <div key={i} className={`md-step ${formNo - 1 === i ? 'active' : ''} ${formNo > i + 1 ? 'done' : ''}`}>
                            <div className={`md-step-circle  ${formNo - 1 === i ? 'active-circle' : 'inactive'} `}></div>
                            <div className={`md-step-title `}> <span>{formLabel}</span></div>
                            <div className={`md-step-bar-left flex items-center `}></div>
                            <div className={`md-step-bar-right flex items-center  `}></div>
                        </div>
                    )
                }
            </div>



            <div className="flex justify-center items-center">

                <ToastContainer />

                <div className="card w-[630px]  rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.24)] bg-[#FFFF] p-5">

                    {
                        formNo === 1 && <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-left mt-8 mb-2'>
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
                                {errors.lastName && <p className="text-[#E82727] text-sm">{errors.Gender}</p>}

                            </div>



                            <div className='mt-4 gap-3 flex justify-center items-center'>
                                <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[$white]'> <CancelOutlinedIcon className='mt-[-6px] mr-[2px] ' />Cancel</button>
                                <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>

                            </div>
                        </div>
                    }

                    {
                        formNo === 2 && <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-left mt-8  mb-2 '>
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
                                <input value={state.phoneNumber} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.phoneNumber ? 'border-2 border-[#E82727]' : ''}`} type="text" name='phoneNumber' placeholder='Phone Number' id='phoneNumber' />
                                {errors.phoneNumber && <p className="text-[#E82727] text-sm">{errors.phoneNumber}</p>}

                            </div>
                            <div className='flex flex-col items-left mt-8  mb-2'>
                                <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="emargencyPhoneNumber">Emergency Phone Number</label>
                                <input value={state.emergencyPhoneNumber} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.emergencyPhoneNumber ? 'border-2 border-[#E82727]' : ''}`} type="text" name='emergencyPhoneNumber' placeholder='Emengency Phone Number' id='emergencyPhoneNumber' />
                                {errors.emergencyPhoneNumber && <p className="text-[#E82727] text-sm">{errors.emergencyPhoneNumber}</p>}

                            </div>
                            <div className='flex flex-col items-left mt-8  mb-2'>
                                <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="email">Email</label>
                                <input value={state.email} onChange={inputHandle} className={`w-[368px] h-[56px] ${errors.email ? 'border-2 border-[#E82727]' : ''}`} type="email" name='email' placeholder='Email' id='email' />
                                {errors.email && <p className="text-[#E82727] text-sm">{errors.email}</p>}

                            </div>
                            <div className='mt-4 gap-3 flex justify-center items-left'>

                                <label className="relative inline-flex right-[44px] cursor-pointer">
                                    <span className="text-[16px] font-[500] text-[#606060] dark:text-black-300">He has any medical history?</span>
                                </label>
                                <label className="flex items-center relative w-max left-[40px] cursor-pointer select-none">


                                    <input type="checkbox" checked={state.HasMedicalsHistory} onChange={inputHandle} name="HasMedicalsHistory" className="appearance-none transition-colors cursor-pointer w-[66px] h-[32px] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2  bg-[#E74747]" />
                                    <span className="absolute font-[500] text-[12px] uppercase right-[8px] text-[#000]"> NO </span>
                                    <span className="absolute font-[500] text-[12px] uppercase right-[40px] text-[#000]"> YES </span>
                                    <span className="w-[24px] h-[24px] mt-[1px] right-[36px] absolute rounded-full transform transition-transform bg-[#737373]" />

                                </label>
                            </div>
                            {state.HasMedicalsHistory === true && (
                                <div className='flex flex-col items-left mt-2  mb-2'>
                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="diseas">Diseas</label>
                                    <textarea onChange={inputHandle} value={state.diseas} className={`w-[368px] h-[56px] ${errors.diseas ? 'border-2 border-[#E82727]' : ''}`} name='diseas' placeholder='Diseas' id='diseas' />
                                    {errors.diseas && <p className="text-[#E82727] text-sm">{errors.diseas}</p>}

                                </div>
                            )}



                            <div className='mt-4 gap-3 flex justify-center items-center'>
                                <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>


                            </div>
                        </div>
                    }
                    {
                        formNo === 3 && <div className='flex flex-col items-center'>
                            <div className='gap-4 flex  items-center mb-4'>
                                <div>
                                    <label className="block text-[20px] font-[500] text-[#606060] " htmlFor="countries_disabled">Chosen Plan</label>
                                    <div className="select">
                                        <select onChange={inputHandle} value={state.choosenPlan} className={`w-[368px] h-[56px] ${errors.choosenPlan ? 'border-2 border-[#E82727]' : ''}`} placeholder='select plan' name="choosenPlan" id="choosenPlan">
                                            <option className='place_holder' value="" disabled>Choose plan</option>


                                            <option value="custom" >Custom</option>
                                            {
                                                data.plans.map((plan, i) =>
                                                    <option key={i} value={plan.id} > {plan.name} </option>

                                                )
                                            }
                                        </select>
                                        {errors.choosenPlan && <p className="text-[#E82727] text-sm">{errors.choosenPlan}</p>}

                                    </div>


                                </div>

                                <div className='flex flex-col '>

                                    <label className='block text-[20px] font-[500] text-[#606060] ' htmlFor="months">Months</label>
                                    <input value={state.numberOfMonths} onChange={inputHandle} min={1} className='w-[111px] h-[56px] months ' type="number" name='numberOfMonths' placeholder='Months' id='numberOfMonths' />
                                    <div className="spinner">
                                        <button type="button" onClick={inputHandle} name="up_btn" className="up button">&rsaquo;</button>
                                        <button type="button" onClick={inputHandle} name="down_btn" className="down  button">&lsaquo;</button>
                                    </div>
                                </div>
                            </div>

                            {state.choosenPlan === "custom" && <div className='flex flex-col justify-left s_custom_workouts '>
                                <label className="block text-[20px] mr-[168px] font-[500] text-[#606060] " htmlFor="countries_disabled">Please choose the wanted workouts:</label>
                                <div className={`input_group`}>
                                    <div className={`custom_workouts flex flex-wrap space-x-[8px] ${errors.customPlan ? 'custom_workouts_err' : 'custom_workouts_no_err'}`}>

                                        {
                                            data.aviableWorkouts.map((workout, i) => (
                                                <Chip

                                                    key={workout.id}
                                                    className={`chips ${state.customPlan.indexOf(workout.id) !== -1 ? 'checkedChip' : ''} `}
                                                    onClick={() =>
                                                        handleChipClick(
                                                            workout.id,
                                                            `checked${workout.id}`,
                                                            `notChecked${workout.id}`,
                                                            `checked${workout.id}`,
                                                            `chip${workout.id}`
                                                        )
                                                    }
                                                    icon={
                                                        <span>
                                                            <svg
                                                                id={`notChecked${workout.id}`}
                                                                className={` ${state.customPlan.indexOf(workout.id) !== -1 ? 'hide' : ''} `}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <circle cx="12" cy="12" r="12" fill="white" />
                                                            </svg>

                                                            <svg
                                                                id={`checked${workout.id}`}
                                                                className={` ${state.customPlan.indexOf(workout.id) !== -1 ? '' : 'hide'} `}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <circle cx="12" cy="12" r="12" fill="white" />
                                                                <g clipPath="url(#clip0_1398_3817)">
                                                                    <path
                                                                        d="M6.5 11.75L10.5 16.5L18.5 7"
                                                                        stroke="#3741D7"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_1398_3817">
                                                                        <rect
                                                                            width="16"
                                                                            height="16"
                                                                            fill="white"
                                                                            transform="translate(4 4)"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </span>
                                                    }
                                                    id={`chip${workout.id}`}

                                                    label={workout.name}
                                                />
                                            ))
                                        }


                                    </div>
                                    {errors.customPlan && <p className="text-[#E82727] text-sm mb-[24px]">{errors.customPlan}</p>}


                                </div>


                            </div>
                            }

                            <div className='flex flex-col mb-1 '>

                                <label className='block text-[20px] mr-[328px] font-[500] text-[#606060] ' htmlFor="additionalFaeture">Addtional Faeturs :</label>
                                {
                                    additionalFaetures.map((additionalFaeture, i) =>
                                        <div key={i} className="flex items-left lh-[20px] ">
                                            <input className='w-[24px] h-[24px]' onChange={inputHandle} name="additionalFaetures" type="checkbox" value={additionalFaeture.id} checked={state.AdditionalFeatures.indexOf(additionalFaeture.id) !== -1} />
                                            <label className="text-[16px] font-[400] mb-[8px] ml-[8px] text-[#000000] " htmlFor="additionalFaetures">{additionalFaeture.slug}</label>
                                        </div>
                                    )
                                }


                            </div>


                            <div className='mt-4 gap-3 flex justify-center items-center'>
                                <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                <button onClick={next} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Next <ArrowForwardIosIcon className='mt-[-4px]' /> </button>

                            </div>
                        </div>
                    }
                    {
                        formNo === 4 && <div className='flex flex-col items-center'>
                            <ToastContainer />
                            <div className='flex flex-col justify-center w-[260px] h-[60px] mt-[52px] mb-[32px] '>
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
                        formNo === 5 && <div>

                            {console.log(state)}
                            <div className="iconSax flex justify-center" >
                                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M62.0674 97.9997L72.0674 108L98.734 81.333" stroke="#3741D7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M66.6673 40H93.334C106.667 40 106.667 33.3333 106.667 26.6667C106.667 13.3333 100.001 13.3333 93.334 13.3333H66.6673C60.0007 13.3333 53.334 13.3333 53.334 26.6667C53.334 40 60.0007 40 66.6673 40Z" stroke="#3741D7" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M106.667 26.8001C128.867 28.0001 140 36.2001 140 66.6668V106.667C140 133.333 133.333 146.667 100 146.667H60C26.6667 146.667 20 133.333 20 106.667V66.6668C20 36.2668 31.1333 28.0001 53.3333 26.8001" stroke="#3741D7" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                            <div className="flex justify-center">
                                <h1 className='text-[32px]  font-semibold mb-[8px]'>Awesome!</h1>
                            </div>
                            <div className="flex justify-center ">
                                <p className='text-[16px] text-center w-[306px] leading-[20px] '>
                                    {state.gender == 2 ? 'Mr.' : 'Miss.'} <span className='font-semibold'>{state.firstName + ' ' + state.lastName}</span>  is officially one of the
                                    members in <span className='font-semibold'>Thunder club</span>.
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <hr className='bg-[#000000] h-[2px] w-[504px] mt-[32px] mb-[16px] ' />
                            </div>
                            <div className="total w-[378px] h-[24] flex justify-center">
                                <p className='text-[20px] ml-[36px] font-normal'>The total amount of the membership:</p>
                            </div>
                            <div className="total w-[378px] h-[24] flex justify-left ">
                                <h1 className='font-[700] text-[32px] ml-[40px]'>{state.total_amount}</h1><sub className='mt-[24px] ml-[4px] text-[20px] font-semibold'>Dirhams.</sub>
                            </div>
                            <div className='mt-[40px] gap-3 flex justify-center items-center'>
                                <button onClick={pre} className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] border-[4px] border-[#3741D7]  text-[#3741D7] bg-[#FFFFFF]'> <ArrowBackIosIcon className='mt-[-6px] ' />Previous</button>
                                <button className='w-[224px] h-[64px] text-[24px] rounded-[8px] mr-[12px] text-[#ffff] bg-[#3741D7]'>Done</button>
                            </div>
                        </div>

                        
                    }

                </div>
            </div>
        </div>
    );
}

export default FormMember