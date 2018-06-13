import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import CreateBand from '../components/Band/CreateBand';
import CreateVenue from '../components/Venue/CreateVenue';
import Band from '../components/Band/Band';
import BandProfile from '../components/Band/Profile';
import Venue from '../components/Venue/Venue';
import VenueProfile from '../components/Venue/Profile';
import AllRoutes from './AllRoutes';
import EditBand from '../components/Band/EditBand';
import EditVenue from '../components/Venue/EditVenue';

class Routes extends React.Component {
  getRoutes = () => {
    if (localStorage.getItem('token')) {
      return (
        <div>
        <Route path="/bands" exact component={Band} />
        <Route path="/venues" exact component={Venue} /> 
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  } 

  login = (email, password, callback) => {
    fetch("http://localhost:3000/api/v1/sessions", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      localStorage.setItem('user_id', json.user_id);
      localStorage.setItem('email', json.email); 
      localStorage.setItem('profile_type', json.profile_type)
      if (json.token && json.profile_type === "band") {
        callback('/band')
      } else if(json.token && json.profile_type === "venue"){
        callback('/venue')
      } else {
        callback('/login')
      }   
    })
  }

  editDeleteRoutes = () => {
    if (localStorage.getItem('token') && localStorage.getItem('profile_type') === 'band') {
      return  (
        <div>
          <Route path='/band' exact render={(props) => <BandProfile {...props} /> } />
          <Route path="/band/edit" render={(props) => <EditBand {...props} bandId={localStorage.getItem('user_id')}/>}  />
        </div>
      )
    } else if (localStorage.getItem('token') && localStorage.getItem('profile_type') === 'venue') {
      return (
        <div>
          <Route path="/venue" exact render={(props) => <VenueProfile {...props} /> } />
          <Route path="/venue/edit" render={(props) => <EditVenue {...props} venueId={localStorage.getItem('user_id')}/>}  />
        </div>
      )
    } else {
      return <Redirect to="/" /> 
    }
  }

  render() {
    return (
      <div>   
        <Route path="/" exact component={Home} />
        <Route path="/login" render={(props) => <Login onSubmit={this.login} {...props} />} />
        <Route path="/bandregister" render={(props) => <CreateBand {...props} />} />
        <Route path="/venueregister" render={(props) => <CreateVenue {...props} />} />
        {this.getRoutes()}
        {this.editDeleteRoutes()}
        <AllRoutes />  
      </div>
    )
  }
}


export default Routes;