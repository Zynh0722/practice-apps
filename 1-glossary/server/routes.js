let {saveEntry, updateEntry} = require('./databaseHandler.js');

module.exports.get = (req, res) => {
  res.send('You\'ve been getted');
};

module.exports.post = (req, res) => {
  let { word, definition } = req.body;
  saveEntry(word, definition)
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

module.exports.put = (req, res) => {
  res.send(`You've been putted on ${req.params.entry}`);
};