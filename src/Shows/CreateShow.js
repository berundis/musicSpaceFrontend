import React from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { createShow } from '../actions/showActions';
import AddBands from './AddBands';
import AddVenue from './AddVenue';

import Navbar from '../Navbar'

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
    const obj = {
      name: this.state.name,
      venue_id: this.state.venue_id,
      flyer: this.state.flyer,
      band_ids: this.state.band_ids,
      date: this.state.date.toDateString()
    }
    this.props.createShow(obj)
    this.setState({done: true})
  }

  render() {
    if(this.state.done){
      return <Redirect to="/profile" />
    }

    return (
      <div className="background scroll" id="createShow">
        <Navbar />
        <div className="center">
          <div className="translucent outerFormDiv">
            <h2>Create a Show</h2>
            <form onSubmit={this.submit}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
              <br/><br/>
              <label htmlFor="flyer">Flyer (URL)</label>
              <input type="text" name="flyer" value={this.state.flyer} onChange={this.handleChange}/>
            </form>

            <div className="translucent white">
              <label>Date</label><br/><br/>
              <DatePicker onChange={this.handleDate} value={this.state.date}/>
            </div>
            <div className="wrapper">
              <AddVenue addVenue={this.addVenue} deleteVenue={this.deleteVenue}/>
              <AddBands addBand={this.addBand} deleteBand={this.deleteBand}/>
            </div>
            <br/><br/>
            <input type="submit" onClick={this.submit} value="Submit"/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createShow })(CreateShow);
