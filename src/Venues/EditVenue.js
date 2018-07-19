import React from 'react'
import { connect } from 'react-redux'
import { editVenue } from '../actions/venueActions'
import { fetchShows } from '../actions/showActions'
import PropTypes from 'prop-types'
import { Redirect} from 'react-router-dom'
import Navbar from '../Navbar'
import { bindActionCreators } from 'redux'

class EditVenue extends React.Component {
  state = {
    email: '',
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
    const values = ['email', 'name', 'state', 'city', 'genres', 'description', 'profile_img']
    const venueData = {id: localStorage.getItem('user_id')}
    values.forEach(value => {
      if (this.state[value]){
        venueData[value] = this.state[value]
      }
    })
    console.log(venueData)
    this.props.editVenue(venueData);

    this.setState({ done: true })
  }

  render() {
    if (this.state.done) {
      return <Redirect to="/profile"/>
    }
    return (
      <div className="background scroll" id="editVenue">
        <Navbar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h1>Edit your Account</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
              <br/><br/>
              <label htmlFor="name">Venue Name</label>
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
              <br/><br/>
              <label htmlFor="genre">Genre</label>
              <input type="text" name="genres" onChange={this.handleChange} value={this.state.genres}/>
              <br/><br/>
              <label htmlFor="state">State</label>
              <input type="text" name="state" onChange={this.handleChange} value={this.state.state}/>
              <br/><br/>
              <label htmlFor="city">City</label>
              <input type="text" name="city" onChange={this.handleChange} value={this.state.city}/>
              <br/><br/>
              <label htmlFor="description">Description</label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
              <br/><br/>
              <label htmlFor="profile_img">Profile Image (URL)</label>
              <input type="text" name="profile_img" onChange={this.handleChange} value={this.state.profile_img}/>
              <br /><br/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editVenue: editVenue,
    fetchShows: fetchShows
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(EditVenue);
