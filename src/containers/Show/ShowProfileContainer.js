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
      <div key={`${this.props.show.id} ${this.props.show.name}`}> 
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h3>{this.props.show.name}</h3>
        <h5>Venue: {this.props.venue.name}</h5>
        <h5>Location: {this.props.venue.location}</h5>
        <h5>Bands: {bands.join(", ")}</h5>
        {this.displayDelete()}
        <hr/><br/>
      </div>
    )
  }
}

export default connect(null, {deleteShow})(ShowProfileContainer)