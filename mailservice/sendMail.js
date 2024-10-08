const nodemailer = require("nodemailer");
const path = require('path')
const ejs = require('ejs')
const templatePath = path.join(__dirname, '../views/template.ejs')
// const templatePath = path.join(__dirname, '../views/test.ejs')

const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: 'smtp.gmail.com',
  port: 587, // or 587 for TLS
  // secure: true,
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASS
  }
});

const sendMail = async(to, name) => {
  const data = await ejs.renderFile(templatePath, {name})
  const mailOptions = {
    // from: '"John Doe" example@gmail.com',
    to,
    subject: `Happy Birthday, ${name}! 🎉`,
    text: `Dear ${name},\n\nWishing you a very Happy Birthday! Enjoy your special day!\n\nBest wishes,\nWillowood Chemicals LTD.`,
    html: data
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(`Error: ${error}`);
    }
    console.log(`Email sent to ${name}: ${info.response}`);
  });
};

module.exports = sendMail;
