import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../../actions/bandActions';
import Filter from './Filter';
import ProfileContainer from '../../containers/Band/ProfileContainer';
import BandContainer from '../../containers/Band/BandContainer';
import NavBar from '../../containers/NavBar'

let past
class Band extends React.Component {

  state = {
    genre: '',
    city: '',
    state: '',
    name: '',
    clicked: false,
    band: '',
    state: ''
  }

  componentDidMount() {
    this.props.fetchBands();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (band) => {
    past = this.state.clicked
    this.setState({clicked: !this.state.clicked})
    this.setState({band: band})
  }

  showBands = () => {
    let filtered = [...this.props.bands];
    if( this.state.name || this.state.genre || this.state.city || this.state.state) {
      filtered = filtered.filter(band => (
        ( band.name && band.name.toLowerCase().includes(this.state.name.toLowerCase())) &&
        ( band.state && band.state.toLowerCase().includes(this.state.state.toLowerCase()) ) &&
        ( band.city && band.city.toLowerCase().includes(this.state.city.toLowerCase())) &&
        ( band.genre && band.genre.toLowerCase().includes(this.state.genre.toLowerCase()) )
      ))
    }
    return filtered.map(band => (
      <div key={band.id}>
        <BandContainer band={band} handleClick={this.handleClick}/>
      </div>))
  }

  handleProfile = () => {
    if (this.state.clicked !== past) {
      past = this.state.clicked
      return <ProfileContainer band={this.state.band}/>
    }else {
      return (
        <div id="showBands" className='background scroll'>
          <NavBar />
          <Filter filter={this.handleChange} /> 
            <div className="flex">
              {this.showBands()}
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

Band.propTypes = {
  fetchBands: PropTypes.func.isRequired,
  bands: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  bands: state.bands.bands
})

export default connect(mapStateToProps, { fetchBands })(Band);
