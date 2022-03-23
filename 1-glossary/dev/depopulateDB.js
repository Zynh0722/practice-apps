let { mongoose, Entry } = require('../server/db.js');
let testData = require('./testData.json');

Entry.deleteMany({})
  .then(() => mongoose.connection.close());
