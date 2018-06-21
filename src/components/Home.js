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
        <h1 className="translucent home">Welcome To Music Space</h1>
      </div>
    </div>
  )
}
