let { Entry } = require('../server/db.js');
let testData = require('./testData.json');

Entry.insertMany(testData.map(entry => new Entry(entry)))
  .then(res => console.log(res))
  .catch(err => console.error(err));
  