import { FETCH_SHOWS, NEW_SHOW, EDIT_SHOW, DELETE_SHOW } from '../actions/types';

const initialState = {
  shows: []
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
        shows: state.shows.concat(action.payload)
      }
    case EDIT_SHOW:
      const shows = []
      state.shows.forEach(show => {
        if(show.show.id === action.payload.id) {
          shows.push(action.payload)
        } else {
          shows.push(show)
        }
      })
      return {
        ...state,
        shows: shows
      }
    case DELETE_SHOW:
      const showsPresent = []
      state.shows.forEach(show => {
        if(show.show.id !== action.payload) {
          showsPresent.push(show)
        }
      })
      return {
        ...state,
        shows: showsPresent
      }
    default:
      return state;
  }
}
