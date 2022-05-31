import React,{useState} from 'react';
import Chart from "react-apexcharts";

export default function AreaChart() {
    const [state, setState] = useState(        
            {
                options: {
                  chart: {
                    id: "basic-bar"
                  },
                  xaxis: {
                    categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep","Oct","Nov","Dec"]
                  }
                },
                series: [
                  {
                    name: "series-1",
                    data: [200, 100, 200, 200, 230, 260, 290, 245 ,200,280,360,400]
                  }
                ]
              }
    )
  return ( 
        <div className="rounded-sm px-8 shadow-lg bg-white w-fit">
        <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="550"
        />
        </div>
  )
}
