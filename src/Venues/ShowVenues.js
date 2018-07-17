import React from 'react'
import { Link } from 'react-router-dom'

class ShowVenues extends React.Component {

  render(){
    return (
      <div className="translucent center margin setContainer hover">
        <Link to={`/venues/${this.props.venue.id}`}>
        <img alt={this.props.venue.name} src={this.props.venue.profile_img}/>
        <h1>{this.props.venue.name}</h1>
        <h3><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
        <h3><div className="title">Genre</div> {this.props.venue.genres}</h3>
        </Link>
      </div>
    )
  }
}

  export default ShowVenues
