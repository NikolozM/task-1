import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../redux/ducks/currency';
const Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, []);
  const currency = useSelector(
    (state) => state.currency.currency
  );
  const currencyData = useSelector(
    (state) => state.currency.currencyData
  );
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
