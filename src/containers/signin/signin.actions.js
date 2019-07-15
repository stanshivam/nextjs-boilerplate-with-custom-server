import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE,
  AUTHENTICATE,
  DEAUTHENTICATE
} from './signin.constants';

export const requestLogin = data => ({
  type: REQUEST_LOGIN,
  data
});

export const requestLoginSuccess = res => {
  return {
    type: REQUEST_LOGIN_SUCCESS,
    res
  };
};

export const requestLoginFailure = error => ({
  type: REQUEST_LOGIN_FAILURE,
  error
});

export const authenticate = token => ({
  type: AUTHENTICATE,
  token
});

export const deauthenticate = () => {
  return {
    type: DEAUTHENTICATE
  };
};
