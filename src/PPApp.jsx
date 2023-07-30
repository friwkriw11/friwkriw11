import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {
  const formArray = [1, 2, 3, 4];
  const [formNo, setFormNo] = useState(formArray[2])
  const [additionalFaetures, setAdditionalFaetures] = useState([{
    id: 1,
    slug: "swimming pool",
    name: "swimmingPool"
  },
  {
    id: 2,
    slug: "spa & suana",
    name: "spaAndSuana"
  }
  ])
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
    hasMedicalHistory: '',

    choosenPlan: "",
    numberOfMonths: "",
    AdditionalFeatures: [],
    payInsurance: '',
    post: ''
  })
  const inputHandle = (e) => {

    if (e.target.name === "additionalFaetures") {
      let copy = { ...state }
      if (e.target.checked) {
        copy.AdditionalFeatures.push(e.target.value)
      } else {
        copy.AdditionalFeatures = copy.AdditionalFeatures.filter(el => el !== e.target.value)
      }
      setState(copy)
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }

  }
  const next = () => {
    if (formNo === 1 && state.firstName && state.lastName && state.gender) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.cin && state.homeAddress && state.phoneNumber && state.email) {
      setFormNo(formNo + 1)
    } else if (formNo === 3) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
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

<div className="md-stepper-horizontal ">
{
          formArray.map((v, i) => <>
    <div className={`md-step ${formNo - 1 === i ||  formNo === formArray.length ? 'active' : ''} `}>
      <div className={`md-step-circle  ${formNo - 1 === i ||  formNo === formArray.length ? 'active-circle' : 'inactive'}`}></div>
      <div className="md-step-title"> <span>Checkout</span></div>
      <div className="md-step-bar-left flex items-center"></div>
      <div className="md-step-bar-right flex items-center"></div>
    </div>
    </>)
        }
  </div>


    
      <div className="w-screen h-screen  flex justify-center items-center">

        <ToastContainer />

        <div className="card w-[630px]  rounded-md shadow-md bg-[#969696] p-5">

          {
            formNo === 1 && <div className='flex flex-col items-center'>
              <div className='flex flex-col items-left mt-8 mb-2'>
                <label htmlFor="firtName">First Name</label>
                <input value={state.firstName} onChange={inputHandle} className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md' type="text" name='firstName' placeholder='First Name' id='firstName' />
              </div>
              <div className='flex flex-col items-left mt-8  mb-2'>
                <label htmlFor="lastName">Last Name</label>
                <input value={state.lastName} onChange={inputHandle} className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md' type="text" name='lastName' placeholder='Last Name' id='lastName' />
              </div>
              <div className='flex flex-col items-left mt-8  mb-2'>
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input value={state.dateOfBirth} onChange={inputHandle} className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md' type="date" name='dateOfBirth' placeholder='Date Of Birth' id='dateOfBirth' />
              </div>

              <div className='flex flex-col items-left mt-8  mb-2'>

                <label htmlFor="Gender">Gender</label>
                <div className="select">
                  <select onChange={inputHandle} value={state.gender} className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md' placeholder='select gender' name="gender" id="gender">
                    <option value="" disabled>Choose Gender</option>
                    <option value="1" >Famel</option>
                    <option value="2" >Male</option>
                  </select>
                </div>
              </div>



              <div className='mt-4 flex justify-center items-center'>
                <button onClick={next} className='px-3 w-[224px]  py-2 text-lg rounded-md w-full text-white bg-[#1BF6A7]'>Next {">"} </button>
              </div>
            </div>
          }

          {
            formNo === 2 && <div className='flex flex-col items-center'>
              <div className='flex flex-col items-left mt-8  mb-2 '>
                <label className='text-slate-500' htmlFor="cin">ID Crad Number</label>
                <input value={state.cin} onChange={inputHandle} className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='cin' placeholder='ID Card Number' id='cin' />
              </div>

              <div className='flex flex-col items-left mt-8  mb-2'>
                <label className='text-slate-500' htmlFor="address">Home Address</label>
                <textarea value={state.homeAddress} onChange={inputHandle} row='10' className='p-2 border p-2 w-[368px] h-[56px] border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' name='homeAddress' placeholder='Home Address' ></textarea>
              </div>
              <div className='flex flex-col items-left mt-8  mb-2'>
                <label className='text-slate-500' htmlFor="PhoneNumber">Phone Number</label>
                <input value={state.phoneNumber} onChange={inputHandle} className='p-2 border p-2 w-[368px] h-[56px] border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='phoneNumber' placeholder='Phone Number' id='phoneNumber' />
              </div>
              <div className='flex flex-col items-left mt-8  mb-2'>
                <label className='text-slate-500' htmlFor="emargencyPhoneNumber">Emergency Phone Number</label>
                <input value={state.emergencyPhoneNumber} onChange={inputHandle} className='p-2 border p-2 w-[368px] h-[56px] border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='emergencyPhoneNumber' placeholder='Emengency Phone Number' id='emergencyPhoneNumber' />
              </div>
              <div className='flex flex-col items-left mt-8  mb-2'>
                <label className='text-slate-500' htmlFor="email">Email</label>
                <input value={state.email} onChange={inputHandle} className='p-2 border p-2 w-[368px] h-[56px] border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="email" name='email' placeholder='Email' id='email' />

              </div>
              <div className='mt-4 gap-3 flex justify-center items-center'>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input onChange={inputHandle} type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-black-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-black-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-black-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-black-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-black-900 dark:text-black-300">He has any medical history?</span>
                </label>
              </div>
              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
              </div>
            </div>
          }
          {
            formNo === 3 && <div className='flex flex-col items-center'>
              <div className='flex flex-col items-left mt-8  mb-2'>
                <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-black-900 dark:text-white">Chosen Plan</label>
                <div className="select">

                  <select value={state.choosenPlan} on0Change={inputHandle} id="chosenPlan" className='p-2 w-[368px] h-[56px] border border-slate-800 mt-1 outline-0 focus:border-black-500 rounded-md'>
                    <option value="" disabled>Choose Plan</option>
                    <option value="plan1">Plan 1</option>

                  </select>
                </div>
                <div className='flex flex-col mb-1'>

                  <label className='text-slate-500' htmlFor="months">Months</label>
                  <input value={state.numberOfMonths} onChange={inputHandle} className='p-2 border p-2 w-[368px] h-[56px] border-slate-800 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='numberOfMonths' placeholder='Months' id='numberOfMonths' />
                </div>
              </div>
              <div className='flex flex-col mb-1'>

                <label className='text-slate-500' htmlFor="additionalFaeture">addtional faeturs</label>
                {
                  additionalFaetures.map((additionalFaeture, i) =>
                    <div key={i} className="flex items-center mb-4">

                      <input onChange={inputHandle} id={additionalFaeture.name} name="additionalFaetures" type="checkbox" value={additionalFaeture.id} />

                      <label htmlFor="additionalFaetures" className="ml-2 text-sm font-medium text-black-900 dark:text-black-300">{additionalFaeture.slug}</label>
                    </div>
                  )
                }
              </div>

              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
              </div>
            </div>
          }
          {
            formNo === 4 && <div>

              {console.log(state)}

              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                <button className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
