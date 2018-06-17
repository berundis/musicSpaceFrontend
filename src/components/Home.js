import React from 'react';
import {NavLink} from 'react-router-dom';
import '../CSS/Background.css'
import '../CSS/Style.css'
import NavBar from '../containers/NavBar'

export default () => {
  return (
    <div id="home" className='background'>
      <NavBar />
      <div className="center outer">
        <h1 className="translucent">Welcome To The Band Venue Website</h1>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink><br/>
        <NavLink to="/bandregister">Register as a Band</NavLink><br/>
        <NavLink to="/venueregister">Register as a Venue</NavLink>
      </div>
    </div>
  )
}
