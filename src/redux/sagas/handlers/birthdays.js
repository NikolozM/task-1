import { call, put } from 'redux-saga/effects';
import { setBirthdays } from '../../ducks/birthdays';
import { requestGetBirthdays } from '../requests/birthdays';

export function* handleGetBirthdays(action) {
  try {
    const response = yield call(requestGetBirthdays);
    const { data } = response;
    yield put(setBirthdays(data));
  } catch (error) {
    console.log(error);
  }
}
