import React from 'react'

const ProfileContainer = (props) => (
  <div>
    <br/>
    <img alt={props.venue.name} src={props.venue.profile_img}/>
    <h1>{props.venue.name}</h1>
    <h3>Location: {props.venue.location}</h3>
    <h3>Genres: {props.venue.genres}</h3>
    <h3>Description: {props.venue.description}</h3>
    <br/>
  </div>
)

export default ProfileContainer
