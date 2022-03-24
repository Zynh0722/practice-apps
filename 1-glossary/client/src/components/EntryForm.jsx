import React from 'react';
import PropTypes from 'prop-types';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: ''
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
  }

  handleSubmit(e, cb) { 
    cb(this.state);
    e.preventDefault();
  }

  render() { return (
    <form className="add-entry-form" onSubmit={(e) => this.handleSubmit(e, this.props.submit)}>
      <label>
        Word:
        <input type="text" name="name" onChange={this.handleWordChange} />
      </label>
      <label>
        definition:
        <textarea type="text" name="name" onChange={this.handleDefChange} />
      </label>
      <input id="btn" type="submit" value="Submit" />
    </form>
  )};
};

EntryForm.propTypes = {
  submit: PropTypes.func.isRequired
};  

export default EntryForm;