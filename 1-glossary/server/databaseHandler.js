let { mongoose, Entry } = require('../server/db.js');

module.exports = {
  saveEntry: ({word, definition}) => Entry.create({ word, definition }),

  updateEntry: (_id, {word, definition}) => Entry.update({_id}, {word, definition}),
  
  getEntries: ({page = 0, pageSize = 400}) => Entry.find({}).skip(page * pageSize).limit(pageSize).exec(),

  deleteEntry: (_id) => Entry.deleteOne({_id})
}
