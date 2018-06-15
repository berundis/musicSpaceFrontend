import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions';
import ShowProfileContainer from '../../containers/Show/ShowProfileContainer';

class BandShows extends React.Component {

  state = {
    count: 0
  }


  componentDidMount() {
    this.props.fetchShows();
  }

  filterShows = () => {
    return this.props.shows.filter(show => (
      show.bands.filter(band => band.id === this.props.bandId)
    ))
  }

  renderShows = () => {
    const shows = this.filterShows() 
    return shows.map(show => (
      <div key={show.show.id}>
        <ShowProfileContainer show={show.show} bands={show.bands} venue={show.venue} />
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderShows()}
      </div>
    )
  }

}

BandShows.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  shows: state.shows.shows
})
export default connect(mapStateToProps, { fetchShows })(BandShows)