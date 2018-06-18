import React from 'react';
import { connect } from 'react-redux';
import { deleteShow } from '../../actions/showActions';

class ShowProfileContainer extends React.Component {

  state = {
    delete: false
  }

  checkBand = () => {
    if(localStorage.getItem('profile_type') === "band" && localStorage.getItem('user_id') == this.props.bandId ) {
      return true 
    } else {
      return false
    }
  }

  checkVenue = () => {
    if(localStorage.getItem('profile_type') === "venue" && localStorage.getItem('user_id') == this.props.venueId ) {
      return true 
    }
  }
  deleteShow = () => {
    console.log("DELETE SHOW")
    this.props.deleteShow(this.props.show.id)
    this.setState({delete: true})
  }

  displayDelete = () => {
    if(this.checkBand() || this.checkVenue()){
      return <button onClick={this.deleteShow}>Delete Show</button>
    }
  }
  

  render() {
    if (this.state.delete){
      return null
    }
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div className="translucent"> 
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h2>{this.props.show.name}</h2>
        <h3>Venue: {this.props.venue.name}</h3>
        <h3>Location: {this.props.venue.location}</h3>
        <h3>Bands: {bands.join(", ")}</h3>
        {this.displayDelete()}
      </div>
    )
  }
}

export default connect(null, {deleteShow})(ShowProfileContainer)