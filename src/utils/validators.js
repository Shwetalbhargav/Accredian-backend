const { check } = require('express-validator');

const referralValidationRules = () => {
  return [
    check('student_id').isInt().withMessage('Valid student ID is required'),
    check('referrer_id').isInt().withMessage('Valid referrer ID is required'),
    check('referred_student_id').isInt().withMessage('Valid referred student ID is required'),
    check('course_id').isInt().withMessage('Valid course ID is required'),
    check('preferred_start_date').optional().isISO8601().withMessage('Valid date is required'),
    check('previous_experience').isIn(['Yes', 'No']).withMessage('Valid experience value is required'),
    check('specific_experience').optional().isString().withMessage('Specific experience must be a string'),
    check('preferred_language').optional().isString().withMessage('Preferred language must be a string'),
    check('specific_requirements_or_goals').optional().isString().withMessage('Specific requirements or goals must be a string'),
    check('consent').isIn(['Yes', 'No']).withMessage('Consent value is required'),
    check('referrer_signature').optional().isString().withMessage('Referrer signature must be a string'),
    check('referral_date').optional().isISO8601().withMessage('Valid referral date is required'),
    check('referral_received_by').optional().isString().withMessage('Referral received by must be a string'),
    check('follow_up_action_taken').optional().isString().withMessage('Follow-up action taken must be a string'),
    check('comments').optional().isString().withMessage('Comments must be a string'),
  ];
};

module.exports = {
  referralValidationRules,
};
