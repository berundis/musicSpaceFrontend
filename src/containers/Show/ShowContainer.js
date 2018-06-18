import React from 'react';

class ShowContainer extends React.Component {

  render() {
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div className="translucent center margin">
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h2>{this.props.show.name}</h2>
        <h3>Venue: {this.props.venue.name}</h3>
        <h3>Location: {this.props.venue.location}</h3>
        <h3>Bands: {bands.join(", ")}</h3>
        <br/>
      </div>
    )
  }
}

export default ShowContainer