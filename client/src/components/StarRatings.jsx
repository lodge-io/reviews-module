import React from 'react';
import styled from 'styled-components';

const TealStar = styled.span`
  color: #008489;
  font-size: 18px;
  display: flex;
  padding-left: 75px; 
`;

const GrayStar = styled.span`
  color: #d8d8d8;
  font-size: 18px;
  display: flex;
  flex-direction: row;
`;

const ReviewName = styled.span`
  color: #484848;
  display: flex;
  flex-direction: row;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const TwoRatings = styled.span`
  display: flex;
  flex-direction: row;
  padding-left: 150px; 
`

const Line = styled.hr`
  border-top: 1px solid Gainsboro;
`;

const StarRatings = ({rating}) => {
  let accuracy = <TealStar>★★★★★</TealStar>;
  let communication = <TealStar>★★★★★</TealStar>;
  let cleanliness = <TealStar>★★★★★</TealStar>;
  let location = <TealStar>★★★★★</TealStar>;
  let checkin = <TealStar>★★★★★</TealStar>;
  let value = <TealStar>★★★★★</TealStar>;
  let ratings = [rating.accuracy, rating.communication, rating.cleanliness, rating.location, rating.checkin, rating.value];
  let ratingName = [accuracy, communication, cleanliness, location, checkin, value];

  for (let i = 0; i < ratings.length; i += 1) {
    if (ratings[i] === 1) {
      ratingName[i] = <TealStar>★<GrayStar>★★★★</GrayStar></TealStar>
    } else if (ratings[i] === 2) {
      ratingName[i] = <TealStar>★★<GrayStar>★★★</GrayStar></TealStar>
    } else if (ratings[i] === 3) {
      ratingName[i] = <TealStar>★★★<GrayStar>★★</GrayStar></TealStar>
    } else if (ratings[i] === 4) {
      ratingName[i] = <TealStar>★★★★<GrayStar>★</GrayStar></TealStar>
    } else if (ratings[i] === 5) {
      ratingName[i] = <TealStar>★★★★★</TealStar>
    }
  }

  return (
    <div>
      <ReviewName>
        Accuracy
        {ratingName[0]}
        <TwoRatings>
          Location
          {ratingName[3]}
        </TwoRatings>
      </ReviewName>
      <ReviewName>
        Communication
        {ratingName[1]}
        <TwoRatings>
          Check-in
          {ratingName[4]}
        </TwoRatings>
      </ReviewName>
      <ReviewName>
        Cleanliness
        {ratingName[2]}
        <TwoRatings>
          Value
          {ratingName[5]}
        </TwoRatings>
      </ReviewName>
      <Line></Line>
    </div>
  );
};

export default StarRatings;
