import React from 'react'

const VenueContainer = (props) => (
    <div>
        <br/>
        <img alt={props.name} src={props.venue.profile_img}/>
        <h1>{props.venue.name}</h1>
        <h3>Location: {props.venue.location}</h3>
        <h3>Genre: {props.venue.genres}</h3>
        <h3>Description: {props.venue.description}</h3>
        <br/>
    </div>
)

export default VenueContainer
