import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileContainer from '../../containers/Venue/ProfileContainer';
import {deleteVenue} from '../../actions/venueActions';
import NavBar from '../../containers/NavBar';
import "../../CSS/Style.css"

class Profile extends Component {

  state = {
    venue: {},
    delete: false
  }

  componentDidMount() {
    this.getVenue();
  }

  getVenue = () => {
    if (localStorage.getItem('token')) {
      fetch(`http://localhost:3000/api/v1/venues/${localStorage.getItem('user_id')}`, {
        headers: {
          "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token'),
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          venue: json
        });
      });
    } else {
      this.props.history.push("/login")
    }
  }

  deleteProfile = () => {
    this.props.deleteVenue(this.state.venue.id) 
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('profile_type')
    this.setState({delete: true})
  }

  render() {
    if(this.state.delete){
      return <Redirect to="/" />
    }
    return (
      <div>
        <NavBar />
        <div className="center">
          <div className="translucent">
            <Link to={`/venue/edit`}>Edit Profile</Link>
            <Link to={`/shows/create`}>Create A Show</Link>
            <button onClick={this.deleteProfile}>Delete Profile</button>
          </div>
        </div>
        <ProfileContainer venue={this.state.venue} />
      </div>
    )
  }
}

Profile.propTypes = {
  deleteVenue: PropTypes.func.isRequired
}

export default connect(null, { deleteVenue })(Profile);