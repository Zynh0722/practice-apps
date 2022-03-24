import React from 'react';
import Entry from './Entry.jsx';

const EntryList = ({ entries, fDelete, fEdit, query }) => (
  <div className="entry-list">
    {entries.map((entry, key) => {
      if (query === '' ||
          entry.word.indexOf(query) !== -1 ||
          entry.definition.indexOf(query) !== -1) {
        return (<Entry key={key} index={key} entry={entry} fDelete={fDelete} fEdit={fEdit} />);
      }
    })}
  </div>
);

export default EntryList;