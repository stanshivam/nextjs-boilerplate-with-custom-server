import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE,
  AUTHENTICATE,
  DEAUTHENTICATE
} from './signin.constants';

const initialState = {
  isLoading: false,
  errorMessage: '',
  token: null
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isLoading: true,
        failureMessage: ''
      });
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        failureMessage: '',
        isLoading: false
      };
    case AUTHENTICATE:
      return {
        ...state,
        token: action.token
      };
    case REQUEST_LOGIN_FAILURE:
      return {
        ...state,
        failureMessage: action.error,
        isLoading: false
      };
    case DEAUTHENTICATE:
      return {
        ...state,
        token: null
      }
    default:
      return state;
  }
};

export default signinReducer;
