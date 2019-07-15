import {
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAILURE
} from './signup.constants';

const initialState = {
  isLoading: false,
  errorMessage: ''
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP:
      return Object.assign({}, state, {
        isLoading: true,
        failureMessage: ''
      });
    case REQUEST_SIGNUP_SUCCESS:
      return {
        ...state,
        failureMessage: '',
        isLoading: false
      };
    case REQUEST_SIGNUP_FAILURE:
      return {
        ...state,
        failureMessage: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default signupReducer;
