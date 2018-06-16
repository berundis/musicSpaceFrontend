import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './containers/NavBar';
import Routes from './containers/Routes';

class App extends Component {
  
  render() {
    return (   
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;