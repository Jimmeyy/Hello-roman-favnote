import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 45px;
`;

const StyledPageHeader = styled.div`
  margin: 20px 0 40px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 15px 0 0 0;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
  font-style: italic;
`;

const ButtonIconWrapper = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 50px;
  right: 50px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50px;
  background-color: ${({ theme, pageType }) => theme[pageType]};
  cursor: pointer;
  transition: border-radius 0.5s;

  &:hover {
    border-radius: 25px;
  }
`;

class GridTemplate extends Component {
  state = {
    newItemBarFlag: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      newItemBarFlag: !prevState.newItemBarFlag,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { newItemBarFlag } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big>{pageContext}</StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <ButtonIconWrapper>
            <StyledButtonIcon icon={plusIcon} pageType={pageContext} onClick={this.toggleMenu} />
          </ButtonIconWrapper>
          <NewItemBar isVisible={newItemBarFlag} closeMenu={this.toggleMenu} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
