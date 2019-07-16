import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';

const Articles = () => (
  <GridTemplate pageType="article">
    <>
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
    </>
  </GridTemplate>
);

export default Articles;
