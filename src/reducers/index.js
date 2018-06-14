import { combineReducers } from 'redux';
import bandReducer from './bandReducer';
import venueReducer from './venueReducer';
import showReducers from './showReducers';

export default combineReducers ({
  bands: bandReducer,
  venues: venueReducer,
  shows: showReducers
});
