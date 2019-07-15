import {
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILURE
} from './signup.constants';

export const requestSignup = data => ({
  type: REQUEST_SIGNUP,
  data
});

export const requestSignupSuccess = res => {
  return {
    type: REQUEST_SIGNUP_SUCCESS,
    res
  };
};

export const requestSignupFailure = error => ({
  type: REQUEST_SIGNUP_FAILURE,
  error
});
