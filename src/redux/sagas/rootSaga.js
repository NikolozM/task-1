import { takeLatest } from 'redux-saga/effects';
import { handleGetCurrency } from './handlers/currency';
import { handleGetBirthdays } from './handlers/birthdays';
import { GET_CURRENCY } from '../ducks/currency';
import { GET_BIRTHDAYS } from '../ducks/birthdays';

export function* watcherSaga() {
  yield takeLatest(GET_BIRTHDAYS, handleGetBirthdays);
  yield takeLatest(GET_CURRENCY, handleGetCurrency);
}
