import React from 'react';
import user1 from '../assets/Image@2x.png';
import user2 from '../assets/Image-1.png';
import user3 from '../assets/Image-2.png';

export default function Top() {
    const topRated=[
        {
        "bag":"Top Customer",
        "picture":user1,
        "firstName":"Christina",
        "lastName":"Ambrosia",
        "revenuePerMonth":13469.80,
        "revenuePerMonthUp":12,
        "totalRevenue":49137,
        "order":182,
        "orderdown":8
        },
        {   "bag":"Top Rider",
            "picture":user2,
            "firstName":"Alex",
            "lastName":"Williams",
            "revenuePerMonth":13469.80,
            "revenuePerMonthUp":12,
            "totalRevenue":49137,
            "order":182,
            "orderdown":8
        },
        {
            "bag":"Top Rider",
            "picture":user3,
            "firstName":"Desi",
            "lastName":"Accent",
            "revenuePerMonth":13469.80,
            "revenuePerMonthUp":12,
            "totalRevenue":134669,
            "order":182,
            "orderdown":8
        },
    ]
  return (
    <div className='flex space-x-10 px-8'>
        {
            topRated.map((card,index)=>
            <div key={index} className="w-96 h-full px-8 py-4 bg-white shadow-xl rounded-xl relative">
                <div className="flex justify-between">
                    <div className="mt-8">
                        <div className="flex flex-1 items-center">
                            <img src={card.picture} width={60} alt=""/>
                            <p className="ml-3">{card.firstName} <span className="block">{card.lastName}</span></p>
                        </div>
                        <div className="mt-2">
                            <h6 className="uppercase text-xs text-gray-500">Revenue / Month</h6>
                            <p className="font-bold text-gray-700"> $ 13469.80 <span className="ml-4 text-green-600"> <sup>&uarr;
                                        12%</sup></span></p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex-1 flex items-center">
                            <p className="text-gray-700 text-2xl font-light">$ 7340</p>
                        </div>
                        <div>
                            <h6 className="uppercase text-xs text-gray-500">Revenue / Month</h6>
                            <p className="font-bold text-gray-700"> $ 13469.80 <span className="ml-4 text-green-600"> <sup>&uarr;
                                        12%</sup></span></p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-orange-500 to-yellow-500 text-white absolute text-xs left-0 p-1">
                        <p>Top Customer</p>
                    </div>
                </div>
        </div>
            
            )

        }
       
</div>
  )
}
