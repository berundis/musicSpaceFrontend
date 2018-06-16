import React from 'react';
import { connect } from 'react-redux';
import { createShow, fetchShows } from '../../actions/showActions';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';
import AddBands from './AddBands';
import AddVenue from './AddVenue';
import DatePicker from 'react-date-picker';

class CreateShow extends React.Component {
  state = {
    name: '',
    venue_id: '',
    flyer: '',
    band_ids: [],
    date: new Date(),
    done: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addBand = (id) => {
    if (this.state.band_ids.includes(id)){
      return null
    }
    const ids = [...this.state.band_ids]
    ids.push(id)
    this.setState({band_ids: ids})
  }
  
  deleteBand = (id) => {
    let ids = this.state.band_ids.filter(band_id => band_id !== id)
    this.setState({band_ids: ids})
  }

  addVenue = (id) => {
    if(!this.state.venue_id) {
      this.setState({venue_id: id})
    }else {
      return null 
    }
  }

  deleteVenue = () => {
    this.setState({venue_id: ''})
  }

  handleDate = date => {
    this.setState({date})
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({date: this.state.date.toDateString()}, this.props.createShow(this.state))
    this.setState({done: true})
  }

  render() {
    if(this.state.done){
      return <Redirect to="/shows" />
    }
    console.log(this.state.date)
    return (
      <div>
        <h2>Create a Show</h2>
        <form onSubmit={this.submit}>
          <button type="submit">SUBMIT</button>
          <h4>Name:</h4>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <h4>Flyer URL:</h4>
          <input type="text" name="flyer" value={this.state.flyer} onChange={this.handleChange}/>
        </form>
        <DatePicker onChange={this.handleDate} value={this.state.date}/>
        <AddVenue addVenue={this.addVenue} deleteVenue={this.deleteVenue}/>
        <AddBands addBand={this.addBand} deleteBand={this.deleteBand}/>
        <button onClick={this.submit}>SUBMIT</button>
      </div>
    )
  }
}

CreateShow.propTypes = {
  createShow: PropTypes.func.isRequired
}

export default connect(null, { createShow, fetchShows })(CreateShow);