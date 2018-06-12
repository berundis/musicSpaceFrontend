import { FETCH_VENUES, NEW_VENUE } from './types'

export const fetchVenues = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/venues')
  .then(res => res.json())
  .then(venues => dispatch({
    type: FETCH_VENUES,
    payload: venues
  }))
}

export const createVenue = (venueData) => (dispatch) => {
  console.log('post action')
  fetch('http://localhost:3000/api/v1/venues',{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(venueData)
  })
  .then(res => res.json())
  .then(venue => dispatch({
    type: NEW_VENUE,
    payload: venue
  }))
}