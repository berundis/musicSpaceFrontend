import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../../actions/bandActions';
import Filter from './Filter';
import ProfileContainer from '../../containers/Band/ProfileContainer';
import BandContainer from '../../containers/Band/BandContainer';

let past
class Band extends React.Component {

  state = {
    genre: '',
    location: '',
    name: '',
    clicked: false,
    band: ''
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
    if( this.state.name || this.state.genre || this.state.location) {
      filtered = filtered.filter(band => (
        ( band.name && band.name.toLowerCase().includes(this.state.name.toLowerCase())) &&
        ( band.location && band.location.toLowerCase().includes(this.state.location.toLowerCase()) ) &&
        ( band.genre && band.genre.toLowerCase().includes(this.state.genre.toLowerCase()) )
      ))
    }
    return filtered.map(band => (<div key={band.id}><BandContainer band={band} handleClick={this.handleClick}/></div>))
  }

  handleProfile = () => {
    if (this.state.clicked !== past) {
      past = this.state.clicked
      return <ProfileContainer band={this.state.band}/>
    }else {
      return (
        <div>
          <Filter filter={this.handleChange} /> 
          {this.showBands()}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
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
