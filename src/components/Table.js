import React from 'react';
import { data } from './TableData';
import sort from '../assets/sort.svg';

export default function Table() {
    return (
        <div className='px-8 bg-white px-5 rounded-3xl pb-5'>
            <table className="table-auto w-full">
                <thead className="bg-gray-100">
                    <tr className="text-red-700 font-semibold" >
                        <td>
                            <div className="flex pl-2 py-2 space-x-3">
                                <p>Type</p>
                                <img src={sort} alt="" className="w-3" />
                            </div>
                        </td >
                        <td>
                            <div className="flex space-x-3">
                                <p>Order #</p>
                                <img src={sort} alt="" className="w-3" />
                            </div>
                        </td>
                        <td>
                            <div className="flex space-x-3">
                                <p>Customer</p>
                                <img src={sort} alt="" className="w-3" />
                            </div>
                        </td>
                        <td>
                            <div className="flex space-x-3">
                                <p>Zip Code</p>
                                <img src={sort} alt="" className="w-3" />
                            </div>
                        </td>
                        <td>
                            <div className="flex space-x-3">
                                <p>Order Time</p>
                                <img src={sort} alt="" className="w-3" />
                            </div>
                        </td>
                        <td>
                            <div className="flex space-x-3">
                                <p>Venders</p>
                                <img src={sort} alt="" className="w-3" />
                            </div>

                        </td>
                        <td>
                            <div className="flex space-x-3">
                                <p>Rider</p>
                                <img src="./assets/sort.svg" alt="" className="w-3" />
                            </div>
                        </td>
                        <td >
                            <div className="flex space-x-3">
                                <p>Order Ammount</p>
                                <img src="./assets/sort.svg" alt="" className="w-3" />
                            </div>

                        </td>
                        
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((row, index) =>
                            <tr key={index}>                                
                                <td><div className={`${row.type=="squad"?"bg-yellow-300":"bg-red-300"} opacity-70 w-24 px-5 py-1 rounded-2xl`}>
                                    <p className="font-bold capitalize">{row.type}</p></div>          </td>
                                <td>{row.Order}</td>
                                <td className="flex items-center">

                                    <img src={row.user_image} alt="" className="w-10 h-10" />
                                    <div className="ml-4">
                                        <p className="text-xs">{row.name}
                                            <span className="block text-gray-400">{row.address}</span>
                                            <span className="block text-gray-400">{row.contact}</span>
                                        </p>
                                    </div>

                                </td>
                                <td>{row.zip}</td>
                                <td>{row.orderTime}</td>
                                <td> <img src={row.vender} alt="" className="w-10" />    </td>
                                <td>{row.rider}</td>
                                <td>
                                    <div className="bg-green-400 opacity-90 w-fit px-5 py-1 rounded-2xl">
                                        <p className="font-bold ">$ {row.amount}</p></div>
                                </td>
                                

                            </tr>
                        )

                    }



                </tbody>
            </table>
        </div>
    )
}
