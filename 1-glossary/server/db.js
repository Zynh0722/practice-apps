require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let entrySchema = mongoose.Schema({
  word: String,
  definition: String
});

let Entry = mongoose.model('Entry', entrySchema);

module.exports.Entry = Entry;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
