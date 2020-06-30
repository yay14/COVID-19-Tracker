import React from 'react';
import { Bar } from 'react-chartjs-2';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function WorldCharts(props) {

    const total = props.tot;
    const confirmed = total.confirmed;
    const deaths = total.deaths;
    const recovered = total.recovered;
    console.log(total);
    // var time1 = moment(Charts.date, "YYYY-MM-DDTHH:mm:ss.SSS");
    // var date = moment(time1,'DD/MM/YYYY HH:mm:ss.SSS').format('LL');
    const barChart = (
       
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed, recovered, deaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: ` Current COVID-19 Statistics  ` },
                }}
            />
       
    );


    return (
        <div className="col-12">
            { barChart }
        </div>
    );
};