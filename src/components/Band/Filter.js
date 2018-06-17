import React from 'react';

const Filter = (props) => {
  return (
    <div className="center">
      <div className="translucent outerFormDiv">
        <h2>Filter Bands By:</h2>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" onChange={props.filter}/>
        <br/><br/>
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" onChange={props.filter}/>
        <br/><br/>
        <label htmlFor="name">Band Name</label>
        <input type="text" name="name" onChange={props.filter}/>
      </div>
    </div>
  )
}

export default Filter;
