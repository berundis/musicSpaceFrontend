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
            <div className="three translucent bar setWidth">
              <h3 className="stack"><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
              <h3 className="stack"><div className="title">Genres</div> {this.props.venue.genres}</h3>
              <h3 className="stack"><div className="title">Description</div> {this.props.venue.description}</h3>
              <a className="stack1" style={{backgroundColor: "rgb(0, 134, 179)", marginLeft: "20%"}} href={`mailto:${this.props.venue.email}`}>{this.props.venue.email}</a>
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
        <div className="flex">
          {this.displayShows()}
        </div>
      </div>
    )
  }
}

export default ProfileContainer