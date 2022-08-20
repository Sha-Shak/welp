require("dotenv").config();
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//   transporter.verify().then(console.log).catch(console.error);
const sendMail = async (user, org, flag, password='') => {
  const filePath = path.join(__dirname, `../emailAssets/${flag}.html`);
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const emailTemplate = handlebars.compile(source);
  const replacements = {
    userName: user.firstname,
    orgName: org,
    userEmail: user.email,
    userPassword: password
  }
  const emailHtml = emailTemplate(replacements);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: 'hello.welper@gmail.com',
      pass: process.env.EMAIL_PASSWORD 
    }
  });
  const options = {
    from: 'hello.welper@gmail.com',
    to: user.email,
    subject: 'Welcome to Welp!', 
    html: emailHtml
  }
  const res = await transporter.sendMail(options);
  console.log(`Message sent: ${res.messageId}`);
};

module.exports = sendMail;