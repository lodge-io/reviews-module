import React from 'react';
import $ from 'jquery';
import ListingList from './ListingList.jsx';
import Search from './Search.jsx'
import StarRatings from './StarRatings.jsx'
import styled from 'styled-components';

const AppComponent = styled.div`
  @media (max-width: 600px) {
  }
`;

const MentionedWord = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-right: 80px;
  color: #484848;
`;

const Line = styled.hr`
  border-top: .5px solid Gainsboro;
`;

const BackToHomePage = styled.span`
  display: flex;
  flex-direction: row;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: #008489;
`;

const Half = styled.div`
  fill: #008489;
  z-index:1;
`;

const Full = styled.div`
  fill: #484848;
  z-index:2;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mockData: {
        reviews: [],
      },
      filterWord: '',
      rating: {
        accuracy: 0,
        communication: 0,
        cleanliness: 0,
        location: 0,
        checkin: 0,
        value: 0,
      },
      totalAvgRating: 0,
      haveSearched: false, 
      totalReviewCount: 0,
      filteredReviews: [],
    };
    this.getMockData = this.getMockData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilterReview = this.handleFilterReview.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
    this.calculateIndivudualRatings = this.calculateIndivudualRatings.bind(this);
    this.handleClickHomeScreen = this.handleClickHomeScreen.bind(this);
  }
  
  componentDidMount() {
    this.getMockData();
  }
  
  getMockData() {
    $.ajax({
      url: '/reviews/1',
      type: 'GET',
      success: (data) => {
        this.setState({
          mockData: data,
          totalReviewCount: data.reviews.length,
        });
        this.getAvgRating();
        this.calculateIndivudualRatings();
      },
      error: () => (console.log('error')),
    });
  }

  calculateIndivudualRatings() {
    let totalAccuracyRating = 0;
    let totalCommunicationRating = 0;
    let totalCleanlinessRating = 0;
    let totalLocationRating = 0;
    let totalCheckinRating = 0;
    let totalValueRating = 0;
    for (let i = 0; i < this.state.mockData.reviews.length; i += 1) {
      const numOfReviews = this.state.mockData.reviews.length;
      const listing = this.state.mockData.reviews[i];
      const accuracy = Math.round((totalAccuracyRating += listing.accuracy) / numOfReviews);
      const communication = Math.round((totalCommunicationRating += listing.communication) / numOfReviews);
      const cleanliness = Math.round((totalCleanlinessRating += listing.cleanliness) / numOfReviews);
      const location = Math.round((totalLocationRating += listing.location) / numOfReviews);
      const checkin = Math.round((totalCheckinRating += listing.checkin) / numOfReviews);
      const value = Math.round((totalValueRating += listing.value) / numOfReviews);
      this.setState({
        rating: {
          accuracy,
          communication,
          cleanliness,
          location,
          checkin,
          value,
        }
      });
    }
  }
  
  
  getAvgRating() {
    let sum = 0;
    for (let i = 0; i < this.state.mockData.reviews.length; i++) {
      let listing = this.state.mockData.reviews[i];
      sum += listing.accuracy;
      sum += listing.checkin;
      sum += listing.cleanliness;
      sum += listing.communication;
      sum += listing.location;
      sum += listing.value;
      let avg = Math.round(sum / (6 * this.state.mockData.reviews.length));
      this.setState({
        totalAvgRating: avg
      });
    }
  }


  handleChange(event) {
    event.preventDefault();
    this.setState({
      filterWord: event.target.value,
    });
  }
  
  handleFilterReview(event) {
    console.log('yes!')
    event.preventDefault();
    const filteredReview = this.state.mockData.reviews.filter((rev) => {
      return rev.reviewbody.includes(this.state.filterWord);
    });
    this.setState({
      haveSearched: true,
      filteredReviews: filteredReview,
    });
  }

  handleClickHomeScreen() {
    this.setState({
      haveSearched: false,
    })
  }
  
  render() {
    if (this.state.haveSearched && this.state.mockData.reviews.length === 0) {
      return (
        <AppComponent>
          <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} totalReviewCount={this.state.totalReviewCount} totalAvgRating={this.state.totalAvgRating} filteredReviews={this.state.filteredReviews}/></div>
          <Line></Line>
          <BackToHomePage>
            <MentionedWord>None of our guests have mentioned “{this.state.filterWord}”</MentionedWord>
            <a onClick={this.handleClickHomeScreen}>Back to all reviews</a>
          </BackToHomePage>
        </AppComponent>
      );
    }
    if (this.state.haveSearched) {
      return (
        <AppComponent>
          <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} totalReviewCount={this.state.totalReviewCount} totalAvgRating={this.state.totalAvgRating} filteredReviews={this.state.filteredReviews}/></div>
          <Line></Line>
          <BackToHomePage>
            <MentionedWord>{this.state.filteredReviews.length} {' '} guests have mentioned “{this.state.filterWord}”</MentionedWord>
            <a onClick={this.handleClickHomeScreen}>Back to all reviews</a>
          </BackToHomePage>
          <Line></Line>
          <div><ListingList reviews={this.state.mockData.reviews} filteredReviews={this.state.filteredReviews} haveSearched={this.state.haveSearched} /></div>
        </AppComponent>
      );
    }

    return (
      <AppComponent>
          <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} totalReviewCount={this.state.totalReviewCount} totalAvgRating={this.state.totalAvgRating} filteredReviews={this.state.filteredReviews}/></div>
          <div><StarRatings rating={this.state.rating} totalAvgRating={this.state.totalAvgRating}/></div>
          <div><ListingList reviews={this.state.mockData.reviews} filteredReviews={this.state.filteredReviews} haveSearched={this.state.haveSearched}/></div>
        </AppComponent>
    )
  }
}

export default App;

