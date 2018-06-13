import React from 'react'
import {browserHistory} from 'react-router';


class VenueContainer extends React.Component {

  click = (e,venue) => {
    console.log("E", e)
    browserHistory.push(`/venues/${this.props.venue.id}`)
    this.props.handleClick(venue)
  }
    
  render(){
    return (        
      <div>
        <br/>
        <img onClick={(e) => this.click(e,this.props.venue)} alt={this.props.name} src={this.props.venue.profile_img}/>
        <h1 onClick={(e) => this.click(e,this.props.venue)}>{this.props.venue.name}</h1>
        <h3>Location: {this.props.venue.location}</h3>
        <h3>Genres: {this.props.venue.genres}</h3>
        <h3>Description: {this.props.venue.description}</h3>
        <br/>
      </div>
    )  
  }
}



export default VenueContainer
