import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { fetchVenues } from '../../actions/venueActions';
import Filter from './Filter';
import VenueContainer from '../../containers/Venue/VenueContainer';
import ProfileContainer from '../../containers/Venue/ProfileContainer';
import NavBar from '../../containers/NavBar';

let past 
class Venue extends React.Component {

  state = {
    genre: '', 
    location: '', 
    name: '', 
    clicked: false,
    venue: ''
  }

  componentDidMount() {
    this.props.fetchVenues();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (venue) => {
    past = this.state.clicked
    this.setState({clicked: !this.state.clicked})
    this.setState({venue: venue})
  }

  showVenues = () => {
    let filtered = [...this.props.venues]; 
    if( this.state.name || this.state.genre || this.state.location) {
      filtered = filtered.filter(venue => (
        ( venue.name && venue.name.toLowerCase().includes(this.state.name.toLowerCase())) &&
        ( venue.location && venue.location.toLowerCase().includes(this.state.location.toLowerCase()) ) &&
        ( venue.genres && (venue.genres.toLowerCase().includes(this.state.genres.toLowerCase() )|| venue.genres.includes("all")) )
      ))
    }
    return filtered.map(venue => (<div key={venue.id}><VenueContainer venue={venue} handleClick={this.handleClick}/></div>))
  }
  
  handleProfile = () => {
    if (this.state.clicked !== past) {
      past = this.state.clicked
      return <ProfileContainer venue={this.state.venue}/>
    }else {
      return (
        <div>
          <Filter filter={this.handleChange} /> 
          {this.showVenues()}
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        {this.handleProfile()}
      </div>
    )
  }
}

Venue.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  venues: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  venues: state.venues.venues, 
})

export default connect(mapStateToProps, { fetchVenues })(Venue);