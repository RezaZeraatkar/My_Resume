const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || "development";
const MongoURI = process.env.MongoURI || `mongodb://localhost/mern_${env}`;

module.exports = {
  mongoose,
  MongoURI
};
