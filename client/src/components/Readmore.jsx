import React from 'react';

const { styled } = window;

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


class Readmore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.expandedText = this.expandedText.bind(this);
    this.getMoreTextDiv = this.getMoreTextDiv.bind(this);
  }

  getMoreTextDiv() {
    const { expanded } = this.state;
    const { review } = this.props;
    if (expanded) {
      return review;
    }
    return review.slice(0, 300);
  }

  expandedText() {
    this.setState({
      expanded: true,
    });
  }

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <Body>
          {this.getMoreTextDiv()}
          <ReadMore onClick={this.expandedText}>{expanded === false ? <ReadMoreButton>...Read more</ReadMoreButton> : null}</ReadMore>
        </Body>
        <Line />
      </div>
    );
  }
}

export default Readmore;
