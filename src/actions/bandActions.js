import { FETCH_BANDS, NEW_BAND } from './types'

export const fetchBands = (dispatch) => {
  return function(dispatch) {
    console.log("fetching bands");
    fetch('http://localhost:3000/api/v1/bands')
    .then(res => res.json())
    .then(bands => dispatch({
      type: FETCH_BANDS,
      payload: bands
    }))
  }
}
