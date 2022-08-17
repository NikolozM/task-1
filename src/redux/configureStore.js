import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import birthdaysReducer from './ducks/birthdays';
import currencyReducer from './ducks/currency';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  birthdays: birthdaysReducer,
  currency: currencyReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  applyMiddleware(...middleware)
);

sagaMiddleware.run(watcherSaga);

export default store;
