import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions';
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

  renderShows = () => {
    if(this.props.shows) {
      return this.props.shows.map(show => {
        return (
          <div key={show.show.name}>
          <ShowContainer show={show.show} bands={show.bands} venue={show.venue}/>
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
})

export default connect(mapStateToProps, { fetchShows })(Show)