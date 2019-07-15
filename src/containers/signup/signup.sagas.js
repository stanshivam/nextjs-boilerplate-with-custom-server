import { take, put, call, fork } from 'redux-saga/effects';
import Router from 'next/router';
import Auth from './signup.service';
import { REQUEST_SIGNUP } from './signup.constants';
// import { setCookie, removeCookie } from '../../utility/cookie';
import {
  authenticate,
  requestSignupSuccess,
  requestSignupFailure
} from './signup.actions';

const signupCall = data => {
  return new Promise((resolve, reject) => {
    Auth.signup(data).then(result => {
      if (result.status === 200) {
        result.json().then(result => resolve(result));
      } else if (result.status === 400) {
        result.json().then(result => reject(result.error));
      }
    });
  });
};

function* watchRequestSignupRequest() {
  while (true) {
    const { data } = yield take(REQUEST_SIGNUP);
    try {
      const response = yield call(signupCall, data);
      // setCookie('token', response.token);
      yield put(requestSignupSuccess(response));
      yield put(authenticate(response.token));
      Router.push('/');
    } catch (error) {
      yield put(requestSignupFailure(error));
    }
  }
}

export default function* root() {
  yield fork(watchRequestSignupRequest);
}
