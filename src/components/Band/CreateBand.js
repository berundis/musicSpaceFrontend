import React from 'react';
import { connect } from 'react-redux';
import { createBand } from '../../actions/bandActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import '../../CSS/Background.css'
import '../../CSS/Style.css'
import Navbar from '../../containers/NavBar';

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
      <div id='bandRegister' className='background scroll'>
        <Navbar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h1>Create A Band Account</h1>
              <div className="center">
                <div className="translucent formDiv">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
                  <br/><br/>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                  <br/><br/>
                  <label htmlFor="name">Band Name</label>
                  <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                  <br/><br/>
                  <label htmlFor="genre">Genre</label>
                  <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                  <br/><br/>
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
                  <br/><br/>
                  <label htmlFor="bio">Bio</label>
                  <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio}/>
                  <br/><br/>
                  <label htmlFor="profile_img">Profile Image (URL)</label>
                  <input type="text" name="profile_img" onChange={this.handleChange} value={this.state.profile_img}/>
                  <br /><br/>
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

CreateBand.propTypes = {
  createBand: PropTypes.func.isRequired
}

export default connect(null, { createBand })(CreateBand);