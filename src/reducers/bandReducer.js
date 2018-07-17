import { FETCH_BANDS, NEW_BAND, EDIT_BAND, DELETE_BAND} from '../actions/types';

const initialState = {
  bands: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'START_FETCH_BANDS':
      return Object.assign({}, state, {loading: true})
    case FETCH_BANDS:
      return {
        ...state,
        loading: false,
        bands: action.payload
      }
    case NEW_BAND:
      return {
        ...state,
        loading: false,
        bands: state.bands.concat(action.payload)
      }
    case EDIT_BAND:
      const bands = []
      state.bands.forEach(band => {
        if (band.id === action.payload.id){
          bands.push(action.payload)
        } else {
          bands.push(band)
        }
      })
      return {
        ...state,
        loading: false,
        bands: bands
      }
    case DELETE_BAND:
      const bandsPresent = []
      state.bands.forEach(band => {
        if (band.id !== action.payload) {
          bandsPresent.push(band)
        }
      })
      return {
        ...state,
        loading: false,
        bands: bandsPresent
      }
    default:
      return state;
  }
}
