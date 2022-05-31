import React from 'react';
import {NavLink} from 'react-router-dom'
// sidebar icons start
import home_icon from '../assets/home-run.svg';
import group_icon from '../assets/Group 4282.svg';
import card_payment_icon from '../assets/card payment.svg';
import bell_icon from '../assets/bell.svg';
import promo_icon from '../assets/Promo & Promotions.svg';
import level_icon from '../assets/levels&bonuses_icon.svg';
import mask29_icon from '../assets/Mask Group 29.svg';
// sidebar icons end

export default function Sidebar() {
    const sidebarIcons=[group_icon,card_payment_icon,bell_icon,promo_icon,level_icon,mask29_icon,card_payment_icon,bell_icon,promo_icon];
  return (
    <div className='pt-28 h-full w-20 bg-header space-y-10 flex flex-col items-center'>      
    <NavLink to="/"><img src={home_icon} alt="" /></NavLink>
        {
            sidebarIcons.map((icon,index)=><img src={icon} key={index}/>
                
            )
        }
    </div>
  )
}
