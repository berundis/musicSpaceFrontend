import React from 'react';
import { connect } from 'react-redux';
import { createVenue } from '../../actions/venueActions';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';

class CreateVenue extends React.Component {
  state = {
    email: '',
    password: '', 
    name: '',
    location: '', 
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
    const newVenue = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      location: this.state.location, 
      genres: this.state.genres, 
      description: this.state.description, 
      profile_img: this.state.profile_img
    }

    this.props.createVenue(newVenue);

    this.setState({ done: true })
  }

  render() {
    if (this.state.done) {
      return <Redirect to="/login"/>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create A Venue Account:</h3>
          <h4>Email:</h4>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          <h4>Password:</h4>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <h4>Band Name:</h4>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <h4>Genres:</h4>
          <input type="text" name="genres" onChange={this.handleChange} value={this.state.genres}/>
          <h4>location:</h4>
          <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
          <h4>Description:</h4>
          <input type="text" name="description" onChange={this.handleChange} value={this.state.bio}/>
          <h4>Profile Image (URL):</h4>
          <input type="text" name="profile_img" onChange={this.handleChange} value={this.state.profile_img}/>
          <br /><br/>
          <button type="submit">Submit</button>
          <hr/>
        </form>
      </div>
    )
  }
}

CreateVenue.propTypes = {
  createVenue: PropTypes.func.isRequired
}

export default connect(null, { createVenue })(CreateVenue);