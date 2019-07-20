import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import routes from 'routes/index';

class DetailsPage extends Component {
  state = {
    pageType: 'note',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitter' });
        break;
      case routes.note:
        this.setState({ pageType: 'note' });
        break;
      case routes.article:
        this.setState({ pageType: 'article' });
        break;
      default:
        break;
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
