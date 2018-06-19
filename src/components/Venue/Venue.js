import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { fetchVenues } from '../../actions/venueActions';
import Filter from './Filter';
import VenueContainer from '../../containers/Venue/VenueContainer';
import ProfileContainer from '../../containers/Venue/ProfileContainer';
import NavBar from '../../containers/NavBar';

let past 
class Venue extends React.Component {

  state = {
    genre: '', 
    state: '', 
    city: '',
    name: '', 
    clicked: false,
    venue: ''
  }

  componentDidMount() {
    this.props.fetchVenues();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (venue) => {
    past = this.state.clicked
    this.setState({clicked: !this.state.clicked})
    this.setState({venue: venue})
  }
  showVenues = () => {
    let filtered = [...this.props.venues]; 
    if(this.state.name || this.state.genre || this.state.city || this.state.state) {
      filtered = filtered.filter(venue => {
        const name = venue.name.toLowerCase()
        let genres = ""
        if (venue.genres) {
          genres = venue.genres.toLowerCase()
        } 
        let state = "" 
        if (venue.state) {
          state = venue.state.toLowerCase() 
        }
        let city = ""
        if (venue.city) {
          city = venue.city.toLowerCase()
        } 
        if (name.includes(this.state.name.toLowerCase()) && 
            state.includes(this.state.state.toLowerCase()) && 
            city.includes(this.state.city.toLowerCase()) &&
            (genres.includes(this.state.genre.toLowerCase()) || genres.includes("all"))){
          return venue
        }
      })

    }

    return filtered.map(venue => (<div key={venue.id}><VenueContainer venue={venue} handleClick={this.handleClick}/></div>))
  }
  // showVenues = () => {
  //   let filtered = [...this.props.venues]; 
  //   if(this.state.name || this.state.genre || this.state.city || this.state.state) {
  //     filtered = filtered.filter(venue => {
  //       console.log(venue)
  //       const name = venue.name.toLowerCase()
  //       const genres = venue.genres.toLowerCase()
  //       const state = venue.state.toLowerCase()
  //       const city = venue.city.toLowerCase()
  //       if (name.includes(this.state.name.toLowerCase()) && 
  //           state.includes(this.state.state.toLowerCase()) && 
  //           city.includes(this.state.city.toLowerCase()) &&
  //           (genres.includes(this.state.genre.toLowerCase()) || genres.includes("all"))){
  //         return venue
  //       }
  //     })
  //   }

  //   return filtered.map(venue => (<div key={venue.id}><VenueContainer venue={venue} handleClick={this.handleClick}/></div>))
  // }
  
  handleProfile = () => {
    if (this.state.clicked !== past) {
      past = this.state.clicked
      return <ProfileContainer venue={this.state.venue}/>
    }else {
      return (
        <div id="showVenues" className="background scroll">
          <NavBar />
          <Filter filter={this.handleChange} /> 
          <div className="flex">
            {this.showVenues()}
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        {this.handleProfile()}
      </div>
    )
  }
}

Venue.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  venues: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  venues: state.venues.venues, 
})

export default connect(mapStateToProps, { fetchVenues })(Venue);