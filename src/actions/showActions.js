import { FETCH_SHOWS, NEW_SHOW, EDIT_SHOW, DELETE_SHOW } from './types'

export const fetchShows = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/shows')
  .then(res => res.json())
  .then(shows => dispatch({
    type: FETCH_SHOWS,
    payload: shows
  }))
}

export const createShow = (showData) => (dispatch) => {
  fetch('http://localhost:3000/api/v1/shows',{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(showData)
  })
  .then(res => res.json())
  .then(show => dispatch({
    type: NEW_SHOW,
    payload: show
  })).then(console.log)
}

export const editShow = (showData) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/shows/${showData.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(showData)
  })
  .then(res => res.json())
  .then( show => dispatch({
    type: EDIT_SHOW,
    payload: show
  })).then( show => console.log("EDIT", show))
}

export const deleteShow = (id) => (dispatch) =>{
  fetch( `http://localhost:3000/api/v1/shows/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(show => {
    return dispatch({
      type: DELETE_SHOW,
      payload: id
  })})
}
