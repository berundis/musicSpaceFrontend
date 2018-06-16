import React from 'react';
import { connect } from 'react-redux';
import { createBand } from '../../actions/bandActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class CreateBand extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    location: '',
    genre: '',
    bio: '',
    profile_img: '',
    done: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault() 
    const newBand = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      location: this.state.location, 
      genre: this.state.genre, 
      bio: this.state.bio, 
      profile_img: this.state.profile_img
    }

    this.props.createBand(newBand);

    this.setState({ done: true })
  } 

  render() {
    if (this.state.done) {
      return <Redirect to="/login"/>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create A Band Account:</h3>
          <h4>Email:</h4>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          <h4>Password:</h4>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <h4>Band Name:</h4>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <h4>Genre:</h4>
          <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
          <h4>location:</h4>
          <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
          <h4>Bio:</h4>
          <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio}/>
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

CreateBand.propTypes = {
  createBand: PropTypes.func.isRequired
}

export default connect(null, { createBand })(CreateBand);