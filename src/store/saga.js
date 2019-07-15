import { runClockSaga, loadDataSaga } from '../containers/test/test.sagas';
import { all, call, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../containers/test/test.actions';
import authSagas from '../containers/signin/signin.sagas';

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    authSagas()
  ]);
}

export default rootSaga;
