import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Band from './components/Band/Band';
import Profile from './components/Band/Profile';
import CreateBand from './components/Band/CreateBand';

class App extends Component {
  
  login = (email, password, callback) => {
    fetch("http://localhost:3000/api/v1/sessions", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json.token)
      localStorage.setItem('token', json.token);
      localStorage.setItem('user_id', json.user_id);
      localStorage.setItem('email', json.email); 
      if (json.token) {
        callback('/profile')
      } else {
        callback('/login')
      }   
    })
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" render={(props) => <Login onSubmit={this.login} {...props} />} />
          <Route path="/register" render={(props) => <CreateBand {...props} />} />
          <Route path="/bands" component={Band} />
          {
            localStorage.getItem('token') ?
              <Route path='/profile' render={(props) => <Profile {...props} /> } />
            :
              <Redirect to='/register' />
          }
        </div>
      </Router>
    );
  }
}

export default App;
