import React from 'react'
import { connect } from 'react-redux'
import ShowShows from '../Shows/ShowShows'

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
    if(this.state.clicked && this.props.shows.length > 0) {
      return this.props.shows.map(show => <ShowShows key={show.show.id} bands={show.bands} show={show.show} venue={show.venue} delete={true}/>)
    } else if (this.state.clicked) {
      return <h2>No Shows</h2>
    }
  }
  render () {

    return (
      <div>
        <div className="center">
          <div className="translucent outer">
            <div className="wrapper">
              <div className="one"><img className="translucent bar" alt={this.props.venue.name} src={this.props.venue.profile_img}/></div>
              <div className="two"><h1 className="translucent bar">{this.props.venue.name}</h1></div>
              <div className="three translucent bar setWidth">
                <h3 className="stack"><div className="title">Location</div> {this.props.venue.city}, {this.props.venue.state}</h3>
                <h3 className="stack"><div className="title">Genre</div> {this.props.venue.genres}</h3>
                <h3 className="stack"><div className="title">Description</div> {this.props.venue.description}</h3>
                <a className="stack1" style={{backgroundColor: "rgb(0, 134, 179)", marginLeft: "20%"}} href={`mailto:${this.props.venue.email}`}>Email</a>
              </div>
              <div className="four">
                {this.props.bar}
              </div>
            </div>
          </div>
          <div className="center noMarginBottom">
            <div className="translucent maxwidth">
              <div className="wrapper">
                <div className="two"><input onClick={this.click} type="submit" value={this.state.text}/></div>
              </div>
            </div>
          </div>
          <br/><br/>
          <div className="flex noMarginTop">
            {this.displayShows()}
          </div>
          <br/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const shows = state.shows.shows.filter( show => {
    if(show.show){
      return show.show.venue_id === ownProps.venue.id
    }
  })
  return { shows }
}

export default connect(mapStateToProps)(ProfileContainer)
