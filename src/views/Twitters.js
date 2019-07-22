import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';

const Twitters = props => {
  const { twitters } = props;

  return (
    <GridTemplate pageType="twitters">
      {twitters.map(twitter => (
        <Card
          id={twitter.id}
          key={twitter.id}
          cardType="twitters"
          title={twitter.title}
          content={twitter.content}
          created={twitter.created}
          twitterName={twitter.twitterName}
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
