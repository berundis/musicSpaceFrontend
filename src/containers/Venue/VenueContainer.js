import React from 'react'
import {browserHistory} from 'react-router';

class VenueContainer extends React.Component {

  click = (e,venue) => {
    browserHistory.push(`/venues/${this.props.venue.id}`)
    this.props.handleClick(venue)
  }
    
  render(){
    return (        
      <div onClick={(e) => this.click(e,this.props.venue)} className="translucent center margin setContainer">
        <br/>
        <img alt={this.props.venue.name} src={this.props.venue.profile_img}/>
        <h1>{this.props.venue.name}</h1>
        <h3><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
        <h3><div className="title">Genres</div> {this.props.venue.genres}</h3>
        <h3><div className="title">Description</div> {this.props.venue.description}</h3>
        <br/>
      </div>
    )  
  }
}

export default VenueContainer
