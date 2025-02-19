const { createReferral } = require('../models/referral');
const { validationResult } = require('express-validator');

const createReferralHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const referral = await createReferral(req.body);
    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReferralHandler };
