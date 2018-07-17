import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowBands from './ShowBands'
import Navbar from '../Navbar'
import Filter from './Filter'

class BandsIndex extends Component {

  state = {
    genre: '',
    city: '',
    state: '',
    name: '',
    clicked: true
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  handleFilter = (e) => {
    this.setState({[e.target.name]: e.target.value})
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
    return filtered.map(band => <ShowBands key={band.id} band={band} />)
  }

  render() {
    return (
      <div id='showBands' className='background scroll'>
        <Navbar />
        <Filter filter={this.handleFilter} click={this.handleClick} state={this.state}/>
        <div className='flex'>
          {this.showBands()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {bands: state.bands.bands}
}


export default connect(mapStateToProps)(BandsIndex)
