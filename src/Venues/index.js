import React, { Component } from 'react'
import {connect} from 'react-redux'
import ShowVenues from './ShowVenues'
import Navbar from '../Navbar'
import Filter from './Filter'

class VenuesIndex extends Component {

  state = {
    genres: '',
    city: '',
    state: '',
    name: '',
    clicked: true
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  handleFilter = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  showVenues = () => {
    let filtered = [...this.props.venues];
    if( this.state.name || this.state.genres || this.state.city || this.state.state) {
      filtered = filtered.filter(venue => {
        return (
          venue.name && venue.name.toLowerCase().includes(this.state.name.toLowerCase()) &&
          venue.state && venue.state.toLowerCase().includes(this.state.state.toLowerCase()) &&
          venue.city && venue.city.toLowerCase().includes(this.state.city.toLowerCase()) &&
          (venue.genres && venue.genres.toLowerCase().includes(this.state.genres.toLowerCase()) || venue.genres.includes("all"))
        )
      })
    }
    return filtered.map(venue => <ShowVenues key={venue.id} venue={venue} />)
  }

  render() {
    return (
      <div className='background scroll' id="venueProfile">
        <Navbar />
        <Filter filter={this.handleFilter} click={this.handleClick} state={this.state}/>
        <div className='flex'>
          {this.showVenues()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {venues: state.venues.venues}
}


export default connect(mapStateToProps)(VenuesIndex)
