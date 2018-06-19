import React from 'react'
import BandShows from '../../components/Band/BandShows'
import NavBar from '../../containers/NavBar'

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
      <div id="bandProfile" className="background scroll">
        <NavBar />
        <div className="center">
          <div className="translucent outer">
            <div className="wrapper">
              <div className="one"><img className="translucent bar" alt={this.props.name} src={this.props.band.profile_img}/></div>
              <div className="two"><h1 className="translucent bar">{this.props.band.name}</h1></div> 
              <div className="three translucent bar setWidth">
                <h3 className="stack"><div className="title">Location</div> {this.props.band.city}, {this.props.band.state}</h3>
                <h3 className="stack"><div className="title">Genre</div> {this.props.band.genre}</h3>
                <h3 className="stack"><div className="title">Bio</div> {this.props.band.bio}</h3>
                <h3 className="stack"><div className="title">Contact</div> {this.props.band.email}</h3>
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
          <br/>
        </div>
      </div>
    )
  }
}
export default ProfileContainer
