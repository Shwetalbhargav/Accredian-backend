const { createReferral } = require('../models/referral');
const { validationResult } = require('express-validator');
const { sendReferralEmail } = require('../services/emailService');

const createReferralHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const referral = await createReferral(req.body);
    await sendReferralEmail(referral);
    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReferralHandler,
};
