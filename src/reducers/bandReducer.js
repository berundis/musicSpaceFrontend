import { FETCH_BANDS, NEW_BAND} from '../actions/types';

const initialState = {
  bands: [],
  band: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BANDS:
    console.log('reducer');
      return {
        ...state,
        bands: action.payload
      }
    default:
      return state;
  }
}
