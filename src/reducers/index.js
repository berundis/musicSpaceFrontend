import { combineReducers } from 'redux';
import bandReducer from './bandReducer';

export default combineReducers ({
  bands: bandReducer
});
