import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions';
import { fetchVenue } from '../../actions/venueActions';
import {Link} from 'react-router-dom';
import ShowContainer from '../../containers/Show/ShowContainer'
// import Filter from './Filter';


class Show extends React.Component {

  state = {
    showName: '',
    bandName: '', 
    venueName: '',
    location: '',
    genre: ''
  }
  
  componentDidMount() {
    this.props.fetchShows(); 
  }

  renderBands = (bands) => {
    return bands.map(band => {
      return (
        <div key={band.id}>
          <Link to={`/bands/${band.id}`}><h4>{band.name}</h4></Link>
        </div>
      )
    })
  }
  fetchVenue = (id) => {
    this.props.fetchVenue(id)
  }

  // renderVenue = (id) => {
  //   this.props.fetchVenue(id);
  //   console.log("VENUE", this.props.venue)
  // }
  renderShows = () => {
    if(this.props.shows) {
      return this.props.shows.map(show => {
        this.fetchVenue(show.show.venue_id)
        return (
          <div key={show.show.name}>
          <ShowContainer show={show.show} bands={show.bands} venue={this.props.venue}/>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h1>All Shows</h1>
        {this.renderShows()}
      </div>
    )
  }
}

Show.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  shows: state.shows.shows,
  venue: state.venues.venue
})

export default connect(mapStateToProps, { fetchShows, fetchVenue })(Show)