// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');

function emailMe({ senderName, senderemail, senderSubject, senderMessage }) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: 'r.zeraatkar1992@gmail.com',
    to: 'r.zeraatkar1992@gmail.com',
    subject: 'Test',
    text: 'Test Message',
    html: `from <strong>${'senderName'}</strong> with email address <strong>${'senderemail'}</strong>`,
  };

  sgMail.send(msg);
}

module.exports = emailMe;
