import React, { useState } from 'react';

import Header from '../header/Header';
import '../style.scss';
import PlusIcon from '@mui/icons-material/Add';

function FormAdditionalFeatures({features}) {

    const [featureData, setFeatureData] = useState(features.map((feature) => ({ ...feature, isEditing: false })));
    

    const handleEditFields = (featureId) => {
        setFeatureData((prevFeatures) => {
            return prevFeatures.map((feature) => {
                if (feature.id === featureId) {
                    return {
                        ...feature,
                        isEditing: true
                    };
                }
                return feature;
            });
        });
    };

    const handleSaveFields = (featureId) => {
        setFeatureData((prevFeatures) => {
            return prevFeatures.map((feature) => {
                if (feature.id === featureId) {
                    return {
                        ...feature,
                        isEditing: false
                    };
                }
                return feature;
                console.log(feature);
            });
        });
    };

    const [val, setVal] = useState([]);

    const handleAddNewFeature = () => {
        const abc = [...val, []];
        setVal(abc);
    };

    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val];
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata);
    };

    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }

    return (
        <div className='flex justify-center items-center mt-[72px]'>
            <div className='form-container w-[859px] h-[599] rounded-[8px] mb-[72px] items-left'>
                <Header title='Additional Features' />
                <div className=''>
                {featureData.map((feature) => (
                        <div key={feature.id} className='flex mb-[24px]'>

                            <div >
                                <label htmlFor="name" className='font-semibold text-sm text-gray-600 pb-1 block '>Name of Feature</label>
                                <input id={`name_edit${feature.id}`} disabled={!feature.isEditing} name='name' defaultValue={feature.name} className='w-[436px] h-[56px] rounded-[8px] text-sm ' type="text" />
                            </div>

                            <div className='mx-[12px]' >
                                <label htmlFor="price" className='font-semibold text-sm text-gray-600 pb-1 block '>Price</label>
                                <input id={`price_edit${feature.id}`} disabled={!feature.isEditing} name='price' defaultValue={feature.price} className='w-[147px] h-[56px] rounded-[8px] text-sm' min={0} type="number" />
                            </div>

                            <div >
                                
                                {!feature.isEditing ? (
                                    
                                    <button id='feature_edit' onClick={() => handleEditFields(feature.id)} className='w-[56px] h-[56px]  rounded-[8px] butn mt-[24px]' >
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                            <path d="M29.6801 16.8006L18.7335 28.3873C18.3201 28.8273 17.9201 29.6939 17.8401 30.2939L17.3468 34.6139C17.1735 36.1739 18.2935 37.2406 19.8401 36.9739L24.1335 36.2406C24.7335 36.1339 25.5735 35.6939 25.9868 35.2406L36.9335 23.6539C38.8268 21.6539 39.6801 19.3739 36.7335 16.5873C33.8001 13.8273 31.5735 14.8006 29.6801 16.8006Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M27.8533 18.7334C28.1329 20.5212 28.9981 22.1656 30.3134 23.4084C31.6286 24.6512 33.3192 25.4221 35.12 25.6001M16 41.3334H40" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button id='feature_save' className=' w-[56px] h-[56px]  font-[500] rounded-[8px] mt-[24px] butn'>
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                            <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                     )
                                     
                                     }
                            </div>
                            <div className='file-inputs'>
                                <button className='w-[56px] h-[56px] mx-[12px] rounded-[8px] butn mt-[24px] ' >

                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                        <path d="M40 19.9737C35.56 19.5337 31.0933 19.307 26.64 19.307C24 19.307 21.36 19.4403 18.72 19.707L16 19.9737M23.3333 18.627L23.6267 16.8803C23.84 15.6137 24 14.667 26.2533 14.667H29.7467C32 14.667 32.1733 15.667 32.3733 16.8937L32.6667 18.627M37.1333 24.187L36.2667 37.6137C36.12 39.707 36 41.3337 32.28 41.3337H23.72C20 41.3337 19.88 39.707 19.7333 37.6137L18.8667 24.187M25.7733 34.0003H30.2133M24.6667 28.667H31.3333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>


                                </button>
                            </div>

                        </div>
                    ))}
                    <hr className='mb-[24px]' />
                    {val.map((data, i) => (
                        <div key={i} className='flex justify-center mb-[36px]'>


                            <div >
                                <div className='flex '>
                                    <div>
                                        <label htmlFor={`featureName${i}`} className='font-semibold text-sm text-gray-600 pb-1 block'>Name of Feature</label>
                                        <input
                                            value={data.name}
                                            onChange={(e) => handleChange({ ...e.target }, i)}
                                            id={`featureName${i}`}
                                            className='w-[436px] h-[56px] rounded-[8px] text-sm'
                                            type='text'
                                        />
                                    </div>
                                    <div className='mx-[12px]'>
                                        <label htmlFor={`featurePrice${i}`} className='font-semibold text-sm text-gray-600 pb-1 block'>Price</label>
                                        <input
                                            value={data.price}
                                            onChange={(e) => handleChange({ ...e.target }, i)}
                                            id={`featurePrice${i}`}
                                            className='w-[147px] h-[56px] rounded-[8px] text-sm'
                                            type='text'
                                        />
                                    </div>
                                    <div>
                                        <button className='w-[56px] h-[56px]  font-[500] rounded-[8px] mt-[24px] butn'>
                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                <path d="M17 27.5L24.3333 36L39 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(i)} className='w-[56px] h-[56px] rounded-[8px] mx-[12px] butn mt-[24px]'>
                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="56" height="56" rx="8" fill="#DCDCDC" />
                                                <path d="M40 16L16 40M16 16L40 40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                    <div>
                        
                        <button onClick={handleAddNewFeature} type='button' className='font-[600] text-[24px] mt-[24px] Add_New_Workout border-dashed border-2'>
                            Add New Feature <PlusIcon />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FormAdditionalFeatures;