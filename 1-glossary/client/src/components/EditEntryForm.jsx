import React from 'react';
import PropTypes from 'prop-types';

class EditEntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: props.entry.word,
      definition: props.entry.definition
    };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefChange = this.handleDefChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleWordChange(e) {
    this.setState({
      word: e.target.value
    });
  }

  handleDefChange(e) {
    this.setState({
      definition: e.target.value
    });
    e.preventDefault();
  }

  handleSubmit(e, cb) { 
    cb({
      ...this.props.entry,
      ...this.state
    });
    e.preventDefault();
  }

  render() { return (
    <form className="edit-entry-form" onSubmit={(e) => this.handleSubmit(e, this.props.submit)}>
      <label className="input-label">
        Word:
        <input className="edit-entry-input" type="text" name="name" onChange={this.handleWordChange} defaultValue={this.state.word} />
      </label>
      <label className="edit-entry-textarea">
        definition:
        <textarea className="edit-entry-textarea" type="text" name="name" onChange={this.handleDefChange} defaultValue={this.state.definition} />
      </label>
      <input id="btn" type="submit" value="Submit" />
    </form>
  )};
};

EditEntryForm.propTypes = {
  entry: PropTypes.shape({
    word: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired
  }),
  submit: PropTypes.func.isRequired
};

export default EditEntryForm;