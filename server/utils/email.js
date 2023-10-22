const nodemailer = require('nodemailer');
const ejs = require('ejs');

module.exports = class Email {
     constructor(user, url) {
          this.name = user.name;
          this.to = user.email;
          this.url = url;
     }

     transporter() {
          return nodemailer.createTransport({
               service: 'gmail',
               auth: {
                    user: process.env.EMAIL_FROM,
                    pass: process.env.EMAIL_FROM_PASSWORD,
               },
          });
     }

     async send(template, subject) {
          // 1) Render HTML based on a ejs template
          const html = await ejs.renderFile(
               `${__dirname}/../views/${template}.ejs`,
               {
                    name: this.name.split(' ')[0],
                    url: this.url,
                    subject,
                    date: `${new Date().toDateString()}, ${new Date().toLocaleTimeString('en-US')}`, // prettier-ignore
               }
          );

          // 2) Mail options
          const mailOptions = {
               from: `Blossom Blend ${process.env.EMAIL_FROM}`,
               to: this.to,
               subject,
               html,
          };

          // 3) Create transport and send email
          await this.transporter().sendMail(mailOptions);
     }

     async sendWelcome() {
          await this.send('welcome', 'Welcome to Blossom Blend!');
     }

     async sendEmailValidation() {
          await this.send('emailValidation', 'Email Verification');
     }

     async sendLogInAccess() {
          await this.send('login', 'Blossom Login Notification');
     }
};
