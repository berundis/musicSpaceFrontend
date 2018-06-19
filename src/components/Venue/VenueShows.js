import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions'; 
import ShowProfileContainer from '../../containers/Show/ShowProfileContainer';

class VenueShows extends React.Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  filterShows = () => {
    return this.props.shows.filter(show => (
      show.venue.id === this.props.venueId
    ))
  }

  renderShows = () => {
    const shows = this.filterShows() 
    if(shows.length === 0) {
      return <h2>No Shows</h2>
    }
    return shows.map(show => (
      <div key={show.show.id}>
        <ShowProfileContainer show={show.show} bands={show.bands} venue={show.venue} venueId={this.props.venueId}/>
      </div>
    ))
  }

  render() {
    return (
      <div className="flex">
        {this.renderShows()}
      </div>
    )
  }
}

VenueShows.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  shows: state.shows.shows
})
export default connect(mapStateToProps, { fetchShows })(VenueShows)