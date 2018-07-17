import React from 'react'
import { connect } from 'react-redux'
import { editBand } from '../actions/bandActions'
import PropTypes from 'prop-types'
import { Redirect} from 'react-router-dom'
import Navbar from '../Navbar'
import { bindActionCreators } from 'redux'

class EditBand extends React.Component {
  state = {
    email: '',
    name: '',
    state: '',
    city: '',
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
    const values = ['email', 'name', 'state', 'city', 'genre', 'bio', 'profile_img']
    const bandData = {id: localStorage.getItem('user_id')}
    values.forEach(value => {
      if (this.state[value]){
        bandData[value] = this.state[value]
      }
    })
    console.log(bandData)
    this.props.editBand(bandData);

    this.setState({ done: true })
  }

  render() {
    console.log(this.props)
    if (this.state.done) {
      return <Redirect to="/profile"/>
    }
    return (
      <div className="background scroll" id="editBand">
        <Navbar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h1>Edit your Account</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
              <br/><br/>
              <label htmlFor="name">Band Name</label>
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
              <br/><br/>
              <label htmlFor="genre">Genre</label>
              <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
              <br/><br/>
              <label htmlFor="state">State</label>
              <input type="text" name="state" onChange={this.handleChange} value={this.state.state}/>
              <br/><br/>
              <label htmlFor="city">City</label>
              <input type="text" name="city" onChange={this.handleChange} value={this.state.city}/>
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
    )
  }
}


EditBand.propTypes = {
  editBand: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {editBand: bindActionCreators(editBand, dispatch)}
}

export default connect(null, mapDispatchToProps)(EditBand);
