import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchVenues } from '../../actions/venueActions';

class AddVenue extends React.Component {

  state = {
    venue: '',
    venueName: ''
  }

  componentDidMount(){
    this.props.fetchVenues 
  }

  search = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addVenue = (e, venue) => {
    if (!this.state.venue){
      this.props.addVenue(venue.id)
      this.setState({venue: venue})
    }
  }
  deleteVenue = () => {
    this.props.deleteVenue() 
    this.setState({venue: ''})
  }
  showVenues = () => {
    let filtered = [...this.props.venues];
    filtered = filtered.filter( venue => (
      venue.name.toLowerCase().includes(this.state.venueName)
    ))
    return filtered.map(venue => (
      <div key={venue.id}>
        <h4>{venue.name}</h4> 
        <button onClick={(e) => this.addVenue(e,venue)}>Add Venue</button>
      </div>
    ))
  }

  showAddedVenue = () => {
    if(this.state.venue){
      return (
        <div>
          <button key={this.state.venue.id} onClick={this.deleteVenue}>{this.state.venue.name}</button>
        </div>
      )
    } else {
      return (
        <div>
          <h5>No Venue Yet</h5>
        </div>
      )
    }
  }
  render() {
    console.log(this.state.venue)
    return (
      <div>
        <h4>Added Venue:</h4>
        {this.showAddedVenue()}
        <br/>
        <h4>Find Venue By Name:</h4>
        <input type="text" name="venueName" onChange={this.search} />
        {this.showVenues()}
      </div>
    )
  }
}

AddVenue.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  venues: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  venues: state.venues.venues
})

export default connect(mapStateToProps, { fetchVenues })(AddVenue);