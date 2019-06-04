import { all } from 'redux-saga/effects';
import flightSagas from 'store/flight/saga';

export default function* rootSaga() {
  yield all([ flightSagas() ]);
}
