import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Band from './components/Band/Band';
import Venue from './components/Venue/Venue'; 
import VenueProfile from './components/Venue/Profile';
import Bandprofile from './components/Band/Profile';
import CreateBand from './components/Band/CreateBand';
import NavBar from './containers/NavBar';
import Home from './components/Home'
import Routes from './containers/Routes';

class App extends Component {
  
  render() {
    return (   
      <Router>
        <div>
          <NavBar/>
          <div>
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;