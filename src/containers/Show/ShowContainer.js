import React from 'react';

class ShowContainer extends React.Component {
  renderBands = (bands) => {
    return bands.map(band => {
      return (
        <div key={band.id}>
          <h4>{band.name}</h4>
        </div>
      )
    })
  }

  render() {
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div key={this.props.show.name}>
      <h2>{this.props.show.name}</h2>
          <img src={this.props.show.flyer} alt={this.props.show.name}/>
          <h4>Venue: {this.props.venue.name}</h4>
          <h4>Location: {this.props.venue.location}</h4>
          <h4>Bands: {bands.join(", ")}</h4>
          <br/>
      </div>
    )
  }
}

export default ShowContainer