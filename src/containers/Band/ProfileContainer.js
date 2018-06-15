import React from 'react'
import BandShows from '../../components/Band/BandShows'

const ProfileContainer = (props) => (
  <div>
    <br/>
    <img alt={props.name} src={props.band.profile_img}/>
    <h1>{props.band.name}</h1>
    <h3>Location: {props.band.location}</h3>
    <h3>Genre: {props.band.genre}</h3>
    <h3>Bio: {props.band.bio}</h3>
    <h4>Shows:</h4>
    <BandShows bandId={props.band.id} />
    <br/>
  </div>
)

export default ProfileContainer
