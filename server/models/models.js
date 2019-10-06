const mongoose = require('mongoose');

const contactMeSchema = new mongoose.Schema({
  senderName: {
    type: String,
  },
  senderemail: {
    type: String,
    required: true,
  },
  senderSubject: {
    type: String,
  },
  senderMessage: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('ContactMe', contactMeSchema);
