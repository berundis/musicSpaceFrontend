import React from 'react'
import VenueShows from '../../components/Venue/VenueShows';

class ProfileContainer extends React.Component {

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
    if(this.state.clicked) {
      return <VenueShows venueId={this.props.venue.id} />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="center">
        <div className="translucent outer">
          <div className="wrapper">
            <div className="one"><img className="translucent bar" alt={this.props.venue.name} src={this.props.venue.profile_img}/></div>
            <div className="two"><h1 className="translucent bar">{this.props.venue.name}</h1></div>
            <div className="three translucent bar">
              <h3 className="stack">Location: {this.props.venue.location}</h3>
              <h3 className="stack">Genres: {this.props.venue.genres}</h3>
              <h3 className="stack">Description: {this.props.venue.description}</h3>
            </div>
            <div className="four">
              {this.props.bar}
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
        {this.displayShows()}
      </div>
    )
  }
}

export default ProfileContainer