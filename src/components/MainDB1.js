import React from 'react'
import {NavLink} from 'react-router-dom'
import AreaChart from './AreaChart'
import Stats from './Stats'
import Table from './Table'
import Top from './Top'

export default function MainDB1() {
    return (
        <>
            <div className='flex justify-between'>
                <button className=' rounded-lg bg-white font-semibold px-6 py-3'>Filter By</button>
                <NavLink to={"/insights"}>
                <button className='rounded-3xl text-white font-semibold  bg-red-600 px-16 py-3'>TQM</button>

                </NavLink>
            </div>
            <div className='flex'>
                <div className='w-1/2 '>
                    <Stats />
                </div>
                <div className='w-1/2 flex '>
                    <AreaChart />
                </div>
            </div>
            <div className='w-full'>
                <Top />
            </div>
            <div className='w-full '>
                <h1 className='px-8 my-5 font-bold'>Action Orders</h1>
                <Table />
            </div>
        </>
    )
}
