require("dotenv").config();
const nodemailer = require('nodemailer');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'hello.welper@gmail.com',
    pass: process.env.EMAIL_PASSWORD 
    //pass : welper123123
  }
});
  
const options = {
  from: 'hello.welper@gmail.com',
  to: '',
  subject: 'Welcome to Welp!', 
  text: '' // probably replace with html
  // html: 
}

//   transporter.verify().then(console.log).catch(console.error);
const sendMail = (userEmail, userType) => {
  const targetText = userType == 'admin' ? 
    'Thanks for signing up. Welcome to Welp!' :
    'Your company admin has added you. Welcome to Welp!';

  options.to = userEmail;
  options.text = targetText;
  
  transporter.sendMail(options, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
};

module.exports = sendMail;