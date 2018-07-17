import { combineReducers } from 'redux';
import bandReducer from './bandReducer';
import venueReducer from './venueReducer';
<<<<<<< HEAD
import showReducers from './showReducers';
=======
import showReducer from './showReducer';
>>>>>>> redux

export default combineReducers ({
  bands: bandReducer,
  venues: venueReducer,
<<<<<<< HEAD
  shows: showReducers
=======
  shows: showReducer
>>>>>>> redux
});
