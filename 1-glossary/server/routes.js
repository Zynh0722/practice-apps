let { saveEntry, updateEntry, getEntries } = require('./databaseHandler.js');

module.exports.get = (req, res) => {
  getEntries(req.query)
    .then(result => res.send(result));
};

module.exports.post = (req, res) => {
  saveEntry(req.body)
    .then(entries => entries)
    .catch(err => err)
    .then(result => res.send(result));
};

module.exports.put = (req, res) => {
  updateEntry(req.params.entry, req.body)
    .then(entries => entries)
    .catch(err => err)
    .then(result => res.send(result));
};