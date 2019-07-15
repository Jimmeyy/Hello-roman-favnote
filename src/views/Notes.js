import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/moleculs/Card/Card';

const Notes = () => (
  <UserPageTemplate>
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
  </UserPageTemplate>
);

export default Notes;
