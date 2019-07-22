import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';

const renderArticles = articles => {
  const arr = articles.map(article => (
    <Card
      id={article.id}
      key={article.id}
      cardType="articles"
      title={article.title}
      content={article.content}
      created={article.created}
      articleUrl={article.articleUrl}
    />
  ));
  return arr;
};

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">{renderArticles(articles)}</GridTemplate>
);

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
