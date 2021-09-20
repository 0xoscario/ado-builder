//ANDRValue - A visual charting component for illustrating the fluctuations in the ANDR value across time
import React from 'react'
import {Line} from 'react-chartjs-2'


/* Green options for datasets[]
    backgroundColor: 'rgb(40, 146, 81)',
    borderColor: 'rgba(28, 228, 55, 0.8)',
*/

//Setup /////////////////////////////////////////////////////////////////////////////
const ANDRVallue = (props) => {
    const data = {
        labels: ['MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
        datasets: [
            {
            label: 'Growth',
            data: [1, 2, 5, 8, 3, 12, 18],
            fill: true,
            backgroundColor: 'rgba(240, 241, 248, 0.6)',
            borderColor: 'rgba(118, 98, 230, 0.4)',
            
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                backgroundColor: 'rgb(255,255,255)',
                color: 'rgb(255,255,255)',
                },
            },
            ],
            xAxes: [{
                gridLines: {
                    zeroLineColor: '#fffff'
                }
            }],
        },
    };

    return (
        <Line data={data} options={options} />
    )
}

export default ANDRVallue