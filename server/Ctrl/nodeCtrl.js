require('dotenv').config();
const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

let transporter = nodemailer.createTransport(
  ses({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  })
);

const requestEmail = (req, res) => {
  const { id, contactName, organizationName } = req.body;

  transporter
    .sendMail({
      from: 'convoke.meet@gmail.com',
      to: 'DBiles@swbts.edu',
      subject: `You have a new Speaker Request from ${contactName}.`,
      text:
        `Hey Deron,` +
        '\n' +
        `A speaker request form has been sent to you from ${contactName} on behalf of ${organizationName}.` +
        '\n' +
        `Click the following link to view the request details.` +
        '\n' +
        `http://localhost:3000/requests/${id}`
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = {
  requestEmail
};
