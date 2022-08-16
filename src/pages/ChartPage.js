import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  usdRates,
  eurRates,
} from '../components/currencyData';
import { Chart as ChartJS } from 'chart.js/auto';
import { DataGrid } from '@mui/x-data-grid';

const Chart = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 200 },
    {
      field: 'USD',
      headerName: 'USD',
      width: 200,
    },
    {
      field: 'EUR',
      headerName: 'EUR',
      width: 200,
    },
  ];
  const rows = [];
  rows.push(
    usdRates.map((item, index) => {
      return {
        id: index + 1,
        date: item.date,
        USD: item.GEL.toString(),
        EUR: item.GEL.toString(),
      };
    })
  );

  console.log(rows);

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
    <div>
      <div
        style={{
          width: '40%',
          display: 'flex',
          margin: 'auto',
        }}
      >
        <Line data={currencyData} />
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          height: '800px',
        }}
      >
        <DataGrid
          rows={rows[0]}
          columns={columns}
          pageSize={30}
          rowsPerPageOptions={[30]}
        />
      </div>
    </div>
  );
};

export default Chart;
