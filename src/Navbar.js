
import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


export default class NavBar extends Component {

  logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('profile_type')
    this.setState({delete: true})
  }

  getLinks = () => {
    if(localStorage.getItem("token")){
      return (
        <div>
          <NavLink activeClassName="active" to='/profile'>Profile</NavLink>
          <NavLink activeClassName="active" to="/bands">Bands</NavLink>
          <NavLink activeClassName="active" to="/venues">Venues</NavLink>
          <NavLink activeClassName="active" to="/shows">Shows</NavLink>
          <NavLink activeClassName="active" to="/logout" exact onClick={this.logOut}>Log Out</NavLink>
        </div>
      )
    }else {
      return (
        <div>
          <NavLink activeClassName="active" to="/" exact>Home</NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
          <NavLink activeClassName="active" to="/registerband">Band Sign Up</NavLink>
          <NavLink activeClassName="active" to="/registervenue">Venue Sign Up</NavLink>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li>
          {this.getLinks()}
          </li>
        </ul>
      </div>
    )
  }
}
