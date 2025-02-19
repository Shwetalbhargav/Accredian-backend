const { createReferral } = require('../models/referral');
const { validationResult } = require('express-validator');
const { sendReferralEmail } = require('../services/gmailService');

const createReferralHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const referral = await createReferral(req.body);

    // Send Email Notification
    await sendReferralEmail(referral.referrer_email, referral.referee_email, referral.referral_code);

    res.status(201).json({ message: 'Referral created and email sent successfully!', referral });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReferralHandler };
