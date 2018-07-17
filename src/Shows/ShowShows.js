import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteShow } from '../actions/showActions'

class ShowShows extends React.Component {

  deleteShow = () => {
    this.props.deleteShow(this.props.show.id)
  }
  displayDelete = () => {
    if (this.props.delete){
      return <button onClick={this.deleteShow}>Delete Show</button>
    }
  }

  render() {
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div className="translucent center margin setContainer hover">
        <Link to={`/shows/${this.props.show.id}`}>
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h2>{this.props.show.name}</h2>
        <h3><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
        <h3><div className="title">Bands</div> {bands.join(", ")}</h3>
        <h3><div className="title">Venue</div> {this.props.venue.name}</h3>
        <h3><div className="title">Date</div> {this.props.show.date}</h3>
        </Link>
        {this.displayDelete()}
      </div>
    )
  }
}

export default connect(null, {deleteShow})(ShowShows)
