import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Card from 'components/moleculs/Card/Card';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Heading big>Damian</Heading>
        <Heading>Damian</Heading>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
        <Card />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
