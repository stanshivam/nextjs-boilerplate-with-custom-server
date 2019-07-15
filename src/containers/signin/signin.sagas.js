import { take, put, call, fork } from 'redux-saga/effects';
import Router from 'next/router';
import Auth from './signin.service';
import { REQUEST_LOGIN, DEAUTHENTICATE } from './signin.constants';
import { setCookie, removeCookie } from '../../utility/cookie';
import {
  requestLoginSuccess,
  requestLoginFailure,
  authenticate
} from './signin.actions';

const loginCall = data => {
  return new Promise((resolve, reject) => {
    Auth.login(data).then(result => {
      if (result.status === 200) {
        result.json().then(result => resolve(result));
      } else if (result.status === 400) {
        result.json().then(result => reject(result.error));
      }
    });
  });
};

function* watchRequestLoginRequest() {
  while (true) {
    const { data } = yield take(REQUEST_LOGIN);
    try {
      const response = yield call(loginCall, data);
      setCookie('token', response.token);
      yield put(requestLoginSuccess(response));
      yield put(authenticate(response.token));
      Router.push('/');
    } catch (error) {
      yield put(requestLoginFailure(error));
    }
  }
}

function* watchRequestLogoutRequest() {
  while (true) {
    yield take(DEAUTHENTICATE);
    debugger;
    try {
      debugger;
      removeCookie('token');
      Router.push('/');
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* root() {
  yield fork(watchRequestLoginRequest);
  yield fork(watchRequestLogoutRequest);
}
