import React from 'react';

// Dependencies:
import axios from 'axios';

// Components
import EntryList from './EntryList.jsx';
import EntryForm from './EntryForm.jsx';
import EditEntryForm from './EditEntryForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      editingIndex: -1
    }

    this.makeEditForm = this.makeEditForm.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);

    this.fetch();
  }

  fetch() {
    axios.get('/entries')
      .then(result => this.setState({
        entries: result.data
      }));
  }

  deleteEntry(id) {
    axios.delete(`/entries/${id}`)
      .then(result => this.setState({
        entries: this.state.entries.filter(({ _id }) => id !== _id)
      }));
  }

  addEntry(message) {
    axios.post('/entries', message)
      .then(({data}) => this.setState({
        entries: [...this.state.entries, data]
      }));
  }

  makeEditForm(index) {
    this.setState({
      editingIndex: index
    });
  }

  editEntry(message) {
    let {entries, editingIndex} = this.state;
    
    this.setState({
      entries: [
        ...entries.slice(0, editingIndex),
        message,
        ...entries.slice(editingIndex + 1)
      ],
      editingIndex: -1
    });

    axios.put(`/entries/${entries[editingIndex]._id}`, message)
      .then(result => console.log(result));
  }

  render() { 
    let { entries, editingIndex } = this.state;
    return (
    <React.Fragment>
      {(editingIndex >= 0) ? <EditEntryForm submit={this.editEntry} entry={entries[editingIndex]} /> : ''}
      <EntryForm submit={this.addEntry}/>
      <EntryList entries={entries} fDelete={this.deleteEntry} fEdit={this.makeEditForm} />
    </React.Fragment>
  )};
}

export default App;