import React from 'react';

const Filter = (props) => {
  if(props.state.clicked){
    return(
      <div className="center">
        <div className="translucent outerFormDiv">
          <input onClick={props.click} type="submit" value="Filter Shows"/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="center">
        <div className="translucent outerFormDiv">
          <input onClick={props.click} type="submit" value="Hide Filter"/><br/><br/>
          <label htmlFor="state">State</label>
          <input type="text" name="state" onChange={props.filter} value={props.state.state}/>
          <br/><br/>
          <label htmlFor="city">City</label>
          <input type="text" name="city" onChange={props.filter} value={props.state.city}/>
          <br/><br/>
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" onChange={props.filter} value={props.state.genre}/>
          <br/><br/>
          <label htmlFor="bandName">Band</label>
          <input type="text" name="bandName" onChange={props.filter} value={props.state.bandName}/>
          <br/><br/>
          <label htmlFor="venueName">Venue</label>
          <input type="text" name="venueName" onChange={props.filter} value={props.state.venueName}/>
        </div>
      </div>
    )
  }
}

export default Filter;
