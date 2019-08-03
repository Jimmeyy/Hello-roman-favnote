import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';
import { fetchItems } from 'actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  renderArticles = articles => {
    const arr = articles.map(article => (
      <Card
        key={article._id}
        id={article._id}
        cardType="articles"
        title={article.title}
        content={article.content}
        created={article.created}
        articleUrl={article.articleUrl}
      />
    ));
    return arr;
  };

  render() {
    const { articles } = this.props;
    return <GridTemplate>{this.renderArticles(articles)}</GridTemplate>;
  }
}

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  fetchArticles: PropTypes.func.isRequired,
};

Articles.defaultProps = {
  articles: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
