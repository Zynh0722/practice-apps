let { mongoose, Entry } = require('../server/db.js');

module.exports = {
  saveEntry: ({word, definition}) => Entry.create({ word, definition }),

  updateEntry: (_id, {word, definition}) => Entry.update({_id}, {word, definition}),
  
  getEntries: ({page = 0, pageSize = 10}) => Entry.find({}).skip(page * 10).limit(10).exec()
}
