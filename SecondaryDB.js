import React,{useState} from 'react'
import { MdModeEditOutline } from 'react-icons/md';
import { CgSearch } from 'react-icons/cg'
import { RiRecycleFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';



export default function SecondaryDB() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='space-y-5'>
            <div className='flex items-center'>
                <div className='flex flex-1 justify-center'>
                    <div>
                        <button className='bg-red-600 px-5 w-32 py-2 rounded-l-3xl font-bold text-white'>Quality</button>
                        <button className='bg-white px-5 w-32 py-2 rounded-r-3xl font-bold text-header'>Performance</button>
                    </div>
                </div>
                <div className='w-8 h-8 bg-gray-500 rounded-full flex justify-center items-center cursor-pointer text-white'>
                    <MdModeEditOutline size={20} onClick={()=>setShowModal(true)} />
                </div>
            </div>
            <div className='flex justify-end'>
                <input type="date" className='bg-transparent' />
                <div className='flex items-center bg-white  px-4 py-2 rounded-md w-fit'>
                    <input type="text" placeholder='Search Vendor / Rider' className='outline-none' />
                    <CgSearch size={20} />
                </div>
            </div>

            <h1 className='font-bold text-2xl'>Company Insights</h1>
            <div className='grid grid-cols-4 gap-4'>

                {[...Array(10)].map((card, index) =>
                    <div key={index} className="flex flex-col justify-center items-center px-10 py-5 bg-white w-fit mt-5 shadow-xl rounded-lg space-y-3">
                        <RiRecycleFill size={50} />
                        <h1 className="text-2xl font-semibold text-gray-500">Order Acceptance</h1>
                        <p className="text-gray-500 font-semibold">85% <span className="ml-5 text-red-600 text-xs">&darr; 8%</span></p>
                        <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-2 text-white rounded-3xl">Phase 1 Goal</button>

                    </div>
                )}
            </div>

            {/* MODAL */}

            {
                showModal?<div className='flex items-center justify-center bg-black opacity-95 p-6 border-t border-solid border-slate-200 rounded-b absolute inset-0'>

                <div className="bg-gray-50 rounded-3xl">
                    <div className="flex justify-end">
                        <AiOutlineClose size={20} className="mr-3 mt-3 cursor-pointer" onClick={()=>setShowModal(false)} />
                    </div>

                    {/* 1 */}

                    <div className="px-10 space-y-5">
                        <h1 className="font-bold">Order Acceptance</h1>
                        <div className="flex space-x-10">
                            <div>
                                <p className="font-semibold text-gray-500">Phase 1 Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-500">Phase 2 Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Ultimate Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* 2 */}

                    <div className="px-10 my-5 space-y-5">
                        <h1 className="font-bold">Reaching Vender</h1>
                        <div>
                            <p className='font-semibold text-gray-500'>Standard-Reach Vendor Time</p>
                            <select name="" id="" className="w-40 border-2 py-2 px-3">
                                <option  selected disabled>Select</option>
                            </select>
                        </div>
                        <div className="flex space-x-10">
                            <div>
                                <p className="font-semibold text-gray-500">Phase 1 Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-500">Phase 2 Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Ultimate Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                        </div>

                        {/* 3 */}
                        <h1 className="font-bold">Delevring Order</h1>

                        <div className="flex space-x-10">
                            <div>
                                <p className="font-semibold text-gray-500">Prime Zone minutes</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-500">Secondary Zone minutes</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Other Zone minutes</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex space-x-10">
                            <div>
                                <p className="font-semibold text-gray-500">Phase 1 Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-500">Phase 2 Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Ultimate Goal Limit</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                        </div>

                        {/* 4 */}
                        <h1 className="font-bold">Clearing Payments</h1>

                        <div className="flex space-x-10">
                            <div>
                                <p className="font-semibold text-gray-500">Prime Zone minutes</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-500">Secondary Zone minutes</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-500">Other Zone minutes</p>
                                <select name="" id="" className="w-40 border-2 py-2 px-3">
                                    <option  selected disabled>Select</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center my-5'>
                        <button className='bg-red-600 px-5 py-2 font-bold text-white rounded-3xl' onClick={()=>setShowModal(false)}>Update</button>
                    </div>

                </div>

            </div>:null
            }

            


        </div>
    )
}
