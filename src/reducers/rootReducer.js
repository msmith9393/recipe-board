import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user.js';
// import creditCardInfo from './creditCardInfo.js';

export default combineReducers({
  routing: routerReducer,
  state: user,
  // creditCardInfo: creditCardInfo
});