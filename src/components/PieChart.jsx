import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

function PieChart() {
  return (
    <div className='bg-white border'>
      <Pie data={data}></Pie>
    </div>
  );
}

export default PieChart;
