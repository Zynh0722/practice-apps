let { mongoose, Entry } = require('../server/db.js');

module.exports.saveEntry = (word, definition) => {
  return Entry.create({ word, definition });
}

module.exports.updateEntry = (name, definition, id) => {}