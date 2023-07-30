import React, { useState  } from "react";
import './new_Plans.scss'
export default function Modal() {
    const [showModal, setShowModal] = useState(false);
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

    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={openModal}
            >
            </button>
            {showModal ? (
                <div className="modal-overlay">
                    <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
            ) : null}
        </>
    );
}