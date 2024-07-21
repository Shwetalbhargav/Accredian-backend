const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_CLIENT_ID,
    pass: process.env.GOOGLE_CLIENT_SECRET,
  },
});

const sendReferralEmail = async (referral) => {
  const mailOptions = {
    from: process.env.GOOGLE_CLIENT_ID,
    to: referral.referrer.email,
    subject: 'Referral Received',
    text: `Referral Details:
      Referrer: ${referral.referrer.name}
      Referred Student: ${referral.referredStudent.name}
      Course: ${referral.course.course_name}
      Start Date: ${referral.preferred_start_date}
      Previous Experience: ${referral.previous_experience}
      Consent: ${referral.consent}
      Comments: ${referral.comments}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendReferralEmail,
};
