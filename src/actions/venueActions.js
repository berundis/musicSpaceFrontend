<<<<<<< HEAD
import { FETCH_VENUES, FETCH_VENUE, NEW_VENUE, EDIT_VENUE, DELETE_VENUE } from './types'
=======
import { FETCH_VENUES, NEW_VENUE, EDIT_VENUE, DELETE_VENUE } from './types'
>>>>>>> redux

export const fetchVenues = () => (dispatch) => {
  fetch('http://localhost:3000/api/v1/venues')
  .then(res => res.json())
  .then(venues => dispatch({
    type: FETCH_VENUES,
    payload: venues
  })).then(console.log("Get Venues"))
}

export const fetchVenue = (id) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/venues/${id}`)
  .then(res => res.json())
  .then(venue => dispatch({
    type: FETCH_VENUE,
    payload: venue
  })).then(console.log("Get Venue"))
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
<<<<<<< HEAD
  })).then(console.log("Create Venue"))
=======
  }))
>>>>>>> redux

}

export const editVenue = (venueData) => (dispatch) => {
  fetch(`http://localhost:3000/api/v1/venues/${venueData.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(venueData)
  })
  .then(res => res.json())
  .then( venue => dispatch({
    type: EDIT_VENUE,
    payload: venue
<<<<<<< HEAD
  })).then(venue => console.log("Edit Venue"))
}

export const deleteVenue = (id) => (dispatch) =>{
=======
  }))
}

export const deleteVenue = (id) => (dispatch) => (
>>>>>>> redux
  fetch( `http://localhost:3000/api/v1/venues/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(venue => {
    return dispatch({
      type: DELETE_VENUE,
<<<<<<< HEAD
      payload: id
  })})
}
=======
      payload: venue.venueId
  })})
)
>>>>>>> redux
