import React from 'react';

const { styled } = window;


const TealStar = styled.span`
  color: #008489;
  font-size: 18px;
  display: flex;
  padding-left: 75px; 
  letter-spacing: 4px;
`;

const GrayStar = styled.span`
  color: #d8d8d8;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  letter-spacing: 4px;
`;

const Line = styled.hr`
  border-top: .5px solid Gainsboro;
`;

const RatingContainer = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #484848;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TopBottomSpacing = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
`;

const TopBottomSpacings = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const MiddleSpacing = styled.div`
  padding-left: 50px;
`;

const StarRatings = ({rating}) => {
  let accuracy = [];
  let communication = [];
  let cleanliness = [];
  let location = [];
  let checkin = [];
  let value = [];
  const ratings = [rating.accuracy, rating.communication, rating.cleanliness, rating.location, rating.checkin, rating.value];
  const ratingName = [accuracy, communication, cleanliness, location, checkin, value];

  for (let i = 0; i < ratings.length; i += 1) {
    if (ratings[i] === 1) {
      ratingName[i] = <TealStar>★<GrayStar>★★★★</GrayStar></TealStar>;
    } else if (ratings[i] === 2) {
      ratingName[i] = <TealStar>★★<GrayStar>★★★</GrayStar></TealStar>;
    } else if (ratings[i] === 3) {
      ratingName[i] = <TealStar>★★★<GrayStar>★★</GrayStar></TealStar>;
    } else if (ratings[i] === 4) {
      ratingName[i] = <TealStar>★★★★<GrayStar>★</GrayStar></TealStar>;
    } else if (ratings[i] === 5) {
      ratingName[i] = <TealStar>★★★★★</TealStar>;
    }
  }

  return (
    <div>

      <RatingContainer>
        <div>
          <TopBottomSpacings>Accuracy</TopBottomSpacings> 
          <TopBottomSpacings>Communication</TopBottomSpacings>
          <TopBottomSpacings>Cleanliness</TopBottomSpacings>
        </div>

        <div>
          <TopBottomSpacing>{ratingName[0]}</TopBottomSpacing>
          <TopBottomSpacing>{ratingName[1]}</TopBottomSpacing>
          <TopBottomSpacing>{ratingName[2]}</TopBottomSpacing>
        </div>

        <MiddleSpacing>
          <TopBottomSpacings>Location</TopBottomSpacings>
          <TopBottomSpacings>Check-in</TopBottomSpacings>
          <TopBottomSpacings>Value</TopBottomSpacings>
        </MiddleSpacing>

        <div>
          <TopBottomSpacing>{ratingName[3]}</TopBottomSpacing>
          <TopBottomSpacing>{ratingName[4]}</TopBottomSpacing>
          <TopBottomSpacing>{ratingName[5]}</TopBottomSpacing>
        </div>

      </RatingContainer>
      <Line />
    </div>
  );
};

export default StarRatings;
