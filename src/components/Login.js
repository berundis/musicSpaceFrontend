import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(this.props)
    this.props.onSubmit(this.state.email, this.state.password, this.props.history.push)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Email:</h4>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/> 
          </div>
          <div>
            <h4>Password:</h4>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          </div>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
