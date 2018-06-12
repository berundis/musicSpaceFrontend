
import {NavLink} from 'react-router-dom'

import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    let profile = '';
    if(localStorage.getItem("profile_type") === "venue") {
      profile = "venue"
    } else if(localStorage.getItem("profile_type") === "band") {
      profile = "band"
    }
    if(localStorage.getItem("token")){
      return (
        <div id="Navigation">
          <NavLink activeClassName="active" to="/bands">Bands</NavLink> 
          <NavLink activeClassName="active" to="/venues">Venues</NavLink>
          <NavLink activeClassName="active" to={`/${profile}`}>Profile</NavLink>
        </div>
      )
    } else {
      return null 
    }
  }
}

