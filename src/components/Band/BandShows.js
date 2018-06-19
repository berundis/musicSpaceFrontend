import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions';
import ShowProfileContainer from '../../containers/Show/ShowProfileContainer';

class BandShows extends React.Component {

  componentDidMount() {
    this.props.fetchShows();
  }

  filterShows = () => {
    const shows = []
    this.props.shows.forEach(show => {
      show.bands.forEach(band => {
        if(band.id === this.props.bandId){
          shows.push(show)
        }
      })
    })
    return shows
  }

  renderShows = () => {
    const shows = this.filterShows() 
    if(shows.length === 0) {
      return <h2>No Shows</h2>
    }
    return shows.map(show => (
      <div key={show.show.id}>
        <ShowProfileContainer show={show.show} bands={show.bands} venue={show.venue} bandId={this.props.bandId}/>
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

BandShows.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  shows: state.shows.shows
})
export default connect(mapStateToProps, { fetchShows })(BandShows)