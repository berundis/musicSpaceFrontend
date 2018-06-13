
import {NavLink} from 'react-router-dom'

import React, { Component } from 'react'

export default class NavBar extends Component {

  logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('profile_type')
  }
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
          <button onClick={this.logOut}>Log Out</button>
        </div>
      )
    } else {
      return null 
    }
  }
}

