import React from 'react';
import Readmore from './Readmore.jsx';

const { styled } = window;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: start;
  color: #484848;
  font-weight: 600;
  word-wrap: break-word;
  margin: 0px;
  line-height: 1.375em;
`;

const Date = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  color: #484848;
`;

const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px; 
`;

const AvatarNameDate = styled.div`
  display: flex;
  flex-direction: row;
`;

const PageNumber = styled.a`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #008489;
  padding-left: 10px;
  letter-spacing: 7px;
  text-decoration:none;
  :hover {
    border-bottom: .5px solid #008489; 
  }
`;

const Review = styled.div`
  width: 600px;
  display: block;
`;

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      reviewsPerPage: 7,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { currentPage, reviewsPerPage } = this.state;
    const { reviews, filteredReviews } = this.props;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const filterReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
    
    const renderReviews = currentReviews.map((review, index) => {
      return (
        <div key={index}>
          <AvatarNameDate>
            <Avatar src={review.image} />
            <NameDate>
              <Name>{review.name}</Name>
              <Date>{review.date}</Date>
            </NameDate>
          </AvatarNameDate>
          <div>
            <Readmore review={review.reviewbody} />
          </div>
        </div>
      );
    });

    const renderFilteredReviews = filterReviews.map((review, index) => {
      return (
        <div key={index}>
          <AvatarNameDate>
            <Avatar src={review.image} />
            <NameDate>
              <Name>{review.name}</Name>
              <Date>{review.date}</Date>
            </NameDate>
          </AvatarNameDate>
          <div>
            <Readmore review={review.reviewbody} />
          </div>
        </div>
      );
    });

    if (!this.props.haveSearched) {
      
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i += 1) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map((number, index) => {
        return (
          <span key={index}>
            <PageNumber
              key={number}
              id={number}
              onClick={this.handleClick}
              href="#"
            >
              {number}
            </PageNumber>
          </span>
        );
      });

      return (
        <div>
          <div>
            <Review>
              {renderReviews}
            </Review>
            <div id="page-numbers">
              {renderPageNumbers}
            </div>
          </div>
        </div>
      );
    }

    if (this.props.haveSearched) {

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(filterReviews.length / reviewsPerPage); i += 1) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map((number, index) => {
        return (
          <span key={index}>
            <PageNumber
              key={number}
              id={number}
              onClick={this.handleClick}
              href="#"
            >
              {number}
            </PageNumber>
          </span>
        );
      });

      return (
        <div>
          <div>
            <div>
              {renderFilteredReviews}
            </div>
            <div id="page-numbers">
              {renderPageNumbers}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Pagination;
