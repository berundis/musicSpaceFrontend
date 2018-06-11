import React from 'react'
import BandContainer from '../../containers/Band/BandContainer'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../../actions/bandActions';
import CreateBand from './CreateBand';
import Filter from './Filter';

class Band extends React.Component {

  state = {
    genre: '',
    location: '',
    name: ''
  }

  componentDidMount() {
    this.props.fetchBands();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newBand) {
      this.props.bands.push(nextProps.newBand)
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
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
    return filtered.map(band => (<div key={band.id}><BandContainer band={band} /></div>))
  }

  render() {
    return (
      <div>
        <CreateBand />
        <Filter filter={this.handleChange}/>
        {this.showBands()}
      </div>
    )
  }
}

Band.propTypes = {
  fetchBands: PropTypes.func.isRequired,
  bands: PropTypes.array.isRequired,
  newBand: PropTypes.object 
}

const mapStateToProps = state => ({
  bands: state.bands.bands,
  newBand: state.bands.band
})

export default connect(mapStateToProps, { fetchBands })(Band);
