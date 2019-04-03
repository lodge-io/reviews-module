import React from 'react';
import ListingListEntry from './ListingListEntry.jsx';

const ListingList = (props) => {
  console.log('props!', props)
    return (
  <div>
    {props.listing.map((review, key) => 
    <ListingListEntry key={key} review={review}/>
    )}
  </div>
    )
}




export default ListingList;