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
      <div className="translucent margin setContainer"> 
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h2>{this.props.show.name}</h2>
        <h3><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
        <h3><div className="title">Bands</div> {bands.join(", ")}</h3>
        <h3><div className="title">Venue</div> {this.props.venue.name}</h3>
        <h3><div className="title">Date</div> {this.props.show.date}</h3>
        {this.displayDelete()}
      </div>
    )
  }
}

export default connect(null, {deleteShow})(ShowProfileContainer)