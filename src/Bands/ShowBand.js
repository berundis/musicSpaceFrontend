import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import ShowShows from '../Shows/ShowShows'

class ShowBand extends React.Component {

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
    const { band } = this.props
    return (
      <div id="bandProfile" className="background scroll">
        <Navbar />
        <div className="center">
          <div className="translucent outer">
            <div className="wrapper">
              <div className="one"><img className="translucent bar" alt={band.name} src={band.profile_img}/></div>
              <div className="two"><h1 className="translucent bar">{band.name}</h1></div>
              <div className="three translucent bar setWidth">
                <h3 className="stack"><div className="title">Location</div> {band.city}, {band.state}</h3>
                <h3 className="stack"><div className="title">Genre</div> {band.genre}</h3>
                <h3 className="stack"><div className="title">Bio</div> {band.bio}</h3>
                <a className="stack1" style={{backgroundColor: "rgb(0, 134, 179)", marginLeft: "20%"}} href={`mailto:${band.email}`}>Email</a>
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
  const band = state.bands.bands.find(band => band.id === parseInt(ownProps.match.params.bandId, 10))
  const shows = []
  state.shows.shows.forEach(show => {
    show.bands.forEach(b => {
      if(b.id === band.id){
        shows.push(show)
      }
    })
  })

  if (band) {
    return { band, shows }
  } else {
    return { band: {}, shows: [] }
  }
}

export default connect(mapStateToProps)(ShowBand);
