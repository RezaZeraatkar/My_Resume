const router = require('express').Router();
const ContactModel = require('../models/models');
// const emailMe = require('../utils/mail');

router.post('/email', (req, res) => {
  // Get User Data
  const { senderName, senderemail, senderSubject, senderMessage } = req.body;
  const contactFormData = {
    senderName,
    senderemail,
    senderSubject,
    senderMessage,
  };
  // Store to MongoDB
  const Contactmdl = new ContactModel(contactFormData);
  Contactmdl.save((err, contactData) => {
    if (err) res.send(false);
    else res.send(true);
  });
});

router.get('/loaded', (req, res) => {
  res.send(false);
});

module.exports = router;
