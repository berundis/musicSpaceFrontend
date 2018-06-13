import { FETCH_BANDS, NEW_BAND, EDIT_BAND } from './types'

export const fetchBands = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/bands')
  .then(res => res.json())
  .then(bands => dispatch({
    type: FETCH_BANDS,
    payload: bands
  }))
}

export const createBand = (bandData) => (dispatch) => {
  console.log('post action')
  fetch('http://localhost:3000/api/v1/bands',{
    method:'POST',
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

export const editBand = (bandData) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/bands/${bandData.id}`, {
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

