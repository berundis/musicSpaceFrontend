import React from 'react'
import BandShows from '../../components/Band/BandShows'

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
      return <BandShows bandId={this.props.band.id} />
    } else {
      return null
    }
  }

  render () {

    return (
      <div>
        <br/>
        <img alt={this.props.name} src={this.props.band.profile_img}/>
        <h1>{this.props.band.name}</h1>
        <h3>Location: {this.props.band.location}</h3>
        <h3>Genre: {this.props.band.genre}</h3>
        <h3>Bio: {this.props.band.bio}</h3>
        <button onClick={this.click}>{this.state.text}</button>
        <br/><br/>
        {this.displayShows()}
        <br/>
      </div>
    )
  }
}
export default ProfileContainer