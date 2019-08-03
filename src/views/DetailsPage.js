import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: null,
  };

  componentDidMount() {
    const { activeItem } = this.props;
    if (activeItem) {
      this.setState({ activeItem });
    } else {
      const { match } = this.props;
      const { id } = match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    if (activeItem) {
      return (
        <DetailsTemplate
          title={activeItem.title}
          content={activeItem.content}
          articleUrl={activeItem.articleUrl}
          twitterName={activeItem.twitterName}
        />
      );
    }

    return <DetailsTemplate />;
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

DetailsPage.defaultProps = {
  activeItem: null,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContent]) {
    return {
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }

  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
