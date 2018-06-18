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
      this.setState({venue: venue, venueName: ''})
    }
  }
  deleteVenue = () => {
    this.props.deleteVenue() 
    this.setState({venue: ''})
  }
  showVenues = () => {
    if(!this.state.venueName) {
      return null
    }
    let filtered = [...this.props.venues];
    filtered = filtered.filter( venue => (
      venue.name.toLowerCase().includes(this.state.venueName.toLowerCase())
    ))
    return filtered.map(venue => (
      <div key={venue.id}>
        <br/>
        <button onClick={(e) => this.addVenue(e,venue)}>{venue.name}</button>
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
      <div className="center">
        <div className="translucent">
          <h2>Added Venue</h2>
          {this.showAddedVenue()}
        </div>
        <br/>
        <label htmlFor="venueName">Find Venue By Name</label>
        <input type="text" name="venueName" onChange={this.search} value={this.state.venueName}/>
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