import React from 'react';
import { connect } from 'react-redux';
import { editVenue } from '../../actions/venueActions';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Edit your Venue:</h3>
          <h4>Email:</h4>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          <h4>Venue Name:</h4>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <h4>Genres:</h4>
          <input type="text" name="genres" onChange={this.handleChange} value={this.state.genres}/>
          <h4>location:</h4>
          <input type="text" name="location" onChange={this.handleChange} value={this.state.location}/>
          <h4>Description:</h4>
          <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
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


EditVenue.propTypes = {
  editVenue: PropTypes.func.isRequired
}

export default connect(null, { editVenue })(EditVenue);