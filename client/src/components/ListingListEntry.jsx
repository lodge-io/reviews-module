import React from 'react';
import styled from 'styled-components';

const ReadMore = styled.a`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: #008489;

`;

const Body = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: start;
  color: #484848;
  word-wrap: break-word;
  margin: 0px;
  line-height: 1.375em;
  font-weight: 400;
`;

const Line = styled.hr`
  border-top: .5px solid Gainsboro;
`;

const ReadMoreButton = styled.span`
  flex-direction: row;
`;


class ListingListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.expandedText = this.expandedText.bind(this);
    this.getMoreTextDiv = this.getMoreTextDiv.bind(this);
  }

  getMoreTextDiv() {
    if (this.state.expanded) {
      return this.props.review;
    }
    return this.props.review.slice(0, 300);
  }

  expandedText() {
    this.setState({
      expanded: true,
    });
  }

  render() {
    return (
      <div>
        <Body>
          {this.getMoreTextDiv()}
          <ReadMore onClick={this.expandedText}>{this.state.expanded === false ? <ReadMoreButton>...Read more</ReadMoreButton> : null}</ReadMore>
        </Body>
        <Line></Line>
      </div>
    );
  }
}

export default ListingListEntry;
