import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = () => {
    // Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  return (
    <div>
      <h2>Doughnut Chart Example</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
