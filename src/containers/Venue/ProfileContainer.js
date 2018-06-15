import React from 'react'
import VenueShows from '../../components/Venue/VenueShows';

// const ProfileContainer = (props) => (
//   <div>
//     <br/>
//     <img alt={props.venue.name} src={props.venue.profile_img}/>
//     <h1>{props.venue.name}</h1>
//     <h3>Location: {props.venue.location}</h3>
//     <h3>Genres: {props.venue.genres}</h3>
//     <h3>Description: {props.venue.description}</h3>
//     <br/>
//   </div>
// )

// export default ProfileContainer

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
      <div>
        <br/>
        <img alt={this.props.venue.name} src={this.props.venue.profile_img}/>
        <h1>{this.props.venue.name}</h1>
        <h3>Location: {this.props.venue.location}</h3>
        <h3>Genres: {this.props.venue.genres}</h3>
        <h3>Description: {this.props.venue.description}</h3>
        <br/>
        <button onClick={this.click}>{this.state.text}</button>
        <br/><br/>
        {this.displayShows()}
      </div>
    )
  }
}

export default ProfileContainer