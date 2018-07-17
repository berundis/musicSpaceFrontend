import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './CSS/Background.css'
import './CSS/Navbar.css'
import './CSS/Style.css'
import { fetchBands } from './actions/bandActions'
import { fetchVenues } from './actions/venueActions'
import { fetchShows } from './actions/showActions'
import Routes from './Routes'

export class App extends Component {

  componentDidMount() {
    this.props.fetchBands()
    this.props.fetchVenues()
    this.props.fetchShows()
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBands: fetchBands,
    fetchVenues: fetchVenues,
    fetchShows: fetchShows
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App)
