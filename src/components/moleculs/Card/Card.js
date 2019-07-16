import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import linkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  &:first-child {
    z-index: 9999;
  }

  ${props =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px 0;
  font-weight: ${props => props.theme.light};
  font-style: italic;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  position: absolute;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  top: 25px;
  right: 25px;
`;

const StyledLink = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
  background: white url(${linkIcon}) no-repeat center center / 18px;
  border-radius: 50px;
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
      {cardType === 'article' && <StyledLink href={articleUrl} alt="article-link" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
