import { combineReducers } from 'redux';
import reducer from '../containers/test/test.reducer';
import signinReducer from '../containers/signin/signin.reducer';

const rootReducer = combineReducers({
  test: reducer,
  auth: signinReducer
});

export default rootReducer;
