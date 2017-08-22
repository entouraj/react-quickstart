import {combineReducers} from 'redux';

//import other reducer actions here
import test from './actions/test';

const applicationReducer = combineReducers({
  test
});

const rootReducer = (state, action) => {
  return applicationReducer(state, action)
};

export default rootReducer
