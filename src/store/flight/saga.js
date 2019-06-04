import actions from './actions';
import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { Cheap, Business } from 'services/flight';

export function* getCheapSaga() {
  yield takeEvery(actions.CHEAP_REQUEST, function*() {
    try {
      yield put({ type: actions.CHEAP_LOADING, loading: true });

      // get request
      const res = yield call(Cheap);
      // handle request
      if (res.status === 200) {
        yield put({ type: actions.CHEAP_SUCCESS, payload: res.data.data });
      } else {
        yield put({ type: actions.CHEAP_ERROR, error: res.data.message });
      }

      yield put({ type: actions.CHEAP_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.CHEAP_ERROR, error: error.message });
    }
  });
}

export function* getBusinessSaga() {
  yield takeEvery(actions.BUSINESS_REQUEST, function*() {
    try {
      yield put({ type: actions.BUSINESS_LOADING, loading: true });

      // get request
      const res = yield call(Business);
      // handle request
      if (res.status === 200) {
        yield put({ type: actions.BUSINESS_SUCCESS, payload: res.data.data });
      } else {
        yield put({ type: actions.BUSINESS_ERROR, error: res.data.message });
      }

      yield put({ type: actions.BUSINESS_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUSINESS_ERROR, error: error.message });
    }
  });
}

export function* createSaga() {
  yield takeEvery(actions.CREATE_FLIGHT_REQUEST, function*(data) {
    try {
      yield put({ type: actions.CREATE_FLIGHT_LOADING, loading: true });
      const type = yield data.params.type;
      delete data.params.type;
      yield put({
        type: actions.CREATE_FLIGHT_SUCCESS,
        payload: { type: type, params: data.params }
      });

      yield put({ type: actions.CREATE_FLIGHT_LOADING, loading: false });
    } catch (error) {
      yield put({ type: actions.BUSINESS_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getCheapSaga), fork(getBusinessSaga), fork(createSaga)]);
}
