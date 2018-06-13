import React from 'react'
import {NavLink} from 'react-router-dom';

const BandContainer = (props) => (
    <div>
        <br/>
        <NavLink to={`/bands/${props.band.id}`}><img alt={props.band.name} src={props.band.profile_img}/></NavLink>
        <h1>{props.band.name}</h1>
        <h3>Location: {props.band.location}</h3>
        <h3>Genre: {props.band.genre}</h3>
        <br/><hr/>
    </div>
)

export default BandContainer
