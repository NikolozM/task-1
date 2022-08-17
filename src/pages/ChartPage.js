import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  usdRates,
  eurRates,
} from '../components/currencyData';
import { Chart as ChartJS } from 'chart.js/auto';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrency,
  setCurrency,
} from '../redux/ducks/currency';
const Chart = () => {
  const dispatch = useDispatch();
  const [currencyData, setCurrencyData] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    dispatch(getCurrency());
    // setRows(
    //   currency?.usdRates?.map((item, index) => {
    //     return {
    //       id: index + 1,
    //       date: item.date,
    //       USD: item.GEL.toString(),
    //       EUR: item.GEL.toString(),
    //     };
    //   })
   // )
  },[])

  //   setCurrencyData({
  //     labels: currency?.usdRates?.map((data) => data.date),
  //     datasets: [
  //       {
  //         label: 'USD Currency History',
  //         data: currency?.usdRates?.map((data) => data.GEL),
  //         fill: false,
  //         borderColor: 'rgb(75, 192, 192)',
  //         tension: 0.1,
  //       },
  //       {
  //         label: 'EUR Currency History',
  //         data: currency?.eurRates?.map((data) => data.GEL),
  //         fill: false,
  //         borderColor: 'rgb(75, 12, 192)',
  //         tension: 0.1,
  //       },
  //     ],
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //           position: 'top',
  //         },
  //         title: {
  //           display: true,
  //           text: 'Chart.js Line Chart',
  //         },
  //       },
  //     },
  //   });
  // }, [dispatch]);
  const currency = useSelector(
    (state) => state.currency.currency
  );
  console.log(currency);
  useEffect(() => {
    setRows(
      currency?.usdRates?.map((item, index) => {
        return {
          id: index + 1,
          date: item.date,
          USD: item.GEL.toString(),
          EUR: item.GEL.toString(),
        };
      })
   )
  }, [currency])
  

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


    return (
      <div>
        <div
          style={{
            width: '40%',
            display: 'flex',
            margin: 'auto',
          }}
        >
          {/* <Line data={currencyData} /> */}
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
            rows={currency}
            columns={columns}
            pageSize={30}
            rowsPerPageOptions={[30]}
          />
        </div>
      </div>
    );
};

export default Chart;
