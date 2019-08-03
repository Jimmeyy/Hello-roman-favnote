import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <GridTemplate>
        {notes.map(note => (
          <Card
            key={note._id}
            id={note._id}
            cardType="notes"
            title={note.title}
            content={note.content}
            created={note.created}
          />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  fetchNotes: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
