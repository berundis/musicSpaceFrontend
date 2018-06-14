import { FETCH_SHOWS, NEW_SHOW, EDIT_SHOW} from '../actions/types';

const initialState = {
  shows: [],
  show: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SHOWS:
      return {
        ...state,
        shows: action.payload
      }
    case NEW_SHOW:
      return {
        ...state,
        show: action.payload
      }
    case EDIT_SHOW:
      return {
        ...state,
        show: action.payload
      }
    default:
      return state;
  }
}