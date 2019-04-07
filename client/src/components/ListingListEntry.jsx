import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const ReadMore = styled.a`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: #008489
`;

const Body = styled.div`
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

const Line = styled.hr`
  border-top: 1px solid Gainsboro;
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
      return this.props.review.reviewbody;
    }
    return this.props.review.reviewbody.slice(0, 350);
  }

  expandedText() {
    this.setState({
      expanded: true,
    });
  }

  render() {
    return (
      <div>
        <AvatarNameDate>
          <Avatar src={this.props.review.image}/>
          <NameDate>
            <Name>{this.props.review.name}</Name>
            <Date>{this.props.review.date}</Date>
          </NameDate>
        </AvatarNameDate>
        <Body>
          {this.getMoreTextDiv()}
          <ReadMore onClick={this.expandedText} href="#">...Read more</ReadMore>
        </Body>
        <Line></Line>
      </div>
    )
  }
}


export default ListingListEntry;
