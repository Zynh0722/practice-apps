module.exports.get = (req, res) => {
  res.send('You\'ve been getted');
};

module.exports.post = (req, res) => {
  res.send('You\'ve been posted');
};

module.exports.put = (req, res) => {
  res.send(`You've been putted on ${req.params.entry}`);
};