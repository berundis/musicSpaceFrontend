import { combineReducers } from 'redux';
import bandReducer from './bandReducer';
import venueReducer from './venueReducer';

export default combineReducers ({
  bands: bandReducer,
  venues: venueReducer
});
