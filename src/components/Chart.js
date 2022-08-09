import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Data from './Data';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  //   const [currencyData, setCurrencyData] = useState({
  //     labels: Data.map((data) => data.month),
  //     datasets: [
  //       {
  //         label: 'Currency History',
  //         data: Data.map((data) => data.currency),
  //         fill: false,
  //         borderColor: 'rgb(75, 192, 192)',
  //         tension: 0.1,
  //       },
  //     ],
  //   });

  return (
    <div>
      {/* <Line data={currencyData} /> */}
      <Data/>
    </div>
  );
};

export default Chart;
