import React from 'react';

const ListingListEntry = props => (
  <div>
    <img src={props.review.image}/>
    <div>{props.review.name}</div>
    <div>{props.review.date}</div>
    <div>{props.review.reviewbody}</div> 
  </div>
);

export default ListingListEntry;
