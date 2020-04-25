const mongoose = require('mongoose');

//DotENV for key security
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on("error", () => {
  console.log("> error occurred from the database");
});
db.once("open", () => {
  console.log("> successfully opened the database");
});

module.exports = mongoose;