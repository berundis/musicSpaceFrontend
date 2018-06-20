import React from 'react';

class ShowContainer extends React.Component {

  render() {
    const bands = []
    this.props.bands.forEach(band => bands.push(band.name))
    return (
      <div className="translucent center margin setContainer">
        <img src={this.props.show.flyer} alt={this.props.show.name}/>
        <h2>{this.props.show.name}</h2>
        <h3><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
        <h3><div className="title">Bands</div> {bands.join(", ")}</h3>
        <h3><div className="title">Venue</div> {this.props.venue.name}</h3>
        <h3><div className="title">Date</div> {this.props.show.date}</h3>
        <br/>
      </div>
    )
  }
}

export default ShowContainer