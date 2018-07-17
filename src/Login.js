import React, { Component } from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {loginAction} from './actions/loginAction'


class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginAction(this.state.email, this.state.password, this.props.history.push)
  }

  render() {
    return (
      <div className="background scroll" id="login">
        <Navbar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h1>Login</h1>
            <div className="center">
              <div className="translucent formDiv">
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

export default connect(null, {loginAction})(Login)
