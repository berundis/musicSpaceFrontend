import { combineReducers } from 'redux';
import bandReducer from './bandReducer';
import venueReducer from './venueReducer';
import showReducer from './showReducer';

export default combineReducers ({
  bands: bandReducer,
  venues: venueReducer,
  shows: showReducer
});
