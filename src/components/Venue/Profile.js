import React, { Component } from 'react';
import ProfileContainer from '../../containers/Venue/ProfileContainer';

export default class Profile extends Component {

  state = {
    venue: {}
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
  render() {
    return (
      <div>
        <ProfileContainer venue={this.state.venue} />
      </div>
    )
  }
}
