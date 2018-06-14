import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions';
import {Link} from 'react-router-dom';
// import Filter from './Filter';


class Show extends React.Component {
  
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
  renderShows = () => {
    if(this.props.shows) {
      return this.props.shows.map(show => {
        return (
          <div key={show.show.name}>
          <h1>{show.show.name}</h1>
          <img src={show.show.flyer} alt={show.show.name}/>
          {this.renderBands(show.bands)}
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
  shows: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  shows: state.shows.shows
})

export default connect(mapStateToProps, { fetchShows })(Show)