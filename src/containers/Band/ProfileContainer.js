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
      <div className="center">
        <div className="translucent outer">
          <div className="wrapper">
            <div className="one"><img className="translucent bar" alt={this.props.name} src={this.props.band.profile_img}/></div>
            <div className="two"><h1 className="translucent bar">{this.props.band.name}</h1></div> 
            <div className="three translucent bar">
              <h3 className="stack">Location: {this.props.band.location}</h3>
              <h3 className="stack">Genre: {this.props.band.genre}</h3>
              <h3 className="stack">Bio: {this.props.band.bio}</h3>
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
          <br/>
      </div>
    )
  }
}
export default ProfileContainer


      // <div>
      //   <div className="center">
      //     <div className="translucent outerFormDiv">
      //       <div className="stack">
      //       <h1 className="translucent">{this.props.band.name}</h1>
      //       </div>
      //       <img alt={this.props.name} src={this.props.band.profile_img}/>
      //       <div className="stack">
      //         <div className="translucent">
      //           <h3>Location: {this.props.band.location}</h3>
      //           <h3>Genre: {this.props.band.genre}</h3>
      //           <h3>Bio: {this.props.band.bio}</h3>
      //         </div>
      //       </div>
      //     </div>
      //   </div>

      //   <button onClick={this.click}>{this.state.text}</button>
      //   <br/><br/>
      //   {this.displayShows()}
      //   <br/>
      // </div>


            {/* <div className="center">
        <div className="translucent">
          <div className="wrapper">
            <div className="one"><img className="translucent" alt={this.props.name} src={this.props.band.profile_img}/></div>
            <div calssName="two"><h1 className="translucent">{this.props.band.name}</h1></div> 
            <div className="three"><h3 className="translucent">Location: {this.props.band.location}</h3></div>
            <div className="four"><h3 className="translucent">Genre: {this.props.band.genre}</h3></div>
            <div className="five"><h3 className="translucent">Bio: {this.props.band.bio}</h3></div>
          </div>
        </div>
          <button onClick={this.click}>{this.state.text}</button>
          <br/><br/>
          {this.displayShows()}
          <br/>
      </div> */}