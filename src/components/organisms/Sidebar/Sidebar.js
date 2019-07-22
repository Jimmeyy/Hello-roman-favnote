import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  padding: 30px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
`;

const StyledLogo = styled.p`
  margin: 0 0 60px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 800;
`;

const StyledLogoutWrap = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Sidebar = ({ pageType }) => (
  <StyledSidebar activeColor={pageType}>
    <StyledLogo>Logo</StyledLogo>
    <div>
      <ButtonIcon exact as={NavLink} to="/notes" icon={penIcon} />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
    </div>
    <StyledLogoutWrap>
      <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
    </StyledLogoutWrap>
  </StyledSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
