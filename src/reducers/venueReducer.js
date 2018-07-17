import { FETCH_VENUES, NEW_VENUE, EDIT_VENUE, DELETE_VENUE } from '../actions/types';

const initialState = {
  venues: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_VENUES:
      return {
        ...state,
        venues: action.payload
      }
    case NEW_VENUE:
      return {
        ...state,
        venues: state.venues.concat(action.payload)
      }
      case EDIT_VENUE:
        const venues = []
        state.venues.forEach(venue => {
          if(venue.id === action.payload.id) {
            venues.push(action.payload)
          } else {
            venues.push(venue)
          }
        })
        return {
          ...state,
          venues: venues
        }
      case DELETE_VENUE:
      const venuesPresent = []
      state.venues.forEach(venue => {
        if (venue.id !== action.payload) {
          venuesPresent.push(venue)
        }
      })
      return {
        ...state,
        loading: false,
        venues: venuesPresent
      }
      return {
        ...state,
        venues: venues
      }
    default:
      return state;
  }
}
