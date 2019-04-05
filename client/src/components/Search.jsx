import React from 'react';

const Search = props => (
  <div>
    <input 
      type="text"
      onChange={(event) => {props.handleChange(event)}}/>
    <button className="searchButton" onClick={props.handleClick}>Go</button>
  </div>
)


export default Search