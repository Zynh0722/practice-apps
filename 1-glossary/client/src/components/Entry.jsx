import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ entry, fDelete, fEdit, index }) => (
  <div className="entry">
    <div className="entry-buttons">
      <button onClick={() => fEdit(index)}> Edit </button>
      <button onClick={() => fDelete(entry._id)}> Delete </button>
    </div>
    <div className="entry-text">
      <div className="entry-name">{entry.word}</div>
      <div className="entry-desc">{entry.definition}</div>
    </div>
  </div>
);

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  fDelete: PropTypes.func.isRequired,
  fEdit: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};  

export default Entry;