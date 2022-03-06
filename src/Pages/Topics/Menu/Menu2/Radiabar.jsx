import React, {useState} from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import { ApexCharts, ReactApexChart } from 'apexcharts';
import Chart from "react-apexcharts";
  
  
const Radialbar = () => {
  
// Sample data
// const data = [
//   {name:'A', x:1,fill:"green"},
//   {name:'B', x:2, fill:"yellow"},
//   {name:'C', x:3, fill:"aqua"},
//   {name:'D', x:4, fill: "blue"},
//   {name:'E', x:5, fill:"orange"},
//   {name:'F', x:6, fill:"red"},
//   {name:'G', x:7, fill:"black"},
//   {name:'H', x:8, fill:"purple"},
//   {name:'I', x:9, fill:"gray"},
// ];
  
  
// return (
//   <RadialBarChart width={500} height={500} data={data}>
//     <RadialBar minAngle={15} dataKey="x"/>
//   </RadialBarChart>
// );
// const data = [
//     {
//       name: 'A',
//       x: 31.47,
//       fill: '#8784d8',
//     },
//     {
//       name: 'B',
//       x: 26.69,
//       fill: '#84a6ed',
//     },
//     {
//       name: 'C',
//       x: 15.69,
//       fill: '#8ed1e1',
//     },
//     {
//       name: 'D',
//       x: 8.22,
//       fill: '#82da9d',
//     },
//     {
//       name: 'E',
//       x: 8.63,
//       fill: '#a2de6c',
//     },
//     {
//       name: 'F',
//       x: 2.63,
//       fill: '#d0dd57',
//     },
//     {
//       name: 'G',
//       x: 6.67,
//       fill: '#ffa658',
//     },
//   ];
    
    
//   return (
//     <RadialBarChart width={500} height={500} data={data} 
//       innerRadius="20%" outerRadius="70%">
//       <RadialBar minAngle={30} dataKey="x" clockWise/>
//     </RadialBarChart>
//   );

const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    });

    const [series, setSeries] = useState([44, 55, 67, 83]);

// const data = {
          
//     series: [44, 55, 67, 83],
//     options: {
//       chart: {
//         height: 350,
//         type: 'radialBar',
//       },
//       plotOptions: {
//         radialBar: {
//           dataLabels: {
//             name: {
//               fontSize: '22px',
//             },
//             value: {
//               fontSize: '16px',
//             },
//             total: {
//               show: true,
//               label: 'Total',
//               formatter: function (w) {
//                 // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
//                 return 249
//               }
//             }
//           }
//         }
//       },
//       labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
//     },
  
//   };
  return (
  <div>
  <Chart options={options} series={series} type="radialBar" height={350} />
</div>
);
}
  
export default Radialbar;