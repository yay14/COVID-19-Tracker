import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'react-apexcharts'
import moment from 'moment'

export default function TestedGraph(props)
{
    const data=props.tested;  
    const dates=[];
    const testedpositiverate=[];
    data.map(data =>
        {
            var date = moment(data.updatetimestamp,'DD/MM/YYYY HH:mm:ss').format('DD/MM/YY');
            if(data.testpositivityrate!=="")
           return( 
             dates.push(date),
             testedpositiverate.push(data.testpositivityrate)
           )
        })


   var series= [{
    name: 'Positively Tested Rate',
    data: testedpositiverate
  }];
  var options= {
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
      type: 'date',
      categories: dates
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy '
      },
    },



};

  return (
    
    <Chart options={options} series={series} type="area" height={350} />
      );
}

