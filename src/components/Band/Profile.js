import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileContainer from '../../containers/Band/ProfileContainer';
import { deleteBand } from '../../actions/bandActions';
import NavBar from '../../containers/NavBar'

class Profile extends Component {

  state = {
    band: {},
    delete: false
  }

  componentDidMount() {
    this.getBand();
  }

  getBand = () => {
    if (localStorage.getItem('token')) {
      fetch(`http://localhost:3000/api/v1/bands/${localStorage.getItem('user_id')}`, {
        headers: {
          "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token'),
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          band: json
        });
      });
    } else {
      this.props.history.push("/login")
    }
  }

  deleteProfile = () => {
    this.props.deleteBand(this.state.band.id) 
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
            <Link to={`/band/edit`}>Edit Profile</Link>
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
    }
    return (
      <div>
        <NavBar />
        <ProfileContainer band={this.state.band} bar={this.profileBar()}/>
      </div>
    )
  }
}

Profile.propTypes = {
  deleteBand: PropTypes.func.isRequired
}

export default connect(null, { deleteBand })(Profile);


