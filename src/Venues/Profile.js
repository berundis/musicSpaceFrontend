import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import { deleteVenue } from '../actions/venueActions';
import Navbar from '../Navbar'
import Profile from './ProfileContainer'

class VenueProfile extends Component {

  state = {
    delete: false
  }


  deleteProfile = () => {
    this.props.deleteVenue(this.props.venue.id)
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('profile_type')
    this.setState({delete: true})
  }

  profileBar = () => (
    <div className="center">
      <div className="translucent outer bar">
        <ul>
          <li>
            <Link to={`/profile/edit`}>Edit Profile</Link>
            <Link to={`/shows/create`}>Create A Show</Link>
            <Link to={`/`} onClick={this.deleteProfile}>Delete Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  )

  render() {
    if(this.state.delete){
      return <Redirect to="/" />
    } else if (this.props.venue) {
      return (
        <div id="venueProfile" className="background scroll">
          <Navbar />
          <Profile venue={this.props.venue} bar={this.profileBar()}/>
        </div>
      )
    } else {
      return null
    }

  }
}

VenueProfile.propTypes = {
  deleteVenue: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const venue = state.venues.venues.find(venue => venue.id == localStorage.getItem('user_id'))
  return {venue: venue}
}

function mapDispatchToProps(dispatch) {
  return {deleteVenue: bindActionCreators(deleteVenue, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueProfile)
