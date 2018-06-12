import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './containers/NavBar';
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