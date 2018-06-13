import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { fetchVenues } from '../../actions/venueActions';
import Filter from './Filter';
import VenueContainer from '../../containers/Venue/VenueContainer';

class Venue extends React.Component {

  state = {
    genre: '', 
    location: '', 
    name: ''
  }

  componentDidMount() {
    this.props.fetchVenues();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  showVenues = () => {
    let filtered = [...this.props.venues]; 
    if( this.state.name || this.state.genre || this.state.location) {
      filtered = filtered.filter(venue => (
        ( venue.name && venue.name.toLowerCase().includes(this.state.name.toLowerCase())) &&
        ( venue.location && venue.location.toLowerCase().includes(this.state.location.toLowerCase()) ) &&
        ( venue.genres && (venue.genres.toLowerCase().includes(this.state.genre.toLowerCase() )|| venue.genres.includes("all")) )
      ))
    }
    return filtered.map(venue => (<div key={venue.id}><VenueContainer venue={venue} /></div>))
  }

  render() {
    return (
      <div>
        <Filter filter={this.handleChange} /> 
        {this.showVenues()}
      </div>
    )
  }
}

Venue.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  venues: PropTypes.array.isRequired,
  newVenue: PropTypes.object 
}

const mapStateToProps = state => ({
  venues: state.venues.venues, 
})

export default connect(mapStateToProps, { fetchVenues })(Venue);