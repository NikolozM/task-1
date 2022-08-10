import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { usdRates, eurRates } from './currencyData';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  const [currencyData, setCurrencyData] = useState({
    labels: usdRates.map((data) => data.date),
    datasets: [
      {
        label: 'USD Currency History',
        data: usdRates.map((data) => data.GEL),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'EUR Currency History',
        data: eurRates.map((data) => data.GEL),
        fill: false,
        borderColor: 'rgb(75, 12, 192)',
        tension: 0.1,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    },
  });

  return (
    <div style={{width:"800px"}}>
      <Line data={currencyData} />
    </div>
  );
};

export default Chart;
