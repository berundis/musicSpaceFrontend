import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import ShowVenues from '../Venues/ShowVenues'
import ShowBands from '../Bands/ShowBands'

class ShowShow extends React.Component {

  showBands = () => {
    return this.props.show.bands.map(band => <ShowBands key={band.id} band={band} />)
  }
  render () {
    if(!this.props.show.show){
      return null
    }
    const {show} = this.props
    console.log(show)
    return (
      <div id="bandProfile" className="background scroll">
        <Navbar />
        <div className="center">
          <div className='translucent outer'>
            <div className='translucent'>
              <h1>{show.show.name}</h1>
              <h3><div className='title'>Date</div> {show.show.date}</h3>
            </div>
            <h1>Bands</h1>
            <div className='flex'>
             {this.showBands()}
            </div>
            <h1>Venue</h1>
            <ShowVenues key={show.venue.id} venue={show.venue} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const show = state.shows.shows.find(show => show.show.id === parseInt(ownProps.match.params.showId, 10))
  if (show) {
    return { show }
  } else {
    return { show: {} }
  }
}

export default connect(mapStateToProps)(ShowShow);
