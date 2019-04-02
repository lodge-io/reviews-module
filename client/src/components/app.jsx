import React from 'react';
import $ from 'jquery';
import ListingList from './ListingList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      mockData: {
        reviews: [],
      }
    };
    this.getMockData = this.getMockData.bind(this);
  }

  componentDidMount() {
    this.getMockData();
  }

  getMockData() {
    $.ajax({
      url: '/reviews/1',
      type: 'GET',
      success: (data) => {
        console.log('data!', data);
        this.setState({
          mockData: data,
        });
      },
      error: () => {console.log('error')}
    });
  }
    

  render() {
    return (
      <div>
        <div>
          Hello
        </div>
        <div>{`${this.state.mockData.reviews.length} Reviews`}</div>
        <div><ListingList listing={this.state.mockData.reviews} /></div>
      </div>
    );
  }
}

export default App;
