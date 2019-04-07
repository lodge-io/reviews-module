import React from 'react';
import styled from 'styled-components';

const ReviewsSearch = styled.span`
  display: flex;
  flex-direction: row;
`;

const ReviewCount = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 24px;
  line-height: 30px;
  text-align: start;
  color: #484848;
  display: flex;
  flex-direction: row;
`;

const ReveiwsStarSearch = styled.span`
  display: flex;
  flex-direction: row;
`;

const TealStar = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #008489;
  font-size: 18px;
  display: flex;
  padding-left: 11px; 
  line-height: 25.74px;
`;

const GrayStar = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #d8d8d8;
  font-size: 18px;
  display: flex;
  flex-direction: row;
`;



const Search = (props) => {
  let totalAvgRating = <TealStar>★★★★★</TealStar>
  if (props.totalAvgRating === 1) {
    totalAvgRating = <TealStar>★<GrayStar>★★★★</GrayStar></TealStar>;
  } else if (props.totalAvgRating === 2) {
    totalAvgRating = <TealStar>★★<GrayStar>★★★</GrayStar></TealStar>;
  } else if (props.totalAvgRating === 3) {
    totalAvgRating = <TealStar>★★★<GrayStar>★★</GrayStar></TealStar>;
  } else if (props.totalAvgRating === 4) {
    totalAvgRating = <TealStar>★★★★<GrayStar>★</GrayStar></TealStar>;
  }

  return (

    <div>
      <ReveiwsStarSearch>
        <ReviewCount>
          {props.numberOfReviews} 
          {' '}
          Reviews
          <ReviewsSearch>
            {totalAvgRating}
          </ReviewsSearch>
       </ReviewCount>
        <form onSubmit={props.handleFilterReview}>
          <input
            type="text"
            placeholder="Search reviews"
            onChange={(event) => { props.handleChange(event); }}
          />
        </form>
      </ReveiwsStarSearch>
    </div>
  );
};

export default Search;
