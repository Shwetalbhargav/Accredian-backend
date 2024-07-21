const express = require('express');
const { check } = require('express-validator');
const { createReferralHandler } = require('../controllers/referralController');
const { referralValidationRules } = require('../utils/validators');
const { body, validationResult } = require('express-validator');
const { submitReferral } = require('../controllers/referralController');
const router = express.Router();

router.post('/referrals', referralValidationRules(),  [
  check('student_id').isInt().withMessage('Valid student ID is required'),
  check('referrer_id').isInt().withMessage('Valid referrer ID is required'),
  check('referred_student_id').isInt().withMessage('Valid referred student ID is required'),
  check('course_id').isInt().withMessage('Valid course ID is required'),
  check('preferred_start_date').optional().isISO8601().withMessage('Valid date is required'),
  check('previous_experience').isIn(['Yes', 'No']).withMessage('Valid experience value is required'),
  check('consent').isIn(['Yes', 'No']).withMessage('Consent value is required'),
],
(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
},
submitReferral
);

module.exports = router;
