import { call, put } from 'redux-saga/effects';
import { setCurrency } from '../../ducks/currency';
import { requestGetCurrency } from '../requests/currency';

export function* handleGetCurrency(action) {
  try {
    const response = yield call(requestGetCurrency);
    const { data } = response;
    const currencyData = {
      labels: data.usdRates.map((item) => item.date),
      datasets: [
        {
          label: 'USD Currency History',
          data: data.usdRates.map((item) => item.GEL),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
        {
          label: 'EUR Currency History',
          data: data.eurRates.map((item) => item.GEL),
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
    };

    const currency = data.usdRates.map((item, index) => {
      return {
        id: index + 1,
        date: item.date,
        USD: data.usdRates[index].GEL,
        EUR: data.eurRates[index].GEL
      };
    });

    yield put(
      setCurrency(
        [...currency],
        // currencyDates,
        // currencyUSD,
        // currencyEUR,
        currencyData
      )
    );
  } catch (error) {
    console.log(error);
  }
}
