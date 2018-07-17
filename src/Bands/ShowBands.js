import React from 'react'
import { Link } from 'react-router-dom'

class ShowBands extends React.Component {

  render(){
    return (
      <div className="translucent center margin setContainer hover">
        <Link to={`/bands/${this.props.band.id}`}>
        <img alt={this.props.band.name} src={this.props.band.profile_img}/>
        <h1>{this.props.band.name}</h1>
        <h3><div className="title">Location</div> {this.props.band.city}, {this.props.band.state}</h3>
        <h3><div className="title">Genre</div> {this.props.band.genre}</h3>
        </Link>
      </div>
    )
  }
}

  export default ShowBands
