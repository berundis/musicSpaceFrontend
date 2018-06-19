import React from 'react'
import {browserHistory} from 'react-router';

class BandContainer extends React.Component {

  click = (e, band) => {
    browserHistory.push(`/bands/${this.props.band.id}`)
    this.props.handleClick(band)
  }
      
  render(){
    return (        
      <div onClick={(e) => this.click(e,this.props.band)} className="translucent center margin setContainer">
        <br/>
        <img alt={this.props.band.name} src={this.props.band.profile_img}/>
        <h1>{this.props.band.name}</h1>
        <h3><div className="title">Location</div> {this.props.band.city}, {this.props.band.state}</h3>
        <h3><div className="title">Genre</div> {this.props.band.genre}</h3>
        <br/>
      </div>
    )  
  }
}
  
  export default BandContainer