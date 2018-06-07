import React from 'react'
import BandContainer from '../../containers/Band/BandContainer'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../../actions/bandActions';
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

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  showBands = () => {
    let filtered = [...this.props.bands];
    filtered = filtered.filter(band => (
      band.name.toLowerCase().includes(this.state.name.toLowerCase()) &&
      band.location.toLowerCase().includes(this.state.location.toLowerCase()) &&
      band.genre.toLowerCase().includes(this.state.genre.toLowerCase())
    ))
    return filtered.map(band => <BandContainer key={band.id} band={band} />)
  }

  render() {
    console.log(this.props.bands)
    return (
      <div>
        <Filter filter={this.handleChange}/>
        {this.showBands()}
      </div>
    )
  }
}

Band.propTypes = {
  fetchBands: PropTypes.func.isRequired,
  bands: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  bands: state.bands.bands
})

export default connect(mapStateToProps, { fetchBands })(Band);
