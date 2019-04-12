import React from 'react';
import $ from 'jquery';
import Pagination from './Pagination.jsx';
import Search from './Search.jsx'
import StarRatings from './StarRatings.jsx'

const { styled } = window;

const AppComponent = styled.div`
  @media (max-width: 600px) {
  }
   width: 600px;
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mockData: {
        reviews: [],
      },
      id: `${window.location.pathname}`,
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
    const { id } = this.state;
    const listingId = id.split('/');
    $.ajax({
      method: 'GET',
      url: `/api/reviews/${listingId[2]}`,
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

  getAvgRating() {
    const { mockData } = this.state;
    let sum = 0;
    for (let i = 0; i < mockData.reviews.length; i += 1) {
      const listing = mockData.reviews[i];
      sum += listing.accuracy;
      sum += listing.checkin;
      sum += listing.cleanliness;
      sum += listing.communication;
      sum += listing.location;
      sum += listing.value;
      const avg = Math.round(sum / (6 * mockData.reviews.length));
      this.setState({
        totalAvgRating: avg,
      });
    }
  }

  calculateIndivudualRatings() {
    const { mockData } = this.state;
    let totalAccuracyRating = 0;
    let totalCommunicationRating = 0;
    let totalCleanlinessRating = 0;
    let totalLocationRating = 0;
    let totalCheckinRating = 0;
    let totalValueRating = 0;
    for (let i = 0; i < mockData.reviews.length; i += 1) {
      const numOfReviews = mockData.reviews.length;
      const listing = mockData.reviews[i];
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
        },
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
    const { mockData, filterWord } = this.state;
    event.preventDefault();
    const filteredReview = mockData.reviews.filter((rev) => {
      return rev.reviewbody.includes(filterWord);
    });
    this.setState({
      haveSearched: true,
      filteredReviews: filteredReview,
    });
  }

  handleClickHomeScreen() {
    this.setState({
      haveSearched: false,
    });
  }

  render() {
    const {
      mockData, haveSearched, filterWord, filteredReviews, totalReviewCount, totalAvgRating, rating,
    } = this.state;
    if (haveSearched && filteredReviews.length === 0) {
      return (
        <AppComponent>
          <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} totalReviewCount={totalReviewCount} totalAvgRating={totalAvgRating} filteredReviews={filteredReviews}/></div>
          <Line />
          <BackToHomePage>
            <MentionedWord>
              None of our guests have mentioned
              “
              {filterWord}
              ”
            </MentionedWord>
            <a onClick={this.handleClickHomeScreen}>Back to all reviews</a>
          </BackToHomePage>
        </AppComponent>
      );
    }
    if (haveSearched) {
      return (
        <AppComponent>
          <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} totalReviewCount={totalReviewCount} totalAvgRating={totalAvgRating} filteredReviews={filteredReviews}/></div>
          <Line />
          <BackToHomePage>
            <MentionedWord>
              {`${filteredReviews.length} guests have mentioned "${filterWord}"`}
            </MentionedWord>
            <a onClick={this.handleClickHomeScreen}>Back to all reviews</a>
          </BackToHomePage>
          <Line />
          <div><Pagination reviews={mockData.reviews} filteredReviews={filteredReviews} haveSearched={haveSearched} /></div>
        </AppComponent>
      );
    }

    return (
      <AppComponent>
        <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} totalReviewCount={totalReviewCount} totalAvgRating={totalAvgRating} filteredReviews={filteredReviews} /></div>
        <div><StarRatings rating={rating} totalAvgRating={totalAvgRating} /></div>
        <div><Pagination reviews={mockData.reviews} filteredReviews={filteredReviews} haveSearched={haveSearched} /></div>
      </AppComponent>
    );
  }
}

export default App;
