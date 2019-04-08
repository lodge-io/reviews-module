import React from 'react';
import $ from 'jquery';
import ListingList from './ListingList.jsx';
import Search from './Search.jsx'
import StarRatings from './StarRatings.jsx'
import ListingListEntry from './ListingListEntry.jsx';
import styled from 'styled-components';

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
    };
    this.getMockData = this.getMockData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilterReview = this.handleFilterReview.bind(this);
    this.getAvgRating = this.getAvgRating.bind(this);
    this.calculateIndivudualRatings = this.calculateIndivudualRatings.bind(this);
  }

  componentDidMount() {
    this.getMockData();
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

  getMockData() {
    $.ajax({
      url: '/reviews/1',
      type: 'GET',
      success: (data) => {
        this.setState({
          mockData: data,
        });
        this.getAvgRating();
        this.calculateIndivudualRatings();
      },
      error: () => {console.log('error')}
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      filterWord: event.target.value,
    });
  }
  
  handleFilterReview(event) {
    event.preventDefault();
    const filteredReview = this.state.mockData.reviews.filter((rev) => {
      return rev.reviewbody.includes(this.state.filterWord);
    });
    this.setState({
      mockData: {
        reviews: filteredReview,
      },
    });
  }
  
  render() {
    return (
      <div>
        <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} numberOfReviews={this.state.mockData.reviews.length} totalAvgRating={this.state.totalAvgRating}/></div>
        <div><StarRatings rating={this.state.rating} totalAvgRating={this.state.totalAvgRating}/></div>
        <div><ListingList listing={this.state.mockData.reviews} /></div>
      </div>
    );
  }
}

export default App;

