import { combineReducers } from 'redux';
import dachinformationReducer from './dachinformationSlice';

const rootReducer = combineReducers({
  dachinformation: dachinformationReducer,
});

export default rootReducer;
