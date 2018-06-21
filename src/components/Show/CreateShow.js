import React from 'react';
import { connect } from 'react-redux';
import { createShow, fetchShows } from '../../actions/showActions';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';
import AddBands from './AddBands';
import AddVenue from './AddVenue';
import DatePicker from 'react-date-picker';
import NavBar from '../../containers/NavBar'

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
      if(localStorage.getItem('profile_type') === "band"){
        return <Redirect to="/band" />
      } else if(localStorage.getItem('profile_type') === "venue"){
        return <Redirect to="/venue" />
      }
      
    }
    console.log(this.state.date)
    return (
      <div className="background scroll" id="createShow">
        <NavBar />
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

CreateShow.propTypes = {
  createShow: PropTypes.func.isRequired
}

export default connect(null, { createShow, fetchShows })(CreateShow);