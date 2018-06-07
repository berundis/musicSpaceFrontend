import React from 'react'
import BandContainer from '../../containers/Band/BandContainer'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../../actions/bandActions';

class Band extends React.Component {

  componentDidMount() {
    this.props.fetchBands();
  }

  showBands = () => (
    this.props.bands.map(band => <BandContainer key={band.id} band={band} />)
  )
  render() {
    return (
      <div>
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
