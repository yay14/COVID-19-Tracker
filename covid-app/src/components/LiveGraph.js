import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'react-apexcharts'
//import ReactApexChart from 'react-apexcharts'

 export default function LiveGraphs(props)
{
const data=props.times;  
const dates=[];
const deaths=[];
const recov=[];
const confirm=[];
        data.map(data =>
            {
               return( 
                 dates.push(data.date),
                deaths.push(data.totaldeceased),
                recov.push(data.totalrecovered),
                confirm.push(data.totalconfirmed)
               )
            })

            const series= [{
              name: 'deaths',
              data: deaths
            }, {
              name: 'recovered',
              data: recov
            },{
                name: 'confirmed',
                data: confirm
              }];
            const options= {
              chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: dates
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy'
                },
              },

          
          
          };
          return (
        <Chart options={options} series={series} type="area" height={350} />
          );
}

      

        