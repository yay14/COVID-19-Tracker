/*import React from 'react'
import FusionCharts from 'fusioncharts';
import Maps from 'fusionmaps/fusioncharts.maps';

//import Maps from 'fusioncharts/fusioncharts.maps';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
//import World from 'fusioncharts/maps/fusioncharts.world';
import World from 'fusionmaps/maps/fusioncharts.worldwithcountries'


 
export default function WorldMap(props) {
    const  data  = props.country;
    const refineddata = []; 
    var i=0;
    data.map((item)=>{
       return(
               refineddata[i].label=item.Country,
         refineddata[i].value=item.TotalConfirmed,
             i++
         )
     });
    console.log(refineddata);
    ReactFC.fcRoot(FusionCharts,Maps, World, FusionTheme);

const dataSource = {
        chart: {
            caption: "COVID-19 World Distribution",
            subcaption: "2020",
            includevalueinlabels: "1",
            labelsepchar: ": ",
            entityFillHoverColor: "#FFF9C4",
            theme: "fusion"
        },
        colorrange: {
            minvalue: "0",
            code: "#7CFC00",
            gradient: "1",
            color: [
                {
                    minvalue: "0.0",
                    maxvalue: "500.0",
                    color: "#7CFC00"
                },
                {
                    minvalue: "500.0",
                    maxvalue: "25000.0",
                    color: "#FF8C00"
                },
                {
                    minvalue: "25000.0",
                    maxvalue: "400000.0",
                    color: "#FF0000	"
                }
            ]
        },
        data: refineddata,
    };
    const chartConfigs = {
        type: 'World',
        width : "100%",
        height:  "100%",
        dataFormat: 'json',
        dataSource: dataSource ,
      };


return (
    
    <div>
       
        <ReactFC {...chartConfigs} />;
    </div>
  );
}*/