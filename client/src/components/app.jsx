import React from 'react';
import $ from 'jquery';
import ListingList from './ListingList.jsx';
import Search from './Search.jsx'
import StarRatings from './StarRatings.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: {
        reviews: [],
      },
      filteredReviews: '',
      foundAverage: false,
      rating: {
        accuracy: 0,
        checkin: 0,
        cleanliness: 0,
        communication: 0,
        location: 0,
        value: 0,
      },
      totalAvgRating: 0,
    };
    this.getMockData = this.getMockData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilterReview = this.handleFilterReview.bind(this);
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
        });
      },
      error: () => {console.log('error')}
    });
  }
  
  handleChange(event) {
    event.preventDefault();
    this.setState({
      filteredReviews: event.target.value,
    });
  }

  handleFilterReview() {
    const filteredReview = this.state.mockData.reviews.filter((rev) => {
      return rev.reviewbody.includes(this.state.filteredReviews);
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
        <button onClick={this.getAvgRating} ></button>
        <div>
          {this.state.mockData.reviews.length} 
          {' '}
          Reviews
        </div>
        <div>Accuracy Location</div>
        <div>Communication Check-in</div>
        <div>Cleanliness Value</div>
        <div><Search handleChange={this.handleChange} handleFilterReview={this.handleFilterReview} /></div>
        <div><ListingList listing={this.state.mockData.reviews} /></div>
      </div>
    );
  }
}

export default App;
