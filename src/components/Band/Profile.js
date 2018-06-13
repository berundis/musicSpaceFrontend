import React, { Component } from 'react';
import ProfileContainer from '../../containers/Band/ProfileContainer';
import {Link} from 'react-router-dom';

export default class Profile extends Component {

  state = {
    band: {}
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
  render() {
    return (
      <div>
        <ProfileContainer band={this.state.band} />
        <Link to={`/band/edit`}>EDIT</Link>
      </div>
    )
  }
}
