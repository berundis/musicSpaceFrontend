import React from 'react'
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBands } from '../actions/bandActions';
import { fetchVenues } from '../actions/venueActions';
import PropTypes from 'prop-types';
import BandProfileContainer from '../containers/Band/ProfileContainer';
import VenueProfileContainer from '../containers/Venue/ProfileContainer';

class AllRoutes extends React.Component {

  componentWillMount() {
    this.props.fetchBands();
    this.props.fetchVenues();
  }

  renderBand = (renderProps) => {
    const bandId = renderProps.match.params.bandId
    const band = this.props.bands.find((band) => band.id == bandId)
    if (band) {
      return <BandProfileContainer band={ band } />
    } else {
      return null 
    }  
  }

  renderVenue = (renderProps) => {
    const venueId = renderProps.match.params.venueId
    const venue = this.props.venues.find((venue) => venue.id == venueId)
    if (venue)
      return <VenueProfileContainer venue={ venue } />
    else
      return null 
  }

   renderRoutes = () => {
     if(this.props.bands && this.props.venues) {
       return (
          <div>
            <Route path="/bands/:bandId" exact render={ this.renderBand } />
            <Route path="/venues/:venueId" exact render={ this.renderVenue } /> 
          </div>
       )
     } else {
       return null 
     }
   }

  render() {
    return (
      <div>
        {this.renderRoutes()}
      </div>
    )
  }
}

AllRoutes.propTypes = {
  fetchBands: PropTypes.func.isRequired,
  fetchVenues: PropTypes.func.isRequired,
  bands: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  bands: state.bands.bands,
  venues: state.venues.venues
})

export default connect(mapStateToProps, {fetchBands, fetchVenues})(AllRoutes);