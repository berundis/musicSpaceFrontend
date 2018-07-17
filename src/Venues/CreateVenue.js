import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';

import { createVenue } from '../actions/venueActions';
import Navbar from '../Navbar'


class CreateVenue extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    state: '',
    city: '',
    genres: '',
    description: '',
    profile_img: '',
    done: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newVenue = this.state
    this.props.createVenue(newVenue)
    this.setState({ done: true })
  }

  render() {
    if (this.state.done) {
      return <Redirect to="/login"/>
    }
    return (
      <div id="venueRegister" className='background scroll'>
        <Navbar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h1>Create A Venue Account</h1>
            <div className="center">
              <div className="translucent formDiv">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                  <br/><br/>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                  <br/><br/>
                  <label htmlFor="name">Venue Name</label>
                  <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                  <br/><br/>
                  <label htmlFor="genres">Genres</label>
                  <input type="text" name="genres" onChange={this.handleChange} value={this.state.genres}/>
                  <br/><br/>
                  <label htmlFor="state">State</label>
                  <input type="text" name="state" onChange={this.handleChange} value={this.state.state}/>
                  <br/><br/>
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" onChange={this.handleChange} value={this.state.city}/>
                  <br/><br/>
                  <label htmlFor="description">Description</label>
                  <input type="text" name="description" onChange={this.handleChange} value={this.state.bio}/>
                  <br/><br/>
                  <label htmlFor="profile_img">Profile Image (URL)</label>
                  <input type="text" name="profile_img" onChange={this.handleChange} value={this.state.profile_img}/>
                  <br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CreateVenue.propTypes = {
  createVenue: PropTypes.func.isRequired
}

export default connect(null, { createVenue })(CreateVenue);
