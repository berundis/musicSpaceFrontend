import React from 'react';
import { connect } from 'react-redux';
import { editBand } from '../../actions/bandActions';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';
import NavBar from '../../containers/NavBar'

class EditBand extends React.Component {
  state = {
    email: '',
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
    const values = ['email', 'name', 'location', 'genre', 'bio', 'profile_img']
    const bandData = {id: this.props.bandId}
    values.forEach(value => {
      if (this.state[value]){
        bandData[value] = this.state[value]
      }
    })

    this.props.editBand(bandData);

    this.setState({ done: true })
  } 

  render() {
    if (this.state.done) {
      return <Redirect to="/band"/>
    }
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <h3>Edit your Account:</h3>
          <h4>Email:</h4>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
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


EditBand.propTypes = {
  editBand: PropTypes.func.isRequired
}

export default connect(null, { editBand })(EditBand);