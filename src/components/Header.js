import React from 'react'
import avator from '../assets/11.png';
import { BsBasket } from 'react-icons/bs';
import {BiMenu} from 'react-icons/bi';
import {CgSearch} from 'react-icons/cg'


export default function Header() {
  return (
    <>
      <header className="flex justify-between px-10 py-3 text-white items-center bg-header border-b-4 border-white">
        <div className="flex items-center space-x-5">  
          <div className='flex flex-col items-center'>
            <BsBasket size={40} className="cursor-pointer"/>
            <p>Baskyt <span><sup>&copy;</sup></span></p>
          </div>
          <BiMenu size={40} className="cursor-pointer"/>          
            
        </div>
        <div className="flex items-center">
            <div className="flex items-center">
                <input type="text" className="bg-transparent w-20 focus:w-60 outline-none" placeholder="Search"/>
                <CgSearch size={30}/>
            </div>
            <div className="profile ml-5">
                <img src={avator} alt="" className="rounded-full w-12 cursor-pointer"/>
            </div>
        </div>
    </header>
    </>
  )
}
