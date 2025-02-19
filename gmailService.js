const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// OAuth2 Client Configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // Redirect URI
);

// Set refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

// Send Email Function
const sendReferralEmail = async (referrerEmail, refereeEmail, referralCode) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `Your Company <${process.env.GMAIL_USER}>`,
      to: refereeEmail,
      subject: 'You Have Been Referred!',
      html: `<p>Hello,</p>
             <p>You have been referred by ${referrerEmail} to join our platform. Use the referral code <b>${referralCode}</b> to sign up and enjoy exclusive benefits!</p>
             <p>Thank you!</p>`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Referral email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendReferralEmail };
