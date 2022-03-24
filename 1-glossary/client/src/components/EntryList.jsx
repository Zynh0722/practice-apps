import React from 'react';
import Entry from './Entry.jsx';

const EntryList = ({ entries, fDelete, fEdit }) => (
  <div className="entry-list">
    {entries.map((entry, key) => <Entry key={key} index={key} entry={entry} fDelete={fDelete} fEdit={fEdit} />)}
  </div>
);

export default EntryList;