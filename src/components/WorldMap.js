import React from 'react';
import { Chart } from "react-google-charts";


export default function WorldMap(props){
    const data = [
        ["Country","CountryCode", "Total Cases"]];
       const cntry=props.country;
     cntry.map((Data,i)=>{
       return (
        data.push([Data.CountryCode,Data.Country,Data.TotalConfirmed])
        );
      })
   

  return (
    <div className="App">
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            }
          }
        ]}
        chartType="GeoChart"
        width="100%"
        height="500px"
        options={{
            // region: 'IT',
            // displayMode: 'markers',
            colorAxis: { colors: ['mediumseagreen'] },
          }}
        data={data}
      />
    </div>
  );
  }