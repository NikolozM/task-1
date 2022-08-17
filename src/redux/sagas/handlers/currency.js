import { call, put } from 'redux-saga/effects';
import { setCurrency } from '../../ducks/currency';
import { requestGetCurrency } from '../requests/currency';



export function* handleGetCurrency(action) {
  try {
    const response = yield call(requestGetCurrency);
    const { data } = response;

    yield put(setCurrency(data));
  } catch (error) {
    console.log(error);
  }
}
