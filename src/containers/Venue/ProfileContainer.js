import React from 'react'

const ProfileContainer = (props) => (
    <div>
        <br/>
        <img alt={props.name} src={props.venue.profile_img}/>
        <h1>{props.venue.name}</h1>
        <h3>Location: {props.venue.location}</h3>
        <h3>Genres: {props.venue.genre}</h3>
        <h3>Description: {props.venue.bio}</h3>
        <br/>
    </div>
)

export default ProfileContainer
