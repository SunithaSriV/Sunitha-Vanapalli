const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

module.exports = (email, subject, message) => {
  const options = {
    service: "SendGrid",
    auth: {
      user: process.env.SENDGRID_USER,
      pass: process.env.SENDGRID_PASS,
    },
  };

  const client = nodemailer.createTransport(options);

  const emailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject,
    text: message,
  };

  client.sendMail(emailOptions, (err, info) => {
    if (!err) console.log("email sent");
  });
};
