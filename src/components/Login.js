import React, { Component } from 'react'
import NavBar from '../containers/NavBar'

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
    this.props.onSubmit(this.state.email, this.state.password, this.props.history.push)
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="center">
          <div className="translucent" id="loginDiv">
            <h1>Login</h1>
            <div className="center">
              <div className="translucent" id="loginForm">
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/> 
                  </div>
                  <br/>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                  </div>
                  <br/>
                  <input type="submit" value="submit"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
