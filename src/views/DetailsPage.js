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
      case routes.note:
        this.setState({ pageType: 'note' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitter' });
        break;
      case routes.article:
        this.setState({ pageType: 'article' });
        break;
      default:
        break;
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <DetailsTemplate pageType={pageType}>
        <h1>{pageType}</h1>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailsPage;
