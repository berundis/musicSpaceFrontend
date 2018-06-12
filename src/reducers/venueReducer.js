import { FETCH_VENUES, NEW_VENUE} from '../actions/types';

const initialState = {
  venues: [],
  venue: {}
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
        venue: action.payload
      }
    default:
      return state;
  }
}