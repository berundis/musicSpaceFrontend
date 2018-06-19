import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions/showActions';
import ShowContainer from '../../containers/Show/ShowContainer'
import NavBar from '../../containers/NavBar';
import Filter from './Filter';

class Show extends React.Component {

  state = {
    bandName: '', 
    venueName: '',
    state: '',
    city: '',
    genre: ''
  }
  
  componentDidMount() {
    this.props.fetchShows(); 
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  showShows = () => {
    let filtered = [...this.props.shows];
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
    return filtered.map(show => (
      <div key={show.show.id}>
        <ShowContainer bands={show.bands} show={show.show} venue={show.venue}/>
      </div>))
  } 

  render() {
    console.log(this.props.shows)
    return (
      <div className="background scroll" id="showShows">
        <NavBar />
        <div className="center">
          <Filter filter={this.handleChange} />
        </div>
        <div className="flex">
          {this.showShows()}
        </div>
      </div>
    )
  }
}

Show.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  shows: state.shows.shows,
})

export default connect(mapStateToProps, { fetchShows })(Show)
