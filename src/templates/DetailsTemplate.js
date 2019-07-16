import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 30px;
`;

const DetailsTemplate = () => (
  <UserPageTemplate>
    <StyledWrapper>
      <h1>Note</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ducimus laborum ab, quia
        pariatur dignissimos neque. Incidunt ullam sunt adipisci, vero cupiditate tenetur. Corrupti
        expedita vitae alias placeat voluptas vero.
      </p>
      <Link to="/">Go back</Link>
    </StyledWrapper>
  </UserPageTemplate>
);

export default DetailsTemplate;
