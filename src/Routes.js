import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Home from './Home'
import Login from './Login'

import BandsIndex from './Bands/index'
import ShowBand from './Bands/ShowBand'
import CreateBand from './Bands/CreateBand'
import BandProfile from './Bands/Profile'
import EditBand from './Bands/EditBand'

import VenuesIndex from './Venues/index'
import ShowVenue from './Venues/ShowVenue'
import CreateVenue from './Venues/CreateVenue'
import VenueProfile from './Venues/Profile'
import EditVenue from './Venues/EditVenue'

import ShowsIndex from './Shows/index'
import CreateShow from './Shows/CreateShow'
import ShowShow from './Shows/ShowShow'

class Routes extends Component {

  getRoutes = () => {
    if (localStorage.getItem('token')) {
      return (
        <div>
          <Route exact path='/bands' component={ BandsIndex } />
          <Route exact path='/bands/:bandId' component={ ShowBand } />
          <Route exact path='/venues' component={ VenuesIndex } />
          <Route exact path='/venues/:venueId' component={ ShowVenue } />
          <Route exact path='/shows' component={ ShowsIndex } />
          <Route exact path='/shows/:showId' component={ ShowShow } />
          <Route exact path="/shows/create" component={CreateShow} />
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }

  profileRoutes = () => {
    if (localStorage.getItem('token') && localStorage.getItem('profile_type') === 'band') {
      return  (
        <div>
          <Route path='/profile' exact component={BandProfile} />
          <Route path="/profile/edit" exact component={EditBand}/>
        </div>
      )
    } else if (localStorage.getItem('token') && localStorage.getItem('profile_type') === 'venue') {
      return (
        <div>
          <Route path='/profile' exact component={VenueProfile} />
          <Route path="/profile/edit" exact component={EditVenue}/>
        </div>
      )
    } else {
      return <Redirect to="/" />
    }
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path='/registerband' component={CreateBand} />
        <Route exact path='/registervenue' component={CreateVenue} />
        {this.getRoutes()}
        {this.profileRoutes()}
      </div>
    );
  }
}
export default Routes
