const express = require('express');
const { check } = require('express-validator');
const { createReferralHandler } = require('../controllers/referralController');

const router = express.Router();

router.post('/referrals', [
  check('referrer_email').isEmail().withMessage('Valid referrer email is required'),
  check('referee_email').isEmail().withMessage('Valid referee email is required'),
  check('course_id').isInt().withMessage('Valid course ID is required'),
  check('referral_code').isLength({ min: 6 }).withMessage('Referral code must be at least 6 characters long')
], createReferralHandler);

module.exports = router;
