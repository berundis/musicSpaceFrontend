import React from 'react';
import { connect } from 'react-redux';
import { createBand } from '../../actions/bandActions';
import PropTypes from 'prop-types';

class CreateBand extends React.Component {
  state = {
    email: '',
    password: '',
    name: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault() 
    const newBand = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    }
    this.setState({
      email: '', password: '', name: ''
    })
    this.props.createBand(newBand);
  } 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create an Account:</h3>
          <h4>Email:</h4>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          <h4>Password:</h4>
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <h4>Band Name:</h4>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
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