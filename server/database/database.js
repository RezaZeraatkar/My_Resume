/* eslint-disable no-multi-spaces */
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || "development";
// eslint-disable-next-line prettier/prettier
const MongoURI =
  process.env.MONGODBLAB_URI || `mongodb://localhost/mern_${env}`;

module.exports = {
  mongoose,
  MongoURI
};
