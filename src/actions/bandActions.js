import { FETCH_BANDS, NEW_BAND, EDIT_BAND, DELETE_BAND } from './types'

export function fetchBands() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_BANDS' })
    return fetch('http://localhost:3000/api/v1/bands')
      .then(res => res.json())
      .then(bands => dispatch({
        type: FETCH_BANDS,
        payload: bands
      }))
  }
}

export function createBand(bandData) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_BANDS'})
    return fetch('http://localhost:3000/api/v1/bands', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bandData)
    })
      .then(res => res.json())
      .then(band => dispatch({
        type: NEW_BAND,
        payload: band
      }))
  }
}
export function editBand(bandData) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_BANDS'})
    return fetch(`http://localhost:3000/api/v1/bands/${bandData.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bandData)
    })
      .then(res => res.json())
      .then( band => dispatch({
        type: EDIT_BAND,
        payload: band
      }))
  }
}

export const deleteBand = (id) => (dispatch) => {
  dispatch({ type: 'START_FETCH_BANDS'})
  return fetch( `http://localhost:3000/api/v1/bands/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(band => {
    return dispatch({
      type: DELETE_BAND,
      payload: band.bandId
  })})
}
