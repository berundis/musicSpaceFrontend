import React from 'react'
import { NavLink, BrowserRouter, Redirect, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import VenueProfileContainer from './ProfileContainer'

const VenueContainer = (props) => (
    <div>
        {console.log("PROPS", props)}
        <div>
        <br/>
        <NavLink to={`/venues/${props.venue.id}`}><img alt={props.name} src={props.venue.profile_img}/></NavLink>
        <Link to={`/venues/${props.venue.id}`}><h1>{props.venue.name}</h1></Link>
        <h3>Location: {props.venue.location}</h3>
        <h3>Genres: {props.venue.genres}</h3>
        <h3>Description: {props.venue.description}</h3>
        <br/>
        </div>
    </div>
)




export default VenueContainer
