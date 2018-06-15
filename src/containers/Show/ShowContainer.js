import React from 'react';

class ShowContainer extends React.Component {

  render() {
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div key={`${this.props.show.id} ${this.props.show.name}`}>
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h2>{this.props.show.name}</h2>
        <h4>Venue: {this.props.venue.name}</h4>
        <h4>Location: {this.props.venue.location}</h4>
        <h4>Bands: {bands.join(", ")}</h4>
        <br/>
      </div>
    )
  }
}

export default ShowContainer