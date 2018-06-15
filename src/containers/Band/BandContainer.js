import React from 'react'
import {browserHistory} from 'react-router';

class BandContainer extends React.Component {

  click = (e, band) => {
    browserHistory.push(`/bands/${this.props.band.id}`)
    this.props.handleClick(band)
  }
      
  render(){
    return (        
      <div>
        <br/>
        <img onClick={(e) => this.click(e,this.props.band)} alt={this.props.band.name} src={this.props.band.profile_img}/>
        <h1 onClick={(e) => this.click(e,this.props.band)}>{this.props.band.name}</h1>
        <h3>Location: {this.props.band.location}</h3>
        <h3>Genres: {this.props.band.genres}</h3>
        <h3>Bio: {this.props.band.bio}</h3>
        <br/>
      </div>
    )  
  }
}
  
  export default BandContainer