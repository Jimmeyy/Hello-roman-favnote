import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.note};
`;

storiesOf('Atoms/ButtonIcon', module)
  .add('NormalBulb', () => (
    <YellowBackground>
      <ButtonIcon icon={bulbIcon} />
    </YellowBackground>
  ))
  .add('NormalLogout', () => (
    <YellowBackground>
      <ButtonIcon icon={logoutIcon} />
    </YellowBackground>
  ))
  .add('NormalMagnifier', () => (
    <YellowBackground>
      <ButtonIcon icon={magnifierIcon} />
    </YellowBackground>
  ))
  .add('NormalPen', () => (
    <YellowBackground>
      <ButtonIcon icon={penIcon} />
    </YellowBackground>
  ))
  .add('NormalPlus', () => (
    <YellowBackground>
      <ButtonIcon icon={plusIcon} />
    </YellowBackground>
  ))
  .add('NormalTwitter', () => (
    <YellowBackground>
      <ButtonIcon icon={twitterIcon} />
    </YellowBackground>
  ));
