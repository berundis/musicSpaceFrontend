import React, { Component } from 'react'
import {connect} from 'react-redux'
import ShowShows from './ShowShows'
import Navbar from '../Navbar'
import Filter from './Filter'

class ShowsIndex extends Component {

    state = {
    bandName: '',
    venueName: '',
    state: '',
    city: '',
    genre: '',
    clicked: true
  }

    handleFilter = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

    showShows = () => {
    let filtered = [...this.props.shows]
    if( this.state.bandName || this.state.venueName || this.state.genre || this.state.city || this.state.state) {
      filtered = filtered.filter(show => {
        const bands = show.bands.map(band => band.name).join(" ").toLowerCase()
        const genre = show.bands.map(band => band.genre).join(" ").toLowerCase()
        const venue = show.venue.name.toLowerCase()
        const state = show.venue.state.toLowerCase()
        const city = show.venue.city.toLowerCase()
        if(
          (bands.includes(this.state.bandName.toLowerCase())) &&
          (genre.includes(this.state.genre.toLowerCase())) &&
          (venue.includes(this.state.venueName.toLowerCase())) &&
          (state.includes(this.state.state.toLocaleLowerCase())) &&
          (city.includes(this.state.city.toLowerCase()))
        ){
          return show
        }
      })

    }
    return filtered.map(show => <ShowShows key={show.show.id} bands={show.bands} show={show.show} venue={show.venue}/>)
  }

  render() {
    return (
      <div className="background scroll" id="showShows">
        <Navbar />
        <div className="center">
          <Filter filter={this.handleFilter} click={this.handleClick} state={this.state} />
        </div>
        <div className='flex'>
          {this.showShows()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {shows: state.shows.shows}
}


export default connect(mapStateToProps)(ShowsIndex)
