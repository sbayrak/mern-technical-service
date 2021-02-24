import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import record from './record';

export default combineReducers({
  alert,
  auth,
  record,
});
