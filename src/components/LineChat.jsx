import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Line 1',
      borderColor: 'rgba(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'Line 2',
      borderColor: 'rgba(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      data: [10, 15, 8, 5, 25, 35, 50],
    },
  ],
};

function LineChart() {
  return (
    <div className='bg-white border border-secondary'>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
