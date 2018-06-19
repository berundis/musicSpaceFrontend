import React from 'react';

const Filter = (props) => {
  return (
    <div className="center">
      <div className="translucent outerFormDiv">
        <h2>Filter Shows By:</h2>
        <label htmlFor="state">State</label>
        <input type="text" name="state" onChange={props.filter}/>
        <br/><br/>
        <label htmlFor="city">City</label>
        <input type="text" name="city" onChange={props.filter}/>
        <br/><br/>
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" onChange={props.filter}/>
        <br/><br/>
        <label htmlFor="bandName">Band</label>
        <input type="text" name="bandName" onChange={props.filter}/>
        <br/><br/>
        <label htmlFor="venueName">Venue</label>
        <input type="text" name="venueName" onChange={props.filter}/>
      </div>
    </div>
  )
}

export default Filter;