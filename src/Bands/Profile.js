import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import { deleteBand } from '../actions/bandActions';
import Navbar from '../Navbar'
import Profile from './ProfileContainer'

class BandProfile extends Component {

  state = {
    delete: false
  }


  deleteProfile = () => {
    console.log("DELETE")
    this.props.deleteBand(this.props.band.id)
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
    } else if (this.props.band) {
      return (
        <div id="bandProfile" className="background scroll">
          <Navbar />
          <Profile band={this.props.band} bar={this.profileBar()}/>
        </div>
      )
    } else {
      return null
    }

  }
}

BandProfile.propTypes = {
  deleteBand: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const band = state.bands.bands.find(band => band.id == localStorage.getItem('user_id'))
  return {band: band}
}

function mapDispatchToProps(dispatch) {
  return {deleteBand: bindActionCreators(deleteBand, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandProfile)
