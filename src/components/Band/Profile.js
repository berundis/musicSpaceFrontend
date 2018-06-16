import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileContainer from '../../containers/Band/ProfileContainer';
import { deleteBand } from '../../actions/bandActions';

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

  render() {
    if(this.state.delete){
      return <Redirect to="/" />
    }
    return (
      <div>
        <ProfileContainer band={this.state.band} />
        <Link to={`/band/edit`}>Edit Profile</Link>
        <br /> <br />
        <Link to={`/shows/create`}>Create A Show</Link>
        <br /> <br />
        <button onClick={this.deleteProfile}>Delete Profile</button>
      </div>
    )
  }
}

Profile.propTypes = {
  deleteBand: PropTypes.func.isRequired
}

export default connect(null, { deleteBand })(Profile);


