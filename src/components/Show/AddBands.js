import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBands } from '../../actions/bandActions';

class AddBands extends React.Component {

  state = {
    bands: [],
    bandName: ''
  }

  componentDidMount(){
    this.props.fetchBands 
  }

  search = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addBand = (e, band) => {
    this.props.addBand(band.id)
    const bands = [...this.state.bands]
    if (!bands.includes(band)){
      bands.push(band)
      this.setState({bands: bands, bandName: ''})
    } 
  }

  deleteBand = (e, id) => {
    this.props.deleteBand(id)
    const bands = this.state.bands.filter(band => band.id !== id)
    this.setState({bands: bands})
  }

  showBands = () => {
    if(!this.state.bandName) {
      return null
    }
    let filtered = [...this.props.bands];
    filtered = filtered.filter( band => (
      band.name.toLowerCase().includes(this.state.bandName.toLowerCase())
    ))
    return filtered.map(band => (
      <div key={band.id}>
        <br/>
        <button onClick={(e) => this.addBand(e, band)}>{band.name}</button>
      </div>
    ))
  }

  showAddedBands = () => {
    if(this.state.bands.length > 0){
      return (
        <div>
          {this.state.bands.map(band => <button key={band.id} onClick={(e) => this.deleteBand(e, band.id)}>{band.name}</button>)}
        </div>
      )
    } else {
      return (
        <div>
          <h5>No Bands Yet</h5>
        </div>
      )
    }
  }
  render() {
    console.log(this.state.bandName)
    return (
      <div className="center">
        <div className="translucent">
          <h2>Added Bands</h2>
          {this.showAddedBands()}
        </div>
        
        <br/>
        <label htmlFor="bandName">Find Bands By Name</label>
        <input type="text" name="bandName" onChange={this.search} value={this.state.bandName}/>
        {this.showBands()}
      </div>
    )
  }
}


AddBands.propTypes = {
  fetchBands: PropTypes.func.isRequired,
  bands: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  bands: state.bands.bands
})

export default connect(mapStateToProps, { fetchBands })(AddBands);