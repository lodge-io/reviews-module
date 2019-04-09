import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
  padding-bottom: 15px;
  padding-top: 5px;
`;


const TealStar = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #008489;
  font-size: 18px;
  display: flex;
  padding-left: 11px; 
  flex-direction: row;
  letter-spacing: 4px;
`;

const GrayStar = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #d8d8d8;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  letter-spacing: 4px;

`;

const Line = styled.hr`
  border-top: .5px solid Gainsboro;
`;

const Input = styled.input`
  border-radius: 4px;
  height:30px
  width:180px;
  border: 0px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  outline: none;
`;

const Nav = styled.span`
  margin-left: 130px;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  border-radius: 5px;

  :hover {
    border-color: teal;
  }
`;

const SearchPad = styled.span`
  padding: 5px;
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
          {props.totalReviewCount} 
          {' '}
          Reviews
          <ReviewsSearch>
            {totalAvgRating}
          </ReviewsSearch>
        </ReviewCount>
        <Nav>
          <form onSubmit={props.handleFilterReview}>
            <SearchPad>
              <FontAwesomeIcon icon={faSearch} />
            </SearchPad>
            <Input
              type="search"
              placeholder="Search reviews"
              onChange={(event) => { props.handleChange(event); }}
            />
          </form>
        </Nav>
      </ReveiwsStarSearch>
      <Line></Line>
    </div>
  );
};

export default Search;
