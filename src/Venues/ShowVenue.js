import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import ShowShows from '../Shows/ShowShows'

class ShowVenue extends React.Component {

  state = {
    clicked: false,
    text: "Display Shows"
  }

  click = () => {
    if(!this.state.clicked) {
      this.setState({clicked: !this.state.clicked, text: "Hide Shows"})
    } else {
      this.setState({clicked: !this.state.clicked, text: "Display Shows"})
    }
  }

  displayShows = () => {
    if(this.state.clicked && this.props.shows.length > 0) {
      return this.props.shows.map(show => <ShowShows key={show.show.id} bands={show.bands} show={show.show} venue={show.venue} />)
    } else if (this.state.clicked) {
      return <h2>No Shows</h2>
    }
  }

  render () {
    const { venue } = this.props
    return (
      <div className="center background scroll" id="venueProfile">
        <Navbar />
        <div className="translucent outer">
          <div className="wrapper">
            <div className="one"><img className="translucent bar" alt={venue.name} src={venue.profile_img}/></div>
            <div className="two"><h1 className="translucent bar">{venue.name}</h1></div>
            <div className="three translucent bar setWidth">
              <h3 className="stack"><div className="title">Location</div> {venue.city}, {venue.state}</h3>
              <h3 className="stack"><div className="title">Genres</div> {venue.genres}</h3>
              <h3 className="stack"><div className="title">Description</div> {venue.description}</h3>
              <a className="stack1" style={{backgroundColor: "rgb(0, 134, 179)", marginLeft: "20%"}} href={`mailto:${venue.email}`}>Email</a>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="translucent maxwidth">
            <div className="wrapper">
              <div className="two"><input onClick={this.click} type="submit" value={this.state.text}/></div>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className="flex">
          {this.displayShows()}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const venue = state.venues.venues.find(venue => venue.id === parseInt(ownProps.match.params.venueId, 10))
  const shows = state.shows.shows.filter(show => show.venue.id === venue.id)

  if (venue) {
    return { venue, shows }
  } else {
    return { venue: {}, shows: [] }
  }
}

export default connect(mapStateToProps)(ShowVenue);
