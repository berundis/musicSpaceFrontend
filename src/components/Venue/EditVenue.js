import React from 'react';
import { connect } from 'react-redux';
import { editVenue } from '../../actions/venueActions';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';
import NavBar from '../../containers/NavBar';

class EditVenue extends React.Component {
  state = {
    email: '',
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
    const values = ['email', 'name', 'location', 'genres', 'bio', 'profile_img']
    const venueData = {id: this.props.venueId}
    values.forEach(value => {
      if (this.state[value]){
        venueData[value] = this.state[value]
      }
    })

    this.props.editVenue(venueData);

    this.setState({ done: true })
  } 

  render() {
    if (this.state.done) {
      return <Redirect to="/venue"/>
    }
    return (
      <div className="background scroll">
        <NavBar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h1>Edit your Account</h1>
            <br/>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
              <br/><br/>
              <label htmlFor="name">Venue Name</label>
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
              <br/><br/>
              <label htmlFor="genres">Genres</label>
              <input type="text" name="genres" onChange={this.handleChange} value={this.state.genres}/>
              <br/><br/>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
              <br/><br/>
              <label htmlFor="description">Description</label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
              <br/><br/>
              <label htmlFor="profile_img">Profile Image (URL)</label>
              <input type="text" name="profile_img" onChange={this.handleChange} value={this.state.profile_img}/>
              <br/><br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


EditVenue.propTypes = {
  editVenue: PropTypes.func.isRequired
}

export default connect(null, { editVenue })(EditVenue);