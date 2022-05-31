import React from 'react';
// stats icons start
import {HiUserGroup} from 'react-icons/hi';
import {GiShoppingBag} from 'react-icons/gi';
import {AiTwotoneCar} from 'react-icons/ai';
import {SiSpringsecurity} from 'react-icons/si';
import {GiRoundStar} from 'react-icons/gi';
import {ImStatsBars} from 'react-icons/im';


// stats icons end

export default function Stats() {
    const statsObj=[
        {
            "icon":<HiUserGroup size={50}/>,
            "name":"customers",
            "value":7340
        },
        {
            "icon":<GiShoppingBag size={50}/>,
            "name":"Orders",
            "value":12907
        },
        {
            "icon":<AiTwotoneCar size={50}/>,
            "name":"Delivery",
            "value":12907
        },
        {
            "icon":<SiSpringsecurity size={50}/>,
            "name":"Users",
            "value":12907
        },
        {
            "icon":<ImStatsBars size={50}/>,
            "name":"Revenue",
            "value":7340
        },
        {
            "icon":<GiRoundStar size={50}/>,
            "name":"Revenue",
            "value":7340
        },
        {
            "icon":<ImStatsBars size={50}/>,
            "name":"Avg. revenue per customer",
            "value":12907
        },
        {
            "icon":<ImStatsBars size={50}/>,
            "name":"Avg. revenue per user",
            "value":12907
        },
]

  return (
    <div className='px-8 grid grid-cols-4 gap-4'>

        {
            statsObj.map((card,index)=>(
                <div key={index} className="rounded-xl shadow-lg px-5 w-36 h-44 flex flex-col justify-center items-center bg-white">
                <div className="flex flex-col justify-center items-center text-brand-color">
                    {card.icon}
                    <p className="uppercase font-bold text-center text-sm text-brand-color">{card.name}</p>
                </div>
                <div className="m-3">
                    <p className="text-gray-700 text-2xl font-light">$ {card.value}</p>
                </div>
            </div>

            ))
        }
    </div>   
   
  )
}
