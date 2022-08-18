export const GET_CURRENCY = 'GET_CURRENCY';
export const SET_CURRENCY = 'SET_CURRENCY';

export const getCurrency = () => ({
  type: GET_CURRENCY,
});
export const setCurrency = (
  currency,
  // currencyDates,
  // currencyUSD,
  // currencyEUR,
  currencyData
) => ({
  type: SET_CURRENCY,
  currency,
  // currencyDates,
  // currencyUSD,
  // currencyEUR,
  currencyData,
});
const initialState = {
  currency: [],
  // currencyDates: [],
  // currencyUSD: [],
  // currencyEUR: [],
  currencyData : {
    labels: "",
    datasets: [
      {
        label: 'USD Currency History',
        data: "",
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'EUR Currency History',
        data: "",
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
}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      const {
        currency,
        // currencyDates,
        // currencyUSD,
        // currencyEUR,
        currencyData,
      } = action;
      return {
        ...state,
        currency: currency,
        // currencyDates: currencyDates,
        // currencyEUR: currencyEUR,
        // currencyUSD: currencyUSD,
        currencyData: currencyData,
      };
    default:
      return state;
  }
};
