import React from 'react'
import FusionCharts from 'fusioncharts';
import Maps from 'fusionmaps/fusioncharts.maps';
import India from 'fusionmaps/maps/fusioncharts.india';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

export default function IndiaMap(props) {
    const  data  = props.states;
    const refineddata = []; 
    var i=0;
    data.map((item)=>{
        return(
            refineddata[i]=item.confirmed,
            i++
        )
    });
    
    ReactFC.fcRoot(FusionCharts,Maps, India, FusionTheme);

const dataSource = {
        chart: {
            caption: "COVID-19 Spread in India",
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
        data: [
            {
                id: "021",
                value: refineddata[1]
            },
            {
                id: "001",
                value: refineddata[35]
            },
            {
                id: "002",
                value: refineddata[12]
            },
            {
                id: "003",
                value: refineddata[32]
            },
            {
                id: "004",
                value: refineddata[16]
            },
            {
                id: "005",
                value: refineddata[13]
            },
            {
                id: "006",
                value: refineddata[28]
            },
            {
                id: "007",
                value: refineddata[21]
            },
            {
                id: "008",
                value: refineddata[34]
            },
            {
                id: "009",
                value: refineddata[34]
            },
            {
                id: "010",
                value: refineddata[3]
            },
            {
                id: "011",
                value: 1231
            },
            {
                id: "012",
                value: refineddata[4]
            },
            {
                id: "013",
                value: refineddata[9]
            },
            {
                id: "014",
                value: refineddata[26]
            },
            {
                id: "015",
                value: refineddata[15]
            },
            {
                id: "016",
                value: refineddata[22]
            },
            {
                id: "017",
                value: refineddata[10]
            },
            {
                id: "018",
                value: refineddata[19]
            },
            {
                id: "019",
                value: refineddata[37]
            },
            {
                id: "020",
                value: refineddata[8]
            },
            {
                id: "022",
                value: refineddata[27]
            },
            {
                id: "023",
                value: refineddata[36]
            },
            {
                id: "024",
                value: refineddata[31]
            },
            {
                id: "025",
                value: refineddata[30]
            },
            {
                id: "026",
                value: refineddata[17]
            },
            {
                id: "027",
                value: refineddata[29]
            },
            {
                id: "028",
                value: refineddata[18]
            },
            {
                id: "029",
                value: refineddata[6]
            },
            {
                id: "030",
                value: refineddata[33]
            },
            {
                id: "031",
                value: refineddata[2]
            },
            {
                id: "032",
                value: refineddata[23]
            },
            {
                id: "033",
                value: refineddata[5]
            },
            {
                id: "034",
                value: refineddata[20]
            },
            {
                id: "035",
                value: refineddata[7]
            },
            {
                id: "036",
                value: refineddata[14]
            },
            
        ]
    };
    const chartConfigs = {
        type: 'India',
        width : "50%",
        height:  "20%",
        dataFormat: 'json',
        dataSource: dataSource ,
      };

return (
    
    <div>
       
        <ReactFC {...chartConfigs} />;
    </div>
  );
}