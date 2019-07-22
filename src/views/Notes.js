import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/moleculs/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map(note => (
      <Card
        id={note.id}
        key={note.id}
        cardType="notes"
        title={note.title}
        content={note.content}
        created={note.created}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
