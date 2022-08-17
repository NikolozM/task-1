import axios from 'axios';

export function requestGetCurrency() {
  return axios.request({
    method: 'get',
    url: 'http://192.168.73.213:3000/getCurrency',
  });
}
