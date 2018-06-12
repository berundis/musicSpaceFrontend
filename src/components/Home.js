import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Welcome To The Band Venue Website</h1>
      <div>
        <NavLink to="/login">Login</NavLink><br/>
        <NavLink to="/bandregister">Register as a Band</NavLink><br/>
        <NavLink to="/venueregister">Register as a Venue</NavLink>
      </div>
    </div>
  )
}
