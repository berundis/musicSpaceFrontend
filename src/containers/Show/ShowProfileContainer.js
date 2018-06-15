import React from 'react';

class ShowProfileContainer extends React.Component {

  render() {
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div key={`${this.props.show.id} ${this.props.show.name}`}> 
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h3>{this.props.show.name}</h3>
        <h5>Venue: {this.props.venue.name}</h5>
        <h5>Location: {this.props.venue.location}</h5>
        <h5>Bands: {bands.join(", ")}</h5>
        <br/>
      </div>
    )
  }
}

export default ShowProfileContainer