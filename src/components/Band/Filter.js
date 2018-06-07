import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <h3>Filter Bands By:</h3>
      <h4>Location:</h4>
      <input type="text" name="location" onChange={props.filter}/>
      <h4>Genre:</h4>
      <input type="text" name="genre" onChange={props.filter}/>
      <h4>Band Name:</h4>
      <input type="text" name="name" onChange={props.filter}/>
      <hr/>
    </div>
  )
}

export default Filter;
