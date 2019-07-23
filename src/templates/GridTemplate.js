import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
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

const GridTemplate = ({ children, pageContext }) => (
  <>
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big>{pageContext}</StyledHeading>
          <StyledParagraph>6 {pageContext}</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  </>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
