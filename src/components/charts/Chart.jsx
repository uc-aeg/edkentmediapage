import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['Dec10', 'Dec11', 'Dec12', 'Dec13', 'Dec14', 'Dec15', 'Dec16', 'Dec17'],
        datasets: [
            {
                label: 'Type 1',
                data: [0.13, 0.27, 0.28, 0.35, 0.43, 0.59, 0.67, 0.81],
                fill: false,
                backgroundColor: '#0d6efd',
                borderColor: '#0d6efd',
            },
            {
                label: 'Type 2',
                data: [0.11, 0.289, 0.35, 0.40, 0.60, 0.65, 0.78, 0.88],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Type 3',
                data: [0.12, 0.28, 0.30, 0.49, 0.65, 0.71, 0.75, 0.90],
                fill: false,
                backgroundColor: '#917dcc',
                borderColor: '#917dcc',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                display: false
            },
        },
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index'
        }
    };

    return <Line data={data} options={options} />

}

export default LineChart;
